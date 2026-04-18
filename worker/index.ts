import { Resend } from "resend";
import {
  buildContactNotification,
  buildQuoteNotification,
  buildThankYou,
  type QuoteNotificationInput,
} from "../shared/email-templates";

interface Env {
  ASSETS: Fetcher;
  RESEND_API_KEY?: string;
  RESEND_SENDER?: string;
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

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

async function readJson(request: Request): Promise<Record<string, unknown>> {
  try {
    const data = await request.json();
    return (data ?? {}) as Record<string, unknown>;
  } catch {
    return {};
  }
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  const body = await readJson(request);
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name) return json({ error: "Name is required." }, 400);
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: "A valid email address is required." }, 400);
  }
  if (!message) return json({ error: "A message is required." }, 400);

  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set.");
    return json(
      { error: "Email service is not configured. Please contact info@crettyarddigital.ie directly." },
      500
    );
  }

  const resend = new Resend(apiKey);
  const fromEmail = env.RESEND_SENDER ?? "onboarding@resend.dev";
  const businessName = String(body.businessName ?? "");

  try {
    const { error: notifErr } = await resend.emails.send({
      from: `Crettyard Digital Website <${fromEmail}>`,
      to: ["info@crettyarddigital.ie"],
      replyTo: email,
      subject: `New Contact Enquiry — ${name}${businessName ? ` (${businessName})` : ""}`,
      html: buildContactNotification({
        name,
        email,
        phone: String(body.phone ?? ""),
        businessName,
        service: String(body.service ?? ""),
        message,
      }),
    });

    if (notifErr) {
      console.error("[contact] Resend notification error:", notifErr);
      return json({ error: "Failed to send. Please contact info@crettyarddigital.ie directly." }, 500);
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

    return json({ success: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return json(
      { error: "An unexpected error occurred. Please contact info@crettyarddigital.ie directly." },
      500
    );
  }
}

async function handleQuote(request: Request, env: Env): Promise<Response> {
  const body = await readJson(request);
  const contact = (body.contact ?? {}) as Record<string, unknown>;

  const name = String(contact.name ?? "").trim();
  const email = String(contact.email ?? "").trim();
  const businessName = String(contact.businessName ?? "").trim();
  const phone = String(contact.phone ?? "").trim();
  const contactMethod = String(contact.contactMethod ?? "email");
  const notes = String(contact.notes ?? "").trim();

  if (!name) return json({ error: "Name is required." }, 400);
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: "A valid email address is required." }, 400);
  }
  if (!VALID_CONTACT_METHODS.has(contactMethod)) {
    return json({ error: "Invalid contact method." }, 400);
  }

  const businessType = String(body.businessType ?? "");
  if (businessType && !VALID_BUSINESS_TYPES.has(businessType)) {
    return json({ error: "Invalid business type." }, 400);
  }

  const services: string[] = Array.isArray(body.services)
    ? (body.services as unknown[]).filter(
        (s): s is string => typeof s === "string" && VALID_SERVICES.has(s)
      )
    : [];
  if (services.length === 0) {
    return json({ error: "Please select at least one service." }, 400);
  }

  const timing = String(body.timing ?? "");
  if (timing && !VALID_TIMING.has(timing)) {
    return json({ error: "Invalid timing selection." }, 400);
  }

  const serviceLabels: string[] = Array.isArray(body.serviceLabels)
    ? (body.serviceLabels as unknown[])
        .filter((s): s is string => typeof s === "string")
        .slice(0, 20)
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
  const linesIn = Array.isArray(ballparkIn.lines) ? (ballparkIn.lines as unknown[]) : [];
  const safeLines = linesIn.slice(0, 40).map((raw) => {
    const l = (raw ?? {}) as Record<string, unknown>;
    return {
      label: String(l.label ?? "").slice(0, 120),
      note: l.note ? String(l.note).slice(0, 400) : undefined,
      oneOffLow: typeof l.oneOffLow === "number" ? Math.max(0, Math.min(l.oneOffLow, 1_000_000)) : undefined,
      oneOffHigh: typeof l.oneOffHigh === "number" ? Math.max(0, Math.min(l.oneOffHigh, 1_000_000)) : undefined,
      monthlyLow: typeof l.monthlyLow === "number" ? Math.max(0, Math.min(l.monthlyLow, 100_000)) : undefined,
      monthlyHigh: typeof l.monthlyHigh === "number" ? Math.max(0, Math.min(l.monthlyHigh, 100_000)) : undefined,
      grantEligible: String(l.grantEligible ?? "n/a").slice(0, 20),
      thirdParty: l.thirdParty === true,
    };
  });
  const ballpark: QuoteNotificationInput["ballpark"] = {
    lines: safeLines,
    oneOffLow: typeof ballparkIn.oneOffLow === "number" ? Math.max(0, Math.min(ballparkIn.oneOffLow, 10_000_000)) : 0,
    oneOffHigh: typeof ballparkIn.oneOffHigh === "number" ? Math.max(0, Math.min(ballparkIn.oneOffHigh, 10_000_000)) : 0,
    monthlyLow: typeof ballparkIn.monthlyLow === "number" ? Math.max(0, Math.min(ballparkIn.monthlyLow, 1_000_000)) : 0,
    monthlyHigh: typeof ballparkIn.monthlyHigh === "number" ? Math.max(0, Math.min(ballparkIn.monthlyHigh, 1_000_000)) : 0,
    hasTalkOnly: ballparkIn.hasTalkOnly === true || (services.length === 1 && services[0] === "not-sure"),
  };

  const businessNameRequired =
    !ballpark.hasTalkOnly && ballpark.lines.length > 0 && ballpark.oneOffHigh > 1000;
  if (businessNameRequired && businessName.length < 2) {
    return json({ error: "Business name is required for projects over €1,000." }, 400);
  }

  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[quote] RESEND_API_KEY is not set.");
    return json(
      { error: "Email service is not configured. Please contact info@crettyarddigital.ie directly." },
      500
    );
  }

  const resend = new Resend(apiKey);
  const fromEmail = env.RESEND_SENDER ?? "onboarding@resend.dev";

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

  const subject = `New Quote Request — ${businessName || name}${
    ballpark.hasTalkOnly
      ? " (talk-only)"
      : ballpark.oneOffHigh > 0
        ? ` (€${ballpark.oneOffLow.toLocaleString("en-IE")}–€${ballpark.oneOffHigh.toLocaleString("en-IE")} one-off)`
        : ""
  }`;

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
      return json({ error: "Failed to send quote. Please contact info@crettyarddigital.ie directly." }, 500);
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

    return json({ success: true });
  } catch (err) {
    console.error("[quote] Unexpected error:", err);
    return json(
      { error: "An unexpected error occurred. Please contact info@crettyarddigital.ie directly." },
      500
    );
  }
}

// Discovery resources advertised to agents via Link headers (RFC 8288).
// Relations are from the IANA Link Relations registry; see RFC 9727 §3 for
// rel="api-catalog" and the OpenAPI spec for service-desc / service-doc.
const LINK_HEADER = [
  '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',
  '</.well-known/openapi.json>; rel="service-desc"; type="application/openapi+json"',
  '</pricing>; rel="service-doc"; type="text/html"',
  '</.well-known/organization.jsonld>; rel="describedby"; type="application/ld+json"',
].join(", ");

function withLinkHeaders(response: Response): Response {
  // Only attach the discovery Link header to HTML navigations, not to images
  // or JS bundles.
  const ct = response.headers.get("content-type") ?? "";
  if (!ct.includes("text/html")) return response;
  const headers = new Headers(response.headers);
  // Append rather than overwrite so any existing Link headers (e.g. preload
  // hints) are preserved.
  const existing = headers.get("link");
  headers.set("link", existing ? `${existing}, ${LINK_HEADER}` : LINK_HEADER);
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact") {
      if (request.method !== "POST") return json({ error: "Method not allowed." }, 405);
      return handleContact(request, env);
    }
    if (url.pathname === "/api/quote") {
      if (request.method !== "POST") return json({ error: "Method not allowed." }, 405);
      return handleQuote(request, env);
    }

    const response = await env.ASSETS.fetch(request);
    return withLinkHeaders(response);
  },
} satisfies ExportedHandler<Env>;
