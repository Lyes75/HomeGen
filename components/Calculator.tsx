"use client";

import { useState, useMemo } from "react";
import { ArrowRight } from "lucide-react";

export default function Calculator() {
  const [homeSize, setHomeSize] = useState(2000);
  const [coverage, setCoverage] = useState("whole");
  const [fuel, setFuel] = useState("natural-gas");

  const estimate = useMemo(() => {
    let kw: number;
    if (coverage === "essential") {
      kw = homeSize <= 1500 ? 10 : homeSize <= 2500 ? 14 : homeSize <= 3500 ? 18 : 22;
    } else {
      kw = homeSize <= 1500 ? 16 : homeSize <= 2500 ? 22 : homeSize <= 3500 ? 27 : 36;
    }

    let baseLow = kw * 350;
    let baseHigh = kw * 550;

    if (fuel === "propane") {
      baseLow *= 1.05;
      baseHigh *= 1.05;
    } else if (fuel === "diesel") {
      baseLow *= 1.15;
      baseHigh *= 1.15;
    }

    return {
      kw,
      low: Math.round(baseLow / 100) * 100,
      high: Math.round(baseHigh / 100) * 100,
    };
  }, [homeSize, coverage, fuel]);

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
          <div className="grid gap-4 sm:grid-cols-2">
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
          </div>

          {/* Result */}
          <div className="mt-8 rounded-xl bg-white p-6 border border-[var(--color-border)] text-center">
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
              ${estimate.low.toLocaleString()} – ${estimate.high.toLocaleString()}
            </p>
            <p className="mt-2 text-xs text-[var(--color-text-light)]">
              Includes equipment, installation, transfer switch, and permits
            </p>
          </div>

          {/* CTA */}
          <div className="mt-6 text-center">
            <button className="btn-gradient inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-base">
              Get Exact Quotes for Your Home
              <ArrowRight size={18} />
            </button>
            <p className="mt-3 text-xs text-[var(--color-text-light)]">
              Prices vary by location. Enter your ZIP code for local estimates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
