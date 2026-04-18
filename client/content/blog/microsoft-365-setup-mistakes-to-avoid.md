---
slug: microsoft-365-setup-mistakes-to-avoid
title: "Microsoft 365 setup mistakes to avoid — an SME field guide"
description: "The configuration mistakes that cost small businesses the most time and money after a Microsoft 365 rollout, and how to spot them before they bite."
date: 2026-03-30
tags:
  - Microsoft 365
  - Small Business
  - Cybersecurity
author: Joey
coverImage: /blog/images/microsoft-365-setup-mistakes-to-avoid.jpg
coverImageAlt: "A small team working around a shared laptop in a bright office"
draft: false
---

# Microsoft 365 setup mistakes to avoid — an SME field guide

Microsoft 365 is genuinely the best productivity stack most small businesses will ever own. It is also deceptively easy to set up badly — so badly that you might only notice the damage a year later when a staff member leaves with full access to SharePoint (Microsoft's shared document library), or an audit turns up 30 licences that nobody has used in six months.

These are the setup mistakes I find most often on M365 (Microsoft 365) tenants (the Microsoft 365 environment that holds your users, mail, and files) we take over in Ireland. None of them are technically complicated. All of them are cheap to fix before they turn into problems.

## Mistake 1: Signing up with a personal Microsoft account

A classic early-stage mistake. The owner creates the tenant, logs in with their personal hotmail or gmail, and suddenly the whole business sits under a consumer identity that cannot be transferred cleanly later. Licences, billing, and admin rights end up tied to an individual rather than the business.

The fix is to create a dedicated global admin account on your own domain — something like `admin@yourfirm.ie` — with a unique, long password and MFA enforced. Use it only for admin tasks, never day-to-day email. If you already made this mistake, it can be unwound, but it is annoying. (MFA is multi-factor authentication — the second code or phone prompt you approve when logging in.)

## Mistake 2: Skipping MFA "just for now"

MFA is the single most important control on a Microsoft 365 tenant. Every credible threat actor targeting SMEs (small and medium-sized businesses) relies on the majority of mailboxes still having MFA off. Turning it on is free, takes five minutes per user, and blocks the overwhelming share of credential-theft attacks.

Microsoft's security defaults enable MFA automatically on new tenants, but older tenants and those with conditional access licensing can have it disabled or partially applied. Check every user. No exceptions for the owner. No "temporary" exclusions for old finance laptops.

## Mistake 3: Leaving legacy authentication enabled

Even with MFA on, the old authentication protocols — IMAP, POP, SMTP AUTH, basic auth (the old mail protocols used by older email clients to send and receive mail) — bypass it entirely. If someone has your password and legacy auth is still allowed, they are in.

Microsoft has been retiring basic auth across Exchange Online for several years, but some tenants still have exceptions for old line-of-business applications. Find them, migrate or retire them, and disable legacy auth tenant-wide.

## Mistake 4: Buying the wrong licences

Microsoft 365 Business Basic, Business Standard, and Business Premium look similar on the pricing page. They are not similar in what they protect.

- **Business Basic** — cloud apps only, no desktop Office, no Defender.
- **Business Standard** — adds desktop Office apps.
- **Business Premium** — adds Defender for Business, Intune (Microsoft's device-management tool for laptops and phones), conditional access (rules that decide who can sign in, from where, and under what conditions), Azure AD Premium P1 (the licence tier that unlocks those identity features).

Most Irish SMEs I see are on Standard and would be significantly better off on Premium, because Premium is where the security features live. The price difference is modest on a per-user per-month basis, and a single prevented phishing incident pays for it many times over.

On the other side, some firms buy Premium for every user including a retail counter staff member who only needs a shared email — a Frontline (F1/F3) licence would save real money. A quick licence review usually finds at least one category of user on the wrong plan. More on how to do this in our [staff onboarding with Microsoft 365](/blog/staff-onboarding-microsoft-365) post.

## Mistake 5: Not configuring SPF, DKIM, and DMARC

Your domain's DNS records (the settings that tell the internet where your domain lives) are how the rest of the internet decides whether a given email from `yourfirm.ie` is really from you. If SPF, DKIM, and DMARC (three email authentication records that together prove a message really came from you) are not configured properly, three things happen:

- Your own emails start landing in spam at other organisations.
- Attackers can forge emails that look exactly like yours.
- Microsoft's newer delivery policies may throttle or reject your outgoing mail.

These are DNS changes. They take an hour to do right, and Microsoft publishes clear guidance on each. A DMARC policy at `p=reject` after a short monitoring period is the standard a serious SME should aim for.

## Mistake 6: Using the default sharing settings on SharePoint and OneDrive

By default, SharePoint and OneDrive allow users to share anything with anyone, including anonymous "anyone with the link" links that never expire. For most SMEs this is over-permissive.

Sensible defaults for a small business look like:

- External sharing limited to specific domains, or requiring guest accounts.
- Anonymous links disabled, or at least time-limited and read-only.
- A default link type of "People in your organisation".

The settings are in the SharePoint admin centre. Changing them takes ten minutes and prevents the slow data leakage you get when "send a quick link" becomes the default workflow.

## Mistake 7: Not restricting third-party app consent

When a user clicks "Accept" on a third-party app asking for access to their mailbox or OneDrive, by default that consent is granted immediately — no admin review. This is the mechanism behind consent phishing attacks, where the target is tricked into authorising a malicious app rather than typing their password.

The fix is to require admin consent for apps requesting permissions beyond a short, safe allow-list. This is a one-time tenant setting and does not inconvenience users for normal, well-known apps.

## Mistake 8: No retention or deletion policy

Out of the box, Microsoft 365 keeps emails and files until a user deletes them. That sounds fine until a staff member leaves, a mailbox gets compromised, or a GDPR (the EU data-protection law) request arrives. Then you need to know what you keep, for how long, and what you delete.

A practical SME retention policy might say: email kept for seven years, SharePoint documents kept indefinitely, deleted items recoverable for 30 days. Whatever the specifics, the point is that you have written them down and configured them in the compliance centre. Without a policy you get the worst of both worlds — data hoarded forever, and no reliable answer if someone asks what you deleted.

## Mistake 9: Leaving ex-staff licensed

An almost universal waste. Someone leaves; their mailbox needs to be kept for a while; nobody wants to risk deleting it; the licence stays active. Six months later the business is paying for a mailbox nobody has opened.

The proper workflow is to convert the leaver's mailbox to a shared mailbox (an unlicensed mailbox the team can still read from) or apply a litigation hold (a setting that preserves a mailbox's contents so nothing can be deleted), then reassign the licence. If you do this consistently, licence spend stays flat as headcount changes. Our [when to review M365 licences](/blog/when-to-review-m365-licences) post walks through a quarterly review process.

## Mistake 10: Never looking at the audit log

Microsoft 365 records an enormous amount of activity — sign-ins, file access, admin changes, mailbox rules. Most tenants never read these logs until something goes wrong, at which point the window for useful data may have passed.

At a minimum, set up alerts for: high-risk sign-ins, new forwarding rules on mailboxes, external sharing of sensitive content, and global admin role changes. The alerts can email you or route into Teams. You are unlikely to get more than a handful a month, and the ones that do come in are worth reading.

## How to tell whether your setup has these problems

A short audit is usually enough. Walk through the admin centre, check each of the items above, and note where you are off the mark. Microsoft's own Secure Score (a built-in 0-100 scorecard of how well-locked-down your tenant is) gives a decent summary, though it tends to over-recommend features that are not relevant to small businesses.

If you would rather have a second pair of eyes, our [Microsoft 365 setup in Ireland](/microsoft-365-setup-ireland) service is designed exactly for this — a no-nonsense review of how your tenant is configured, with a prioritised list of what to change.

## A small, repeatable first step

If you read nothing else, do this tomorrow morning: sign into the Microsoft 365 admin centre, look at the list of users, and check three things. Does everyone have MFA on? Is there anyone still listed who has left? Are there any admins who should not be?

Those three answers, correct, move you ahead of the majority of Irish SMEs I audit. The rest can follow at a sensible pace. If you want help with any of it, start with [contact](/contact) and we will take a look together.
