---
slug: accessibility-basics-small-business-websites
title: "Accessibility basics for small business websites — a practical start"
description: "The accessibility changes that matter most on a small Irish business website, why they help every visitor, and how to stay on the right side of the European Accessibility Act."
date: 2026-03-02
tags:
  - Web Design
  - Accessibility
  - Small Business
author: Joey
coverImage: /blog/images/accessibility-basics-small-business-websites.jpg
coverImageAlt: "A person reviewing a website on a laptop with a notebook open beside them"
draft: false
---

# Accessibility basics for small business websites — a practical start

Accessibility on a small business website gets either ignored or turned into a panic project. Both are mistakes. The truth sits in the middle: there are a handful of accessibility basics that any competent web build should cover, they make the site better for every visitor, and they keep you on the right side of the rules — including the European Accessibility Act, which applies to many Irish businesses from June 2025.

This post is a short, practical list of what matters most on a small business site. Not a full WCAG (Web Content Accessibility Guidelines — the international standard for accessible websites) audit. The 80% of the benefit you can get in an afternoon with a decent developer.

## What "accessibility" actually means

At the simplest level, web accessibility means people who use the web differently from the default can still use your site. That includes:

- People with vision impairments using screen readers, high-contrast modes, or large text.
- People who cannot use a mouse and navigate entirely by keyboard.
- People with hearing impairments watching a video without audio.
- People with cognitive or reading differences that struggle with dense or confusing layouts.
- People with motor differences who need larger hit areas, predictable controls, and forgiving forms.

A well-designed website works for all of these without the owner having to think much about it. A badly-designed one excludes several categories at once, usually by accident.

## Why this matters for an Irish SME

Three practical reasons.

**Legal.** The European Accessibility Act (EAA) — the EU law setting accessibility requirements for certain digital services — applies from 28 June 2025 and covers a broad range of consumer-facing digital services, including e-commerce websites and apps, banking services, and transport. The Competition and Consumer Protection Commission (CCPC) is the market surveillance authority for much of this in Ireland. Whether your specific site is in scope depends on what you sell and to whom, but the direction of travel is clear: accessible digital services are becoming the expected standard, not a niche.

**Commercial.** For any Irish SME (small or medium-sized business), roughly one in seven people in Ireland has some form of disability. If your website is unusable for them, you have excluded a meaningful slice of the market. You have also degraded the experience for older visitors and for anyone on a slow connection or a small screen.

**SEO (search engine optimisation — how you rank on Google) and general quality.** Accessible sites are generally better-built sites. Screen readers and search engines read pages in similar ways — with proper heading structure, meaningful links, and clear text. An accessible site tends to rank better and load faster.

## The changes that make the biggest difference

If you do nothing else, do these. They are cheap, they are fast, and they cover the issues that affect the most visitors.

### 1. Colour contrast that meets WCAG AA

Text that is too light against its background is the single most common accessibility failure on small business sites. The WCAG AA standard (the mid-tier level most sites aim for) requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text. Most designers have a checker built into their tool; any browser extension will flag problems in minutes.

Light grey text on a white background looks sleek in a design file and is unreadable for people with low vision. Aim higher than the minimum ratio where you can.

### 2. Alt text on images that carry meaning

Every image that communicates something should have an alt attribute describing it. Decorative images should have an empty `alt=""` so screen readers skip them. Product photos, infographics, team photos, and icons with meaning all need proper alt text.

Good alt text is short, specific, and describes the image's function in context. "Smiling electrician standing beside a van" is better than "photo". "Graph showing site speed improvement from 6 seconds to 1.5 seconds" is better than "chart".

### 3. Keyboard navigation

Many people cannot use a mouse. The whole site needs to be reachable with Tab, Enter, and the arrow keys. Dropdown menus, image galleries, form fields, and pop-ups all need keyboard alternatives. The focus indicator — the outline that shows where you are on the page — should be visible, not removed in CSS (the styling code that controls how a site looks) "because it looks untidy."

Try it on your own site. Close your laptop lid enough that the mouse is unusable, Tab through the homepage, and see if you can reach every interactive element.

### 4. Heading structure

Headings are not decoration — they are the table of contents for a screen reader. Use one H1 per page, then H2s for sections, H3s under them, and so on. Do not skip levels for styling, and do not use headings just to make text bigger.

A clean outline of headings lets someone on a screen reader skim the page the way a sighted visitor skims with their eyes.

### 5. Forms that actually make sense

Every input needs a visible label. Placeholder text is not a label — it disappears the moment the user types. Errors should be clearly marked with both a colour and a text explanation, not just a red outline. Required fields should be marked before submission, not only after.

Contact forms on Irish SME sites are one of the worst categories for accessibility. A ten-minute pass usually catches most of the issues.

### 6. Link text that makes sense on its own

"Click here" is not useful for a screen reader user who jumps between links without reading paragraphs. Use descriptive link text: "read our pricing" beats "click here to see pricing".

### 7. Video captions and audio transcripts

If you have videos on the site, add captions — automatic captions from YouTube are a starting point but need a quick review for accuracy, especially with Irish place names and technical terms. Audio content needs a transcript available. Both help SEO and let your content reach people who cannot use audio in their current setting.

### 8. Avoid "accessibility overlay" widgets

Third-party accessibility widgets that promise to fix accessibility with one line of JavaScript have a poor reputation. Disability advocacy groups have criticised them repeatedly, and they have been the subject of lawsuits in some markets. They often make accessibility worse by interfering with users' own screen readers and browser settings. Fix the underlying issues in the site instead.

## How to check your current site

Two free tools, ten minutes:

- **Lighthouse** in Chrome DevTools — gives an accessibility score and a list of specific issues.
- **WAVE** (wave.webaim.org) — a browser extension that highlights problems inline on the page.

These catch the machine-detectable issues, which is about a third of accessibility in practice. Human review — especially with a screen reader or keyboard-only navigation — catches the rest. But the tools are a fine starting point and tell you whether your site has big problems or small ones.

Our [page speed for local business websites](/blog/page-speed-local-business-websites) post has a similar DIY-friendly section on performance; accessibility is in the same spirit.

## A word on the EAA

The European Accessibility Act is the headline reason accessibility is being talked about in Ireland right now. It sets accessibility requirements for specific categories of products and services — including e-commerce, banking services, e-books, and consumer electronics. It does not cover every website, but where it applies, the requirements are specific and enforceable.

If your business sells directly to consumers online, or you are providing a service listed in the Act, you should check your scope carefully. The Citizens Information Board and the National Disability Authority publish plain-English guidance. If you are unsure, a short advisory review is usually enough to tell you where you stand.

## How this shows up in a new build

When we build a site at [Crettyard Digital](/), accessibility is part of the normal process — not a separate phase. That means contrast checked, alt text written as content goes in, keyboard navigation tested before launch, and forms built correctly from the start. It is cheaper to build right than to retrofit.

If you would like us to look at your existing site and give you a plain-English list of what to fix first, drop a line via [contact](/contact). A typical review takes about an hour and costs nothing. No obligation, no sales script — just a short list of what matters most for your specific site.
