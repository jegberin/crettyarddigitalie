import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, ShieldAlert, Lock, Mail, Users, FileCheck, CheckCircle, ArrowRight, AlertTriangle, Download, Eye } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Cybersecurity() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-20 md:py-28">
        <GridLines cols={12} rows={8} color="#ffffff" opacity={0.05} />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <FadeIn direction="up">
            <span className="eyebrow mb-4 inline-block">Cybersecurity &amp; Compliance</span>
            <h1 className="display-heading text-white mb-6 leading-tight">
              Cybersecurity and Compliance for Small Businesses &mdash; Before Something Goes Wrong
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8">
              You don't need to be a big company to be a target &mdash; or to face compliance obligations. Cyber attacks hit small businesses every week in Ireland. And EU regulations like NIS2, GDPR, and the Accessibility Act now apply to more businesses than ever. I provide the security and compliance you need &mdash; in plain English, at a price that makes sense.
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
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Why This Matters Now</span>
            <h2 className="text-3xl md:text-4xl mb-6">The Threat Is Real. The Regulations Are Here.</h2>
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
            <p className="text-lg text-foreground font-sans font-bold">
              The good news? Most of this is preventable and manageable &mdash; with the right setup and the right guidance.
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
              { icon: Eye, title: "Security Audit & Health Check", desc: "I review your email, devices, network, and cloud accounts. You get a plain-English report showing what\u2019s at risk and what to fix first.", price: "From \u20ac200" },
              { icon: Lock, title: "Multi-Factor Authentication (MFA)", desc: "The single most effective thing any business can do. I configure MFA across Microsoft 365, email, and critical accounts.", price: "From \u20ac100" },
              { icon: Mail, title: "Email Security Hardening", desc: "Advanced phishing protection, spam filtering, and email authentication (SPF, DKIM, DMARC) \u2014 stops criminals sending emails that look like they came from you.", price: "From \u20ac150" },
              { icon: Users, title: "Staff Cyber Awareness Training", desc: "Over 90% of attacks start with a human mistake. Practical, jargon-free training so your team spots phishing and social engineering.", price: "From \u20ac250" },
              { icon: Shield, title: "Endpoint Protection", desc: "Business-grade antivirus and threat detection for laptops, desktops, and mobiles. Not consumer software \u2014 real protection.", price: "Included in Managed IT" },
              { icon: Download, title: "Backup & Recovery Planning", desc: "Automated backups and tested recovery so ransomware becomes an inconvenience, not a catastrophe.", price: "Included in Managed IT" },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-7 rounded-2xl card-hover shadow-sm">
                  <item.icon className="text-accent mb-4" size={28} />
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
              <ul className="space-y-3 mb-8">
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

          <FadeIn>
            <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Download className="text-accent shrink-0" size={28} />
              <div className="flex-1">
                <p className="font-headline font-bold text-primary mb-1">Free NIS2 IT Checklist for Small Businesses</p>
                <p className="text-sm text-foreground font-sans">A plain-English checklist covering the five things every Irish small business should have in place. Enter your email and I'll send it straight to you.</p>
              </div>
              <Link href="/contact#send-message">
                <Button className="shrink-0">Download Checklist</Button>
              </Link>
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
                { id: "cs-5", q: "Can you help pass a client\u2019s IT security assessment?", a: "Yes. Larger clients and corporate counterparties increasingly require their suppliers to demonstrate IT security standards. I implement the measures needed and provide documentation to prove compliance." },
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
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-10">
            <span className="eyebrow mb-5 inline-block">Pairs With</span>
            <h2 className="text-3xl mb-3">Security Is Only as Strong as What It Runs On</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              { href: "/managed-hardware", title: "Managed Hardware", desc: "Turnkey PCs and servers delivered with full-disk encryption, MFA, and hardened baseline already configured." },
              { href: "/managed-it-support", title: "Managed IT Support", desc: "Ongoing monitoring, patching, and compliance management as a fixed monthly service." },
              { href: "/microsoft-365", title: "Microsoft 365", desc: "Properly configured cloud mail and files with business-grade security controls." },
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
