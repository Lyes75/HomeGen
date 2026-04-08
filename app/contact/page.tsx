import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Clock, Wrench, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | HomeGen",
  description:
    "Have a question about home generators or our service? Contact the HomeGen team. We typically respond within 24 hours.",
  alternates: { canonical: "https://homegen.co/contact" },
};

export default function ContactPage() {
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
            <span className="text-[var(--color-text-body)]">Contact</span>
          </nav>

          <h1 className="text-3xl font-bold text-[var(--color-text-dark)] sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-3 text-[var(--color-text-body)]">
            Have a question, a suggestion, or feedback? We&apos;d love to hear
            from you.
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-5">
            {/* Left — Info */}
            <div className="space-y-6 lg:col-span-2">
              <div className="flex gap-3">
                <Mail
                  size={20}
                  className="mt-0.5 shrink-0 text-[var(--color-primary-cyan)]"
                />
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-dark)]">
                    Email
                  </p>
                  <a
                    href="mailto:contact@homegen.co"
                    className="text-sm text-[var(--color-primary-cyan)] hover:underline"
                  >
                    contact@homegen.co
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock
                  size={20}
                  className="mt-0.5 shrink-0 text-[var(--color-primary-cyan)]"
                />
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-dark)]">
                    Response Time
                  </p>
                  <p className="text-sm text-[var(--color-text-body)]">
                    We typically respond within 24 hours on business days.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Wrench
                  size={20}
                  className="mt-0.5 shrink-0 text-[var(--color-primary-cyan)]"
                />
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-dark)]">
                    For Installers
                  </p>
                  <p className="text-sm text-[var(--color-text-body)]">
                    Looking to join our installer network?{" "}
                    <Link
                      href="/for-installers"
                      className="text-[var(--color-primary-cyan)] hover:underline"
                    >
                      Visit our partner page →
                    </Link>
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Zap
                  size={20}
                  className="mt-0.5 shrink-0 text-[var(--color-primary-cyan)]"
                />
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-dark)]">
                    Looking for a Quote?
                  </p>
                  <p className="text-sm text-[var(--color-text-body)]">
                    If you need a generator installation quote, use our{" "}
                    <Link
                      href="/get-quotes"
                      className="text-[var(--color-primary-cyan)] hover:underline"
                    >
                      free quote form →
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
