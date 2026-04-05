import { ArrowRight } from "lucide-react";
import Link from "next/link";

const guides = [
  {
    title: "What Size Generator Do I Need?",
    description: "Calculate the right kW for your home",
    slug: "/guides/generator-size-calculator",
  },
  {
    title: "Generator Installation Cost Guide 2026",
    description: "Breakdown by state, size, and brand",
    slug: "/guides/generator-installation-cost",
  },
  {
    title: "Generac vs Kohler: Which Is Better?",
    description: "Side-by-side comparison",
    slug: "/guides/generac-vs-kohler",
  },
  {
    title: "Hurricane Season Generator Guide",
    description: "How to prepare your home",
    slug: "/guides/hurricane-season-generator",
  },
];

export default function GuidesGrid() {
  return (
    <section
      id="guides"
      className="bg-[var(--color-bg-light)] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[var(--color-text-dark)] sm:text-4xl">
            Generator Buying Guides
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={guide.slug}
              className="group rounded-xl border border-[var(--color-border)] bg-white p-6 transition-all hover:border-[var(--color-primary-cyan)] hover:shadow-md"
            >
              <h3 className="font-semibold text-[var(--color-text-dark)] group-hover:text-[var(--color-primary-cyan)]">
                {guide.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-body)]">
                {guide.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary-cyan)]">
                Read more
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
