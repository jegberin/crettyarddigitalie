---
slug: reducing-downtime-small-business
title: "Reducing downtime in a small business — a practical guide"
description: "Plain, actionable moves to cut unplanned IT downtime in a small Irish business — covering broadband, power, email, backups, and the handful of gaps that cost the most."
date: 2026-02-09
tags:
  - Managed IT
  - Business Continuity
  - Small Business IT
author: Joey
coverImage: /blog/images/reducing-downtime-small-business.jpg
coverImageAlt: "Network server rack with cables and equipment in a clean technical environment"
draft: false
---

# Reducing downtime in a small business — a practical guide

Downtime is one of those costs that never appears on a P&L, which is why it's easy to underestimate. A morning with the broadband out, a day where the email server is having "issues", an afternoon with the card reader refusing to connect — each individual episode feels survivable. Added together, they hollow out a month.

This post is about the specific causes of downtime I see most often in small Irish businesses, with the concrete fixes that cut them down. Nothing exotic, nothing expensive. The whole list would pay for itself after a single bad Tuesday.

## Where downtime actually comes from

In my experience across small businesses in Laois, Carlow, and Kilkenny, unplanned downtime has roughly six recurring sources:

1. Internet connection failing
2. Power cut
3. Key SaaS platform (software-as-a-service — apps you rent online, like Microsoft 365, a CRM, or a payment terminal) going down
4. Laptop or desktop breaking, with no quick replacement
5. Cyber incident (mailbox compromise, ransomware, phishing)
6. Human mistake during a change — a config push, a misclick in the admin console

Each has its own pattern and its own fix. A lot of downtime reduction work is just noticing which of these you've been bitten by repeatedly and addressing that one first.

## Broadband resilience for a single line

A single fibre line is fine until the day it isn't. Work on the pole down the road, a cable snag, a router failing overnight — all low-probability individually, all inevitable over a year or two.

**The cheap fix: a 4G/5G failover router.** For around €20-40 a month plus the hardware cost, a router with a SIM slot can keep the business online when the main line goes down. Traffic switches over automatically. Staff might notice the internet feels slightly slower for an hour; they don't have to go home.

**The structured fix: a second, different provider.** Many small businesses don't need this, but for operations where an offline hour costs thousands — payments, healthcare, regulated professional services — a second line from a different ISP (internet service provider), using different physical infrastructure, gets you true redundancy. Worth the extra €40-60 a month for the businesses that genuinely need it.

Both options assume your router can handle failover. The cheap consumer router that came with your broadband typically can't. A business-grade router — the kind included in a proper [network and Wi-Fi](/network-wifi-security) setup — usually does.

## Power and UPS

A four-minute power blip shouldn't take your day down, but if the server in the cupboard or the switch in the comms rack loses power abruptly, it frequently needs a sit-down to come back up cleanly.

**A small UPS (uninterruptible power supply — a battery box that bridges short power cuts) on the critical gear** — the firewall, the switch, the server if you have one — costs €150-300 and holds the kit up through short power cuts, giving it a clean shutdown on longer ones. For a business that still has any on-site infrastructure, it's a trivial investment against a recurring problem.

If you've moved entirely to the cloud (no on-premises server, no file server, no on-site phones), the UPS picture shifts — you care about the broadband router, the Wi-Fi, and the access points, not a server. The principle is the same; the list of things to protect is smaller.

## Make SaaS failures visible and survivable

When Microsoft 365 has an outage, or your CRM has an outage, or the payment processor has an outage, the business doesn't have a fix — but it does have options:

- **Know where to check first.** Microsoft publishes a status page; so does every serious SaaS provider. Bookmark them. When something "feels broken", check the status page before doing anything else — it saves an hour of troubleshooting a problem that isn't yours.
- **Have a fallback for the critical couple of functions.** If the card reader is dead, do you have a way to take payments by phone? If Microsoft 365 is down, do staff know their meetings via Teams aren't happening and what to do instead? These are ten-minute answers to write down once, not emergency decisions to make under pressure.

The second point is the real work. Business continuity isn't a binder full of theory; it's a short list of "if X goes down, we do Y" written down and known to staff.

## Hardware sparing — the underrated win

Laptops and desktops fail. They just do. The useful question is: when one of your staff's laptops dies tomorrow morning, how long until they're back at work?

For most SMEs I see, the honest answer is "two to five days" — because there's no spare, the order goes to the usual supplier, delivery takes a day or two, and then it has to be set up.

The upgrade is modest:

- **Keep one or two spare laptops**, pre-configured and ready. When one fails, the user gets the spare in an hour.
- **Use Windows Autopilot or similar** to make any new laptop configure itself from the cloud. This changes "a new laptop takes a day to set up" to "a new laptop is useful in an hour."

Small businesses frequently resist the cost of a spare laptop. Look at it this way: an unavailable member of staff for three days costs you more than a laptop that sits in a cupboard 80% of the time. More on this is on our [managed hardware](/managed-hardware) service page.

## Backups that actually restore

Every small business has "backups". Not every small business has tested their backups in the last year. The first time you discover a backup is broken shouldn't be the morning you need it.

The sensible pattern:

- **Back up what matters, not everything.** Microsoft 365 data, customer databases, shared drives, anything unique to your business. The OS (operating system), the apps, the downloads folder — rebuild from a clean install.
- **Test a restore once a quarter.** Pick a random file from three months ago and restore it. If it works, note the date. If it doesn't, find out why and fix it.
- **Keep at least one backup offsite or cloud-hosted.** Not on the same physical site. Not on the same network. Ransomware attacks on SMEs specifically target local backups.

For Microsoft 365 specifically, a third-party backup tool (Veeam, Dropsuite, and others) is worth considering. Microsoft itself doesn't back up your data in the sense most people imagine — retention isn't backup. For many businesses this is the single most valuable unmet need in their IT stack.

## The security side of downtime

The most expensive downtime most Irish SMEs experience isn't broadband or power — it's a cyber incident. A compromised mailbox, a ransomware event, a phishing-driven wire fraud. These typically cost days of downtime in addition to the financial loss, because staff are working around a compromised system while it's being cleaned up.

The controls that keep downtime low here are the same ones that keep breach risk low:

- Enforced MFA (multi-factor authentication — that second code on your phone when you log in; covered in our [weak passwords and MFA](/blog/cost-of-weak-passwords-mfa) post)
- Current patches on every device
- Encrypted laptops
- Sensible email filtering and anti-phishing policy
- A runbook for "what do we do if we think a mailbox has been compromised"

See our [cybersecurity](/cybersecurity) service page for how the baseline fits together.

## Changes and mistakes

A surprising amount of downtime in small businesses is self-inflicted. Somebody pushes a config change, reboots a switch in the middle of the day, updates Outlook to a new major version and it breaks the mail profile, or applies a firewall rule that locks everyone out.

Three easy habits reduce this:

1. **Don't make changes during business hours.** If it can wait to Friday evening, it should. Same for major updates.
2. **Write down what you're changing.** Even a two-line note. When something breaks on Thursday afternoon, the note from Tuesday tells you where to start.
3. **Keep the ability to roll back.** Snapshot the config, save the old rule, note the old version number. Undoing a bad change in five minutes is much better than debugging it for an hour.

For managed IT customers, most of this is handled as a matter of course — change windows, documented changes, rollback plans. For DIY IT, the discipline has to come from inside.

## A simple next step

If downtime has been a recurring frustration, the useful first move is usually a one-page "what would we do if…" document. List the six categories above. For each, write three lines: what the incident looks like, who does what, and who gets called. It's a morning's work for the owner and an hour's review with the team. It's a surprisingly good investment.

If you'd like a structured look at where your current setup is most fragile, a free 30-minute call through [contact](/contact) is usually enough to spot the top two or three gaps. For businesses who've decided the DIY approach has run out of road, our [managed IT support](/managed-it-support) page is the best starting point for how a proper arrangement would look. Either way, the goal is the same: fewer surprises, shorter incidents, and a business that keeps running on the bad Tuesdays.
