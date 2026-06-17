import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const RESEND_API_URL = "https://api.resend.com";

const BRAND = {
  ink: "#050007",
  bg: "#FAF7FF",
  accent: "#6B3DFF",
  gold: "#C9A063",
  muted: "#5B5470",
  font: "'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}

function confirmationEmailHtml(d: Record<string, string>) {
  return `<!doctype html><html><head><meta charset="utf-8"><title>Your Revenue Table Request</title></head>
<body style="font-family:${BRAND.font};background:${BRAND.bg};margin:0;padding:24px;color:${BRAND.ink};">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;margin:0 auto;">
    <tr><td style="padding:8px 0 20px;">
      <div style="font-size:18px;font-weight:800;letter-spacing:-0.02em;color:${BRAND.ink};">3rd + Taylor</div>
    </td></tr>
    <tr><td style="background:#fff;border:1px solid #E6DFF5;border-radius:20px;padding:36px 32px;">
      <div style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:${BRAND.gold};font-weight:700;margin-bottom:10px;">Request Received</div>
      <h1 style="font-size:28px;line-height:1.15;margin:0 0 16px;color:${BRAND.ink};font-weight:800;letter-spacing:-0.025em;">
        You're on the list, ${escapeHtml(d.firstName)}.
      </h1>
      <p style="color:${BRAND.muted};font-size:15px;line-height:1.65;margin:0 0 16px;">
        We've received your request to attend <strong style="color:${BRAND.ink};">The Revenue Table Miami</strong> on August 6, 2026. Every application is reviewed before a seat is confirmed — we'll follow up within two business days.
      </p>
      <p style="color:${BRAND.muted};font-size:15px;line-height:1.65;margin:0 0 24px;">
        Questions in the meantime? Reply to this email or reach us at
        <a href="mailto:tiffany.nwahiri@3rdandtaylor.com" style="color:${BRAND.accent};">tiffany.nwahiri@3rdandtaylor.com</a>.
      </p>
      <div style="background:${BRAND.bg};border-radius:12px;padding:16px 20px;">
        <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:${BRAND.muted};margin-bottom:6px;">Your submission</div>
        <div style="font-size:14px;color:${BRAND.ink};font-weight:600;">${escapeHtml(d.firstName)} ${escapeHtml(d.lastName)}</div>
        <div style="font-size:13px;color:${BRAND.muted};margin-top:2px;">${escapeHtml(d.title)} · ${escapeHtml(d.company)}</div>
      </div>
    </td></tr>
    <tr><td style="padding:20px 4px;text-align:center;font-size:12px;color:${BRAND.muted};">
      Sent by <strong style="color:${BRAND.ink};">3rd + Taylor</strong> · The Revenue Table Miami
    </td></tr>
  </table>
</body></html>`;
}

function notificationEmailHtml(d: Record<string, string>) {
  const rows = [
    ["Name", `${d.firstName} ${d.lastName}`],
    ["Email", d.email],
    ["Title", d.title],
    ["Company", d.company],
    ["Website", d.website],
    ["Annual Revenue", d.annualRevenue],
    ["How They Heard", d.referralSource],
    ["Goals / Takeaways", d.goals || "—"],
  ];
  return `<!doctype html><html><head><meta charset="utf-8"><title>New Revenue Table Registration</title></head>
<body style="font-family:${BRAND.font};background:${BRAND.bg};margin:0;padding:24px;color:${BRAND.ink};">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;margin:0 auto;">
    <tr><td style="background:#fff;border:1px solid #E6DFF5;border-radius:20px;padding:32px;">
      <div style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:${BRAND.gold};font-weight:700;margin-bottom:10px;">New Registration</div>
      <h2 style="margin:0 0 20px;font-size:22px;color:${BRAND.ink};letter-spacing:-0.02em;">Revenue Table Miami · Seat Request</h2>
      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
        ${rows.map(([label, value]) => `
          <tr style="border-bottom:1px solid #E6DFF5;">
            <td style="padding:10px 0;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:${BRAND.muted};width:150px;vertical-align:top;">${label}</td>
            <td style="padding:10px 0;font-size:14px;color:${BRAND.ink};">${escapeHtml(String(value))}</td>
          </tr>`).join("")}
      </table>
    </td></tr>
    <tr><td style="padding:16px 4px;text-align:center;font-size:12px;color:${BRAND.muted};">
      3rd + Taylor · Revenue Table Miami
    </td></tr>
  </table>
</body></html>`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const required = ["firstName", "lastName", "email", "title", "company", "website", "annualRevenue", "referralSource"];
    for (const field of required) {
      if (!body[field]?.toString().trim()) {
        return NextResponse.json({ error: `${field} is required` }, { status: 400 });
      }
    }
    if (!body.agreedToReview) {
      return NextResponse.json({ error: "Must confirm attendance is by invitation only." }, { status: 400 });
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    );

    const { error: dbError } = await supabase.from("revenue_table_miami_registrations").insert({
      first_name: body.firstName.trim(),
      last_name: body.lastName.trim(),
      email: body.email.trim().toLowerCase(),
      title: body.title.trim(),
      company: body.company.trim(),
      website: body.website.trim(),
      annual_revenue: body.annualRevenue,
      referral_source: body.referralSource,
      goals: body.goals?.trim() || null,
      agreed_to_review: true,
    });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json({ error: "Failed to save registration." }, { status: 500 });
    }

    const RESEND_API_KEY = process.env.RESEND_DIRECT_API_KEY;
    if (RESEND_API_KEY) {
      await Promise.allSettled([
        fetch(`${RESEND_API_URL}/emails`, {
          method: "POST",
          headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            from: "3rd + Taylor <hello@results.3rdandtaylor.com>",
            to: [body.email.trim()],
            subject: "Your request — The Revenue Table Miami · Aug 6",
            html: confirmationEmailHtml(body),
          }),
        }),
        fetch(`${RESEND_API_URL}/emails`, {
          method: "POST",
          headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            from: "3rd + Taylor <hello@results.3rdandtaylor.com>",
            to: ["tiffany.nwahiri@3rdandtaylor.com"],
            subject: `New seat request — ${body.firstName} ${body.lastName} at ${body.company}`,
            html: notificationEmailHtml(body),
          }),
        }),
      ]);
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Revenue table route error:", e);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
