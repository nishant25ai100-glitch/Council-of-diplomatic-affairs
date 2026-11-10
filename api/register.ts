import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";
import { randomUUID } from "crypto";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseSecret = process.env.SUPABASE_SECRET_KEY;

if (!supabaseUrl || !supabaseSecret) {
  throw new Error("Supabase environment variables are missing.");
}

const supabase = createClient(supabaseUrl, supabaseSecret);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const {
      fullName,
      email,
      institution,
      whatsapp,
      primaryCommittee,
      secondaryCommittee,
      previousMunExperience,
      positionStatement,
    } = req.body || {};

    // Validate required fields
    if (
      typeof fullName !== "string" ||
      typeof email !== "string" ||
      typeof institution !== "string" ||
      typeof whatsapp !== "string" ||
      !fullName.trim() ||
      !email.trim() ||
      !institution.trim() ||
      !whatsapp.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required registration details.",
      });
    }

    if (
      fullName.length > 120 ||
      email.length > 254 ||
      institution.length > 200 ||
      whatsapp.length > 25
    ) {
      return res.status(400).json({
        success: false,
        message: "One or more fields exceed the allowed length.",
      });
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!validEmail.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    // Generate unique registration ID
    const registrationId = `CDA26-${randomUUID()
      .replace(/-/g, "")
      .slice(0, 10)
      .toUpperCase()}`;

    // Save registration in Supabase
    const { data, error } = await supabase
      .from("registrations")
      .insert({
        registration_id: registrationId,
        full_name: fullName.trim(),
        email: email.trim().toLowerCase(),
        institution: institution.trim(),
        phone: whatsapp.trim(),
        primary_committee: primaryCommittee || null,
        secondary_committee: secondaryCommittee || null,
        mun_experience: previousMunExperience || null,
        statement_of_interest: positionStatement || null,
        amount: 1799,
        payment_status: "pending",
      })
      .select("registration_id, payment_status, created_at")
      .single();

    if (error) {
      console.error("Supabase registration error:", error);

      return res.status(500).json({
        success: false,
        message: "Unable to save registration. Please try again.",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Registration submitted successfully.",
      registration: data,
    });

  } catch (error) {
    console.error("Registration API error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
}