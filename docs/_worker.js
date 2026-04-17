const BASE_PRICES = { "1-3": 499, "4-7": 899, "8+": 1399 };

const FEATURE_PRICES = {
  copywriting:  { label: "Let Crettyard Digital write the text & images", price: 99 },
  contactform:  { label: "Advanced contact form", price: 49 },
  blog:         { label: "Blog / news section", price: 249 },
  booking:      { label: "Booking/calendar integration", price: 99 },
  payments:     { label: "Payment gateway integration", price: 199 },
  ecommerce:    { label: "Full e-commerce setup (up to 20 products)", price: 499 },
  newsletter:   { label: "Newsletter / email signup", price: 49 },
  livechat:     { label: "Live chat / WhatsApp widget", price: 49 },
  multilingual: { label: "Multilingual / second-language version", price: 199 },
  branding:     { label: "Logo design & brand pack", price: 99 },
};

const BUSINESS_TYPE_LABELS = {
  tradesperson: "Tradesperson / Contractor",
  retail: "Retail / Hospitality",
  professional: "Professional Services",
  service: "Service Business",
  charity: "Charity / Community",
  other: "Other",
};

const GOAL_LABELS = {
  enquiries: "Get more enquiries & leads",
  showcase: "Showcase my work & portfolio",
  credibility: "Build credibility & trust",
  ecommerce: "Sell products or services online",
  information: "Provide information & contact",
};

const EMAIL_PER_USER_MONTHLY = 8.48;
const EMAIL_SETUP_FEE = 199;
const DOMAIN_YEARLY = 24;

function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function fmt(n) {
  return "\u20AC" + n.toLocaleString("en-IE");
}

function calculatePrice(data) {
  const base = data.pageCount ? (BASE_PRICES[data.pageCount] ?? 0) : 0;
  const discountedBase = data.isRedesign ? Math.round(base * 0.8) : base;
  const addons = (data.features ?? []).reduce(
    (sum, f) => sum + (FEATURE_PRICES[f]?.price ?? 0),
    0
  );
  const emailSetup = data.wantsEmail ? EMAIL_SETUP_FEE : 0;
  const oneTime = discountedBase + addons + emailSetup;
  const yearly = data.hasDomain === false ? DOMAIN_YEARLY : 0;
  const monthly = data.wantsEmail ? Math.round((data.emailUsers ?? 1) * EMAIL_PER_USER_MONTHLY * 100) / 100 : 0;
  return { base: discountedBase, addons, emailSetup, oneTime, yearly, monthly };
}

function buildContactNotification(d) {
  const serviceLabels = {
    "new-website": "New website",
    "website-redesign": "Website redesign",
    "microsoft-365": "Microsoft 365",
    "network-wifi": "Network & Wi-Fi",
    "ongoing-support": "Ongoing support",
    "not-sure": "Not sure yet",
  };
  const serviceLabel = serviceLabels[d.service] ?? esc(d.service ?? "\u2014");
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
        <p style="margin:0;font-size:12px;color:#999;">Sent via the Crettyard Digital contact form at digital.crettyard.ie</p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`;
}

function buildParentalNotification(d) {
  const row = (label, val) =>
    val ? `<tr><td style="padding:6px 0;color:#333;font-size:14px;width:40%;font-weight:bold;">${esc(label)}</td><td style="padding:6px 0;color:#555;font-size:14px;">${esc(String(val))}</td></tr>` : "";
  const listItems = (items) =>
    items.length ? items.map(i => `<li style="font-size:14px;color:#555;padding:2px 0;">${esc(i)}</li>`).join("") : "<li style='font-size:14px;color:#999;'>None selected</li>";

  return `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>New Parental Controls Enquiry</title></head>
<body style="margin:0;padding:0;background:#f3f4f5;font-family:Arial,Helvetica,sans-serif;">
<table cellpadding="0" cellspacing="0" width="100%" style="background:#f3f4f5;padding:40px 20px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
      <tr><td style="background:#0C2366;padding:28px 40px;">
        <p style="color:#12B388;margin:0 0 4px;font-size:12px;text-transform:uppercase;letter-spacing:2px;">Crettyard Digital</p>
        <h1 style="color:#ffffff;margin:0;font-size:20px;font-weight:700;">New Parental Controls Enquiry</h1>
        <p style="color:#ffffff;opacity:0.6;margin:6px 0 0;font-size:13px;">Submitted via the website parental controls form</p>
      </td></tr>
      <tr><td style="padding:32px 40px 16px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          ${row("Name", d.name)}
          <tr><td style="padding:6px 0;color:#333;font-size:14px;width:40%;font-weight:bold;">Email</td><td style="padding:6px 0;font-size:14px;"><a href="mailto:${esc(String(d.email ?? ""))}" style="color:#12B388;">${esc(String(d.email ?? ""))}</a></td></tr>
          ${row("Phone", d.phone)}
          ${row("County / Area", d.county)}
          ${row("Children", d.children)}
          ${row("Preferred Contact", d.contactMethod)}
          ${row("Preferred Time", d.contactTime)}
        </table>
      </td></tr>
      <tr><td style="padding:0 40px 16px;">
        <p style="margin:0 0 8px;color:#0C2366;font-size:14px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #f3f4f5;padding-bottom:8px;">Devices Used</p>
        <ul style="margin:0;padding-left:20px;">${listItems(Array.isArray(d.devices) ? d.devices : [])}</ul>
      </td></tr>
      <tr><td style="padding:0 40px 16px;">
        <p style="margin:0 0 8px;color:#0C2366;font-size:14px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #f3f4f5;padding-bottom:8px;">Help Needed</p>
        <ul style="margin:0;padding-left:20px;">${listItems(Array.isArray(d.help) ? d.help : [])}</ul>
      </td></tr>
      ${d.notes ? `<tr><td style="padding:0 40px 24px;"><p style="margin:0 0 8px;color:#0C2366;font-size:14px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #f3f4f5;padding-bottom:8px;">Additional Notes</p><p style="margin:0;color:#555;font-size:14px;line-height:1.7;white-space:pre-wrap;">${esc(String(d.notes))}</p></td></tr>` : ""}
      <tr><td style="padding:16px 40px;background:#f3f4f5;border-top:1px solid #e5e7eb;">
        <p style="margin:0;font-size:12px;color:#999;">Sent via the Crettyard Digital parental controls form at digital.crettyard.ie</p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`;
}

function buildThankYou(name, intro, extra) {
  return `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>Thanks \u2014 Crettyard Digital</title></head>
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
        <p style="margin:0;font-size:13px;"><a href="mailto:info@crettyard.ie" style="color:#12B388;">info@crettyard.ie</a> &nbsp;&middot;&nbsp; <a href="https://digital.crettyard.ie" style="color:#12B388;">digital.crettyard.ie</a></p>
      </td></tr>
      <tr><td style="padding:16px 40px;background:#f3f4f5;border-top:1px solid #e5e7eb;">
        <p style="margin:0;font-size:12px;color:#999;">You're receiving this because you submitted a form at digital.crettyard.ie. Reply directly to this email if you'd like to add anything.</p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`;
}

function buildQuoteEmail(data, pricing) {
  const featureRows = (data.features ?? [])
    .map(f => FEATURE_PRICES[f])
    .filter(Boolean)
    .map(f => `<tr><td style="padding:6px 0;color:#555;font-size:14px;">\u2713 ${esc(f.label)}</td><td style="padding:6px 0;color:#555;font-size:14px;text-align:right;">${fmt(f.price)}</td></tr>`)
    .join("");

  const goals = (data.websiteGoals ?? [])
    .map(g => esc(GOAL_LABELS[g] ?? g))
    .join(", ") || "\u2014";

  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>New Quote Request \u2014 Crettyard Digital</title></head>
<body style="margin:0;padding:0;background:#f3f4f5;font-family:Arial,Helvetica,sans-serif;">
<table cellpadding="0" cellspacing="0" width="100%" style="background:#f3f4f5;padding:40px 20px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
      <tr>
        <td style="background:#0C2366;padding:32px 40px;">
          <p style="color:#12B388;margin:0 0 4px;font-size:12px;text-transform:uppercase;letter-spacing:2px;">Crettyard Digital</p>
          <h1 style="color:#ffffff;margin:0;font-size:22px;font-weight:700;">New Quote Request</h1>
          <p style="color:#ffffff;opacity:0.6;margin:6px 0 0;font-size:13px;">Submitted via the website quote calculator</p>
        </td>
      </tr>
      <tr>
        <td style="padding:32px 40px 16px;">
          <h2 style="color:#0C2366;font-size:15px;margin:0 0 16px;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #f3f4f5;padding-bottom:8px;">Contact Details</h2>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:5px 0;color:#333;font-size:14px;width:40%;font-weight:bold;">Name</td><td style="padding:5px 0;color:#555;font-size:14px;">${esc(data.name)}</td></tr>
            <tr><td style="padding:5px 0;color:#333;font-size:14px;font-weight:bold;">Email</td><td style="padding:5px 0;font-size:14px;"><a href="mailto:${esc(data.email)}" style="color:#12B388;">${esc(data.email)}</a></td></tr>
            ${data.phone ? `<tr><td style="padding:5px 0;color:#333;font-size:14px;font-weight:bold;">Phone</td><td style="padding:5px 0;color:#555;font-size:14px;">${esc(data.phone)}</td></tr>` : ""}
            ${data.followUp ? `<tr><td style="padding:5px 0;color:#333;font-size:14px;font-weight:bold;">Preferred Follow-up</td><td style="padding:5px 0;color:#555;font-size:14px;">${data.followUp === "whatsapp" ? "WhatsApp" : data.followUp === "phone" ? "Phone call" : "Email"}</td></tr>` : ""}
            ${data.businessName ? `<tr><td style="padding:5px 0;color:#333;font-size:14px;font-weight:bold;">Business Name</td><td style="padding:5px 0;color:#555;font-size:14px;">${esc(data.businessName)}</td></tr>` : ""}
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:16px 40px;">
          <h2 style="color:#0C2366;font-size:15px;margin:0 0 16px;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #f3f4f5;padding-bottom:8px;">Business &amp; Project</h2>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:5px 0;color:#333;font-size:14px;width:40%;font-weight:bold;">Business Type</td><td style="padding:5px 0;color:#555;font-size:14px;">${esc(BUSINESS_TYPE_LABELS[data.businessType ?? ""] ?? data.businessType ?? "\u2014")}</td></tr>
            <tr><td style="padding:5px 0;color:#333;font-size:14px;font-weight:bold;">Website Goals</td><td style="padding:5px 0;color:#555;font-size:14px;">${goals}</td></tr>
            <tr><td style="padding:5px 0;color:#333;font-size:14px;font-weight:bold;">Pages Needed</td><td style="padding:5px 0;color:#555;font-size:14px;">${esc(data.pageCount)}</td></tr>
            <tr><td style="padding:5px 0;color:#333;font-size:14px;font-weight:bold;">Redesign?</td><td style="padding:5px 0;color:#555;font-size:14px;">${data.isRedesign ? "Yes \u2014 20% base discount applied" : "No"}</td></tr>
            <tr><td style="padding:5px 0;color:#333;font-size:14px;font-weight:bold;">Has Domain?</td><td style="padding:5px 0;color:#555;font-size:14px;">${data.hasDomain ? "Yes" : "No \u2014 domain registration needed"}</td></tr>
            ${data.launchDate ? `<tr><td style="padding:5px 0;color:#333;font-size:14px;font-weight:bold;">Ideal Launch</td><td style="padding:5px 0;color:#555;font-size:14px;">${esc(data.launchDate)}</td></tr>` : ""}
            ${data.budget ? `<tr><td style="padding:5px 0;color:#333;font-size:14px;font-weight:bold;">Budget Range</td><td style="padding:5px 0;color:#555;font-size:14px;">${esc(data.budget)}</td></tr>` : ""}
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:16px 40px;">
          <h2 style="color:#0C2366;font-size:15px;margin:0 0 16px;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #f3f4f5;padding-bottom:8px;">Features &amp; Add-ons</h2>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:6px 0;color:#555;font-size:14px;">\u2713 Contact form &amp; enquiry notifications</td><td style="padding:6px 0;color:#12B388;font-size:14px;text-align:right;font-weight:bold;">INCLUDED</td></tr>
            ${featureRows}
          </table>
          ${data.wantsEmail ? `
          <div style="margin-top:12px;padding:12px 16px;background:#f3f4f5;border-radius:6px;font-size:14px;color:#555;">
            <strong style="color:#0C2366;">Microsoft 365 Business Email:</strong> ${data.emailUsers ?? 1} mailbox${(data.emailUsers ?? 1) > 1 ? "es" : ""}<br>
            <span style="font-size:13px;">One-time setup: ${fmt(EMAIL_SETUP_FEE)} \u00B7 Ongoing: ~${fmt(pricing.monthly)}/month (indicative, billed directly by Microsoft to customer)</span>
          </div>` : ""}
        </td>
      </tr>
      <tr>
        <td style="padding:16px 40px 32px;">
          <h2 style="color:#0C2366;font-size:15px;margin:0 0 16px;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #f3f4f5;padding-bottom:8px;">Guide Pricing Summary</h2>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:10px 16px;background:#0C2366;color:#ffffff;font-size:15px;font-weight:bold;border-radius:6px 6px 0 0;">One-time Investment</td>
              <td style="padding:10px 16px;background:#0C2366;color:#12B388;font-size:18px;font-weight:bold;text-align:right;border-radius:6px 6px 0 0;">${fmt(pricing.oneTime)}</td>
            </tr>
            <tr>
              <td style="padding:6px 16px;background:#f7f8fa;color:#555;font-size:13px;">Base build (${esc(data.pageCount)} pages)</td>
              <td style="padding:6px 16px;background:#f7f8fa;color:#555;font-size:13px;text-align:right;">${fmt(pricing.base)}</td>
            </tr>
            ${pricing.addons > 0 ? `<tr><td style="padding:6px 16px;background:#f7f8fa;color:#555;font-size:13px;">Feature add-ons</td><td style="padding:6px 16px;background:#f7f8fa;color:#555;font-size:13px;text-align:right;">${fmt(pricing.addons)}</td></tr>` : ""}
            ${pricing.emailSetup > 0 ? `<tr><td style="padding:6px 16px;background:#f7f8fa;color:#555;font-size:13px;">Microsoft 365 setup (one-off)</td><td style="padding:6px 16px;background:#f7f8fa;color:#555;font-size:13px;text-align:right;">${fmt(pricing.emailSetup)}</td></tr>` : ""}
            ${pricing.monthly > 0 ? `
            <tr><td colspan="2" style="padding:4px;"></td></tr>
            <tr>
              <td style="padding:10px 16px;background:#f3f4f5;color:#333;font-size:14px;font-weight:bold;border-radius:6px 6px 0 0;">Monthly (indicative \u2014 billed by Microsoft)</td>
              <td style="padding:10px 16px;background:#f3f4f5;color:#0C2366;font-size:15px;font-weight:bold;text-align:right;border-radius:6px 6px 0 0;">~${fmt(pricing.monthly)}/mo</td>
            </tr>
            <tr><td style="padding:6px 16px;background:#f7f8fa;color:#555;font-size:13px;">Microsoft 365 (${data.emailUsers ?? 1} mailbox${(data.emailUsers ?? 1) > 1 ? "es" : ""} \u00D7 \u20AC8.48/mo)</td><td style="padding:6px 16px;background:#f7f8fa;color:#555;font-size:13px;text-align:right;">~${fmt(pricing.monthly)}/mo</td></tr>
            ` : ""}
            ${pricing.yearly > 0 ? `
            <tr><td colspan="2" style="padding:4px;"></td></tr>
            <tr>
              <td style="padding:10px 16px;background:#f3f4f5;color:#333;font-size:14px;font-weight:bold;border-radius:6px 6px 0 0;">Annual</td>
              <td style="padding:10px 16px;background:#f3f4f5;color:#0C2366;font-size:15px;font-weight:bold;text-align:right;border-radius:6px 6px 0 0;">${fmt(pricing.yearly)}/yr</td>
            </tr>
            <tr><td style="padding:6px 16px;background:#f7f8fa;color:#555;font-size:13px;">.ie domain registration</td><td style="padding:6px 16px;background:#f7f8fa;color:#555;font-size:13px;text-align:right;">${fmt(pricing.yearly)}/yr</td></tr>
            ` : ""}
          </table>
          <p style="margin:16px 0 0;font-size:12px;color:#999;font-style:italic;">This is a guide price only. A firm fixed quote will be provided after a free consultation.</p>
        </td>
      </tr>
      ${data.notes ? `
      <tr>
        <td style="padding:0 40px 32px;">
          <h2 style="color:#0C2366;font-size:15px;margin:0 0 12px;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #f3f4f5;padding-bottom:8px;">Additional Notes</h2>
          <p style="margin:0;color:#555;font-size:14px;line-height:1.6;">${esc(data.notes)}</p>
        </td>
      </tr>` : ""}
      <tr>
        <td style="padding:20px 40px;background:#f3f4f5;border-top:1px solid #e5e7eb;">
          <p style="margin:0;font-size:12px;color:#999;">Sent via the Crettyard Digital quote calculator at digital.crettyard.ie</p>
        </td>
      </tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
}

async function sendEmail(apiKey, from, to, subject, html, replyTo) {
  const body = { from, to, subject, html };
  if (replyTo) body.reply_to = replyTo;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res;
}

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

async function handleContact(request, env) {
  let data;
  try {
    data = await request.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON body." }, 400);
  }

  if (!data?.name?.trim()) return jsonResponse({ error: "Name is required." }, 400);
  if (!data?.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return jsonResponse({ error: "A valid email address is required." }, 400);
  }
  if (!data?.message?.trim()) return jsonResponse({ error: "Message is required." }, 400);

  const apiKey = env.RESEND_API_KEY;
  const from = env.RESEND_SENDER ?? "info@crettyard.ie";
  if (!apiKey) return jsonResponse({ error: "Email service not configured." }, 500);

  try {
    const [notifRes] = await Promise.all([
      sendEmail(apiKey, `Crettyard Digital Website <${from}>`, "info@crettyard.ie",
        `New Contact Enquiry \u2014 ${data.name}${data.businessName ? ` (${data.businessName})` : ""}`,
        buildContactNotification(data), data.email),
      sendEmail(apiKey, `Crettyard Digital <${from}>`, data.email,
        "Thanks for getting in touch \u2014 Crettyard Digital",
        buildThankYou(
          data.name,
          "Thanks for reaching out. I\u2019ve received your message and will get back to you within one business day.",
          "In the meantime, feel free to reply to this email if you have anything to add. If your need is urgent, you can also reach me on WhatsApp at 087 970 0701."
        )),
    ]);
    if (!notifRes.ok) {
      console.error("[contact] Resend notification error:", await notifRes.text());
      return jsonResponse({ error: "Failed to send. Please contact info@crettyard.ie directly." }, 500);
    }
    return jsonResponse({ success: true });
  } catch (err) {
    console.error("[contact] Error:", err);
    return jsonResponse({ error: "An unexpected error occurred. Please contact info@crettyard.ie directly." }, 500);
  }
}

async function handleParentalEnquiry(request, env) {
  let data;
  try {
    data = await request.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON body." }, 400);
  }

  if (!data?.name?.trim()) return jsonResponse({ error: "Name is required." }, 400);
  if (!data?.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return jsonResponse({ error: "A valid email address is required." }, 400);
  }

  const apiKey = env.RESEND_API_KEY;
  const from = env.RESEND_SENDER ?? "info@crettyard.ie";
  if (!apiKey) return jsonResponse({ error: "Email service not configured." }, 500);

  try {
    const [notifRes] = await Promise.all([
      sendEmail(apiKey, `Crettyard Digital Website <${from}>`, "info@crettyard.ie",
        `New Parental Controls Enquiry \u2014 ${data.name}${data.county ? `, ${data.county}` : ""}`,
        buildParentalNotification(data), data.email),
      sendEmail(apiKey, `Crettyard Digital <${from}>`, data.email,
        "Thanks for your parental controls enquiry \u2014 Crettyard Digital",
        buildThankYou(
          data.name,
          "Thanks for getting in touch about parental controls. I\u2019ve received your enquiry and will review your setup details and come back to you shortly with the best next step.",
          "If you have any extra questions in the meantime, just reply to this email or reach me on WhatsApp at 087 970 0701."
        )),
    ]);
    if (!notifRes.ok) {
      console.error("[parental-enquiry] Resend error:", await notifRes.text());
      return jsonResponse({ error: "Failed to send. Please contact info@crettyard.ie directly." }, 500);
    }
    return jsonResponse({ success: true });
  } catch (err) {
    console.error("[parental-enquiry] Error:", err);
    return jsonResponse({ error: "An unexpected error occurred. Please contact info@crettyard.ie directly." }, 500);
  }
}

async function handleQuote(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON body." }, 400);
  }

  if (!body?.name?.trim()) return jsonResponse({ error: "Name is required." }, 400);
  if (!body?.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return jsonResponse({ error: "A valid email address is required." }, 400);
  }

  const VALID_PAGE_COUNTS = new Set(["1-3", "4-7", "8+"]);
  const VALID_FEATURES = new Set(Object.keys(FEATURE_PRICES));
  const VALID_BUSINESS_TYPES = new Set(["tradesperson", "retail", "professional", "service", "charity", "other"]);

  if (!VALID_PAGE_COUNTS.has(body.pageCount)) {
    return jsonResponse({ error: "Page count is required (1-3, 4-7, or 8+)." }, 400);
  }
  if (body.businessType && !VALID_BUSINESS_TYPES.has(body.businessType)) {
    return jsonResponse({ error: "Invalid business type." }, 400);
  }
  if (typeof body.hasDomain !== "boolean") {
    return jsonResponse({ error: "Domain ownership selection is required." }, 400);
  }

  const features = (Array.isArray(body.features) ? body.features : []).filter(
    f => typeof f === "string" && VALID_FEATURES.has(f)
  );
  const emailUsers = typeof body.emailUsers === "number"
    ? Math.min(Math.max(Math.round(body.emailUsers), 1), 20)
    : 1;
  const wantsEmail = body.wantsEmail === true;

  const sanitised = { ...body, features, emailUsers, wantsEmail, isRedesign: body.isRedesign === true, hasDomain: body.hasDomain };
  const pricing = calculatePrice(sanitised);

  const apiKey = env.RESEND_API_KEY;
  const from = env.RESEND_SENDER ?? "info@crettyard.ie";
  if (!apiKey) return jsonResponse({ error: "Email service not configured. Please contact info@crettyard.ie directly." }, 500);

  try {
    const [notifRes] = await Promise.all([
      sendEmail(apiKey, `Crettyard Digital Quote Tool <${from}>`, "info@crettyard.ie",
        `New Quote Request \u2014 ${sanitised.businessName || sanitised.name} (${sanitised.pageCount} pages, ${pricing.oneTime > 0 ? fmt(pricing.oneTime) : "TBD"})`,
        buildQuoteEmail(sanitised, pricing), body.email),
      sendEmail(apiKey, `Crettyard Digital <${from}>`, body.email,
        "Your website quote \u2014 Crettyard Digital",
        buildThankYou(
          body.name,
          `Thanks for using the quote calculator. Based on what you\u2019ve selected, a guide price for your project is <strong style="color:#0C2366;">${fmt(pricing.oneTime)}</strong> one-time${pricing.monthly > 0 ? ` + ~${fmt(pricing.monthly)}/month (Microsoft 365 billed by Microsoft)` : ""}${pricing.yearly > 0 ? ` + ${fmt(pricing.yearly)}/year (domain)` : ""}.`,
          "This is a <em>guide price only</em> \u2014 a firm fixed quote will be provided after a free, no-obligation consultation. I\u2019ll be in touch within one business day to discuss the next steps."
        )),
    ]);
    if (!notifRes.ok) {
      console.error("[quote] Resend error:", await notifRes.text());
      return jsonResponse({ error: "Failed to send quote. Please contact info@crettyard.ie directly." }, 500);
    }
    return jsonResponse({ success: true });
  } catch (err) {
    console.error("[quote] Error:", err);
    return jsonResponse({ error: "An unexpected error occurred. Please contact info@crettyard.ie directly." }, 500);
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "POST" && url.pathname === "/api/contact") {
      return handleContact(request, env);
    }
    if (request.method === "POST" && url.pathname === "/api/parental-enquiry") {
      return handleParentalEnquiry(request, env);
    }
    if (request.method === "POST" && url.pathname === "/api/quote") {
      return handleQuote(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};
