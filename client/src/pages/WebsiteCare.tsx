import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertTriangle, Gauge, FileText, Lock, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroTending from "@assets/website-care-hero-tending.webp";

const standardItems = [
  "Reliable, fast EU-hosted infrastructure (Ireland data residency)",
  "SSL certificate management (the padlock in the browser bar)",
  "Weekly automated backups with off-site copy",
  "Monthly security and software updates",
  "Malware scanning and removal",
  "Uptime monitoring with alerts",
  "Cookie consent monitoring and updates",
  "Up to 30 minutes of minor content changes per month",
  "Direct access to me for questions and requests",
];

const premiumExtras = [
  "Daily automated backups",
  "Staging environment for safe content changes",
  "Monthly Core Web Vitals review and speed optimisation",
  "Priority response for support requests",
  "Up to 60 minutes of content changes per month",
  "Monthly SEO health check (Google Search Console rankings, broken links, indexing)",
  "Quarterly analytics summary",
  "Annual accessibility (EAA / WCAG) compliance review",
];

export default function WebsiteCare() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-20 md:py-28">
        <GridLines cols={12} rows={8} color="#ffffff" opacity={0.05} />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <FadeIn direction="up">
              <span className="eyebrow mb-4 inline-block">Website Care Plans</span>
              <h1 className="display-sm text-white mb-6">
                Website Care Plans &mdash; Every Website I Build Is Protected From Day One
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8">
                A website isn't a "build it and forget it" project. Without regular updates, security monitoring, and maintenance, even the best website becomes slow, vulnerable, and outdated &mdash; and Core Web Vitals, malware scans and broken links start working against you in Google Search Console. That's why every website I build comes with a mandatory care plan &mdash; EU-hosted with Ireland data residency &mdash; so your investment is protected and your site keeps performing.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#plans">
                  <Button size="lg">Choose a Plan</Button>
                </a>
                <Link href="/contact#send-message">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Book a Free Consultation
                  </Button>
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <img
                src={heroTending}
                alt="A thriving potted indoor plant on a wooden desk next to a tablet showing a clean website uptime dashboard with an SSL padlock and healthy status indicators \u2014 the metaphor for ongoing website care"
                width={1920}
                height={1080}
                className="w-full h-auto rounded-2xl shadow-2xl"
                loading="eager"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Care Plans Are Mandatory */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Why It Matters</span>
            <h2 className="text-3xl md:text-4xl mb-6">Why I Don't Build Websites Without Ongoing Care</h2>
          </FadeIn>

          <FadeIn>
            <p className="text-lg text-foreground mb-8 leading-relaxed font-sans font-normal text-center">
              I've seen what happens to websites that don't get maintained. Within six months:
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              { icon: AlertTriangle, title: "Security Vulnerabilities Accumulate", desc: "Without regular updates and patches, your site becomes an easy target for hackers who specifically scan for outdated, unpatched websites." },
              { icon: Gauge, title: "Loading Speed Degrades", desc: "Images pile up un-optimised, caching expires, and performance slowly drops \u2014 pushing your Google ranking down with it." },
              { icon: FileText, title: "Content Goes Stale", desc: "Old prices, outdated services, a missing phone number \u2014 potential customers notice, and it makes your business look inactive." },
              { icon: Lock, title: "Backups Stop Working", desc: "If your site goes down or gets hacked, you have nothing to restore. A properly maintained backup is the difference between an inconvenience and a catastrophe." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-red-50/60 p-6 rounded-2xl">
                  <item.icon className="text-red-400 mb-3" size={24} />
                  <h3 className="text-base font-headline font-bold text-red-800 mb-2">{item.title}</h3>
                  <p className="text-red-800/70 text-[15px] font-sans">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="text-center">
            <p className="text-lg text-foreground font-sans font-bold">
              A care plan prevents all of this. It's the most cost-effective way to protect the investment you've already made.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Care Plans</span>
            <h2 className="text-3xl">What You Get</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Standard */}
            <FadeIn>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full flex flex-col">
                <h3 className="text-xl mb-1">Standard Care</h3>
                <p className="text-3xl font-headline font-extrabold text-accent mb-1">&euro;49</p>
                <p className="text-sm text-muted-foreground mb-6 font-sans">per month</p>
                <ul className="space-y-3 flex-1 mb-6">
                  {standardItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[15px] font-sans text-foreground">
                      <CheckCircle className="text-accent shrink-0 mt-0.5" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact#send-message">
                  <Button variant="outline" className="w-full">Get Started</Button>
                </Link>
              </div>
            </FadeIn>

            {/* Premium */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full flex flex-col border-2 border-accent relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-headline font-bold px-4 py-1 rounded-full">Recommended</span>
                <h3 className="text-xl mb-1">Premium Care</h3>
                <p className="text-3xl font-headline font-extrabold text-accent mb-1">&euro;79</p>
                <p className="text-sm text-muted-foreground mb-6 font-sans">per month</p>
                <p className="text-xs text-muted-foreground mb-4 font-sans font-bold">Everything in Standard, plus:</p>
                <ul className="space-y-3 flex-1 mb-6">
                  {premiumExtras.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[15px] font-sans text-foreground">
                      <CheckCircle className="text-accent shrink-0 mt-0.5" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact#send-message">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Process snippet */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn>
            <div className="bg-[#f3f4f5] p-8 rounded-2xl">
              <h3 className="text-lg mb-4">What Happens When You Need a Change?</h3>
              <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal mb-4">
                You send me an email or WhatsApp: "Joey, can you update our phone number on the website?" I make the change &mdash; usually within a business day &mdash; and confirm when it's done. That's it. No ticket. No portal. No waiting.
              </p>
              <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">
                For Premium plan clients, I also proactively check your site's Core Web Vitals, Google Search Console SEO health, and analytics monthly &mdash; so I often catch issues before you even notice them. If you&rsquo;re looking at the broader IT picture, see <Link href="/managed-it-support" className="text-accent hover:underline">Managed IT</Link>, and <Link href="/cybersecurity" className="text-accent hover:underline">cybersecurity &amp; compliance</Link> for the security layer beyond the care plan. New builds are covered on the <Link href="/web-design" className="text-accent hover:underline">web design</Link> page.
              </p>
            </div>
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
                { id: "wc-1", q: "Why is the care plan mandatory?", a: "Because a website without maintenance is a ticking clock. Security, performance, and compliance all degrade over time. I build websites I\u2019m proud of, and I won\u2019t let them deteriorate because maintenance was treated as optional. The care plan is the only way I can guarantee ongoing quality." },
                { id: "wc-2", q: "Can I cancel?", a: "Yes. If you cancel, I can transfer your website files to you or another provider. However, I will no longer be responsible for hosting, security, updates, or any compliance issues that arise. There are no long-term lock-in contracts." },
                { id: "wc-3", q: "What if I need bigger changes?", a: "Larger changes \u2014 new pages, design updates, added functionality \u2014 are quoted separately at preferential rates for care plan clients." },
                { id: "wc-4", q: "Is this on top of the website cost?", a: "The care plan is factored into your project quote from the start, so you know the full cost upfront. It\u2019s not a surprise \u2014 it\u2019s part of the package." },
                { id: "wc-5", q: "What about cookie consent and accessibility compliance?", a: "Both plans include cookie consent monitoring. The Premium plan also includes an annual accessibility (EAA / WCAG) compliance review to ensure your site continues to meet European Accessibility Act standards as regulations evolve." },
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
            <h2 className="text-2xl">How Website Care Fits the Wider Picture</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/web-design", title: "Web Design", desc: "How new websites are built for small businesses across Ireland. Every build includes a mandatory care plan." },
              { href: "/cybersecurity", title: "Cybersecurity & Compliance", desc: "The security and compliance layer beyond the technical care plan \u2014 NIS2, GDPR, phishing protection, staff training." },
              { href: "/managed-it-support", title: "Managed IT Support", desc: "Pair your website care with fixed-fee proactive IT for the rest of your business \u2014 Microsoft 365, devices, network." },
              { href: "/grants-funding", title: "Grants & Funding", desc: "Care plans aren\u2019t voucher-eligible, but new subscription-based platforms may qualify for the Grow Digital Voucher." },
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
        eyebrow="Protect Your Investment"
        heading="Your Website Deserves Ongoing Protection"
        subtext="A care plan costs less per month than a single emergency fix &mdash; and prevents the need for one. Every website I build comes with a care plan as standard."
        primaryText="Get Started"
        primaryHref="/contact#send-message"
        secondaryText="See Digital Foundation Bundles"
        secondaryHref="/pricing"
      />
    </div>
  );
}
