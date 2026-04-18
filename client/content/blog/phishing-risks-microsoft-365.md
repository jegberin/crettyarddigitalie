---
slug: phishing-risks-microsoft-365
title: "Phishing risks in Microsoft 365 — what SMEs should actually watch for"
description: "A plain-English look at how phishing attacks hit Microsoft 365 tenants at small Irish businesses, the patterns that work, and the controls that shut most of them down."
date: 2026-04-06
tags:
  - Cybersecurity
  - Microsoft 365
  - Phishing
author: Joey
coverImage: /blog/images/phishing-risks-microsoft-365.jpg
coverImageAlt: "Laptop open on a desk showing an email inbox beside a green plant"
draft: false
---

# Phishing risks in Microsoft 365 — what SMEs should actually watch for

Phishing is the most boring category of attack, and also the one that actually costs Irish small businesses money. The average incident I see at an SME (small or medium-sized business) doesn't come from a sophisticated nation-state. It comes from a convincing-looking email that tricked one member of staff into giving up their Microsoft 365 password on a page that looked like login.microsoftonline.com but wasn't.

This post is about the specific ways phishing lands in a Microsoft 365 environment, what attackers do after they're in, and the handful of controls that stop the majority of attempts before they matter. None of it is theoretical — these are the patterns the NCSC (the UK National Cyber Security Centre) and Microsoft's own Defender teams flag most often for small businesses.

## Why Microsoft 365 is such a common target

If you run a small business in Ireland, there's a very good chance you're on Microsoft 365. Email, calendar, documents, Teams, the whole working day sits inside one tenant (your Microsoft 365 environment — the container that holds your users, mail, and files). That's enormously useful. It also means that a single compromised login — not a whole fleet of them — gives an attacker a lot of leverage.

A standard phishing kit doesn't need to be clever. It needs to do three things: land in the inbox, look like Microsoft, and capture the password. Once the attacker has the credentials, they'll try a login from somewhere plausible and see what the account is allowed to do. That's where the real damage happens.

## The five patterns I see most often

### 1. The "shared document" bait

An email arrives from a name the staff member recognises — a supplier, an accountant, a client — with a line like "Please review the attached quote." The link goes to a page branded to look like SharePoint (Microsoft's shared document library) or OneDrive (Microsoft's personal file storage). The user clicks, sees a Microsoft-style login box, and enters their password. The page forwards to a real, harmless PDF so nothing feels wrong.

This is the single most common path to a compromised M365 (Microsoft 365) account at an Irish SME. The tell, once you're looking, is usually the URL — a domain no one recognises, or a Microsoft-looking domain with one letter off. The users who fall for it are busy, not careless.

### 2. Business email compromise (BEC)

Once an attacker has access, they rarely use the mailbox to send spam. They read it. For weeks, sometimes. They learn how the business talks to its accountant, to its suppliers, to its clients. Then, when an invoice conversation is in progress, they step in with a perfectly-worded email asking for the payment to go to new bank details.

The Garda National Cyber Crime Bureau and the NCSC have both flagged BEC as one of the highest-impact threats facing Irish SMEs. The losses are rarely under €10,000 and frequently much more. And because the email comes from a legitimate address that's been hijacked, spam filters don't flag it.

### 3. MFA fatigue

MFA (multi-factor authentication — that second code or phone prompt you approve when you log in) is brilliant and should be on every account. But once an attacker has a password, a handful of them try simple prompt-spam: pushing authentication requests to the user's phone at 11pm, over and over, until the user taps "Approve" just to make it stop. Sometimes it's paired with a phone call from "IT support" explaining the prompts.

The fix is number matching — a mode in Microsoft Authenticator where the user has to type a code shown on the login screen, not just tap "Approve." Microsoft has made number matching the default, but older tenants still need it explicitly enforced.

### 4. OAuth consent phishing

OAuth is the "sign in with your Microsoft account" handshake that lets one app get limited access to another. This one is nastier because it doesn't need the user's password at all. An email sends the user to a legitimate Microsoft login page, where they're asked to grant permission to an app called something innocuous — "Secure Documents", "Invoice Viewer". The user clicks "Accept." The app now has permission to read the user's mailbox, search OneDrive, or send email on their behalf.

Microsoft's guidance is to restrict user consent so that non-admin users can't grant permissions to third-party applications, or to require admin approval for anything beyond a short allow-list. This is a one-time setting and costs nothing; most tenants I audit still have it wide open.

### 5. Lookalike domains in your own name

For businesses with a recognisable brand, attackers register near-miss domains — yourfirm-accounts.ie, yourfirm.co, yourfirmie.com — and use them to send invoices to your clients. You only find out when a client calls asking why they've been sent a payment reminder from an address you don't own.

There's no silver bullet here, but SPF, DKIM, and DMARC (three email authentication records you publish in your domain's DNS that together prove a message really came from you) records on your own domain do two things at once: they make it harder for attackers to spoof you directly, and they let your own email platform reject forgeries that arrive from anywhere. A DMARC policy set to "reject" is one of the highest-value, lowest-cost anti-phishing moves an SME can make.

## What attackers do once they're in

If you want to build useful intuition for which controls matter, it's worth knowing the standard playbook after a compromise:

1. **Set an inbox rule** that moves any email containing the words "invoice", "payment", "fraud", or the attacker's own domain into Deleted Items or Archive, so the user never sees the replies
2. **Register their own MFA method** on the account, so they keep access even after the password is reset
3. **Read the mailbox for money-related threads** — accountants, suppliers, clients, solicitors
4. **Send an invoice or payment-detail change** from the legitimate account at exactly the right moment
5. **Move laterally** (pivot from one compromised account into other systems) to SharePoint or OneDrive, looking for bank details, client lists, or anything marketable

Everything after step one is optional for the attacker. Step one — the inbox rule — is nearly universal, because it's what keeps the victim blind to what's happening.

## The controls that stop most of this

None of these are expensive. All of them come with a standard Microsoft 365 Business Premium licence, and some are available on cheaper plans too.

**Enforced MFA with number matching.** Mandatory for every user, no exceptions, no "legacy auth" loophole. Microsoft Authenticator with number matching shuts down MFA fatigue attacks. This is the baseline.

**Conditional Access policies** (rules in Microsoft 365 that decide who can sign in, from where, and under what conditions)**.** Block sign-ins from countries you don't operate in. Require a compliant device for admin roles. Require re-authentication when a session is risky. These policies quietly stop the majority of credential-theft attacks from turning into actual compromises.

**Restrict third-party app consent.** Don't let end users authorise apps on behalf of the tenant. Either require admin approval or allow only apps from publishers you've vetted.

**Inbox rule monitoring and auto-purge.** Microsoft Defender for Office 365, or the built-in audit logs, can alert you when a user creates a mailbox rule that auto-deletes messages or forwards externally. It's a cheap, loud tripwire.

**SPF, DKIM, DMARC.** Publish all three for your own domain. DMARC at `p=reject` after a short monitoring period. Most SMEs I audit have SPF and partial DKIM but no DMARC at all, which is like locking the front door and leaving the back wide open.

**Staff awareness, repeated.** Not a once-a-year click-through module. Short, sharp reminders — a real example from this month, shown in a 20-minute session. You'll find more on the logic behind this in the [cybersecurity](/cybersecurity) service page.

## How this sits alongside a sensible M365 setup

Most of the controls above live inside the M365 admin centre. They're not a separate product. The question is usually not "do we have them?" but "are they turned on correctly?" A properly configured tenant has most of them working together — MFA feeding into Conditional Access, audit logs feeding into alerts, restricted consent paired with a documented exception process.

If you're working through an M365 setup, the steps in our [Microsoft 365 setup checklist](/blog/microsoft-365-setup-checklist) cover the baseline. If you already have a tenant and you're not sure what's configured, a short audit is usually the right first move — see [Microsoft 365](/microsoft-365) for how we approach it.

## If you think you've been phished

Three things, in order:

1. Sign the user out of all sessions (via the M365 admin centre) and reset their password
2. Review their mailbox for rules that forward or delete — the first thing attackers set up
3. Check their recent sign-ins and any MFA methods registered on the account that shouldn't be there

Then, separately, warn any accounts or clients who may have received a message from the compromised mailbox. Quiet often matters more than fast here — an email out to clients within hours, telling them to verify any payment changes by phone, is usually worth more than a week of internal forensics.

If you'd rather not do this by yourself, or if the thing you're handling is already a suspected BEC, get in touch via [contact](/contact). We'll tell you plainly whether it's something you can handle in an hour or whether you want outside help. No sales script either way.
