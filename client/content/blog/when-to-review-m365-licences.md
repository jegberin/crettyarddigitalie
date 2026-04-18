---
slug: when-to-review-m365-licences
title: "When to review Microsoft 365 licences and permissions"
description: "Why an Irish SME should review Microsoft 365 licences and permissions every quarter, what to look for, and how to trim waste without breaking anything."
date: 2026-01-05
tags:
  - Microsoft 365
  - Cost Control
  - Small Business
author: Joey
coverImage: /blog/images/when-to-review-m365-licences.jpg
coverImageAlt: "A calculator, spreadsheet, and pen on a desk in an office"
draft: false
---

# When to review Microsoft 365 licences and permissions

Microsoft 365 is one of those bills that grows quietly. Someone starts, a licence gets added. Someone leaves, the mailbox is kept "just in case" and the licence stays active. A pilot of Business Premium rolls out to a team of five, it never gets reviewed, and three years later every staff member is on Premium even though most of them only use email.

A quarterly licence and permissions review keeps costs sensible and security tight. This post walks through what to look at, what to fix, and how to avoid the common mistakes that turn a tidy-up into a support ticket.

## What a licence review covers

There are four separate things that usually get lumped together. It helps to see them as separate steps.

1. **Licence count** — are you paying for more seats than you have users?
2. **Licence tier** — is every user on the right plan for what they actually use?
3. **Leaver handling** — are ex-staff accounts properly shut down?
4. **Permissions** — does each user have only what they need, no more?

Each of these can be done in an afternoon. Combined, they usually reveal several hundred or thousand euro of wasted spend and a couple of security improvements.

## Licence count

The simplest check. In the Microsoft 365 admin centre, pull up the Billing > Your products view. For each product, compare assigned licences to purchased licences. Any gap is money you are paying for unused seats.

Purchased seats you do not need can be reduced at the next billing cycle (or sooner if you bought monthly). Annual commitments sometimes limit how quickly you can drop licences — worth knowing before you panic-cut.

The other direction also matters: if you have unassigned spare licences sitting around, at least assign them to new starters before adding more.

## Licence tier

The more impactful check. Microsoft's licence matrix for small businesses looks like this in practice:

- **Business Basic** — cloud apps, email, Teams, OneDrive. No desktop Office. Roughly €6 per user per month at current list prices in Ireland.
- **Business Standard** — everything in Basic plus desktop Office apps. Around €12.
- **Business Premium** — everything in Standard plus Defender for Business, Intune (Microsoft's device-management tool for laptops and phones), conditional access (rules that decide who can sign in, from where, and under what conditions), Azure AD Premium P1 (the licence tier that unlocks those identity features). Around €22.
- **Apps for business** — desktop Office only, no email. Around €9.
- **Frontline (F1, F3)** — lightweight licences for shift workers. Lower cost, reduced features.

(Figures are indicative and move over time — check Microsoft's current pricing for exact numbers.)

For each user, ask: what do they actually use? The tests:

- **Are they on Premium but never use Defender, Intune, or desktop security features?** You may be able to move them to Standard, though you lose the security controls too.
- **Are they on Standard but only use email and the browser version of Office?** Basic may cover them.
- **Are they a shared counter staff / floor worker / receptionist who needs email access but no desktop Office?** A Frontline licence may be much cheaper.
- **Are they a contractor who needs access for three months?** Do not buy a long-term licence for a short-term role.

The mistake to avoid is downgrading security users. Admins, finance staff, and anyone with access to sensitive data should stay on Premium — the extra security features are where the value lives. The right-sizing is about the non-sensitive roles.

More on the security-driven case for Premium in our [securing Microsoft 365 for a small business](/blog/securing-microsoft-365-small-business) post.

## Leaver handling

The single biggest source of wasted licence spend at Irish SMEs (small and medium-sized businesses). The workflow should be:

1. On the leaving date, block sign-in on the account.
2. Reset the password to a random value.
3. Remove all MFA (multi-factor authentication — the second code or prompt at login) methods and recovery methods.
4. Remove admin roles and group memberships.
5. If the mailbox needs to be retained, convert it to a shared mailbox (an unlicensed mailbox the team can still read from — free) or apply a litigation hold (a setting that preserves the mailbox's contents so nothing can be deleted) on the licensed mailbox for the required period.
6. Reassign the licence to a new user or unassign it.
7. Export OneDrive contents to a named folder owned by the leaver's manager.

Most of this can be automated, but the key is the commitment to do it every time. A quarterly review catches anything that slipped through.

**A note on shared mailboxes.** In Microsoft 365, a shared mailbox of up to 50 GB does not need a licence. This is the right place to send ex-staff mailboxes where the business still needs the history. If the mailbox grows beyond 50 GB, or you need litigation hold, you do need a licence — usually Exchange Online Plan 2.

## Permissions

The security side of the review. Walk through:

**Global admins.** There should be two, maybe three. Any more is a target surface you do not need. Assign narrower roles (User Administrator, Exchange Administrator, SharePoint Administrator) for people who need partial admin access.

**Other admin roles.** Anyone with Exchange, SharePoint, Teams, or security admin roles — is it still needed? Do they still work here?

**Shared mailbox access.** Shared mailboxes often accumulate historical "full access" permissions. Someone got access to a sales inbox three years ago; they have since changed teams; the access was never revoked. Review the access list.

**SharePoint site permissions.** Site owners and "everyone with the link" historical shares. The Site > Site contents > Who has access lets you audit each site. Any one-off external shares that should have expired, revoke.

**Applications and service principals.** Third-party apps that were granted consent on behalf of the tenant. Review them, remove anything unrecognised. This is the path into consent phishing compromises.

**Distribution lists and Teams.** People on lists they should not be on. Teams channels with external members from last year.

This half of the review takes longer than the licence half but is where the security value lives.

## A simple cadence

For a small business the cadence that usually works:

- **Monthly:** block sign-in for leavers, reassign licences. This is done as part of normal HR handover, not a separate exercise.
- **Quarterly:** full review of all four areas above. Takes a couple of hours. Output is a short written summary.
- **Annually:** a deeper review that also looks at tier-by-tier costs, feature usage analytics, and whether the licence mix still fits the business.

For an owner who does not want to run this themselves, it is exactly the kind of work a managed IT provider should do quietly in the background. It is part of what we include in [managed IT support](/managed-it-support).

## Common mistakes to avoid

A few that catch people:

**Removing a licence from a mailbox that still has mail.** If you unassign a licence without converting the mailbox to shared first, the mailbox can be deleted after a grace period, taking the email history with it. Always convert before unassigning.

**Deleting a user too fast.** When a staff member leaves, keep the account in disabled state for 30 to 90 days before deletion. That covers any forgotten services or forwarded emails that need recovery.

**Changing licences at renewal without checking what breaks.** Some features are tied to specific SKUs (specific product codes — different licence bundles) in non-obvious ways. Test on a non-critical user first.

**Downgrading a Premium user who uses Intune.** If Intune-managed devices lose their licence, the policies stop applying. Confirm nothing will break.

## Documentation matters

Keep a short spreadsheet — user, licence, role, date of last change, notes. It does not need to be fancy. It lets you do the next review faster and gives you a paper trail for audit purposes.

If you already have a spreadsheet from the last review, this quarter's is just a diff. Five minutes per user on the first pass; less each time thereafter.

## A short and useful habit

A licence and permissions review is the kind of work that is never urgent, which is why it does not happen, which is why it costs money. A quarterly slot in the diary solves the whole problem. If you have never done one, the first pass usually pays for itself many times over.

If you would rather have someone come in and run it with you once, we do short licence and permissions reviews as a stand-alone engagement — have a look at our [Microsoft 365](/microsoft-365) page or send a line via [contact](/contact) to pick a time. No obligation.
