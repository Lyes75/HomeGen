"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

interface Lead {
  id: string;
  name: string;
  city: string;
  home_size_sqft: number;
  status: string;
  source: string;
  lead_value_usd: number;
  created_at: string;
  installers?: { company_name: string } | null;
}

const STATUS_COLORS: Record<string, string> = {
  new: "bg-green-100 text-green-800",
  sent: "bg-blue-100 text-blue-800",
  accepted: "bg-yellow-100 text-yellow-800",
  rejected: "bg-red-100 text-red-800",
  converted: "bg-purple-100 text-purple-800",
  invalid: "bg-gray-100 text-gray-600",
};

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export default function AdminLeads() {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth() + 1);
  const [status, setStatus] = useState("all");
  const [source, setSource] = useState("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams({
      year: String(year),
      month: String(month),
      page: String(page),
      ...(status !== "all" && { status }),
      ...(source !== "all" && { source }),
      ...(search && { search }),
    });

    fetch(`/api/admin/leads?${params}`)
      .then((r) => r.json())
      .then((d) => {
        setLeads(d.leads || []);
        setTotal(d.total || 0);
        setTotalPages(d.totalPages || 1);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [year, month, status, source, search, page]);

  const prevMonth = () => {
    if (month === 1) { setMonth(12); setYear(year - 1); }
    else setMonth(month - 1);
    setPage(1);
  };
  const nextMonth = () => {
    if (month === 12) { setMonth(1); setYear(year + 1); }
    else setMonth(month + 1);
    setPage(1);
  };

  const selectClass = "rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-cyan-500 focus:outline-none";

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Leads</h1>
        <div className="flex items-center gap-2">
          <button onClick={prevMonth} className="rounded p-1 hover:bg-gray-200">
            <ChevronLeft size={18} />
          </button>
          <span className="text-sm font-medium text-gray-700 min-w-[140px] text-center">
            {MONTH_NAMES[month - 1]} {year}
          </span>
          <button onClick={nextMonth} className="rounded p-1 hover:bg-gray-200">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="mt-4 flex flex-wrap gap-3">
        <select value={status} onChange={(e) => { setStatus(e.target.value); setPage(1); }} className={selectClass}>
          <option value="all">All Status</option>
          <option value="new">New</option>
          <option value="sent">Sent</option>
          <option value="accepted">Accepted</option>
          <option value="rejected">Rejected</option>
          <option value="converted">Converted</option>
          <option value="invalid">Invalid</option>
        </select>
        <select value={source} onChange={(e) => { setSource(e.target.value); setPage(1); }} className={selectClass}>
          <option value="all">All Sources</option>
          <option value="direct">Direct</option>
          <option value="calculator">Calculator</option>
          <option value="size-guide">Size Guide</option>
          <option value="homepage">Homepage</option>
        </select>
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search name, email, phone..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm focus:border-cyan-500 focus:outline-none"
          />
        </div>
        <Link
          href={`/api/admin/export?type=leads&from=${new Date(year, month - 1, 1).toISOString()}&to=${new Date(year, month, 1).toISOString()}`}
          className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm hover:bg-gray-50"
        >
          Export CSV
        </Link>
      </div>

      {/* Table */}
      <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200 bg-white">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">#</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">City</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Size</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Installer</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">$</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {loading ? (
              <tr><td colSpan={8} className="px-4 py-8 text-center text-sm text-gray-400">Loading...</td></tr>
            ) : leads.length === 0 ? (
              <tr><td colSpan={8} className="px-4 py-8 text-center text-sm text-gray-400">No leads found</td></tr>
            ) : (
              leads.map((lead, i) => (
                <tr key={lead.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-xs text-gray-400">{(page - 1) * 20 + i + 1}</td>
                  <td className="px-4 py-3">
                    <Link href={`/admin/leads/${lead.id}`} className="text-sm font-medium text-gray-900 hover:text-cyan-600">
                      {lead.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{lead.city}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{lead.home_size_sqft?.toLocaleString() || "—"}</td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${STATUS_COLORS[lead.status] || STATUS_COLORS.invalid}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{lead.installers?.company_name || "—"}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{lead.lead_value_usd ? `$${lead.lead_value_usd}` : "—"}</td>
                  <td className="px-4 py-3 text-xs text-gray-400">{new Date(lead.created_at).toLocaleDateString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-gray-500">Showing {(page - 1) * 20 + 1}-{Math.min(page * 20, total)} of {total}</p>
          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`rounded px-3 py-1 text-sm ${page === i + 1 ? "bg-[#0F172A] text-white" : "hover:bg-gray-200 text-gray-700"}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
