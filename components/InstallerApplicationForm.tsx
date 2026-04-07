"use client";

import { useState } from "react";
import { Loader2, CheckCircle } from "lucide-react";

const STATE_OPTIONS = [
  "Florida", "Texas", "Louisiana", "South Carolina", "North Carolina",
  "Georgia", "California", "Michigan", "New York", "Tennessee",
];

const BRAND_OPTIONS = ["Generac", "Kohler", "Cummins", "Briggs & Stratton"];

export default function InstallerApplicationForm() {
  const [form, setForm] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    states: [] as string[],
    otherState: "",
    cities: "",
    brands: [] as string[],
    otherBrand: "",
    generacCertified: false,
    kohlerCertified: false,
    monthlyInstalls: "",
    hearAbout: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const toggleState = (s: string) => {
    setForm((p) => ({
      ...p,
      states: p.states.includes(s)
        ? p.states.filter((x) => x !== s)
        : [...p.states, s],
    }));
  };

  const toggleBrand = (b: string) => {
    setForm((p) => ({
      ...p,
      brands: p.brands.includes(b)
        ? p.brands.filter((x) => x !== b)
        : [...p.brands, b],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const allStates = [...form.states];
      if (form.otherState.trim()) allStates.push(form.otherState.trim());
      const allBrands = [...form.brands];
      if (form.otherBrand.trim()) allBrands.push(form.otherBrand.trim());

      const res = await fetch("/api/installer-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          states: allStates,
          brands: allBrands,
          cities: form.cities
            .split(",")
            .map((c) => c.trim())
            .filter(Boolean),
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2AF59A]/20">
          <CheckCircle size={36} className="text-[#2AF59A]" />
        </div>
        <h3 className="mt-6 text-2xl font-bold text-white">
          Application Received!
        </h3>
        <p className="mt-4 text-gray-300">
          Thanks, <strong className="text-white">{form.companyName}</strong>.
          We&apos;ll review your application and get back to you within 24-48
          hours.
        </p>
        <div className="mt-6 text-left text-sm text-gray-400 max-w-sm mx-auto space-y-2">
          <p>Here&apos;s what happens next:</p>
          <p>1. We verify your license and coverage area</p>
          <p>2. We set up your installer profile</p>
          <p>3. We send your first 3 free leads</p>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Questions? Email us at{" "}
          <a href="mailto:partners@homegen.co" className="text-[#00D4E8] hover:underline">
            partners@homegen.co
          </a>
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-[#00D4E8] focus:outline-none focus:ring-2 focus:ring-[#00D4E8]/20";
  const labelClass = "mb-1.5 block text-sm font-medium text-gray-300";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Company & Contact */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Company Name *</label>
          <input
            required
            value={form.companyName}
            onChange={(e) => setForm({ ...form, companyName: e.target.value })}
            className={inputClass}
            placeholder="ABC Generators LLC"
          />
        </div>
        <div>
          <label className={labelClass}>Contact Name *</label>
          <input
            required
            value={form.contactName}
            onChange={(e) => setForm({ ...form, contactName: e.target.value })}
            className={inputClass}
            placeholder="John Smith"
          />
        </div>
      </div>

      {/* Email & Phone */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Email *</label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
            placeholder="john@abcgenerators.com"
          />
        </div>
        <div>
          <label className={labelClass}>Phone *</label>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={inputClass}
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      {/* Website */}
      <div>
        <label className={labelClass}>Website (optional)</label>
        <input
          value={form.website}
          onChange={(e) => setForm({ ...form, website: e.target.value })}
          className={inputClass}
          placeholder="https://abcgenerators.com"
        />
      </div>

      {/* States */}
      <div>
        <label className={labelClass}>States You Cover *</label>
        <div className="mt-2 flex flex-wrap gap-2">
          {STATE_OPTIONS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => toggleState(s)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                form.states.includes(s)
                  ? "bg-[#00D4E8]/20 text-[#00D4E8] border border-[#00D4E8]/40"
                  : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <input
          value={form.otherState}
          onChange={(e) => setForm({ ...form, otherState: e.target.value })}
          className={`${inputClass} mt-2`}
          placeholder="Other state..."
        />
      </div>

      {/* Cities */}
      <div>
        <label className={labelClass}>Cities You Cover (optional)</label>
        <input
          value={form.cities}
          onChange={(e) => setForm({ ...form, cities: e.target.value })}
          className={inputClass}
          placeholder="Miami, Tampa, Orlando"
        />
        <p className="mt-1 text-xs text-gray-500">Comma-separated</p>
      </div>

      {/* Brands */}
      <div>
        <label className={labelClass}>Brands You Install *</label>
        <div className="mt-2 flex flex-wrap gap-3">
          {BRAND_OPTIONS.map((b) => (
            <label key={b} className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
              <input
                type="checkbox"
                checked={form.brands.includes(b)}
                onChange={() => toggleBrand(b)}
                className="rounded accent-[#00D4E8]"
              />
              {b}
            </label>
          ))}
        </div>
        <input
          value={form.otherBrand}
          onChange={(e) => setForm({ ...form, otherBrand: e.target.value })}
          className={`${inputClass} mt-2`}
          placeholder="Other brand..."
        />
      </div>

      {/* Certifications */}
      <div className="flex flex-wrap gap-6">
        <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
          <input
            type="checkbox"
            checked={form.generacCertified}
            onChange={(e) => setForm({ ...form, generacCertified: e.target.checked })}
            className="rounded accent-[#00D4E8]"
          />
          Generac Certified Dealer
        </label>
        <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
          <input
            type="checkbox"
            checked={form.kohlerCertified}
            onChange={(e) => setForm({ ...form, kohlerCertified: e.target.checked })}
            className="rounded accent-[#00D4E8]"
          />
          Kohler Certified Dealer
        </label>
      </div>

      {/* Monthly installs & source */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Monthly Installations</label>
          <select
            value={form.monthlyInstalls}
            onChange={(e) => setForm({ ...form, monthlyInstalls: e.target.value })}
            className={inputClass}
          >
            <option value="">Select...</option>
            <option value="1-5">1-5</option>
            <option value="5-15">5-15</option>
            <option value="15-30">15-30</option>
            <option value="30+">30+</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>How did you hear about us?</label>
          <select
            value={form.hearAbout}
            onChange={(e) => setForm({ ...form, hearAbout: e.target.value })}
            className={inputClass}
          >
            <option value="">Select...</option>
            <option value="email">Email</option>
            <option value="google">Google</option>
            <option value="referral">Referral</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Notes */}
      <div>
        <label className={labelClass}>Anything else? (optional)</label>
        <textarea
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          rows={3}
          className={inputClass}
          placeholder="Tell us about your business..."
        />
      </div>

      {error && (
        <p className="rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-xl bg-gradient-to-r from-[#00D4E8] to-[#2AF59A] py-4 text-base font-bold text-white hover:opacity-90 transition disabled:opacity-50"
      >
        {submitting ? (
          <span className="inline-flex items-center gap-2">
            <Loader2 size={18} className="animate-spin" /> Submitting...
          </span>
        ) : (
          "Submit Application — Get Your First 3 Free Leads"
        )}
      </button>
    </form>
  );
}
