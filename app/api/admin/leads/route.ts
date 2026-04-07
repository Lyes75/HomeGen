import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const status = url.searchParams.get("status");
  const city = url.searchParams.get("city");
  const source = url.searchParams.get("source");
  const search = url.searchParams.get("search");
  const page = parseInt(url.searchParams.get("page") || "1");
  const perPage = 20;
  const year = parseInt(url.searchParams.get("year") || String(new Date().getFullYear()));
  const month = parseInt(url.searchParams.get("month") || String(new Date().getMonth() + 1));

  const startDate = new Date(year, month - 1, 1).toISOString();
  const endDate = new Date(year, month, 1).toISOString();

  let query = supabase
    .from("leads")
    .select("*, installers(company_name)", { count: "exact" })
    .gte("created_at", startDate)
    .lt("created_at", endDate)
    .order("created_at", { ascending: false })
    .range((page - 1) * perPage, page * perPage - 1);

  if (status && status !== "all") query = query.eq("status", status);
  if (city) query = query.ilike("city", `%${city}%`);
  if (source && source !== "all") query = query.eq("source", source);
  if (search) {
    query = query.or(
      `name.ilike.%${search}%,email.ilike.%${search}%,phone.ilike.%${search}%`
    );
  }

  const { data, count, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    leads: data || [],
    total: count || 0,
    page,
    perPage,
    totalPages: Math.ceil((count || 0) / perPage),
  });
}
