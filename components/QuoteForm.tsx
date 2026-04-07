"use client";

import { useState } from "react";
import { Loader2, Lock, CheckCircle } from "lucide-react";
import Link from "next/link";

interface QuoteFormProps {
  initialCity?: string;
  source?: string;
}

export default function QuoteForm({ initialCity = "", source = "direct" }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: initialCity,
    homeSize: "",
    generatorNeed: "",
    coverage: "",
    fuel: "",
    notes: "",
    timeline: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("https://formspree.io/f/mykbolzl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source,
          submittedAt: new Date().toISOString(),
          _subject: `New HomeGen Lead — ${formData.city || "Unknown"}`,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="mt-10 rounded-2xl border border-[var(--color-border)] bg-white p-8 text-center shadow-sm sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary-cyan)]/10 to-[var(--color-primary-mint)]/10">
          <CheckCircle size={36} className="text-[var(--color-success)]" />
        </div>
        <h2 className="mt-6 text-2xl font-bold text-[var(--color-text-dark)]">
          Thank You! Your Quote Request Has Been Submitted.
        </h2>
        <p className="mt-4 text-[var(--color-text-body)]">
          You&apos;ll hear from local installers within 24-48 hours.
        </p>
        <Link
          href="/guides/generator-installation-cost"
          className="btn-gradient mt-8 inline-block rounded-lg px-6 py-3 text-sm"
        >
          While You Wait, Check Our Generator Buying Guide →
        </Link>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-text-dark)] placeholder:text-[var(--color-text-light)] focus:border-[var(--color-primary-cyan)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-cyan)]/20";

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-[var(--color-text-dark)]"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Smith"
            className={inputClass}
          />
        </div>

        {/* Email & Phone */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-[var(--color-text-dark)]"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={inputClass}
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="mb-1.5 block text-sm font-medium text-[var(--color-text-dark)]"
            >
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="(555) 123-4567"
              className={inputClass}
            />
          </div>
        </div>

        {/* City & Home Size */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="city"
              className="mb-1.5 block text-sm font-medium text-[var(--color-text-dark)]"
            >
              City or ZIP Code <span className="text-red-500">*</span>
            </label>
            <input
              id="city"
              name="city"
              type="text"
              required
              value={formData.city}
              onChange={handleChange}
              placeholder="Miami, FL or 33101"
              className={inputClass}
            />
          </div>
          <div>
            <label
              htmlFor="homeSize"
              className="mb-1.5 block text-sm font-medium text-[var(--color-text-dark)]"
            >
              Home Size (sq ft) <span className="text-red-500">*</span>
            </label>
            <input
              id="homeSize"
              name="homeSize"
              type="number"
              required
              value={formData.homeSize}
              onChange={handleChange}
              placeholder="e.g. 2000"
              className={inputClass}
            />
          </div>
        </div>

        {/* Generator Need */}
        <div>
          <label
            htmlFor="generatorNeed"
            className="mb-1.5 block text-sm font-medium text-[var(--color-text-dark)]"
          >
            What Do You Need? <span className="text-red-500">*</span>
          </label>
          <select
            id="generatorNeed"
            name="generatorNeed"
            required
            value={formData.generatorNeed}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select...</option>
            <option value="new">New installation</option>
            <option value="replacement">Replacement / upgrade</option>
            <option value="repair">Repair or maintenance</option>
            <option value="advice">Not sure — need advice</option>
          </select>
        </div>

        {/* Coverage & Fuel */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="coverage"
              className="mb-1.5 block text-sm font-medium text-[var(--color-text-dark)]"
            >
              Coverage
            </label>
            <select
              id="coverage"
              name="coverage"
              value={formData.coverage}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select...</option>
              <option value="essential">Essential circuits only</option>
              <option value="whole">Whole house</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="fuel"
              className="mb-1.5 block text-sm font-medium text-[var(--color-text-dark)]"
            >
              Preferred Fuel Type
            </label>
            <select
              id="fuel"
              name="fuel"
              value={formData.fuel}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select...</option>
              <option value="natural-gas">Natural Gas</option>
              <option value="propane">Propane</option>
              <option value="diesel">Diesel</option>
              <option value="not-sure">Not sure</option>
            </select>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <label
            htmlFor="timeline"
            className="mb-1.5 block text-sm font-medium text-[var(--color-text-dark)]"
          >
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select...</option>
            <option value="asap">As soon as possible</option>
            <option value="1-month">Within 1 month</option>
            <option value="3-months">Within 3 months</option>
            <option value="researching">Just researching</option>
          </select>
        </div>

        {/* Notes */}
        <div>
          <label
            htmlFor="notes"
            className="mb-1.5 block text-sm font-medium text-[var(--color-text-dark)]"
          >
            Additional Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            value={formData.notes}
            onChange={handleChange}
            placeholder="Any details about your home or power needs..."
            className={inputClass}
          />
        </div>

        {/* Error message */}
        {error && (
          <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600 border border-red-200">
            {error}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="btn-gradient flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base disabled:opacity-60"
        >
          {submitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Submitting...
            </>
          ) : (
            "Get My Free Quotes"
          )}
        </button>

        <p className="flex items-center justify-center gap-1.5 text-xs text-[var(--color-text-light)]">
          <Lock size={12} />
          Your information is secure and will only be shared with verified local
          installers.
        </p>
      </div>
    </form>
  );
}
