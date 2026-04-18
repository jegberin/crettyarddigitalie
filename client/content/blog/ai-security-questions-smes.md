---
slug: ai-security-questions-smes
title: "Security questions to ask before adopting an AI tool in your business"
description: "A practical checklist of security questions every Irish small business should ask before rolling out an AI tool, from ChatGPT to Microsoft Copilot to niche SaaS."
date: 2026-03-02
tags:
  - AI Readiness
  - Cybersecurity
  - Small Business
author: Joey
coverImage: /blog/images/ai-security-questions-smes.jpg
coverImageAlt: "Two professionals reviewing work together on a laptop in an office setting"
draft: false
---

# Security questions to ask before adopting an AI tool in your business

AI tools are showing up in every corner of small business now — the CRM (customer relationship management system — where you track contacts and deals) has a "summarise this thread" button, the accountant's software has an AI categoriser, the video-call tool has a meeting summariser, and at least two members of staff are quietly pasting customer emails into ChatGPT to draft replies. None of that is bad. But the normal controls a business would apply to any new supplier often aren't being applied to AI tools, because the rollout didn't feel like a procurement decision.

This post is a short, practical list of security questions to ask before turning on an AI feature or rolling out a new AI app. None of them are exotic — they're the same questions you'd ask of any SaaS (software-as-a-service — tools you rent online rather than install) supplier — but applying them consistently is where most small businesses can lift their game quickly.

## The starting assumption

AI tools are not magic. They're software supplied by a company, running on servers somewhere, that processes data you send it. The risks are the same as any SaaS: what data goes where, who sees it, how long it's kept, and what happens if it leaks.

What's new is volume and enthusiasm. Staff try a new tool in a week, not a quarter. The free tier is always one click away. And the output is so useful that the usual "do we need IT's approval for this?" instinct gets skipped.

## 1. What data does this tool actually see?

The single most important question. Before anyone signs up, get specific:

- What information is entered into prompts or uploaded as files?
- Does the tool read from an existing system (email, calendar, SharePoint — Microsoft's shared document library — CRM)?
- What permissions does it ask for on sign-in? If it wants full mailbox read access, that's a serious decision, not a tick-box.

Write this down before you start. Not as a compliance document — just a sentence or two. "We plan to use X to summarise customer support emails. That means X will see every email in the support mailbox, including customer names, phone numbers, and occasionally payment disputes."

Now read that sentence back. Is that okay with your business, and is it okay under GDPR (General Data Protection Regulation — the EU data protection law) for your customers?

## 2. Where is the data stored and processed?

Under GDPR, transferring personal data outside the EU/EEA requires specific safeguards. Most of the major AI providers — OpenAI, Anthropic, Google, Microsoft — have EU-resident processing options, but not all tiers include them. Some cheaper or newer tools process everything in the US with no EU option.

Practical questions:

- In which region is the data processed?
- Is it stored at rest in the EU, or just processed there temporarily?
- Does the provider have Standard Contractual Clauses or a recognised adequacy basis for any non-EU transfer?
- Is there a signed Data Processing Agreement available?

If the tool can't answer these questions clearly, that's a signal about how they treat the whole topic, not just data residency.

## 3. Will our data be used to train their models?

This is the single biggest difference between enterprise and consumer AI, and it's where most SMEs trip up. Free and consumer plans of many AI tools explicitly reserve the right to use your inputs to train future versions of their models. Paid business plans usually don't — but you have to check, because the defaults have moved several times.

A worked example: OpenAI's consumer ChatGPT, by default, can use your conversations to improve the model. The Team and Enterprise plans don't, by contract. ChatGPT Business, similarly, doesn't. But a staff member on a free account, pasting client briefs in to summarise them, is feeding those briefs into a training pool.

The practical fix is a mix of:

- A published staff policy on which AI tools are approved, and for what
- Blocking consumer AI accounts at the network level for business-sensitive work, where it matters
- Using the business-grade plan for any tool staff do use

## 4. Who at the provider can see our data?

With human-on-the-loop AI — where the provider's own staff can review prompts and outputs for safety or quality — you need to know:

- Can provider staff see prompts and outputs?
- Under what circumstances?
- Are they under confidentiality obligations that would cover your data?

Most serious providers (Microsoft, Google, OpenAI on enterprise tiers) have strong answers here. Smaller and newer AI-first startups may not — some have had very public incidents where staff reviewed customer data in ways customers didn't expect.

## 5. What happens if we stop using it?

Two questions inside this one:

- Can we export our data on the way out?
- Is historical data deleted, and how quickly?

For anything that accumulates institutional knowledge — an AI that learns your sales process, or an assistant that builds up a catalogue of your documents — being able to leave gracefully matters as much as it does for a CRM. Ask before you commit, not after.

## 6. How does this tool handle hallucinations and errors?

AI tools get things wrong. The question is not whether, but what happens when they do.

- Does the output tell the user when it's unsure?
- Can the user see the source for any factual claim?
- If the AI drafts a reply to a client, is a human required to review it before send?

For regulated work — legal, medical, financial advice — some AI outputs can't simply be trusted. Build the review step in before go-live, not afterwards.

## 7. What's the security of the AI provider itself?

Ask for their:

- Most recent security certification — ISO 27001, SOC 2 Type II, or equivalent
- Breach notification commitments (how fast you'd be told if their systems were compromised)
- Vendor sub-processor list (who else they share your data with)

Any serious SaaS provider has these ready. Any that doesn't is either very new or very unserious — both of which are useful signals.

## 8. Does it fit our existing controls?

AI tools often need to be added to your existing:

- Single sign-on (ideally, the tool supports SSO — one business login that opens every approved app — with Microsoft Entra or Google Workspace)
- MFA policy (multi-factor authentication — the second code on your phone when you log in — access to the tool should require the same MFA as your other apps)
- Offboarding process (when a staff member leaves, their access to every AI tool is revoked)

If the tool can't be integrated into your existing identity system, you're taking on a parallel set of credentials to manage. For one tool that's manageable. For ten, it's a nightmare.

## 9. Is there a named owner inside the business?

Every AI tool needs an internal owner. Someone who knows:

- Who uses it, and why
- What plan we're on, and what the renewal date is
- What the policy is for that tool
- Who to call if something goes wrong

Without a named owner, tools drift. Usage grows past the original plan. Licences accumulate on ex-staff. Nobody notices that the supplier's terms of service changed. The owner doesn't need to be technical — they just need to be accountable for that one tool.

## 10. Does it actually earn its keep?

A security-adjacent question, but worth asking. If a tool isn't clearly saving time or making something better, the security cost isn't justified. "Shadow AI" — tools that creep into workflows without being formally adopted — accumulates most when the tools are only marginally useful. The ones that really work tend to get formalised quickly.

Review your AI stack every six months. Cut what isn't earning its place.

## Where to start if you're behind

A basic, written AI policy for a small business is maybe 300 words long. It names:

- The AI tools staff are authorised to use (approved list)
- The data categories that must not go into any AI tool (client payment details, medical data, full contracts, staff personnel information, etc.)
- The rule on consumer-grade AI accounts for business data
- Who to ask when in doubt

That document, even in a rough first draft, is more protection than 90% of Irish SMEs currently have. It also gives staff permission to use the tools they're already using, within clear limits — which is much more likely to get followed than a blanket ban.

You'll find a more structured view on our [AI readiness](/ai-readiness) service page. If you'd like help drafting a policy that fits your business — not a boilerplate — a short free call through [contact](/contact) is usually enough to get the shape of it down. Getting the policy right first makes every AI decision that comes after it easier, and it's a lot cheaper than untangling a data-handling question when somebody asks.
