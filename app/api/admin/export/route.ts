import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const type = url.searchParams.get("type") || "leads";
  const from = url.searchParams.get("from");
  const to = url.searchParams.get("to");
  const status = url.searchParams.get("status");

  if (type === "leads") {
    let query = supabase
      .from("leads")
      .select("*, installers(company_name)")
      .order("created_at", { ascending: false });

    if (from) query = query.gte("created_at", from);
    if (to) query = query.lt("created_at", to);
    if (status && status !== "all") query = query.eq("status", status);

    const { data } = await query;
    const leads = data || [];

    const headers = [
      "ID", "Date", "Name", "Email", "Phone", "City", "Home Size",
      "Generator Need", "Coverage", "Fuel Type", "Timeline", "Source",
      "Status", "Installer", "Sent At", "Lead Value", "Paid",
    ];

    const rows = leads.map((l) => [
      l.id,
      new Date(l.created_at).toLocaleDateString(),
      l.name,
      l.email,
      l.phone,
      l.city,
      l.home_size_sqft || "",
      l.generator_need,
      l.coverage || "",
      l.fuel_type || "",
      l.timeline || "",
      l.source || "",
      l.status,
      l.installers?.company_name || "",
      l.sent_to_installer_at ? new Date(l.sent_to_installer_at).toLocaleDateString() : "",
      l.lead_value_usd || "",
      l.is_paid ? "Yes" : "No",
    ]);

    const csv = [headers, ...rows]
      .map((row) => row.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(","))
      .join("\n");

    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename=homegen-leads-${new Date().toISOString().slice(0, 10)}.csv`,
      },
    });
  }

  // Revenue report
  const { data } = await supabase
    .from("leads")
    .select("created_at, lead_value_usd, is_paid, status")
    .order("created_at");

  const leads = data || [];
  const months: Record<string, { total: number; sent: number; converted: number; revenue: number; paid: number }> = {};

  leads.forEach((l) => {
    const key = new Date(l.created_at).toISOString().slice(0, 7);
    if (!months[key]) months[key] = { total: 0, sent: 0, converted: 0, revenue: 0, paid: 0 };
    months[key].total++;
    if (["sent", "accepted", "converted"].includes(l.status)) months[key].sent++;
    if (l.status === "converted") months[key].converted++;
    const val = parseFloat(l.lead_value_usd) || 0;
    months[key].revenue += val;
    if (l.is_paid) months[key].paid += val;
  });

  const csvHeaders = ["Month", "Total Leads", "Sent", "Converted", "Revenue", "Paid", "Pending"];
  const csvRows = Object.entries(months).map(([month, d]) => [
    month, d.total, d.sent, d.converted,
    `$${d.revenue.toFixed(2)}`, `$${d.paid.toFixed(2)}`, `$${(d.revenue - d.paid).toFixed(2)}`,
  ]);

  const csv = [csvHeaders, ...csvRows]
    .map((row) => row.join(","))
    .join("\n");

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": `attachment; filename=homegen-revenue-${new Date().toISOString().slice(0, 10)}.csv`,
    },
  });
}
