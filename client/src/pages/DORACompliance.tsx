import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, ArrowRight, FileCheck, AlertTriangle, Building2, Users, Lock } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function DORACompliance() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-20 md:py-28">
        <GridLines cols={12} rows={8} color="#ffffff" opacity={0.05} />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <FadeIn direction="up">
            <span className="eyebrow mb-4 inline-block">DORA Compliance</span>
            <h1 className="display-sm text-white mb-6">
              DORA Compliance for Irish Financial Services &mdash; Your IT Needs to Be Ready
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8">
              The Digital Operational Resilience Act (DORA) has been in force since <strong>17 January 2025</strong>, supervised in Ireland by the <strong>Central Bank of Ireland</strong>. It applies to regulated financial entities &mdash; banks, credit unions, investment firms, insurance undertakings and intermediaries, pension funds, and similar. If your firm is in scope, your ICT Risk Management Framework, third-party risk documentation, and resilience testing now need to meet banking-grade standards. I help you get there &mdash; without the complexity.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact#send-message">
                <Button size="lg">Book a Free DORA Review</Button>
              </Link>
              <Link href="/professional-services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  IT for Professional Services &rarr;
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What Is DORA */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">In Plain English</span>
            <h2 className="text-3xl md:text-4xl mb-6">What Is DORA and Who Does It Affect?</h2>
          </FadeIn>

          <FadeIn>
            <p className="text-lg text-foreground mb-8 leading-relaxed font-sans font-normal text-center">
              DORA stands for the Digital Operational Resilience Act. It's an EU regulation specifically targeting the financial sector, requiring firms to ensure their technology can withstand cyber attacks and operational disruptions.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <FadeIn>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl">
                <h3 className="text-lg mb-4 flex items-center gap-2"><Building2 className="text-accent" size={20} /> DORA Directly Applies To</h3>
                <ul className="space-y-2.5">
                  {["Banks and credit unions", "Payment institutions and e-money institutions", "MiFID-regulated investment firms", "Insurance and reinsurance undertakings", "Insurance and reinsurance intermediaries", "Pension funds (IORPs)", "Investment fund managers (AIFMs, UCITS)", "Crypto-asset service providers (CASPs) under MiCAR"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[15px] font-sans"><CheckCircle className="text-accent shrink-0 mt-0.5" size={16} />{item}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-amber-50/60 p-7 rounded-2xl">
                <h3 className="text-lg mb-4 flex items-center gap-2"><AlertTriangle className="text-amber-600" size={20} /> Also Applies to Their IT Providers</h3>
                <p className="text-foreground text-[15px] font-sans mb-3">
                  When you serve a regulated financial entity, DORA&rsquo;s third-party risk management provisions require them to assess, monitor, and document their ICT providers. That means your regulated clients need evidence of your security controls, service continuity plans, and contractual terms &mdash; and I provide it.
                </p>
                <p className="text-foreground text-[15px] font-sans font-bold">
                  A separate category, &ldquo;critical ICT third-party service providers,&rdquo; is formally designated by European Supervisory Authorities and applies only to providers whose failure would impact the financial system &mdash; typically major cloud platforms. Crettyard Digital is not in that category.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What DORA Requires */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Requirements</span>
            <h2 className="text-3xl">What DORA Requires</h2>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { num: "01", icon: Shield, title: "ICT Risk Management", desc: "Documented policies for managing technology risks, including regular assessments." },
              { num: "02", icon: AlertTriangle, title: "Incident Detection & Reporting", desc: "Systems to detect incidents, with mandatory reporting to regulators within prescribed timeframes." },
              { num: "03", icon: FileCheck, title: "Resilience Testing", desc: "Regular testing of IT systems to ensure they withstand disruptions. Larger firms also need Threat-Led Penetration Testing (TLPT)." },
              { num: "04", icon: Users, title: "Third-Party Risk Management", desc: "Financial firms must audit their technology providers. If you're the provider, be audit-ready." },
              { num: "05", icon: Lock, title: "Information Sharing", desc: "Participating in threat intelligence sharing where appropriate." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-5 rounded-2xl text-center shadow-sm h-full">
                  <span className="text-2xl font-headline font-extrabold text-primary/10 block mb-2">{item.num}</span>
                  <item.icon className="text-accent mx-auto mb-2" size={22} />
                  <h3 className="text-sm font-headline font-bold mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-sans">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How I Help */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">How I Help</span>
            <h2 className="text-3xl">DORA Services for Financial Sector Firms</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover">
                <h3 className="text-lg mb-2">DORA Readiness Assessment</h3>
                <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal mb-3">
                  I review your current IT infrastructure against DORA requirements and deliver a plain-English report showing where you comply, where the gaps are, and what needs to change. Prioritised by urgency and cost, mapped to the Central Bank of Ireland's expectations.
                </p>
                <p className="text-sm font-headline font-bold text-accent">From &euro;400</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover">
                <h3 className="text-lg mb-2">DORA-Aligned IT Setup</h3>
                <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal mb-3">
                  If you need a new or upgraded IT environment, I build it to DORA standards from the start &mdash; <Link href="/microsoft-365" className="text-accent hover:underline">Microsoft 365</Link> with advanced security, encrypted communications, automated backups with tested recovery, endpoint protection (see <Link href="/cybersecurity" className="text-accent hover:underline">cybersecurity</Link>), and full documentation.
                </p>
                <p className="text-sm font-headline font-bold text-accent">Quoted on scope</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover">
                <h3 className="text-lg mb-2">Ongoing Compliance Management</h3>
                <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal mb-3">
                  As part of a <Link href="/managed-it-support" className="text-accent hover:underline">Compliance Plus Managed IT plan</Link>, DORA compliance monitoring is included &mdash; not an add-on. I keep your systems aligned with requirements as the supporting Regulatory Technical Standards evolve.
                </p>
                <p className="text-sm font-headline font-bold text-accent">Included in Compliance Plus</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover">
                <h3 className="text-lg mb-2">Audit-Ready Documentation</h3>
                <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal mb-3">
                  When a financial regulator (Central Bank of Ireland), auditor, or corporate client asks to see evidence of your IT resilience, you have it &mdash; clear, current, and comprehensive.
                </p>
                <p className="text-sm font-headline font-bold text-accent">Included with assessments</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Common Questions</span>
            <h2 className="text-3xl">DORA &mdash; Answered in Plain English</h2>
          </FadeIn>
          <FadeIn>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {[
                { id: "d-1", q: "I\u2019m a small accountancy practice \u2014 does DORA really apply to me?", a: "Generally, no. A standard accountancy practice doing tax, bookkeeping, and audit work is not in DORA scope. DORA applies to specific regulated financial entities listed in the regulation: banks, credit unions, investment firms, insurance undertakings, pension funds, and similar. If your practice also provides MiFID-regulated investment advice, that specific activity could fall in scope. If you want certainty, I can review your services against DORA\u2019s scope for free." },
                { id: "d-2", q: "Does this apply to Crettyard Digital too?", a: "Crettyard Digital is not formally designated as a \u2018critical ICT third-party service provider\u2019 under DORA \u2014 that designation is made by European Supervisory Authorities and applies to providers whose failure would impact the financial system, typically major cloud platforms. However, DORA requires regulated financial clients to perform due diligence on all their ICT providers. I supply the documentation, security controls, service continuity plans, and contractual terms that my regulated clients need to satisfy their DORA obligations." },
                { id: "d-3", q: "How is DORA different from NIS2?", a: "NIS2 covers critical infrastructure and supply chains broadly. DORA is specifically for the financial sector and its technology providers. There\u2019s overlap in security requirements, but DORA adds financial-sector-specific obligations around resilience testing and third-party risk management." },
                { id: "d-4", q: "What does a DORA readiness assessment involve?", a: "I review your current IT setup \u2014 email security, backup systems, network configuration, endpoint protection, access controls, and incident response capabilities \u2014 against DORA\u2019s ICT Risk Management Framework and the supporting Regulatory Technical Standards. You get a prioritised report showing what\u2019s compliant, what needs fixing, and what it will cost." },
                { id: "d-5", q: "How long does it take to become DORA-ready?", a: "It depends on your current setup. Some firms are already close and just need documentation and a few configuration changes. Others may need more significant upgrades \u2014 particularly around incident reporting timelines, resilience testing (including Threat-Led Penetration Testing where scoped in), and cloud concentration risk documentation. I\u2019ll give you a realistic timeline after the initial assessment." },
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

      {/* Related services */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-10">
            <span className="eyebrow mb-3 inline-block">Related Services</span>
            <h2 className="text-2xl">How DORA Fits With the Rest of Your IT</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/cybersecurity", title: "Cybersecurity & NIS2", desc: "Shared security foundations: MFA, EDR, phishing protection. NIS2 overlaps significantly with DORA on technical controls." },
              { href: "/managed-it-support", title: "Managed IT Support", desc: "Comprehensive-tier managed IT bundles DORA compliance monitoring with fixed-fee proactive administration." },
              { href: "/microsoft-365", title: "Microsoft 365", desc: "The secure email, Teams, and document platform I configure to meet DORA's ICT Risk Management and access control requirements." },
              { href: "/professional-services", title: "IT for Professional Services", desc: "Wider picture IT support for accountants, solicitors, and consultants \u2014 including those with regulated investment activities." },
            ].map((item) => (
              <StaggerItem key={item.href}>
                <Link href={item.href}>
                  <div className="bg-[#f3f4f5] p-6 rounded-2xl card-hover cursor-pointer h-full">
                    <h3 className="text-base mb-2">{item.title}</h3>
                    <p className="text-foreground text-sm font-sans mb-3">{item.desc}</p>
                    <span className="text-accent text-sm font-headline font-bold inline-flex items-center">Learn more <ArrowRight size={14} className="ml-1" /></span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <SpotlightCTA
        eyebrow="Get Ahead of the Regulation"
        heading="Get DORA-Ready Before Your Clients Ask"
        subtext="Book a free DORA readiness review. I'll assess your IT setup against the requirements and give you a clear, prioritised action plan."
        primaryText="Book a Free DORA Review"
        primaryHref="/contact#send-message"
        secondaryText="See Professional Services IT"
        secondaryHref="/professional-services"
      />
    </div>
  );
}
