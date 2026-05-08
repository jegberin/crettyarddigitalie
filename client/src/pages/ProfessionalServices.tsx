import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";
import { TrustMarquee } from "@/components/TrustMarquee";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroOffice from "@assets/pro-services-hero-office.webp";
import iconEmailShield from "@assets/concept-email-shield.webp";
import icon365Admin from "@assets/concept-365-admin.webp";
import iconMfaPadlock from "@assets/concept-mfa-padlock.webp";
import iconGdprShield from "@assets/concept-gdpr-shield.webp";
import iconAccessibilityEaa from "@assets/concept-accessibility-eaa.webp";
import iconComplianceCheck from "@assets/concept-compliance-check.webp";

export default function ProfessionalServices() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-20 md:py-28">
        <GridLines cols={12} rows={8} color="#ffffff" opacity={0.05} />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <FadeIn direction="up">
              <span className="eyebrow mb-4 inline-block">IT for Professional Services</span>
              <h1 className="display-sm text-white mb-6">
                Managed IT, Email, and Compliance for Accountants, Solicitors, and Professional Firms
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8">
                You handle sensitive client data every day. Your professional reputation &mdash; whether you&rsquo;re regulated by the Law Society of Ireland, Chartered Accountants Ireland, CPA Ireland, or the Central Bank &mdash; depends on that data being secure, your email being reliable, and your technology meeting the regulatory standards your industry demands. I provide the IT infrastructure, security, and compliance you need for firms in Dublin, Cork, Galway, and right across Ireland &mdash; without the corporate price tag or the jargon.
              </p>
              <p className="text-base md:text-lg text-accent font-headline font-bold mb-8">
                Big-firm controls. Small-firm responsiveness. Mid-firm pricing.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact#send-message">
                  <Button size="lg">Book a Free IT &amp; Compliance Review</Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    See Pricing &rarr;
                  </Button>
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <img
                src={heroOffice}
                alt="A tidy Irish professional services office desk with an open case file, fountain pen, green banker\u2019s lamp and a laptop showing a Microsoft SharePoint document library \u2014 evokes a solicitor or accountancy firm"
                width={1920}
                height={1080}
                className="w-full h-auto rounded-2xl shadow-2xl"
                loading="eager"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <TrustMarquee />
      {/* Why You Need Specialist IT */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">The Challenge</span>
            <h2 className="text-3xl md:text-4xl mb-6">Your Clients Trust You With Their Most Sensitive Information. Is Your IT Worthy of That Trust?</h2>
          </FadeIn>

          <StaggerContainer className="space-y-6">
            {[
              { title: "Regulatory pressure is intensifying", desc: "GDPR enforcement is tightening and the Data Protection Commission is active. Larger corporate clients increasingly audit their suppliers\u2019 IT under NIS2 supply-chain rules. The European Accessibility Act applies to consumer-facing digital services from June 2025. For regulated financial firms, DORA adds specific operational-resilience requirements. A data breach \u2014 or a failed vendor assessment \u2014 isn\u2019t just an IT glitch. It\u2019s a reputational and legal crisis." },
              { title: "Client expectations are rising", desc: "Corporate clients, banks, and insurers increasingly require their professional advisors to demonstrate adequate IT security and data handling. \u201CWe use Gmail and a shared folder\u201D is no longer an acceptable answer." },
              { title: "Your time is valuable", desc: "Every hour you spend troubleshooting email, fixing printers, or figuring out OneDrive is an hour you\u2019re not billing. A managed IT service means technology is someone else\u2019s job \u2014 mine." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#f3f4f5] p-7 rounded-2xl">
                  <h3 className="text-lg mb-2">{item.title}</h3>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What I Provide */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">What You Get</span>
            <h2 className="text-3xl">IT Built for Professional Firms</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {[
              { img: iconEmailShield, alt: "Glass envelope with a glass shield representing GDPR-compliant business email for regulated firms", title: "Microsoft 365 for Regulated Environments", desc: "Professional @yourfirm.ie email with encrypted communications, data retention policies, GDPR-compliant EU data residency, and Multi-Factor Authentication. Shared calendars, Teams, and OneDrive/SharePoint for secure document management." },
              { img: icon365Admin, alt: "Glass cog with an envelope inside representing Microsoft 365 administration and compliance management", title: "Managed IT With Compliance Built In", desc: "Proactive monitoring, security updates, endpoint protection, and cloud backup \u2014 with GDPR, NIS2, and DORA compliance checks integrated into the service. Not bolted on as an extra." },
              { img: iconMfaPadlock, alt: "Glass padlock representing secure SharePoint document management for professional firms", title: "Secure Document Management", desc: "A properly structured SharePoint environment for sensitive client files, board minutes, CRO filings, and regulatory documents. Version-controlled, access-restricted, and backed up automatically." },
              { img: iconGdprShield, alt: "Glass shield with a tick and EU stars representing cybersecurity for professional services firms", title: "Cybersecurity for Your Risk Profile", desc: "Endpoint Security (Microsoft Defender + DNS protection) at €50/user/month, plus Crettyard Edge — a leased managed firewall — at €150/month per site for firms inside DORA or NIS2 supply-chain scope. Phishing protection, staff awareness training, and incident response planning included. Documented and audit-ready for when clients or regulators ask." },
              { img: iconAccessibilityEaa, alt: "Glass accessibility symbol representing an EAA-compliant website for professional firms", title: "A Website That Reflects Your Standards", desc: "Clean, credible, and compliant with GDPR, cookie regulations, and the European Accessibility Act. Built to attract the right clients and demonstrate the professionalism your firm stands for." },
              { img: iconComplianceCheck, alt: "Glass clipboard with ticks representing DORA readiness and audit-ready compliance documentation", title: "DORA Readiness (Financial Services)", desc: "If your firm is a credit union, investment firm, insurance undertaking or broker, or similar regulated financial entity, DORA requires your technology to meet operational resilience standards. I ensure your systems qualify and provide documentation." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-7 rounded-2xl card-hover shadow-sm">
                  <img
                    src={item.img}
                    alt={item.alt}
                    width={1000}
                    height={1000}
                    className="w-20 h-20 mb-4"
                    loading="lazy"
                  />
                  <h3 className="text-lg mb-2">{item.title}</h3>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Supporting Your Compliance Obligations - honest framing */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Built on Honesty</span>
            <h2 className="text-3xl md:text-4xl mb-6">Supporting Your Compliance Obligations</h2>
            <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal max-w-2xl mx-auto">
              Technical controls support compliance. They don&rsquo;t deliver it on their own. Here&rsquo;s exactly what I cover &mdash; and where you genuinely need a specialist.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {/* What I cover */}
            <FadeIn>
              <div className="bg-[#f3f4f5] p-8 rounded-2xl h-full" data-testid="card-covered">
                <div className="flex items-center gap-2 mb-5">
                  <CheckCircle className="text-accent shrink-0" size={22} />
                  <h3 className="text-lg mb-0">What I Cover Directly</h3>
                </div>
                <ul className="space-y-4 font-sans text-[15px] leading-relaxed">
                  <li>
                    <strong className="text-primary">GDPR.</strong> Encrypted email, secure file storage, documented access controls, retention policies, and breach-response readiness.
                  </li>
                  <li>
                    <strong className="text-primary">NIS2 supply-chain requests.</strong> Documented security controls, MFA, backup and restore procedures, and incident-response evidence &mdash; the kind of answers your larger clients put in their supplier questionnaires.
                  </li>
                  <li>
                    <strong className="text-primary">European Accessibility Act.</strong> WCAG-aligned website builds with accessibility testing, for consumer-facing digital services in scope from 28 June 2025.
                  </li>
                  <li>
                    <strong className="text-primary">DORA</strong> <em className="text-muted-foreground">(regulated financial clients only)</em>. Documentation, contractual terms, and security controls that support a regulated financial entity&rsquo;s third-party risk management.
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Where I signpost */}
            <FadeIn delay={0.1}>
              <div className="bg-[#f3f4f5] p-8 rounded-2xl h-full" data-testid="card-signposted">
                <div className="flex items-center gap-2 mb-5">
                  <ArrowRight className="text-accent shrink-0" size={22} />
                  <h3 className="text-lg mb-0">Where I Signpost, Not Sell</h3>
                </div>
                <ul className="space-y-4 font-sans text-[15px] leading-relaxed">
                  <li>
                    <strong className="text-primary">ISO 27001 / ISO 9001 certification.</strong> These are documented management-system programmes audited by accredited bodies (NSAI, BSI, and similar). I can introduce you to an ISO consultant when you&rsquo;re ready.
                  </li>
                  <li>
                    <strong className="text-primary">SOC 2 audits.</strong> Conducted by CPA firms against AICPA Trust Services Criteria. Relevant mostly for SaaS providers selling to US enterprise. Not my specialism.
                  </li>
                  <li>
                    <strong className="text-primary">PCI DSS.</strong> For most small firms, your payment processor (Stripe, SumUp, Square) handles the bulk of this via the SAQ-A self-assessment. I&rsquo;ll make sure your network doesn&rsquo;t put you outside that scope.
                  </li>
                  <li>
                    <strong className="text-primary">UK Cyber Essentials Plus.</strong> Requires assessment by an IASME-licensed body. I can signpost you to an assessor if you&rsquo;re bidding on UK contracts that require it.
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="mt-10">
            <div className="bg-primary p-8 rounded-2xl text-center">
              <p className="text-white text-[15px] md:text-base font-sans leading-relaxed max-w-3xl mx-auto">
                Real compliance needs policies, training, management oversight, and in many cases formal certification. My job is to <strong className="text-accent">build the technical foundation properly, document what I&rsquo;ve done, and be honest about where you need specialists</strong>. That&rsquo;s a better long-term deal than any &ldquo;ISO-ready&rdquo; buzzword.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
      {/* Worked example */}
      <section className="py-20 bg-accent/5 border-y border-accent/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <h2 className="text-2xl mb-4">A Typical Setup for a Professional Firm</h2>
                <p className="text-foreground text-[15px] leading-relaxed font-sans mb-4">
                  A regulated 10-person accountancy or legal practice typically pays:
                </p>
                <ul className="space-y-2 mb-4 list-none p-0 m-0">
                  <li className="flex items-start gap-2 text-[14px] font-sans">
                    <CheckCircle className="text-accent shrink-0 mt-0.5" size={15} />
                    <span><strong>&euro;1,299 one-off</strong> for a Business website + &euro;79/month Premium care plan</span>
                  </li>
                  <li className="flex items-start gap-2 text-[14px] font-sans">
                    <CheckCircle className="text-accent shrink-0 mt-0.5" size={15} />
                    <span><strong>&euro;42.50 &times; 10 = &euro;425/month</strong> for Microsoft 365 with phone</span>
                  </li>
                  <li className="flex items-start gap-2 text-[14px] font-sans">
                    <CheckCircle className="text-accent shrink-0 mt-0.5" size={15} />
                    <span><strong>&euro;95 &times; 10 = &euro;950/month</strong> for Managed IT Compliance Plus (NIS2, GDPR, audit-ready evidence)</span>
                  </li>
                </ul>
                <p className="font-headline font-bold text-primary mb-2">Total: &euro;1,299 one-off + roughly &euro;1,454/month</p>
                <p className="text-sm text-foreground font-sans italic">Significantly less than hiring a junior IT person, with a far broader skillset and audit-ready compliance.</p>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/contact#send-message">
                  <Button size="lg" className="w-full">Book IT &amp; Compliance Review</Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="w-full">See Full Pricing</Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Common Questions</span>
            <h2 className="text-3xl">For Professional Services Firms</h2>
          </FadeIn>
          <FadeIn>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {[
                { id: "ps-1", q: "What regulations apply to my firm?", a: "At minimum: GDPR (you handle personal data), ePrivacy (your website uses cookies), and the European Accessibility Act (if you offer services online). If you\u2019re in financial services, DORA applies directly. If you\u2019re in a supply chain for larger regulated entities, NIS2 may apply. Solicitors also face Law Society of Ireland requirements, and accountants Chartered Accountants Ireland / CPA Ireland obligations. I\u2019ll assess exactly what\u2019s relevant in our initial review." },
                { id: "ps-2", q: "Can you help us pass a client\u2019s IT security assessment?", a: "Yes. Larger clients and corporate counterparties increasingly require professional firms to demonstrate IT security standards \u2014 often citing Article 32 of GDPR or NIS2 supplier questionnaires. I implement the technical measures needed and provide documentation to prove compliance." },
                { id: "ps-3", q: "Do you handle data migration from old systems?", a: "Yes. I migrate email (Gmail, Google Workspace, POP/IMAP, legacy Exchange), files, contacts, and calendars to Microsoft 365 safely, with zero data loss." },
                { id: "ps-4", q: "Is this more expensive than a generic IT provider?", a: "Not necessarily. The difference is that compliance is included in the service \u2014 not billed as an expensive add-on. For regulated firms, this often makes my service more cost-effective than a generic provider who doesn\u2019t understand your obligations." },
                { id: "ps-5", q: "What about DORA specifically?", a: "DORA applies to specific regulated financial entities: banks, credit unions, investment firms, insurance undertakings and intermediaries, pension funds, payment institutions, and similar. General accountancy or legal practices are not in scope unless they also perform regulated financial activities such as MiFID-regulated investment advice. If you serve financial sector clients under a supplier relationship, those clients may perform DORA-driven due diligence on your IT \u2014 I can help you respond. If you\u2019re unsure whether DORA applies to your firm, I can review your services against the regulation\u2019s scope for free." },
              ].map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border border-gray-100 rounded-xl px-6">
                  <AccordionTrigger className="text-left text-[15px] font-headline font-bold py-5">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-foreground leading-relaxed font-sans text-[15px] pb-5">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* Related services */}
      <section className="py-20 bg-[#f3f4f5] border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-10">
            <span className="eyebrow mb-3 inline-block">Related Services</span>
            <h2 className="text-2xl">Each Building Block in Detail</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/managed-it-support", title: "Managed IT Support", desc: "Fixed-fee proactive IT with Microsoft 365 admin, compliance monitoring, and direct access to me." },
              { href: "/microsoft-365", title: "Microsoft 365", desc: "The secure email, Teams, Teams Phone, and SharePoint platform your firm runs on \u2014 configured for regulated environments." },
              { href: "/cybersecurity", title: "Cybersecurity & Compliance", desc: "Full NIS2, GDPR, EAA and ePrivacy framework beyond the technical baseline here." },
              { href: "/dora-compliance", title: "DORA Compliance", desc: "For regulated financial firms \u2014 banks, credit unions, investment firms, insurance undertakings and brokers, pension funds." },
            ].map((item) => (
              <StaggerItem key={item.href}>
                <Link href={item.href}>
                  <div className="bg-white p-6 rounded-2xl card-hover cursor-pointer h-full">
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
        eyebrow="Ready to Get Started?"
        heading="Get IT and Compliance Right &mdash; Without the Complexity"
        subtext="Book a free IT and compliance review. I'll assess your current setup, identify regulatory gaps, and give you a clear plan &mdash; in plain English."
        primaryText="Book a Free IT &amp; Compliance Review"
        primaryHref="/contact#send-message"
        secondaryText="See Full Pricing"
        secondaryHref="/pricing"
      />
    </div>
  );
}
