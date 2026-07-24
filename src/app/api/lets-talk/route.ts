import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const base = new URL(request.url).origin;
  const formData = await request.formData();

  const fullName = formData.get("full_name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim().toLowerCase() ?? "";
  const company = formData.get("company")?.toString().trim() ?? "";
  const interest = formData.get("interest")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";
  const source = formData.get("source")?.toString() ?? "website";

  if (!fullName || !email) {
    return NextResponse.redirect(`${base}/submission-thank-you?status=error`, 303);
  }

  // Split name for first_name / last_name columns
  const spaceIdx = fullName.indexOf(" ");
  const firstName = spaceIdx > -1 ? fullName.slice(0, spaceIdx) : fullName;
  const lastName = spaceIdx > -1 ? fullName.slice(spaceIdx + 1) : "";

  const { error: dbError } = await supabase.from("website_leads").insert({
    first_name: firstName,
    last_name: lastName,
    full_name: fullName,
    email,
    company,
    interest,
    message,
    source,
  });

  if (dbError) {
    console.error("[lets-talk] Supabase error:", dbError.message);
  }

  const hasResend =
    process.env.RESEND_API_KEY && !process.env.RESEND_API_KEY.startsWith("re_REPLACE");

  if (hasResend) {
    try {
      await Promise.all([
        resend.emails.send({
          from: "3rd & Taylor <tiffany.nwahiri@results.3rdandtaylor.com>",
          to: ["tiffany.nwahiri@3rdandtaylor.com"],
          subject: `New inquiry — ${fullName} (${source})`,
          html: `
            <p>New contact form submission:</p>
            <table cellpadding="6">
              <tr><td><strong>Name</strong></td><td>${fullName}</td></tr>
              <tr><td><strong>Email</strong></td><td>${email}</td></tr>
              <tr><td><strong>Company</strong></td><td>${company || "—"}</td></tr>
              <tr><td><strong>Interested in</strong></td><td>${interest || "—"}</td></tr>
              <tr><td><strong>Message</strong></td><td>${message || "—"}</td></tr>
              <tr><td><strong>Source</strong></td><td>${source}</td></tr>
            </table>
          `,
        }),
        resend.emails.send({
          from: "Tiffany at 3rd & Taylor <tiffany.nwahiri@results.3rdandtaylor.com>",
          to: [email],
          subject: "Got your note — talk soon!",
          html: `
            <p>Hi ${firstName},</p>
            <p>Thanks for reaching out to 3rd & Taylor. I've received your message and will be back with a point of view on your fastest path to pipeline within one business day.</p>
            <p>Talk soon,<br><strong>Tiffany</strong><br>3rd & Taylor</p>
          `,
        }),
      ]);
    } catch (emailError) {
      console.error("[lets-talk] Resend error:", emailError);
    }
  }

  return NextResponse.redirect(`${base}/submission-thank-you`, 303);
}
