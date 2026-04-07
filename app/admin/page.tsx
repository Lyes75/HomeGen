"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Stats {
  newCount: number;
  sentCount: number;
  convertedCount: number;
  revenue: number;
  sources: Record<string, number>;
  topCities: [string, number][];
  recentLeads: Array<{
    id: string;
    name: string;
    city: string;
    home_size_sqft: number;
    status: string;
    created_at: string;
  }>;
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

export default function AdminDashboard() {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth() + 1);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/admin/stats?year=${year}&month=${month}`)
      .then((r) => r.json())
      .then((d) => { setStats(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, [year, month]);

  const prevMonth = () => {
    if (month === 1) { setMonth(12); setYear(year - 1); }
    else setMonth(month - 1);
  };
  const nextMonth = () => {
    if (month === 12) { setMonth(1); setYear(year + 1); }
    else setMonth(month + 1);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
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

      {loading ? (
        <p className="mt-8 text-gray-500 text-sm">Loading...</p>
      ) : stats ? (
        <>
          {/* KPI cards */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "New Leads", value: stats.newCount },
              { label: "Sent", value: stats.sentCount },
              { label: "Converted", value: stats.convertedCount },
              { label: "Revenue", value: `$${stats.revenue.toLocaleString()}` },
            ].map((kpi) => (
              <div key={kpi.label} className="rounded-xl border border-gray-200 bg-white p-5">
                <p className="text-sm text-gray-500">{kpi.label}</p>
                <p className="mt-1 text-3xl font-bold text-gray-900">{kpi.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {/* Sources */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h2 className="text-sm font-semibold text-gray-900">Lead Sources</h2>
              <div className="mt-4 space-y-2">
                {Object.entries(stats.sources)
                  .sort((a, b) => b[1] - a[1])
                  .map(([src, count]) => (
                    <div key={src} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 capitalize">{src}</span>
                      <span className="font-medium text-gray-900">
                        {count}{" "}
                        <span className="text-gray-400">
                          ({stats.newCount > 0 ? Math.round((count / stats.newCount) * 100) : 0}%)
                        </span>
                      </span>
                    </div>
                  ))}
                {Object.keys(stats.sources).length === 0 && (
                  <p className="text-sm text-gray-400">No data</p>
                )}
              </div>
            </div>

            {/* Top cities */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h2 className="text-sm font-semibold text-gray-900">Top Cities</h2>
              <div className="mt-4 space-y-2">
                {stats.topCities.map(([city, count]) => (
                  <div key={city} className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{city}</span>
                    <span className="font-medium text-gray-900">{count} leads</span>
                  </div>
                ))}
                {stats.topCities.length === 0 && (
                  <p className="text-sm text-gray-400">No data</p>
                )}
              </div>
            </div>
          </div>

          {/* Recent leads */}
          <div className="mt-8 rounded-xl border border-gray-200 bg-white">
            <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
              <h2 className="text-sm font-semibold text-gray-900">Recent Leads</h2>
              <Link href="/admin/leads" className="text-xs text-cyan-600 hover:underline">
                View all →
              </Link>
            </div>
            <div className="divide-y divide-gray-100">
              {stats.recentLeads.map((lead) => (
                <Link
                  key={lead.id}
                  href={`/admin/leads/${lead.id}`}
                  className="flex items-center justify-between px-5 py-3 hover:bg-gray-50"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900">{lead.name}</p>
                    <p className="text-xs text-gray-500">
                      {lead.city} · {lead.home_size_sqft?.toLocaleString() || "—"} sqft
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${STATUS_COLORS[lead.status] || STATUS_COLORS.invalid}`}>
                      {lead.status}
                    </span>
                    <span className="text-xs text-gray-400">
                      {new Date(lead.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </Link>
              ))}
              {stats.recentLeads.length === 0 && (
                <p className="px-5 py-6 text-center text-sm text-gray-400">No leads yet</p>
              )}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
