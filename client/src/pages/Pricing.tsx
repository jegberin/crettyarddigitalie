import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, BadgeEuro, MonitorSmartphone, Cloud, ServerCog, Wifi, Shield, Phone, BrainCircuit } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";
import { FragmentedVsIntegrated } from "@/components/FragmentedVsIntegrated";

const m365Plans = [
  {
    icon: Cloud,
    name: "Microsoft 365 Standard",
    price: "€17.50",
    unit: "per user / month",
    tagline: "Email, files, Teams, OneDrive, SharePoint — set up properly, administered forever.",
    items: [
      "Microsoft 365 Business Standard licence (full Office desktop apps, Outlook, Teams, OneDrive, SharePoint)",
      "Tenant configuration with EU data residency",
      "MFA enforced by default on every account",
      "GDPR-compliant setup and retention policies",
      "Ongoing user administration (joiners, movers, leavers, password resets, licence management)",
      "Microsoft Entra ID identity, security monitoring",
      "No setup fee",
    ],
    popular: false,
  },
  {
    icon: Phone,
    name: "Microsoft 365 with Business Phone",
    price: "€42.50",
    unit: "per user / month",
    tagline: "Everything in Standard, plus a proper business phone that works from any device.",
    items: [
      "Everything in Microsoft 365 Standard",
      "Microsoft Teams Phone with calling plan",
      "A real business number — works from mobile, laptop, or desk phone",
      "Voicemail-to-email, call routing, auto-attendants",
      "Replaces traditional landlines and the personal-mobile-given-to-clients problem",
      "No setup fee",
    ],
    popular: true,
  },
];

const itTiers = [
  {
    name: "Managed IT Standard",
    price: "€65",
    unit: "per user / month",
    target: "Most small Irish businesses (1–20 staff) who want their IT looked after properly without the corporate price tag.",
    items: [
      "Proactive monitoring of devices and Microsoft 365",
      "Patch management",
      "Microsoft Defender endpoint security",
      "MFA enforcement",
      "Cloud backup with tested recovery",
      "M365 user administration (joiners, movers, leavers)",
      "Remote support via Zoho Assist Enterprise",
      "Direct access to Joey for any IT issue",
      "Quarterly IT review",
      "Documentation kept current",
    ],
    popular: true,
  },
  {
    name: "Managed IT — Compliance Plus",
    price: "€95",
    unit: "per user / month",
    target: "Regulated firms (financial, legal, healthcare) and businesses subject to NIS2 supply-chain audits or DORA.",
    items: [
      "Everything in Managed IT Standard",
      "Formal NIS2 readiness documentation",
      "DORA-aligned controls and reporting (where applicable)",
      "Quarterly compliance audits",
      "Staff phishing simulations and cyber awareness training",
      "Supply-chain security questionnaire support",
      "Audit-ready evidence of controls",
    ],
    popular: false,
  },
];

const specialistServices = [
  {
    icon: Wifi,
    title: "Network & Wi-Fi",
    href: "/network-wifi-security",
    desc: "Quoted after a free site review. Network and Wi-Fi pricing depends on the size of the premises, the number of access points, the cabling already in place, and the hardware. A flat list price would be either fictional or unfair.",
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    href: "/cybersecurity",
    desc: "Quoted on request based on framework scope. NIS2, GDPR, DORA, EAA, and the underlying security work each scope differently. A free initial review tells us what you actually need — and what you do not. Most security work for Compliance Plus clients is already included.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Microsoft Copilot",
    href: "/ai-readiness",
    desc: "Quoted on request after a workflow review. Real productivity gains from Copilot depend on which workflows you already have, where the time is being lost, and what data Copilot can safely access. The price is set after the review, not before.",
  },
];

const webDesignPricing = [
  { service: "Starter website (1–3 pages)", price: "From €799 + €49/mo care" },
  { service: "Business website (4–7 pages)", price: "From €1,299 + €49/mo care" },
  { service: "Custom website / redesign", price: "Quoted on scope" },
  { service: "Website Care Plan (Standard)", price: "€49/month" },
  { service: "Website Care Plan (Premium)", price: "€79/month" },
];

export default function Pricing() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-20 md:py-28">
        <GridLines cols={12} rows={8} color="#ffffff" opacity={0.05} />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <FadeIn direction="up">
            <span className="eyebrow mb-4 inline-block">Pricing</span>
            <h1 className="display-sm text-white mb-6">
              Predictable Pricing for Predictable IT.
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mb-8">
              No surprises, no hourly bills, no &ldquo;scope creep&rdquo; invoices at the end of the quarter. Three recurring subscriptions cover the core of what most Irish small businesses need from their IT partner. Three specialist services are quoted on request because the work genuinely depends on your business. And web design stays a fixed-price project, the way it should be.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact#send-message">
                <Button size="lg">Book a Free Consultation</Button>
              </Link>
              <Link href="/how-it-works">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  See How I Work &rarr;
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Five Vendors vs One Trusted Partner */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-5xl">
          <FragmentedVsIntegrated
            eyebrow="Why This Pricing Model"
            heading="One Trusted Partner. One Predictable Bill."
            intro="The case for recurring subscriptions isn't price — it's accountability and cash-flow predictability. Hourly billing breeds surprises. Subscriptions don&rsquo;t."
          />
        </div>
      </section>

      {/* Section 1 — Microsoft 365 */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Microsoft 365</span>
            <h2 className="text-3xl md:text-4xl mb-4">Email, Files, Teams, and (Optionally) a Business Phone</h2>
            <p className="text-foreground max-w-3xl mx-auto font-sans font-normal">
              Most Irish small businesses run Microsoft 365 tenants that were set up by the cheapest available reseller and never touched again. Default tenants are not secure tenants. I set up Microsoft 365 with EU data residency, Microsoft Entra ID, MFA-by-default, the right retention policies, and the right licences &mdash; then administer it for you on an ongoing basis.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {m365Plans.map((plan) => (
              <StaggerItem key={plan.name}>
                <div className={`rounded-2xl p-8 h-full flex flex-col ${plan.popular ? "bg-accent/5 border-2 border-accent relative" : "bg-[#f3f4f5] border border-gray-100"}`}>
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-headline font-bold px-4 py-1 rounded-full">Most Popular</span>
                  )}
                  <div className="flex items-center gap-3 mb-3">
                    <plan.icon className="text-accent shrink-0" size={26} />
                    <h3 className="text-xl">{plan.name}</h3>
                  </div>
                  <p className="text-foreground text-[14px] font-sans mb-5">{plan.tagline}</p>
                  <div className="mb-6">
                    <p className="text-4xl font-headline font-extrabold text-primary">{plan.price}</p>
                    <p className="text-sm text-muted-foreground font-sans">{plan.unit}</p>
                  </div>
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {plan.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-[14px] font-sans text-foreground">
                        <CheckCircle className="text-accent shrink-0 mt-0.5" size={15} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact#send-message" className="flex-1">
                      <Button className="w-full" variant={plan.popular ? "default" : "outline"}>Book a Free Consultation</Button>
                    </Link>
                    <Link href="/microsoft-365" className="flex-1">
                      <Button variant="outline" className="w-full">See Details &rarr;</Button>
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="text-center mt-6">
            <p className="text-xs text-muted-foreground font-sans">Subject to Microsoft licence price changes. Larger migrations (20+ mailboxes from legacy Exchange) may be quoted as a separate one-off project; most are not.</p>
          </FadeIn>
        </div>
      </section>

      {/* Section 2 — Managed IT */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Managed IT Support</span>
            <h2 className="text-3xl md:text-4xl mb-4">Your Outsourced IT Department. One Predictable Monthly Fee.</h2>
            <p className="text-foreground max-w-3xl mx-auto font-sans font-normal">
              A fixed monthly fee. One accountable person. Microsoft 365 administration, endpoint security, compliance management, backup, monitoring, and the boring-but-essential work that stops things breaking. Built on the same standards I learned across Microsoft, Intel and Dell &mdash; applied to Irish small businesses with 1 to 50 staff.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {itTiers.map((tier) => (
              <StaggerItem key={tier.name}>
                <div className={`rounded-2xl p-8 h-full flex flex-col ${tier.popular ? "bg-accent/5 border-2 border-accent relative" : "bg-white border border-gray-100"}`}>
                  {tier.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-headline font-bold px-4 py-1 rounded-full">Most Popular</span>
                  )}
                  <div className="flex items-center gap-3 mb-3">
                    <ServerCog className="text-accent shrink-0" size={26} />
                    <h3 className="text-xl">{tier.name}</h3>
                  </div>
                  <p className="text-foreground text-[14px] font-sans mb-5">{tier.target}</p>
                  <div className="mb-6">
                    <p className="text-4xl font-headline font-extrabold text-primary">{tier.price}</p>
                    <p className="text-sm text-muted-foreground font-sans">{tier.unit}</p>
                  </div>
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {tier.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-[14px] font-sans text-foreground">
                        <CheckCircle className="text-accent shrink-0 mt-0.5" size={15} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact#send-message" className="flex-1">
                      <Button className="w-full" variant={tier.popular ? "default" : "outline"}>Book a Free Consultation</Button>
                    </Link>
                    <Link href="/managed-it-support" className="flex-1">
                      <Button variant="outline" className="w-full">See Details &rarr;</Button>
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="text-center mt-6">
            <p className="text-sm text-foreground font-sans">
              <strong>Monthly rolling.</strong> 30 days&rsquo; notice either side. The exit is documented in writing. Move between Standard and Compliance Plus as your business changes &mdash; no tier-change penalties.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 3 — Specialist services */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Specialist Services</span>
            <h2 className="text-3xl md:text-4xl mb-4">Quoted on Request</h2>
            <p className="text-foreground max-w-3xl mx-auto font-sans font-normal">
              Three areas of work that do not fit a sticker price. A flat list price for any of these would be either fictional or unfair. A short, free review tells us what you actually need.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {specialistServices.map((svc) => (
              <StaggerItem key={svc.title}>
                <Link href={svc.href} className="block bg-[#f3f4f5] p-7 rounded-2xl card-hover h-full" data-testid={`specialist-${svc.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <svc.icon className="text-accent shrink-0" size={24} />
                    <h3 className="text-lg font-headline font-extrabold text-primary">{svc.title}</h3>
                  </div>
                  <p className="text-foreground text-[14px] font-sans leading-relaxed mb-4">{svc.desc}</p>
                  <span className="text-accent text-sm font-headline font-bold inline-flex items-center">See details <ArrowRight size={14} className="ml-1" /></span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="text-center mt-10">
            <Link href="/contact#send-message">
              <Button size="lg">Book a Free Review</Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Section 4 — Web Design */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-12">
            <span className="eyebrow mb-5 inline-block">Web Design</span>
            <h2 className="text-3xl md:text-4xl mb-4">A Fixed-Price Project. Then a Care Plan That Keeps It Working.</h2>
            <p className="text-foreground max-w-3xl mx-auto font-sans font-normal">
              Web design is the one part of what I do that genuinely is a one-off project. Pricing is straightforward, fixed before work starts, and includes the ongoing care plan that every site needs.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="bg-primary px-6 py-3 flex items-center gap-3">
                <MonitorSmartphone className="text-white" size={20} />
                <h3 className="text-white font-headline font-bold text-sm">Web Design</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {webDesignPricing.map((item, i) => (
                  <div key={i} className="flex items-center justify-between px-6 py-3.5">
                    <span className="text-foreground text-[14px] font-sans">{item.service}</span>
                    <span className="font-headline font-bold text-sm text-primary whitespace-nowrap ml-4">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn className="text-center mt-8">
            <Link href="/web-design">
              <Button variant="outline">See Web Design Details &rarr;</Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Worked example */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-10">
            <span className="eyebrow mb-5 inline-block">A Worked Example</span>
            <h2 className="text-2xl md:text-3xl mb-3">What Does This Look Like for a Typical Small Business?</h2>
          </FadeIn>

          <FadeIn>
            <div className="bg-[#f3f4f5] rounded-2xl p-8 md:p-10">
              <p className="text-foreground text-[15px] leading-relaxed font-sans mb-5">
                A six-person trade business getting a website, Microsoft 365 with a business phone, and managed IT would pay roughly:
              </p>
              <ul className="space-y-3 mb-6 list-none p-0 m-0">
                <li className="flex items-start gap-3 text-foreground text-[15px] font-sans">
                  <CheckCircle className="text-accent shrink-0 mt-0.5" size={16} />
                  <span><strong>€1,299 one-off</strong> for a Business website + €49/month care plan</span>
                </li>
                <li className="flex items-start gap-3 text-foreground text-[15px] font-sans">
                  <CheckCircle className="text-accent shrink-0 mt-0.5" size={16} />
                  <span><strong>€42.50 × 6 = €255/month</strong> for Microsoft 365 with phone</span>
                </li>
                <li className="flex items-start gap-3 text-foreground text-[15px] font-sans">
                  <CheckCircle className="text-accent shrink-0 mt-0.5" size={16} />
                  <span><strong>€65 × 6 = €390/month</strong> for Managed IT Standard</span>
                </li>
              </ul>
              <p className="text-foreground text-[15px] leading-relaxed font-sans mb-4">
                <strong>Total: €1,299 one-off + €694/month</strong>, of which the Microsoft 365 portion may qualify for the <Link href="/grants-funding" className="text-accent hover:underline">Grow Digital Voucher</Link> (50% up to €5,000).
              </p>
              <p className="text-foreground text-[15px] leading-relaxed font-sans">
                A regulated 10-person accountancy practice would substitute Compliance Plus (€95) for Standard (€65), bringing the monthly to roughly €1,250 &mdash; still significantly less than hiring a junior IT person, with a far broader skillset.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Government grants */}
      <section className="py-20 bg-accent/5 border-y border-accent/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 bg-white rounded-2xl shadow-sm border border-accent/10">
              <BadgeEuro className="text-accent shrink-0" size={32} />
              <div className="flex-1">
                <p className="font-headline font-bold text-primary mb-1">Up to 50% Funded — Where the Voucher Actually Applies.</p>
                <p className="text-sm text-foreground font-sans">
                  The Grow Digital Voucher covers 50% of new software subscriptions up to €5,000 &mdash; including Microsoft 365 first-year subscriptions, Copilot, and cybersecurity software. It does not cover bespoke websites, hardware, or ongoing care plans. I provide scheme-compliant invoicing for the elements that qualify.
                </p>
              </div>
              <Link href="/grants-funding">
                <Button variant="outline" className="shrink-0">See Grant Details</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <SpotlightCTA
        eyebrow="Not Sure Which Option Fits?"
        heading="Let's Have a Conversation."
        subtext="A free, no-obligation chat. I'll listen to what you actually need, give honest advice on what's right for your business, and quote you in writing for whatever you go with. No hard sell, no pressure."
        primaryText="Book a Free Consultation"
        primaryHref="/contact#send-message"
        secondaryText="See How I Work"
        secondaryHref="/how-it-works"
      />
    </div>
  );
}
