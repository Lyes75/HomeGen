import { DollarSign, Users, BarChart3, Award } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "100% Free",
    description: "No fees, no obligations. Get quotes at no cost.",
  },
  {
    icon: Users,
    title: "Local Experts",
    description:
      "We connect you with certified, insured installers in your area.",
  },
  {
    icon: BarChart3,
    title: "Accurate Estimates",
    description:
      "Our calculator uses real local data — not generic national averages.",
  },
  {
    icon: Award,
    title: "All Major Brands",
    description:
      "Generac, Kohler, Cummins, Briggs & Stratton — we cover them all.",
  },
];

export default function WhyHomeGen() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[var(--color-text-dark)] sm:text-4xl">
            Why Homeowners Choose HomeGen
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex gap-4 rounded-xl border border-[var(--color-border)] p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--color-primary-cyan)]/10 to-[var(--color-primary-mint)]/10">
                <feature.icon
                  size={24}
                  className="text-[var(--color-primary-cyan)]"
                />
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-text-dark)]">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-text-body)]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
