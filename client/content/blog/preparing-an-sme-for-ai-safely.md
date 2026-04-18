---
slug: preparing-an-sme-for-ai-safely
title: "Preparing an SME for AI safely — a step-by-step plan"
description: "How an Irish small business can get ready to use AI tools without leaking data, wasting budget, or running into regulatory problems."
date: 2026-03-09
tags:
  - AI Readiness
  - Small Business
  - Cybersecurity
author: Joey
coverImage: /blog/images/preparing-an-sme-for-ai-safely.jpg
coverImageAlt: "A notepad beside a laptop with a fresh cup of coffee in a quiet office"
draft: false
---

# Preparing an SME for AI safely — a step-by-step plan

A year or two ago, "AI at work" meant a handful of early adopters running ChatGPT in a separate browser window. That has changed. Copilot is baked into Microsoft 365, Google has Gemini across Workspace, and every business application from accounting to marketing has grown an AI feature in the settings page. Even the quietest Irish SMEs (small and medium-sized enterprises) are now using AI whether they meant to or not.

The question for a small business is no longer "should we use AI?" It is "how do we use it without leaking data, embarrassing ourselves, or bumping into GDPR (General Data Protection Regulation — the EU data protection law)?" This post is a practical plan for getting ready.

## Start with what you already have

Before you buy anything new, take a short inventory of where AI is already sitting inside your business. You will almost always find more than you expect.

- Microsoft 365 — Copilot features in Word, Excel, Outlook, Teams.
- Google Workspace — Gemini in Gmail and Docs.
- Your CRM (customer relationship management system — where you track contacts and deals) — suggested email replies, lead scoring, summarisation.
- Accounting software — anomaly detection, bank reconciliation suggestions.
- Marketing platforms — generated subject lines, segmentation, image tools.
- Staff using personal AI accounts — ChatGPT, Claude, Grammarly, Notion AI.

The last one is the one most owners miss. If nobody has said anything, the answer is not zero. A short, friendly question in a team meeting usually turns up half a dozen tools people have been using for months.

## Decide what data AI tools can see

This is the heart of readiness. Every AI tool sits somewhere on a spectrum from "runs entirely in your Microsoft 365 tenant (your organisation's private slice of Microsoft's cloud) on your own data" to "consumer account on a personal device that sends whatever you paste into a vendor's training pipeline." Both are legitimate uses. They are very different risks.

The three questions to ask about any AI tool your business uses:

1. **Where does the data go when we use it?** Is it inside your tenant, in a business-grade service, or in a public model that may retain it?
2. **Is the vendor a data processor under GDPR?** Do they have a DPA (data processing agreement) you have signed?
3. **What happens to the output?** Does it get stored, edited by staff, sent to clients as-is?

For client data, financial data, and anything covered by GDPR, the answers you want are: stays inside your boundary, DPA signed, output reviewed by a human before it goes anywhere external.

For genuinely low-risk uses — brainstorming marketing copy, rewriting a draft, getting a summary of a public document — the boundary is friendlier. That is fine, as long as staff know the distinction.

## Pick a small number of sanctioned tools

The mistake most SMEs make is either banning AI (which pushes it underground onto personal accounts) or allowing everything (which is effectively the same thing with fewer illusions). The middle path is to sanction a small, specific set of tools and be clear that those are the ones to use.

For a typical Irish SME this often looks like:

- **Microsoft 365 Copilot** (if you are on Business Premium or above and the cost is justified).
- **One general assistant** — a business account on ChatGPT, Claude, or similar, with data retention turned off and training opt-out enabled.
- **A writing assistant** with an enterprise plan — Grammarly Business or equivalent.
- **Specific domain tools** your software vendor provides.

Sanctioned does not have to mean expensive. It means: picked, paid for on a business account, configured with the right privacy settings, and available to staff who need it.

## Write a one-page AI policy

A short document, not a legal tome. Most Irish SMEs can cover what they need on a single page. The policy should make four things clear:

1. **Which tools staff can use, and which they should not.**
2. **What data is allowed into those tools, and what is not.** Typically: client personal data, confidential financial data, and anything marked sensitive should stay out of public AI.
3. **What the rule is on output.** A human reviews AI output before it leaves the business. AI writing is never sent to clients without a read-through.
4. **Who to ask if they are not sure.** An owner or manager, a line in a Teams channel — somewhere the question lands quickly.

Our [AI policy basics for SMEs](/blog/ai-policy-basics-smes) post walks through a worked example. You can adapt that in an afternoon.

## Turn on the right privacy settings

AI tools often default to retaining your prompts for training, for up to a year. Before you roll a tool out to staff, check and change the defaults.

- **ChatGPT (OpenAI):** use a Team or Enterprise plan, or at minimum turn off chat history and model training on free accounts.
- **Microsoft 365 Copilot:** prompts and generated content stay inside your tenant by default on paid licences. Confirm on the admin console.
- **Claude (Anthropic):** similar — pick a paid plan with the data controls set.
- **Google Gemini:** workspace settings allow you to disable content being used for training. Check.

Put a five-minute screen recording in your onboarding so each new hire configures their tools correctly on day one.

## Train staff on what "good use" looks like

Most AI incidents I see at SMEs are human errors, not tool failures. A staff member pastes a client's NDA (non-disclosure agreement) into a public chatbot to ask for a summary; a junior emails a draft that confidently quotes a regulation that does not exist; a marketing person generates an image that looks suspiciously like a competitor's photo.

A short training session — 30 minutes, twice a year — covering three things prevents most of this:

- **What to never paste.** Client personal data, financial data, passwords, board minutes.
- **How to check facts AI gives you.** Especially names, regulations, figures, quotations.
- **How to handle AI-generated content destined for clients.** Always read, always edit, always take responsibility for what is sent under your name.

Pair this with a live example or two — something recent that made the news — and staff tend to take it seriously.

## Get the security basics right first

AI sits on top of your existing IT. If the fundamentals are weak, AI amplifies the weaknesses rather than solving them. The prerequisites:

- MFA (multi-factor authentication — that second code on your phone when you log in) enforced on every account AI tools connect to.
- Single sign-on (SSO — one business login that opens every approved app) where the licence supports it.
- Role-based access to files, so Copilot does not surface HR documents to everyone when you ask it to summarise the company drive.
- Audit logs enabled on the M365 (Microsoft 365) tenant.

We go deeper on this foundation in our [security questions before adopting AI tools](/blog/ai-security-questions-smes) post. It is worth reading before you deploy Copilot to staff.

## Start with a pilot, not a rollout

Choose one or two staff members who are keen, give them the sanctioned tool of choice, and let them run for a month. Ask them to keep a short log: what they tried, what worked, what was a waste of time, where they had to correct AI output.

After a month you will know a lot more than any vendor pitch can tell you: whether the tool helps your business specifically, which use cases are real, which are hype, and what to roll out more widely. Many Irish SMEs discover after a pilot that one cheap sanctioned tool does 80% of what they need and the expensive enterprise option can wait.

## Governance that does not feel like governance

For most small businesses, ongoing AI governance is:

- A quarterly ten-minute review — which tools are in use, any incidents, any new tools staff are asking for.
- A short update to the policy when something changes.
- A note from any new starter that they have read the policy and been shown the tools.

That is almost always enough. Enterprise-style governance frameworks are overkill at SME scale and usually get ignored. A light, repeatable process that you actually do beats a heavy one that sits in a drawer.

## Where to go next

If you would like to figure out where your business sits today, the [AI readiness](/ai-readiness) service page is where we explain how we help. Most engagements start with a short call, an inventory, and a plain-English plan. If that sounds useful, send a line via [contact](/contact) and we will pick a time. No obligation, no long presentations.
