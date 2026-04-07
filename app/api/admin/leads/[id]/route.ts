import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

type Props = { params: Promise<{ id: string }> };

export async function GET(_: NextRequest, { params }: Props) {
  const { id } = await params;

  const { data, error } = await supabase
    .from("leads")
    .select("*, installers(company_name, email)")
    .eq("id", id)
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 404 });

  // Get assignment history
  const { data: assignments } = await supabase
    .from("lead_assignments")
    .select("*, installers(company_name)")
    .eq("lead_id", id)
    .order("created_at", { ascending: false });

  return NextResponse.json({ lead: data, assignments: assignments || [] });
}

export async function PATCH(request: NextRequest, { params }: Props) {
  const { id } = await params;
  const body = await request.json();

  const { data, error } = await supabase
    .from("leads")
    .update({ ...body, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ lead: data });
}

export async function DELETE(_: NextRequest, { params }: Props) {
  const { id } = await params;
  const { error } = await supabase.from("leads").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
