import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 1. Save to Supabase
    const { data, error } = await supabase
      .from("leads")
      .insert({
        name: body.name,
        email: body.email,
        phone: body.phone,
        city: body.city,
        home_size_sqft: parseInt(body.homeSize) || null,
        generator_need: body.generatorNeed || "New installation",
        coverage: body.coverage || null,
        fuel_type: body.fuelType || body.fuel || null,
        timeline: body.timeline || null,
        notes: body.notes || null,
        source: body.source || "direct",
        source_url: body.sourceUrl || null,
        status: "new",
      })
      .select()
      .single();

    if (error) throw error;

    // 2. Forward to Formspree for email notification
    try {
      await fetch("https://formspree.io/f/mykbolzl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: body.name,
          email: body.email,
          phone: body.phone,
          city: body.city,
          homeSize: body.homeSize,
          generatorNeed: body.generatorNeed,
          coverage: body.coverage,
          fuelType: body.fuelType || body.fuel,
          timeline: body.timeline,
          notes: body.notes,
          source: body.source,
          _subject: `New HomeGen Lead — ${body.city || "Unknown"}`,
          _lead_id: data.id,
        }),
      });
    } catch {
      // Formspree failure shouldn't block the lead save
    }

    return NextResponse.json({ success: true, leadId: data.id });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit lead" },
      { status: 500 }
    );
  }
}
