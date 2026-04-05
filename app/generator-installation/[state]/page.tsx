import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Calculator from "@/components/Calculator";
import { ArrowRight, CloudLightning, Clock, AlertTriangle } from "lucide-react";
import statesData from "@/data/states.json";
import citiesFullData from "@/data/cities-full.json";

interface StateData {
  state: string;
  slug: string;
  abbr: string;
  avgOutages: number;
  avgOutageDuration: number;
  avgCostLow: number;
  avgCostHigh: number;
  primaryRisk: string;
  permitRequired: boolean;
  naturalGasAvailable: boolean;
  description: string;
  cities: string[];
}

type Props = {
  params: Promise<{ state: string }>;
};

function getState(slug: string): StateData | undefined {
  return (statesData as StateData[]).find((s) => s.slug === slug);
}

export async function generateStaticParams() {
  return (statesData as StateData[]).map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state: slug } = await params;
  const s = getState(slug);
  if (!s) return {};

  return {
    title: `Generator Installation in ${s.state} — Cost, Installers & Permits (2026)`,
    description: `Find trusted generator installers in ${s.state}. Average cost: $${s.avgCostLow.toLocaleString()}-$${s.avgCostHigh.toLocaleString()}. ${s.primaryRisk}. Get free quotes from local pros.`,
    alternates: {
      canonical: `https://homegen.co/generator-installation/${s.slug}`,
    },
  };
}

export default async function StatePage({ params }: Props) {
  const { state: slug } = await params;
  const s = getState(slug);
  if (!s) notFound();

  // Only cities with full published pages get links
  const publishedCitySlugs = new Set(
    citiesFullData
      .filter((c) => c.stateSlug === s.slug)
      .map((c) => c.slug)
  );

  const faq = [
    {
      q: `Do I need a permit for generator installation in ${s.state}?`,
      a: `Yes, most municipalities in ${s.state} require an electrical permit for generator installation. Permit costs typically range from $50 to $300. Your installer will usually handle the permitting process.`,
    },
    {
      q: `What size generator do I need in ${s.state}?`,
      a: `The right generator size depends on your home size and what you want to power. For essential circuits (lights, fridge, HVAC), a 10-16 kW unit works for most homes. For whole-house coverage, you'll need 22-36 kW. Use our calculator above for a personalized recommendation.`,
    },
    {
      q: `How long does generator installation take?`,
      a: `Most home generator installations in ${s.state} take 1-2 days, not including the permit approval process. From initial consultation to a fully operational generator, expect 2-4 weeks total.`,
    },
    {
      q: `What fuel type is best in ${s.state}?`,
      a: s.naturalGasAvailable
        ? `Natural gas is the most popular choice in ${s.state} since it connects to your existing gas line — no fuel storage needed. Propane is a great alternative for homes without natural gas access.`
        : `Propane is the most common fuel choice in ${s.state}. It's stored in a tank on your property and offers reliable long-term fuel supply during extended outages.`,
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-white px-4 pt-16 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-bold text-[var(--color-text-dark)] sm:text-4xl lg:text-5xl">
              Generator Installation in{" "}
              <span className="gradient-text">{s.state}</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-body)]">
              Find certified generator installers in {s.state}. Average
              installation cost: ${s.avgCostLow.toLocaleString()} – $
              {s.avgCostHigh.toLocaleString()}.
            </p>
            <Link
              href="/get-quotes"
              className="btn-gradient mt-8 inline-block rounded-xl px-8 py-4 text-base"
            >
              Get Free Quotes in {s.state}
            </Link>
          </div>
        </section>

        {/* Why backup power */}
        <section className="bg-[var(--color-bg-light)] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl">
              Why {s.state} Needs Backup Power
            </h2>
            <p className="mt-4 text-[var(--color-text-body)] leading-relaxed">
              {s.description}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-white p-4">
                <CloudLightning
                  size={24}
                  className="shrink-0 text-[var(--color-primary-cyan)]"
                />
                <div>
                  <p className="text-lg font-bold text-[var(--color-text-dark)]">
                    {s.avgOutages}
                  </p>
                  <p className="text-xs text-[var(--color-text-light)]">
                    Outages/year
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-white p-4">
                <Clock
                  size={24}
                  className="shrink-0 text-[var(--color-primary-cyan)]"
                />
                <div>
                  <p className="text-lg font-bold text-[var(--color-text-dark)]">
                    {s.avgOutageDuration}h
                  </p>
                  <p className="text-xs text-[var(--color-text-light)]">
                    Avg duration
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-white p-4">
                <AlertTriangle
                  size={24}
                  className="shrink-0 text-[var(--color-primary-cyan)]"
                />
                <div>
                  <p className="text-sm font-bold text-[var(--color-text-dark)]">
                    {s.primaryRisk}
                  </p>
                  <p className="text-xs text-[var(--color-text-light)]">
                    Primary risk
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <Calculator />

        {/* Cost section */}
        <section className="bg-[var(--color-bg-light)] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl">
              How Much Does a Generator Cost in {s.state}?
            </h2>
            <p className="mt-4 text-[var(--color-text-body)] leading-relaxed">
              Generator installation in {s.state} typically costs between $
              {s.avgCostLow.toLocaleString()} and $
              {s.avgCostHigh.toLocaleString()}, including equipment, labor,
              transfer switch, and permits. Costs vary based on generator size,
              fuel type, and your specific location within the state. A small
              essential-circuits unit starts around $
              {s.avgCostLow.toLocaleString()}, while a whole-house system for a
              large home can exceed $
              {s.avgCostHigh.toLocaleString()}.
            </p>
          </div>
        </section>

        {/* Cities */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl">
              Cities in {s.state}
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {s.cities.map((cityName) => {
                const citySlug = cityName.toLowerCase().replace(/\s+/g, "-");
                const hasPage = publishedCitySlugs.has(citySlug);
                return hasPage ? (
                  <Link
                    key={cityName}
                    href={`/generator-installation/${s.slug}/${citySlug}`}
                    className="flex items-center justify-between rounded-lg border border-[var(--color-border)] bg-gradient-to-r from-[var(--color-primary-cyan)]/5 to-[var(--color-primary-mint)]/5 p-3 text-sm font-medium text-[var(--color-text-dark)] transition-colors hover:border-[var(--color-primary-cyan)] hover:from-[var(--color-primary-cyan)]/10 hover:to-[var(--color-primary-mint)]/10"
                  >
                    {cityName}
                    <ArrowRight size={14} />
                  </Link>
                ) : (
                  <span
                    key={cityName}
                    className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-light)] p-3 text-sm text-[var(--color-text-light)]"
                  >
                    {cityName}
                  </span>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[var(--color-bg-light)] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 space-y-6">
              {faq.map((item) => (
                <div key={item.q}>
                  <h3 className="text-lg font-semibold text-[var(--color-text-dark)]">
                    {item.q}
                  </h3>
                  <p className="mt-2 text-[var(--color-text-body)] leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-[var(--color-bg-dark)] to-[#1E293B] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to Get Generator Quotes in {s.state}?
            </h2>
            <p className="mt-4 text-[var(--color-text-light)]">
              Compare prices from certified local installers. Free and
              no-obligation.
            </p>
            <Link
              href="/get-quotes"
              className="btn-gradient mt-8 inline-block rounded-xl px-10 py-4 text-lg"
            >
              Get Your Free Quote Now
            </Link>
          </div>
        </section>

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faq.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.a,
                },
              })),
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
