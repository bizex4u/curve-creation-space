import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface LeadPayload {
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  budget?: string | null;
  funding_model?: string | null;
  message?: string | null;
  source?: string | null;
  created_at?: string | null;
}

function row(label: string, value: string | null | undefined): string {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:8px 16px 8px 0;color:#6b7280;font-size:13px;font-family:Inter,sans-serif;white-space:nowrap;vertical-align:top;">${label}</td>
      <td style="padding:8px 0;color:#111827;font-size:13px;font-family:Inter,sans-serif;vertical-align:top;">${value}</td>
    </tr>`;
}

function buildHtml(lead: LeadPayload): string {
  const ts = lead.created_at
    ? new Date(lead.created_at).toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "medium", timeStyle: "short" })
    : new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "medium", timeStyle: "short" });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Lead — BIZEX4U</title>
</head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:Inter,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:#18181b;padding:24px 32px;">
              <span style="font-size:20px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;font-family:Inter,Arial,sans-serif;">BIZEX4U</span>
              <span style="font-size:13px;color:#a1a1aa;margin-left:12px;font-family:Inter,Arial,sans-serif;">New lead received</span>
            </td>
          </tr>

          <!-- Lead name banner -->
          <tr>
            <td style="padding:28px 32px 8px 32px;">
              <div style="font-size:22px;font-weight:600;color:#18181b;font-family:Inter,Arial,sans-serif;">${lead.name}</div>
              <div style="font-size:14px;color:#6b7280;margin-top:4px;font-family:Inter,Arial,sans-serif;">${lead.email}</div>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:16px 32px 0 32px;">
              <hr style="border:none;border-top:1px solid #e5e7eb;margin:0;" />
            </td>
          </tr>

          <!-- Details table -->
          <tr>
            <td style="padding:16px 32px 8px 32px;">
              <table cellpadding="0" cellspacing="0" width="100%">
                ${row("Phone", lead.phone)}
                ${row("Company", lead.company)}
                ${row("Budget", lead.budget)}
                ${row("Funding model", lead.funding_model)}
                ${row("Source", lead.source)}
                ${row("Submitted", ts)}
              </table>
            </td>
          </tr>

          ${lead.message ? `
          <!-- Message -->
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;padding:16px;">
                <div style="font-size:11px;font-weight:600;color:#9ca3af;letter-spacing:0.08em;margin-bottom:8px;font-family:Inter,Arial,sans-serif;">MESSAGE</div>
                <div style="font-size:14px;color:#374151;line-height:1.6;font-family:Inter,Arial,sans-serif;white-space:pre-wrap;">${lead.message}</div>
              </div>
            </td>
          </tr>` : ""}

          <!-- CTA -->
          <tr>
            <td style="padding:0 32px 32px 32px;">
              <a href="https://bizex4u.com/contact" style="display:inline-block;background:#18181b;color:#ffffff;text-decoration:none;font-size:13px;font-weight:600;padding:12px 24px;border-radius:10px;font-family:Inter,Arial,sans-serif;">
                Reply to lead →
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9fafb;padding:16px 32px;border-top:1px solid #e5e7eb;">
              <div style="font-size:12px;color:#9ca3af;font-family:Inter,Arial,sans-serif;">
                This notification was sent automatically by BIZEX4U lead capture. Do not reply to this email.
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("[notify-lead] RESEND_API_KEY not set");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const lead: LeadPayload = await req.json();

    if (!lead.name || !lead.email) {
      return new Response(
        JSON.stringify({ error: "name and email are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const html = buildHtml(lead);
    const subject = `New lead: ${lead.name}${lead.company ? ` — ${lead.company}` : ""}`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "BIZEX4U Leads <leads@bizex4u.com>",
        to: ["yash@bizex4u.com"],
        subject,
        html,
        reply_to: lead.email,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error(`[notify-lead] Resend error ${res.status}:`, body);
      return new Response(
        JSON.stringify({ error: "Failed to send email", detail: body }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await res.json();
    console.log("[notify-lead] Email sent:", data.id);

    return new Response(
      JSON.stringify({ ok: true, emailId: data.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("[notify-lead] Unexpected error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
