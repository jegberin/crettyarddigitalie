---
slug: email-security-basics-growing-companies
title: "Email security basics for growing Irish companies"
description: "The email security fundamentals every growing SME should have in place — from SPF, DKIM, and DMARC to phishing filters and staff training."
date: 2026-02-23
tags:
  - Cybersecurity
  - Email Security
  - Small Business
author: Joey
coverImage: /blog/images/email-security-basics-growing-companies.jpg
coverImageAlt: "A padlock graphic beside an open laptop on a clean desk"
draft: false
---

# Email security basics for growing Irish companies

Email is still where most business-impacting attacks start. Not because email is particularly broken, but because it is the front door to everything else — Microsoft 365 tenants (the environments that hold your users, mail, and files), payment approvals, client conversations, and admin passwords all flow through it at some point. If you want one area to get right before anything else, this is it.

This post walks through the email security basics that a growing Irish company should have in place. Not a technical deep dive. The handful of controls that stop the vast majority of attacks against small businesses.

## The three records your domain needs

Before you touch any user setting, open your DNS (the internet's address book, where your domain's settings live) and make sure three records are published and configured correctly: SPF, DKIM, and DMARC. Together they control who is allowed to send email from your domain and what happens if someone tries to forge it.

### SPF (Sender Policy Framework)

SPF is a DNS record that lists which mail servers are allowed to send email on behalf of your domain. Microsoft 365, Google Workspace, Mailchimp, and your CRM all have specific SPF includes they ask you to add. The standard record for an M365 (Microsoft 365) domain looks like `v=spf1 include:spf.protection.outlook.com -all`.

The `-all` at the end tells receiving servers to reject anything claiming to be from your domain that does not match the record. Many small businesses have `~all` (soft fail) or no SPF record at all. `~all` is better than nothing, but `-all` is the target once your mail flows are stable.

### DKIM (DomainKeys Identified Mail)

DKIM signs every outgoing message with a cryptographic key whose public half is published in DNS. The receiving server can verify that the signature matches the key, proving the message was not tampered with in transit and really came from your mail platform.

On Microsoft 365, you enable DKIM from the Defender portal after publishing two CNAME records. On Google Workspace, it is enabled from the admin console. Ten minutes of work; one-time setup.

### DMARC (Domain-based Message Authentication, Reporting and Conformance)

DMARC is the policy that ties SPF and DKIM together. It tells receiving servers what to do when an email claiming to be from your domain fails both checks: do nothing (`p=none`), quarantine it (`p=quarantine`), or reject it outright (`p=reject`).

The right approach is to start with `p=none` and a reporting address (an `rua=` tag pointing to an inbox you will actually read), watch the reports for two to four weeks to make sure legitimate senders are not being missed, and then move to `p=reject`. A DMARC reject policy makes domain forgery effectively impossible, which is one of the highest-value and lowest-cost anti-phishing moves an SME (small or medium-sized business) can make.

Our [phishing risks in Microsoft 365](/blog/phishing-risks-microsoft-365) post covers the anti-phishing side in more depth.

## MFA everywhere — no exceptions

Multi-factor authentication on every email account. Owner, finance, reception, sales, everyone. The mailbox that gets compromised is almost always the one where MFA was "about to be set up."

The details matter. Use an authenticator app, not SMS if you can avoid it — SMS is vulnerable to SIM-swap attacks (where an attacker tricks a phone carrier into moving your number to their SIM) that target small-business owners. Use number matching in Microsoft Authenticator so that MFA fatigue attacks do not work. And set a policy that MFA cannot be disabled without admin approval.

## Tune your spam and phishing filter

Microsoft 365 and Google Workspace both have capable anti-phishing and anti-spam filtering built in. Out of the box, the defaults are conservative. A growing business should tighten them.

On Microsoft Defender for Office 365, aim for:

- **Safe Links** enabled, so every URL in every email is rewritten and re-checked at click time.
- **Safe Attachments** enabled, so unknown attachments are sandbox-detonated before delivery.
- **Anti-phishing policies** tuned with impersonation protection for the owner, the finance manager, and key client addresses.
- **Spoof intelligence** reviewed monthly for legitimate senders being held and phishing that slipped through.
- **External tag** on emails from outside the organisation — a small visual cue that catches a surprising amount of business email compromise.

Google Workspace has equivalent controls in the admin console. Both take an hour or two to configure well and pay back permanently.

## Separate admin from day-to-day accounts

The person who runs the business probably uses the same account to send quotes, run the Xero integration, and act as global admin on the M365 tenant. That is a concentration of risk that one phishing email can unravel.

Good practice: each admin has two accounts. One ordinary user account for email and day-to-day work. One privileged account, in a "Tier 0" style, used only for admin tasks, never for email, and protected by a stronger MFA method. This costs nothing (admin accounts do not need their own email licence) and dramatically reduces what an attacker can do if they phish the regular account.

## Be deliberate about mailbox rules

One of the first things an attacker does inside a compromised mailbox is create an inbox rule that moves any reply about the fraud into Deleted Items, so the owner never sees it. Many Irish SMEs do not monitor mailbox rules at all.

Two controls are worth configuring:

- **Block auto-forwarding to external addresses** at the tenant level. Almost no one in a small business legitimately needs this, and it is a favourite attacker technique.
- **Alert on new inbox rules** that forward, delete, or redirect messages. Microsoft 365 audit alerts cover this; Google Workspace has equivalent in the admin console.

A single alert a quarter is worth reading. A single alert that catches a real compromise is worth the setup time many times over.

## Train staff — short, repeatable

Staff are the last line of defence, and they can be the strongest one if the training is right. The wrong training is a 90-minute annual module everyone clicks through. The right training is 20 minutes, twice a year, with real examples from the last month — screenshots of actual phishing attempts, explanations of what the giveaways were, and a short quiz.

What to cover:

- How to tell a legitimate Microsoft 365 login page from a phishing one.
- What to do if a link looks wrong (don't click, report).
- Why invoice or bank-detail changes from known senders always get a phone call.
- How to report a suspicious email internally — who to send it to, one click in Outlook.

Our [why cyber awareness training matters for SMEs](/blog/why-cyber-awareness-training-matters) post goes into this in more depth.

## Phishing simulations, used sparingly

Phishing simulations — where your IT provider or a third-party service sends fake phishing emails to staff to see who clicks — can be useful if used thoughtfully. Useful: once or twice a year, with constructive follow-up, used to identify training needs, not to blame individuals.

Less useful: monthly simulations that become a game, or "gotcha" campaigns that punish the staff who click. Those generate resentment, not vigilance. Microsoft 365 Defender includes built-in attack simulation training that covers the basics; third-party tools add more variety if you need it.

## Encrypt sensitive emails when it matters

Most internal SME email does not need encryption. Some does — legal correspondence, payroll files, sensitive client data. Microsoft 365 has built-in message encryption that lets you mark an email "encrypt" or "do not forward" before sending. It is a single-click feature that most businesses have licensed but never turned on.

For a growing company with client sensitivities, rolling out sensitivity labels and encryption templates is a week-long project and worth doing. The key is to make it easy — if it takes ten clicks, nobody will use it.

## Keep one eye on domain lookalikes

Attackers register domains that look like yours — `yourfirm-accounts.ie`, `yourfirrm.com`, `yourfirm.ie.co` — to send invoices to your clients that appear legitimate. You usually find out weeks after the fact.

A simple preventive step: set up a monitoring service (there are free and inexpensive options) that alerts you when a new domain is registered that resembles yours. Acting on a lookalike within days is much cheaper than dealing with the aftermath months later.

## What "good" looks like

A growing Irish SME with sensible email security has:

- SPF, DKIM, DMARC all published, DMARC at `p=reject`.
- MFA on every account with number matching where possible.
- Defender / Gmail policies tuned, not at defaults.
- Admin accounts separate from user accounts.
- Mailbox rule alerts configured.
- A one-page email-handling policy staff have seen.
- Short training twice a year.

Every item is free or included in a Microsoft 365 Business Premium licence. No new software is needed for any of this.

## If you want a second pair of eyes

If you want to know where your business stands today, the fastest way is a short audit. We do this as part of the [cybersecurity](/cybersecurity) service and as a stand-alone piece. A half-day is usually enough to produce a plain-English list of what is in place, what is missing, and what to do first. Send a line via [contact](/contact) if that would be useful. No obligation.
