import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

type Props = { params: Promise<{ id: string }> };

export async function GET(_: NextRequest, { params }: Props) {
  const { id } = await params;
  const { data, error } = await supabase
    .from("installers")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 404 });
  return NextResponse.json({ installer: data });
}

export async function PATCH(request: NextRequest, { params }: Props) {
  const { id } = await params;
  const body = await request.json();

  const { data, error } = await supabase
    .from("installers")
    .update({ ...body, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ installer: data });
}

export async function DELETE(_: NextRequest, { params }: Props) {
  const { id } = await params;
  const { error } = await supabase.from("installers").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
