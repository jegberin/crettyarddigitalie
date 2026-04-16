# Crettyard Digital Website

## Overview
Static multi-page website for Crettyard Digital — a small Irish digital services business (web design, Microsoft 365, network/Wi-Fi) based near Crettyard on the Laois-Carlow border. Deployed to GitHub Pages at `digital.crettyard.com`.

## Architecture
- **React/Vite** frontend for development, exported to **static HTML** via Puppeteer-based export script
- **Express backend** (server/index.ts) used for development and future Cloudflare Pages Functions
- Contact form posts to `info@crettyarddigital.ie` via FormSubmit.co
- Quote funnel posts to `POST /api/quote` which sends via **Resend** (`RESEND_API_KEY` env var required)
- Static export outputs to `/docs` folder for GitHub Pages (quote funnel page exported as initial step HTML; interactive version requires JS)

## Pages
- **Home** (`/`) — Hero, online presence value prop, comparison section, investment section, process, services, featured projects, FAQ, CTA
- **Web Design** (`/web-design`) — Service page with who-for, what's-included, pricing guidance, FAQ
- **Microsoft 365** (`/microsoft-365`) — Service page with who-for, what's-included, comparison, pricing, FAQ
- **Network & Wi-Fi** (`/network-wifi-security`) — Service page with who-for, what's-included, pricing, FAQ
- **Portfolio** (`/portfolio`) — Case studies with what-we-did/results, testimonial placeholder
- **About** (`/about`) — Trust-building, who-I-help, objection handling, Joey's intro (no surname)
- **Contact** (`/contact`) — FormSubmit.co form, what-happens-next, Google Maps
- **Privacy Policy** (`/privacy-policy`) — GDPR-compliant privacy policy
- **Terms & Conditions** (`/terms-and-conditions`) — Business terms and conditions
- **Cookie Policy** (`/cookie-policy`) — Cookie usage and consent information
- **Get a Quote** (`/get-a-quote`) — 7-step interactive quote calculator funnel for web design projects; sends detailed HTML email via Resend to info@crettyarddigital.ie

## Key Files
- `client/src/pages/` — All page components
- `client/src/components/Navbar.tsx` — Sticky navbar with service links
- `client/src/components/Footer.tsx` — 4-column footer
- `client/src/components/SEO.tsx` — SEO component (title, description, canonical, structured data schemas)
- `client/src/components/FadeIn.tsx` — Animation components
- `client/src/components/WhatsAppButton.tsx` — Floating WhatsApp button
- `client/src/components/CookieBanner.tsx` — Cookie consent banner (accept/reject, links to policies)
- `client/src/App.tsx` — Router with per-route SEO data
- `client/index.html` — Base HTML with Google Analytics, OG/Twitter meta
- `script/export.js` — Puppeteer export script (builds, renders each route, strips React bundle, rewrites links, fixes OG images, adds mobile menu JS)

## Design System
- **Colors**: Navy `#0C2366`, Teal `#12B388`, Charcoal `#333333`, White + `#F8F9FA`
- **Styling**: Sharp `rounded-[4px]`, Inter font, `.eyebrow` utility, `.card-hover`, `.section-gradient`, `py-28` spacing
- **Animations**: FadeIn, StaggerContainer, StaggerItem

## Static Export Rules
- Run `node script/export.js` to rebuild `/docs`
- React JS bundle is **stripped** from exported HTML (static only)
- Mobile menu uses `data-mobile-toggle` / `data-mobile-menu` attributes for vanilla JS
- Cookie banner uses `data-cookie-banner` attribute for vanilla JS (localStorage-based consent)
- CNAME (`digital.crettyard.com`) lives in `client/public/` to survive rebuilds
- Links rewritten: `/route` → `/route.html`, `/` → `/index.html`
- OG images fixed to production domain during export
- Canonical URLs set per-page

## SEO
- Unique title + meta description per page (set via React useEffect, captured by Puppeteer)
- Structured data: LocalBusiness (sitewide), Service (service pages), FAQPage (pages with FAQ)
- Per-page canonical URLs
- Google Analytics: G-F31MN0XL4T
- sitemap.xml + robots.txt for `digital.crettyard.com`

## External Services
- **FormSubmit.co** — Contact form submission to info@crettyarddigital.ie
- **Resend** — Quote funnel email delivery (`RESEND_API_KEY` env var, `RESEND_FROM_EMAIL` optional — defaults to `onboarding@resend.dev`; set to a verified domain address for production)
- **WhatsApp** — Floating button, number 353879700701
- **Google Analytics** — G-F31MN0XL4T
- **Google Ads** — AW-18044040603 (conversion: AW-18044040603/aBUrCJPXsZAcEJvriJxD)
- **Facebook Pixel** — 1167510658706586

## Asset Imports
- Use `@assets/` alias (Vite). Never use `attached_assets/` in src URLs.
- Logo: `@assets/crettyard-digital-logo.png`
- Hero image: `@assets/hero-digital-services.png`
- Joey's photo: `@assets/joey-profile-photo.png`
- Portfolio screenshots: `@assets/portfolio-bm-custom-furniture.png`, `@assets/portfolio-go-green-steam-clean.png`, `@assets/portfolio-nurney-plant-civil.png`
- Unused variants kept: `crettyard-digital-logo-icon.png`, `crettyard-digital-logo-white-bg.png`, `joey-cartoon-illustration.png`
