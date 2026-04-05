import { MapPin, Zap, ClipboardList } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Enter Your Location",
    description:
      "Tell us your city and home size to get accurate local estimates.",
  },
  {
    icon: Zap,
    title: "Get Your Estimate",
    description:
      "Our calculator recommends the right generator size and shows local costs.",
  },
  {
    icon: ClipboardList,
    title: "Compare Installers",
    description:
      "Receive free quotes from 2-3 vetted installers in your area.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[var(--color-bg-light)] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[var(--color-text-dark)] sm:text-4xl">
            Get Your Generator Quote in 3 Simple Steps
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-2xl bg-white p-8 text-center shadow-sm border border-[var(--color-border)]"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary-cyan)] to-[var(--color-primary-mint)] text-sm font-bold text-white">
                  {index + 1}
                </span>
              </div>
              <div className="mx-auto mt-2 mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-primary-cyan)]/10 to-[var(--color-primary-mint)]/10">
                <step.icon
                  size={28}
                  className="text-[var(--color-primary-cyan)]"
                />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-dark)]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-body)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
