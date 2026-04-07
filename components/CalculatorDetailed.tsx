"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Thermometer, Flame, Snowflake, Zap, Droplets, Droplet,
  Wind, ArrowDownToLine, Waves, DoorOpen, Shield,
  PlugZap, HeartPulse, Lightbulb, Monitor, ChevronDown,
  ChevronRight, ArrowRight, ArrowLeft, Check, Info,
  CookingPot,
} from "lucide-react";

// ---------- ICON MAP ----------
const ICONS: Record<string, React.ElementType> = {
  Thermometer, Flame, Snowflake, Zap, Droplets, Droplet,
  Wind, ArrowDownToLine, Waves, DoorOpen, Shield,
  PlugZap, HeartPulse, Lightbulb, Monitor, CookingPot,
};

// ---------- DATA ----------
interface ApplianceOption {
  label: string;
  value: string;
  runWatts: number;
  startWatts: number;
}

interface ApplianceDef {
  label: string;
  category: string;
  icon: string;
  options?: ApplianceOption[];
  runWatts?: number;
  startWatts?: number;
  isCheckbox?: boolean;
  defaultChecked?: boolean;
  defaultSelected?: boolean;
  defaultOption?: string;
  alwaysOn?: boolean;
}

const APPLIANCES: Record<string, ApplianceDef> = {
  central_ac: {
    label: "Central Air Conditioning", category: "hvac", icon: "Thermometer",
    defaultSelected: true, defaultOption: "3ton",
    options: [
      { label: "No central AC", value: "none", runWatts: 0, startWatts: 0 },
      { label: "2 ton (small home)", value: "2ton", runWatts: 2500, startWatts: 3500 },
      { label: "3 ton (average home)", value: "3ton", runWatts: 3500, startWatts: 4500 },
      { label: "4 ton (large home)", value: "4ton", runWatts: 4200, startWatts: 5500 },
      { label: "5 ton (very large)", value: "5ton", runWatts: 5000, startWatts: 6500 },
    ],
  },
  heating: {
    label: "Heating System", category: "hvac", icon: "Flame",
    defaultSelected: true, defaultOption: "gas",
    options: [
      { label: "Gas furnace (blower only)", value: "gas", runWatts: 800, startWatts: 1300 },
      { label: "Electric furnace", value: "electric", runWatts: 5000, startWatts: 5000 },
      { label: "Heat pump", value: "heatpump", runWatts: 4700, startWatts: 6000 },
      { label: "No central heating", value: "none", runWatts: 0, startWatts: 0 },
    ],
  },
  refrigerator: { label: "Refrigerator", category: "kitchen", icon: "Snowflake", isCheckbox: true, defaultChecked: true, alwaysOn: true, runWatts: 700, startWatts: 1200 },
  freezer: { label: "Standalone Freezer", category: "kitchen", icon: "Snowflake", isCheckbox: true, defaultChecked: false, runWatts: 500, startWatts: 1000 },
  electric_range: { label: "Electric Range / Oven", category: "kitchen", icon: "CookingPot", isCheckbox: true, defaultChecked: false, runWatts: 3000, startWatts: 3000 },
  microwave: { label: "Microwave", category: "kitchen", icon: "Zap", isCheckbox: true, defaultChecked: true, runWatts: 1200, startWatts: 1200 },
  dishwasher: { label: "Dishwasher", category: "kitchen", icon: "Droplets", isCheckbox: true, defaultChecked: false, runWatts: 1800, startWatts: 1800 },
  water_heater: {
    label: "Water Heater", category: "water", icon: "Droplet",
    defaultSelected: true, defaultOption: "gas",
    options: [
      { label: "Gas water heater", value: "gas", runWatts: 0, startWatts: 0 },
      { label: "Electric tank (standard)", value: "electric", runWatts: 4500, startWatts: 4500 },
      { label: "Tankless electric", value: "tankless", runWatts: 6000, startWatts: 6000 },
      { label: "Not included", value: "none", runWatts: 0, startWatts: 0 },
    ],
  },
  washer: { label: "Washing Machine", category: "water", icon: "Waves", isCheckbox: true, defaultChecked: false, runWatts: 500, startWatts: 1200 },
  dryer: {
    label: "Clothes Dryer", category: "water", icon: "Wind",
    defaultSelected: false, defaultOption: "none",
    options: [
      { label: "Electric dryer", value: "electric", runWatts: 5000, startWatts: 6000 },
      { label: "Gas dryer", value: "gas", runWatts: 700, startWatts: 1800 },
      { label: "Not included", value: "none", runWatts: 0, startWatts: 0 },
    ],
  },
  sump_pump: { label: "Sump Pump", category: "systems", icon: "ArrowDownToLine", isCheckbox: true, defaultChecked: false, runWatts: 800, startWatts: 1500 },
  well_pump: { label: "Well Pump", category: "systems", icon: "Waves", isCheckbox: true, defaultChecked: false, runWatts: 1000, startWatts: 1500 },
  garage_door: { label: "Garage Door Opener", category: "systems", icon: "DoorOpen", isCheckbox: true, defaultChecked: false, runWatts: 750, startWatts: 1400 },
  security_system: { label: "Security System", category: "systems", icon: "Shield", isCheckbox: true, defaultChecked: true, runWatts: 200, startWatts: 200 },
  pool_pump: { label: "Pool / Hot Tub Pump", category: "extras", icon: "Waves", isCheckbox: true, defaultChecked: false, runWatts: 2500, startWatts: 3500 },
  ev_charger: { label: "EV Charger (Level 2)", category: "extras", icon: "PlugZap", isCheckbox: true, defaultChecked: false, runWatts: 7200, startWatts: 7200 },
  medical: { label: "Medical Equipment (CPAP, oxygen)", category: "extras", icon: "HeartPulse", isCheckbox: true, defaultChecked: false, runWatts: 500, startWatts: 500 },
  home_office: { label: "Home Office (computer, monitors)", category: "extras", icon: "Monitor", isCheckbox: true, defaultChecked: false, runWatts: 500, startWatts: 500 },
  lights: { label: "Lights, WiFi, TV & Phone Chargers", category: "basics", icon: "Lightbulb", isCheckbox: true, defaultChecked: true, alwaysOn: true, runWatts: 1000, startWatts: 1000 },
};

const CATEGORIES = [
  { key: "hvac", label: "HVAC" },
  { key: "kitchen", label: "Kitchen" },
  { key: "water", label: "Water & Laundry" },
  { key: "systems", label: "Home Systems" },
  { key: "extras", label: "Extras" },
  { key: "basics", label: "Always Included" },
];

const GENERATOR_SIZES = [
  { kw: 7.5, type: "air-cooled", equipLow: 2000, equipHigh: 3000 },
  { kw: 10, type: "air-cooled", equipLow: 2500, equipHigh: 3800 },
  { kw: 14, type: "air-cooled", equipLow: 3200, equipHigh: 4500 },
  { kw: 16, type: "air-cooled", equipLow: 3800, equipHigh: 5200 },
  { kw: 20, type: "air-cooled", equipLow: 4500, equipHigh: 6000 },
  { kw: 22, type: "air-cooled", equipLow: 5000, equipHigh: 7000 },
  { kw: 24, type: "air-cooled", equipLow: 5500, equipHigh: 8000 },
  { kw: 26, type: "air-cooled", equipLow: 6500, equipHigh: 10000 },
  { kw: 30, type: "liquid-cooled", equipLow: 9000, equipHigh: 13000 },
  { kw: 36, type: "liquid-cooled", equipLow: 11000, equipHigh: 16000 },
  { kw: 48, type: "liquid-cooled", equipLow: 14000, equipHigh: 22000 },
];

const STATE_MULTIPLIER: Record<string, number> = {
  florida: 1.0, texas: 0.95, louisiana: 0.90, "south-carolina": 0.95,
  "north-carolina": 0.95, georgia: 0.95, california: 1.55,
  michigan: 0.95, "new-york": 1.35, tennessee: 0.90, default: 1.0,
};

const INSTALL_COSTS = {
  labor: [1500, 3000], transfer: [800, 2000], pad: [500, 1200],
  gas: [500, 1500], permits: [50, 500],
};

const FUEL_PER_HOUR: Record<string, [number, number]> = {
  "natural-gas": [2, 4], propane: [3, 5], diesel: [4, 6],
};

const MODELS: Record<string, { generac: string; kohler: string; cummins: string }> = {
  "7.5": { generac: "Guardian 7.5kW", kohler: "8RESV", cummins: "—" },
  "10": { generac: "Guardian 10kW", kohler: "10RESV", cummins: "Quiet Connect 10kW" },
  "14": { generac: "Guardian 14kW", kohler: "14RCAL", cummins: "Quiet Connect 13kW" },
  "16": { generac: "Guardian 16kW", kohler: "—", cummins: "—" },
  "20": { generac: "Guardian 20kW", kohler: "20RCAL", cummins: "Quiet Connect 20kW" },
  "22": { generac: "Guardian 22kW", kohler: "—", cummins: "—" },
  "24": { generac: "Guardian 24kW", kohler: "24RCAL", cummins: "Quiet Connect 25kW" },
  "26": { generac: "Guardian 26kW", kohler: "26RCAL", cummins: "—" },
  "30": { generac: "Protector 30kW", kohler: "30RCAL", cummins: "Quiet Connect 30kW" },
  "36": { generac: "Protector 36kW", kohler: "38RCAL", cummins: "Quiet Connect 36kW" },
  "48": { generac: "Protector 48kW", kohler: "48RCAL", cummins: "Quiet Connect 40kW" },
};

const US_STATES = [
  { label: "Alabama", value: "alabama" }, { label: "Alaska", value: "alaska" },
  { label: "Arizona", value: "arizona" }, { label: "Arkansas", value: "arkansas" },
  { label: "California", value: "california" }, { label: "Colorado", value: "colorado" },
  { label: "Connecticut", value: "connecticut" }, { label: "Delaware", value: "delaware" },
  { label: "Florida", value: "florida" }, { label: "Georgia", value: "georgia" },
  { label: "Hawaii", value: "hawaii" }, { label: "Idaho", value: "idaho" },
  { label: "Illinois", value: "illinois" }, { label: "Indiana", value: "indiana" },
  { label: "Iowa", value: "iowa" }, { label: "Kansas", value: "kansas" },
  { label: "Kentucky", value: "kentucky" }, { label: "Louisiana", value: "louisiana" },
  { label: "Maine", value: "maine" }, { label: "Maryland", value: "maryland" },
  { label: "Massachusetts", value: "massachusetts" }, { label: "Michigan", value: "michigan" },
  { label: "Minnesota", value: "minnesota" }, { label: "Mississippi", value: "mississippi" },
  { label: "Missouri", value: "missouri" }, { label: "Montana", value: "montana" },
  { label: "Nebraska", value: "nebraska" }, { label: "Nevada", value: "nevada" },
  { label: "New Hampshire", value: "new-hampshire" }, { label: "New Jersey", value: "new-jersey" },
  { label: "New Mexico", value: "new-mexico" }, { label: "New York", value: "new-york" },
  { label: "North Carolina", value: "north-carolina" }, { label: "North Dakota", value: "north-dakota" },
  { label: "Ohio", value: "ohio" }, { label: "Oklahoma", value: "oklahoma" },
  { label: "Oregon", value: "oregon" }, { label: "Pennsylvania", value: "pennsylvania" },
  { label: "Rhode Island", value: "rhode-island" }, { label: "South Carolina", value: "south-carolina" },
  { label: "South Dakota", value: "south-dakota" }, { label: "Tennessee", value: "tennessee" },
  { label: "Texas", value: "texas" }, { label: "Utah", value: "utah" },
  { label: "Vermont", value: "vermont" }, { label: "Virginia", value: "virginia" },
  { label: "Washington", value: "washington" }, { label: "West Virginia", value: "west-virginia" },
  { label: "Wisconsin", value: "wisconsin" }, { label: "Wyoming", value: "wyoming" },
];

// ---------- HELPERS ----------
function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<number | null>(null);
  useEffect(() => {
    const start = display;
    const diff = value - start;
    const duration = 500;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(start + diff * eased));
      if (progress < 1) ref.current = requestAnimationFrame(animate);
    };
    ref.current = requestAnimationFrame(animate);
    return () => { if (ref.current) cancelAnimationFrame(ref.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return <>{prefix}{display.toLocaleString()}{suffix}</>;
}

function Tooltip({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  return (
    <span className="relative inline-block ml-1">
      <button onClick={() => setOpen(!open)} className="text-[var(--color-text-light)] hover:text-[var(--color-primary-cyan)]" aria-label="Info">
        <Info size={14} />
      </button>
      {open && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 rounded-lg bg-[#0F172A] p-3 text-xs text-white shadow-lg z-50">
          {text}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#0F172A]" />
        </span>
      )}
    </span>
  );
}

// ---------- SELECTION STATE ----------
interface SelectionState {
  checked: boolean;
  optionValue?: string;
  runWatts: number;
  startWatts: number;
}

function buildInitialSelections(): Record<string, SelectionState> {
  const out: Record<string, SelectionState> = {};
  for (const [key, a] of Object.entries(APPLIANCES)) {
    if (a.isCheckbox) {
      out[key] = { checked: a.defaultChecked ?? false, runWatts: a.defaultChecked ? (a.runWatts ?? 0) : 0, startWatts: a.defaultChecked ? (a.startWatts ?? 0) : 0 };
    } else if (a.options) {
      const opt = a.options.find((o) => o.value === a.defaultOption) ?? a.options[0];
      out[key] = { checked: a.defaultSelected ?? false, optionValue: opt.value, runWatts: opt.runWatts, startWatts: opt.startWatts };
    }
  }
  return out;
}

// ---------- MAIN COMPONENT ----------
export default function CalculatorDetailed() {
  const [step, setStep] = useState(1);
  const [homeSize, setHomeSize] = useState(2000);
  const [state, setState] = useState("florida");
  const [city, setCity] = useState("");
  const [fuel, setFuel] = useState("natural-gas");
  const [selections, setSelections] = useState<Record<string, SelectionState>>(buildInitialSelections);
  const [openCats, setOpenCats] = useState<Record<string, boolean>>({ hvac: true, kitchen: true, water: true, systems: true, extras: true, basics: true });

  const toggleCheck = (key: string) => {
    const a = APPLIANCES[key];
    if (a.alwaysOn) return;
    setSelections((prev) => {
      const next = { ...prev };
      const was = next[key].checked;
      next[key] = { ...next[key], checked: !was, runWatts: !was ? (a.runWatts ?? 0) : 0, startWatts: !was ? (a.startWatts ?? 0) : 0 };
      return next;
    });
  };

  const changeOption = (key: string, value: string) => {
    const a = APPLIANCES[key];
    const opt = a.options?.find((o) => o.value === value);
    if (!opt) return;
    setSelections((prev) => ({
      ...prev,
      [key]: { checked: true, optionValue: value, runWatts: opt.runWatts, startWatts: opt.startWatts },
    }));
  };

  const runningTotal = useMemo(() => Object.values(selections).reduce((s, v) => s + (v.checked ? v.runWatts : 0), 0), [selections]);
  const peakTotal = useMemo(() => {
    let running = 0;
    let maxSurge = 0;
    Object.values(selections).forEach((v) => {
      if (!v.checked) return;
      running += v.runWatts;
      const surge = v.startWatts - v.runWatts;
      if (surge > maxSurge) maxSurge = surge;
    });
    return running + maxSurge;
  }, [selections]);

  const results = useMemo(() => {
    const required = peakTotal * 1.25;
    const requiredKw = required / 1000;
    const gen = GENERATOR_SIZES.find((g) => g.kw >= requiredKw) || GENERATOR_SIZES[GENERATOR_SIZES.length - 1];
    const mult = STATE_MULTIPLIER[state] || STATE_MULTIPLIER.default;

    const installLow = Math.round((INSTALL_COSTS.labor[0] + INSTALL_COSTS.transfer[0] + INSTALL_COSTS.pad[0] + INSTALL_COSTS.gas[0] + INSTALL_COSTS.permits[0]) * mult);
    const installHigh = Math.round((INSTALL_COSTS.labor[1] + INSTALL_COSTS.transfer[1] + INSTALL_COSTS.pad[1] + INSTALL_COSTS.gas[1] + INSTALL_COSTS.permits[1]) * mult);
    const totalLow = gen.equipLow + installLow;
    const totalHigh = gen.equipHigh + installHigh;
    const cap = Math.round((runningTotal / (gen.kw * 1000)) * 100);
    const fuelRate = FUEL_PER_HOUR[fuel] || FUEL_PER_HOUR["natural-gas"];

    const breakdown = Object.entries(selections)
      .filter(([, v]) => v.checked && v.runWatts > 0)
      .map(([k, v]) => ({ label: APPLIANCES[k].label, runWatts: v.runWatts }))
      .sort((a, b) => b.runWatts - a.runWatts);

    return {
      gen, required: Math.round(required), capacityPct: cap, headroomPct: 100 - cap,
      costs: {
        totalLow, totalHigh,
        equipLow: gen.equipLow, equipHigh: gen.equipHigh,
        laborLow: Math.round(INSTALL_COSTS.labor[0] * mult), laborHigh: Math.round(INSTALL_COSTS.labor[1] * mult),
        transferLow: Math.round(INSTALL_COSTS.transfer[0] * mult), transferHigh: Math.round(INSTALL_COSTS.transfer[1] * mult),
        padLow: Math.round(INSTALL_COSTS.pad[0] * mult), padHigh: Math.round(INSTALL_COSTS.pad[1] * mult),
        gasLow: Math.round(INSTALL_COSTS.gas[0] * mult), gasHigh: Math.round(INSTALL_COSTS.gas[1] * mult),
        permitsLow: Math.round(INSTALL_COSTS.permits[0] * mult), permitsHigh: Math.round(INSTALL_COSTS.permits[1] * mult),
      },
      monthly: Math.round((totalLow + totalHigh) / 2 / 120),
      fuelPerDay: { low: fuelRate[0] * 12, high: fuelRate[1] * 12 },
      models: MODELS[String(gen.kw)] || null,
      breakdown,
    };
  }, [peakTotal, runningTotal, state, fuel, selections]);

  const applianceCount = Object.values(selections).filter((v) => v.checked && v.runWatts > 0).length;
  const stateLabel = US_STATES.find((s) => s.value === state)?.label || state;

  const inputClass = "w-full rounded-lg border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-text-dark)] focus:border-[var(--color-primary-cyan)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-cyan)]/20";

  // ---------- RENDER ----------
  return (
    <div className="mx-auto max-w-3xl">
      {/* Progress bar */}
      <div className="flex items-center gap-2 mb-8">
        {[
          { n: 1, label: "Your Home" },
          { n: 2, label: "Appliances" },
          { n: 3, label: "Results" },
        ].map(({ n, label }, i) => (
          <div key={n} className="flex items-center gap-2 flex-1">
            <button
              onClick={() => n < step && setStep(n)}
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all ${
                n < step ? "bg-[var(--color-success)] text-white" :
                n === step ? "bg-gradient-to-r from-[var(--color-primary-cyan)] to-[var(--color-primary-mint)] text-white" :
                "bg-gray-200 text-gray-500"
              }`}
            >
              {n < step ? <Check size={14} /> : n}
            </button>
            <span className={`text-xs font-medium hidden sm:inline ${n === step ? "text-[var(--color-text-dark)]" : "text-[var(--color-text-light)]"}`}>
              {label}
            </span>
            {i < 2 && <div className={`h-0.5 flex-1 rounded ${n < step ? "bg-[var(--color-success)]" : "bg-gray-200"}`} />}
          </div>
        ))}
      </div>

      {/* STEP 1 */}
      {step === 1 && (
        <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold text-[var(--color-text-dark)]">Tell us about your home</h2>
          <div className="mt-6 space-y-5">
            <div>
              <div className="flex justify-between">
                <label className="text-sm font-medium text-[var(--color-text-dark)]">Home Size</label>
                <span className="text-sm font-semibold text-[var(--color-primary-cyan)]">{homeSize.toLocaleString()} sq ft</span>
              </div>
              <input type="range" min={800} max={6000} step={100} value={homeSize} onChange={(e) => setHomeSize(+e.target.value)} className="mt-2 w-full accent-[var(--color-primary-cyan)]" />
              <div className="flex justify-between text-xs text-[var(--color-text-light)]"><span>800</span><span>6,000</span></div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-[var(--color-text-dark)]">Your State</label>
              <select value={state} onChange={(e) => setState(e.target.value)} className={inputClass}>
                {US_STATES.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-[var(--color-text-dark)]">City or ZIP (optional)</label>
              <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="e.g. Miami or 33101" className={inputClass} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-[var(--color-text-dark)]">Fuel Type</label>
              <select value={fuel} onChange={(e) => setFuel(e.target.value)} className={inputClass}>
                <option value="natural-gas">Natural Gas</option>
                <option value="propane">Propane</option>
                <option value="diesel">Diesel</option>
              </select>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <button onClick={() => setStep(2)} className="btn-gradient inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm">
              Next: Select Appliances <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold text-[var(--color-text-dark)]">Select your appliances</h2>
          <p className="mt-1 text-sm text-[var(--color-text-light)]">
            Check everything you want to power during an outage.
          </p>

          <div className="mt-6 space-y-4">
            {CATEGORIES.map((cat) => {
              const items = Object.entries(APPLIANCES).filter(([, a]) => a.category === cat.key);
              if (items.length === 0) return null;
              const isOpen = openCats[cat.key];

              return (
                <div key={cat.key} className="rounded-xl border border-[var(--color-border)]">
                  <button
                    onClick={() => setOpenCats((p) => ({ ...p, [cat.key]: !p[cat.key] }))}
                    className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-[var(--color-text-dark)]"
                  >
                    {cat.label}
                    {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  </button>
                  {isOpen && (
                    <div className="border-t border-[var(--color-border)] divide-y divide-[var(--color-border)]">
                      {items.map(([key, a]) => {
                        const Icon = ICONS[a.icon] || Zap;
                        const sel = selections[key];
                        if (a.isCheckbox) {
                          return (
                            <label key={key} className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-[var(--color-bg-light)] transition ${a.alwaysOn ? "opacity-70" : ""}`}>
                              <input type="checkbox" checked={sel.checked} onChange={() => toggleCheck(key)} disabled={a.alwaysOn} className="rounded accent-[var(--color-primary-cyan)]" />
                              <Icon size={16} className="text-[var(--color-primary-cyan)] shrink-0" />
                              <span className="flex-1 text-sm text-[var(--color-text-dark)]">{a.label}</span>
                              {sel.checked && (
                                <span className="text-xs text-[var(--color-text-light)]">
                                  {a.runWatts?.toLocaleString()}W
                                </span>
                              )}
                            </label>
                          );
                        }
                        return (
                          <div key={key} className="px-4 py-3">
                            <div className="flex items-center gap-2 mb-2">
                              <Icon size={16} className="text-[var(--color-primary-cyan)]" />
                              <span className="text-sm font-medium text-[var(--color-text-dark)]">{a.label}</span>
                            </div>
                            <select value={sel.optionValue || ""} onChange={(e) => changeOption(key, e.target.value)} className={`${inputClass} text-xs`}>
                              {a.options?.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                            </select>
                            {sel.runWatts > 0 && (
                              <p className="mt-1 text-xs text-[var(--color-text-light)]">
                                {sel.runWatts.toLocaleString()}W running / {sel.startWatts.toLocaleString()}W starting
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Running total */}
          <div className="mt-6 rounded-xl bg-[var(--color-bg-light)] border border-[var(--color-border)] p-4 text-center">
            <p className="text-sm text-[var(--color-text-body)]">
              Running total: <strong className="text-[var(--color-text-dark)]">{runningTotal.toLocaleString()}W</strong> running
              <Tooltip text="Running watts = continuous power draw when all selected appliances are operating normally." />
              {" / "}
              <strong className="text-[var(--color-text-dark)]">{peakTotal.toLocaleString()}W</strong> peak
              <Tooltip text="Peak watts = running watts + the largest single starting surge. This is what your generator must handle." />
            </p>
          </div>

          <div className="mt-6 flex justify-between">
            <button onClick={() => setStep(1)} className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--color-border)] px-5 py-3 text-sm text-[var(--color-text-body)] hover:bg-[var(--color-bg-light)]">
              <ArrowLeft size={16} /> Back
            </button>
            <button onClick={() => setStep(3)} className="btn-gradient inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm">
              Calculate My Results <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3 — RESULTS */}
      {step === 3 && (
        <div className="space-y-6">
          {/* Summary line */}
          <p className="text-sm text-[var(--color-text-body)] text-center">
            Based on your selections for a {homeSize.toLocaleString()} sq ft home in{" "}
            {city ? `${city}, ` : ""}{stateLabel} with {applianceCount} appliances selected.
          </p>

          {/* Main recommendation */}
          <div className="rounded-2xl border-2 border-[var(--color-primary-cyan)]/30 bg-gradient-to-br from-[var(--color-primary-cyan)]/5 to-[var(--color-primary-mint)]/5 p-6 sm:p-8 text-center">
            <p className="text-sm font-medium text-[var(--color-text-light)] uppercase tracking-wider">Your Recommended Generator</p>
            <p className="mt-3 text-5xl font-bold gradient-text">
              <AnimatedNumber value={results.gen.kw} /> kW
            </p>
            <p className="mt-1 text-sm text-[var(--color-text-body)] capitalize">{results.gen.type} Unit</p>
            <div className="mt-4 flex justify-center gap-6 text-sm">
              <div>
                <p className="text-[var(--color-text-light)]">Running load</p>
                <p className="font-semibold text-[var(--color-text-dark)]">{runningTotal.toLocaleString()}W</p>
              </div>
              <div className="h-10 w-px bg-[var(--color-border)]" />
              <div>
                <p className="text-[var(--color-text-light)]">Peak load</p>
                <p className="font-semibold text-[var(--color-text-dark)]">{peakTotal.toLocaleString()}W</p>
              </div>
              <div className="h-10 w-px bg-[var(--color-border)]" />
              <div>
                <p className="text-[var(--color-text-light)]">Capacity used</p>
                <p className="font-semibold text-[var(--color-text-dark)]">{results.capacityPct}%</p>
              </div>
            </div>
          </div>

          {/* Wattage Breakdown */}
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
            <h3 className="text-sm font-semibold text-[var(--color-text-dark)]">Wattage Breakdown</h3>
            <div className="mt-4 space-y-2.5">
              {results.breakdown.map((item) => {
                const pct = Math.max(5, (item.runWatts / (results.gen.kw * 1000)) * 100);
                return (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="w-40 shrink-0 text-xs text-[var(--color-text-body)] truncate">{item.label}</span>
                    <div className="flex-1 h-4 rounded-full bg-gray-100 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-[var(--color-primary-cyan)] to-[var(--color-primary-mint)] transition-all duration-700" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="w-16 text-right text-xs font-medium text-[var(--color-text-dark)]">{item.runWatts.toLocaleString()}W</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 border-t border-[var(--color-border)] pt-3 text-xs text-[var(--color-text-body)] space-y-1">
              <p>Total running: <strong>{runningTotal.toLocaleString()}W</strong></p>
              <p>Peak (+ largest starting surge): <strong>{peakTotal.toLocaleString()}W</strong></p>
              <p>+ 25% safety margin <Tooltip text="A 25% buffer protects against simultaneous startup surges and extends generator life." />: <strong>{results.required.toLocaleString()}W</strong></p>
              <p>→ Rounded up: <strong className="gradient-text">{results.gen.kw} kW</strong></p>
            </div>
          </div>

          {/* Cost Estimate */}
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
            <h3 className="text-sm font-semibold text-[var(--color-text-dark)]">Cost Estimate</h3>
            <div className="mt-4 space-y-2 text-sm">
              {[
                [`Generator unit (${results.gen.kw} kW)`, results.costs.equipLow, results.costs.equipHigh],
                ["Installation labor", results.costs.laborLow, results.costs.laborHigh],
                ["Automatic transfer switch", results.costs.transferLow, results.costs.transferHigh],
                ["Concrete pad", results.costs.padLow, results.costs.padHigh],
                ["Gas line connection", results.costs.gasLow, results.costs.gasHigh],
                ["Permits & inspection", results.costs.permitsLow, results.costs.permitsHigh],
              ].map(([label, low, high]) => (
                <div key={label as string} className="flex justify-between">
                  <span className="text-[var(--color-text-body)]">{label}</span>
                  <span className="text-[var(--color-text-dark)] font-medium">${(low as number).toLocaleString()} — ${(high as number).toLocaleString()}</span>
                </div>
              ))}
              <div className="border-t border-[var(--color-border)] pt-2 flex justify-between">
                <span className="font-semibold text-[var(--color-text-dark)]">Estimated Total</span>
                <span className="text-xl font-bold gradient-text">
                  $<AnimatedNumber value={results.costs.totalLow} /> — $<AnimatedNumber value={results.costs.totalHigh} />
                </span>
              </div>
            </div>
            <div className="mt-4 flex gap-4 text-xs text-[var(--color-text-body)]">
              <p>💰 As low as <strong className="text-[var(--color-primary-cyan)]">${results.monthly}/mo</strong> with financing</p>
              <p>⛽ Fuel cost/outage day: ${results.fuelPerDay.low}–${results.fuelPerDay.high}</p>
            </div>
          </div>

          {/* Models */}
          {results.models && (
            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
              <h3 className="text-sm font-semibold text-[var(--color-text-dark)]">Recommended Models</h3>
              <div className="mt-3 space-y-2 text-sm">
                {[
                  ["Generac", results.models.generac],
                  ["Kohler", results.models.kohler],
                  ["Cummins", results.models.cummins],
                ].filter(([, m]) => m !== "—").map(([brand, model]) => (
                  <div key={brand} className="flex justify-between">
                    <span className="text-[var(--color-text-body)]">{brand} {model}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="rounded-2xl bg-gradient-to-br from-[var(--color-bg-dark)] to-[#1E293B] p-8 text-center">
            <p className="text-lg font-semibold text-white">
              Ready to get exact pricing{city ? ` for ${city}` : stateLabel !== state ? ` in ${stateLabel}` : ""}?
            </p>
            <p className="mt-2 text-sm text-gray-400">
              No spam. No obligations. 2-3 quotes from certified pros in your area.
            </p>
            <Link
              href={`/get-quotes?source=calculator&kw=${results.gen.kw}${city ? `&city=${encodeURIComponent(city)}` : ""}&state=${state}`}
              className="btn-gradient mt-6 inline-block rounded-xl px-8 py-4 text-base"
            >
              Get Free Quotes from Local Installers →
            </Link>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-[var(--color-text-light)] text-center">
            This estimate is for planning purposes only. Actual costs depend on your specific home, electrical panel, and local conditions. A professional on-site assessment is recommended before purchasing.
          </p>

          {/* Back button */}
          <div className="flex justify-center">
            <button onClick={() => setStep(2)} className="inline-flex items-center gap-1.5 text-sm text-[var(--color-primary-cyan)] hover:underline">
              <ArrowLeft size={14} /> Recalculate
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
