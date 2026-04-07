import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const year = parseInt(url.searchParams.get("year") || String(new Date().getFullYear()));
  const month = parseInt(url.searchParams.get("month") || String(new Date().getMonth() + 1));

  const startDate = new Date(year, month - 1, 1).toISOString();
  const endDate = new Date(year, month, 1).toISOString();

  const { data: leads } = await supabase
    .from("leads")
    .select("*")
    .gte("created_at", startDate)
    .lt("created_at", endDate)
    .order("created_at", { ascending: false });

  const allLeads = leads || [];

  const newCount = allLeads.length;
  const sentCount = allLeads.filter((l) =>
    ["sent", "accepted", "converted"].includes(l.status)
  ).length;
  const convertedCount = allLeads.filter((l) => l.status === "converted").length;
  const revenue = allLeads
    .filter((l) => l.is_paid)
    .reduce((sum, l) => sum + (parseFloat(l.lead_value_usd) || 0), 0);

  // Source breakdown
  const sources: Record<string, number> = {};
  allLeads.forEach((l) => {
    const src = l.source || "direct";
    sources[src] = (sources[src] || 0) + 1;
  });

  // Top cities
  const cities: Record<string, number> = {};
  allLeads.forEach((l) => {
    const city = l.city || "Unknown";
    cities[city] = (cities[city] || 0) + 1;
  });

  const topCities = Object.entries(cities)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const recentLeads = allLeads.slice(0, 5);

  return NextResponse.json({
    newCount,
    sentCount,
    convertedCount,
    revenue,
    sources,
    topCities,
    recentLeads,
  });
}
