# Crettyard Digital — Session Handoff

Read this first every new session. It's the fastest path from cold start to productive work.

> **Note:** [replit.md](replit.md) is **out of date** — it describes the old static-export-to-GitHub-Pages architecture. The current production runtime is a Cloudflare Worker. Trust this file over replit.md.

---

## Recently shipped (2026-05-07 — single day)

A multi-strand workstream landed today across positioning, pricing, and infrastructure. Future sessions don't need the in-progress detail — `git log --oneline` is the audit trail. High-level summary so you don't re-propose work that's already done:

- **Site repositioning (7 phases)** — moved Crettyard Digital from "website builder who also does IT" to "outsourced IT partner for Irish SMEs". Web design dropped from service slot 01 to 07 across navbar, footer, marquee, services. New shared components (`CredentialBand`, `FragmentedVsIntegrated`, `ContinuityCommitment`) used across multiple pages. New "Why I'm not a website studio" section on Home. New "Built to Stay" section on About. New "Standards I Run On" + "What Ongoing Looks Like" sections on Managed IT. 26-cert grid on About. All 16 county pages cascade-updated through the template. Full plan archived at [`~/.claude/plans/harmonic-skipping-zebra.md`](C:/Users/joeye/.claude/plans/harmonic-skipping-zebra.md). Search commits with `git log --grep "repositioning-phase"`.
- **Pricing model overhaul** — switched from line-item-heavy menu to recurring-subscription pricing. Microsoft 365 €17.50/user/month or €42.50 with phone (no setup fee). Managed IT Standard €65/user/month, Compliance Plus €95/user/month (now explicitly includes the €50/user Endpoint Security package — no double-billing). Network / AI still "Quoted on request"; Cybersecurity has been **partially productised** into two fixed-price packages plus a bespoke layer (see next bullet). Web Design unchanged (project + mandatory care plan); care plans got Standard vs Premium feature cards. Bundle terminology purged sitewide. Tier names migrated: Essential → Standard, Professional/Comprehensive → Compliance Plus. Search commits with `git log --grep "pricing\|subscription model\|care plan"`.
- **Crettyard Edge — managed firewall product launched** (commit `e12c5fe`) — new product page at `/managed-hardware/crettyard-edge`. Leased managed firewall at €150/month per site, 24-month minimum lease, all-inclusive (hardware, threat feeds, monitoring, reporting, replacement). First concrete demonstration of the "enterprise discipline at SME scale" repositioning. Cybersecurity & Compliance page now leads with a productised three-card pricing block: Endpoint Security (€50/user/month — Defender + DNS protection), Managed Firewall (€150/month — Crettyard Edge), Bespoke Compliance Projects (NIS2 / DORA / EAA scoped + quoted). **Pre-publish gate items on Joey's side:** insurance review, SOW template, pilot client (90 days at intro pricing recommended in the brief), liability disclaimer in the contract. Page is live but deliberately not promoted in nav until the pilot is done — Managed Hardware page card and the Cybersecurity three-card pricing are the discovery surfaces.
- **Worker / markdown-for-agents simplification** — moved off the per-5-min single-route cursor pattern (Free-plan workaround) to a single daily `0 3 * * *` cron that refreshes all 40 routes in one firing. Initially also added a post-deploy auto-refresh via `version_metadata` UUID compare-and-stamp; **removed at end of day** because `ctx.waitUntil()` is hard-capped at 30s by the Cloudflare runtime regardless of trigger type, so the post-deploy path could only ever complete ~9 of 40 routes before being killed. The scheduled handler now `await`s `refreshAllRoutes(env)` directly (not via `waitUntil`) so the cron's full 15-minute wall-time budget actually applies. Verified end-to-end: 40/40 routes refreshed in 143s on the verification firing.

### Locked facts (still load-bearing for any future copy edits)

These live in memory (`joey_bio_reference.md`) and will autoload, but for fast reference:
- **26 IT certs** (7 Microsoft · 4 Intel · 2 AWS · 9 Dell · 3 VMware · 1 Cisco)
- **Longest single relationship: 9 years** (BM Custom Furniture, 2016–2025, completed). **Longest active: ~4 years** (Nurney Plant and Civil, since 2022).
- **Portfolio header** acknowledges BM ended: *"Most are still active clients today. One ran for nine years before the relationship naturally concluded."*
- **Cover arrangements** → never mentioned.
- **"Limited new clients per quarter"** → never claimed; soft variant *"capacity assessed against scope"* is fine.
- **Joey role titles when surfaced**: Senior Solution Engineer at Microsoft · Infrastructure and Platforms Manager at Intel · Senior System Engineer at Dell EMC.
- **"15+ years enterprise IT"** stays — Joey is 41, computing since 14, professional IT since ~2011.

### Open follow-ups (deferred, not blocking)

- **GetAQuote.tsx interactive calculator** — partly aligned to the new pricing model (Managed IT multiplier 75 → 65, label updated, note updated). The multi-line breakdown still shows Microsoft third-party licence costs as separate items (€7.50 calling plan, €6–22 licence) — that's an internal estimator showing decomposition, not the public price list, so it's OK for now. **Full calculator rework is a separate session if you want the calculator UX to mirror the simplified public pricing end-to-end.**
- **`MARKDOWN_REFRESH_SECRET`** — set one in Cloudflare → Workers → crettyarddigitalie → Settings → Variables and Secrets if you want the manual `POST /api/refresh-markdown` endpoint to work. The daily cron doesn't need this secret. Note: even with the secret set, the manual POST endpoint is subject to the same 30s `waitUntil` cap and won't complete a full refresh — it's only useful for kicking the first 9-ish routes. Use the dashboard's "Trigger Cron" button for an on-demand full refresh.

### Verifications worth doing tomorrow

- **Daily cron first firing under the await-direct fix**: Friday 8 May 2026 at 03:00 UTC. After that, `curl https://crettyarddigital.ie/api/refresh-markdown` should show populated `lastRefresh` with `ok: 40, failed: 0`. (Already verified once tonight at 18:50 UTC under a temporary cron — the fix works; this is just confirming the daily schedule fires under the same code.)
- **Joey's existing-client transitions** on the new pricing model — that's outside Claude Code's scope. See pricing addendum §8 for the move-by-tier playbook (Essential → Standard, etc.) over a 60–90 day window.

---

## What this is

Marketing site for **Crettyard Digital**, a one-person Irish digital services business (web design, Microsoft 365, managed IT, networks, cybersecurity) run by Joey, based on the Laois–Carlow border, serving all 32 counties.

- **Production domain:** `crettyarddigital.ie` (per [generate-sitemap.ts](script/generate-sitemap.ts))
- **Business email:** info@crettyarddigital.ie
- **Git user:** jegberin · default branch: `main`

---

## Repo + workflow

- **GitHub:** https://github.com/jegberin/crettyarddigitalie
- **Remote:** `origin` (HTTPS, push + fetch)
- **Default branch:** `main` — Cloudflare Workers Builds auto-deploys from `main` on push, so anything merged ships to production.
- **`gh` CLI is NOT installed** on this machine. PRs need to be opened via the GitHub web UI (or install `gh` first). Past PRs include #1, #2, #4, #9, #10 — mix of direct-to-main commits and PR-merged feature branches.

### Always start a session with `git pull`

The local clone is often behind. First thing to run:

```bash
git fetch origin
git status                   # check ahead/behind
git pull --ff-only origin main
```

### Direct-to-main, no feature branches

**Every commit goes direct to `main`.** No feature branches, no PRs, no waiting for review. The plan-approval / chat alignment IS the review gate. (Memory: `workflow_no_feature_branches.md`.)

```bash
git add <specific files>     # avoid `git add -A` — WEBSITE_CONTENT.md is untracked on purpose
git commit -m "fix: short imperative summary"
git push origin main
```

Push to `main` triggers Cloudflare Workers Builds → site is live in ~1–2 min. **There's no staging environment** — be deliberate. Always `npm run check` before pushing.

### Commit message style

Conventional-ish prefixes (`fix:`, `feat:`, `chore:`, `blog:`, `ci:`, `refactor:`, `docs:`) but not strict. Short imperative summary on the first line. Multi-line body for non-trivial commits. Trailers always include `Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>`.

### Files to never auto-commit

- `WEBSITE_CONTENT.md` — currently untracked, is a generated content-audit dump. Don't `git add` it unless explicitly asked.
- `attached_assets/*.png` — gitignored by design (only `.webp` is committed). The PNG sources live locally only.
- `.dev.vars`, `.env`, `.wrangler/` — secrets and local state, gitignored.
- `worker-configuration.d.ts` — auto-generated by `wrangler types`.

### Before pushing

```bash
npm run check                # tsc — catches type errors before CI does
npm run build                # optional but recommended for non-trivial changes
```

Cloudflare Workers Builds will fail the deploy if either fails, so catching it locally saves a round-trip.

---

## Architecture in one paragraph

React 19 + Vite 8 SPA, served in production by a **Cloudflare Worker** ([worker/index.ts](worker/index.ts)) that wraps the static asset bundle (`dist/public`). The Worker also exposes `/api/contact` and `/api/quote` (both → Resend email), and a **Markdown-for-Agents** layer: every public route has a markdown twin, pre-rendered into KV by a daily cron (full refresh in one firing on the paid plan) and served via `Accept: text/markdown` content negotiation. In dev, an **Express server** ([server/index.ts](server/index.ts)) on port 5000 mounts the same API routes and proxies to Vite's dev server.

---

## Tech stack

- **Frontend:** React 19.2, Vite 8, **Wouter** 3.3 (not React Router), Tailwind 4 (`@tailwindcss/vite` plugin), Radix UI primitives + shadcn/ui style ("new-york"), Framer Motion, react-markdown + Shiki (lazy-loaded for blog only), TanStack Query
- **Backend:** Express 5 (dev), Cloudflare Worker (prod), Resend SDK
- **Build:** TypeScript 6, esbuild (server bundle), tsx (TS runner), Sharp (image conversion)
- **Deploy:** Wrangler 4 → Cloudflare Workers + Workers Builds CI (no `.github/workflows` — CI runs from Cloudflare dashboard)

---

## Directory layout

```
client/
  index.html                 # Base HTML (GA G-F31MN0XL4T, OG/Twitter meta)
  public/                    # Static assets copied verbatim into dist/public
    CNAME, robots.txt, sitemap.xml (regenerated at build), favicons, opengraph.jpg
    blog/images/             # Cover images for blog posts
  content/
    blog/*.md                # 31 markdown posts, YAML frontmatter
  src/
    App.tsx                  # Router + per-route SEO metadata + FAQ schemas (669 lines)
    pages/                   # 42 page components (see Routes below)
    components/              # Navbar, Footer, SEO, FadeIn, Cookie banner, county template, etc.
    components/ui/           # shadcn primitives
    lib/blog.ts              # Inlines client/content/blog/*.md via import.meta.glob ?raw
    data/countyContent.ts    # COUNTIES data feeding county landing pages + their FAQ schemas

server/
  index.ts                   # Express dev server (port 5000)
  routes.ts                  # /api/contact, /api/quote (mirrors worker logic)
  vite.ts, static.ts         # Dev/prod transport for Express

worker/
  index.ts                   # Cloudflare Worker — API + markdown-for-agents (527 lines)

shared/
  email-templates.ts         # HTML email builders (contact, quote, thank-you)

script/                      # TS build scripts (note: SINGULAR)
  build.ts                   # rm dist → generateSitemap → vite build → esbuild server
  generate-sitemap.ts        # Scans blog/*.md + static URL list → client/public/sitemap.xml

scripts/                     # Shell/JS helpers (note: PLURAL)
  convert-new-assets.mjs     # PNG → WebP via Sharp; only .webp is gitignored-exempt
  post-merge.sh              # `npm install` after pulls

attached_assets/             # GITIGNORED EXCEPT *.webp — never reference PNGs from src
WEBSITE_CONTENT.md           # Untracked content-audit snapshot (~565KB); not load-bearing
replit.md                    # OUTDATED — describes removed GH-Pages export flow
docs/                        # Does NOT exist anymore (static export was removed)
```

**Two scripts directories:** `script/` (TS, build pipeline) vs `scripts/` (shell/JS, dev helpers). Don't confuse them.

---

## Routes (42 pages)

Defined in [client/src/App.tsx:577-638](client/src/App.tsx). Per-route SEO titles/descriptions live in the `pageSEO` object at the top of the same file; FAQ structured-data entries live in `faqData`.

- **Core:** `/`, `/about`, `/contact`, `/portfolio`
- **Service:** `/web-design`, `/microsoft-365`, `/managed-it-support`, `/managed-hardware`, `/managed-hardware/crettyard-edge` (Crettyard Edge managed firewall product page), `/network-wifi-security`, `/cybersecurity`, `/ai-readiness`, `/website-care-plans`
- **Sector:** `/trades`, `/professional-services`
- **Compliance:** `/dora-compliance`
- **Commercial:** `/pricing`, `/grants-funding`, `/how-it-works`, `/get-a-quote`
- **Blog:** `/blog`, `/blog/tag/:tag`, `/blog/:slug` (lazy-loaded — order matters, tag route must be before slug route)
- **County web-design landing pages (8):** `/web-design-{laois,carlow,kilkenny,dublin,cork,galway,limerick,waterford}`
- **County IT-support landing pages (8):** `/it-support-{laois,carlow,kilkenny,dublin,cork,galway,limerick,waterford}`
- **National variants:** `/microsoft-365-setup-ireland`, `/network-wifi-laois-carlow`
- **Legal (`noindex`):** `/privacy-policy`, `/terms-and-conditions`, `/cookie-policy`

When adding a new route: add the `<Route>` in App.tsx, add a `pageSEO` entry, add to `MARKDOWN_ROUTES` in [worker/index.ts](worker/index.ts), and add to the static URL list in [script/generate-sitemap.ts](script/generate-sitemap.ts).

---

## Commands

```bash
npm run dev              # Express + Vite, port 5000 (full-stack dev)
npm run dev:client       # Vite-only, port 5000
npm run dev:worker       # wrangler dev — exercises the production Worker locally
npm run build            # full prod build → dist/ (sitemap → vite → esbuild server)
npm run build:client     # client + sitemap only
npm run deploy           # build:client && wrangler deploy
npm run check            # tsc (no emit)
npm start                # NODE_ENV=production node dist/index.cjs (after build)
```

Docker: [Dockerfile](Dockerfile) + [docker-compose.yml](docker-compose.yml) map host 5000 → container 5000 for the Express server.

**Bash on Windows:** the `dev` script uses `NODE_ENV=...` POSIX syntax — use Bash tool, not PowerShell.

---

## Markdown-for-Agents (the cron system)

AI-agent-friendly markdown layer. Each public route has a markdown twin pre-rendered into KV.

- The worker's **`scheduled` handler** fires daily at 03:00 UTC ([wrangler.jsonc](wrangler.jsonc) `triggers.crons`) and refreshes **every** route in a single firing. ~40 routes × ~4 s ≈ 160 s. The handler `await`s `refreshAllRoutes(env)` **directly** — NOT wrapped in `ctx.waitUntil()`. This matters: `waitUntil` is hard-capped at 30s by the Cloudflare runtime regardless of trigger type. Only the scheduled handler's own 15-minute wall-time budget covers the full refresh, and only if the work is awaited inline. (Pre-paid-plan implementation used a cursor + 5-min cron; an interim implementation tried a `version_metadata` post-deploy auto-refresh — both removed.)
- Each route is rendered via Cloudflare's Browser Rendering `/markdown` endpoint and stored in KV (`MARKDOWN_CACHE` binding, id `83bac33b...`) with a 7-day TTL.
- A status blob is written to KV under `__last_refresh` with `{ finishedAt, ok, failed, durationMs, total }`.
- When a request arrives with `Accept: text/markdown`, the fetch handler returns the cached markdown (`text/markdown; charset=utf-8`, `x-markdown-tokens` header, 1-hour browser cache) instead of HTML.
- Manual refresh: `POST /api/refresh-markdown` with `x-refresh-secret` header (gated by `MARKDOWN_REFRESH_SECRET`). Returns `202`-style "accepted" immediately and runs the refresh in the background via `ctx.waitUntil`. **Caveat:** because of the 30s `waitUntil` cap on fetch handlers, this manual endpoint can only refresh ~9 of 40 routes before being killed. For an on-demand full refresh, use the Cloudflare dashboard's "Trigger Cron" button on the Workers page — that triggers the scheduled handler with the full 15-minute budget.
- Route list: `MARKDOWN_ROUTES` in [worker/index.ts](worker/index.ts) — keep in sync with App.tsx routes and the sitemap. Nested paths (e.g. `/managed-hardware/crettyard-edge`) collapse to flat KV keys via `/` → `-` substitution in `pathToSlug`, so nested routes work both as cron writes and as `Accept: text/markdown` reads without further plumbing.
- Requires Worker secrets: `CF_ACCOUNT_ID`, `CF_API_TOKEN`, optional `MARKDOWN_REFRESH_SECRET`.
- **Workers Builds CI gotcha:** Cloudflare's Workers Builds CI deploys worker *code* on every push to main, but does **not** apply changes to bindings or triggers from `wrangler.jsonc`. If you change `kv_namespaces`, `version_metadata`, `triggers.crons`, etc., you must run `npm run deploy` locally — Wrangler is the only path that applies the full config atomically. (We learned this the hard way today: a binding added in commit `aabcab1` never wired at runtime until a manual `wrangler deploy` two hours later.)

---

## Blog system

- Posts: `client/content/blog/*.md` with YAML frontmatter (`slug`, `title`, `description`, `date`, `tags`, `coverImage`, `draft?`).
- Loaded at build time by `import.meta.glob("../../content/blog/*.md", { query: "?raw", eager: true })` in [client/src/lib/blog.ts](client/src/lib/blog.ts).
- Cover images live in `client/public/blog/images/`.
- Reading time auto-computed (≈200 wpm).
- Routes are lazy-loaded so react-markdown + Shiki ship only when someone visits `/blog/*`.
- Sitemap auto-includes posts ([script/generate-sitemap.ts](script/generate-sitemap.ts)).

---

## Forms / email

Both `/api/contact` and `/api/quote` exist in two places (Express dev + Worker prod) — keep them in sync.

- Templates: [shared/email-templates.ts](shared/email-templates.ts) (`buildContactNotification`, `buildQuoteNotification`, `buildThankYou`).
- Quote funnel validates: 6 business types, 10 services, 4 timing options, 3 contact methods (see `VALID_*` Sets at top of both [server/routes.ts](server/routes.ts) and [worker/index.ts](worker/index.ts)).
- **Required env / secrets:** `RESEND_API_KEY`. Optional: `RESEND_SENDER` (defaults to sandbox `onboarding@resend.dev`; production target per .env.example is `quoterequest@digital.crettyard.ie`).
- Local dev: copy `.env.example` → `.env`. Worker secrets go in `.dev.vars` (gitignored) for `wrangler dev`.

---

## Design system

- **Colors:** Navy `#0C2366`, Teal `#12B388`, Charcoal `#333333`, white + `#F8F9FA`
- **Type:** Inter font
- **Radius:** sharp `rounded-[4px]`
- **Utilities:** `.eyebrow`, `.card-hover`, `.section-gradient`, `py-28` for section spacing
- **Animations:** `FadeIn`, `StaggerContainer`, `StaggerItem` from [client/src/components/FadeIn.tsx](client/src/components/FadeIn.tsx); `.reveal-on-scroll` IntersectionObserver pattern wired in App.tsx
- **Asset alias:** `@assets/` → `attached_assets/` (Vite). **Never** reference PNGs in src — only `.webp` is committed; PNGs are gitignored. Run [scripts/convert-new-assets.mjs](scripts/convert-new-assets.mjs) to add new assets.

---

## SEO mechanics

- Per-route `<SEO>` component injects title, description, canonical, optional `noindex` (driven by `pageSEO` map in App.tsx).
- Structured data components in [client/src/components/SEO.tsx](client/src/components/SEO.tsx): `LocalBusinessSchema` (sitewide), `ServiceSchema` (per service page), `FAQSchema` (driven by `faqData` map), `AboutPageSchema`, `ContactPageSchema`, `PortfolioSchema`.
- Sitemap regenerated on every build from blog files + a hand-maintained URL list in `generate-sitemap.ts`.
- Tracking: GA `G-F31MN0XL4T`, Google Ads `AW-18044040603`, Facebook Pixel `1167510658706586` — all in [client/index.html](client/index.html).

---

## Conventions / gotchas

- **replit.md is stale** — ignore its deploy section. Production is Cloudflare Workers, not GitHub Pages.
- **`script/export.js` doesn't exist.** That static-export Puppeteer flow was removed (commit `746c7b7`).
- **Two package paths:** `script/` (TS build) vs `scripts/` (shell helpers).
- **Wouter, not React Router.** API is similar but `useLocation()` returns `[location, setLocation]`.
- **Blog route order matters** in App.tsx — `/blog/tag/:tag` must come before `/blog/:slug`.
- **County landing pages** share a template ([CountyLandingPage.tsx](client/src/components/CountyLandingPage.tsx)) driven by [countyContent.ts](client/src/data/countyContent.ts).
- **`attached_assets/` PNGs are gitignored** — only `.webp` versions get committed.
- **Mandatory website care plans** is a business policy referenced in copy across multiple pages — don't write copy that contradicts this.
- **Forbidden in user-facing copy** (memory: `website_copy_forbidden_facts.md`): Joey's current employer **"Citi" / "Citibank"** and his surname **"Egberink"**. First name only. Past employers (Microsoft, Intel, Dell EMC) are fine and load-bearing positioning.
- **No phone-number framing** in positioning copy (memory: `website_copy_no_phone_framing.md`). Use "one person to contact" not "one number to ring" — telemarketers scrape phone-related keywords.
- **County / locality landing pages are SEO-only** (memory: `seo_only_county_pages.md`). Never link to `/web-design-{county}` or `/it-support-{county}` from user-facing parent pages, navigation, footer, or as cards. They're sitemap-only.
- **No `.github/workflows`** — Cloudflare Workers Builds handles CI; configured in Cloudflare dashboard.
- **WEBSITE_CONTENT.md** is a static content-audit dump (currently untracked). Don't treat it as a source of truth — it's a generated snapshot for proofreading.

---

## Quick "what changed recently"

`git log --oneline -20` is the source of truth. Don't trust embedded snapshots in this file — they go stale within hours.

Useful filtered queries:
- `git log --grep "repositioning-phase"` — the 7-phase site repositioning workstream (May 2026)
- `git log --grep "pricing\|subscription model\|care plan"` — pricing model overhaul (May 2026)
- `git log --grep "worker\|markdown-for-agents\|cron"` — worker infrastructure changes
