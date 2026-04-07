"use client";

import { useState } from "react";
import { Download } from "lucide-react";

export default function AdminExport() {
  const [from, setFrom] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().slice(0, 10));
  const [to, setTo] = useState(new Date().toISOString().slice(0, 10));
  const [status, setStatus] = useState("all");

  const downloadLeads = () => {
    const params = new URLSearchParams({
      type: "leads",
      from: new Date(from).toISOString(),
      to: new Date(to + "T23:59:59").toISOString(),
      ...(status !== "all" && { status }),
    });
    window.open(`/api/admin/export?${params}`, "_blank");
  };

  const downloadRevenue = () => {
    window.open("/api/admin/export?type=revenue", "_blank");
  };

  const inputClass = "rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-cyan-500 focus:outline-none";

  return (
    <div className="max-w-lg">
      <h1 className="text-2xl font-bold text-gray-900">Export</h1>

      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-5 space-y-4">
        <h2 className="text-sm font-semibold text-gray-900">Export Leads CSV</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-xs text-gray-500">From</label>
            <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} className={inputClass + " w-full"} />
          </div>
          <div>
            <label className="mb-1 block text-xs text-gray-500">To</label>
            <input type="date" value={to} onChange={(e) => setTo(e.target.value)} className={inputClass + " w-full"} />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-xs text-gray-500">Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)} className={inputClass + " w-full"}>
            <option value="all">All</option>
            <option value="new">New</option>
            <option value="sent">Sent</option>
            <option value="converted">Converted</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
        <button onClick={downloadLeads} className="inline-flex items-center gap-2 rounded-lg bg-[#0F172A] px-4 py-2.5 text-sm text-white hover:bg-[#1E293B]">
          <Download size={16} /> Export Leads CSV
        </button>
      </div>

      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-5 space-y-4">
        <h2 className="text-sm font-semibold text-gray-900">Revenue Report</h2>
        <p className="text-sm text-gray-500">Export a monthly revenue breakdown of all leads.</p>
        <button onClick={downloadRevenue} className="inline-flex items-center gap-2 rounded-lg bg-[#0F172A] px-4 py-2.5 text-sm text-white hover:bg-[#1E293B]">
          <Download size={16} /> Export Revenue CSV
        </button>
      </div>
    </div>
  );
}
