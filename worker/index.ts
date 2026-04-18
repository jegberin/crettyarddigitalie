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
  // Markdown-for-Agents cache (see wrangler.jsonc → kv_namespaces).
  MARKDOWN_CACHE?: KVNamespace;
  // Cloudflare credentials for the Browser Rendering REST API.
  CF_ACCOUNT_ID?: string;
  CF_API_TOKEN?: string;
  // Optional shared secret to gate the manual /api/refresh-markdown endpoint.
  MARKDOWN_REFRESH_SECRET?: string;
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

// ─── Markdown for Agents ─────────────────────────────────────────────────────
// Routes the scheduled handler refreshes daily. Slugs match request paths:
// `/grants-funding` -> KV key `grants-funding`; `/` -> KV key `index`.
const MARKDOWN_ROUTES: readonly string[] = [
  "/",
  "/about",
  "/contact",
  "/portfolio",
  "/web-design",
  "/microsoft-365",
  "/managed-it-support",
  "/managed-hardware",
  "/network-wifi-security",
  "/cybersecurity",
  "/ai-readiness",
  "/website-care-plans",
  "/trades",
  "/professional-services",
  "/dora-compliance",
  "/pricing",
  "/grants-funding",
  "/how-it-works",
  "/get-a-quote",
  "/web-design-laois",
  "/web-design-carlow",
  "/web-design-kilkenny",
  "/it-support-laois",
  "/it-support-carlow",
  "/it-support-kilkenny",
  "/microsoft-365-setup-ireland",
  "/network-wifi-laois-carlow",
  "/privacy-policy",
  "/terms-and-conditions",
  "/cookie-policy",
];

const SITE_ORIGIN = "https://crettyarddigital.ie";

function wantsMarkdown(request: Request): boolean {
  const accept = request.headers.get("accept");
  if (!accept) return false;
  // Match `text/markdown` anywhere in the Accept header — q-values aren't
  // worth wrestling with, the agent listing markdown is signal enough.
  return /(?:^|,\s*)text\/markdown(?:\s*;|\s*,|\s*$)/i.test(accept);
}

function pathToSlug(pathname: string): string | null {
  if (pathname === "/" || pathname === "") return "index";
  const trimmed = pathname.replace(/^\/+/, "").replace(/\/+$/, "");
  if (!trimmed || trimmed.includes("/") || trimmed.includes(".")) return null;
  return trimmed;
}

function slugToKey(pathname: string): string | null {
  // Same mapping the scheduled handler uses, so reads and writes line up.
  return pathToSlug(pathname);
}

function approximateTokens(body: string): number {
  return Math.max(1, Math.ceil(body.length / 4));
}

async function tryServeMarkdownFromCache(env: Env, url: URL): Promise<Response | null> {
  if (!env.MARKDOWN_CACHE) return null;
  const key = slugToKey(url.pathname);
  if (!key) return null;

  const md = await env.MARKDOWN_CACHE.get(key);
  if (!md) return null;

  const headers = new Headers();
  headers.set("content-type", "text/markdown; charset=utf-8");
  headers.set("x-markdown-tokens", String(approximateTokens(md)));
  headers.set("vary", "accept");
  // Browsers/agents may cache for 5 min; the scheduled job refreshes daily.
  headers.set("cache-control", "public, max-age=300");
  headers.set("link", LINK_HEADER);
  return new Response(md, { status: 200, headers });
}

async function fetchMarkdownFromBrowserRendering(
  pathname: string,
  env: Env,
): Promise<string> {
  if (!env.CF_ACCOUNT_ID || !env.CF_API_TOKEN) {
    throw new Error("CF_ACCOUNT_ID / CF_API_TOKEN secret not set");
  }
  const target = `${SITE_ORIGIN}${pathname}`;
  const endpoint = `https://api.cloudflare.com/client/v4/accounts/${env.CF_ACCOUNT_ID}/browser-rendering/markdown`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      authorization: `Bearer ${env.CF_API_TOKEN}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      url: target,
      gotoOptions: { waitUntil: "networkidle0", timeout: 30000 },
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Browser Rendering ${response.status}: ${detail.slice(0, 300)}`);
  }
  const data = (await response.json()) as { success: boolean; result?: string; errors?: unknown };
  if (!data.success || typeof data.result !== "string") {
    throw new Error(`Browser Rendering returned no markdown: ${JSON.stringify(data).slice(0, 300)}`);
  }
  return data.result;
}

// One route per worker invocation. Workers Free has a 30-second wall-clock
// budget on ctx.waitUntil(); a single Browser Rendering call (~3 s) fits with
// huge margin, but a 30-route loop with 10 s rate-limit spacing does not.
// A cursor in KV tracks which route to render next, and each cron firing
// (every 5 min — see wrangler.jsonc) advances the cursor by one. Full cache
// refresh: ~30 × 5 min = 2.5 h. To populate faster, hit /api/refresh-markdown
// in a loop with ≥10 s spacing (Browser Rendering's quick-action rate limit
// on the free tier).
const CURSOR_KEY = "__cursor";

async function refreshNextRoute(env: Env): Promise<{ route: string; ok: boolean; cursor: number }> {
  if (!env.MARKDOWN_CACHE) {
    console.error("[markdown] MARKDOWN_CACHE binding not configured; cannot refresh.");
    return { route: "", ok: false, cursor: 0 };
  }

  const cursorRaw = await env.MARKDOWN_CACHE.get(CURSOR_KEY);
  let cursor = cursorRaw ? Number.parseInt(cursorRaw, 10) : 0;
  if (!Number.isFinite(cursor) || cursor < 0 || cursor >= MARKDOWN_ROUTES.length) cursor = 0;

  const route = MARKDOWN_ROUTES[cursor];
  const nextCursor = (cursor + 1) % MARKDOWN_ROUTES.length;

  let ok = false;
  try {
    const md = await fetchMarkdownFromBrowserRendering(route, env);
    const key = pathToSlug(route);
    if (!key) {
      console.warn(`[markdown] skipping ${route} (no slug)`);
    } else {
      // 7-day TTL so a few failed refreshes don't expire the content.
      await env.MARKDOWN_CACHE.put(key, md, { expirationTtl: 60 * 60 * 24 * 7 });
      ok = true;
      console.log(`[markdown] refreshed ${route} (${md.length} bytes) — cursor ${cursor} -> ${nextCursor}`);
    }
  } catch (err) {
    console.error(`[markdown] ${route}:`, err instanceof Error ? err.message : err);
  }

  // Always advance the cursor — a stuck route shouldn't block the others.
  // Stale data sits behind it for up to 7 days, then the cron loops back.
  await env.MARKDOWN_CACHE.put(CURSOR_KEY, String(nextCursor));
  return { route, ok, cursor: nextCursor };
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact") {
      if (request.method !== "POST") return json({ error: "Method not allowed." }, 405);
      return handleContact(request, env);
    }
    if (url.pathname === "/api/quote") {
      if (request.method !== "POST") return json({ error: "Method not allowed." }, 405);
      return handleQuote(request, env);
    }

    // Manual trigger that advances the cursor by one route. Gated by
    // MARKDOWN_REFRESH_SECRET so random scanners can't fire it. To populate
    // the whole cache from scratch, call this in a loop with ≥10 s spacing
    // (Browser Rendering free-tier rate limit). The synchronous result tells
    // the caller which route was rendered and where the cursor is now.
    if (url.pathname === "/api/refresh-markdown") {
      if (request.method !== "POST") return json({ error: "Method not allowed." }, 405);
      const expected = env.MARKDOWN_REFRESH_SECRET;
      const provided = request.headers.get("x-refresh-secret");
      if (!expected || provided !== expected) return json({ error: "Unauthorized." }, 401);
      const result = await refreshNextRoute(env);
      return json({
        ok: result.ok,
        route: result.route,
        cursor: result.cursor,
        totalRoutes: MARKDOWN_ROUTES.length,
      });
    }

    // Markdown content negotiation: when an agent asks for text/markdown and
    // we have a cached alternate, serve that. Otherwise fall through to the
    // SPA HTML so the request still succeeds.
    if ((request.method === "GET" || request.method === "HEAD") && wantsMarkdown(request)) {
      const md = await tryServeMarkdownFromCache(env, url);
      if (md) return md;
    }

    const response = await env.ASSETS.fetch(request);
    return withLinkHeaders(response);
  },

  async scheduled(_event: ScheduledController, env: Env, ctx: ExecutionContext): Promise<void> {
    // Single-route batch: cron fires every 5 min (see wrangler.jsonc), so the
    // full ~30-route cache refreshes itself every ~2.5 hours within the Free
    // plan's 30-second waitUntil budget.
    ctx.waitUntil(refreshNextRoute(env).then(() => undefined));
  },
} satisfies ExportedHandler<Env>;
