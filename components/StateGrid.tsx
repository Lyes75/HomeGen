import { ArrowRight } from "lucide-react";
import Link from "next/link";

const states = [
  { name: "Florida", slug: "florida", outages: 8, from: 5500 },
  { name: "Texas", slug: "texas", outages: 6, from: 5200 },
  { name: "Louisiana", slug: "louisiana", outages: 9, from: 5800 },
  { name: "South Carolina", slug: "south-carolina", outages: 5, from: 5400 },
  { name: "North Carolina", slug: "north-carolina", outages: 5, from: 5600 },
  { name: "Georgia", slug: "georgia", outages: 5, from: 5300 },
  { name: "California", slug: "california", outages: 7, from: 6200 },
  { name: "Michigan", slug: "michigan", outages: 4, from: 5100 },
  { name: "New York", slug: "new-york", outages: 4, from: 6000 },
  { name: "Tennessee", slug: "tennessee", outages: 4, from: 5000 },
];

export default function StateGrid() {
  return (
    <section className="bg-[var(--color-bg-light)] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[var(--color-text-dark)] sm:text-4xl">
            Generator Installation by State
          </h2>
          <p className="mt-4 text-[var(--color-text-body)]">
            Find installers and costs in your state
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {states.map((state) => (
            <Link
              key={state.slug}
              href={`/generator-installation/${state.slug}`}
              className="group flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-white p-5 transition-all hover:border-[var(--color-primary-cyan)] hover:shadow-md"
            >
              <div>
                <h3 className="font-semibold text-[var(--color-text-dark)]">
                  {state.name}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-text-light)]">
                  {state.outages} avg outages/year
                </p>
                <p className="mt-0.5 text-sm font-medium text-[var(--color-primary-cyan)]">
                  From ${state.from.toLocaleString()}
                </p>
              </div>
              <ArrowRight
                size={18}
                className="text-[var(--color-text-light)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--color-primary-cyan)]"
              />
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/states"
            className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary-cyan)] hover:underline"
          >
            View all 50 states
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
