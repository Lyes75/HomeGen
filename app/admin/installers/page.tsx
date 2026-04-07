"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

interface Installer {
  id: string;
  company_name: string;
  contact_name: string;
  email: string;
  states: string[];
  status: string;
  total_leads_sent: number;
  total_leads_converted: number;
  lead_price_usd: number;
}

const STATUS_COLORS: Record<string, string> = {
  active: "bg-green-100 text-green-800",
  paused: "bg-yellow-100 text-yellow-800",
  inactive: "bg-gray-100 text-gray-600",
  trial: "bg-blue-100 text-blue-800",
};

export default function AdminInstallers() {
  const [installers, setInstallers] = useState<Installer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/installers")
      .then((r) => r.json())
      .then((d) => { setInstallers(d.installers || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Installers</h1>
        <Link
          href="/admin/installers/new"
          className="inline-flex items-center gap-1.5 rounded-lg bg-[#0F172A] px-4 py-2 text-sm text-white hover:bg-[#1E293B]"
        >
          <Plus size={16} /> Add Installer
        </Link>
      </div>

      <div className="mt-6 overflow-x-auto rounded-xl border border-gray-200 bg-white">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">States</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Leads Sent</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Converted</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">$/Lead</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {loading ? (
              <tr><td colSpan={6} className="px-4 py-8 text-center text-sm text-gray-400">Loading...</td></tr>
            ) : installers.length === 0 ? (
              <tr><td colSpan={6} className="px-4 py-8 text-center text-sm text-gray-400">No installers yet</td></tr>
            ) : (
              installers.map((inst) => (
                <tr key={inst.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <Link href={`/admin/installers/${inst.id}`} className="text-sm font-medium text-gray-900 hover:text-cyan-600">
                      {inst.company_name}
                    </Link>
                    {inst.contact_name && <p className="text-xs text-gray-500">{inst.contact_name}</p>}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{inst.states?.join(", ") || "—"}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{inst.total_leads_sent}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{inst.total_leads_converted}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">${inst.lead_price_usd || 40}</td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${STATUS_COLORS[inst.status] || ""}`}>
                      {inst.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
