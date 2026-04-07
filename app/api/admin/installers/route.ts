import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const { data, error } = await supabase
    .from("installers")
    .select("*")
    .order("company_name");

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ installers: data || [] });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { data, error } = await supabase
    .from("installers")
    .insert(body)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ installer: data });
}
