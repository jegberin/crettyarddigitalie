import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, BadgeEuro, MonitorSmartphone, Cloud, ServerCog, Wifi, Shield, Phone, BrainCircuit, Wrench } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";
import { FragmentedVsIntegrated } from "@/components/FragmentedVsIntegrated";

const bundles = [
  {
    name: "Foundation Bundle",
    tagline: "Get Online Properly",
    target: "Solo traders and micro-businesses (1\u20133 people)",
    setup: "From \u20ac1,099",
    monthly: "From \u20ac89/month",
    grant: "Software elements may qualify for Grow Digital Voucher (50% up to \u20ac5,000)",
    popular: false,
    items: [
      "Microsoft 365 Business Basic (professional email)",
      "Microsoft 365 setup and configuration",
      "MFA and basic security",
      "GDPR-compliant forms and cookie consent",
      "Professional website (up to 3 pages)",
      "Website Care Plan (hosting, security, backups)",
      "Google Business Profile guidance",
    ],
  },
  {
    name: "Operations Bundle",
    tagline: "Compete and Win",
    target: "Established businesses (3\u201310 people)",
    setup: "From \u20ac2,499",
    monthly: "From \u20ac55/user/month",
    grant: "Software elements may qualify for Grow Digital Voucher (50% up to \u20ac5,000)",
    popular: true,
    items: [
      "Essential Managed IT Support",
      "Microsoft 365 Business Standard (full Office suite)",
      "Full M365 setup, migration, and training",
      "Microsoft Teams Phone",
      "Network health check and Wi-Fi optimisation",
      "GDPR setup and cookie compliance",
      "Professional website (4\u20137 pages, full SEO)",
      "Website Care Plan (Premium tier)",
      "Web accessibility check (EAA)",
      "Google Business Profile optimisation",
    ],
  },
  {
    name: "Enterprise Bundle",
    tagline: "Your Complete IT Department",
    target: "Growing businesses (10\u201320 people), professional services, regulated firms",
    setup: "Custom quoted",
    monthly: "From \u20ac95/user/month",
    grant: "Grant eligibility assessed during consultation",
    popular: false,
    items: [
      "Professional Managed IT Support (priority SLA)",
      "Microsoft 365 Business Premium (advanced security)",
      "Full migration, hardening, and team training",
      "Microsoft Teams Phone for all users",
      "Full network design and installation",
      "Cybersecurity audit and staff awareness training",
      "NIS2 readiness assessment",
      "GDPR, cookie, and accessibility compliance",
      "DORA readiness (if financial sector)",
      "Quarterly on-site IT and strategy reviews",
      "Microsoft Copilot readiness assessment",
      "Custom website with conversion optimisation",
      "Premium Website Care Plan with monthly SEO",
    ],
  },
];

const individualPricing = [
  { category: "Web Design", href: "/web-design", items: [
    { service: "Starter website (1\u20133 pages)", price: "From \u20ac799 + \u20ac49/mo care" },
    { service: "Business website (4\u20137 pages)", price: "From \u20ac1,299 + \u20ac49/mo care" },
    { service: "Custom website / redesign", price: "Quoted on scope" },
    { service: "Website Care Plan (Standard)", price: "\u20ac49/month" },
    { service: "Website Care Plan (Premium)", price: "\u20ac79/month" },
  ]},
  { category: "Microsoft 365 & Teams Phone", href: "/microsoft-365", items: [
    { service: "Basic setup (1\u20135 users)", price: "From \u20ac350" },
    { service: "Full migration & setup (5\u201320 users)", price: "From \u20ac600" },
    { service: "GDPR & security hardening", price: "From \u20ac150" },
    { service: "Teams Phone setup", price: "From \u20ac150" },
    { service: "Teams Phone calling plan", price: "From \u20ac7.50/user/mo" },
    { service: "Monthly support & admin", price: "From \u20ac50/month" },
  ]},
  { category: "Managed IT Support", href: "/managed-it-support", items: [
    { service: "Essential (1\u20135 users)", price: "From \u20ac45/user/month" },
    { service: "Professional (5\u201315 users)", price: "From \u20ac75/user/month" },
    { service: "Comprehensive (regulated firms)", price: "From \u20ac110/user/month" },
  ]},
  { category: "Network & Wi-Fi", href: "/network-wifi-security", items: [
    { service: "Wi-Fi health check", price: "From \u20ac150" },
    { service: "Small office network setup", price: "From \u20ac400" },
    { service: "Full network design & install", price: "From \u20ac800" },
    { service: "Firewall & security config", price: "From \u20ac300" },
  ]},
  { category: "Cybersecurity & Compliance", href: "/cybersecurity", items: [
    { service: "Security audit & health check", price: "From \u20ac200" },
    { service: "Web Compliance Audit (GDPR + cookies + EAA)", price: "From \u20ac250" },
    { service: "IT Resilience Audit (NIS2 + DORA where applicable)", price: "From \u20ac300" },
    { service: "NIS2 Readiness Package", price: "From \u20ac500" },
    { service: "Cookie consent setup", price: "From \u20ac150" },
    { service: "Staff cyber awareness training", price: "From \u20ac250" },
  ]},
  { category: "AI & Microsoft Copilot", href: "/ai-readiness", items: [
    { service: "AI Readiness Assessment", price: "From \u20ac150" },
    { service: "Copilot setup & training", price: "From \u20ac250" },
    { service: "AI Strategy Consultation", price: "From \u20ac400" },
  ]},
];

export default function Pricing() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-20 md:py-28">
        <GridLines cols={12} rows={8} color="#ffffff" opacity={0.05} />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <FadeIn direction="up">
            <span className="eyebrow mb-4 inline-block">Bundles &amp; Pricing</span>
            <h1 className="display-sm text-white mb-6">
              One Provider. One Monthly Cost. Everything Your Business Needs.
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8">
              Stop juggling three providers, five invoices, and nobody taking responsibility. Digital Foundation Bundles give small businesses across Ireland their website, email, phone system, IT support, and security in one integrated package &mdash; built by one person, for one predictable monthly cost.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact#send-message">
                <Button size="lg">Book a Free Consultation</Button>
              </Link>
              <a href="#individual">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  See Individual Pricing &darr;
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Five Vendors vs One Trusted Partner */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-5xl">
          <FragmentedVsIntegrated
            eyebrow="Why Bundle"
            heading="Five Vendors vs One Trusted Partner"
            intro="The case for bundling isn’t price — it’s accountability. Five providers means five strategies that don’t talk to each other."
          />
        </div>
      </section>

      {/* Which tier is right for me? */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="mb-12">
            <span className="eyebrow mb-5 inline-block">Choosing a Tier</span>
            <h2 className="text-2xl md:text-3xl mb-3">Which One Is Right for Me?</h2>
            <p className="text-foreground max-w-2xl font-sans font-normal">
              Three tiers, sized to where the business is today. The plan grows with you &mdash; nothing locks you into a tier.
            </p>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Foundation",
                fit: "If you have under 5 staff and just need things running",
                desc: "Professional email, a clean website, basic security, no surprises. The starting point most businesses need before anything else.",
              },
              {
                name: "Operations",
                fit: "If you have a small team and want everything handled",
                desc: "Managed IT, Teams Phone, network optimised, accessibility checked, compliance baseline in place. The point where IT stops being your job.",
              },
              {
                name: "Enterprise",
                fit: "If you handle regulated data or have 10+ staff",
                desc: "Full NIS2 / GDPR / DORA, on-site reviews, staff training, Copilot readiness, the whole picture under one roof.",
              },
            ].map((tier) => (
              <StaggerItem key={tier.name}>
                <div className="bg-[#f3f4f5] p-6 rounded-2xl h-full" data-testid={`tier-fit-${tier.name.toLowerCase()}`}>
                  <h3 className="text-lg font-headline font-extrabold text-primary mb-1">{tier.name}</h3>
                  <p className="text-xs font-headline font-bold text-accent uppercase tracking-wider mb-3">{tier.fit}</p>
                  <p className="text-foreground text-[14px] font-sans leading-relaxed">{tier.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Bundles */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn className="text-center mb-16">
            <span className="eyebrow mb-5 inline-block">Digital Foundation Bundles</span>
            <h2 className="text-3xl md:text-4xl mb-4">The Smarter Way to Buy</h2>
            <p className="text-foreground max-w-2xl mx-auto font-sans font-normal">
              Instead of buying services separately and hoping they work together, get a complete digital setup &mdash; built, integrated, and maintained under one roof.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {bundles.map((bundle, i) => (
              <StaggerItem key={i}>
                <div className={`rounded-2xl p-8 h-full flex flex-col ${bundle.popular ? "bg-accent/5 border-2 border-accent relative" : "bg-[#f3f4f5] border border-gray-100"}`}>
                  {bundle.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-headline font-bold px-4 py-1 rounded-full">Most Popular</span>
                  )}
                  <h3 className="text-xl mb-1">{bundle.name}</h3>
                  <p className="text-sm font-headline font-bold text-accent mb-4">{bundle.tagline}</p>
                  <p className="text-xs text-muted-foreground mb-6 font-sans">{bundle.target}</p>

                  <div className="mb-6">
                    <p className="text-2xl font-headline font-extrabold text-primary">{bundle.setup}</p>
                    <p className="text-sm text-muted-foreground font-sans">one-off setup</p>
                    <p className="text-lg font-headline font-bold text-accent mt-1">{bundle.monthly}</p>
                    <p className="text-sm text-muted-foreground font-sans">ongoing</p>
                  </div>

                  <p className="text-xs font-headline font-bold text-accent/80 bg-accent/10 rounded-lg px-3 py-2 mb-6">{bundle.grant}</p>

                  <ul className="space-y-2.5 flex-1 mb-6">
                    {bundle.items.map((item, j) => {
                      // Inline-link the DORA readiness bullet in the Growth bundle to /dora-compliance
                      const doraPrefix = "DORA readiness";
                      const hasDora = item.startsWith(doraPrefix);
                      return (
                        <li key={j} className="flex items-start gap-2 text-[14px] font-sans text-foreground">
                          <CheckCircle className="text-accent shrink-0 mt-0.5" size={15} />
                          {hasDora ? (
                            <span>
                              <Link href="/dora-compliance" className="text-accent hover:underline font-headline font-bold">{doraPrefix}</Link>
                              {item.slice(doraPrefix.length)}
                            </span>
                          ) : item}
                        </li>
                      );
                    })}
                  </ul>

                  <Link href="/contact#send-message">
                    <Button className="w-full" variant={bundle.popular ? "default" : "outline"}>
                      Get a Quote
                    </Button>
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Guided quote calculator cross-link */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <div className="bg-accent/5 border border-accent/20 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <p className="font-headline font-bold text-primary mb-1">Prefer a guided calculator?</p>
                <p className="text-sm text-foreground font-sans">Use the 6-step quote tool to mix and match services and see a ballpark estimate instantly &mdash; no contact required until you&rsquo;re ready.</p>
              </div>
              <Link href="/get-a-quote">
                <Button variant="outline" className="shrink-0">Get a Quote &rarr;</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Bundles Save Money */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl mb-4">Why a Bundle Costs Less Than Buying Separately</h2>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "One Setup", desc: "Everything configured to work together from the start. No integration problems." },
              { title: "One Monthly Bill", desc: "Predictable costs. No surprise invoices from three different companies." },
              { title: "One Person to Call", desc: "I know your entire setup because I built all of it." },
              { title: "Discounted Rates", desc: "Bundles are priced below the sum of individual services." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
                  <h3 className="text-base font-headline font-bold mb-2">{item.title}</h3>
                  <p className="text-foreground text-sm font-sans">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Individual Pricing Table */}
      <section id="individual" className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-16">
            <span className="eyebrow mb-5 inline-block">Individual Pricing</span>
            <h2 className="text-3xl md:text-4xl mb-4">Every Service, Priced Transparently</h2>
            <p className="text-foreground max-w-2xl mx-auto font-sans font-normal">
              Don't need a full bundle? Individual services are available too. All prices are starting points &mdash; I provide clear, fixed quotes after a free consultation.
            </p>
          </FadeIn>

          <div className="space-y-8">
            {individualPricing.map((cat, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-[#f3f4f5] rounded-2xl overflow-hidden">
                  <Link
                    href={cat.href}
                    className="bg-primary px-6 py-3 flex items-center justify-between group hover:bg-primary/90 transition-colors"
                    data-testid={`link-pricing-category-${cat.href}`}
                  >
                    <h3 className="text-white font-headline font-bold text-sm">{cat.category}</h3>
                    <span className="text-white/80 text-xs font-headline font-bold inline-flex items-center gap-1 group-hover:text-white transition-colors">
                      Full details <ArrowRight size={12} />
                    </span>
                  </Link>
                  <div className="divide-y divide-gray-200">
                    {cat.items.map((item, j) => (
                      <div key={j} className="flex items-center justify-between px-6 py-3.5">
                        <span className="text-foreground text-[14px] font-sans">{item.service}</span>
                        <span className="font-headline font-bold text-sm text-primary whitespace-nowrap ml-4">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-10">
            <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <BadgeEuro className="text-accent shrink-0" size={28} />
              <div className="flex-1">
                <p className="font-headline font-bold text-primary mb-1">Government grants may cover up to 50% of eligible costs</p>
                <p className="text-sm text-foreground font-sans">The Grow Digital Voucher covers 50% of new software subscriptions up to &euro;5,000 (bespoke websites aren&rsquo;t eligible). I provide scheme-compliant invoicing.</p>
              </div>
              <Link href="/grants-funding">
                <Button variant="outline" className="shrink-0">See Grant Details</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <SpotlightCTA
        eyebrow="Not Sure Which Option Is Right?"
        heading="Let's Figure It Out Together"
        subtext="Book a free consultation. I'll assess what your business actually needs, recommend the right bundle or individual services, and give you a clear, fixed quote &mdash; including any government grants you're eligible for."
        primaryText="Book a Free Consultation"
        primaryHref="/contact#send-message"
        secondaryText="See Portfolio"
        secondaryHref="/portfolio"
      />
    </div>
  );
}
