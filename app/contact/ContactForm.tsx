"use client";

import { useState } from "react";
import { Loader2, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General question",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://formspree.io/f/mykbolzl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          _subject: `HomeGen Contact — ${formData.subject}`,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(
          "Something went wrong. Please try again or email us directly at contact@homegen.co"
        );
      }
    } catch {
      setError(
        "Network error. Please try again or email us at contact@homegen.co"
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="py-10 text-center">
        <CheckCircle
          size={40}
          className="mx-auto text-[var(--color-success)]"
        />
        <h2 className="mt-4 text-xl font-bold text-[var(--color-text-dark)]">
          Message Sent
        </h2>
        <p className="mt-2 text-sm text-[var(--color-text-body)]">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-text-dark)] placeholder:text-[var(--color-text-light)] focus:border-[var(--color-primary-cyan)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-cyan)]/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-sm font-medium text-[var(--color-text-dark)]"
        >
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-[var(--color-text-dark)]"
        >
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="mb-1.5 block text-sm font-medium text-[var(--color-text-dark)]"
        >
          Subject <span className="text-red-500">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className={inputClass}
        >
          <option>General question</option>
          <option>Feedback on the site</option>
          <option>Report an error</option>
          <option>Press / media inquiry</option>
          <option>Installer partnership</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-[var(--color-text-dark)]"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>

      {error && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-gradient-to-r from-[var(--color-primary-cyan)] to-[var(--color-primary-mint)] py-3 text-sm font-semibold text-white hover:opacity-90 transition disabled:opacity-50"
      >
        {loading ? (
          <span className="inline-flex items-center gap-2">
            <Loader2 size={16} className="animate-spin" /> Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
