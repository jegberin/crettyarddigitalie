import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, ShieldAlert, FileCheck, CheckCircle, ArrowRight, AlertTriangle } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";
import { CredentialBand } from "@/components/CredentialBand";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroMfaInAction from "@assets/cyber-hero-mfa-in-action.webp";
import iconSecurityAudit from "@assets/concept-security-audit.webp";
import iconMfaPadlock from "@assets/concept-mfa-padlock.webp";
import iconEmailShield from "@assets/concept-email-shield.webp";
import iconTraining from "@assets/concept-training.webp";
import iconEndpointSecurity from "@assets/concept-endpoint-security.webp";
import iconCloudBackup from "@assets/concept-cloud-backup.webp";

export default function Cybersecurity() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-20 md:py-28">
        <GridLines cols={12} rows={8} color="#ffffff" opacity={0.05} />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <FadeIn direction="up">
              <span className="eyebrow mb-4 inline-block">Cybersecurity &amp; Compliance</span>
              <h1 className="display-sm text-white mb-6">
                Cybersecurity and Compliance for Small Businesses &mdash; Before Something Goes Wrong
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8">
                You don't need to be a big company to be a target &mdash; or to face compliance obligations. Cyber attacks hit small businesses every week across Ireland. EU regulations like NIS2, GDPR, DORA, and the European Accessibility Act now apply to more businesses than ever. Built on a foundation of 26 industry certifications including Microsoft Azure Solutions Architect Expert, Intel Cloud Security, and Dell Infrastructure Security &mdash; I deliver practical cybersecurity grounded in NCSC Cyber Essentials, Microsoft Defender, MFA (phishing-resistant where it matters), and Zero Trust principles. All in plain English, at a price that makes sense.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact#send-message">
                  <Button size="lg">Book a Free Security Review</Button>
                </Link>
                <a href="#nis2">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Learn About NIS2 &darr;
                  </Button>
                </a>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <img
                src={heroMfaInAction}
                alt="A smartphone showing a Microsoft-style multi-factor authentication prompt with an Approve button, held above a laptop displaying a matching sign-in verification screen on a small Irish-office desk"
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

      {/* Why It Matters */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Why This Matters Now</span>
            <h2 className="text-3xl md:text-4xl mb-6">The Setup You Want in Place Before Something Goes Wrong</h2>
            <p className="text-foreground text-lg leading-relaxed max-w-2xl mx-auto font-sans">
              Most small business owners don&rsquo;t lie awake worrying about specific threats. They lie awake wondering whether anyone competent is thinking about it for them. The threats below are real and the regulations are here &mdash; the work is to put the right setup in place calmly, before something goes wrong, not to scramble in a panic afterwards.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-10">
            <FadeIn>
              <div className="bg-red-50/60 p-8 rounded-2xl">
                <h3 className="text-xl mb-4 text-red-800 flex items-center gap-2">
                  <AlertTriangle size={22} className="text-red-500" />
                  The Cybersecurity Problem
                </h3>
                <p className="text-foreground text-[15px] leading-relaxed font-sans mb-4">
                  Small businesses are targeted specifically because they have weaker defences, less awareness, and no dedicated IT staff. Here's what a successful attack looks like:
                </p>
                <ul className="space-y-3">
                  {[
                    "A phishing email gives an attacker access to your email, contacts, and files",
                    "Ransomware encrypts every file \u2014 you\u2019re locked out and asked to pay thousands",
                    "A data breach exposes client information \u2014 GDPR fines and reputational damage follow",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[14px] font-sans text-red-800/80">
                      <ShieldAlert className="text-red-400 shrink-0 mt-0.5" size={15} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-amber-50/60 p-8 rounded-2xl">
                <h3 className="text-xl mb-4 text-amber-800 flex items-center gap-2">
                  <FileCheck size={22} className="text-amber-600" />
                  The Compliance Problem
                </h3>
                <p className="text-foreground text-[15px] leading-relaxed font-sans mb-4">
                  New EU regulations are tightening requirements &mdash; and they apply to far more businesses than most people realise:
                </p>
                <ul className="space-y-3">
                  {[
                    "NIS2 \u2014 MSPs and supply chain businesses must implement strict cybersecurity",
                    "GDPR \u2014 The Irish DPC is increasingly active in enforcement",
                    "EAA \u2014 Websites selling online must be accessible to people with disabilities",
                    "ePrivacy \u2014 Websites cannot load tracking cookies without explicit consent",
                    "DORA \u2014 regulated financial entities must meet banking-grade operational resilience standards",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[14px] font-sans text-amber-800/80">
                      <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={15} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="text-center mt-10">
            <p className="text-lg text-foreground font-sans font-bold mb-2">
              The good news? Most of this is preventable and manageable &mdash; with the right setup and the right guidance.
            </p>
            <p className="text-[15px] text-foreground/80 font-sans max-w-2xl mx-auto">
              Cybersecurity fits alongside <Link href="/managed-it-support" className="text-accent hover:underline">managed IT</Link>, <Link href="/microsoft-365" className="text-accent hover:underline">Microsoft 365</Link>, and <Link href="/web-design" className="text-accent hover:underline">web design</Link> &mdash; with <Link href="/grants-funding" className="text-accent hover:underline">Grow Digital Voucher</Link> funding available for qualifying new security subscriptions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Cybersecurity Services */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Cybersecurity Services</span>
            <h2 className="text-3xl">Practical Security &mdash; Not Scare Tactics</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {[
              { img: iconSecurityAudit, alt: "Glass magnifying glass over a glass checklist representing a security audit and health check", title: "Security Audit & Health Check", desc: "I review your email, devices, network, and cloud accounts against Cyber Essentials baselines. You get a plain-English report showing what\u2019s at risk and what to fix first.", price: "From \u20ac200" },
              { img: iconMfaPadlock, alt: "Glass padlock representing multi-factor authentication and account security", title: "Multi-Factor Authentication (MFA)", desc: "The single most effective thing any business can do. I configure MFA (phishing-resistant FIDO2 / passkeys where it matters) across Microsoft 365, email, and critical accounts.", price: "From \u20ac100" },
              { img: iconEmailShield, alt: "Glass envelope with a glass shield representing email security hardening", title: "Email Security Hardening", desc: "Advanced phishing protection via Microsoft Defender for Office 365, spam filtering, and email authentication (SPF, DKIM, DMARC) \u2014 stops criminals sending emails that look like they came from you.", price: "From \u20ac150" },
              { img: iconTraining, alt: "Glass lightbulb with a glass speech bubble representing staff cyber awareness training", title: "Staff Cyber Awareness Training", desc: "Over 90% of attacks start with a human mistake. Practical, jargon-free training so your team spots phishing and social engineering.", price: "From \u20ac250" },
              { img: iconEndpointSecurity, alt: "Glass laptop with a padlock in its screen representing endpoint detection and response (EDR)", title: "Endpoint Protection (EDR)", desc: "Business-grade endpoint detection and response (EDR) using Microsoft Defender for Endpoint \u2014 real behavioural protection for laptops, desktops, and mobiles, not the consumer kind.", price: "Included in Managed IT" },
              { img: iconCloudBackup, alt: "Glass cloud containing a shield with a circular-arrow representing immutable backups and recovery", title: "Backup & Recovery Planning", desc: "Automated backups with immutable snapshots and tested recovery so ransomware becomes an inconvenience, not a catastrophe. Zero Trust by default.", price: "Included in Managed IT" },
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
                  <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal mb-3">{item.desc}</p>
                  <p className="text-sm font-headline font-bold text-accent">{item.price}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Compliance Services */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Compliance Services</span>
            <h2 className="text-3xl">Regulatory Compliance Made Manageable</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Web Compliance Audit", desc: "Comprehensive check of your website for GDPR (forms, data collection, privacy policy), cookie consent (ePrivacy), and accessibility (EAA / WCAG). Plain-English report with prioritised fixes.", price: "From \u20ac250" },
              { title: "IT Resilience Audit", desc: "Check of your network and Microsoft 365 setup against NIS2 standards (and DORA, where applicable). Identifies gaps and provides a clear remediation plan.", price: "From \u20ac300" },
              { title: "Cookie Consent Setup", desc: "Proper Consent Management Platform implementation so your website only loads tracking cookies after explicit user consent.", price: "From \u20ac150" },
              { title: "Accessibility Audit & Remediation", desc: "Full audit of your website against EAA / WCAG standards, with a prioritised fix list. I can implement all fixes too.", price: "From \u20ac300" },
              { title: "NIS2 Readiness Package", desc: "Bundled assessment covering network security, M365 hardening, MFA, incident response planning, backup verification, and documentation.", price: "From \u20ac500" },
              { title: "DORA Readiness (Financial Sector)", desc: "For credit unions, insurance firms, investment firms, and other regulated financial entities \u2014 ensures your IT meets the operational resilience standards DORA requires. Includes scope review if you\u2019re unsure whether DORA applies to you.", price: "From \u20ac400" },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover">
                  <h3 className="text-lg mb-2">{item.title}</h3>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal mb-3">{item.desc}</p>
                  <p className="text-sm font-headline font-bold text-accent">{item.price}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Supply-chain proof block */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <div className="bg-[#f3f4f5] p-8 md:p-10 rounded-2xl">
              <div className="flex items-start gap-4 mb-4">
                <Shield className="text-accent shrink-0 mt-1" size={28} />
                <div>
                  <p className="text-[13px] font-headline font-bold uppercase tracking-wider text-accent mb-2">Supply-chain security in practice</p>
                  <p className="text-foreground text-lg leading-relaxed font-sans mb-4">
                    For Carlow plant-hire and civil engineering firm Nurney Plant and Civil, the same install delivered a professional website, Microsoft 365 with MFA, and hardened business Wi-Fi &mdash; so they can answer the security questions main contractors now ask under NIS2 supply-chain rules.
                  </p>
                  <p className="font-headline font-bold text-primary text-sm">Brian, Nurney Plant and Civil &mdash; Co. Carlow</p>
                </div>
              </div>
              <div className="mt-4 pl-0 md:pl-12">
                <Link href="/portfolio#project-nurney-plant-civil" className="text-accent font-headline font-bold inline-flex items-center text-sm hover:text-primary transition-colors">
                  View full case study <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* NIS2 Section */}
      <section id="nis2" className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">NIS2 Directive</span>
            <h2 className="text-3xl md:text-4xl mb-4">Is Your Business Affected by NIS2?</h2>
            <p className="text-foreground max-w-2xl mx-auto font-sans font-normal">
              NIS2 is the EU's major cybersecurity directive. It requires strict security measures and incident reporting &mdash; and it affects far more Irish businesses than most people realise.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm mb-10">
              <h3 className="text-xl mb-4">You're likely affected if:</h3>
              <ul className="space-y-3 mb-6">
                {[
                  "You provide IT services, managed services, or digital infrastructure to other businesses",
                  "You\u2019re part of the supply chain for a larger company in manufacturing, food, transport, or healthcare",
                  "Your clients are asking you to prove your IT security is up to standard",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground text-[15px] font-sans">
                    <CheckCircle className="text-accent shrink-0 mt-0.5" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[14px] text-foreground/80 font-sans mb-8">
                This is particularly common for <Link href="/trades" className="text-accent hover:underline">trades and construction firms</Link> &mdash; if a main contractor is asking about your IT security, that&rsquo;s the supply-chain angle in action. Regulated financial firms should see <Link href="/dora-compliance" className="text-accent hover:underline">DORA compliance</Link> instead.
              </p>

              <h3 className="text-xl mb-4">The five things NIS2 requires:</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { num: "01", title: "Risk Management", desc: "Regular cyber risk assessments" },
                  { num: "02", title: "Incident Reporting", desc: "24-hour notification to the NCSC" },
                  { num: "03", title: "Supply Chain Security", desc: "Ensure vendors are secure" },
                  { num: "04", title: "Access Control", desc: "MFA, secure comms, strict policies" },
                  { num: "05", title: "Business Continuity", desc: "Tested backups and disaster recovery" },
                ].map((item, i) => (
                  <div key={i} className="bg-[#f3f4f5] p-4 rounded-xl text-center">
                    <span className="text-2xl font-headline font-extrabold text-primary/10">{item.num}</span>
                    <h4 className="text-sm font-headline font-bold mt-1 mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground font-sans">{item.desc}</p>
                  </div>
                ))}
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
            <h2 className="text-3xl">Answered in Plain English</h2>
          </FadeIn>
          <FadeIn>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {[
                { id: "cs-1", q: "Do these regulations apply to my small business?", a: "Almost certainly some of them do. If you have a website with a contact form, GDPR applies. If you sell online, the EAA likely applies. If you\u2019re part of a supply chain for a larger company, NIS2 may apply. I can tell you exactly what\u2019s relevant in a free consultation." },
                { id: "cs-2", q: "I\u2019m just a tradesperson \u2014 do I really need cybersecurity?", a: "If you use email, send invoices digitally, or store customer information on a computer or phone \u2014 yes. A phishing email doesn\u2019t care how big your business is. And if one of your larger clients asks about your security posture (which is happening more under NIS2), you\u2019ll need to be ready." },
                { id: "cs-3", q: "What\u2019s the difference between the Web Compliance Audit and the IT Resilience Audit?", a: "The Web Compliance Audit focuses on your website \u2014 GDPR, cookies, and accessibility. The IT Resilience Audit focuses on your network and Microsoft 365 environment \u2014 NIS2, DORA, and security standards. Many businesses benefit from both." },
                { id: "cs-4", q: "How much does compliance cost?", a: "It depends on your current setup. A basic cookie consent setup might be \u20ac150. A full NIS2 readiness package starts at \u20ac500. I\u2019ll always give you a clear quote after a free assessment \u2014 and prioritise what\u2019s most urgent." },
                { id: "cs-5", q: "Can you help pass a client\u2019s IT security assessment?", a: "Yes. Larger clients and corporate counterparties increasingly require their suppliers to demonstrate IT security standards (NIS2 supply-chain, ISO 27001-aligned questionnaires, Cyber Essentials). I implement the technical measures and provide documentation to prove compliance." },
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

      {/* Related Services */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-10">
            <span className="eyebrow mb-5 inline-block">Pairs With</span>
            <h2 className="text-3xl mb-3">Security Is Only as Strong as What It Runs On</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/managed-it-support", title: "Managed IT Support", desc: "Ongoing monitoring, patching, and compliance management as a fixed monthly service." },
              { href: "/managed-hardware", title: "Managed Hardware", desc: "Turnkey PCs and servers delivered with full-disk encryption, MFA, and hardened baseline already configured." },
              { href: "/microsoft-365", title: "Microsoft 365", desc: "Properly configured cloud mail and files with business-grade security controls." },
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

      {/* What competent looks like */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn>
            <span className="eyebrow mb-5 inline-block">In One Paragraph</span>
            <h2 className="text-3xl md:text-4xl mb-6">What Competent Looks Like</h2>
            <p className="text-foreground text-lg leading-relaxed font-sans">
              MFA enforced everywhere, on every account, no exceptions. Backups that are tested every quarter, not just configured once. Documented controls mapped to GDPR, NIS2, and the Accessibility Act. An incident response plan that says, in plain English, what happens at hour one, day one, and week one. Quarterly reviews that focus on what&rsquo;s changed in your business &mdash; not what&rsquo;s changed in the threat report. And one accountable person to contact when something goes wrong. That&rsquo;s the standard. It is not aspirational; it&rsquo;s the default.
            </p>
          </FadeIn>
        </div>
      </section>

      <SpotlightCTA
        eyebrow="Ready to Get Started?"
        heading="Find Out Where You're Vulnerable"
        subtext="Book a free security and compliance review. I'll assess your current protections and give you a clear, prioritised action plan &mdash; no scare tactics, no jargon."
        primaryText="Book a Free Security Review"
        primaryHref="/contact#send-message"
        secondaryText="Explore Managed IT Support"
        secondaryHref="/managed-it-support"
      />
    </div>
  );
}
