import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  AlertTriangle,
  Eye,
  Activity,
  Lock,
  FileText,
  CheckCircle,
  Package,
  Cog,
  Truck,
  Phone,
  FileCheck,
  RefreshCw,
  XCircle,
  ArrowRight,
  Quote,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";
import { CredentialBand } from "@/components/CredentialBand";
import { ContinuityCommitment } from "@/components/ContinuityCommitment";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroNetwork from "@assets/network-hero-sme-install.webp";

export default function CrettyardEdge() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-20 md:py-28">
        <GridLines cols={12} rows={8} color="#ffffff" opacity={0.05} />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <FadeIn direction="up">
              <span className="eyebrow mb-4 inline-block">Crettyard Edge &mdash; Managed Firewall</span>
              <h1 className="display-sm text-white mb-6">
                The Firewall Most Irish Small Businesses Should Have. Most Don&rsquo;t.
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8">
                A purpose-built, enterprise-grade firewall &mdash; leased, configured, and fully managed by Crettyard Digital. It sits at the edge of your network, filters and inspects every packet going in and out, and produces the audit-grade logs that NIS2 and DORA increasingly require. One fixed monthly cost. No setup fee. Hardware replacement included.
              </p>
              <div className="bg-accent/15 border border-accent/30 rounded-xl p-4 mb-8 inline-block">
                <p className="font-headline font-bold text-white text-lg">
                  From &euro;150/month <span className="text-white/60 text-sm font-normal">&middot; 24-month lease &middot; No setup cost</span>
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact#send-message">
                  <Button size="lg">Book a Free Network Review</Button>
                </Link>
                <a href="#how-it-works">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    See How It Works &darr;
                  </Button>
                </a>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <img
                src={heroNetwork}
                alt="A small Irish-office network rack with managed switches and a compact firewall appliance running quietly behind a tidy install on launch day"
                width={1920}
                height={1080}
                className="w-full h-auto rounded-2xl shadow-2xl"
                loading="eager"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <CredentialBand />

      {/* The Problem */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn>
            <span className="eyebrow mb-5 inline-block">Why This Exists</span>
            <h2 className="text-3xl md:text-4xl mb-6">The Box Your ISP Sent You Is a Router. It Is Not a Firewall.</h2>
            <p className="text-foreground text-[16px] leading-relaxed font-sans mb-5">
              Most Irish small businesses run their entire network behind whatever Eir, Vodafone, Sky, or Virgin Media shipped them in a brown box. That hardware is a router with a basic packet filter. It is not a firewall in any meaningful security sense. It does not inspect traffic. It does not detect intrusions. It does not log what is happening on your network. It does not produce the kind of evidence a regulator, an auditor, or a cyber insurance underwriter is going to ask for if something goes wrong.
            </p>
            <p className="text-foreground text-[16px] leading-relaxed font-sans mb-5">
              For a 1-person business that handles no sensitive data, this is fine. For an accountancy practice, a solicitor&rsquo;s office, a healthcare clinic, a financial services boutique, a contractor inside a regulated supply chain, or any business holding meaningful customer data &mdash; it is a problem most owners are not aware of until they are asked to prove the absence of a problem they cannot prove.
            </p>
            <p className="text-foreground text-[16px] leading-relaxed font-sans mb-5">
              NIS2 came into Irish law in 2024. DORA covers financial entities from January 2025. GDPR has been live since 2018. The trend is one direction: more documentation, more evidence, more proof. The router under the desk does not produce any of that.
            </p>
            <p className="text-foreground text-[16px] leading-relaxed font-sans font-bold">
              Crettyard Edge does.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What Crettyard Edge Does */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">What Crettyard Edge Does</span>
            <h2 className="text-3xl md:text-4xl mb-6">A Real Firewall, Properly Configured, Watched All the Time.</h2>
            <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal max-w-3xl mx-auto">
              Crettyard Edge is a small, quiet piece of hardware that sits between your office network and the internet. It filters every packet, inspects encrypted traffic where appropriate, identifies threats using continuously-updated intelligence feeds, and logs everything for as long as the regulators require.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "Stops known threats before they reach your network",
                desc: "Real-time threat intelligence feeds block known malicious IPs, phishing domains, ransomware command-and-control servers, and bot traffic at the edge — before any of it reaches a staff member’s laptop.",
              },
              {
                icon: Eye,
                title: "Detects unusual behaviour that signature-based tools miss",
                desc: "Multi-layer intrusion detection watches for suspicious patterns (lateral movement, data exfiltration, brute-force attempts) and raises alerts before damage is done.",
              },
              {
                icon: Lock,
                title: "Inspects encrypted traffic where appropriate",
                desc: "Modern threats hide inside HTTPS. Crettyard Edge inspects encrypted traffic in line with industry best practice, without breaking legitimate sites or compromising privacy.",
              },
              {
                icon: FileText,
                title: "Logs everything for 365 days",
                desc: "Every connection, every block, every alert — recorded, indexed, and searchable. The audit evidence regulators ask for, ready to produce on request.",
              },
              {
                icon: Activity,
                title: "Watches itself",
                desc: "Health monitoring runs continuously. If the unit goes down, Joey knows about it before you do.",
              },
              {
                icon: RefreshCw,
                title: "Updates automatically",
                desc: "Threat intelligence, firmware, and security rules update on a managed cadence. No “did anyone patch the firewall” conversation.",
              },
              {
                icon: ShieldCheck,
                title: "Protects all of your office at once",
                desc: "A single unit covers an entire office network — staff laptops, desktops, printers, IP phones, smart-building systems, the lot.",
              },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-7 rounded-2xl card-hover shadow-sm flex gap-5 h-full">
                  <item.icon className="text-accent shrink-0 mt-1" size={26} />
                  <div>
                    <h3 className="text-base font-headline font-bold text-primary mb-2 leading-snug">{item.title}</h3>
                    <p className="text-foreground text-[14px] font-sans leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">What&rsquo;s Included</span>
            <h2 className="text-3xl md:text-4xl mb-6">Everything. That&rsquo;s the Point of &ldquo;Managed&rdquo;.</h2>
            <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal max-w-2xl mx-auto">
              The &euro;150/month covers all of the following.
            </p>
          </FadeIn>

          <StaggerContainer className="space-y-3">
            {[
              { title: "The hardware unit", desc: "A purpose-built firewall appliance, leased to you. Replaced free of charge if it ever fails." },
              { title: "Pre-deployment configuration", desc: "Tuned to your network, your applications, and your operating hours before it ever leaves Crettyard Digital." },
              { title: "On-site or remote installation", desc: "Joey installs it, replaces the ISP router as the network gateway, and verifies everything is working before leaving." },
              { title: "All software licences and threat intelligence feeds", desc: "Updated continuously. No separate subscriptions for you to track or pay for." },
              { title: "24/7 health monitoring", desc: "Crettyard Digital is alerted if the unit goes down, gets overwhelmed, or starts behaving unusually." },
              { title: "Monthly compliance report", desc: "Plain-English summary of what was blocked, what was detected, what was patched, and where you stand on the controls regulators care about. Email or PDF, your choice." },
              { title: "Quarterly tuning review", desc: "A 30-minute call to walk through the report, surface anything notable, and adjust rules where your business has changed." },
              { title: "Direct line to Joey for incidents", desc: "If something happens — or you think something has happened — you ring one number." },
              { title: "Hardware replacement", desc: "If the box fails, a configured replacement is dispatched within one business day. No separate fee. No questions." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#f3f4f5] p-5 rounded-xl flex gap-4 items-start">
                  <CheckCircle className="text-accent shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-headline font-bold text-primary text-[15px] leading-tight">{item.title}</p>
                    <p className="text-foreground text-[14px] font-sans mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="mt-10">
            <div className="bg-white border border-gray-200 p-6 rounded-2xl">
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                <strong>Not included:</strong> Major incident response (active breach forensics) is scoped separately if needed &mdash; most clients never need it. The first 4 hours of any incident response are included; beyond that is billed at the standard hourly rate. Additional sites or HA pairs are quoted on request &mdash; Crettyard Edge is single-site by default.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Compliance Angle */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Compliance</span>
            <h2 className="text-3xl md:text-4xl mb-6">The Audit Evidence, Built In.</h2>
            <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal max-w-3xl mx-auto">
              Crettyard Edge was designed with NIS2, DORA, and GDPR in mind. The features below map directly to the controls those regulations require &mdash; not as marketing slogans, as documented evidence.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-12 bg-primary text-white px-6 py-3 text-[13px] font-headline font-bold uppercase tracking-wider">
                <div className="md:col-span-3">Regulation</div>
                <div className="md:col-span-4">What It Requires</div>
                <div className="md:col-span-5">What Crettyard Edge Produces</div>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  { reg: "NIS2 Annex I.b", req: "Incident detection capability", out: "Multi-layer intrusion detection with correlated alerting" },
                  { reg: "NIS2 Annex I.d", req: "Audit logs of security-relevant events", out: "365-day retained, indexed, searchable log archive" },
                  { reg: "NIS2 Annex II", req: "Vulnerability handling", out: "Managed patch cadence with documented evidence" },
                  { reg: "DORA Article 17", req: "ICT incident detection and timely reporting", out: "Real-time alerting with documented severity and timeline" },
                  { reg: "GDPR Article 32", req: "Security of processing — appropriate technical measures", out: "Edge-level threat blocking, encrypted-traffic inspection, evidence of controls" },
                  { reg: "EU data residency", req: "Personal data processed in the EU", out: "All telemetry stays on the unit on your premises — nothing forwarded to US clouds" },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-12 px-6 py-4 gap-2 md:gap-4 text-[14px] font-sans">
                    <div className="md:col-span-3 font-headline font-bold text-primary">{row.reg}</div>
                    <div className="md:col-span-4 text-foreground">{row.req}</div>
                    <div className="md:col-span-5 text-foreground">{row.out}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn className="mt-10 max-w-3xl mx-auto text-center">
            <p className="text-foreground text-[15px] leading-relaxed font-sans">
              Crettyard Edge does not make you NIS2-compliant by itself &mdash; no single product does. It does produce a meaningful share of the technical evidence the controls require, and it pairs naturally with the documentation work included in <Link href="/managed-it-support" className="text-accent hover:underline font-headline font-bold">Managed IT Compliance Plus</Link>.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">How It Works</span>
            <h2 className="text-3xl md:text-4xl mb-6">From &ldquo;Yes, Let&rsquo;s Do It&rdquo; to &ldquo;It&rsquo;s Live&rdquo; &mdash; About Two Weeks.</h2>
          </FadeIn>

          <StaggerContainer className="space-y-4">
            {[
              { num: "01", icon: Phone, title: "Free network review (30 minutes, on site or video)", desc: "Joey looks at how your network is currently set up — what the ISP gave you, where staff connect from, whether you have a separate Wi-Fi for guests, what kind of data flows through. No commitment." },
              { num: "02", icon: FileCheck, title: "Written proposal", desc: "A short document confirming the scope, the lease terms, and any specific configuration your network needs. Fixed price. No surprises." },
              { num: "03", icon: Cog, title: "Pre-configuration", desc: "Once the agreement is signed, the unit is built and configured at Crettyard Digital before it ever sees your office. By the time it arrives, it already knows your network." },
              { num: "04", icon: Truck, title: "On-site installation (1–2 hours)", desc: "Joey replaces the ISP router as your network’s gateway, verifies every device reconnects cleanly, walks through the monitoring dashboard, and confirms logs are flowing." },
              { num: "05", icon: ShieldCheck, title: "First 30 days — close monitoring", desc: "Tighter alerting during the bedding-in period. Tuning happens silently in the background." },
              { num: "06", icon: Activity, title: "Ongoing — quiet, watched, reported", desc: "From month 2, you mostly forget it exists. The monthly report lands. The quarterly review happens. The phone rings only if something needs your attention." },
            ].map((step, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#f3f4f5] p-6 rounded-2xl flex gap-5 items-start">
                  <span className="text-2xl font-headline font-extrabold text-primary/30 shrink-0 w-12 pt-1">{step.num}</span>
                  <step.icon className="text-accent shrink-0 mt-1" size={22} />
                  <div className="flex-grow">
                    <h3 className="text-base font-headline font-bold text-primary mb-1">{step.title}</h3>
                    <p className="text-foreground text-[15px] font-sans leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="mt-10 text-center">
            <p className="text-sm text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed">
              This is the same pattern Joey applies to managed IT in general: most months, you don&rsquo;t hear from him. That is the goal.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Pricing & Lease Terms */}
      <section id="pricing" className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Pricing</span>
            <h2 className="text-3xl md:text-4xl mb-4">&euro;150 a Month. That&rsquo;s the Whole Number.</h2>
            <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal max-w-2xl mx-auto">
              All-inclusive lease. No setup fee. The lease terms below are written into the service agreement &mdash; nothing hidden, nothing punitive.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { title: "€150 per month", desc: "All-inclusive lease. Hardware, software, threat feeds, monitoring, reporting." },
              { title: "No setup fee", desc: "Pre-configuration, on-site installation, and first-month monitoring are part of the price." },
              { title: "24-month minimum lease", desc: "After that, rolling monthly with 30 days’ notice." },
              { title: "Hardware replacement included", desc: "If the unit fails, a configured replacement is dispatched within one business day at no charge." },
              { title: "Buyout option at month 24", desc: "Keep the hardware for a token €1 if you wish." },
              { title: "Early termination is allowed", desc: "Pay the remaining hardware portion (€50 × months remaining) and walk. No service clawback, no punitive fee. A confident provider tells you how to leave them." },
              { title: "VAT-free for now", desc: "Crettyard Digital is non-VAT-registered as a sole trader. Subject to change if VAT registration becomes mandatory; existing customers grandfathered through their current term." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-5 rounded-xl shadow-sm h-full">
                  <p className="font-headline font-bold text-primary text-[15px] mb-1">{item.title}</p>
                  <p className="text-foreground text-[14px] font-sans leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="mt-12 text-center">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact#send-message">
                <Button size="lg">Book a Free Network Review</Button>
              </Link>
              <Link href="/contact#send-message">
                <Button size="lg" variant="outline">Talk to Joey</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Who This Is For</span>
            <h2 className="text-3xl md:text-4xl mb-6">Honest About Fit.</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.05}>
              <div className="bg-green-50/60 p-8 rounded-2xl h-full" data-testid="card-fit-for">
                <h3 className="text-lg mb-6 text-green-700 flex items-center gap-2">
                  <CheckCircle size={20} /> Strong fit for:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Accountancy practices, solicitors’ offices, and healthcare clinics with NIS2, GDPR, or sector-specific regulatory exposure.",
                    "Financial services boutiques and credit unions with DORA obligations.",
                    "Contractors inside a larger supply chain being asked to demonstrate basic security controls (a NIS2-driven trend).",
                    "Any Irish small business with 5–50 staff that holds customer data and would prefer not to be the next breach headline.",
                    "Businesses that already had one near-miss (phishing, ransomware, business email compromise) and want a real perimeter, not promises.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-green-800/80 font-sans">
                      <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-amber-50/60 p-8 rounded-2xl h-full" data-testid="card-not-fit-for">
                <h3 className="text-lg mb-6 text-amber-800 flex items-center gap-2">
                  <XCircle size={20} /> Probably not the right fit if:
                </h3>
                <ul className="space-y-4">
                  {[
                    "You’re a 1- or 2-person business with no on-premise office and everyone working from home laptops on home Wi-Fi. (A Microsoft 365 hardening exercise will move the needle more for you.)",
                    "You already operate a larger Sophos, Fortinet, or Cisco environment with in-house security staff. (You don’t need Crettyard Edge — you need those engineers paid better.)",
                    "You think a firewall is a tickbox to satisfy an auditor and not a thing that actually does work. (Honest mismatch — Crettyard Digital won’t sell you something the customer doesn’t intend to use.)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-amber-800/80 font-sans">
                      <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Compliance Plus pairing — bundle hint */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4">
                <Quote className="text-accent shrink-0 mt-1" size={28} />
                <div>
                  <p className="text-[13px] font-headline font-bold uppercase tracking-wider text-accent mb-2">Pairs With Compliance Plus</p>
                  <p className="text-foreground text-lg leading-relaxed font-sans mb-4">
                    Most Compliance Plus clients add Crettyard Edge as their compliance-grade perimeter. The IT plan handles the documentation, governance, and endpoint side; Crettyard Edge produces the audit evidence at the network edge. Discounted bundle pricing available &mdash; ask Joey.
                  </p>
                  <Link href="/managed-it-support" className="text-accent font-headline font-bold inline-flex items-center text-sm hover:text-primary transition-colors">
                    See Compliance Plus details <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">FAQ</span>
            <h2 className="text-3xl">Questions People Actually Ask</h2>
          </FadeIn>
          <FadeIn>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {[
                {
                  id: "ce-1",
                  q: "Is this a Sophos / Fortinet / WatchGuard / SonicWall product?",
                  a: "It is not. Crettyard Edge is a managed service. The hardware is a purpose-built firewall appliance, configured and operated by Crettyard Digital to enterprise standards. The result is the same outcome as a Sophos or Fortinet box for SMB use cases — at a clearer monthly price, with less licensing complexity, and without your security telemetry being forwarded to a US cloud.",
                },
                {
                  id: "ce-2",
                  q: "Why isn’t this a Sophos / Fortinet box?",
                  a: "Branded SMB firewalls are great products, but they come with annual licence renewals at €1,000–€2,000 a unit, threat-intelligence subscriptions billed separately, and pricing models that can change at the vendor’s option. Crettyard Edge keeps the entire cost in one fixed monthly number with no surprise renewal bills.",
                },
                {
                  id: "ce-3",
                  q: "What if the box fails?",
                  a: "A configured replacement is dispatched within one business day at no cost. The 20% hardware-failure margin is built into the pricing — it is Crettyard Digital’s risk to absorb, not yours.",
                },
                {
                  id: "ce-4",
                  q: "Can I see what it’s blocking?",
                  a: "Yes. The monthly report includes a summary, and you can request a more detailed dashboard if you want one. Most clients prefer the summary. The data is yours either way.",
                },
                {
                  id: "ce-5",
                  q: "Do I need this if I’m already on Managed IT Compliance Plus?",
                  a: "It is a strong complement, not a duplicate. Compliance Plus handles the documentation, governance, and endpoint side. Crettyard Edge is the perimeter that produces some of the evidence Compliance Plus relies on. Many clients run both.",
                },
                {
                  id: "ce-6",
                  q: "What about my existing ISP router?",
                  a: "It stays in place as the modem (the bit that connects to the internet line). Crettyard Edge sits between it and your office, replacing its routing and security functions. Your ISP relationship and broadband service are unaffected.",
                },
                {
                  id: "ce-7",
                  q: "Can I get out of the lease early?",
                  a: "Yes. Pay the remaining hardware portion (€50 × months remaining) and walk. No service-element fee, no penalty.",
                },
                {
                  id: "ce-8",
                  q: "What if my business grows and I need more capacity?",
                  a: "Crettyard Edge handles up to roughly 50 staff comfortably. Above that, or for multi-site setups, you move to a quoted Crettyard Edge Pro tier — same service model, sized appropriately. No restart, no new lease term — the existing relationship rolls over.",
                },
              ].map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border border-gray-100 rounded-xl px-6 bg-[#f3f4f5]/30">
                  <AccordionTrigger className="text-left text-[15px] font-headline font-bold py-5">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-foreground leading-relaxed font-sans text-[15px] pb-5">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-10">
            <span className="eyebrow mb-5 inline-block">Pairs With</span>
            <h2 className="text-3xl mb-3">Crettyard Edge Sits Inside the Wider Setup</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/managed-it-support", title: "Managed IT Compliance Plus", desc: "The natural pair: governance, documentation, and endpoint controls behind the network perimeter Crettyard Edge gives you." },
              { href: "/cybersecurity", title: "Cybersecurity & Compliance", desc: "Endpoint security packages, NIS2 readiness, DORA gap analyses — the full security and compliance stack." },
              { href: "/network-wifi-security", title: "Network & Wi-Fi", desc: "Business-grade switches and Wi-Fi 6/6E/7 that the firewall sits in front of." },
              { href: "/dora-compliance", title: "DORA Compliance", desc: "Operational resilience for credit unions, investment firms, insurance, and other regulated financial entities." },
            ].map((item) => (
              <StaggerItem key={item.href}>
                <Link href={item.href}>
                  <div className="bg-white p-6 rounded-2xl card-hover cursor-pointer shadow-sm h-full">
                    <h3 className="text-base font-headline font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-foreground text-[14px] font-sans leading-relaxed mb-3">{item.desc}</p>
                    <span className="text-accent text-sm font-headline font-bold">Learn more &rarr;</span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-10 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <ContinuityCommitment />
        </div>
      </section>

      <SpotlightCTA
        eyebrow="Ready?"
        heading="Start With a Free Network Review."
        subtext="A 30-minute look at what you currently have, where the gaps are, and whether Crettyard Edge is the right fit. No commitment, no pressure, no hard sell. If it&rsquo;s not right for you, Joey will say so."
        primaryText="Book a Free Network Review"
        primaryHref="/contact#send-message"
        secondaryText="See Compliance Plus"
        secondaryHref="/managed-it-support"
      />
    </div>
  );
}
