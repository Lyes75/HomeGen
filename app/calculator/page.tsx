import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalculatorDetailed from "@/components/CalculatorDetailed";

export const metadata: Metadata = {
  title:
    "Home Generator Size & Cost Calculator — Free Instant Estimate | HomeGen",
  description:
    "Calculate exactly what size generator you need and how much it will cost. Select your appliances, enter your home details, and get a personalized estimate in 2 minutes.",
  alternates: {
    canonical: "https://homegen.co/calculator",
  },
  openGraph: {
    title: "Free Home Generator Calculator | HomeGen",
    description:
      "Select your appliances, get your recommended generator size and cost estimate. 2 minutes, 100% free.",
    url: "https://homegen.co/calculator",
    type: "website",
  },
};

export default function CalculatorPage() {
  return (
    <>
      <Header />
      <main className="bg-[var(--color-bg-light)] px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-3xl mb-6">
          <nav className="text-sm text-[var(--color-text-light)]">
            <Link href="/" className="hover:text-[var(--color-primary-cyan)]">
              HomeGen
            </Link>
            {" / "}
            <span className="text-[var(--color-text-body)]">Calculator</span>
          </nav>
        </div>

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h1 className="text-3xl font-bold text-[var(--color-text-dark)] sm:text-4xl">
            Generator Size & Cost Calculator
          </h1>
          <p className="mt-3 text-[var(--color-text-body)]">
            Find out exactly what size generator you need and how much it will
            cost — based on your actual appliances, not just your square footage.
          </p>
          <p className="mt-2 text-sm text-[var(--color-text-light)]">
            Takes about 2 minutes. No signup required.
          </p>
        </div>

        <CalculatorDetailed />

        {/* Below calculator */}
        <div className="mx-auto max-w-3xl mt-12 text-center">
          <h2 className="text-lg font-semibold text-[var(--color-text-dark)]">
            How this calculator works
          </h2>
          <p className="mt-3 text-sm text-[var(--color-text-body)] leading-relaxed max-w-xl mx-auto">
            Our calculator adds up the running and starting wattages of every
            appliance you select, applies a 25% safety margin, then matches you
            to the smallest generator that can handle your peak load. Costs are
            adjusted based on your state&apos;s average labor rates and
            permitting fees.
          </p>
          <p className="mt-4">
            <Link
              href="/guides/generator-size-calculator"
              className="text-sm font-medium text-[var(--color-primary-cyan)] hover:underline"
            >
              Want to understand the math? Read our generator sizing guide →
            </Link>
          </p>
        </div>

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "HomeGen Generator Size & Cost Calculator",
              url: "https://homegen.co/calculator",
              description:
                "Free interactive calculator that determines the right generator size and estimates installation costs based on your home's specific appliances and location.",
              applicationCategory: "UtilityApplication",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              provider: {
                "@type": "Organization",
                name: "HomeGen",
                url: "https://homegen.co",
              },
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
