---
slug: staff-onboarding-microsoft-365
title: "Staff onboarding with Microsoft 365 — a practical playbook"
description: "A step-by-step process for onboarding a new staff member in a small business Microsoft 365 tenant — from licence to laptop to day-one handover — done in under an hour."
date: 2025-12-29
tags:
  - Microsoft 365
  - Onboarding
  - Small Business IT
author: Joey
coverImage: /blog/images/staff-onboarding-microsoft-365.jpg
coverImageAlt: "Two professionals shaking hands in a bright office to mark a successful meeting"
draft: false
---

# Staff onboarding with Microsoft 365 — a practical playbook

If you've ever onboarded a new hire on a Monday morning and spent half of it trying to remember whether they need the Business Standard or Business Premium licence — and whether their new email alias should match the surname or the initial — you've felt the cost of not having an onboarding playbook. It's a small tax you pay every time, and it gets bigger the faster the business grows.

This post is the short, practical sequence I run through for a new Microsoft 365 user at a small Irish business. Done properly, the whole thing takes under an hour of focused work and sets the new person up cleanly for day one. No magic, just a checklist applied the same way every time.

## Before the first day — prep

The common mistake is doing the whole onboarding on the morning of day one, with the new hire watching. Push as much as possible into the week before.

**Confirm the details with whoever's hiring.** First name, last name, preferred name if different, their role, their manager, their start date. Phone number they'll have for MFA (multi-factor authentication — that second code or prompt at login) setup. Home address if you're couriering equipment. Write this down in one place — ideally a shared HR or IT onboarding template.

**Decide the licence.** For most Irish SMEs (small and medium-sized businesses), the choice is between Microsoft 365 Business Basic, Business Standard, and Business Premium. Premium is the only tier that includes Intune (device management), Defender for Business, and Azure AD Premium P1 features — which is what you want for any serious security posture. Business Standard is fine for users who don't need full device management. A clear licence-decision rule, documented somewhere, saves thinking time every hire.

**Decide the email address.** Usually firstname@ or firstname.lastname@. Pick a convention and stick to it — inconsistency causes trouble later when customers try to guess.

## The M365 admin steps

Roughly in this order, in the Microsoft 365 admin centre:

### 1. Create the user

Admin centre → Users → Add user. Enter name, username, generated password (change at next sign-in). Assign the licence. Add to the relevant department group if you've set groups up.

### 2. Set the job title, department, and manager

Small detail, big payoff. If these are populated, they show up in Outlook and Teams when colleagues hover on the name, which saves everyone asking "who does this person work for?" A month into the job, it means the org chart is self-documenting.

### 3. Add to security and distribution groups

For onboarding to scale, you want role-based groups, not ad-hoc permissions. A sales hire should be added to a "Sales" security group that already has access to:

- The Sales SharePoint site (Microsoft's shared document library)
- The sales shared mailbox (a team inbox multiple people can read from, like sales@)
- The sales Teams channel
- Any sales-specific Conditional Access policies (rules that decide who can sign in, from where, and under what conditions)

Adding the person to one group handles all of the above. Adding them to seven individual resources manually is a recipe for inconsistency and drift.

### 4. Configure email and shared mailboxes

Set up their mailbox delegation (who else can send from it, if anyone). Add them to any shared mailboxes appropriate to their role. Set up a sensible email signature — this is where a template for the business saves ten minutes per hire.

### 5. Configure MFA — and enforce it

MFA should not be optional for any user, including new hires in their first week. Microsoft Authenticator is the cleanest option. Set up number matching; require registration at first sign-in.

If you're using a policy-based approach (Security Defaults or Conditional Access) this will happen automatically when they first log in, which is ideal. If you're still toggling MFA per user, standardise on a policy instead — per-user MFA is a mess at any scale.

### 6. Set up OneDrive and SharePoint access

OneDrive provisions automatically on first sign-in. Just confirm they can access the SharePoint sites they should, via group membership. Don't send them individual share links to ten documents — that defeats the purpose of SharePoint and clutters their experience.

### 7. Configure Teams

Add them to the Teams channels appropriate to their role. Check that they can join their first meeting. Add their photo (if one is provided) so they're recognisable in Teams for the first week when nobody knows who anyone is.

## The device side

### 8. Prepare the laptop

If they're getting a new laptop, ideally you're using Windows Autopilot or similar. The laptop ships from the supplier directly to the user. On first login, it self-configures — joins Entra ID (Microsoft's identity service, where your user accounts live), enrols in Intune, installs the approved apps, applies the policies — without IT ever physically touching the device.

If you're not on Autopilot yet, the manual version is: set up the laptop with the standard image, install the core apps (Office, Teams, browser, any business-critical software), enable BitLocker encryption (the built-in Windows full-disk encryption that protects data if the laptop is stolen), enrol in Intune, then hand it over.

### 9. Apply the device policy

The laptop should be encrypted (BitLocker), have automatic updates enabled, enforce a screen lock after a few minutes of inactivity, and run Defender or your endpoint protection of choice. These should all be policy-managed via Intune, not set manually — manual settings drift and can't be audited.

### 10. Install the phone app (where needed)

If they'll use Outlook or Teams on their phone, the standard approach is Microsoft's Intune mobile application management (MAM) — which protects the corporate apps on the phone without "managing" the whole phone. Staff keep their personal stuff private; the business controls the business apps. Everyone wins.

## Day one — the human bit

### 11. A proper welcome

A scheduled 30-minute call or in-person session on the first morning, not "find your own way round". Walk them through:

- Logging in for the first time (MFA setup takes ten minutes of this)
- Finding their mailbox, calendar, and team channels
- Where documents live (the 30-second tour of SharePoint: "this is the map")
- Who to ask when something doesn't work

If you've written it all down in a new-starter doc, even better. Hand them the one-pager. Don't make them take notes while drinking from a firehose.

### 12. A test run before real work

Before they start real work, ask them to:

- Send a test email (to you) from their new address
- Join a test Teams meeting (with you)
- Open and save a test document in the correct SharePoint site
- Unlock the laptop with their password and MFA method

If any of these don't work, find out now, not an hour into their first client call. This five-minute sanity check catches a huge proportion of day-one problems.

## The offboarding mirror

A good onboarding process also sets you up for a clean offboarding. The same groups that granted access on day one will revoke it on the last day, in minutes, if you've been disciplined.

When the staff member leaves:

1. Disable the account (not delete — disable first, delete later)
2. Sign them out of all sessions
3. Convert the mailbox to shared (so colleagues can still access it but no licence is consumed)
4. Transfer OneDrive contents to their manager before deleting
5. Reset any shared passwords they knew (banking, accounts software, the office Wi-Fi)
6. Wipe or re-image the device via Intune
7. Revoke licences and remove from groups

Done this way, offboarding is a 20-minute task instead of a half-day investigation. See our broader note on [managed IT support](/managed-it-support) for how this fits into a full lifecycle.

## Why this matters for an SME

For a ten-person business, the argument for a structured onboarding process is simple: every hire is 5% of the business, and every offboarding is a 5% security risk. You can't afford to do either sloppily. The payoff for documenting the process once is that the next ten hires take an hour each instead of half a day of improvisation.

If you'd like help putting this playbook together for your specific tenant — or if onboarding is the pain point that's pushing you to think about a managed IT arrangement — you can see how we approach it on the [Microsoft 365](/microsoft-365) and [Microsoft 365 setup Ireland](/microsoft-365-setup-ireland) pages. A free review through [contact](/contact) will usually tell you, in an hour, whether your current setup is fit for the next ten hires or whether it needs tidying up first.
