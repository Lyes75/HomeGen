import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Calculator from "@/components/Calculator";
import {
  CloudLightning,
  Clock,
  AlertTriangle,
  Zap,
} from "lucide-react";
import citiesFullData from "@/data/cities-full.json";

interface CityData {
  city: string;
  slug: string;
  state: string;
  stateSlug: string;
  stateAbbr: string;
  county: string;
  avgOutages: number;
  avgOutageDuration: number;
  avgHomeSqft: number;
  costLow: number;
  costHigh: number;
  electricityProvider: string;
  climateRisks: string[];
  permitCostRange: string;
  description: string;
}

type Props = {
  params: Promise<{ state: string; city: string }>;
};

function getCity(stateSlug: string, citySlug: string): CityData | undefined {
  return (citiesFullData as CityData[]).find(
    (c) => c.stateSlug === stateSlug && c.slug === citySlug
  );
}

export async function generateStaticParams() {
  return (citiesFullData as CityData[]).map((c) => ({
    state: c.stateSlug,
    city: c.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state, city } = await params;
  const c = getCity(state, city);
  if (!c) return {};

  return {
    title: `Generator Installation in ${c.city}, ${c.stateAbbr} — Free Quotes (2026)`,
    description: `Find trusted generator installers in ${c.city}, ${c.state}. Average cost: $${c.costLow.toLocaleString()}-$${c.costHigh.toLocaleString()}. Get free, no-obligation quotes from certified local pros.`,
    alternates: {
      canonical: `https://homegen.co/generator-installation/${c.stateSlug}/${c.slug}`,
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { state, city } = await params;
  const c = getCity(state, city);
  if (!c) notFound();

  const faq = [
    {
      q: `How much does a generator cost in ${c.city}?`,
      a: `Generator installation in ${c.city}, ${c.stateAbbr} typically costs between $${c.costLow.toLocaleString()} and $${c.costHigh.toLocaleString()} in 2026, including equipment, installation labor, automatic transfer switch, concrete pad, and local permits. Costs in ${c.county} County depend on your home size, generator capacity, and fuel type.`,
    },
    {
      q: `What size generator do I need for a ${c.avgHomeSqft.toLocaleString()} sq ft home in ${c.city}?`,
      a: `For a typical ${c.avgHomeSqft.toLocaleString()} sq ft home in ${c.city}, you'll need a 16-22 kW generator for essential circuits or a 22-36 kW unit for whole-house coverage. The exact size depends on your HVAC system, appliances, and whether you want to power everything or just the essentials. Use our calculator below for a personalized recommendation.`,
    },
    {
      q: `How long does installation take in ${c.city}?`,
      a: `Most generator installations in ${c.city} take 1-2 days of on-site work, not including the permit approval process in ${c.county} County. From initial consultation to a fully operational generator, expect 2-4 weeks total.`,
    },
    {
      q: `What is the best fuel type for generators in ${c.city}?`,
      a: `Natural gas is the most popular choice in ${c.city} since it connects to your existing gas line — no fuel storage or refilling needed. Propane is an excellent alternative for homes without natural gas access. Both fuel types offer reliable, automatic operation during power outages.`,
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-white px-4 pt-16 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <nav className="mb-4 text-sm text-[var(--color-text-light)]">
              <Link href="/" className="hover:text-[var(--color-primary-cyan)]">
                Home
              </Link>
              {" / "}
              <Link
                href={`/generator-installation/${c.stateSlug}`}
                className="hover:text-[var(--color-primary-cyan)]"
              >
                {c.state}
              </Link>
              {" / "}
              <span className="text-[var(--color-text-dark)]">{c.city}</span>
            </nav>

            <h1 className="text-3xl font-bold text-[var(--color-text-dark)] sm:text-4xl lg:text-5xl">
              Generator Installation in{" "}
              <span className="gradient-text">
                {c.city}, {c.stateAbbr}
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-body)]">
              {c.city} homeowners face an average of {c.avgOutages} power
              outages per year. Get free quotes from certified generator
              installers in {c.city}.
            </p>
            <Link
              href={`/get-quotes?city=${encodeURIComponent(c.city + ", " + c.stateAbbr)}`}
              className="btn-gradient mt-8 inline-block rounded-xl px-8 py-4 text-base"
            >
              Get Free Quotes in {c.city}
            </Link>
          </div>
        </section>

        {/* Why backup power */}
        <section className="bg-[var(--color-bg-light)] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl">
              Why {c.city} Needs Backup Power
            </h2>
            <p className="mt-4 text-[var(--color-text-body)] leading-relaxed">
              {c.description}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-white p-4">
                <CloudLightning
                  size={22}
                  className="shrink-0 text-[var(--color-primary-cyan)]"
                />
                <div>
                  <p className="text-lg font-bold text-[var(--color-text-dark)]">
                    {c.avgOutages}
                  </p>
                  <p className="text-xs text-[var(--color-text-light)]">
                    Outages/year
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-white p-4">
                <Clock
                  size={22}
                  className="shrink-0 text-[var(--color-primary-cyan)]"
                />
                <div>
                  <p className="text-lg font-bold text-[var(--color-text-dark)]">
                    {c.avgOutageDuration}h
                  </p>
                  <p className="text-xs text-[var(--color-text-light)]">
                    Avg duration
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-white p-4">
                <AlertTriangle
                  size={22}
                  className="shrink-0 text-[var(--color-primary-cyan)]"
                />
                <div>
                  <p className="text-xs font-bold text-[var(--color-text-dark)]">
                    {c.climateRisks.join(", ")}
                  </p>
                  <p className="text-xs text-[var(--color-text-light)]">
                    Climate risks
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-white p-4">
                <Zap
                  size={22}
                  className="shrink-0 text-[var(--color-primary-cyan)]"
                />
                <div>
                  <p className="text-xs font-bold text-[var(--color-text-dark)]">
                    {c.electricityProvider}
                  </p>
                  <p className="text-xs text-[var(--color-text-light)]">
                    Electric utility
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost section */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl">
              How Much Does Generator Installation Cost in {c.city},{" "}
              {c.stateAbbr}?
            </h2>
            <p className="mt-4 text-[var(--color-text-body)] leading-relaxed">
              Generator installation in {c.city} typically costs between $
              {c.costLow.toLocaleString()} and ${c.costHigh.toLocaleString()} in
              2026, including equipment, installation labor, automatic transfer
              switch, concrete pad, and local permits. Costs in {c.county} County
              depend on your home size, generator capacity, and fuel type.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <Calculator />

        {/* Permits */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl">
              Do I Need a Permit for Generator Installation in {c.city}?
            </h2>
            <p className="mt-4 text-[var(--color-text-body)] leading-relaxed">
              Yes, {c.county} County requires an electrical permit for generator
              installation. Permit costs in {c.city} typically range from{" "}
              {c.permitCostRange}. Most licensed installers handle the
              permitting process on your behalf, so you don&apos;t need to visit
              the county office yourself.
            </p>
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
              Ready to Get Generator Quotes in {c.city}?
            </h2>
            <p className="mt-4 text-[var(--color-text-light)]">
              Compare prices from certified local installers in {c.county}{" "}
              County. Free and no-obligation.
            </p>
            <Link
              href={`/get-quotes?city=${encodeURIComponent(c.city + ", " + c.stateAbbr)}`}
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
