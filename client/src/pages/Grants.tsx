import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { BadgeEuro, CheckCircle, XCircle, MapPin, AlertTriangle, ExternalLink } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// What IS eligible under Grow Digital Voucher
const eligible = [
  { title: "New software subscriptions", desc: "Software that is new to your business, for up to 12 months of subscription cost. Examples: CRM, e-commerce platforms, cloud accounting, cybersecurity, job tracking, electronic invoicing." },
  { title: "Microsoft 365 & office software", desc: "Standard office software like Microsoft 365 \u2014 but only if it's new to your business (not expanding an existing licence count)." },
  { title: "E-commerce platforms", desc: "Shopify, WooCommerce, Squarespace and similar \u2014 as subscription-based software platforms, not bespoke builds." },
  { title: "Training & IT configuration", desc: "Professional setup, integration, and staff training for the new software. Capped at 50% of the overall project cost." },
];

// What IS NOT eligible \u2014 this is the critical part most websites get wrong
const notEligible = [
  { title: "Bespoke website development", desc: "Custom-built websites (e.g., hand-coded WordPress themes) are explicitly excluded. Only subscription-based website platforms qualify." },
  { title: "Custom or bespoke software", desc: "Software developed specifically for your business doesn't qualify \u2014 only off-the-shelf subscription software." },
  { title: "Regulatory compliance systems", desc: "Systems whose primary purpose is regulatory compliance (e.g., GDPR tools) are not eligible." },
  { title: "Expanding existing licences", desc: "Adding more seats to software you already use doesn't qualify \u2014 it must be new to the business." },
  { title: "Hardware & networking equipment", desc: "Laptops, servers, routers, Wi-Fi equipment \u2014 none of these are covered by this scheme." },
  { title: "Ongoing maintenance & care plans", desc: "Monthly support or maintenance contracts don't qualify \u2014 only initial setup and first-year subscription." },
];

// Common rejection / delay reasons
const pitfalls = [
  { reason: "Skipping the Digital for Business step", fix: "You must complete a free Digital for Business consultation before applying. There is no shortcut \u2014 this is the gateway to the voucher." },
  { reason: "Applying for something that's not eligible", fix: "Bespoke websites, hardware, and ongoing services don't qualify. Matching your project to the scheme's rules is the single most important step." },
  { reason: "Paying invoices before approval", fix: "Any expense incurred before your voucher is officially approved cannot be claimed. Wait for your approval letter first." },
  { reason: "Incomplete quote documentation", fix: "Your quotes need proper business details (tax registration number or CRO number, itemised costs, clear scope). Missing details cause delays." },
  { reason: "Project scope doesn't match the Digital for Business report", fix: "The voucher funds what your consultant recommended. Going off-script leads to rejection." },
];

// Irish LEO information
const leoInfo = [
  { county: "Laois LEO", detail: "Based in Portlaoise. Check their current Digital for Business session schedule." },
  { county: "Carlow LEO", detail: "Based in Carlow town. Runs regular information sessions for SMEs." },
  { county: "Kilkenny LEO", detail: "Based in Kilkenny city. Covers the wider county for LEO supports." },
  { county: "Kildare LEO", detail: "Based in Naas. Covers Athy, Monasterevin and south Kildare." },
  { county: "Offaly LEO", detail: "Based in Tullamore. Covers Portarlington-Offaly side and Edenderry." },
  { county: "Tipperary LEO", detail: "Based in Clonmel and Nenagh. Covers the entire county." },
];

export default function Grants() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-20 md:py-28">
        <GridLines cols={12} rows={8} color="#ffffff" opacity={0.05} />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <FadeIn direction="up">
            <span className="eyebrow mb-4 inline-block">Grow Digital Voucher</span>
            <h1 className="display-sm text-white mb-6">
              Grow Digital Voucher &mdash; Up to &euro;5,000 Towards New Digital Tools for Your Business
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8">
              The Local Enterprise Office's Grow Digital Voucher scheme covers 50% of the cost of new software subscriptions and setup &mdash; up to &euro;5,000. It replaced the old Trading Online Voucher in December 2024, with broader eligibility but a narrower focus. Here's how it actually works, what it covers, and where I fit in.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact#send-message">
                <Button size="lg">Talk to Me About Your Project</Button>
              </Link>
              <a href="#eligibility">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Check Eligibility &darr;
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The scheme in plain English */}
      <section id="scheme" className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">The Scheme</span>
            <h2 className="text-3xl md:text-4xl mb-6">What Is the Grow Digital Voucher?</h2>
            <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal max-w-2xl mx-auto">
              The Grow Digital Voucher is a grant from your Local Enterprise Office (LEO) to help small businesses invest in digital tools. It replaced the old Trading Online Voucher (TOV) on 13 December 2024.
            </p>
          </FadeIn>

          <FadeIn className="mb-10">
            <div className="bg-accent/5 border border-accent/20 p-7 rounded-2xl">
              <h3 className="text-lg mb-4">The Key Facts</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Grant amount", value: "Up to \u20ac5,000 per application" },
                  { label: "Coverage", value: "50% of eligible costs" },
                  { label: "Minimum grant", value: "\u20ac500" },
                  { label: "Max applications", value: "2 (combined cap \u20ac5,000)" },
                  { label: "Eligible employee count", value: "1\u201350 employees" },
                  { label: "Trading requirement", value: "At least 6 months" },
                  { label: "LEO area", value: "Business must be in an LEO region" },
                  { label: "Tax clearance", value: "Current Revenue tax clearance required" },
                ].map((fact, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-xs text-muted-foreground font-sans uppercase tracking-wide">{fact.label}</span>
                    <span className="text-[15px] font-headline font-bold text-primary">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="bg-amber-50/60 border border-amber-200 p-6 rounded-2xl">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-amber-600 shrink-0 mt-1" size={22} />
                <div>
                  <h3 className="text-base font-headline font-bold mb-2 text-primary">Mandatory first step: Digital for Business</h3>
                  <p className="text-foreground text-[15px] font-sans">
                    Before you can apply for a Grow Digital Voucher, you must complete a <strong>Digital for Business</strong> consultation. This is a free LEO service &mdash; up to 3 days of a consultant's time &mdash; who reviews your business and produces a report recommending digital tools. The voucher funds what the report recommends. There is no shortcut past this step.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What IS eligible */}
      <section id="eligibility" className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">What It Covers</span>
            <h2 className="text-3xl mb-4">Eligible Expenditure</h2>
            <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal max-w-2xl mx-auto">
              The scheme funds digital software subscriptions (new to your business) plus the training and IT configuration needed to implement them.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {eligible.map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-6 rounded-2xl shadow-sm card-hover">
                  <div className="flex items-start gap-3 mb-2">
                    <CheckCircle className="text-accent shrink-0 mt-1" size={20} />
                    <h3 className="text-base font-headline font-bold text-primary">{item.title}</h3>
                  </div>
                  <p className="text-foreground text-[15px] font-sans ml-8">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What is NOT eligible - CRITICAL */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Important: What's Not Covered</span>
            <h2 className="text-3xl mb-4">Ineligible Expenditure</h2>
            <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal max-w-2xl mx-auto">
              This is where most websites and digital agencies mislead clients. Be clear on what the scheme does <strong>not</strong> cover:
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {notEligible.map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-red-50/40 border border-red-100 p-6 rounded-2xl">
                  <div className="flex items-start gap-3 mb-2">
                    <XCircle className="text-red-400 shrink-0 mt-1" size={20} />
                    <h3 className="text-base font-headline font-bold text-primary">{item.title}</h3>
                  </div>
                  <p className="text-foreground text-[15px] font-sans ml-8">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="mt-10">
            <div className="bg-[#f3f4f5] p-6 rounded-2xl text-center">
              <p className="text-foreground text-[15px] font-sans">
                <strong>The bottom line:</strong> the Grow Digital Voucher is a software adoption grant, not a general "digital project" grant. If you need a custom <Link href="/web-design" className="text-accent hover:underline">WordPress site</Link> built, that part of your project is <strong>not</strong> fundable. But if you're rolling out new <Link href="/microsoft-365" className="text-accent hover:underline">Microsoft 365</Link>, a CRM, an e-commerce platform, or <Link href="/cybersecurity" className="text-accent hover:underline">cybersecurity software</Link>, that <em>is</em> the kind of project the voucher is designed for.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Where Crettyard Digital fits in */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">My Role</span>
            <h2 className="text-3xl mb-4">Grow Digital Voucher Ready</h2>
            <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">
              I'm not an "approved LEO provider" &mdash; the scheme doesn't have one, despite what some agencies claim. What I do offer is an honest, scheme-ready approach.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6 mb-10">
            <StaggerItem>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-base font-headline font-bold mb-2 text-primary">Scheme-compliant invoicing</h3>
                <p className="text-foreground text-[15px] font-sans">I invoice with proper business details (tax registration, itemised scope) so your claim goes through cleanly.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-base font-headline font-bold mb-2 text-primary">Honest scope advice</h3>
                <p className="text-foreground text-[15px] font-sans">I'll tell you plainly which parts of your project are fundable under the voucher and which aren't.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-base font-headline font-bold mb-2 text-primary">Service alignment</h3>
                <p className="text-foreground text-[15px] font-sans"><Link href="/microsoft-365" className="text-accent hover:underline">Microsoft 365</Link> setup, CRM implementation, e-commerce platforms, <Link href="/cybersecurity" className="text-accent hover:underline">cybersecurity</Link> rollouts, and <Link href="/ai-readiness" className="text-accent hover:underline">Microsoft Copilot</Link> readiness &mdash; all things I do that fit the scheme.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-base font-headline font-bold mb-2 text-primary">Documentation support</h3>
                <p className="text-foreground text-[15px] font-sans">I'll provide the quotes, invoices, and project confirmation your LEO needs for drawdown.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn>
            <div className="bg-primary p-7 rounded-2xl text-white">
              <h3 className="text-lg text-white mb-3">What I don't do</h3>
              <p className="text-white/85 text-[15px] font-sans leading-relaxed mb-3">
                I don't apply on your behalf, and I don't offer formal grant advisory services. The Digital for Business consultant is independent of me &mdash; and must be. The application itself is yours to submit, and the LEO's decision is theirs alone.
              </p>
              <p className="text-white/85 text-[15px] font-sans leading-relaxed">
                What I will do is be straight with you about whether your project fits the scheme, help you understand the process, and deliver properly when you're approved. My quote is your quote &mdash; no surprise charges when it's time to claim.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The process */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">The Process</span>
            <h2 className="text-3xl">How It Actually Works</h2>
          </FadeIn>

          <StaggerContainer className="space-y-4 mb-14" staggerDelay={0.08}>
            {[
              { num: "01", title: "Contact your LEO about Digital for Business", desc: "This is your first move. It's free, and the report from this consultation is the gateway to the voucher. Takes a few weeks to arrange." },
              { num: "02", title: "Complete the Digital for Business project", desc: "The consultant spends up to 3 days reviewing your business, researching options, and producing a recommendations report." },
              { num: "03", title: "Scope your voucher project", desc: "Based on the report, decide what software and services you want to fund. This is where I can help scope the setup and configuration." },
              { num: "04", title: "Gather quotes", desc: "Get written quotes from your chosen suppliers (including me, if relevant). Quotes must have proper business details." },
              { num: "05", title: "Submit your application", desc: "You submit to your LEO with your Digital for Business report, quotes, and supporting documents. You do this, not me." },
              { num: "06", title: "Wait for approval", desc: "Do not incur any costs before approval. Timelines vary by LEO, typically a few weeks." },
              { num: "07", title: "Implement the project", desc: "Once approved, suppliers do the work. I deliver my part; the software subscription runs for its first year." },
              { num: "08", title: "Claim the grant", desc: "You submit paid invoices and completion declaration to your LEO. They pay 50% to you directly." },
            ].map((step, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#f3f4f5] p-5 rounded-2xl flex gap-4 items-start">
                  <span className="text-2xl font-headline font-extrabold text-primary/30 shrink-0 w-12">{step.num}</span>
                  <div>
                    <h3 className="text-base font-headline font-bold text-primary mb-1">{step.title}</h3>
                    <p className="text-foreground text-[15px] font-sans">{step.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Common pitfalls */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Avoid These Mistakes</span>
            <h2 className="text-3xl mb-4">Common Reasons Applications Fail or Stall</h2>
          </FadeIn>

          <StaggerContainer className="space-y-4">
            {pitfalls.map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-6 rounded-2xl shadow-sm flex gap-5 items-start">
                  <XCircle className="text-red-400 shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="text-base font-headline font-bold text-primary mb-1">{item.reason}</h3>
                    <p className="text-foreground text-[15px] font-sans">{item.fix}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* LEO info */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Local Enterprise Offices</span>
            <h2 className="text-3xl mb-4">Your Local LEO</h2>
            <p className="text-foreground max-w-2xl mx-auto font-sans font-normal text-[15px]">
              Every county in Ireland has a Local Enterprise Office. Your LEO is where you go for Digital for Business and the Grow Digital Voucher. Find full details and contact info for each at <a href="https://www.localenterprise.ie/growdigital" target="_blank" rel="noopener noreferrer" className="text-accent font-headline font-bold hover:text-primary transition-colors">localenterprise.ie/growdigital <ExternalLink className="inline" size={12} /></a>.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {leoInfo.map((leo, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#f3f4f5] p-5 rounded-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="text-accent" size={16} />
                    <h3 className="text-sm font-headline font-bold">{leo.county}</h3>
                  </div>
                  <p className="text-xs text-foreground font-sans">{leo.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
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
                { id: "g-1", q: "Is this the same as the Trading Online Voucher (TOV)?", a: "No. The TOV was replaced by the Grow Digital Voucher on 13 December 2024. The new scheme has a higher grant (\u20ac5,000 vs \u20ac2,500), broader eligibility (up to 50 employees vs 10), and a narrower focus (software subscriptions rather than bespoke website builds). If you\u2019re being told about \u201CTOV\u201D in 2026, that information is out of date." },
                { id: "g-2", q: "Can the voucher fund a new bespoke website build?", a: "No. The Grow Digital Voucher explicitly does not fund bespoke website development. It will fund website-related costs only where you\u2019re subscribing to a software platform (like Shopify or Squarespace) that\u2019s new to your business. If you want a custom WordPress build, that part isn\u2019t fundable \u2014 but the overall digital package around it (M365, CRM, e-commerce platform, etc.) may well be." },
                { id: "g-3", q: "Can you apply for the voucher on my behalf?", a: "No \u2014 and this is important. Under the scheme rules, the applicant must submit their own application. My role is limited to providing a proper quote, delivering the work if approved, and making sure my paperwork supports your claim. The Digital for Business consultant must also be independent of me." },
                { id: "g-4", q: "Do I need to be VAT-registered?", a: "No. The scheme is open to sole traders, partnerships, and companies. VAT registration is separate from the voucher \u2014 you don\u2019t need to be VAT-registered to apply or to receive the grant. You do need current Revenue tax clearance." },
                { id: "g-5", q: "What if my Digital for Business report doesn\u2019t recommend what I want?", a: "Then that\u2019s not fundable. The voucher is specifically for implementing what the report recommends. You can still go ahead with your preferred project at your own cost \u2014 or work with your consultant to ensure the report reflects your actual needs." },
                { id: "g-6", q: "How long does the whole process take?", a: "Realistically? 3 to 6 months from your first LEO contact to grant payment. Digital for Business takes a few weeks to arrange and complete. Application review takes weeks. Project delivery time varies. Claim processing takes a few weeks. If you need fast turnaround, this may not be the right funding route for you." },
                { id: "g-7", q: "Is Crettyard Digital an approved provider?", a: "No, because there is no such thing under this scheme. The Grow Digital Voucher does not have a list of approved or pre-vetted suppliers. Any agency claiming to be \u201CLEO approved\u201D is misrepresenting the scheme. What I am is Grow Digital Voucher Ready \u2014 my invoicing and documentation are prepared to meet the scheme\u2019s requirements so your claim processes smoothly." },
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

      {/* Disclaimer */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn>
            <p className="text-xs text-muted-foreground font-sans text-center leading-relaxed">
              <strong>Disclaimer:</strong> The information on this page is provided in good faith and believed accurate as of April 2026. Scheme terms, eligibility, and funding levels are set by the Department of Enterprise, Trade and Employment and administered by Ireland's Local Enterprise Offices. Always confirm current details with your LEO or at <a href="https://www.localenterprise.ie/growdigital" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors underline">localenterprise.ie/growdigital</a> before relying on any figure or condition. Crettyard Digital does not guarantee eligibility, approval, or drawdown of any grant. See our <Link href="/terms-and-conditions" className="text-accent hover:text-primary transition-colors underline">Terms &amp; Conditions</Link> for the full position.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-10">
            <span className="eyebrow mb-3 inline-block">Voucher-Eligible Services</span>
            <h2 className="text-2xl">Services That Typically Fit the Scheme</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/microsoft-365", title: "Microsoft 365", desc: "New M365 subscriptions + setup + training \u2014 a core voucher-eligible project." },
              { href: "/cybersecurity", title: "Cybersecurity", desc: "New cybersecurity software subscriptions, staff training, and documentation." },
              { href: "/ai-readiness", title: "Microsoft Copilot & AI", desc: "Copilot is a new Microsoft 365 subscription \u2014 often directly voucher-eligible." },
              { href: "/managed-it-support", title: "Managed IT", desc: "The monthly management that keeps it all running after your voucher project." },
            ].map((item) => (
              <StaggerItem key={item.href}>
                <Link href={item.href}>
                  <div className="bg-[#f3f4f5] p-6 rounded-2xl card-hover cursor-pointer h-full">
                    <h3 className="text-base mb-2">{item.title}</h3>
                    <p className="text-foreground text-sm font-sans mb-3">{item.desc}</p>
                    <span className="text-accent text-sm font-headline font-bold inline-flex items-center">Learn more &rarr;</span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <SpotlightCTA
        eyebrow="Thinking About Applying?"
        heading="Let's Talk About What's Actually Fundable"
        subtext="Book a free chat. I'll tell you honestly whether the voucher fits your project, what parts qualify, and what the realistic timeline looks like. No pressure, no sales pitch."
        primaryText="Book a Free Consultation"
        primaryHref="/contact#send-message"
        secondaryText="See All Services"
        secondaryHref="/pricing"
      />
    </div>
  );
}
