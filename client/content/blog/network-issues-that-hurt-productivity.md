---
slug: network-issues-that-hurt-productivity
title: "Network issues that quietly hurt SME productivity"
description: "The everyday network problems that cost Irish small businesses real time and money — slow Wi-Fi, flaky VPNs, overloaded switches — and how to fix them."
date: 2026-02-02
tags:
  - Network
  - Productivity
  - Small Business
author: Joey
coverImage: /blog/images/network-issues-that-hurt-productivity.jpg
coverImageAlt: "A network switch panel mounted in a wall cabinet with neat patch cables"
draft: false
---

# Network issues that quietly hurt SME productivity

Most Irish small businesses accept a level of network friction as normal. Teams calls drop at the same point in the office every afternoon. The Wi-Fi "always goes weird when the accounts team are on" a particular task. The VPN fails for remote staff on Thursday mornings and nobody knows why. Each individual incident is small enough to shrug off. Stacked up across twenty people over a year, they cost real money.

This post is about the common network issues I see in SMEs and what actually fixes them. Not a deep dive. A short catalogue so you can recognise what is going on in your own office.

## Consumer-grade Wi-Fi in a business setting

The single most common problem. An office that started small had a domestic Wi-Fi router plugged in, worked fine for three people, and then scaled up. Now there are twenty devices, a few laptops that should be on cable but are on Wi-Fi anyway, CCTV, printers, and guest traffic — all competing on one overloaded access point.

The symptoms: random slowdowns, patchy coverage, disconnects during video calls, speeds that feel fine in the morning and slow by mid-afternoon. The cause is often simple — the router is at capacity, or the radio channels are overlapping with neighbours, or it is not placed where the coverage is needed.

The fix is a proper small-business Wi-Fi solution: two or three business-grade access points placed around the office, connected by cable, with separate networks for staff, guests, and IoT devices (CCTV, printers, thermostats). Our [signs office Wi-Fi needs a review](/blog/signs-office-wifi-needs-review) post has the longer version.

## Single overloaded switch

Your network runs through a switch — the box with the blinking lights in the server cupboard. Small offices often have one small switch and a lot of devices plugged into it, sometimes via a chain of smaller switches bought over the years as desks were added.

This shows up as intermittent speed issues, packet loss that degrades voice calls, and strange Windows networking errors that come and go. A small business switch costs much less than the hours it eats. The fix is to standardise on one decent managed switch with enough ports, tidy the cabling, and decommission the daisy-chain.

## No separation between staff and guest traffic

If guest Wi-Fi is on the same network as the office, two bad things happen. First, guest devices can, in principle, reach business resources — printers, file shares, even the server in the corner. Second, the guest traffic competes with business traffic, so one cousin's holiday photos upload crashes the office video call.

Segmentation is free once the kit supports it. A guest SSID on its own VLAN, with no route to the internal network, solves both problems. If the router does not support VLANs, it is time to upgrade.

## Ageing firewall with outdated firmware

Many SMEs have a firewall that was installed four or five years ago and has not been updated since. Firewalls need firmware updates like any other device; the vendors release security patches continuously, and the gap between release and install is where attackers live.

On top of security, old firewall hardware eventually runs out of capacity. A device sized for a five-person office in 2019 struggles with 15 users in 2026, especially once VPN and inspection features are doing real work. Symptoms include slower throughput than your broadband can deliver, random disconnects, and crashes that clear when you power-cycle the firewall.

A firmware check is the cheapest action; a replacement is the honest fix if the device is past its supported life.

## Broadband chosen on price alone

The cheapest broadband is rarely the right answer for a business. What matters is:

- **Upload speed.** Lots of cheap broadband is asymmetric — 500 Mbps down, 40 Mbps up. For a modern office with cloud backup, video calls, and staff using Teams, upload is the bottleneck that shows first.
- **Latency.** A fibre connection with consistent 10 ms latency to Dublin is a different experience from a connection averaging 40 ms with spikes to 200. Voice and video calls are very sensitive.
- **Service level.** Business-grade broadband typically comes with a support SLA and a static IP. Residential broadband does not.
- **Redundancy.** If broadband going down for a day is a material problem, you want a backup — a second provider, a 4G/5G failover, or a separate line.

For an SME that depends on its network, a business-grade connection with an SLA is worth the extra spend. It is usually a modest jump from a residential-grade deal and pays back the first time the internet drops at 9am on a Monday.

## VPNs that were never set up for the number of users now using them

Lockdown-era VPNs are a common problem. The business rolled out remote access quickly in 2020, the configuration has not been touched since, and now there are twice as many users and different working patterns. Symptoms include staff unable to connect at peak hours, slow transfers through the VPN, and constant reconnection prompts.

Modern alternatives are usually better for the average SME. For cloud-based work, a properly configured M365 tenant with conditional access removes most of the reason for a VPN in the first place. For legacy on-prem applications, a well-configured VPN is still the right tool — but it needs a review, a licence count, and modern authentication rather than a shared password.

## Printers on Wi-Fi, trying their best

Printers are the quiet disaster of small-office networking. They drop off the network, refuse to pair with new laptops, get rediscovered by Windows under a different name each quarter, and generate more support tickets per device than almost anything else.

Two fixes. First, give printers a wired connection where you can — Wi-Fi printers are a compromise that should only be made when cable runs are impossible. Second, put them on a reserved IP address via DHCP, so the printer stays findable at the same address rather than moving around.

## DNS pointing at random public resolvers

The default DNS server on a small business network is often whichever resolver the broadband router picked up — or Google's 8.8.8.8, which somebody set years ago. That is not a disaster, but it is a missed opportunity.

Business-grade DNS services like Quad9, Cloudflare for Teams, or Microsoft's DNS with web content filtering provide a useful layer of protection — blocking known phishing and malware domains before any click can connect. These are inexpensive or free and take a short configuration change on the firewall to roll out. Our [cybersecurity](/cybersecurity) page covers this as part of a wider baseline.

## No documentation of how anything is set up

A subtle one that costs real money the day you need it. Many SME networks exist entirely in the head of the technician who set them up four years ago and has since moved jobs. When something breaks, the first three hours are spent rediscovering the setup.

Basic documentation is not a consulting project. A one-page diagram showing what connects to what, a list of device admin passwords stored in a password manager, and a short note on which SSIDs mean what. Ask your IT provider for this; if they cannot produce it, that is a sign to ask some questions.

## How to tell whether your network is the problem

Three cheap checks you can do yourself:

1. **Run a speed test on the wired connection near the router.** If you do not get close to your advertised speed, the issue is upstream or in the router. If you do, the issue is downstream — Wi-Fi, switch, or endpoint.
2. **Walk the office with the Wi-Fi analyser on your phone.** Note signal strength in each room, then the same for any neighbour networks on overlapping channels.
3. **Ask staff for three specific frustrations.** Not "the internet is slow." Ask when, where, doing what. Patterns emerge fast.

If those three turn up problems, you probably do have a network issue worth fixing. If they do not, the frustrations are elsewhere — endpoints, software, or the internet provider.

## A quick review is usually enough

Most SME network problems are not catastrophic failures; they are years of small compromises adding up. A half-day review by someone who does this for a living will usually tell you exactly where the friction is coming from and what the three or four highest-value fixes would be.

That is what we do as part of our [network and Wi-Fi security](/network-wifi-security) service, and as a stand-alone review. If you want a look at yours, drop a line via [contact](/contact) and we will take a morning to go through it. No obligation.
