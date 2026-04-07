import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

type Props = { params: Promise<{ id: string }> };

export async function POST(request: NextRequest, { params }: Props) {
  const { id } = await params;
  const { installer_id, lead_price_usd } = await request.json();

  // Create assignment
  const { error: assignError } = await supabase.from("lead_assignments").insert({
    lead_id: id,
    installer_id,
    lead_price_usd: lead_price_usd || 40,
    installer_response: "pending",
  });

  if (assignError) return NextResponse.json({ error: assignError.message }, { status: 500 });

  // Update lead status
  await supabase
    .from("leads")
    .update({
      status: "sent",
      installer_id,
      sent_to_installer_at: new Date().toISOString(),
      lead_value_usd: lead_price_usd || 40,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  // Increment installer stats
  await supabase.rpc("increment_installer_leads_sent", {
    p_installer_id: installer_id,
  });

  return NextResponse.json({ success: true });
}
