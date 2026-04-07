import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Send,
  MapPin,
  ClipboardCheck,
  DollarSign,
  Ban,
  ChevronDown,
  User,
  Mail,
  Phone,
  Home,
  Zap,
  Battery,
  Fuel,
  Calendar,
  MessageSquare,
} from "lucide-react";
import InstallerApplicationForm from "@/components/InstallerApplicationForm";

export const metadata: Metadata = {
  title:
    "Partner with HomeGen — Get Pre-Qualified Generator Leads | For Installers",
  description:
    "Join HomeGen's installer network. Receive pre-qualified home generator installation leads in your area. Pay per lead, no subscription, no contract. First 3 leads free.",
  alternates: {
    canonical: "https://homegen.co/for-installers",
  },
  openGraph: {
    title: "Get Generator Installation Leads — HomeGen Partner Program",
    description:
      "Pre-qualified leads. Pay per lead. No subscription. First 3 leads free.",
    url: "https://homegen.co/for-installers",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
  },
};

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-gray-200 last:border-0">
      <summary className="flex cursor-pointer items-center justify-between py-5 text-left">
        <span className="text-base font-medium text-[#1E293B] pr-4">{q}</span>
        <ChevronDown
          size={18}
          className="shrink-0 text-gray-400 transition-transform group-open:rotate-180"
        />
      </summary>
      <p className="pb-5 text-sm text-[#475569] leading-relaxed">{a}</p>
    </details>
  );
}

export default function ForInstallersPage() {
  return (
    <div className="min-h-screen">
      {/* ===== HERO ===== */}
      <section className="bg-[#0F172A] px-4 py-6 sm:px-6 lg:px-8">
        {/* Mini nav */}
        <div className="mx-auto max-w-5xl flex items-center justify-between">
          <Image
            src="/logo-full.png"
            alt="HomeGen"
            width={130}
            height={34}
            className="brightness-0 invert"
          />
          <Link
            href="/"
            className="text-xs text-gray-500 hover:text-gray-300 inline-flex items-center gap-1"
          >
            <ArrowLeft size={12} /> Back to HomeGen.co
          </Link>
        </div>

        <div className="mx-auto max-w-3xl text-center pt-16 pb-20">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
            Get{" "}
            <span className="bg-gradient-to-r from-[#00D4E8] to-[#2AF59A] bg-clip-text text-transparent">
              Pre-Qualified
            </span>{" "}
            Generator Leads Sent Directly to You
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            HomeGen connects homeowners looking for generator installation with
            certified local pros like you. Pay per lead. No subscription. No
            contract.
          </p>
          <a
            href="#apply"
            className="mt-8 inline-block rounded-xl bg-gradient-to-r from-[#00D4E8] to-[#2AF59A] px-8 py-4 text-base font-bold text-white hover:opacity-90 transition"
          >
            Apply to Join — It&apos;s Free
          </a>
          <p className="mt-4 text-sm text-gray-500">
            Your first 3 leads are on us.
          </p>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-[#1E293B]">
            How It Works
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                num: "1",
                icon: ClipboardCheck,
                title: "A homeowner requests a quote",
                desc: "Homeowners visit HomeGen.co, use our calculator to estimate their generator needs, and submit a quote request with their name, phone, email, home size, fuel type, and timeline.",
              },
              {
                num: "2",
                icon: Send,
                title: "We match them with you",
                desc: "We send the lead directly to your email within minutes. You get the homeowner's full contact info and project details — ready to call.",
              },
              {
                num: "3",
                icon: DollarSign,
                title: "You close the deal",
                desc: "Contact the homeowner, schedule a site visit, and close the sale. You only pay for leads you receive — not for leads you close.",
              },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#00D4E8] to-[#2AF59A] text-lg font-bold text-white">
                  {step.num}
                </div>
                <step.icon
                  size={24}
                  className="mx-auto mt-4 text-[#00D4E8]"
                />
                <h3 className="mt-3 text-base font-semibold text-[#1E293B]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-[#475569] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY HOMEGEN ===== */}
      <section className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-[#1E293B]">
            Why Installers Choose HomeGen
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: DollarSign,
                title: "Pay Per Lead, Not Per Month",
                desc: "No subscriptions. No retainers. No minimum commitments. You pay $40-75 per lead, only when we send you one. Pause or cancel anytime — no questions asked.",
              },
              {
                icon: MapPin,
                title: "Your Service Area Only",
                desc: "You set your coverage area — by city, county, or state. We only send you leads from homeowners in your zone. No wasted leads from 200 miles away.",
              },
              {
                icon: ClipboardCheck,
                title: "Pre-Qualified Leads",
                desc: "Every lead includes: name, phone, email, city, home size, generator need, fuel type preference, and timeline. No tire-kickers — these are homeowners actively looking.",
              },
              {
                icon: Ban,
                title: "No Exclusivity",
                desc: "Work with other lead sources too. We don't require exclusivity. HomeGen is an additional channel, not a replacement for your existing marketing.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#E2E8F0] bg-white p-6"
              >
                <item.icon size={24} className="text-[#00D4E8]" />
                <h3 className="mt-3 text-base font-semibold text-[#1E293B]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#475569] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THE MATH ===== */}
      <section className="bg-[#0F172A] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold text-white">
            The Math Works
          </h2>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
            <div className="space-y-4 text-center">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Average lead cost</span>
                <span className="text-lg font-semibold text-white">$40</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">
                  Leads to close 1 job
                </span>
                <span className="text-lg font-semibold text-white">&times; 3</span>
              </div>
              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <span className="text-gray-400">
                  Your cost to acquire a customer
                </span>
                <span className="text-4xl font-bold bg-gradient-to-r from-[#00D4E8] to-[#2AF59A] bg-clip-text text-transparent">
                  $120
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">
                  Average installation job revenue
                </span>
                <span className="text-lg font-semibold text-white">
                  $10,000
                </span>
              </div>
              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <span className="text-gray-400">
                  Acquisition cost as % of revenue
                </span>
                <span className="text-4xl font-bold bg-gradient-to-r from-[#00D4E8] to-[#2AF59A] bg-clip-text text-transparent">
                  1.2%
                </span>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">
                Compare that to:
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Google Ads</span>
                  <span className="text-gray-300">$50-150 per click</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Angi / HomeAdvisor</span>
                  <span className="text-gray-300">
                    $15-80/lead + monthly fee
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Door-to-door</span>
                  <span className="text-gray-300">
                    $500+ per acquired customer
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-400 max-w-lg mx-auto">
            Most installers close 1 in 3 leads. That means every $120 in lead
            costs generates a $10,000 job. Where else do you get that ROI?
          </p>
        </div>
      </section>

      {/* ===== SAMPLE LEAD ===== */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold text-[#1E293B]">
            What&apos;s Included in Every Lead
          </h2>

          <div className="mt-10 mx-auto max-w-md rounded-2xl border-2 border-[#00D4E8]/20 bg-gradient-to-br from-[#00D4E8]/5 to-[#2AF59A]/5 p-6 sm:p-8">
            <p className="text-xs font-medium text-[#00D4E8] uppercase tracking-wider mb-4">
              Sample Lead
            </p>
            <div className="space-y-3">
              {[
                { icon: User, label: "John Smith" },
                { icon: Mail, label: "john.smith@email.com" },
                { icon: Phone, label: "(305) 555-0147" },
                { icon: MapPin, label: "Miami, FL 33101" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <item.icon size={16} className="text-[#00D4E8] shrink-0" />
                  <span className="text-sm text-[#1E293B]">{item.label}</span>
                </div>
              ))}

              <div className="border-t border-[#E2E8F0] my-3" />

              {[
                { icon: Home, label: "Home Size:", value: "2,200 sq ft" },
                { icon: Zap, label: "Need:", value: "New installation" },
                { icon: Battery, label: "Coverage:", value: "Whole house" },
                { icon: Fuel, label: "Fuel:", value: "Natural Gas" },
                { icon: Calendar, label: "Timeline:", value: "Within 1 month" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <item.icon size={16} className="text-[#94A3B8] shrink-0" />
                  <span className="text-xs text-[#94A3B8]">{item.label}</span>
                  <span className="text-sm text-[#1E293B]">{item.value}</span>
                </div>
              ))}

              <div className="border-t border-[#E2E8F0] my-3" />

              <div className="flex items-start gap-3">
                <MessageSquare size={16} className="text-[#94A3B8] shrink-0 mt-0.5" />
                <p className="text-sm text-[#475569] italic">
                  &quot;Looking for 22kW Generac. Want to be ready before
                  hurricane season.&quot;
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs text-[#94A3B8]">
              Source: HomeGen.co/generator-installation/florida
              <br />
              Submitted: April 7, 2026 at 2:34 PM
            </p>
          </div>

          <p className="mt-6 text-center text-sm text-[#475569]">
            This is exactly what you&apos;ll receive by email within minutes of
            a homeowner submitting a request in your area.
          </p>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold text-[#1E293B]">
            Simple, Transparent Pricing
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {/* Starter */}
            <div className="rounded-2xl border-2 border-[#00D4E8]/30 bg-white p-6 sm:p-8">
              <p className="text-xs font-medium text-[#00D4E8] uppercase tracking-wider">
                Starter
              </p>
              <p className="mt-2 text-sm text-[#475569]">Your first 3 leads</p>
              <p className="mt-4 text-4xl font-bold text-[#1E293B]">FREE</p>
              <ul className="mt-6 space-y-2 text-sm text-[#475569]">
                <li>No credit card</li>
                <li>No commitment</li>
                <li>Test the quality before you pay a cent</li>
              </ul>
              <a
                href="#apply"
                className="mt-6 block rounded-lg bg-gradient-to-r from-[#00D4E8] to-[#2AF59A] py-3 text-center text-sm font-semibold text-white hover:opacity-90 transition"
              >
                Apply Now
              </a>
            </div>

            {/* Growth */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8">
              <p className="text-xs font-medium text-[#475569] uppercase tracking-wider">
                Growth
              </p>
              <p className="mt-2 text-sm text-[#475569]">Standard pricing</p>
              <p className="mt-4">
                <span className="text-4xl font-bold text-[#1E293B]">
                  $40-75
                </span>
                <span className="text-sm text-[#94A3B8]"> /lead</span>
              </p>
              <ul className="mt-6 space-y-2 text-sm text-[#475569]">
                <li>Price varies by location & project size</li>
                <li>Billed monthly</li>
                <li>Cancel anytime</li>
              </ul>
              <a
                href="#apply"
                className="mt-6 block rounded-lg border border-[#E2E8F0] py-3 text-center text-sm font-semibold text-[#1E293B] hover:bg-[#F8FAFC] transition"
              >
                Apply Now
              </a>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-[#94A3B8]">
            No setup fees. No monthly minimums. No contracts.
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-3xl font-bold text-[#1E293B]">
            Questions from Installers
          </h2>

          <div className="mt-10">
            <FAQItem
              q="How quickly do I receive leads?"
              a="Leads are sent to your email within minutes of a homeowner submitting a request. You'll also be able to see all your leads in your installer dashboard (coming soon)."
            />
            <FAQItem
              q="How do I pay?"
              a="We invoice monthly for the leads delivered that month. Payment is via credit card or bank transfer. No upfront deposits."
            />
            <FAQItem
              q="Can I set my service area?"
              a="Yes. You tell us which cities, counties, or states you cover, and we only send you leads from those areas. You can update your coverage area anytime."
            />
            <FAQItem
              q="Are leads exclusive or shared?"
              a="By default, each lead is sent to 2-3 installers in the area so the homeowner gets multiple quotes. If you want exclusive leads (sent only to you), the per-lead price is higher. We'll discuss this during onboarding."
            />
            <FAQItem
              q="What if a lead has bad contact info?"
              a="If a lead has an invalid phone number or email and you can't reach the homeowner, let us know within 48 hours and we'll credit or replace the lead."
            />
            <FAQItem
              q="Do I need to be certified?"
              a="We work with licensed electricians and generator installers. Generac/Kohler certification is a plus but not required. You must carry general liability insurance."
            />
            <FAQItem
              q="Can I pause receiving leads?"
              a="Yes. You can pause and resume at any time. Going on vacation? Booked solid for the month? Just let us know."
            />
            <FAQItem
              q="What brands do you cover?"
              a="We're brand-agnostic. Homeowners on our site can express preferences for Generac, Kohler, Cummins, or any brand. You'll see their preference in the lead details."
            />
          </div>
        </div>
      </section>

      {/* ===== APPLICATION FORM ===== */}
      <section id="apply" className="bg-[#0F172A] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          <h2 className="text-center text-3xl font-bold text-white">
            Apply to Join the HomeGen Network
          </h2>
          <p className="mt-3 text-center text-sm text-gray-400">
            Takes 2 minutes. No commitment. Your first 3 leads are free.
          </p>

          <div className="mt-10">
            <InstallerApplicationForm />
          </div>
        </div>
      </section>

      {/* ===== MINI FOOTER ===== */}
      <footer className="bg-[#0F172A] border-t border-white/5 px-4 py-6 sm:px-6">
        <div className="mx-auto max-w-5xl flex items-center justify-between text-xs text-gray-600">
          <p>&copy; 2026 HomeGen. All rights reserved.</p>
          <Link href="/privacy" className="hover:text-gray-400">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
