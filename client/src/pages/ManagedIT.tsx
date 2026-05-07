import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Quote } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroAdminConsole from "@assets/mit-hero-admin-console.webp";
import iconProactiveMonitoring from "@assets/concept-proactive-monitoring.webp";
import icon365Admin from "@assets/concept-365-admin.webp";
import iconEndpointSecurity from "@assets/concept-endpoint-security.webp";
import iconComplianceCheck from "@assets/concept-compliance-check.webp";
import iconCloudBackup from "@assets/concept-cloud-backup.webp";
import iconItHelpdesk from "@assets/concept-it-helpdesk.webp";

export default function ManagedIT() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-20 md:py-28">
        <GridLines cols={12} rows={8} color="#ffffff" opacity={0.05} />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <FadeIn direction="up">
              <span className="eyebrow mb-4 inline-block">Managed IT Support</span>
              <h1 className="display-sm text-white mb-6">
                Managed IT Support &mdash; Your Outsourced IT Department Without the Corporate Price Tag
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8">
                A fixed monthly fee. One accountable person. Microsoft 365 administration, endpoint security, compliance management, backup, and the boring-but-essential work that stops things breaking &mdash; handled in the background. Built on the same standards I learned across Microsoft, Intel and Dell. Designed for Irish small businesses with 1 to 50 staff who want their IT to just work &mdash; and to keep working, year after year, with the same number to ring.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="#pricing">
                  <Button size="lg">See Pricing Plans</Button>
                </Link>
                <Link href="/contact#send-message">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Book a Free IT Review
                  </Button>
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <img
                src={heroAdminConsole}
                alt="A small Irish office desk with a laptop showing a clean admin console dashboard and a second monitor showing a Microsoft 365 user list with green status ticks"
                width={1920}
                height={1080}
                className="w-full h-auto rounded-2xl shadow-2xl"
                loading="eager"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center">
            <span className="eyebrow mb-5 inline-block">The Problem</span>
            <h2 className="text-3xl md:text-4xl mb-6">If You're Only Calling Someone When Things Break, You're Already Losing Money</h2>
            <p className="text-lg text-foreground mb-6 leading-relaxed font-sans font-normal">
              Right now, if your laptop slows to a crawl, your email stops working, or your network drops out &mdash; what do you do? You call someone, wait for them to understand your setup (because they've never seen it before), pay an hourly rate for a fix, and hope the same thing doesn't happen again next month.
            </p>
            <p className="text-lg text-foreground mb-6 leading-relaxed font-sans font-normal">
              That's reactive IT. It's expensive, unpredictable, and it means every problem costs you twice &mdash; once in downtime and once in the repair bill. And it leaves you completely exposed on compliance &mdash; no one is checking whether your setup meets GDPR, NIS2, or any other regulatory requirement.
            </p>
            <p className="text-lg text-foreground leading-relaxed font-sans font-normal font-bold">
              Managed IT support flips that model. For a fixed monthly fee, I monitor your systems, keep everything updated, prevent problems before they happen, manage your compliance, and fix things fast when they do &mdash; because I already know your entire setup.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">What You Get</span>
            <h2 className="text-3xl">What's Included in a Managed IT Plan</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {[
              { img: iconProactiveMonitoring, alt: "Glass heartbeat ECG line over a glass eye representing proactive IT monitoring", title: "Proactive Monitoring", desc: "Problems get spotted and fixed before they affect your business. Updates applied, patches installed, potential issues addressed \u2014 often before you even know they existed." },
              { img: icon365Admin, alt: "Glass cog with a glass envelope inside representing Microsoft 365 administration", title: "Microsoft 365 Administration", desc: "Adding and removing users, resetting passwords, managing licences, configuring email settings \u2014 all handled as part of your plan, not billed as separate call-outs." },
              { img: iconEndpointSecurity, alt: "Glass laptop with a padlock in its screen representing endpoint security", title: "Endpoint Security", desc: "Business-grade antivirus and threat protection for your devices. Not the free consumer stuff \u2014 real protection against real threats." },
              { img: iconComplianceCheck, alt: "Glass clipboard with rows of checkmarks representing compliance management", title: "Compliance Management", desc: "GDPR data handling, NIS2 security standards (where applicable), and proper data retention \u2014 included in your plan, not an extra fee." },
              { img: iconCloudBackup, alt: "Glass cloud containing a shield with a circular-arrow representing cloud backup and recovery", title: "Cloud Backup & Recovery", desc: "Your business data backed up automatically. Ransomware, hardware failure, or accidental deletion doesn\u2019t mean permanent data loss." },
              { img: iconItHelpdesk, alt: "Glass headset with a speech bubble representing direct IT helpdesk support", title: "Help When You Need It", desc: "When something goes wrong, you call me \u2014 the person who built your system. Fast, informed support without repeating yourself to a stranger." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-8 rounded-2xl flex gap-5 card-hover shadow-sm">
                  <img
                    src={item.img}
                    alt={item.alt}
                    width={1000}
                    height={1000}
                    className="w-20 h-20 shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-lg mb-2">{item.title}</h3>
                    <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Who This Is For</span>
            <h2 className="text-3xl">Managed IT for Businesses With 1 to 20 People</h2>
            <p className="text-foreground mt-4 max-w-2xl mx-auto font-sans font-normal">
              You don't need 50 employees to benefit from managed IT. If your business depends on email, internet, files, and devices working reliably every day &mdash; and you don't have someone in-house to manage that &mdash; this service is for you.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {[
              "Trades and contracting businesses that need email and files working between office and site",
              "Small offices and teams that can\u2019t afford downtime but can\u2019t justify hiring a full-time IT person",
              "Professional services (legal, accountancy, consulting) handling sensitive client data",
              "Retail and hospitality businesses relying on connectivity, POS systems, and cloud tools",
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-3 bg-[#f3f4f5] p-5 rounded-xl">
                  <CheckCircle className="text-accent shrink-0 mt-0.5" size={18} />
                  <span className="text-foreground text-[15px] font-sans">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Proof Block */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <Quote className="text-accent shrink-0 mt-1" size={28} />
                <div>
                  <p className="text-foreground text-lg leading-relaxed font-sans italic mb-4">
                    "Joey did the lot for us &mdash; a professional website, Microsoft 365 so we have proper email between the office and the lads on site, and sorted our Wi-Fi so it works in every room. Can't recommend him enough."
                  </p>
                  <p className="font-headline font-bold text-primary">Brian, Nurney Plant and Civil</p>
                  <p className="text-sm text-muted-foreground">Three separate problems solved by one provider as an integrated package</p>
                </div>
              </div>
              <div className="mt-4 pl-0 md:pl-12">
                <Link href="/pricing" className="text-accent font-headline font-bold inline-flex items-center text-sm hover:text-primary transition-colors">
                  See how Digital Foundation Bundles work <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-16">
            <span className="eyebrow mb-5 inline-block">Pricing</span>
            <h2 className="text-3xl md:text-4xl mb-4">Simple, Fixed Monthly Pricing &mdash; No Surprises</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Essential Support",
                price: "From \u20ac45",
                unit: "per user / month",
                target: "Micro-businesses & solo traders (1\u20135 users)",
                items: ["Microsoft 365 administration", "Remote helpdesk support", "Endpoint antivirus (Microsoft Defender)", "Automated patch management", "Cloud backup", "Basic GDPR compliance checks", "Direct access to me"],
                popular: false,
              },
              {
                name: "Professional Managed IT",
                price: "From \u20ac75",
                unit: "per user / month",
                target: "Small offices & teams (5\u201315 users)",
                items: ["Everything in Essential", "Advanced email security", "Intune device management", "Priority response times", "Regular IT health reviews", "NIS2 readiness checks", "Teams Phone support"],
                popular: true,
              },
              {
                name: "Comprehensive IT & Security",
                price: "From \u20ac110",
                unit: "per user / month",
                target: "Professional services & regulated firms",
                items: ["Everything in Professional", "Phishing simulations & EDR", "Full NIS2 & GDPR management", "DORA readiness (financial sector)", "Quarterly on-site reviews", "Staff cyber awareness training", "Copilot readiness assessment"],
                popular: false,
              },
            ].map((tier, i) => (
              <StaggerItem key={i}>
                <div className={`rounded-2xl p-8 h-full flex flex-col ${tier.popular ? "bg-accent/5 border-2 border-accent relative" : "bg-[#f3f4f5]"}`}>
                  {tier.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-headline font-bold px-4 py-1 rounded-full">Most Popular</span>}
                  <h3 className="text-lg mb-1">{tier.name}</h3>
                  <p className="text-3xl font-headline font-extrabold text-accent mb-0">{tier.price}</p>
                  <p className="text-sm text-muted-foreground mb-4 font-sans">{tier.unit}</p>
                  <p className="text-xs text-muted-foreground mb-6 font-sans">{tier.target}</p>
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {tier.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-[14px] font-sans text-foreground">
                        <CheckCircle className="text-accent shrink-0 mt-0.5" size={15} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact#send-message">
                    <Button className="w-full" variant={tier.popular ? "default" : "outline"}>Get a Quote</Button>
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="text-center mt-8">
            <p className="text-foreground text-sm font-sans mb-2">All plans quoted after a free discovery call. No long-term lock-in contracts &mdash; I earn your business every month.</p>
            <p className="text-foreground text-sm font-sans mb-4">Thinking about AI? The Comprehensive tier includes a <Link href="/ai-readiness" className="text-accent hover:underline">Microsoft 365 Copilot readiness assessment</Link>. Looking for grant funding? The M365 subscriptions inside your IT plan may qualify for the <Link href="/grants-funding" className="text-accent hover:underline">Grow Digital Voucher</Link>.</p>
            <Link href="/pricing">
              <Button variant="outline">See Digital Foundation Bundles &rarr;</Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Common Questions</span>
            <h2 className="text-3xl">Answered in Plain English</h2>
          </FadeIn>
          <FadeIn>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {[
                { id: "mit-1", q: "Is this only for businesses with lots of staff?", a: "Not at all. Many clients are one to five-person businesses. Even a sole trader benefits from proper email, device, and compliance management." },
                { id: "mit-2", q: "Is compliance really included?", a: "Yes. GDPR checks and configurations are included in every plan. NIS2 supply-chain readiness is included at Professional and Comprehensive tiers (see the cybersecurity page for full framework detail). DORA readiness is included at the Comprehensive tier for regulated financial clients where DORA applies \u2014 see the DORA page. It\u2019s not an add-on \u2014 it\u2019s part of the service." },
                { id: "mit-3", q: "How is this different from calling someone when things break?", a: "Predictability (fixed fee, not hourly bills), prevention (problems caught early), familiarity (I already know your setup), and compliance (someone is actively managing your regulatory obligations). This is what managed service providers (MSPs) deliver \u2014 IT outsourced properly, not an hourly break-fix gamble." },
                { id: "mit-4", q: "Can I change plans as I grow?", a: "Absolutely. Plans scale with your business. Adding a new team member? I add them to the system. Need more coverage? We adjust. No reinstalling, no starting over." },
                { id: "mit-5", q: "Do I need this if I already have Microsoft 365?", a: "Having the licence is one thing \u2014 having it properly managed is another. Managed IT covers user management, security monitoring, troubleshooting, Intune device enrolment, and compliance. It\u2019s the difference between owning a car and having someone service it regularly. See the Microsoft 365 page for the product details I set up for you." },
              ].map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border border-gray-100 rounded-xl px-6 bg-white">
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
            <h2 className="text-3xl mb-3">Managed IT Works Best Together</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/managed-hardware", title: "Managed Hardware", desc: "Turnkey business PCs and on-site servers, delivered ready to use and already under your managed IT plan." },
              { href: "/microsoft-365", title: "Microsoft 365", desc: "Professional email, cloud files, and Teams \u2014 administered as part of your managed IT service." },
              { href: "/network-wifi-security", title: "Network & Wi-Fi", desc: "Business-grade connectivity and secure Wi-Fi across your offices, workshops, and retail spaces." },
              { href: "/cybersecurity", title: "Cybersecurity & Compliance", desc: "The security layer: endpoint protection, NIS2 and GDPR frameworks, staff training." },
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

      {/* By County */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-10">
            <span className="eyebrow mb-3 inline-block">By County</span>
            <h2 className="text-2xl">County-Specific Managed IT Across Ireland</h2>
            <p className="text-foreground text-[15px] font-sans mt-3 max-w-2xl mx-auto">Every county has its own sector mix and compliance angle. Pick yours for tailored managed IT pricing, on-site notes, and LEO grant guidance.</p>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              { href: "/it-support-laois", county: "Laois", headline: "IT Support in Laois", desc: "Portlaoise, Portarlington, Mountmellick. M7 corridor growth, local on-site response, Microsoft 365 administration." },
              { href: "/it-support-carlow", county: "Carlow", headline: "IT Support in Carlow", desc: "Carlow town, Tullow, Bagenalstown. NIS2 supply-chain security documentation for construction, plant hire and trades." },
              { href: "/it-support-kilkenny", county: "Kilkenny", headline: "IT Support in Kilkenny", desc: "Kilkenny city, Thomastown, Castlecomer. Hospitality POS + guest Wi-Fi, EAA and GDPR for professional firms." },
            ].map((item) => (
              <StaggerItem key={item.href}>
                <Link href={item.href}>
                  <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover cursor-pointer h-full" data-testid={`link-county-${item.county.toLowerCase()}`}>
                    <span className="text-xs font-headline font-bold text-accent uppercase tracking-wider">County {item.county}</span>
                    <h3 className="text-lg mt-2 mb-3">{item.headline}</h3>
                    <p className="text-foreground text-[15px] leading-relaxed font-sans mb-3">{item.desc}</p>
                    <span className="text-accent text-sm font-headline font-bold inline-block">See {item.county} details &rarr;</span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      <SpotlightCTA
        eyebrow="Ready to Get Started?"
        heading="Stop Waiting for Things to Break"
        subtext="Book a free IT review. I'll assess your current setup, identify the risks and compliance gaps, and show you exactly how managed support saves you time, money, and stress."
        primaryText="Book a Free IT Review"
        primaryHref="/contact#send-message"
        secondaryText="See All Services"
        secondaryHref="/pricing"
      />
    </div>
  );
}
