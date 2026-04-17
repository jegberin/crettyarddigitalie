---
slug: microsoft-365-setup-checklist
title: The Microsoft 365 setup checklist I run through on every new tenant
description: A walkthrough of the configuration steps I take for every small-business Microsoft 365 tenant — MFA, retention, sharing, and the non-obvious defaults most providers leave loose.
date: 2026-04-17
tags:
  - Microsoft 365
  - Cybersecurity
  - Getting Started
author: Joey
---

Every new Microsoft 365 tenant for a small business starts the same way for me: a setup pass that takes the defaults from "works out of the box" to "actually safe for a small business holding client data." Here's the short version of what that looks like.

## Why defaults aren't enough

Microsoft's defaults are written for a global audience of millions. They're generous with sharing, permissive on legacy authentication protocols, and silent about retention. For a two-person accountancy practice in Carlow, that's not a fit.

A few specifics that catch people out:

- External sharing of SharePoint sites is **on** by default
- Legacy POP/IMAP can still authenticate without MFA unless you turn it off
- Deleted items are gone in **14 days** unless you raise the retention window
- Guest accounts can add their **own** guests, by default

None of this is catastrophic, but every one of them is a call I've had to take at some point.

## The short checklist

Here's the skeleton of the PowerShell I run. Real setups use named variables, logging, and error handling — this is just the outline:

```ts
// Rough shape of the setup sequence I work through per tenant.
const setupTasks = [
  "Enable Security Defaults (or configure Conditional Access)",
  "Block legacy auth protocols",
  "Enforce MFA for all admins",
  "Enable mailbox audit logging",
  "Raise deleted-item retention from 14 to 30 days",
  "Restrict external guest invitations to admins",
  "Disable SharePoint anonymous sharing",
  "Enforce OneDrive client sync to joined devices only",
  "Configure anti-phishing policies (Defender)",
  "Set mailbox retention tag for the full tenant",
];
```

The full script is about 200 lines and parameterised per client — I'm happy to share the template with anyone working through this for the first time.

## Grow Digital Voucher angle

If you're setting up Microsoft 365 for the first time, the subscription cost (not the setup labour) is eligible for **50% funding** under the [Grow Digital Voucher](/grants-funding), up to €5,000. The setup itself isn't — but if you're also moving to a new CRM, or adding Copilot, the software costs for those **are** in scope.

## When to call someone in

If any of these apply, don't DIY the migration:

1. You're moving from a shared Exchange box or Google Workspace and can't afford a downtime window
2. You have more than five mailboxes and not everyone is technical
3. You're handling client data under GDPR or NIS2 supply-chain requirements
4. Your current setup has been cobbled together over time and nobody's sure what's in it

Those are the migrations that go sideways without someone who's done it before. Email me at info@crettyarddigital.ie and I'll tell you straight whether it's worth a paid engagement or whether you can handle it in an afternoon.
