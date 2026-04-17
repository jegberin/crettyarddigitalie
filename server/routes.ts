import type { Express } from "express";
import { Resend } from "resend";

function esc(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildContactNotification(d: Record<string, string>): string {
  const serviceLabels: Record<string, string> = {
    "new-website": "New website",
    "website-redesign": "Website redesign",
    "microsoft-365": "Microsoft 365",
    "network-wifi": "Network & Wi-Fi",
    "ongoing-support": "Ongoing support",
    "not-sure": "Not sure yet",
  };
  const serviceLabel = serviceLabels[d.service] ?? esc(d.service ?? "—");
  return `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>New Contact Enquiry</title></head>
<body style="margin:0;padding:0;background:#f3f4f5;font-family:Arial,Helvetica,sans-serif;">
<table cellpadding="0" cellspacing="0" width="100%" style="background:#f3f4f5;padding:40px 20px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
      <tr><td style="background:#0C2366;padding:28px 40px;">
        <p style="color:#12B388;margin:0 0 4px;font-size:12px;text-transform:uppercase;letter-spacing:2px;">Crettyard Digital</p>
        <h1 style="color:#ffffff;margin:0;font-size:20px;font-weight:700;">New Contact Enquiry</h1>
        <p style="color:#ffffff;opacity:0.6;margin:6px 0 0;font-size:13px;">Submitted via the website contact form</p>
      </td></tr>
      <tr><td style="padding:32px 40px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr><td style="padding:6px 0;color:#333;font-size:14px;width:40%;font-weight:bold;">Name</td><td style="padding:6px 0;color:#555;font-size:14px;">${esc(d.name)}</td></tr>
          <tr><td style="padding:6px 0;color:#333;font-size:14px;font-weight:bold;">Email</td><td style="padding:6px 0;font-size:14px;"><a href="mailto:${esc(d.email)}" style="color:#12B388;">${esc(d.email)}</a></td></tr>
          ${d.phone ? `<tr><td style="padding:6px 0;color:#333;font-size:14px;font-weight:bold;">Phone</td><td style="padding:6px 0;color:#555;font-size:14px;">${esc(d.phone)}</td></tr>` : ""}
          ${d.businessName ? `<tr><td style="padding:6px 0;color:#333;font-size:14px;font-weight:bold;">Business</td><td style="padding:6px 0;color:#555;font-size:14px;">${esc(d.businessName)}</td></tr>` : ""}
          ${d.service ? `<tr><td style="padding:6px 0;color:#333;font-size:14px;font-weight:bold;">Service</td><td style="padding:6px 0;color:#555;font-size:14px;">${serviceLabel}</td></tr>` : ""}
        </table>
      </td></tr>
      <tr><td style="padding:0 40px 32px;">
        <p style="margin:0 0 8px;color:#0C2366;font-size:14px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #f3f4f5;padding-bottom:8px;">Message</p>
        <p style="margin:0;color:#555;font-size:14px;line-height:1.7;white-space:pre-wrap;">${esc(d.message)}</p>
      </td></tr>
      <tr><td style="padding:16px 40px;background:#f3f4f5;border-top:1px solid #e5e7eb;">
        <p style="margin:0;font-size:12px;color:#999;">Sent via the Crettyard Digital contact form at crettyarddigital.ie</p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`;
}

function buildThankYou(name: string, intro: string, extra: string): string {
  return `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>Thanks — Crettyard Digital</title></head>
<body style="margin:0;padding:0;background:#f3f4f5;font-family:Arial,Helvetica,sans-serif;">
<table cellpadding="0" cellspacing="0" width="100%" style="background:#f3f4f5;padding:40px 20px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
      <tr><td style="background:#0C2366;padding:28px 40px;">
        <p style="color:#12B388;margin:0 0 4px;font-size:12px;text-transform:uppercase;letter-spacing:2px;">Crettyard Digital</p>
        <h1 style="color:#ffffff;margin:0;font-size:20px;font-weight:700;">Thanks for getting in touch</h1>
      </td></tr>
      <tr><td style="padding:32px 40px;">
        <p style="margin:0 0 16px;color:#333;font-size:15px;">Hi ${esc(name)},</p>
        <p style="margin:0 0 16px;color:#555;font-size:15px;line-height:1.7;">${intro}</p>
        <p style="margin:0 0 24px;color:#555;font-size:15px;line-height:1.7;">${extra}</p>
        <p style="margin:0 0 4px;color:#333;font-size:14px;">Talk soon,</p>
        <p style="margin:0 0 4px;color:#333;font-size:14px;font-weight:bold;">Joey</p>
        <p style="margin:0;color:#555;font-size:13px;">Crettyard Digital</p>
        <p style="margin:0;font-size:13px;"><a href="mailto:info@crettyarddigital.ie" style="color:#12B388;">info@crettyarddigital.ie</a> &nbsp;·&nbsp; <a href="https://crettyarddigital.ie" style="color:#12B388;">crettyarddigital.ie</a></p>
      </td></tr>
      <tr><td style="padding:16px 40px;background:#f3f4f5;border-top:1px solid #e5e7eb;">
        <p style="margin:0;font-size:12px;color:#999;">You're receiving this because you submitted a form at crettyarddigital.ie. Reply directly to this email if you'd like to add anything.</p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`;
}

function buildQuoteNotification(d: {
  contact: { name: string; businessName: string; email: string; phone: string; contactMethod: string; notes: string };
  contactMethodLabel: string;
  businessTypeLabel: string;
  serviceLabels: string[];
  subAnswers: Record<string, string | undefined>;
  timingLabel: string;
  ballpark: {
    lines: Array<{
      label: string;
      note?: string;
      oneOffLow?: number;
      oneOffHigh?: number;
      monthlyLow?: number;
      monthlyHigh?: number;
      grantEligible: string;
      thirdParty?: boolean;
    }>;
    oneOffLow: number;
    oneOffHigh: number;
    monthlyLow: number;
    monthlyHigh: number;
    hasTalkOnly: boolean;
  };
}): string {
  const fmt = (n: number) => `€${n.toLocaleString("en-IE")}`;
  const fmtRange = (low?: number, high?: number) => {
    const l = low ?? 0;
    const h = high ?? 0;
    if (l === 0 && h === 0) return "—";
    if (l === h) return `from ${fmt(l)}`;
    return `${fmt(l)}–${fmt(h)}`;
  };

  const subAnswerLabels: Record<string, string> = {
    websitePages: "Website pages",
    websiteEcommerce: "Needs e-commerce",
    websiteType: "New or redesign",
    m365Users: "M365 users",
    phoneUsers: "Teams Phone users",
    itTeamSize: "Managed IT team size",
    networkScope: "Network coverage",
    cybRegulated: "Regulated financial sector",
    hwDevices: "Hardware devices",
    hwServer: "Server/NAS needed",
    aiUsers: "AI/Copilot users",
    grantsLEO: "LEO consultation status",
  };

  const subAnswerRows = Object.entries(d.subAnswers)
    .filter(([, v]) => v !== undefined && v !== "")
    .map(
      ([k, v]) =>
        `<tr><td style="padding:5px 0;color:#333;font-size:14px;width:45%;font-weight:bold;">${esc(subAnswerLabels[k] ?? k)}</td><td style="padding:5px 0;color:#555;font-size:14px;">${esc(v ?? "")}</td></tr>`
    )
    .join("");

  const serviceRows = d.serviceLabels
    .map(
      (s) =>
        `<tr><td style="padding:4px 0;color:#555;font-size:14px;">✓ ${esc(s)}</td></tr>`
    )
    .join("");

  const lineRows = d.ballpark.lines
    .map((l) => {
      const oneOff = (l.oneOffLow ?? 0) > 0 || (l.oneOffHigh ?? 0) > 0
        ? fmtRange(l.oneOffLow, l.oneOffHigh)
        : "";
      const monthly = (l.monthlyLow ?? 0) > 0 || (l.monthlyHigh ?? 0) > 0
        ? `${fmtRange(l.monthlyLow, l.monthlyHigh)}/mo`
        : "";
      const tags = [
        l.grantEligible === "yes" ? '<span style="display:inline-block;background:#E8F7F2;color:#12B388;font-size:10px;font-weight:bold;padding:2px 6px;border-radius:8px;margin-left:6px;">GRANT-ELIGIBLE</span>' : "",
        l.thirdParty ? '<span style="display:inline-block;background:#f3f4f5;color:#666;font-size:10px;font-weight:bold;padding:2px 6px;border-radius:8px;margin-left:6px;">3RD-PARTY</span>' : "",
      ].join("");
      const priceCell = [oneOff, monthly].filter(Boolean).join(" · ");
      return `<tr>
        <td style="padding:10px 0;border-bottom:1px solid #f3f4f5;">
          <p style="margin:0;color:#0C2366;font-size:14px;font-weight:bold;">${esc(l.label)}${tags}</p>
          ${l.note ? `<p style="margin:3px 0 0;color:#666;font-size:12px;">${esc(l.note)}</p>` : ""}
        </td>
        <td style="padding:10px 0;border-bottom:1px solid #f3f4f5;text-align:right;color:#12B388;font-size:13px;font-weight:bold;white-space:nowrap;vertical-align:top;">${priceCell || "—"}</td>
      </tr>`;
    })
    .join("");

  return `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>New Quote Request</title></head>
<body style="margin:0;padding:0;background:#f3f4f5;font-family:Arial,Helvetica,sans-serif;">
<table cellpadding="0" cellspacing="0" width="100%" style="background:#f3f4f5;padding:40px 20px;">
  <tr><td align="center">
    <table width="640" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
      <tr><td style="background:#0C2366;padding:32px 40px;">
        <p style="color:#12B388;margin:0 0 4px;font-size:12px;text-transform:uppercase;letter-spacing:2px;">Crettyard Digital</p>
        <h1 style="color:#ffffff;margin:0;font-size:22px;font-weight:700;">New Quote Request</h1>
        <p style="color:#ffffff;opacity:0.6;margin:6px 0 0;font-size:13px;">Submitted via the multi-service quote tool</p>
      </td></tr>

      <tr><td style="padding:32px 40px 16px;">
        <h2 style="color:#0C2366;font-size:15px;margin:0 0 16px;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #f3f4f5;padding-bottom:8px;">Contact</h2>
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr><td style="padding:5px 0;color:#333;font-size:14px;width:45%;font-weight:bold;">Name</td><td style="padding:5px 0;color:#555;font-size:14px;">${esc(d.contact.name)}</td></tr>
          ${d.contact.businessName ? `<tr><td style="padding:5px 0;color:#333;font-size:14px;font-weight:bold;">Business</td><td style="padding:5px 0;color:#555;font-size:14px;">${esc(d.contact.businessName)}</td></tr>` : ""}
          <tr><td style="padding:5px 0;color:#333;font-size:14px;font-weight:bold;">Email</td><td style="padding:5px 0;font-size:14px;"><a href="mailto:${esc(d.contact.email)}" style="color:#12B388;">${esc(d.contact.email)}</a></td></tr>
          ${d.contact.phone ? `<tr><td style="padding:5px 0;color:#333;font-size:14px;font-weight:bold;">Phone</td><td style="padding:5px 0;color:#555;font-size:14px;">${esc(d.contact.phone)}</td></tr>` : ""}
          <tr><td style="padding:5px 0;color:#333;font-size:14px;font-weight:bold;">Preferred contact</td><td style="padding:5px 0;color:#555;font-size:14px;">${esc(d.contactMethodLabel)}</td></tr>
          <tr><td style="padding:5px 0;color:#333;font-size:14px;font-weight:bold;">Business type</td><td style="padding:5px 0;color:#555;font-size:14px;">${esc(d.businessTypeLabel)}</td></tr>
          <tr><td style="padding:5px 0;color:#333;font-size:14px;font-weight:bold;">Timing</td><td style="padding:5px 0;color:#555;font-size:14px;">${esc(d.timingLabel)}</td></tr>
        </table>
      </td></tr>

      <tr><td style="padding:16px 40px;">
        <h2 style="color:#0C2366;font-size:15px;margin:0 0 16px;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #f3f4f5;padding-bottom:8px;">Services requested</h2>
        <table width="100%" cellpadding="0" cellspacing="0">
          ${serviceRows || '<tr><td style="color:#999;font-size:14px;">—</td></tr>'}
        </table>
      </td></tr>

      ${subAnswerRows ? `<tr><td style="padding:16px 40px;">
        <h2 style="color:#0C2366;font-size:15px;margin:0 0 16px;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #f3f4f5;padding-bottom:8px;">Follow-up answers</h2>
        <table width="100%" cellpadding="0" cellspacing="0">
          ${subAnswerRows}
        </table>
      </td></tr>` : ""}

      ${d.ballpark.lines.length > 0 && !d.ballpark.hasTalkOnly ? `<tr><td style="padding:16px 40px;">
        <h2 style="color:#0C2366;font-size:15px;margin:0 0 16px;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #f3f4f5;padding-bottom:8px;">Auto-calculated ballpark (shown to customer)</h2>
        <table width="100%" cellpadding="0" cellspacing="0">
          ${lineRows}
        </table>
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:16px;background:#f7f8fa;border-radius:6px;">
          <tr>
            <td style="padding:12px 16px;color:#0C2366;font-size:13px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;">Est. one-off</td>
            <td style="padding:12px 16px;color:#0C2366;font-size:16px;font-weight:bold;text-align:right;">${fmtRange(d.ballpark.oneOffLow, d.ballpark.oneOffHigh)}</td>
          </tr>
          <tr>
            <td style="padding:12px 16px;color:#12B388;font-size:13px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;border-top:1px solid #e5e7eb;">Est. monthly</td>
            <td style="padding:12px 16px;color:#12B388;font-size:16px;font-weight:bold;text-align:right;border-top:1px solid #e5e7eb;">${fmtRange(d.ballpark.monthlyLow, d.ballpark.monthlyHigh)}/mo</td>
          </tr>
        </table>
      </td></tr>` : ""}

      ${d.contact.notes ? `<tr><td style="padding:16px 40px 32px;">
        <h2 style="color:#0C2366;font-size:15px;margin:0 0 12px;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #f3f4f5;padding-bottom:8px;">Additional notes</h2>
        <p style="margin:0;color:#555;font-size:14px;line-height:1.7;white-space:pre-wrap;">${esc(d.contact.notes)}</p>
      </td></tr>` : ""}

      <tr><td style="padding:20px 40px;background:#f3f4f5;border-top:1px solid #e5e7eb;">
        <p style="margin:0;font-size:12px;color:#999;">Sent via the Crettyard Digital quote tool at crettyarddigital.ie. Reply directly to this email to reach ${esc(d.contact.name)}.</p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`;
}

const VALID_BUSINESS_TYPES = new Set([
  "tradesperson",
  "professional",
  "retail",
  "regulated-financial",
  "manufacturing",
  "other",
]);
const VALID_SERVICES = new Set([
  "website",
  "m365",
  "phone",
  "managed-it",
  "network",
  "cybersecurity",
  "hardware",
  "ai",
  "grants",
  "not-sure",
]);
const VALID_TIMING = new Set(["asap", "this-quarter", "next-quarter", "exploring"]);
const VALID_CONTACT_METHODS = new Set(["email", "phone", "whatsapp"]);

export async function registerRoutes(app: Express): Promise<void> {
  app.post("/api/quote", async (req, res) => {
    const body = req.body ?? {};
    const contact = body.contact ?? {};

    const name = String(contact.name ?? "").trim();
    const email = String(contact.email ?? "").trim();
    const businessName = String(contact.businessName ?? "").trim();
    const phone = String(contact.phone ?? "").trim();
    const contactMethod = String(contact.contactMethod ?? "email");
    const notes = String(contact.notes ?? "").trim();

    if (!name) {
      return res.status(400).json({ error: "Name is required." });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "A valid email address is required." });
    }
    if (!VALID_CONTACT_METHODS.has(contactMethod)) {
      return res.status(400).json({ error: "Invalid contact method." });
    }

    const businessType = String(body.businessType ?? "");
    if (businessType && !VALID_BUSINESS_TYPES.has(businessType)) {
      return res.status(400).json({ error: "Invalid business type." });
    }

    const services: string[] = Array.isArray(body.services)
      ? body.services.filter((s: unknown) => typeof s === "string" && VALID_SERVICES.has(s))
      : [];
    if (services.length === 0) {
      return res.status(400).json({ error: "Please select at least one service." });
    }

    const timing = String(body.timing ?? "");
    if (timing && !VALID_TIMING.has(timing)) {
      return res.status(400).json({ error: "Invalid timing selection." });
    }

    const serviceLabels: string[] = Array.isArray(body.serviceLabels)
      ? body.serviceLabels.filter((s: unknown) => typeof s === "string").slice(0, 20)
      : services;

    const businessTypeLabel = String(body.businessTypeLabel ?? businessType ?? "—");
    const timingLabel = String(body.timingLabel ?? timing ?? "—");
    const contactMethodLabel = String(body.contactMethodLabel ?? contactMethod);

    const subAnswersRaw = (body.subAnswers ?? {}) as Record<string, unknown>;
    const subAnswers: Record<string, string> = {};
    for (const [k, v] of Object.entries(subAnswersRaw)) {
      if (typeof v === "string" && v.length > 0 && v.length < 80) {
        subAnswers[k.slice(0, 60)] = v;
      }
    }

    const ballparkIn = (body.ballpark ?? {}) as Record<string, unknown>;
    const linesIn = Array.isArray(ballparkIn.lines) ? ballparkIn.lines : [];
    const safeLines = linesIn
      .slice(0, 40)
      .map((l: any) => ({
        label: String(l?.label ?? "").slice(0, 120),
        note: l?.note ? String(l.note).slice(0, 400) : undefined,
        oneOffLow: typeof l?.oneOffLow === "number" ? Math.max(0, Math.min(l.oneOffLow, 1_000_000)) : undefined,
        oneOffHigh: typeof l?.oneOffHigh === "number" ? Math.max(0, Math.min(l.oneOffHigh, 1_000_000)) : undefined,
        monthlyLow: typeof l?.monthlyLow === "number" ? Math.max(0, Math.min(l.monthlyLow, 100_000)) : undefined,
        monthlyHigh: typeof l?.monthlyHigh === "number" ? Math.max(0, Math.min(l.monthlyHigh, 100_000)) : undefined,
        grantEligible: String(l?.grantEligible ?? "n/a").slice(0, 20),
        thirdParty: l?.thirdParty === true,
      }));
    const ballpark = {
      lines: safeLines,
      oneOffLow: typeof ballparkIn.oneOffLow === "number" ? Math.max(0, Math.min(ballparkIn.oneOffLow, 10_000_000)) : 0,
      oneOffHigh: typeof ballparkIn.oneOffHigh === "number" ? Math.max(0, Math.min(ballparkIn.oneOffHigh, 10_000_000)) : 0,
      monthlyLow: typeof ballparkIn.monthlyLow === "number" ? Math.max(0, Math.min(ballparkIn.monthlyLow, 1_000_000)) : 0,
      monthlyHigh: typeof ballparkIn.monthlyHigh === "number" ? Math.max(0, Math.min(ballparkIn.monthlyHigh, 1_000_000)) : 0,
      hasTalkOnly: ballparkIn.hasTalkOnly === true || (services.length === 1 && services[0] === "not-sure"),
    };

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[quote] RESEND_API_KEY is not set.");
      return res.status(500).json({ error: "Email service is not configured. Please contact info@crettyarddigital.ie directly." });
    }

    const resend = new Resend(apiKey);
    const fromEmail = process.env.RESEND_SENDER ?? "onboarding@resend.dev";

    const contactData = { name, businessName, email, phone, contactMethod, notes };

    const notificationHtml = buildQuoteNotification({
      contact: contactData,
      contactMethodLabel,
      businessTypeLabel,
      serviceLabels,
      subAnswers,
      timingLabel,
      ballpark,
    });

    const subject = `New Quote Request — ${businessName || name}${ballpark.hasTalkOnly ? " (talk-only)" : ballpark.oneOffHigh > 0 ? ` (€${ballpark.oneOffLow.toLocaleString("en-IE")}–€${ballpark.oneOffHigh.toLocaleString("en-IE")} one-off)` : ""}`;

    try {
      const { error: notifErr } = await resend.emails.send({
        from: `Crettyard Digital Quote Tool <${fromEmail}>`,
        to: ["info@crettyarddigital.ie"],
        replyTo: email,
        subject,
        html: notificationHtml,
      });

      if (notifErr) {
        console.error("[quote] Resend notification error:", notifErr);
        return res.status(500).json({ error: "Failed to send quote. Please contact info@crettyarddigital.ie directly." });
      }

      const firstName = name.split(" ")[0] || name;
      const intro = ballpark.hasTalkOnly
        ? "Thanks for getting in touch. I\u2019ve received your request and I\u2019ll reach out within one business day to set up a no-obligation chat about what you need."
        : "Thanks for your request. I\u2019ve received everything you told me, along with the ballpark estimate you saw on screen. I\u2019ll review it properly and come back to you within one business day with a tailored fixed quote.";
      const extra = `Preferred contact method noted: ${contactMethodLabel}. If your need is urgent, you can also reach me on WhatsApp at 087 970 0701, or reply to this email.`;

      await resend.emails.send({
        from: `Crettyard Digital <${fromEmail}>`,
        to: [email],
        subject: "Your quote request — Crettyard Digital",
        html: buildThankYou(firstName, intro, extra),
      });

      return res.json({ success: true });
    } catch (err) {
      console.error("[quote] Unexpected error:", err);
      return res.status(500).json({ error: "An unexpected error occurred. Please contact info@crettyarddigital.ie directly." });
    }
  });

  app.post("/api/contact", async (req, res) => {
    const body = req.body ?? {};
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name) return res.status(400).json({ error: "Name is required." });
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "A valid email address is required." });
    }
    if (!message) return res.status(400).json({ error: "A message is required." });

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[contact] RESEND_API_KEY is not set.");
      return res.status(500).json({ error: "Email service is not configured. Please contact info@crettyarddigital.ie directly." });
    }

    const resend = new Resend(apiKey);
    const fromEmail = process.env.RESEND_SENDER ?? "onboarding@resend.dev";

    try {
      const { error: notifErr } = await resend.emails.send({
        from: `Crettyard Digital Website <${fromEmail}>`,
        to: ["info@crettyarddigital.ie"],
        replyTo: email,
        subject: `New Contact Enquiry — ${name}${body.businessName ? ` (${body.businessName})` : ""}`,
        html: buildContactNotification({
          name,
          email,
          phone: String(body.phone ?? ""),
          businessName: String(body.businessName ?? ""),
          service: String(body.service ?? ""),
          message,
        }),
      });

      if (notifErr) {
        console.error("[contact] Resend notification error:", notifErr);
        return res.status(500).json({ error: "Failed to send. Please contact info@crettyarddigital.ie directly." });
      }

      await resend.emails.send({
        from: `Crettyard Digital <${fromEmail}>`,
        to: [email],
        subject: "Thanks for getting in touch — Crettyard Digital",
        html: buildThankYou(
          name,
          "Thanks for reaching out. I've received your message and will get back to you within one business day.",
          "In the meantime, feel free to reply to this email if you have anything to add. If your need is urgent, you can also reach me on WhatsApp at 087 970 0701."
        ),
      });

      return res.json({ success: true });
    } catch (err) {
      console.error("[contact] Unexpected error:", err);
      return res.status(500).json({ error: "An unexpected error occurred. Please contact info@crettyarddigital.ie directly." });
    }
  });
}
