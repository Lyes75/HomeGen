import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Quote Request Submitted | HomeGen",
  description: "Your generator installation quote request has been submitted.",
};

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="bg-[var(--color-bg-light)] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary-cyan)]/10 to-[var(--color-primary-mint)]/10">
            <CheckCircle
              size={36}
              className="text-[var(--color-success)]"
            />
          </div>
          <h1 className="mt-6 text-3xl font-bold text-[var(--color-text-dark)]">
            Thank You!
          </h1>
          <p className="mt-4 text-lg text-[var(--color-text-body)]">
            Your quote request has been submitted successfully.
          </p>
          <p className="mt-2 text-[var(--color-text-body)]">
            You&apos;ll hear from local installers within 24-48 hours.
          </p>

          <div className="mt-10 rounded-xl border border-[var(--color-border)] bg-white p-6">
            <h2 className="font-semibold text-[var(--color-text-dark)]">
              While you wait...
            </h2>
            <p className="mt-2 text-sm text-[var(--color-text-body)]">
              Learn more about generator sizing, costs, and brands with our
              guides.
            </p>
            <Link
              href="/#guides"
              className="btn-gradient mt-4 inline-block rounded-lg px-6 py-2.5 text-sm"
            >
              Check Out Our Buying Guides
            </Link>
          </div>

          <Link
            href="/"
            className="mt-8 inline-block text-sm font-medium text-[var(--color-primary-cyan)] hover:underline"
          >
            ← Back to HomeGen
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
