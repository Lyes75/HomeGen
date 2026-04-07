"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Trash2 } from "lucide-react";

export default function InstallerDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [installer, setInstaller] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const fetchInstaller = useCallback(() => {
    fetch(`/api/admin/installers/${id}`)
      .then((r) => r.json())
      .then((d) => { setInstaller(d.installer); setLoading(false); });
  }, [id]);

  useEffect(() => { fetchInstaller(); }, [fetchInstaller]);

  const save = async () => {
    if (!installer) return;
    setSaving(true);
    await fetch(`/api/admin/installers/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(installer),
    });
    setSaving(false);
  };

  const remove = async () => {
    if (!confirm("Delete this installer?")) return;
    await fetch(`/api/admin/installers/${id}`, { method: "DELETE" });
    router.push("/admin/installers");
  };

  if (loading) return <p className="text-sm text-gray-500">Loading...</p>;
  if (!installer) return <p className="text-sm text-gray-500">Not found</p>;

  const inputClass = "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-cyan-500 focus:outline-none";
  const labelClass = "mb-1 block text-sm font-medium text-gray-700";
  const update = (key: string, value: unknown) => setInstaller({ ...installer, [key]: value });

  return (
    <div className="max-w-2xl">
      <Link href="/admin/installers" className="mb-4 inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
        <ArrowLeft size={16} /> Back
      </Link>
      <h1 className="text-2xl font-bold text-gray-900">{installer.company_name as string}</h1>

      <div className="mt-6 space-y-5">
        <div className="rounded-xl border border-gray-200 bg-white p-5 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Company Name</label>
              <input value={(installer.company_name as string) || ""} onChange={(e) => update("company_name", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Contact Name</label>
              <input value={(installer.contact_name as string) || ""} onChange={(e) => update("contact_name", e.target.value)} className={inputClass} />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Email</label>
              <input value={(installer.email as string) || ""} onChange={(e) => update("email", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Phone</label>
              <input value={(installer.phone as string) || ""} onChange={(e) => update("phone", e.target.value)} className={inputClass} />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Lead Price (USD)</label>
              <input type="number" value={(installer.lead_price_usd as number) || 40} onChange={(e) => update("lead_price_usd", parseFloat(e.target.value))} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Status</label>
              <select value={(installer.status as string) || "active"} onChange={(e) => update("status", e.target.value)} className={inputClass}>
                <option value="active">Active</option>
                <option value="trial">Trial</option>
                <option value="paused">Paused</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="mb-2 text-sm font-semibold text-gray-900">Stats</h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-gray-900">{(installer.total_leads_sent as number) || 0}</p>
              <p className="text-xs text-gray-500">Sent</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{(installer.total_leads_accepted as number) || 0}</p>
              <p className="text-xs text-gray-500">Accepted</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{(installer.total_leads_converted as number) || 0}</p>
              <p className="text-xs text-gray-500">Converted</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <label className={labelClass}>Admin Notes</label>
          <textarea value={(installer.admin_notes as string) || ""} onChange={(e) => update("admin_notes", e.target.value)} rows={3} className={inputClass} />
        </div>

        <div className="flex items-center justify-between">
          <button onClick={remove} className="inline-flex items-center gap-1.5 text-sm text-red-600 hover:text-red-800">
            <Trash2 size={14} /> Delete
          </button>
          <button onClick={save} disabled={saving} className="rounded-lg bg-[#0F172A] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#1E293B] disabled:opacity-50">
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}
