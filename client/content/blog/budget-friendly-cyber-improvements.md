---
slug: budget-friendly-cyber-improvements
title: "Budget-friendly cyber improvements every SME can make this quarter"
description: "A practical set of cybersecurity improvements for Irish small businesses that cost little or nothing — and make the biggest difference against real attacks."
date: 2026-01-12
tags:
  - Cybersecurity
  - Small Business
  - Budget
author: Joey
coverImage: /blog/images/budget-friendly-cyber-improvements.jpg
coverImageAlt: "Coins and a notebook on a desk beside a laptop, suggesting budget planning"
draft: false
---

# Budget-friendly cyber improvements every SME can make this quarter

One of the quiet truths of cybersecurity for Irish small businesses is that the high-value controls are not the expensive ones. The things that stop the real attacks — phishing, password reuse, outdated software, loose permissions — are mostly either free or included in software you already pay for. The expensive enterprise tools rarely pay back at SME scale.

This post is a list of cyber improvements a small business can make this quarter for little or no extra money. No vendor pitches. No licence upgrades unless they genuinely pay back. A pragmatic list ordered roughly by return on effort.

## 1. Turn on MFA everywhere (free)

If there is only time for one improvement, this is it. MFA on every business account — email, cloud apps, banking, accounting, admin consoles. Authenticator app rather than SMS where possible.

MFA alone blocks the overwhelming majority of automated credential-theft attacks. It costs nothing on any Microsoft 365 plan or on most banking and SaaS platforms. The investment is a couple of hours of setup and a short session to walk staff through it.

## 2. Roll out a password manager (low cost)

Staff reuse passwords because remembering a unique one per site is impossible. A password manager — 1Password, Bitwarden, Keeper — costs a few euro per user per month and removes the excuse.

Even better, many password managers include breach monitoring — they tell you when a password in the vault has appeared in a public data breach. That is free intelligence you did not have before.

Our [cost of weak password and MFA practices](/blog/cost-of-weak-passwords-mfa) post walks through why this matters.

## 3. Separate admin accounts (free)

Most small businesses have the owner or IT contact using their regular email account as a global admin for Microsoft 365. That is a concentration of risk a single phishing email can unravel. Create a dedicated admin account, give it MFA, never send email from it, and use it only for admin tasks. The regular account gets a normal user role.

This takes 15 minutes and costs nothing. The admin account does not need its own licence.

## 4. Review and remove orphaned user accounts (free)

Walk the list of users in your Microsoft 365 tenant. For each one, confirm: is this person still employed here? If not, disable their account, reset the password, and either convert the mailbox to a shared one or delete it. Reassign the licence.

Most SMEs have at least a couple of leaver accounts still active. Each one is a free entry point for an attacker and a wasted licence spend. A quarterly review keeps it clean.

## 5. Publish DMARC on your domain (free)

SPF and DKIM are table stakes; DMARC is the free control most Irish SMEs still have not configured. Start with `p=none` and a reporting address, watch for two to four weeks, then move to `p=reject`.

DMARC at reject stops attackers forging emails from your domain to your clients and suppliers. That is one of the highest-value anti-fraud moves available and it only costs DNS changes. Our [email security basics for growing companies](/blog/email-security-basics-growing-companies) post has step-by-step.

## 6. Turn on Defender for Business if you have Business Premium (no extra cost if licensed)

Business Premium includes Microsoft Defender for Business, which is Microsoft's endpoint protection for small firms. Many tenants never enable it. Enrolling devices takes an hour per site and gives you antivirus, anti-ransomware, vulnerability reporting, and device isolation — enterprise-grade endpoint security you are already paying for.

If you are on Business Standard, the upgrade to Premium is modest per user per month and is almost always worth it for the security features alone.

## 7. Block auto-forwarding out of Microsoft 365 (free)

A common attacker trick after compromising an M365 mailbox is to set up a forwarding rule that copies every email to an external address. In the admin console, block external auto-forwarding at the tenant level. Any legitimate forwarding exception can be granted by a specific admin policy.

## 8. Configure device encryption (free on most modern devices)

BitLocker on Windows (Pro edition), FileVault on macOS, device encryption on iPhones and Android phones. All of these are built in and free. They turn "laptop stolen from the van" from a data breach into an inconvenience.

For an SME, the process is: check every business device has encryption enabled, store the recovery keys centrally (M365 Entra does this automatically for joined devices), and include encryption check in the device setup runbook.

## 9. Set up automatic patching (free, requires discipline)

Windows Update for Business, macOS auto-update, and modern mobile device management tools all let you enforce timely patching. Turn on auto-update for operating systems and browsers on every business device. Enable auto-update for Microsoft 365 apps.

The only cost is the occasional inconvenience of a restart, which is vastly cheaper than a month-old unpatched browser vulnerability.

## 10. Add a phishing-report button to Outlook (free)

Microsoft includes a free "Report Message" button for Outlook that lets staff flag suspicious emails to Microsoft and optionally to an internal inbox. Installing it is a tenant-level setting; rolling it out is a five-minute staff communication.

Giving staff an easy way to report suspicious emails, with no blame and no hassle, turns them from a potential weak link into a useful sensor.

## 11. Configure external sender tagging (free)

Microsoft 365 supports an external tag that appears in the top of any email from outside the organisation. It is a small visual cue that catches a surprising number of business email compromise attempts — the moment someone sees an email from "the CEO" tagged External, their confidence drops.

Free to enable. Five minutes.

## 12. Write a one-page incident plan (free)

A one-page sheet pinned somewhere visible that says: who to call first, where the backups are, how to contact clients if email is down, how to reach your IT provider after hours. Not a binder — a single page. When something happens, nobody is thinking clearly; the sheet lets you act.

Review it once a year. The exercise of writing it tends to uncover gaps you did not know you had.

## 13. Run a short staff session, twice a year (minimal cost)

Bring staff together for 20 minutes. Show two or three real phishing emails from the last few months. Explain what the giveaways were. Remind people how to use the report button. Take questions.

No expensive training platform required. The engagement and recall of a live session with examples from your own inbox beats a compliance video every time. Our [why cyber awareness training matters for SMEs](/blog/why-cyber-awareness-training-matters) post makes the case for this approach.

## 14. Test a backup restore (free)

Backups that have never been restored are not backups. Once a quarter, pick a file or two, deliberately delete them from the live system, and restore from backup. Time the process. Note any friction.

Discovering that your backup has been silently failing for two months during a test is annoying. Discovering it during a ransomware incident is catastrophic.

## 15. Apply for grant funding where eligible (variable cost)

The Local Enterprise Office network in Ireland offers grants that can contribute toward cybersecurity improvements as part of broader digital and business supports. The Digital for Business scheme and Trading Online Voucher have been used by Irish SMEs to fund parts of security reviews and improvements. Eligibility depends on employee count, VAT registration, and sector.

Check with your local LEO directly on what is currently available and what it covers. Our [grants and funding](/grants-funding) page has a general overview.

## A sensible quarter

Pick five items from the list above and commit to getting them done this quarter. Even without a budget, that is a measurable, meaningful improvement. Next quarter, pick another five.

## If you want a map of where to start

A short audit can tell you exactly which of the above would be highest-value in your specific setup. We do this as part of our [cybersecurity](/cybersecurity) service. Usually a half-day, delivered as a prioritised list with a cost estimate for anything that is not free. Drop a line via [contact](/contact) if it would help.
