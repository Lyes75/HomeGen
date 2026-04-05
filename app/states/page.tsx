import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import statesData from "@/data/states.json";

export const metadata: Metadata = {
  title: "Generator Installation by State — All 50 States | HomeGen",
  description:
    "Find generator installation costs, installers, and permits in your state. Compare prices across all 50 states.",
  alternates: {
    canonical: "https://homegen.co/states",
  },
};

export default function StatesPage() {
  return (
    <>
      <Header />
      <main className="bg-[var(--color-bg-light)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[var(--color-text-dark)] sm:text-4xl">
              Generator Installation by State
            </h1>
            <p className="mt-4 text-[var(--color-text-body)]">
              Find costs, installers, and permits in your state.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {statesData.map((state) => (
              <Link
                key={state.slug}
                href={`/generator-installation/${state.slug}`}
                className="group flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-white p-5 transition-all hover:border-[var(--color-primary-cyan)] hover:shadow-md"
              >
                <div>
                  <h2 className="font-semibold text-[var(--color-text-dark)] group-hover:text-[var(--color-primary-cyan)]">
                    {state.state}
                  </h2>
                  <p className="mt-1 text-sm text-[var(--color-text-light)]">
                    {state.avgOutages} avg outages/year
                  </p>
                  <p className="mt-0.5 text-xs text-[var(--color-text-light)]">
                    {state.primaryRisk}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[var(--color-primary-cyan)]">
                    From ${state.avgCostLow.toLocaleString()}
                  </p>
                </div>
                <ArrowRight
                  size={18}
                  className="shrink-0 text-[var(--color-text-light)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--color-primary-cyan)]"
                />
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-[var(--color-text-light)]">
              More states coming soon. Can&apos;t find your state?
            </p>
            <Link
              href="/get-quotes"
              className="btn-gradient mt-4 inline-block rounded-xl px-8 py-3 text-sm"
            >
              Get Quotes for Any Location
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
