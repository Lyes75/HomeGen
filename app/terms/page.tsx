import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | HomeGen",
  description:
    "Terms of Service for HomeGen.co — the free home generator installer matching service.",
  alternates: { canonical: "https://homegen.co/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
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
            <span className="text-[var(--color-text-body)]">
              Terms of Service
            </span>
          </nav>

          <h1 className="text-3xl font-bold text-[var(--color-text-dark)] sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-[var(--color-text-light)]">
            Last updated: April 2026
          </p>

          <div className="mt-10 space-y-10 text-[var(--color-text-body)] leading-relaxed">
            {/* 1 */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-dark)]">
                1. About HomeGen
              </h2>
              <p className="mt-3">
                HomeGen (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) is a
                free online service operated by Netaudience, a digital agency
                based in Paris, France. HomeGen connects homeowners in the United
                States with local home generator installation professionals
                (&quot;Installers&quot;). We do not sell, install, or service
                generators. We are a lead generation and referral service.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-dark)]">
                2. Acceptance of Terms
              </h2>
              <p className="mt-3">
                By using HomeGen.co (the &quot;Site&quot;), you agree to these
                Terms of Service. If you do not agree, do not use the Site. We
                may update these Terms at any time. Continued use after changes
                constitutes acceptance.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-dark)]">
                3. The Service
              </h2>
              <div className="mt-3 space-y-3">
                <p>HomeGen provides:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    A free cost estimation calculator for home generator
                    installations
                  </li>
                  <li>
                    Educational content about home generators (guides, sizing
                    tools, brand comparisons)
                  </li>
                  <li>
                    A quote request form that connects you with up to 3 local
                    generator installers
                  </li>
                </ul>
                <p>
                  When you submit a quote request, your contact information and
                  project details are shared with installers in your area. This
                  is the core function of our service.
                </p>
              </div>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-dark)]">
                4. No Guarantee
              </h2>
              <div className="mt-3 space-y-3">
                <p>HomeGen does not guarantee:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    The accuracy of cost estimates (they are approximations based
                    on averages)
                  </li>
                  <li>
                    The quality, pricing, or availability of any installer
                  </li>
                  <li>That you will receive quotes from installers</li>
                  <li>
                    The outcome of any work performed by an installer
                  </li>
                </ul>
                <p>
                  Installers listed on or connected through HomeGen are
                  independent businesses. We do not employ, endorse, or supervise
                  them. Any agreement you enter into with an installer is solely
                  between you and that installer.
                </p>
              </div>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-dark)]">
                5. User Responsibilities
              </h2>
              <div className="mt-3 space-y-3">
                <p>By submitting a quote request, you represent that:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>You are at least 18 years old</li>
                  <li>
                    You are the homeowner or have authorization to request
                    generator installation quotes
                  </li>
                  <li>The information you provide is accurate</li>
                  <li>
                    You consent to being contacted by up to 3 installers via
                    phone, email, or text regarding your quote request
                  </li>
                </ul>
              </div>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-dark)]">
                6. Installer Relationships
              </h2>
              <div className="mt-3 space-y-3">
                <p>
                  If you are an installer using our partner program:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    You agree to contact leads promptly and professionally
                  </li>
                  <li>
                    You agree to pay for leads as outlined in your partnership
                    agreement
                  </li>
                  <li>
                    You agree not to resell or redistribute lead information
                  </li>
                  <li>
                    We reserve the right to terminate your participation at any
                    time
                  </li>
                </ul>
              </div>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-dark)]">
                7. Intellectual Property
              </h2>
              <p className="mt-3">
                All content on HomeGen.co, including text, calculators, guides,
                designs, and logos, is owned by Netaudience and protected by
                copyright. You may not reproduce, distribute, or create
                derivative works without written permission. You may link to our
                content freely.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-dark)]">
                8. Limitation of Liability
              </h2>
              <p className="mt-3">
                To the maximum extent permitted by law, HomeGen and Netaudience
                shall not be liable for any direct, indirect, incidental, or
                consequential damages arising from your use of the Site or from
                any interaction with installers found through the Site. Our total
                liability shall not exceed $100.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-dark)]">
                9. Indemnification
              </h2>
              <p className="mt-3">
                You agree to indemnify and hold harmless HomeGen, Netaudience,
                and their officers, employees, and agents from any claims,
                damages, or expenses arising from your use of the Site or your
                interactions with installers.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-dark)]">
                10. Third-Party Links
              </h2>
              <p className="mt-3">
                The Site may contain links to third-party websites (e.g.,
                manufacturer sites, retail stores). We are not responsible for
                the content or practices of these external sites.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-dark)]">
                11. Governing Law
              </h2>
              <p className="mt-3">
                These Terms are governed by the laws of the State of Delaware,
                United States, without regard to conflict of law principles. Any
                disputes shall be resolved in the courts of Delaware.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-dark)]">
                12. Contact
              </h2>
              <div className="mt-3">
                <p>For questions about these Terms, contact us at:</p>
                <p className="mt-2">
                  Netaudience
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:contact@homegen.co"
                    className="text-[var(--color-primary-cyan)] hover:underline"
                  >
                    contact@homegen.co
                  </a>
                  <br />
                  Website:{" "}
                  <a
                    href="https://homegen.co"
                    className="text-[var(--color-primary-cyan)] hover:underline"
                  >
                    https://homegen.co
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
