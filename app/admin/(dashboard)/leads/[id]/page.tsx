"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Trash2, Send } from "lucide-react";

interface Lead {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  home_size_sqft: number;
  generator_need: string;
  coverage: string;
  fuel_type: string;
  timeline: string;
  notes: string;
  source: string;
  source_url: string;
  status: string;
  installer_id: string;
  lead_value_usd: number;
  is_paid: boolean;
  admin_notes: string;
}

interface Assignment {
  id: string;
  created_at: string;
  installer_response: string;
  lead_price_usd: number;
  is_paid: boolean;
  installers?: { company_name: string };
}

interface Installer {
  id: string;
  company_name: string;
  states: string[];
  lead_price_usd: number;
}

const STATUS_OPTIONS = ["new", "sent", "accepted", "rejected", "converted", "invalid"];
const STATUS_COLORS: Record<string, string> = {
  new: "bg-green-100 text-green-800",
  sent: "bg-blue-100 text-blue-800",
  accepted: "bg-yellow-100 text-yellow-800",
  rejected: "bg-red-100 text-red-800",
  converted: "bg-purple-100 text-purple-800",
  invalid: "bg-gray-100 text-gray-600",
};

export default function LeadDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [lead, setLead] = useState<Lead | null>(null);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [installers, setInstallers] = useState<Installer[]>([]);
  const [selectedInstaller, setSelectedInstaller] = useState("");
  const [adminNotes, setAdminNotes] = useState("");
  const [leadValue, setLeadValue] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchLead = useCallback(() => {
    fetch(`/api/admin/leads/${id}`)
      .then((r) => r.json())
      .then((d) => {
        setLead(d.lead);
        setAssignments(d.assignments || []);
        setAdminNotes(d.lead?.admin_notes || "");
        setLeadValue(d.lead?.lead_value_usd?.toString() || "40");
        setIsPaid(d.lead?.is_paid || false);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    fetchLead();
    fetch("/api/admin/installers")
      .then((r) => r.json())
      .then((d) => setInstallers(d.installers || []));
  }, [fetchLead]);

  const updateField = async (field: string, value: string | number | boolean) => {
    await fetch(`/api/admin/leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [field]: value }),
    });
    fetchLead();
  };

  const assignLead = async () => {
    if (!selectedInstaller) return;
    await fetch(`/api/admin/leads/${id}/assign`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        installer_id: selectedInstaller,
        lead_price_usd: parseFloat(leadValue) || 40,
      }),
    });
    setSelectedInstaller("");
    fetchLead();
  };

  const deleteLead = async () => {
    if (!confirm("Delete this lead permanently?")) return;
    await fetch(`/api/admin/leads/${id}`, { method: "DELETE" });
    router.push("/admin/leads");
  };

  if (loading) return <p className="text-gray-500 text-sm">Loading...</p>;
  if (!lead) return <p className="text-gray-500 text-sm">Lead not found</p>;

  const sectionClass = "rounded-xl border border-gray-200 bg-white p-5";
  const labelClass = "text-xs text-gray-500 uppercase tracking-wide";
  const valueClass = "text-sm text-gray-900";

  return (
    <div className="max-w-3xl">
      <Link href="/admin/leads" className="mb-4 inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
        <ArrowLeft size={16} /> Back to Leads
      </Link>

      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{lead.name}</h1>
          <p className="text-sm text-gray-500">
            {new Date(lead.created_at).toLocaleString()} · ID: {lead.id.slice(0, 8)}...
          </p>
        </div>
        <select
          value={lead.status}
          onChange={(e) => updateField("status", e.target.value)}
          className={`rounded-lg px-3 py-1.5 text-sm font-medium ${STATUS_COLORS[lead.status] || ""} border-0 cursor-pointer`}
        >
          {STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div className="mt-6 space-y-5">
        {/* Contact */}
        <div className={sectionClass}>
          <h2 className="mb-3 text-sm font-semibold text-gray-900">Contact Info</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <div><p className={labelClass}>Name</p><p className={valueClass}>{lead.name}</p></div>
            <div><p className={labelClass}>Email</p><p className={valueClass}>{lead.email}</p></div>
            <div><p className={labelClass}>Phone</p><p className={valueClass}>{lead.phone}</p></div>
            <div><p className={labelClass}>City</p><p className={valueClass}>{lead.city}</p></div>
          </div>
        </div>

        {/* Project */}
        <div className={sectionClass}>
          <h2 className="mb-3 text-sm font-semibold text-gray-900">Project Details</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <div><p className={labelClass}>Home Size</p><p className={valueClass}>{lead.home_size_sqft?.toLocaleString() || "—"} sqft</p></div>
            <div><p className={labelClass}>Need</p><p className={valueClass}>{lead.generator_need}</p></div>
            <div><p className={labelClass}>Coverage</p><p className={valueClass}>{lead.coverage || "—"}</p></div>
            <div><p className={labelClass}>Fuel Type</p><p className={valueClass}>{lead.fuel_type || "—"}</p></div>
            <div><p className={labelClass}>Timeline</p><p className={valueClass}>{lead.timeline || "—"}</p></div>
            <div><p className={labelClass}>Source</p><p className={valueClass}>{lead.source || "direct"}</p></div>
          </div>
          {lead.notes && (
            <div className="mt-3 border-t border-gray-100 pt-3">
              <p className={labelClass}>Notes</p>
              <p className={`${valueClass} mt-1`}>{lead.notes}</p>
            </div>
          )}
        </div>

        {/* Assignment */}
        <div className={sectionClass}>
          <h2 className="mb-3 text-sm font-semibold text-gray-900">Assignment</h2>
          {assignments.length > 0 && (
            <div className="mb-4 space-y-2">
              {assignments.map((a) => (
                <div key={a.id} className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2 text-sm">
                  <span>
                    {new Date(a.created_at).toLocaleDateString()} → <strong>{a.installers?.company_name}</strong>
                  </span>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                    a.installer_response === "accepted" ? "bg-green-100 text-green-800" :
                    a.installer_response === "rejected" ? "bg-red-100 text-red-800" :
                    "bg-gray-100 text-gray-600"
                  }`}>
                    {a.installer_response || "pending"}
                  </span>
                </div>
              ))}
            </div>
          )}
          <div className="flex gap-2">
            <select
              value={selectedInstaller}
              onChange={(e) => setSelectedInstaller(e.target.value)}
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm"
            >
              <option value="">Select installer...</option>
              {installers.filter((i) => i.states?.length === 0 || true).map((i) => (
                <option key={i.id} value={i.id}>{i.company_name}</option>
              ))}
            </select>
            <button
              onClick={assignLead}
              disabled={!selectedInstaller}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#0F172A] px-4 py-2 text-sm text-white hover:bg-[#1E293B] disabled:opacity-50"
            >
              <Send size={14} /> Send
            </button>
          </div>
        </div>

        {/* Lead Value */}
        <div className={sectionClass}>
          <h2 className="mb-3 text-sm font-semibold text-gray-900">Lead Value</h2>
          <div className="flex items-center gap-4">
            <div>
              <label className="text-xs text-gray-500">Amount</label>
              <div className="flex items-center gap-1">
                <span className="text-sm text-gray-500">$</span>
                <input
                  type="number"
                  value={leadValue}
                  onChange={(e) => setLeadValue(e.target.value)}
                  onBlur={() => updateField("lead_value_usd", parseFloat(leadValue) || 0)}
                  className="w-24 rounded border border-gray-300 px-2 py-1.5 text-sm"
                />
              </div>
            </div>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={isPaid}
                onChange={(e) => { setIsPaid(e.target.checked); updateField("is_paid", e.target.checked); }}
                className="rounded"
              />
              Paid
            </label>
          </div>
        </div>

        {/* Admin notes */}
        <div className={sectionClass}>
          <h2 className="mb-3 text-sm font-semibold text-gray-900">Admin Notes</h2>
          <textarea
            value={adminNotes}
            onChange={(e) => setAdminNotes(e.target.value)}
            rows={3}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-cyan-500 focus:outline-none"
          />
          <button
            onClick={() => updateField("admin_notes", adminNotes)}
            className="mt-2 rounded-lg bg-gray-100 px-4 py-1.5 text-sm hover:bg-gray-200"
          >
            Save Notes
          </button>
        </div>

        {/* Delete */}
        <div className="flex justify-end">
          <button
            onClick={deleteLead}
            className="inline-flex items-center gap-1.5 text-sm text-red-600 hover:text-red-800"
          >
            <Trash2 size={14} /> Delete Lead
          </button>
        </div>
      </div>
    </div>
  );
}
