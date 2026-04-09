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
  Shield,
  Calendar,
} from "lucide-react";
import citiesFullData from "@/data/cities-full.json";

interface FaqItem { q: string; a: string }

interface CityData {
  city: string; slug: string; state: string; stateSlug: string; stateAbbr: string;
  county: string; avgOutages: number; avgOutageDuration: number; avgHomeSqft: number;
  electricityProvider: string; climateRisks: string[]; primaryRisk: string;
  recentEvent: string;
  essentialCostLow: number; essentialCostHigh: number;
  wholeCostLow: number; wholeCostHigh: number;
  largeCostLow: number; largeCostHigh: number;
  costVsState: string; localCode: string;
  permitCost: string; permitDelay: string;
  dominantFuel: string; fuelReason: string;
  outageHoursYear: number; nearbyCities: string[];
  description: string; faqSpecific: FaqItem[];
}

type Props = { params: Promise<{ state: string; city: string }> };

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
    title: `Generator Installers in ${c.city}, ${c.stateAbbr} — Cost & Free Quotes (2026)`,
    description: `Find trusted generator installers in ${c.city}, ${c.state}. Average cost: $${c.wholeCostLow.toLocaleString()}-$${c.wholeCostHigh.toLocaleString()}. Get free, no-obligation quotes from certified local pros.`,
    alternates: {
      canonical: `https://homegen.co/generator-installation/${c.stateSlug}/${c.slug}`,
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { state, city } = await params;
  const c = getCity(state, city);
  if (!c) notFound();

  const intLink = "text-[var(--color-primary-cyan)] hover:underline";
  const thClass = "px-4 py-3 text-left text-sm font-semibold text-[var(--color-text-dark)] bg-[var(--color-bg-light)]";
  const tdClass = "px-4 py-3 text-sm text-[var(--color-text-body)] border-t border-[var(--color-border)]";

  // Find nearby cities that have published pages
  const publishedSlugs = new Set((citiesFullData as CityData[]).map((x) => x.slug));
  const nearbyCityData = c.nearbyCities
    .map((name) => {
      const match = (citiesFullData as CityData[]).find(
        (x) => x.city === name && publishedSlugs.has(x.slug)
      );
      return match ? { name: match.city, slug: match.slug, stateSlug: match.stateSlug, abbr: match.stateAbbr } : null;
    })
    .filter(Boolean) as { name: string; slug: string; stateSlug: string; abbr: string }[];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-white px-4 pt-16 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Breadcrumb */}
            <nav className="mb-4 text-sm text-[var(--color-text-light)]">
              <Link href="/" className={intLink}>HomeGen</Link>
              {" / "}
              <Link href={`/generator-installation/${c.stateSlug}`} className={intLink}>{c.state}</Link>
              {" / "}
              <span className="text-[var(--color-text-dark)]">{c.city}</span>
            </nav>

            <h1 className="text-3xl font-bold text-[var(--color-text-dark)] sm:text-4xl lg:text-5xl text-center">
              How Much Does Generator Installation Cost in{" "}
              <span className="gradient-text">{c.city}, {c.stateAbbr}</span>?
            </h1>

            {/* P0 */}
            <div className="mx-auto mt-6 max-w-2xl rounded-xl border-l-4 border-[var(--color-primary-cyan)] bg-[var(--color-bg-light)] p-5">
              <p className="text-sm font-medium text-[var(--color-text-dark)] leading-relaxed">
                A 22 kW whole-house generator costs{" "}
                <strong>${c.wholeCostLow.toLocaleString()} – ${c.wholeCostHigh.toLocaleString()} installed</strong>{" "}
                in {c.city} ({c.costVsState}). The primary outage risk is{" "}
                {c.primaryRisk.toLowerCase()}. {c.electricityProvider} serves the area with
                approximately {c.outageHoursYear} hours of outages per year.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Link
                href={`/get-quotes?city=${encodeURIComponent(c.city + ", " + c.stateAbbr)}&source=city-page`}
                className="btn-gradient inline-block rounded-xl px-8 py-4 text-base"
              >
                Get Free Quotes in {c.city}
              </Link>
            </div>
          </div>
        </section>

        {/* Cost section */}
        <section className="bg-[var(--color-bg-light)] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl">
              Generator Installation Cost in {c.city}
            </h2>

            <div className="mt-6 overflow-x-auto rounded-xl border border-[var(--color-border)]">
              <table className="w-full min-w-[480px]">
                <thead>
                  <tr>
                    <th className={thClass}>Setup</th>
                    <th className={thClass}>Size</th>
                    <th className={thClass}>Cost in {c.city}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={`${tdClass} font-medium text-[var(--color-text-dark)]`}>Essential circuits</td>
                    <td className={tdClass}>10-16 kW</td>
                    <td className={tdClass}>${c.essentialCostLow.toLocaleString()} – ${c.essentialCostHigh.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td className={`${tdClass} font-medium text-[var(--color-text-dark)]`}>Whole house</td>
                    <td className={tdClass}>20-22 kW</td>
                    <td className={tdClass}>${c.wholeCostLow.toLocaleString()} – ${c.wholeCostHigh.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td className={`${tdClass} font-medium text-[var(--color-text-dark)]`}>Large home</td>
                    <td className={tdClass}>24-48 kW</td>
                    <td className={tdClass}>${c.largeCostLow.toLocaleString()} – ${c.largeCostHigh.toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 space-y-3 text-[var(--color-text-body)] leading-relaxed">
              <p>{c.description}</p>
              <p>
                Not sure what size you need? Use our{" "}
                <Link href="/guides/generator-size-calculator" className={intLink}>sizing guide</Link>{" "}
                or{" "}
                <Link href="/calculator" className={intLink}>interactive calculator</Link>{" "}
                for a personalized recommendation. For the full national breakdown, see our{" "}
                <Link href="/guides/generator-installation-cost" className={intLink}>installation cost guide</Link>.
              </p>
            </div>

            <div className="mt-4 text-center">
              <Link href={`/get-quotes?city=${encodeURIComponent(c.city + ", " + c.stateAbbr)}&source=city-page`} className={`text-sm font-medium ${intLink}`}>
                Get exact quotes for {c.city} →
              </Link>
            </div>
          </div>
        </section>

        {/* City-specific requirements */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl">
              {c.city}-Specific Installation Requirements
            </h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-light)] p-4">
                <Shield size={20} className="mt-0.5 shrink-0 text-[var(--color-primary-cyan)]" />
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-dark)]">Local Code — {c.county} County</p>
                  <p className="mt-1 text-sm text-[var(--color-text-body)]">{c.localCode}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-light)] p-4">
                <Calendar size={20} className="mt-0.5 shrink-0 text-[var(--color-primary-cyan)]" />
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-dark)]">Permits</p>
                  <p className="mt-1 text-sm text-[var(--color-text-body)]">
                    Permit cost: {c.permitCost}. Timeline: {c.permitDelay}. Your installer handles filing and inspection.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-light)] p-4">
                <Zap size={20} className="mt-0.5 shrink-0 text-[var(--color-primary-cyan)]" />
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-dark)]">Preferred Fuel: {c.dominantFuel}</p>
                  <p className="mt-1 text-sm text-[var(--color-text-body)]">{c.fuelReason}</p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-[var(--color-text-body)]">
              See{" "}
              <Link href={`/generator-installation/${c.stateSlug}`} className={intLink}>
                statewide {c.state} costs and requirements
              </Link>{" "}
              for comparison.
            </p>
          </div>
        </section>

        {/* Power outage risk */}
        <section className="bg-[var(--color-bg-light)] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl">
              Power Outage Risk in {c.city}
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-white p-4">
                <CloudLightning size={22} className="shrink-0 text-[var(--color-primary-cyan)]" />
                <div>
                  <p className="text-lg font-bold text-[var(--color-text-dark)]">{c.avgOutages}</p>
                  <p className="text-xs text-[var(--color-text-light)]">Outages/year</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-white p-4">
                <Clock size={22} className="shrink-0 text-[var(--color-primary-cyan)]" />
                <div>
                  <p className="text-lg font-bold text-[var(--color-text-dark)]">{c.avgOutageDuration}h</p>
                  <p className="text-xs text-[var(--color-text-light)]">Avg duration</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-white p-4">
                <AlertTriangle size={22} className="shrink-0 text-[var(--color-primary-cyan)]" />
                <div>
                  <p className="text-xs font-bold text-[var(--color-text-dark)]">{c.primaryRisk}</p>
                  <p className="text-xs text-[var(--color-text-light)]">Primary risk</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-white p-4">
                <Zap size={22} className="shrink-0 text-[var(--color-primary-cyan)]" />
                <div>
                  <p className="text-xs font-bold text-[var(--color-text-dark)]">{c.electricityProvider}</p>
                  <p className="text-xs text-[var(--color-text-light)]">Local utility</p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-[var(--color-text-body)] leading-relaxed">
              {c.recentEvent}
            </p>
          </div>
        </section>

        {/* Best installers CTA */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl">
              Find Generator Installers in {c.city}
            </h2>
            <p className="mt-4 text-[var(--color-text-body)] leading-relaxed">
              HomeGen connects you with certified installers in {c.city} and
              surrounding areas
              {nearbyCityData.length > 0 && (
                <> including{" "}
                  {nearbyCityData.map((nc, i) => (
                    <span key={nc.slug}>
                      {i > 0 && (i === nearbyCityData.length - 1 ? " and " : ", ")}
                      <Link href={`/generator-installation/${nc.stateSlug}/${nc.slug}`} className={intLink}>
                        {nc.name}
                      </Link>
                    </span>
                  ))}
                </>
              )}
              . Get 2-3 quotes to compare pricing — installation costs vary
              by up to $3,000 between contractors in the same city.
            </p>
            <div className="mt-6 text-center">
              <Link
                href={`/get-quotes?city=${encodeURIComponent(c.city + ", " + c.stateAbbr)}&source=city-page`}
                className="btn-gradient inline-block rounded-xl px-8 py-4 text-base"
              >
                Get Free Quotes in {c.city}
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

        {/* FAQ */}
        <section className="bg-[var(--color-bg-light)] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl">
              FAQ — Generator Installation in {c.city}
            </h2>
            <div className="mt-8 space-y-6">
              {c.faqSpecific.map((item: FaqItem) => (
                <div key={item.q}>
                  <h3 className="text-lg font-semibold text-[var(--color-text-dark)]">{item.q}</h3>
                  <p className="mt-2 text-[var(--color-text-body)] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Author Box */}
        <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-start gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-light)] p-5 sm:p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary-cyan)] to-[var(--color-primary-mint)] text-lg font-bold text-white">
                LB
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--color-text-dark)]">Lyes</p>
                <p className="mt-1 text-xs text-[var(--color-text-light)]">Founder &amp; Home Energy Specialist</p>
                <p className="mt-2 text-sm text-[var(--color-text-body)] leading-relaxed">
                  Lyes tracks generator installation costs and local code requirements
                  across all 50 states. This page is reviewed by licensed electricians
                  who operate in {c.city}, {c.stateAbbr}.
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
              Ready to Get Generator Quotes in {c.city}?
            </h2>
            <p className="mt-4 text-[var(--color-text-light)]">
              Compare prices from certified local installers in {c.county} County. Free and no-obligation.
            </p>
            <Link
              href={`/get-quotes?city=${encodeURIComponent(c.city + ", " + c.stateAbbr)}&source=city-page`}
              className="btn-gradient mt-8 inline-block rounded-xl px-10 py-4 text-lg"
            >
              Get Your Free Quote Now
            </Link>
          </div>
        </section>

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Service",
                  name: `Home Generator Installation in ${c.city}, ${c.state}`,
                  description: `Professional standby generator installation in ${c.city}, ${c.state}. Compare local installers and get free quotes.`,
                  provider: { "@type": "Organization", name: "HomeGen", url: "https://homegen.co" },
                  areaServed: {
                    "@type": "City",
                    name: c.city,
                    containedInPlace: { "@type": "State", name: c.state },
                  },
                  offers: {
                    "@type": "AggregateOffer",
                    lowPrice: String(c.wholeCostLow),
                    highPrice: String(c.wholeCostHigh),
                    priceCurrency: "USD",
                  },
                },
                {
                  "@type": "FAQPage",
                  mainEntity: c.faqSpecific.map((item: FaqItem) => ({
                    "@type": "Question",
                    name: item.q,
                    acceptedAnswer: { "@type": "Answer", text: item.a },
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
