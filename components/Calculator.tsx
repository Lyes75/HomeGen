"use client";

import { useState, useMemo } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import statesData from "@/data/states.json";

const stateOptions = [
  { label: "Select your state (optional)", value: "", multiplier: 1, note: "" },
  ...statesData.map((s) => ({
    label: s.state,
    value: s.slug,
    multiplier:
      s.slug === "california"
        ? 1.6
        : s.slug === "new-york"
          ? 1.4
          : 1,
    note:
      s.slug === "california"
        ? "⚠️ California installations typically cost 50-70% more due to seismic requirements and permitting."
        : s.slug === "new-york"
          ? "⚠️ New York installations typically cost 30-50% more due to higher labor costs and permitting."
          : "",
  })),
];

export default function Calculator() {
  const [homeSize, setHomeSize] = useState(2000);
  const [coverage, setCoverage] = useState("whole");
  const [fuel, setFuel] = useState("natural-gas");
  const [selectedState, setSelectedState] = useState("");

  const estimate = useMemo(() => {
    let kw: number;
    if (coverage === "essential") {
      kw =
        homeSize <= 1500
          ? 10
          : homeSize <= 2500
            ? 14
            : homeSize <= 3500
              ? 18
              : 22;
    } else {
      kw =
        homeSize <= 1500
          ? 16
          : homeSize <= 2500
            ? 22
            : homeSize <= 3500
              ? 27
              : 36;
    }

    const stateOption = stateOptions.find((s) => s.value === selectedState);
    const multiplier = stateOption?.multiplier ?? 1;

    let baseLow = kw * 350 * multiplier;
    let baseHigh = kw * 550 * multiplier;

    if (fuel === "propane") {
      baseLow *= 1.05;
      baseHigh *= 1.05;
    } else if (fuel === "diesel") {
      baseLow *= 1.15;
      baseHigh *= 1.15;
    }

    const low = Math.round(baseLow / 100) * 100;
    const high = Math.round(baseHigh / 100) * 100;
    const avgCost = (low + high) / 2;
    const monthly = Math.round(avgCost / 120);

    return {
      kw,
      low,
      high,
      monthly,
      note: stateOption?.note ?? "",
    };
  }, [homeSize, coverage, fuel, selectedState]);

  return (
    <section id="calculator" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[var(--color-text-dark)] sm:text-4xl">
            How Much Does a Home Generator Cost?
          </h2>
          <p className="mt-4 text-[var(--color-text-body)]">
            Get an instant estimate based on your home size and power needs.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-light)] p-6 sm:p-8">
          {/* Home size slider */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <label
                htmlFor="home-size"
                className="text-sm font-medium text-[var(--color-text-dark)]"
              >
                Home size (sq ft)
              </label>
              <span className="text-sm font-semibold text-[var(--color-primary-cyan)]">
                {homeSize.toLocaleString()} sq ft
              </span>
            </div>
            <input
              id="home-size"
              type="range"
              min={1000}
              max={5000}
              step={100}
              value={homeSize}
              onChange={(e) => setHomeSize(Number(e.target.value))}
              className="mt-2 w-full accent-[var(--color-primary-cyan)]"
            />
            <div className="mt-1 flex justify-between text-xs text-[var(--color-text-light)]">
              <span>1,000</span>
              <span>5,000</span>
            </div>
          </div>

          {/* Selects */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label
                htmlFor="coverage"
                className="mb-1.5 block text-sm font-medium text-[var(--color-text-dark)]"
              >
                Coverage
              </label>
              <select
                id="coverage"
                value={coverage}
                onChange={(e) => setCoverage(e.target.value)}
                className="w-full rounded-lg border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-text-dark)] focus:border-[var(--color-primary-cyan)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-cyan)]/20"
              >
                <option value="essential">Essential circuits only</option>
                <option value="whole">Whole house</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="fuel"
                className="mb-1.5 block text-sm font-medium text-[var(--color-text-dark)]"
              >
                Fuel type
              </label>
              <select
                id="fuel"
                value={fuel}
                onChange={(e) => setFuel(e.target.value)}
                className="w-full rounded-lg border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-text-dark)] focus:border-[var(--color-primary-cyan)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-cyan)]/20"
              >
                <option value="natural-gas">Natural Gas</option>
                <option value="propane">Propane</option>
                <option value="diesel">Diesel</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="state-select"
                className="mb-1.5 block text-sm font-medium text-[var(--color-text-dark)]"
              >
                State
              </label>
              <select
                id="state-select"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full rounded-lg border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-text-dark)] focus:border-[var(--color-primary-cyan)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-cyan)]/20"
              >
                {stateOptions.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* State note */}
          {estimate.note && (
            <p className="mt-4 rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-800 border border-amber-200">
              {estimate.note}
            </p>
          )}

          {/* Result */}
          <div className="mt-8 rounded-xl bg-white p-6 border border-[var(--color-border)] text-center transition-all duration-300">
            <p className="text-sm text-[var(--color-text-light)]">
              Recommended size
            </p>
            <p className="mt-1 text-3xl font-bold text-[var(--color-text-dark)]">
              {estimate.kw} kW
            </p>
            <p className="mt-3 text-sm text-[var(--color-text-light)]">
              Estimated cost
            </p>
            <p className="mt-1 text-2xl font-bold gradient-text">
              ${estimate.low.toLocaleString()} – $
              {estimate.high.toLocaleString()}
            </p>
            <p className="mt-2 text-xs text-[var(--color-text-light)]">
              Includes equipment, installation, transfer switch, and permits
            </p>
            <div className="mt-3 border-t border-[var(--color-border)] pt-3">
              <p className="text-sm text-[var(--color-text-body)]">
                As low as{" "}
                <span className="font-semibold text-[var(--color-primary-cyan)]">
                  ${estimate.monthly}/month
                </span>{" "}
                with approved financing
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 text-center">
            <Link
              href="/get-quotes?source=calculator"
              className="btn-gradient inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-base"
            >
              Get Exact Quotes for Your Home
              <ArrowRight size={18} />
            </Link>
            <p className="mt-3 text-xs text-[var(--color-text-light)]">
              Prices vary by location. Enter your ZIP code for local estimates.
            </p>
            <p className="mt-4">
              <Link
                href="/calculator"
                className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary-cyan)] hover:underline"
              >
                Need a more precise estimate? Try our detailed calculator
                <ArrowRight size={14} />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
