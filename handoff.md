# Crettyard Digital — Session Handoff

Read this first every new session. It's the fastest path from cold start to productive work.

> **Note:** [replit.md](replit.md) is **out of date** — it describes the old static-export-to-GitHub-Pages architecture. The current production runtime is a Cloudflare Worker. Trust this file over replit.md.

---

## ⚡ Active workstream — Site repositioning (multi-session)

**Status as of 2026-05-07:** Phases 1 and 2 shipped to main. Phases 3-7 pending.

**Strategic shift:** reposition Crettyard Digital from "website builder who also does IT" to "outsourced IT partner for Irish SMEs — covering the full digital surface, including a website if needed". Web design moves from item 01 to item 07 in service ordering.

**Source documents:**
- [`~/.claude/plans/harmonic-skipping-zebra.md`](C:/Users/joeye/.claude/plans/harmonic-skipping-zebra.md) — full 7-phase implementation plan, self-contained (every copy proposal inline). **Read this first.**
- Memory: `website_copy_forbidden_facts.md` — STRICT: never mention "Citi" or surname "Egberink" in user-facing copy. Forever rule, all sessions.
- Memory: `joey_bio_reference.md` — locked work history, role titles, 26 IT certs grouped by vendor, project go-live years, and the inputs Joey signed off on.

**Phases (each is a separate shippable unit):**

| # | Scope | Files touched | Effort | Status |
|---|---|---|---|---|
| 1 | Site-wide: 3 new shared components (CredentialBand, FragmentedVsIntegrated, ContinuityCommitment) + Navbar/Footer/AnimatedMarquee reorder + StatsStrip rewrite (later refined to all-counter for visual consistency) + TrustBadges 6th badge + TrustMarquee 3 new items + Home SEO title/desc reorder + Meet Joey paragraphs on Home/About/ManagedIT | components/* + App.tsx + Home/About/ManagedIT | ~half day | ✅ shipped |
| 2 | Home rewrite: hero rotations + subhead + CTA → /how-it-works · CredentialBand under hero · Problem section reframed (fragmented IT) · Comparison block → FragmentedVsIntegrated · Smart Investment refocused · services array reordered (Web Design 07) · NEW "Why I'm not a website studio" section · Featured Projects with relationshipLine + new framing for ended BM client · Spotlight CTA heading | Home.tsx | ~1 day | ✅ shipped |
| 2 | Home page rewrite (hero, problem, comparison, services reorder, "Why I'm not a website studio" section) | Home.tsx | ~1 day |
| 3 | About + Managed IT — both get Built-to-Stay framing + new "Standards I run on" / "What ongoing looks like" sections | About.tsx, ManagedIT.tsx | ~1 day |
| 4 | Web Design + Cybersecurity + Microsoft 365 — hero/copy adjustments + new sections | WebDesign.tsx, Cybersecurity.tsx, Microsoft365.tsx | ~1 day |
| 5 | Pricing (rename tiers Foundation/Operations/Enterprise) + How It Works + Contact + Portfolio | Pricing.tsx, HowItWorks.tsx, Contact.tsx, Portfolio.tsx | ~half day |
| 6 | Trades + ProfessionalServices reorder + remaining service pages + county template (one edit cascades to all 16 county pages) | Trades.tsx, ProfessionalServices.tsx, Network/ManagedHardware/AIReadiness/WebsiteCare, CountyLandingPage.tsx | ~half day |
| 7 | Sitewide grep cleanup + structured data sync + final verify | (cleanup only) | ~half day |

**Locked inputs (as of 2026-05-07):**
- Cert count: **26 IT certs** (7 Microsoft · 4 Intel · 2 AWS · 9 Dell · 3 VMware · 1 Cisco)
- Project go-live + status:
  - **BM Custom Furniture** — 2016, **ENDED 2025** (9-year completed relationship; keep in featured projects, the 9-year span is the flex)
  - **Nurney Plant and Civil** — 2022, active (website + M365 + Wi-Fi)
  - **Go Green Steam Clean** — 2025, active (monthly updates + support)
  - **More Than Points** — 2026, active (ongoing support)
  - **Crettyard.ie** — 2026, active (ongoing support + development)
- Longest single client relationship: **9 years** (BM, completed). Longest active: **going on 4 years** (Nurney, 2022 → present). Both used: 9-year as continuity proof, 4-year as "still going" credibility.
- Portfolio header line replaced because BM is no longer active: *"These aren't projects I delivered and walked away from. Most are still active clients today. One ran for nine years before the relationship naturally concluded. Either way — these are relationships, not transactions."*
- Cover arrangements: **DO NOT mention** anywhere
- "Limited new clients per quarter": **NOT used** as hard claim. Softer: *"Capacity to onboard new clients is assessed against scope so existing clients keep getting the attention they pay for."*
- Microsoft/Intel/Dell role titles: **surface concrete titles** ("Senior Solution Engineer at Microsoft, Infrastructure and Platforms Manager at Intel, Senior System Engineer at Dell EMC")
- Meet Joey location: vary per page (three approved variants in the plan §1.7)
- "15+ years enterprise IT" claim: **stays** — Joey is 41, has been computing since 14 (~27 years), professional IT since ~2011 (~15 years). Considers it conservative.

**No open inputs.** Plan is fully unblocked. Joey says "go" → start Phase 1.

**Working agreement:**
- **Every phase ships direct to `main`.** No feature branches, no PRs. Type-check (`npm run check`), commit, push. Joey does not want to be the merge-approver. (See memory: `workflow_no_feature_branches.md`.)
- Cloudflare Workers Builds auto-deploys from main; no staging. Deliberate pushes only.
- Update this section as each phase lands. When all 7 phases complete, archive the plan reference and remove this whole "Active workstream" block.

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

### Standard edit → push → deploy flow

For small fixes (copy edits, single-file tweaks) Joey commits **directly to main**:

```bash
git add <specific files>     # avoid `git add -A` — WEBSITE_CONTENT.md is untracked on purpose
git commit -m "fix: short imperative summary"
git push origin main
```

Push to `main` triggers Cloudflare Workers Builds → site is live in ~1–2 min. **There's no staging environment** — be deliberate.

### Feature branch + PR flow

For larger or riskier changes (new pages, route changes, schema updates, anything touching the Worker):

```bash
git checkout -b feat/short-description
# ...edits, commits...
git push -u origin feat/short-description
```

Then open a PR on GitHub: `https://github.com/jegberin/crettyarddigitalie/compare/main...feat/short-description` (or use the link printed by `git push`). Merge via the GitHub UI — **prefer "Squash and merge"** to keep `main` history linear (matches the existing PR pattern).

After merge:

```bash
git checkout main
git pull --ff-only origin main
git branch -d feat/short-description           # local cleanup
git push origin --delete feat/short-description # remote cleanup (optional)
```

### Commit message style

Looking at recent history (`git log --oneline -20`): conventional-ish prefixes (`fix:`, `feat:`, `chore:`, `blog:`, `ci:`) but not strict. Short imperative summary. PR titles get `(#N)` appended automatically by GitHub squash-merge.

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

React 19 + Vite 8 SPA, served in production by a **Cloudflare Worker** ([worker/index.ts](worker/index.ts)) that wraps the static asset bundle (`dist/public`). The Worker also exposes `/api/contact` and `/api/quote` (both → Resend email), and a **Markdown-for-Agents** layer: every public route has a markdown twin, pre-rendered into KV by a 5-min cron and served via `Accept: text/markdown` content negotiation. In dev, an **Express server** ([server/index.ts](server/index.ts)) on port 5000 mounts the same API routes and proxies to Vite's dev server.

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
- **Service:** `/web-design`, `/microsoft-365`, `/managed-it-support`, `/managed-hardware`, `/network-wifi-security`, `/cybersecurity`, `/ai-readiness`, `/website-care-plans`
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

Recent commits (`2588fd3`, `4fc62b2`) added an AI-agent-friendly markdown layer:

- The worker's **`scheduled` handler** fires every 5 minutes ([wrangler.jsonc](wrangler.jsonc) `triggers.crons`).
- Each firing renders **one** route via Cloudflare's Browser Rendering `/markdown` API and writes it to KV (`MARKDOWN_CACHE` binding, id `83bac33b...`). A cursor key tracks position; full ~30-route cycle = ~2.5 h.
- When a request arrives with `Accept: text/markdown`, the fetch handler returns the cached markdown (`text/markdown; charset=utf-8`, `x-markdown-tokens` header) instead of HTML.
- Manual refresh: `POST /api/refresh-markdown` with `x-refresh-secret` header (gated by `MARKDOWN_REFRESH_SECRET`).
- Route list: `MARKDOWN_ROUTES` in [worker/index.ts:313](worker/index.ts) — keep in sync with App.tsx routes.
- Requires Worker secrets: `CF_ACCOUNT_ID`, `CF_API_TOKEN`, optional `MARKDOWN_REFRESH_SECRET`.

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
- **No surnames for Joey** in user-facing copy (per about/trust convention).
- **No `.github/workflows`** — Cloudflare Workers Builds handles CI; configured in Cloudflare dashboard.
- **WEBSITE_CONTENT.md** is a static content-audit dump (currently untracked). Don't treat it as a source of truth — it's a generated snapshot for proofreading.

---

## Quick "what changed recently" (last 10 commits)

```
7f22f43 fix: home page copy edits (#10)
7f4aa61 fix: add favicon sizes and Organization logo for Google search (#9)
6eccf5d fix
0afeee3 Nation wide update
4fc62b2 fix: cursor-based single-route batching for markdown refresh
2588fd3 feat: enable markdown-for-agents KV cache and daily cron
f980f0b fix: gate KV+cron behind explicit setup so deploy isn't blocked
0455396 adding AI Agent support
9303726 chore: stop tracking wrangler local cache
310db37 ok
```

Run `git log --oneline -20` for a fuller picture before assuming what's current.
