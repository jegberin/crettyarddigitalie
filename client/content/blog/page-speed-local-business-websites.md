---
slug: page-speed-local-business-websites
title: "Page speed for local business websites — what actually matters"
description: "A plain guide to making a small business website load fast on real Irish phones. Covers the big wins, what Core Web Vitals really measure, and what to ignore."
date: 2026-02-02
tags:
  - Web Design
  - Performance
  - SEO
author: Joey
coverImage: /blog/images/page-speed-local-business-websites.jpg
coverImageAlt: "Tidy desk with a laptop and an analog clock showing time passing on a work surface"
draft: false
---

# Page speed for local business websites — what actually matters

Page speed gets talked about like it's a dark art. It isn't. For a local business website — a plumber in Kilkenny, a clinic in Carlow, an accountant in Portlaoise — there are about six things that make 90% of the difference, and a long tail of things that only matter when the first six are already done.

This post is that shortlist. If you fix these, your site will load fast on a 4G phone in an Irish car park, which is the scenario that actually earns you enquiries. Everything else is noise.

## Why speed matters (briefly)

Two reasons. The first is obvious: a slow site loses visitors. Google's own field data, and every independent study done since 2018, tells the same story — the probability of a bounce climbs sharply between one and five seconds. A site that takes six seconds to show anything useful is hemorrhaging visitors before the logo renders.

The second reason is search rankings. Google uses Core Web Vitals (a set of three performance scores Google uses to judge how a page feels to load) as a ranking signal. If you're within a whisker of competitors on relevance and content, the faster site wins the ranking fight. For a local business where most competitors are on slow, bloated WordPress templates, this is a surprisingly easy edge to claim.

## What Google actually measures

Core Web Vitals has three metrics worth knowing by name:

**Largest Contentful Paint (LCP)** — how long it takes for the biggest thing on your screen (usually the hero image or headline) to appear. Good: under 2.5 seconds. Poor: over 4 seconds.

**Interaction to Next Paint (INP)** — how responsive your site feels when a visitor taps or clicks. Good: under 200 milliseconds. Poor: over 500.

**Cumulative Layout Shift (CLS)** — how much the page jumps around while it's loading. If a visitor is about to tap a button and an advert shoves it down, that's a bad CLS. Good: under 0.1.

You can check all three for your site, for free, in Google's PageSpeed Insights tool. The "field data" section uses real visitors; the "lab data" is a simulation. Trust the field data.

## The six changes that usually deliver 90% of the win

### 1. Compress your hero image

This is, without exaggeration, the single most common speed problem on Irish SME (small or medium-sized business) websites. A 4MB photograph straight off a photographer's camera, uploaded to the homepage, and shown to every visitor before anything else loads. A phone on 4G will take three or four seconds just to pull it down.

The fix: compress images before upload. A hero image should be under 300KB for most sites, under 150KB if you can manage it without visible loss. Tools like Squoosh (free, browser-based, from Google) will take any image and spit out a smaller version in a modern format. Use WebP where possible — it's supported by every browser that matters and is typically 25-35% smaller than JPEG at the same quality.

### 2. Stop loading fonts you don't use

Many page builders ship with a dozen fonts loaded by default, most of them in every weight (300, 400, 500, 600, 700, 800, each in italic and regular). Every single font file is a separate download. On a typical WordPress site, that's 300-500KB of font data before a single sentence renders.

The fix: pick two fonts, in the weights you actually use, and drop the rest. If you only use "Inter 400" and "Inter 700 for headings", only load those two files. This is a theme setting on most platforms and takes five minutes.

### 3. Remove plugins you don't need

WordPress sites in particular accumulate plugins like ivy — analytics, chat, cookie banners, social feeds, sliders, lead magnets, three different SEO plugins that duplicate each other. Each one adds JavaScript and CSS (the code and styling that makes a page work and look right) to every page, whether you use it on that page or not.

The fix: go through your plugin list and ask "is this doing something that visibly earns its keep?" Deactivate anything you can't justify. Most sites lose nothing by dropping half their plugins and speed up dramatically.

### 4. Get off shared hosting that's too cheap

A €3-a-month hosting plan is competing with hundreds of other sites for the same CPU. It'll run fine at 2am; it'll struggle under load at 10am. For a business website, the difference between bargain-basement shared hosting and a decent Irish-hosted plan is usually €15-30 a month. That's often the single best-value upgrade on the whole site.

Signs you've outgrown your hosting: response times (TTFB, or time to first byte — how long the server takes to respond) consistently over 800ms, the site going slow when one of the other sites on the server does a mail blast, random 500 errors on weekend evenings.

### 5. Use a CDN for images

A content delivery network serves your images from a location close to the visitor. For an Irish audience that matters less than it does globally — but Irish traffic to a site hosted in Germany is still slower than Irish traffic to a CDN with Dublin presence. Free tiers are available on Cloudflare and Bunny; for most small sites they're enough.

### 6. Lazy-load images that are not in the first screen

If your homepage has ten images down the page, there's no reason to load the bottom nine before the visitor has scrolled. Lazy loading — setting `loading="lazy"` on images below the fold — is a one-line change with a large effect on LCP. Most modern themes do it automatically; check yours does.

## What to ignore (at least at first)

A few things that look important in speed tooling but rarely move the needle for a small business site:

- **Render-blocking CSS** warnings. Technically valid, but your hand-built local business site is not going to benefit measurably from hand-inlining critical CSS.
- **Preload font warnings.** The correct answer is usually not "preload more fonts" but "load fewer fonts" (see above).
- **Cache-control header micro-optimisations.** Your hosting almost certainly handles this fine; if it doesn't, fix hosting.
- **Server response time of 200ms vs 400ms.** Both are fine. Focus on the 3000ms hero image first.

You'll notice a pattern. The things most speed tools harp on are the last 10% of optimisation. For a small business, the first 90% is bigger images, fewer plugins, better hosting, and lazy loading.

## How to test, honestly

Three tools, in order:

1. [PageSpeed Insights](https://pagespeed.web.dev/) — free, official Google, uses field data where available
2. [WebPageTest](https://www.webpagetest.org/) — free, gives you a waterfall view of exactly what's slow
3. Your own phone on 4G, with Wi-Fi turned off, actually trying to use your own site

The third test is the one that matters. If you can hit your homepage, tap on "contact", fill in a form, and submit it in under 15 seconds, you're doing well. If any single step takes more than a few seconds, that's where to focus.

## A note on Irish conditions

Rural broadband is variable. In parts of Laois, Carlow, and Kilkenny, a trades customer might genuinely be on 3G with two bars. A site that's fine for someone on fibre at home can be unusable for them. Test on a bad connection at least once — Chrome's DevTools has a throttling option that simulates "Fast 3G" and "Slow 3G". If your site is usable on Fast 3G, it's usable for your actual customers.

## Where speed fits in a bigger picture

Speed is one lever among several, but it's the one with the most leverage for sites that have everything else roughly right. If the content is clear, the design is professional, the contact form works, and the site is actually findable on Google, then speed is often the difference between "gets enquiries" and "doesn't."

A well-built small business site should score in the green on mobile PageSpeed Insights as a matter of course. If yours doesn't, a short audit usually points to two or three specific files that are causing the bulk of the problem. You can see how we approach this on our [web design](/web-design) service page, and ongoing speed checks are part of every [website care plan](/website-care-plans) we run. If you want a free one-off report on your own site, get in touch through [contact](/contact) — I'll send you the top three fixes in priority order and rough time estimates for each.
