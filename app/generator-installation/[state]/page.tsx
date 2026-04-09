import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Calculator from "@/components/Calculator";
import {
  ArrowRight,
  CloudLightning,
  Clock,
  AlertTriangle,
  Zap,
  Shield,
  Calendar,
} from "lucide-react";
import statesData from "@/data/states.json";
import citiesFullData from "@/data/cities-full.json";

interface FaqItem {
  q: string;
  a: string;
}

interface StateData {
  state: string;
  slug: string;
  abbr: string;
  avgOutages: number;
  avgOutageDuration: number;
  avgCostLow: number;
  avgCostHigh: number;
  costVsNational: string;
  primaryRisk: string;
  secondaryRisk: string;
  permitRequired: boolean;
  naturalGasAvailable: boolean;
  preferredFuel: string;
  fuelReason: string;
  utilities: string[];
  recentEvent: string;
  permitTimeline: string;
  permitCostRange: string;
  localCode: string;
  localCodeCost: string;
  costExplanation: string;
  bestTimeToBuy: string;
  citationName: string;
  citationUrl: string;
  description: string;
  essentialCostLow: number;
  essentialCostHigh: number;
  wholeCostLow: number;
  wholeCostHigh: number;
  largeCostLow: number;
  largeCostHigh: number;
  cities: string[];
  isHurricaneBelt: boolean;
  faqSpecific: FaqItem[];
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
    title: `Home Generator Installers in ${s.state} — Cost & Quotes (2026)`,
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

  const publishedCitySlugs = new Set(
    citiesFullData
      .filter((c) => c.stateSlug === s.slug)
      .map((c) => c.slug)
  );

  const extLink = "text-[var(--color-primary-cyan)] hover:underline";
  const intLink = "text-[var(--color-primary-cyan)] hover:underline";
  const thClass =
    "px-4 py-3 text-left text-sm font-semibold text-[var(--color-text-dark)] bg-[var(--color-bg-light)]";
  const tdClass =
    "px-4 py-3 text-sm text-[var(--color-text-body)] border-t border-[var(--color-border)]";

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-white px-4 pt-16 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-bold text-[var(--color-text-dark)] sm:text-4xl lg:text-5xl">
              How Much Does Generator Installation Cost in{" "}
              <span className="gradient-text">{s.state}</span> in 2026?
            </h1>

            {/* P0 block */}
            <div className="mx-auto mt-6 max-w-2xl rounded-xl border-l-4 border-[var(--color-primary-cyan)] bg-[var(--color-bg-light)] p-5 text-left">
              <p className="text-sm font-medium text-[var(--color-text-dark)] leading-relaxed">
                A standard 22 kW whole-house generator costs{" "}
                <strong>
                  ${s.avgCostLow.toLocaleString()} – $
                  {s.avgCostHigh.toLocaleString()} installed
                </strong>{" "}
                in {s.state} ({s.costVsNational} vs. national average). The
                primary outage risk is {s.primaryRisk.toLowerCase()}. Best time
                to buy: {s.bestTimeToBuy.split(".")[0].toLowerCase()}.
              </p>
            </div>

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
            <p className="mt-3 text-[var(--color-text-body)] leading-relaxed">
              {s.recentEvent} Power in {s.state} is served by{" "}
              {s.utilities.join(", ")}.
              According to the{" "}
              <a
                href={s.citationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={extLink}
              >
                {s.citationName}
              </a>
              , the state averages {s.avgOutages} outages per year with a
              mean duration of {s.avgOutageDuration} hours per event.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-white p-4">
                <CloudLightning size={22} className="shrink-0 text-[var(--color-primary-cyan)]" />
                <div>
                  <p className="text-lg font-bold text-[var(--color-text-dark)]">{s.avgOutages}</p>
                  <p className="text-xs text-[var(--color-text-light)]">Outages/year</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-white p-4">
                <Clock size={22} className="shrink-0 text-[var(--color-primary-cyan)]" />
                <div>
                  <p className="text-lg font-bold text-[var(--color-text-dark)]">{s.avgOutageDuration}h</p>
                  <p className="text-xs text-[var(--color-text-light)]">Avg duration</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-white p-4">
                <AlertTriangle size={22} className="shrink-0 text-[var(--color-primary-cyan)]" />
                <div>
                  <p className="text-xs font-bold text-[var(--color-text-dark)]">{s.primaryRisk}</p>
                  <p className="text-xs text-[var(--color-text-light)]">Primary risk</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-white p-4">
                <Zap size={22} className="shrink-0 text-[var(--color-primary-cyan)]" />
                <div>
                  <p className="text-xs font-bold text-[var(--color-text-dark)]">{s.secondaryRisk}</p>
                  <p className="text-xs text-[var(--color-text-light)]">Secondary risk</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost section */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl">
              How Much Does It Cost in {s.state}?
            </h2>

            <div className="mt-6 overflow-x-auto rounded-xl border border-[var(--color-border)]">
              <table className="w-full min-w-[480px]">
                <thead>
                  <tr>
                    <th className={thClass}>Setup</th>
                    <th className={thClass}>Size</th>
                    <th className={thClass}>Cost Range (Installed)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={`${tdClass} font-medium text-[var(--color-text-dark)]`}>Essential circuits</td>
                    <td className={tdClass}>10-16 kW</td>
                    <td className={tdClass}>${s.essentialCostLow.toLocaleString()} – ${s.essentialCostHigh.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td className={`${tdClass} font-medium text-[var(--color-text-dark)]`}>Whole house</td>
                    <td className={tdClass}>20-22 kW</td>
                    <td className={tdClass}>${s.wholeCostLow.toLocaleString()} – ${s.wholeCostHigh.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td className={`${tdClass} font-medium text-[var(--color-text-dark)]`}>Large home / liquid-cooled</td>
                    <td className={tdClass}>24-48 kW</td>
                    <td className={tdClass}>${s.largeCostLow.toLocaleString()} – ${s.largeCostHigh.toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-[var(--color-text-body)] leading-relaxed">
              {s.costExplanation} For a full national breakdown, see our{" "}
              <Link href="/guides/generator-installation-cost" className={intLink}>
                installation cost guide
              </Link>
              . Not sure what size you need? Use our{" "}
              <Link href="/guides/generator-size-calculator" className={intLink}>
                sizing guide
              </Link>
              .
            </p>

            <div className="mt-4 text-center">
              <Link href="/get-quotes?source=state-page" className={`text-sm font-medium ${intLink}`}>
                Get exact quotes for {s.state} →
              </Link>
            </div>
          </div>
        </section>

        {/* State-specific requirements */}
        <section className="bg-[var(--color-bg-light)] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl">
              {s.state}-Specific Installation Requirements
            </h2>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-white p-4">
                <Shield size={20} className="mt-0.5 shrink-0 text-[var(--color-primary-cyan)]" />
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-dark)]">Local Building Code</p>
                  <p className="mt-1 text-sm text-[var(--color-text-body)]">{s.localCode}</p>
                  <p className="mt-1 text-xs text-[var(--color-text-light)]">Additional code-related cost: {s.localCodeCost}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-white p-4">
                <Calendar size={20} className="mt-0.5 shrink-0 text-[var(--color-primary-cyan)]" />
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-dark)]">Permits</p>
                  <p className="mt-1 text-sm text-[var(--color-text-body)]">
                    Permit timeline: {s.permitTimeline}. Cost: {s.permitCostRange}. Your installer handles the filing and inspection.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-white p-4">
                <Zap size={20} className="mt-0.5 shrink-0 text-[var(--color-primary-cyan)]" />
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-dark)]">Preferred Fuel: {s.preferredFuel}</p>
                  <p className="mt-1 text-sm text-[var(--color-text-body)]">{s.fuelReason}</p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-[var(--color-text-body)] leading-relaxed">
              Comparing brands? Read our{" "}
              <Link href="/guides/generac-vs-kohler" className={intLink}>
                Generac vs Kohler comparison
              </Link>
              .
              {s.isHurricaneBelt && (
                <>{" "}Preparing for storm season? See our{" "}
                  <Link href="/guides/hurricane-season-generator" className={intLink}>
                    hurricane season generator guide
                  </Link>
                  .
                </>
              )}
            </p>
          </div>
        </section>

        {/* Best time to buy */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl">
              Best Time to Buy a Generator in {s.state}
            </h2>
            <p className="mt-4 text-[var(--color-text-body)] leading-relaxed">
              {s.bestTimeToBuy}
            </p>
            <div className="mt-4 text-center">
              <Link href="/get-quotes?source=state-page" className={`text-sm font-medium ${intLink}`}>
                Start now — get free quotes from {s.state} installers →
              </Link>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <Calculator />

        <div className="mx-auto max-w-4xl px-4 -mt-6 mb-10 text-center">
          <Link href="/calculator" className={`text-sm font-medium ${intLink}`}>
            Need a more detailed estimate? Try our appliance-by-appliance calculator →
          </Link>
        </div>

        {/* Cities */}
        <section className="bg-[var(--color-bg-light)] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl">
              Generator Installation in {s.state} by City
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
                    className="rounded-lg border border-[var(--color-border)] bg-white p-3 text-sm text-[var(--color-text-light)]"
                  >
                    {cityName}
                  </span>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl">
              Frequently Asked Questions — {s.state}
            </h2>
            <div className="mt-8 space-y-6">
              {s.faqSpecific.map((item: FaqItem) => (
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

        {/* Author Box */}
        <section className="bg-[var(--color-bg-light)] px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-start gap-4 rounded-xl border border-[var(--color-border)] bg-white p-5 sm:p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary-cyan)] to-[var(--color-primary-mint)] text-lg font-bold text-white">
                LB
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--color-text-dark)]">Lyes Boussouf</p>
                <p className="mt-1 text-xs text-[var(--color-text-light)]">Founder &amp; Home Energy Specialist</p>
                <p className="mt-2 text-sm text-[var(--color-text-body)] leading-relaxed">
                  Lyes tracks generator installation costs, installer availability,
                  and local code requirements across all 50 states. This page is
                  reviewed by licensed electricians and generator installation
                  professionals who operate in {s.state}.
                </p>
                <div className="mt-2 flex gap-3">
                  <Link href="/about" className={`text-xs ${intLink}`}>About us</Link>
                  <Link href="/contact" className={`text-xs ${intLink}`}>Contact</Link>
                </div>
              </div>
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

        {/* Schema — Service + FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Service",
                  name: `Home Generator Installation in ${s.state}`,
                  description: `Professional home standby generator installation in ${s.state}. Compare certified installers and get free quotes.`,
                  provider: {
                    "@type": "Organization",
                    name: "HomeGen",
                    url: "https://homegen.co",
                  },
                  areaServed: {
                    "@type": "State",
                    name: s.state,
                  },
                  offers: {
                    "@type": "AggregateOffer",
                    lowPrice: String(s.avgCostLow),
                    highPrice: String(s.avgCostHigh),
                    priceCurrency: "USD",
                  },
                },
                {
                  "@type": "FAQPage",
                  mainEntity: s.faqSpecific.map((item: FaqItem) => ({
                    "@type": "Question",
                    name: item.q,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: item.a,
                    },
                  })),
                },
              ],
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
