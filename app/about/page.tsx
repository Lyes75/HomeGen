import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About HomeGen — Free Generator Installer Matching Service | HomeGen",
  description:
    "HomeGen helps homeowners find the right home generator and the right installer. Free calculator, expert guides, and no-obligation quotes from certified local pros.",
  alternates: { canonical: "https://homegen.co/about" },
  openGraph: {
    title: "About HomeGen",
    description:
      "The free way to find trusted generator installers near you.",
    url: "https://homegen.co/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <nav className="mb-6 text-sm text-[var(--color-text-light)]">
            <Link href="/" className="hover:text-[var(--color-primary-cyan)]">
              HomeGen
            </Link>
            {" / "}
            <span className="text-[var(--color-text-body)]">About</span>
          </nav>

          <h1 className="text-3xl font-bold text-[var(--color-text-dark)] sm:text-4xl">
            About HomeGen
          </h1>

          <div className="mt-10 space-y-12 text-[var(--color-text-body)] leading-relaxed">
            {/* Intro */}
            <div className="space-y-4">
              <p className="text-lg">
                HomeGen helps homeowners find the right generator and the right
                installer, without the guesswork.
              </p>
              <p>
                Shopping for a home generator is confusing. You don&apos;t know
                what size you need, what it should cost, or which installer to
                trust. Most people end up on a big lead platform, fill out a
                form, and get bombarded by five or six companies calling within
                the hour. Half of them are quoting over the phone without ever
                seeing your house.
              </p>
              <p>
                We built HomeGen because we thought homeowners deserved better
                than that.
              </p>
            </div>

            {/* How it works */}
            <section>
              <h2 className="text-2xl font-bold text-[var(--color-text-dark)]">
                How HomeGen Works
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  HomeGen is a free service. You use our calculator to figure
                  out what size generator your home needs, read our guides to
                  understand costs and brands, and when you&apos;re ready,
                  submit a quote request. We send your info to a maximum of 3
                  vetted installers in your area. They contact you, usually
                  within 24-48 hours.
                </p>
                <p>
                  You don&apos;t pay us anything. Ever. Installers pay us a fee
                  for each lead we send them. That&apos;s how we keep the
                  service free for homeowners.
                </p>
              </div>
            </section>

            {/* What makes us different */}
            <section>
              <h2 className="text-2xl font-bold text-[var(--color-text-dark)]">
                What Makes Us Different
              </h2>

              <div className="mt-6 space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text-dark)]">
                    We educate first, sell second.
                  </h3>
                  <p className="mt-2">
                    Most lead gen sites ask for your phone number on the first
                    screen. We don&apos;t. Our calculator, sizing guide, and
                    cost breakdowns are all available without giving us any
                    personal info. We want you to understand what you need
                    before you talk to an installer. An informed buyer gets a
                    better deal.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text-dark)]">
                    We limit installers to 3 per lead.
                  </h3>
                  <p className="mt-2">
                    Big platforms send your info to 5, 6, sometimes 8
                    companies. Your phone rings off the hook for a week. We cap
                    it at 3. Enough to compare quotes, not enough to lose your
                    mind.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text-dark)]">
                    We actually know this industry.
                  </h3>
                  <p className="mt-2">
                    Our content isn&apos;t generic filler written to rank on
                    Google. Our guides include real wattage charts,
                    brand-specific pricing, state-by-state cost data, and the
                    kind of details you&apos;d normally only get from an
                    installer sitting in your kitchen. We&apos;ve spent months
                    researching this market so you don&apos;t have to.
                  </p>
                </div>
              </div>
            </section>

            {/* Who's behind */}
            <section>
              <h2 className="text-2xl font-bold text-[var(--color-text-dark)]">
                Who&apos;s Behind HomeGen
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  HomeGen is operated by Netaudience, a digital agency with
                  over 15 years of experience in online marketing for the home
                  services and financial sectors. We&apos;ve built lead
                  generation platforms, comparison tools, and content sites
                  across multiple industries. HomeGen is our entry into the US
                  home improvement market.
                </p>
                <p>
                  We&apos;re a small team, and we&apos;re not trying to be Angi
                  or HomeAdvisor. We&apos;re focused on one vertical — home
                  generators — and doing it better than anyone else.
                </p>
              </div>
            </section>

            {/* For installers */}
            <section>
              <h2 className="text-2xl font-bold text-[var(--color-text-dark)]">
                For Installers
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  If you&apos;re a licensed generator installer looking for
                  pre-qualified leads in your area, we&apos;d like to work with
                  you. HomeGen sends you leads with full contact info and
                  project details. You pay per lead, with no subscription and
                  no contract. Your first 3 leads are free.
                </p>
                <p>
                  <Link
                    href="/for-installers"
                    className="text-[var(--color-primary-cyan)] font-medium hover:underline"
                  >
                    Learn more about our installer program →
                  </Link>
                </p>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-[var(--color-text-dark)]">
                Contact Us
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  Have a question, a suggestion, or a correction for one of our
                  guides? We&apos;d love to hear from you.
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:contact@homegen.co"
                    className="text-[var(--color-primary-cyan)] hover:underline"
                  >
                    contact@homegen.co
                  </a>
                </p>
                <p>
                  For installer partnership inquiries, please visit our{" "}
                  <Link
                    href="/for-installers"
                    className="text-[var(--color-primary-cyan)] hover:underline"
                  >
                    installer page
                  </Link>{" "}
                  or email us directly.
                </p>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-light)] p-8 text-center sm:p-10">
            <p className="text-lg text-[var(--color-text-dark)]">
              Looking for a home generator? Start with our free calculator or
              get quotes from local installers.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/calculator"
                className="rounded-xl border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-text-dark)] hover:bg-gray-50 transition"
              >
                Try the Calculator →
              </Link>
              <Link
                href="/get-quotes?source=about"
                className="btn-gradient rounded-xl px-6 py-3 text-sm font-semibold"
              >
                Get Free Quotes →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
