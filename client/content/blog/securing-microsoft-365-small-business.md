---
slug: securing-microsoft-365-small-business
title: "Securing Microsoft 365 for a small business — a plain-English walkthrough"
description: "The practical security steps that actually move the needle on a Microsoft 365 tenant for an Irish SME — without turning the admin console into a full-time job."
date: 2025-12-08
tags:
  - Microsoft 365
  - Cybersecurity
  - Small Business
author: Joey
coverImage: /blog/images/securing-microsoft-365-small-business.jpg
coverImageAlt: "A quiet office workstation with a cup of coffee and an open laptop"
draft: false
---

# Securing Microsoft 365 for a small business — a plain-English walkthrough

The Microsoft 365 admin centre looks intimidating from the outside, but the security settings that actually matter for a small business are a short list. Getting them right does not require a full-time security team or a consulting engagement. It requires an afternoon, a cup of coffee, and a willingness to click through half a dozen menus.

This walkthrough is for Irish SMEs (small and medium-sized businesses) with a Microsoft 365 tenant (your own Microsoft 365 environment — the container that holds your users, mail, and files) already in place. If you are still setting up, pair this with our [Microsoft 365 setup mistakes to avoid](/blog/microsoft-365-setup-mistakes-to-avoid) post; the setup and security are closely linked.

## Step 1: Enable Security Defaults (or conditional access)

If you have a Business Basic or Business Standard licence without Azure AD Premium, turn on Security Defaults in the Entra admin centre (Entra ID is Microsoft's identity service — it's where your user accounts and sign-in rules live). This enforces MFA (multi-factor authentication — that second code or phone prompt when you log in) for all users, blocks legacy authentication (old sign-in methods that pre-date MFA, like basic email protocols), and requires MFA for admin actions. It is a single switch and it covers the majority of small businesses.

If you are on Business Premium, Security Defaults and Conditional Access are mutually exclusive. Use Conditional Access policies (rules that decide who can sign in, from where, and under what conditions) instead — they let you apply MFA selectively, block countries you do not operate in, and require compliant devices for privileged roles. Microsoft publishes "common policies" templates that are a good starting point.

Either way, the goal is the same: MFA on every account, legacy auth off, no loopholes.

## Step 2: Review your global admins

Most tenants I audit have too many global admins. The rule of thumb is two, three at most, and only for people who genuinely need full control of the tenant. Everyone else should have a narrower role — User Administrator, Exchange Administrator, SharePoint Administrator (SharePoint is Microsoft's shared document library).

Open the Roles section of the admin centre. Make a list of who is a global admin. For each one, ask: do they really need this? If not, assign a narrower role. Also look for any service accounts (non-human logins used by software or devices) still sitting with full admin rights — a common legacy mistake.

While you are there, check that every admin account has MFA on and is protected by a strong password that is not reused anywhere else. The admin account is the crown jewel; treat it accordingly.

## Step 3: Turn on audit logging

Microsoft 365 has detailed audit logging, but on older tenants it may still be disabled by default. From the Microsoft Purview compliance portal, make sure unified audit log search is on. This is the record that lets you answer questions like "who accessed this file last week" or "when did this inbox rule get created" if something goes wrong.

Retention of audit logs depends on licence. On standard licences it is 90 days; on some higher tiers it is a year or more. For most SMEs, 90 days is enough provided you check the logs when something looks off — rather than waiting until something catches fire.

## Step 4: Configure email security

The most common attack surface. Priorities:

- **SPF, DKIM, DMARC** (three email authentication records you publish in your domain's DNS so receivers can verify a message really came from you) published and configured correctly for your domain. DMARC at `p=reject` after a short monitoring period.
- **Safe Links** turned on if you have Defender for Office 365 — every URL rewritten and checked at click time.
- **Safe Attachments** turned on — unknown files sandbox-detonated before delivery.
- **Impersonation protection** configured for the owner, finance, and senior roles by name.
- **External sender tag** showing in the top of emails from outside the organisation.
- **Auto-forwarding to external addresses** blocked at the tenant level.

Our [email security basics](/blog/email-security-basics-growing-companies) post covers each in more detail.

## Step 5: Restrict third-party app consent

By default, users can authorise third-party apps to read their mailbox, files, and contacts with a single click. This is the mechanism behind consent phishing attacks. Change the setting so that admin approval is required for third-party apps, with an allow-list for anything well-known and safe.

The setting is under Entra (Microsoft's identity service, formerly Azure AD) > Applications > Consent and permissions. Set "Users can consent to apps" to "Do not allow user consent," then configure an admin consent workflow so users can request approval for apps they genuinely need.

## Step 6: Configure SharePoint and OneDrive sharing

Out of the box, SharePoint and OneDrive (Microsoft's personal file storage) allow "anyone with the link" sharing — anonymous links that never expire. For most small businesses this is over-generous. Tighten it:

- External sharing set to "New and existing guests" rather than anonymous, so you can see who has access.
- Default sharing link set to "People in your organisation".
- Link expiry set for guest links (30 or 60 days is typical).
- External sharing blocked entirely for sensitive document libraries, like HR or finance.

These settings live in the SharePoint admin centre. Ten minutes to set, a permanent reduction in the chance of accidental data exposure.

## Step 7: Enable Defender for Business

If you are on Business Premium, Defender for Business is included. It is Microsoft's endpoint protection (security software that protects the actual laptops, desktops, and phones your staff use) for small businesses — antivirus, anti-ransomware, device isolation, vulnerability management, the lot. It is not automatically on; you need to enrol devices and apply the default policies.

If you are not on Premium, the base Microsoft Defender Antivirus in Windows is the minimum. Adding Defender for Business is usually worth the upgrade cost for a business of any size that takes security seriously.

## Step 8: Review and tidy user accounts

A quarterly ritual rather than a one-off. For each user, check:

- Are they still employed by you?
- Is their licence the right tier for their role?
- Do they have any unused admin permissions?
- Is MFA enforced and registered?
- Have they signed in recently — if not, why?

Leaver accounts should be handled through a documented process: block sign-in, reset password, convert to shared mailbox (an unlicensed mailbox the team can still read from) if the email history is needed, reassign the licence. More on this in our [when to review M365 licences](/blog/when-to-review-m365-licences) post.

## Step 9: Configure mobile device protection

Staff access Microsoft 365 from phones. That is fine, as long as the phones are not a gap in the security model. Minimum controls:

- App protection policies that require a PIN to open Outlook on a phone.
- Prevent copying corporate email into personal apps.
- Allow remote wipe of company data from a personal device without wiping the whole phone.

These are free on Business Premium via Intune (Microsoft's device-management tool for enforcing phone and laptop policies) and Entra. On lower licences, Outlook mobile has app-level controls built in that cover most of the same ground.

## Step 10: Watch Secure Score, but don't chase it

Microsoft's Secure Score (a 0-100 scorecard of how well-locked-down your tenant is) gives each tenant a percentage rating and a list of improvements. It is useful — it catches settings you may have missed. It is also noisy, recommending features that are overkill for a five-person business.

Use Secure Score as a prompt for review, not a target to hit. Pick the three or four highest-impact items at a time, implement them, revisit it in a quarter. Chasing 100% on Secure Score is not a sensible objective; steady, proportionate improvement is.

## Common mistakes I still see

Tenants I audit in 2026 still routinely show:

- MFA off for "the owner's account" because "it's inconvenient."
- Legacy auth enabled for one old app that should have been retired three years ago.
- Default SharePoint sharing wide open.
- Global admin role assigned to five or more people.
- Audit logging on, but no one has ever looked at it.
- A Business Standard subscription when Defender on Business Premium would have prevented the last two incidents.

None of these take more than an hour to fix. All of them pay back far more than that hour.

## A short, honest assessment

If you want a straight answer on where your tenant sits, we run a short M365 security review as part of our [Microsoft 365](/microsoft-365) service. It is usually a half-day, delivered as a one-page summary and a prioritised action list. If that would be useful, drop a line via [contact](/contact) and we will pick a time. No long sales process, no pressure.
