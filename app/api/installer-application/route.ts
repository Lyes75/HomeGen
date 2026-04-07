import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { data, error } = await supabase
      .from("installers")
      .insert({
        company_name: body.companyName,
        contact_name: body.contactName,
        email: body.email,
        phone: body.phone,
        website: body.website || null,
        states: body.states || [],
        cities: body.cities || [],
        brands: body.brands || [],
        is_certified_generac: body.generacCertified || false,
        is_certified_kohler: body.kohlerCertified || false,
        status: "trial",
        admin_notes: `Monthly installs: ${body.monthlyInstalls || "unknown"}. Source: ${body.hearAbout || "unknown"}. Notes: ${body.notes || "none"}`,
      })
      .select()
      .single();

    if (error) throw error;

    // Notification email
    try {
      await fetch("https://formspree.io/f/mykbolzl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: `New Installer Application — ${body.companyName}`,
          companyName: body.companyName,
          contactName: body.contactName,
          email: body.email,
          phone: body.phone,
          website: body.website,
          states: body.states?.join(", "),
          cities: body.cities?.join(", "),
          brands: body.brands?.join(", "),
          generacCertified: body.generacCertified ? "Yes" : "No",
          kohlerCertified: body.kohlerCertified ? "Yes" : "No",
          monthlyInstalls: body.monthlyInstalls,
          hearAbout: body.hearAbout,
          notes: body.notes,
        }),
      });
    } catch {
      // Don't block on email failure
    }

    return NextResponse.json({ success: true, installerId: data.id });
  } catch (error) {
    console.error("Installer application error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
