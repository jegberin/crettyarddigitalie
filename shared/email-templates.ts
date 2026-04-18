export function esc(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function buildContactNotification(d: Record<string, string>): string {
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

export function buildThankYou(name: string, intro: string, extra: string): string {
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

export interface QuoteNotificationInput {
  contact: {
    name: string;
    businessName: string;
    email: string;
    phone: string;
    contactMethod: string;
    notes: string;
  };
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
}

export function buildQuoteNotification(d: QuoteNotificationInput): string {
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
