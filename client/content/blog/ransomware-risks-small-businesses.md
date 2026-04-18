---
slug: ransomware-risks-small-businesses
title: "Ransomware risks for small businesses — a practical guide"
description: "How ransomware actually reaches Irish SMEs, what a typical incident looks like, and the handful of controls that make the biggest difference."
date: 2026-04-06
tags:
  - Cybersecurity
  - Ransomware
  - Small Business
author: Joey
coverImage: /blog/images/ransomware-risks-small-businesses.jpg
coverImageAlt: "A close-up of hands on a laptop keyboard in a dim office"
draft: false
---

# Ransomware risks for small businesses — a practical guide

Ransomware is often described as the nightmare scenario for a small business, which is accurate, but the framing can make it feel distant — something that happens to hospitals and councils, not a five-person firm in Laois. The reality is that the ransomware economy has been working its way down the size scale for years. Small Irish businesses are now squarely inside the target range.

This post is about what ransomware actually looks like when it reaches an SME, the path it usually takes to get there, and the short list of controls that would stop most of the incidents I have seen.

## What ransomware actually does

The mental picture most owners have is a red skull on every monitor and a timer counting down. That still happens. But most modern ransomware is quieter and more strategic.

After the attackers get in — usually through a stolen password, an exposed remote desktop, or a phishing email with a malicious document — they spend days or weeks inside the network. They map what is there, find the backups, copy out the sensitive data they think is valuable, and only then encrypt everything.

The ransom demand is then two-pronged. Pay us to decrypt your files, and pay us again to stop us publishing the data we took. This is called double extortion. For an Irish SME with client data, payroll records, or commercially sensitive documents, the second threat is often the sharper one.

## How it reaches a small business

The entry points are unglamorous. None of them are new. All of them are still working.

**Phishing emails with attachments.** A Word document or PDF that asks the user to "enable content" or click a link. Behind the click is a malware downloader that quietly establishes a foothold. This is still the most common initial access vector seen at SMEs.

**Stolen passwords reused across services.** A staff member used the same password on a personal site that got breached. The credential list ended up on a criminal forum. An attacker tried the same password against your Microsoft 365 tenant (your organisation's private slice of Microsoft's cloud) and it worked.

**Exposed remote desktop.** Someone set up RDP (Remote Desktop Protocol — Windows' built-in way to control a PC from elsewhere) to the office PC during lockdown, opened port 3389 on the router, and forgot. Scanners find these within hours. Once inside, the attacker has the same access the staff member has.

**Unpatched edge devices.** A firewall or VPN (virtual private network — an encrypted tunnel into the office) appliance with a known vulnerability that was not updated. These make the news every few months — enterprise brands you would recognise. Small firms are rarely the named victim, but they get caught in the same sweeps.

**Managed service provider compromise.** If your IT provider is breached, their tooling — remote monitoring agents, management consoles — becomes the attacker's tooling. This is part of why you should ask your provider what their own security posture looks like.

## A typical SME incident

The pattern I see is fairly consistent.

A Friday afternoon, usually — attackers prefer weekends because nobody is watching. Staff log in on Monday morning. Files will not open. Shared drives show encrypted filenames with a strange extension. The server sits idle. There is a text file on every desktop with payment instructions in broken English.

The next few hours are disorientating. Owners reach for backups, find they have not been tested in two years, and discover the backup server was on the same network and is also encrypted. Someone tries to reach the IT provider; there is no out-of-hours contract. Clients start asking why emails are bouncing.

From that point it is a two-week project at minimum. Rebuilding servers, restoring what can be restored, notifying clients, reporting to the Data Protection Commission if personal data was taken, and explaining the outage to insurers. Most small firms that recover do so. Some do not.

## What actually prevents it

There is no single silver bullet, but the controls below account for the vast majority of prevented incidents at the small-business end of the market. None of them require enterprise budgets.

**Multi-factor authentication on every account.** Every email account, every remote access, every admin login. MFA (that second code on your phone when you log in) alone neutralises the password-reuse attack path and makes most phishing campaigns unprofitable. See more on this in the [cost of weak passwords and MFA practices](/blog/cost-of-weak-passwords-mfa) post.

**Patched operating systems and edge devices.** Windows update cannot sit at "deferred" forever. Firewalls, routers, and VPN appliances all need regular firmware updates. A care plan or managed agreement should make this automatic.

**Offline or immutable backups.** The single most important ransomware control. If your backup can be deleted by the same admin account the attacker stole, it will be. You want at least one copy that is offline, or in cloud storage with object lock / immutability enabled, tested quarterly.

**Endpoint detection and response.** Traditional antivirus is not enough. Modern endpoint tools — Microsoft Defender for Business, for example — watch for suspicious behaviour as well as known signatures. They catch the quiet reconnaissance phase before encryption starts.

**Email filtering tuned for the current threat.** Good filters strip macro-laden attachments and unknown file types, rewrite links so they are checked at click time, and flag external senders. Microsoft 365 has most of this; it just needs to be turned on.

**Segmented network.** Not every device needs to see every other device. Separating the CCTV and guest Wi-Fi from the business network is free once the router supports it. It limits the blast radius when something does go wrong.

**A documented incident plan.** Not a binder. A one-page sheet with: who to call first, where the backup copies live, how to isolate a machine, and how to contact clients if email is down. Run a dry run once a year.

## Cyber insurance — read the policy

More SMEs are buying cyber cover, which is sensible. Two things to be aware of.

First, insurers now require specific controls — MFA, EDR (endpoint detection and response — the modern replacement for antivirus), tested backups — as a condition of cover. If those controls are not in place when you make a claim, the claim can be refused. Going through the underwriter's questionnaire honestly is a cheap way to audit your own setup.

Second, cover is about financial loss, not prevention. A policy does not stop the attack; it helps with the clean-up bill. Treat it as the seatbelt, not the brakes.

## What to do if it happens

If you walk in and something looks wrong, three actions in order:

1. **Disconnect, do not shut down.** Pull the network cable or switch off Wi-Fi on affected machines. Leave them powered on so forensic evidence is preserved.
2. **Call your IT provider or incident responder.** The earlier you bring in someone who has handled ransomware before, the better the outcome. If your provider does not handle incidents, ask them who they refer to.
3. **Report it.** The Garda National Cyber Crime Bureau (GNCCB) and the NCSC Ireland (National Cyber Security Centre — the state body for cyber incidents) both take reports. If personal data is involved, the Data Protection Commission has a 72-hour notification window under GDPR (General Data Protection Regulation — the EU data protection law).

Do not pay the ransom impulsively. There are cases where payment is the only realistic option, but that call should be made with legal and insurer input, not by the owner at 8pm in a panic.

## How Crettyard Digital approaches this

Every engagement starts with the basics. MFA everywhere. Patching on a schedule. Offline backups tested quarterly. Endpoint protection. Email filtering tuned. Short staff training twice a year. It is not glamorous, and that is the point — ransomware resilience is overwhelmingly about doing boring things well.

If you want a short, honest review of where your business sits, have a look at the [cybersecurity](/cybersecurity) service page or get in touch via [contact](/contact). A 30-minute conversation usually tells us — and you — whether there is real risk to address or whether the basics are already covered.
