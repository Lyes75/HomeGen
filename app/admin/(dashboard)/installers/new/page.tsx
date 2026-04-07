"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY",
];

const BRANDS = ["Generac", "Kohler", "Cummins", "Briggs & Stratton", "Champion", "Other"];

export default function NewInstaller() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    company_name: "",
    contact_name: "",
    email: "",
    phone: "",
    website: "",
    states: [] as string[],
    cities: "",
    brands: [] as string[],
    is_certified_generac: false,
    is_certified_kohler: false,
    lead_price_usd: 40,
    status: "active",
    admin_notes: "",
  });

  const toggleState = (s: string) => {
    setForm((prev) => ({
      ...prev,
      states: prev.states.includes(s)
        ? prev.states.filter((x) => x !== s)
        : [...prev.states, s],
    }));
  };

  const toggleBrand = (b: string) => {
    setForm((prev) => ({
      ...prev,
      brands: prev.brands.includes(b)
        ? prev.brands.filter((x) => x !== b)
        : [...prev.brands, b],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const res = await fetch("/api/admin/installers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        cities: form.cities.split(",").map((c) => c.trim()).filter(Boolean),
      }),
    });

    if (res.ok) {
      const { installer } = await res.json();
      router.push(`/admin/installers/${installer.id}`);
    } else {
      alert("Error creating installer");
      setSaving(false);
    }
  };

  const inputClass = "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-cyan-500 focus:outline-none";
  const labelClass = "mb-1 block text-sm font-medium text-gray-700";

  return (
    <div className="max-w-2xl">
      <Link href="/admin/installers" className="mb-4 inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
        <ArrowLeft size={16} /> Back
      </Link>
      <h1 className="text-2xl font-bold text-gray-900">Add Installer</h1>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div className="rounded-xl border border-gray-200 bg-white p-5 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Company Name *</label>
              <input required value={form.company_name} onChange={(e) => setForm({ ...form, company_name: e.target.value })} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Contact Name</label>
              <input value={form.contact_name} onChange={(e) => setForm({ ...form, contact_name: e.target.value })} className={inputClass} />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Email *</label>
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Phone</label>
              <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} />
            </div>
          </div>
          <div>
            <label className={labelClass}>Website</label>
            <input value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} className={inputClass} placeholder="https://" />
          </div>
        </div>

        {/* States */}
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <label className={labelClass}>States Covered</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {US_STATES.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => toggleState(s)}
                className={`rounded px-2.5 py-1 text-xs font-medium ${
                  form.states.includes(s) ? "bg-cyan-100 text-cyan-800" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Cities */}
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <label className={labelClass}>Cities (comma-separated)</label>
          <input value={form.cities} onChange={(e) => setForm({ ...form, cities: e.target.value })} className={inputClass} placeholder="Miami, Tampa, Orlando" />
        </div>

        {/* Brands */}
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <label className={labelClass}>Brands</label>
          <div className="mt-2 flex flex-wrap gap-3">
            {BRANDS.map((b) => (
              <label key={b} className="flex items-center gap-1.5 text-sm">
                <input type="checkbox" checked={form.brands.includes(b)} onChange={() => toggleBrand(b)} className="rounded" />
                {b}
              </label>
            ))}
          </div>
          <div className="mt-3 flex gap-4">
            <label className="flex items-center gap-1.5 text-sm">
              <input type="checkbox" checked={form.is_certified_generac} onChange={(e) => setForm({ ...form, is_certified_generac: e.target.checked })} className="rounded" />
              Certified Generac Dealer
            </label>
            <label className="flex items-center gap-1.5 text-sm">
              <input type="checkbox" checked={form.is_certified_kohler} onChange={(e) => setForm({ ...form, is_certified_kohler: e.target.checked })} className="rounded" />
              Certified Kohler Dealer
            </label>
          </div>
        </div>

        {/* Pricing & Status */}
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Lead Price (USD)</label>
              <input type="number" value={form.lead_price_usd} onChange={(e) => setForm({ ...form, lead_price_usd: parseFloat(e.target.value) || 0 })} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Status</label>
              <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className={inputClass}>
                <option value="active">Active</option>
                <option value="trial">Trial</option>
                <option value="paused">Paused</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <label className={labelClass}>Admin Notes</label>
          <textarea value={form.admin_notes} onChange={(e) => setForm({ ...form, admin_notes: e.target.value })} rows={3} className={inputClass} />
        </div>

        <button type="submit" disabled={saving} className="w-full rounded-lg bg-[#0F172A] py-3 text-sm font-medium text-white hover:bg-[#1E293B] disabled:opacity-50">
          {saving ? "Saving..." : "Create Installer"}
        </button>
      </form>
    </div>
  );
}
