---
slug: sharepoint-onedrive-teams-explained
title: "SharePoint, OneDrive, Teams — what each one is actually for"
description: "A plain-English guide to when to use SharePoint, OneDrive, and Teams in a small business Microsoft 365 tenant — and how to stop files ending up in the wrong place."
date: 2026-03-30
tags:
  - Microsoft 365
  - SharePoint
  - Collaboration
author: Joey
coverImage: /blog/images/sharepoint-onedrive-teams-explained.jpg
coverImageAlt: "Overhead view of four colleagues working on laptops and documents at a shared desk"
draft: false
---

# SharePoint, OneDrive, Teams — what each one is actually for

One of the most common questions I get from small business owners on Microsoft 365 is some version of: "Should this go in OneDrive or SharePoint? And why does it also show up in Teams?" The confusion is reasonable — Microsoft ships three tools that all look a bit like file storage, and the marketing treats them as if they're the same thing.

They're not. Each one does a specific job, and when staff understand which tool is for which purpose, a lot of small-file-management chaos goes away. Here's how I explain it, minus the Microsoft jargon.

## The short version

- **OneDrive** is your personal filing cabinet. One person's working files, draft documents, private folders.
- **SharePoint** is the business's filing cabinet. Shared company documents, project files, policies, finished work.
- **Teams** is a room you talk in. Chat, meetings, and a view of the relevant SharePoint files — not a separate storage system.

If a member of staff is ever unsure where to save something, ask: "Would it matter if I got hit by a bus tomorrow?" If yes, it belongs in SharePoint. If no, OneDrive is fine.

## OneDrive in detail

OneDrive is one person's private cloud storage. Every licensed M365 user gets 1TB by default — plenty for most staff. Files you save there are yours, backed up to the cloud, and available on any signed-in device. You can share individual files with colleagues, but the default is private.

Good uses:

- Draft documents before they're ready to share
- Personal working copies — CVs, personal notes, training materials
- Anything you're mid-way through and don't want colleagues editing yet

Bad uses:

- Files the rest of the team needs
- Final versions of documents your business relies on
- Anything a client is paying for

The trap: when a staff member leaves, their OneDrive goes with them. If the invoice template for the last three years lives in Sarah's OneDrive and Sarah is moving to Australia, you have a problem. When Sarah's account is deleted, you get 30 days (by default) to recover anything — and then it's gone.

Fix this by making SharePoint the default for work files, and by running a proper [offboarding process](/microsoft-365) every time someone leaves, which reassigns OneDrive contents to a manager before the licence is deleted.

## SharePoint in detail

SharePoint is where the business keeps its shared documents. In practice, most SMEs end up with one SharePoint site per area of the business — Finance, HR, Sales, Operations — plus a site for each significant project or client, depending on how you work.

Each SharePoint site has:

- **Document libraries** — folders for files, with version history turned on automatically
- **Permissions** — you control who in the business can see which site, and what they can do in it
- **A team associated with it** (if you want one in Teams)

The single biggest win from using SharePoint properly is version history. Every time someone edits a document, the previous version is kept. If Tom overwrites the contract template at 4pm with something unusable, you can restore the morning's version in two clicks. OneDrive has the same feature; most staff just don't know to look.

The second-biggest win is permissions. SharePoint lets you say "only the finance team can see the finance site." Not a shared drive with everything visible to everyone, which is how most SMEs end up with data nobody should really see.

A small warning about SharePoint: sensibly structured, it's excellent. Carelessly structured, it becomes an unmanageable sprawl of sites, each with different permissions, overlapping content, and files nobody remembers putting there. A few hours of thought up front — what sites, what libraries, what permissions — pays back many times over.

## Teams in detail

Teams looks like a file storage system. It isn't. Teams is a communication app that shows you SharePoint files in a convenient way.

Specifically:

- Every "channel" you create in Teams has a folder behind the scenes in SharePoint
- The "Files" tab inside a channel is a view into that folder
- Chats and meetings are separate, but they can attach files that also live in SharePoint

This matters for two reasons.

First, if you rename, move, or reorganise a channel, you're also moving the underlying SharePoint folder — which can break links that people have saved. Make changes in the first few weeks; leave them alone after that.

Second, the files you send in a Teams **chat** (not a channel) live in your OneDrive, not in a shared space. If the chat group disbands or someone leaves, the files can disappear too. For anything the business needs to keep, push it into a channel, or attach it to a SharePoint document, not a chat.

## "Should this go in Teams or SharePoint?"

This is the wrong question. Everything lives in SharePoint. The real question is: "Is this something the team talks about regularly?"

- **Yes** → create a Teams channel for the topic. The files will live in SharePoint under the channel.
- **No** → just use SharePoint directly, no Teams channel needed.

A project that has daily discussions, meetings, and shared files is a natural fit for Teams. A reference library of company policies doesn't need a channel — people look it up, they don't chat about it daily.

## Common patterns that cause trouble

A handful of patterns cause most of the file-chaos I see in Irish SMEs:

### Everything in OneDrive

The classic symptom: the director's OneDrive has three years of business documents in it, shared out to staff individually, with sharing links that broke twice this year. When anyone leaves, links go dark. Nobody can find last year's proposal. Move the shared content into SharePoint sites; it's a day's work and it stops this problem recurring.

### A single "shared drive" for the whole business

Some businesses replicate their old on-premises file server in a single SharePoint library, with no permissions and every staff member as an owner. That works, in the same way driving without a seatbelt works. Fine until it isn't. Split into per-department sites, with permissions that reflect the actual business.

### Teams channels for everything

Twenty channels, fifteen of them with zero activity, all with their own SharePoint folder. Staff don't know where to look. Pick the half-dozen channels that reflect how you actually work and leave the rest.

### Files attached in chat

"I'll just DM you the contract." Then the DM stays as the source of truth, the contract gets amended by someone else, and there are two parallel versions floating around. Send a link to SharePoint instead of uploading the file to chat. It's one click more and it saves an entire category of problems.

## What "good" looks like for an Irish SME

A workable setup for a ten-to-twenty-person Irish business usually looks like this:

- A small number of SharePoint sites that reflect your departments or key functions
- Document libraries inside each site, with version history on, and sensible folder structure
- Teams channels only for the handful of areas where the team genuinely needs to chat every day
- OneDrive used for personal working files and nothing the business depends on
- Permissions actually set — not every site shared with every user
- A simple one-page document telling staff where to put what

That last one is the most useful artefact in the whole setup. A simple rule sheet ("contracts go here; sales collateral goes here; HR goes here") does more for adoption than any amount of training.

## If you want help getting it right

Setting up SharePoint properly from day one is much cheaper than untangling it two years later. If you're [starting a new M365 tenant](/microsoft-365-setup-ireland), or you've inherited one that grew without a plan, a short discovery call can usually map the path forward in under an hour.

You can read how we approach Microsoft 365 on our [services page](/microsoft-365), or get in touch through [contact](/contact) for a free review. And if your team is about to hire or onboard — that's the moment the current setup gets tested. Worth sorting first.
