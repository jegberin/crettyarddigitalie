---
slug: cost-of-weak-passwords-mfa
title: "The real cost of weak passwords and missing MFA in a small business"
description: "What weak password and MFA practices actually cost a small Irish business — in euros, hours, and reputation — and the plain fixes that close most of the gap."
date: 2026-01-19
tags:
  - Cybersecurity
  - Passwords
  - MFA
author: Joey
coverImage: /blog/images/cost-of-weak-passwords-mfa.jpg
coverImageAlt: "Open laptop on a table displaying a security lock icon beside a potted plant"
draft: false
---

# The real cost of weak passwords and missing MFA in a small business

Nobody budgets for a compromised email account until they've had one. Then it becomes the line item that reshapes the whole year — lost invoices, refunded payments, a frantic weekend, and a conversation with the insurer. Most of those incidents start somewhere very mundane: a password reused from a hobby website, a staff account without multi-factor authentication, a director who "doesn't need it because I'm always on my own laptop."

This post walks through what those mundane gaps actually cost when they're exploited, and the set of moves that make the biggest difference for a small Irish business. None of the fixes are expensive. Most of them are a day's work or less.

## Where the risk actually comes from

For an SME (small or medium-sized business), the overwhelming source of credential risk is not a targeted attacker picking your business out of the crowd. It's automated. Two patterns dominate:

**Credential stuffing.** A database of email addresses and passwords is leaked from a breached website — something a staff member signed up for years ago. Attackers take that list and try the same email-password pair against hundreds of business services: Microsoft 365, Google Workspace, banking portals, CRMs. If your accountant used the same password on a 2017 fitness forum that she uses for her business mailbox, the attackers find that in seconds and walk in.

**Password spraying.** Attackers pick a single common password — `Summer2024!`, `Welcome1`, the name of the local football team plus a number — and try it against thousands of email addresses. They don't need to know anything about your business. They just need one user to have been lazy once.

Both are free for the attacker to run. Both are constant. Both are shut down, almost entirely, by two specific controls: MFA, and not reusing passwords.

## What a compromised account actually costs

A typical Microsoft 365 mailbox compromise at a small Irish business, in the way I've seen it play out:

**Direct financial loss.** The attacker monitors mail for invoices, then issues a fraudulent "updated bank details" email to a client who's about to pay. One well-timed fraud of this kind commonly costs €8,000 to €30,000. In the worst cases I've seen around Ireland and the UK, six-figure.

**Incident response and remediation.** Resetting passwords, revoking tokens, reviewing every mail rule, notifying clients, forensics. If your IT provider is running the clock, this is typically two to five days of work. Call it €2,500 to €8,000 if you're paying consultancy rates.

**Client trust and reputation.** Every supplier and client on the affected mailbox gets notified. Some of them will wonder whether you're the kind of business who's safe to deal with. Quantifying this is hard, but it's never zero.

**Insurance excess and claim friction.** If you have cyber cover, the excess will be in the low thousands. If you don't, the whole bill is yours. Most small business policies don't cover BEC (business email compromise — an attacker hijacking a real mailbox to reroute payments) unless specifically added.

**Your time.** The hardest to cost. A mailbox compromise at an SME typically eats a full working week of the owner or MD (managing director), because they're the only ones who can authorise communications with clients and the bank.

Sum that up and a single compromise commonly sits in the €15,000-€50,000 range for an Irish SME, all-in. That's assuming you catch it quickly and the attacker doesn't also encrypt your laptops on the way out.

Against that, the cost of enforcing MFA and a decent password policy is approximately zero. It's a few hours of configuration and a conversation with staff.

## The five moves that close most of the gap

### 1. Enforce MFA on every account, including admins

Not optional, not per-user-choice, not "we'll turn it on for sensitive staff first." Every account, every login. Microsoft 365 Business plans include this. Google Workspace includes this. Every banking portal you'd care about includes this. Turn it on.

Microsoft's own published data on M365 (Microsoft 365) accounts shows that enabling MFA blocks the overwhelming majority of automated account compromise attempts. It's the single highest-leverage security control available to a small business.

### 2. Use number-matching MFA, not "tap to approve"

The old push-to-approve MFA ("you'll get a notification on your phone, just tap Approve") was a huge step up from passwords alone. Attackers adapted. They spam the user with approval prompts at 11pm until they tap "Approve" just to stop the buzzing.

Number matching — where the login screen shows a code and the user types it into their phone — defeats this cleanly. Microsoft Authenticator has supported it for some time and it's the default on newer tenants (your Microsoft 365 environment — the container that holds your users, email, and files). If yours is older, enable it in the admin centre. It costs nothing and takes a few minutes.

### 3. Ban password reuse (technically, not just in policy)

Saying "please don't reuse passwords" in a staff handbook doesn't work. You need two things: a password manager for staff (so they don't have to remember unique passwords), and a check against known-breached passwords at the point they set one. M365 and modern identity platforms will do the breach-check for you — it's a toggle.

Password managers for a small team are inexpensive and turn this whole problem from a willpower exercise into a one-click experience. 1Password and Bitwarden both have solid business tiers.

### 4. Move to longer passwords, not more complex ones

The old NIST (the US National Institute of Standards and Technology, which publishes widely-followed security guidance) advice — "eight characters, at least one uppercase, one number, one symbol" — is out of date. Current guidance from the NCSC (the UK National Cyber Security Centre), NIST, and every serious source is: **length beats complexity.** Three random words — `correct-horse-battery-staple` — is dramatically stronger than `P@ssw0rd1!` and much easier to remember.

Updating your password policy is a small change with a large effect, and it removes the frustration staff feel with arbitrary complexity rules. More on this sort of baseline on our [cybersecurity](/cybersecurity) page.

### 5. Block legacy authentication

This is the biggest technical win most SMEs don't know they're missing. Legacy authentication means old ways of logging in that pre-date modern security. Legacy email authentication protocols — POP3, IMAP, and older SMTP (the old mail protocols that email programs use to send and receive messages) without OAuth (a modern "sign-in with your account" handshake that lets MFA do its job) — don't support MFA. If they're enabled on your tenant, an attacker with a password can bypass MFA entirely by connecting via one of these old protocols.

Microsoft now blocks legacy auth by default for new tenants, but older tenants may still have it enabled. Check your Conditional Access settings (the rules in Microsoft 365 that decide who can sign in, from where, and under what conditions). This single toggle closes an attack vector that attackers specifically look for.

## Where the "I'll get to it later" trap lives

Two patterns I see constantly in small Irish businesses:

**"The owner doesn't need MFA — it's just inconvenient."** The owner is usually the most valuable target in the business, with access to everything and authority to authorise payments. Exempting them from MFA is like installing a security system at your home but leaving the master bedroom window open.

**"We turned on MFA but left a service account without it."** A service account is a non-human login used by a piece of software or a device. Often there's one old account — `scanner@yourbusiness.ie`, `admin@yourbusiness.ie`, the account the accountant's software uses — that was exempted "just until we work out how to make it work with MFA." That account is now the attacker's front door.

Audit every account. No exemptions.

## What to do this week

If you're not sure where you stand, do these three things in the next hour:

1. **Check every staff member has MFA enrolled.** In the M365 admin centre, under Users > Active users > Multi-factor authentication. Any row that says "Disabled" needs attention.
2. **Check your Conditional Access policies.** Specifically, is legacy authentication blocked? If there's no policy for it, create one.
3. **Run the Microsoft Secure Score report** (Microsoft's own 0-100 scorecard of how well-locked-down your tenant is). It's a free, built-in audit that tells you the specific controls you're missing, with an estimated risk-reduction for each. It's not a perfect tool, but for a small business tenant it's a good starting point.

None of these cost money. All of them take under an hour for a ten-person business.

## If you've never had a security review

The cost of a half-day Microsoft 365 security review at a small Irish business is nearly always less than a single bad weekend. If you haven't had one done in the last twelve months, it's worth thinking about — even if you end up doing nothing with the findings.

You can read how we approach it on the [Microsoft 365](/microsoft-365) or [cybersecurity](/cybersecurity) pages. If you'd rather just talk, a 30-minute free call through [contact](/contact) will usually tell us both whether you need a full review or a targeted fix to one specific control. No sales pressure — if your tenant is already well-configured, I'll tell you, and that's the end of the conversation.
