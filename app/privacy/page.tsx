import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | HomeGen",
  description:
    "Privacy Policy for HomeGen.co — how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://homegen.co/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
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
              Privacy Policy
            </span>
          </nav>

          <h1 className="text-3xl font-bold text-[var(--color-text-dark)] sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-[var(--color-text-light)]">
            Last updated: April 2026
          </p>

          <div className="mt-10 space-y-10 text-[var(--color-text-body)] leading-relaxed">
            {/* 1 */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-dark)]">
                1. Who We Are
              </h2>
              <p className="mt-3">
                HomeGen.co is operated by Netaudience, a digital agency based in
                Paris, France. This Privacy Policy explains how we collect, use,
                and protect your personal information when you use our website.
              </p>
              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:contact@netaudience.fr"
                  className="text-[var(--color-primary-cyan)] hover:underline"
                >
                  contact@netaudience.fr
                </a>
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-dark)]">
                2. Information We Collect
              </h2>
              <div className="mt-3 space-y-4">
                <div>
                  <h3 className="font-medium text-[var(--color-text-dark)]">
                    Information you provide directly
                  </h3>
                  <p className="mt-1">
                    When you submit a quote request on HomeGen.co, we collect:
                  </p>
                  <ul className="mt-2 list-disc pl-6 space-y-1">
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>City or ZIP code</li>
                    <li>Home size (square footage)</li>
                    <li>
                      Generator project details (type of need, coverage, fuel
                      preference, timeline)
                    </li>
                    <li>Any additional notes you include</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-[var(--color-text-dark)]">
                    Information collected automatically
                  </h3>
                  <p className="mt-1">
                    When you browse our site, we may collect:
                  </p>
                  <ul className="mt-2 list-disc pl-6 space-y-1">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Pages visited and time spent</li>
                    <li>Referring URL</li>
                    <li>Device type</li>
                  </ul>
                  <p className="mt-2">
                    We use Vercel Analytics for basic website analytics. We do
                    not use Google Analytics or Facebook Pixel.
                  </p>
                </div>
              </div>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-dark)]">
                3. How We Use Your Information
              </h2>
              <div className="mt-3 space-y-3">
                <p>We use your information to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Connect you with up to 3 local generator installers who may
                    contact you about your quote request
                  </li>
                  <li>
                    Send you a confirmation of your quote request via email
                  </li>
                  <li>
                    Improve our calculator estimates and site content based on
                    aggregate data
                  </li>
                  <li>
                    Respond to your inquiries if you contact us directly
                  </li>
                </ul>
                <p>We do NOT use your information to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Send marketing emails or newsletters (unless you opt in
                    separately in the future)
                  </li>
                  <li>
                    Sell your data to data brokers or marketing companies
                  </li>
                  <li>
                    Create advertising profiles or retarget you with ads
                  </li>
                </ul>
              </div>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-dark)]">
                4. How We Share Your Information
              </h2>
              <div className="mt-3 space-y-3">
                <p>
                  When you submit a quote request, your contact information and
                  project details are shared with up to 3 generator installers in
                  your area. This is the primary purpose of our service and you
                  consent to this sharing by submitting the form.
                </p>
                <p>We may also share information with:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>Formspree</strong> (form processing service) —
                    processes your form submission and sends us an email
                    notification
                  </li>
                  <li>
                    <strong>Supabase</strong> (database hosting) — stores your
                    quote request securely
                  </li>
                  <li>
                    <strong>Vercel</strong> (website hosting) — hosts our website
                    and may process server logs
                  </li>
                </ul>
                <p>
                  We do not sell your personal information to any third party.
                </p>
              </div>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-dark)]">
                5. Data Retention
              </h2>
              <p className="mt-3">
                We retain your quote request data for up to 24 months after
                submission. After this period, your data is deleted from our
                active database. You may request deletion at any time (see
                Section 8).
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-dark)]">
                6. Data Security
              </h2>
              <div className="mt-3 space-y-3">
                <p>
                  We take reasonable measures to protect your data, including:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>HTTPS encryption on all pages</li>
                  <li>
                    Secure database hosting via Supabase with row-level security
                  </li>
                  <li>
                    Limited access to personal data (only site administrators)
                  </li>
                </ul>
                <p>
                  No method of transmission or storage is 100% secure. While we
                  strive to protect your information, we cannot guarantee
                  absolute security.
                </p>
              </div>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-dark)]">
                7. Cookies
              </h2>
              <div className="mt-3 space-y-3">
                <p>HomeGen.co uses minimal cookies:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>Essential cookies</strong>: Required for the website
                    to function (e.g., admin session cookies)
                  </li>
                  <li>
                    <strong>Analytics cookies</strong>: Vercel Analytics may use
                    cookies to measure site performance
                  </li>
                </ul>
                <p>
                  We do not use advertising cookies, tracking pixels, or social
                  media cookies. We do not use Google Analytics.
                </p>
              </div>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-dark)]">
                8. Your Rights
              </h2>
              <div className="mt-3 space-y-3">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>Access</strong>: Request a copy of the personal data
                    we hold about you
                  </li>
                  <li>
                    <strong>Correction</strong>: Request correction of inaccurate
                    data
                  </li>
                  <li>
                    <strong>Deletion</strong>: Request deletion of your data from
                    our systems
                  </li>
                  <li>
                    <strong>Opt-out</strong>: Request that your information not
                    be shared with additional installers
                  </li>
                </ul>
                <p>
                  To exercise any of these rights, email us at{" "}
                  <a
                    href="mailto:contact@netaudience.fr"
                    className="text-[var(--color-primary-cyan)] hover:underline"
                  >
                    contact@netaudience.fr
                  </a>{" "}
                  with the subject line &quot;Privacy Request&quot; and include
                  your name and the email address you used to submit your quote.
                  We will respond within 30 days.
                </p>
              </div>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-dark)]">
                9. California Privacy Rights (CCPA)
              </h2>
              <div className="mt-3 space-y-3">
                <p>
                  If you are a California resident, you have additional rights
                  under the California Consumer Privacy Act (CCPA):
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    The right to know what personal information we collect and
                    how it is used
                  </li>
                  <li>The right to delete your personal information</li>
                  <li>
                    The right to opt-out of the sale of your personal information
                    (we do not sell personal information)
                  </li>
                  <li>
                    The right to non-discrimination for exercising your privacy
                    rights
                  </li>
                </ul>
                <p>
                  To submit a CCPA request, email{" "}
                  <a
                    href="mailto:contact@netaudience.fr"
                    className="text-[var(--color-primary-cyan)] hover:underline"
                  >
                    contact@netaudience.fr
                  </a>{" "}
                  with the subject line &quot;CCPA Request.&quot;
                </p>
              </div>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-dark)]">
                10. Children&apos;s Privacy
              </h2>
              <p className="mt-3">
                HomeGen.co is not intended for use by individuals under the age
                of 18. We do not knowingly collect personal information from
                children. If we learn that we have collected information from a
                child under 18, we will delete it promptly.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-dark)]">
                11. Changes to This Policy
              </h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. Changes will
                be posted on this page with an updated &quot;Last updated&quot;
                date. We encourage you to review this page periodically.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-dark)]">
                12. Contact Us
              </h2>
              <div className="mt-3">
                <p>
                  If you have questions about this Privacy Policy, contact us at:
                </p>
                <p className="mt-2">
                  Netaudience
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:contact@netaudience.fr"
                    className="text-[var(--color-primary-cyan)] hover:underline"
                  >
                    contact@netaudience.fr
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
