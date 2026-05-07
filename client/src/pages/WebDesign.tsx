import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MonitorSmartphone, Search, Wrench, Smartphone, Rocket, FormInput, Users, CheckCircle, PiggyBank, ArrowRight, Shield, BadgeEuro, Quote } from "lucide-react";
import heroTriptych from "@assets/hero-responsive-triptych.webp";
import beforeAfter from "@assets/illustration-before-after.webp";
import localSearchSERP from "@assets/illustration-local-search-ranking.webp";
import stepConsult from "@assets/process-step-consult.webp";
import stepDesign from "@assets/process-step-design.webp";
import stepBuild from "@assets/process-step-build.webp";
import stepLaunch from "@assets/process-step-launch.webp";
import badgeStarter from "@assets/tier-badge-starter.webp";
import badgeBusiness from "@assets/tier-badge-business.webp";
import badgeCustom from "@assets/tier-badge-custom.webp";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function WebDesign() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="bg-[#f3f4f5] py-20 md:py-28 dot-matrix-bg relative overflow-hidden">
        <GridLines cols={8} rows={5} color="#002157" opacity={0.04} />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <span className="eyebrow mb-5 inline-block">Web Design</span>
              <h1 className="display-sm mb-6" data-testid="text-page-title">
                <span className="sr-only">Web Design for Small Businesses Across Ireland &mdash; </span>A Website That Works as Hard as You Do
              </h1>
              <p className="text-xl text-foreground mb-4 leading-relaxed font-sans font-normal" data-testid="text-intro">
                Your website is the most visible piece of your digital infrastructure &mdash; and for most small Irish businesses it is also the first piece. I build websites that look professional, rank locally, and meet the relevant accessibility and privacy regulations. I also stay around to maintain them, secure them, and integrate them with the email, IT and security setup behind them. Most clients who start with a website end up working with me for the long haul &mdash; but you don&rsquo;t have to. The website stands on its own.
              </p>
              <p className="text-sm font-headline font-bold text-accent mb-8">
                Every site includes ongoing care and security &middot; Fixed quotes, no surprises
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/get-a-quote">
                  <Button data-testid="button-hero-get-quote" size="lg" className="px-10">
                    Get a Website Quote &rarr;
                  </Button>
                </Link>
                <Link href="/contact#send-message">
                  <Button data-testid="button-hero-cta" variant="outline" size="lg" className="px-8">
                    Book a Free Consultation
                  </Button>
                </Link>
              </div>
            </FadeIn>
            <FadeIn className="hidden md:block">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={heroTriptych}
                  alt="A responsive small-business website shown on phone, tablet, and laptop, designed by Crettyard Digital"
                  width={1600}
                  height={1195}
                  className="w-full h-auto"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Who This Is For ───────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Who It's For</span>
            <h2 className="text-3xl" data-testid="text-who-heading">Websites Built for Businesses That Win Work Locally</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 mb-24">
            <StaggerItem>
              <div className="p-7 rounded-2xl bg-[#f3f4f5] card-hover" data-testid="card-who-trades">
                <Users className="text-accent mb-5" size={28} />
                <h3 className="text-lg mb-3">Tradespeople & Contractors</h3>
                <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">Plumbers, electricians, carpenters, builders, roofers, landscapers &mdash; if you rely on local customers finding you and want a professional online presence that brings in new work without you lifting a finger.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="p-7 rounded-2xl bg-[#f3f4f5] card-hover" data-testid="card-who-service">
                <Rocket className="text-accent mb-5" size={28} />
                <h3 className="text-lg mb-3">Service Businesses</h3>
                <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">Cleaners, pest control, skip hire, tutors, childminders, mobile mechanics &mdash; anyone providing a local service who needs to appear when people search for help in their area.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="p-7 rounded-2xl bg-[#f3f4f5] card-hover" data-testid="card-who-retail">
                <MonitorSmartphone className="text-accent mb-5" size={28} />
                <h3 className="text-lg mb-3">Retailers & Hospitality</h3>
                <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">Shops, caf&eacute;s, restaurants, B&amp;Bs, and guesthouses. Note: if you sell online or offer bookable services, the European Accessibility Act now requires your website to be accessible. I build with this in mind.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="p-7 rounded-2xl bg-[#f3f4f5] card-hover" data-testid="card-who-professional">
                <Search className="text-accent mb-5" size={28} />
                <h3 className="text-lg mb-3">Professional Services</h3>
                <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">Accountants, solicitors, consultants, financial advisors, therapists &mdash; businesses where a polished, credible web presence is the difference between a prospect calling you or moving on.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* ── What's Included ─────────────────────────────────────── */}
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">What You Get</span>
            <h2 className="text-3xl" data-testid="text-included-heading">Everything You Need &mdash; Nothing You Don't</h2>
            <p className="text-foreground mt-4 max-w-2xl mx-auto leading-relaxed font-sans font-normal">Every website I build comes with the full package. No "basic tier" that leaves out essentials, and no surprise add-ons.</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <FadeIn>
              <div className="bg-[#f3f4f5] p-8 rounded-2xl" data-testid="list-included-design">
                <h3 className="text-lg mb-4">Design & Build</h3>
                <ul className="space-y-4">
                  {[
                    "Custom design tailored to your business and customers \u2014 not a generic template",
                    "Mobile-first build that works on phones, tablets, and laptops",
                    "Fast loading speeds using clean, lightweight code",
                    "Contact and quote request forms",
                    "Google Maps integration",
                    "Built to meet European Accessibility Act (EAA) standards",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] font-sans"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> {item}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="bg-[#f3f4f5] p-8 rounded-2xl" data-testid="list-included-seo">
                <h3 className="text-lg mb-4">SEO & Local Visibility</h3>
                <ul className="space-y-4">
                  {[
                    "On-page SEO targeting your actual local search terms \u2014 \u201Cplumber Carlow,\u201D \u201Celectrician Laois\u201D",
                    "Proper heading structure and semantic HTML",
                    "Meta titles and descriptions for every page",
                    "Google Business Profile setup guidance",
                    "SSL certificate and secure hosting",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] font-sans"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> {item}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="bg-[#f3f4f5] p-8 rounded-2xl" data-testid="list-included-compliance">
                <h3 className="text-lg mb-4">Compliance Built In</h3>
                <ul className="space-y-4">
                  {[
                    "GDPR-compliant contact forms with proper consent mechanisms",
                    "Cookie consent setup (compliant with ePrivacy regulations)",
                    "Privacy policy guidance",
                    "Accessibility standards built into the design from the start",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] font-sans"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> {item}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="bg-[#f3f4f5] p-8 rounded-2xl" data-testid="list-included-copywriting">
                <h3 className="text-lg mb-4">Content & Copywriting</h3>
                <ul className="space-y-4">
                  {[
                    "Conversion-focused page copy written to make visitors pick up the phone",
                    "Clear calls-to-action on every page",
                    "Help writing your About page, service descriptions, and key content",
                    "Image sourcing and optimisation",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] font-sans"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> {item}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* ── What you also get, even if all you wanted was a website ── */}
          <FadeIn className="mb-24">
            <div className="bg-[#f3f4f5] p-8 md:p-10 rounded-2xl" data-testid="section-adjacent-flags">
              <span className="eyebrow mb-3 inline-block">No Upsell. Just Honest.</span>
              <h3 className="text-2xl mb-4">What You Also Get &mdash; Even If All You Wanted Was a Website</h3>
              <p className="text-foreground text-[15px] leading-relaxed font-sans">
                Most website projects expose adjacent risks &mdash; a Gmail address being used for invoices, no MFA on key accounts, scattered customer data, an outdated cookie banner, a Microsoft 365 tenant that was set up by the cheapest available reseller and never touched again. As part of every website build, I flag what I find. You decide what to do about it. There is no upsell pressure &mdash; but you&rsquo;ll know.
              </p>
            </div>
          </FadeIn>

          {/* ── Mandatory Care Plan ────────────────────────────────── */}
          <FadeIn className="mb-24">
            <div className="bg-accent/5 border-2 border-accent/20 p-8 md:p-10 rounded-2xl">
              <div className="flex items-start gap-4 mb-4">
                <Shield className="text-accent shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl mb-3">Ongoing Care Plan &mdash; Included, Not Optional</h3>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal mb-4">
                    Every website I build comes with a mandatory care plan. This isn't an upsell &mdash; it's how I ensure your site stays fast, secure, and effective long after launch day. A website without ongoing maintenance is a security risk and a wasted investment.
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 pl-0 md:pl-12">
                {[
                  "Secure, reliable hosting",
                  "Regular security updates and patches",
                  "Automated backups",
                  "Performance monitoring",
                  "Minor content updates (text, photos, prices)",
                  "SSL certificate management",
                  "Cookie consent monitoring",
                  "Direct access to me for support",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-[15px] font-sans">
                    <CheckCircle className="text-accent shrink-0 mt-0.5" size={16} />
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-sm font-headline font-bold text-accent mt-6 pl-0 md:pl-12">From &euro;49 per month &mdash; included in your project quote from the start.</p>
            </div>
          </FadeIn>

          {/* ── Business Outcomes ───────────────────────────────────── */}
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Business Outcomes</span>
            <h2 className="text-3xl" data-testid="text-benefits-heading">What a Professional Website Actually Does for Your Business</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-24">
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover" data-testid="card-benefit-found">
                <Search className="text-accent mb-5" size={28} />
                <h3 className="text-lg mb-3">Get Found on Google</h3>
                <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">When someone types "electrician near me" or "carpet cleaning Laois," a properly built website puts your business in front of them &mdash; at the exact moment they're ready to hire.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover" data-testid="card-benefit-trust">
                <MonitorSmartphone className="text-accent mb-5" size={28} />
                <h3 className="text-lg mb-3">Build Trust Instantly</h3>
                <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">A clean, professional site tells potential customers you're established, reliable, and worth calling &mdash; before they've spoken a single word to you.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover" data-testid="card-benefit-leads">
                <FormInput className="text-accent mb-5" size={28} />
                <h3 className="text-lg mb-3">Turn Visitors into Enquiries</h3>
                <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">Strategic calls-to-action, a clear quote request form, and prominent contact details mean more calls from people who are actually ready to hire.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover" data-testid="card-benefit-mobile">
                <Smartphone className="text-accent mb-5" size={28} />
                <h3 className="text-lg mb-3">Work on Every Device</h3>
                <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">Over 60% of local searches happen on mobile. Your site will look sharp and load fast on phones, tablets, and laptops.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover" data-testid="card-benefit-compliance">
                <Shield className="text-accent mb-5" size={28} />
                <h3 className="text-lg mb-3">Stay Compliant Automatically</h3>
                <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">GDPR, cookie consent, and accessibility standards are baked in from the start &mdash; so you're on the right side of the law without becoming a regulatory expert.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover" data-testid="card-benefit-maintenance">
                <Wrench className="text-accent mb-5" size={28} />
                <h3 className="text-lg mb-3">Stay Effective Without Thinking About It</h3>
                <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">Your mandatory care plan means your site is always updated, always backed up, and always performing &mdash; without you lifting a finger.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* ── Local Search Proof ─────────────────────────────────── */}
          <FadeIn className="mb-24" data-testid="section-local-search-proof">
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
              <div>
                <span className="eyebrow mb-5 inline-block">What &ldquo;Found on Google&rdquo; Looks Like</span>
                <h2 className="text-3xl mb-4" data-testid="text-local-search-heading">Your Business, Page One, When It Matters</h2>
                <p className="text-foreground leading-relaxed font-sans font-normal mb-4">
                  When someone types &ldquo;plumber Laois&rdquo; or &ldquo;electrician Carlow&rdquo; into Google, the difference between appearing in the local pack and not appearing at all is the difference between the phone ringing today and staying silent.
                </p>
                <p className="text-foreground leading-relaxed font-sans font-normal">
                  Every site I build is tuned for the local search terms your actual customers type &mdash; on-page SEO, proper schema markup, and Google Business Profile guidance included as standard.
                </p>
              </div>
              <div>
                <img
                  src={localSearchSERP}
                  alt="A Google local-search result for 'plumber laois ireland' showing a highlighted top-ranking listing with five-star reviews and a map of Co. Laois"
                  width={900}
                  height={1118}
                  className="w-full h-auto rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </FadeIn>

          {/* ── Proof Block ────────────────────────────────────────── */}
          <div className="mb-24">
            <FadeIn className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl mb-3">What Clients Say</h2>
              <p className="text-foreground font-sans max-w-2xl mx-auto">Don&rsquo;t just take my word for it &mdash; here&rsquo;s what recent clients have to say.</p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-3 gap-6">
              <StaggerItem>
                <div className="bg-[#f3f4f5] p-7 rounded-2xl h-full flex flex-col" data-testid="testimonial-barry">
                  <Quote className="text-accent shrink-0 mb-4" size={24} />
                  <p className="text-foreground text-[15px] leading-relaxed font-sans italic mb-5 flex-grow">
                    &ldquo;Joey built us a website that actually looks as good as the furniture we make. Within weeks of launching, we were getting enquiries from people who found us on Google &mdash; that never happened before. Brilliant service, no messing.&rdquo;
                  </p>
                  <div>
                    <p className="font-headline font-bold text-primary">Barry</p>
                    <p className="text-sm text-muted-foreground">BM Custom Furniture</p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-[#f3f4f5] p-7 rounded-2xl h-full flex flex-col" data-testid="testimonial-darren">
                  <Quote className="text-accent shrink-0 mb-4" size={24} />
                  <p className="text-foreground text-[15px] leading-relaxed font-sans italic mb-5 flex-grow">
                    &ldquo;I had no website and no idea where to start. Joey made the whole thing painless &mdash; explained everything in plain English and delivered a site that brings in new bookings every week. Best investment I&rsquo;ve made in my business.&rdquo;
                  </p>
                  <div>
                    <p className="font-headline font-bold text-primary">Darren</p>
                    <p className="text-sm text-muted-foreground">Go Green Steam Clean</p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-[#f3f4f5] p-7 rounded-2xl h-full flex flex-col" data-testid="testimonial-brian">
                  <Quote className="text-accent shrink-0 mb-4" size={24} />
                  <p className="text-foreground text-[15px] leading-relaxed font-sans italic mb-5 flex-grow">
                    &ldquo;Joey did the lot for us &mdash; a professional website, Microsoft 365 so we have proper email between the office and the lads on site, and sorted our Wi-Fi so it works in every room. The lads even get compliments from clients about the website now. Can&rsquo;t recommend him enough.&rdquo;
                  </p>
                  <div>
                    <p className="font-headline font-bold text-primary">Brian</p>
                    <p className="text-sm text-muted-foreground">Nurney Plant and Civil</p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <FadeIn className="text-center mt-8">
              <Link href="/portfolio" className="text-accent font-headline font-bold inline-flex items-center text-sm hover:text-primary transition-colors">
                See all case studies <ArrowRight size={14} className="ml-1" />
              </Link>
            </FadeIn>
          </div>

          {/* ── Government Grants ──────────────────────────────────── */}
          <FadeIn className="mb-24">
            <div className="bg-accent/5 border border-accent/20 p-8 md:p-10 rounded-2xl">
              <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <BadgeEuro className="text-accent" size={28} />
                    <h3 className="text-xl">Grow Digital Voucher: What It Actually Covers</h3>
                  </div>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal mb-3">
                    The <strong>Grow Digital Voucher</strong> (which replaced the Trading Online Voucher in December 2024) covers 50% of eligible costs up to &euro;5,000. However, it does <strong>not</strong> fund bespoke website development &mdash; only subscription-based platforms like Shopify, Squarespace, or new software tools.
                  </p>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">
                    If your project combines a website with new Microsoft 365, CRM, or e-commerce software, parts may qualify. I&rsquo;ll be straight with you about what&rsquo;s fundable and what isn&rsquo;t &mdash; and I issue scheme-compliant invoicing so your claim processes cleanly.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <Link href="/grants-funding">
                    <Button size="lg" className="w-full">See Grant Details</Button>
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ── Before / After Comparison ──────────────────────────── */}
          <FadeIn className="mb-24" data-testid="section-before-after">
            <div className="text-center mb-10">
              <span className="eyebrow mb-5 inline-block">The Difference</span>
              <h2 className="text-3xl mb-4" data-testid="text-comparison-heading">Cheap Template vs. Properly Built</h2>
              <p className="text-foreground max-w-2xl mx-auto leading-relaxed font-sans font-normal">
                A &euro;300 template website says &ldquo;amateur&rdquo;. A properly built one says &ldquo;established professional.&rdquo; Visitors decide within seconds of landing.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={beforeAfter}
                alt="Side-by-side laptop comparison: a cheap, amateur plumber website with clashing colours and cluttered layout on the left, versus a clean, professional plumber website with clear branding and a prominent call-to-action on the right"
                width={1800}
                height={1005}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </FadeIn>

          {/* ── Website Studio vs IT Partner ────────────────────────── */}
          <FadeIn className="mb-24" data-testid="section-studio-vs-partner">
            <div className="text-center mb-10">
              <span className="eyebrow mb-5 inline-block">The Other Difference</span>
              <h2 className="text-3xl mb-4">Website Studio vs IT Partner</h2>
              <p className="text-foreground max-w-2xl mx-auto leading-relaxed font-sans font-normal">
                Two providers can both build the same site. What separates them is what happens after launch day.
              </p>
            </div>
            <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden border border-gray-200">
              <div className="bg-[#f3f4f5] p-7">
                <h3 className="font-headline font-extrabold text-primary text-base uppercase tracking-wide mb-5">What a Website Studio Sells</h3>
                <ul className="space-y-3 list-none m-0 p-0">
                  {[
                    "A site that looks good on launch day",
                    "One transaction, then silence",
                    "No accountability after launch",
                    "No view of email, security, or compliance",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-foreground text-[15px] font-sans">
                      <span className="text-muted-foreground shrink-0 mt-0.5" aria-hidden="true">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-accent/5 p-7 border-t md:border-t-0 md:border-l border-accent/20">
                <h3 className="font-headline font-extrabold text-accent text-base uppercase tracking-wide mb-5">What Crettyard Digital Sells</h3>
                <ul className="space-y-3 list-none m-0 p-0">
                  {[
                    "A site, plus the IT scaffolding behind it",
                    "Care plan, support, ongoing relationship",
                    "One person to contact for the next five years",
                    "Whole digital surface in one strategy",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-foreground text-[15px] font-sans">
                      <CheckCircle className="text-accent shrink-0 mt-0.5" size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* ── Saves Money ────────────────────────────────────────── */}
          <FadeIn className="mb-24" data-testid="section-saves-money">
            <div className="bg-primary p-10 md:p-14 rounded-2xl text-white">
              <div className="flex items-start gap-4 mb-6">
                <PiggyBank className="text-accent shrink-0 mt-1" size={32} />
                <h2 className="text-3xl text-white" data-testid="text-saves-heading">Why This Saves You Money</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg mb-3 text-white">Avoid Costly Rebuilds</h3>
                  <p className="text-white text-[15px] leading-relaxed font-sans font-normal">A &euro;300 website needs replacing within a year. Getting it right means a site that lasts and grows with your business &mdash; saving thousands long term.</p>
                </div>
                <div>
                  <h3 className="text-lg mb-3 text-white">Stop Missing Leads</h3>
                  <p className="text-white text-[15px] leading-relaxed font-sans font-normal">Every day without a proper website is a day your competitors are getting enquiries you&rsquo;re missing. A professional site starts paying for itself within weeks.</p>
                </div>
                <div>
                  <h3 className="text-lg mb-3 text-white">No Patchwork Fixes</h3>
                  <p className="text-white text-[15px] leading-relaxed font-sans font-normal">DIY builders, cheap fixes, and separate hosting bills add up fast. One properly built website with an included care plan replaces years of expensive firefighting.</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ── How It Works ───────────────────────────────────────── */}
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">How It Works</span>
            <h2 className="text-3xl" data-testid="text-process-heading">From First Call to Live Site in 4 Weeks</h2>
            <p className="text-foreground mt-4 max-w-2xl mx-auto leading-relaxed font-sans font-normal">A clear, low-stress process. You&rsquo;ll know exactly what happens next at every stage.</p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24" data-testid="process-steps">
            {[
              { img: stepConsult, alt: "Glass speech bubble icon representing the consult stage", title: "1. Consult", desc: "A free, no-pressure chat about your business, your customers, and what a website actually needs to do for you." },
              { img: stepDesign, alt: "Glass pencil and tablet icon representing the design stage", title: "2. Design", desc: "I mock up the key pages so you can see the shape of it before a single line of code is written." },
              { img: stepBuild, alt: "Glass monitor with code brackets icon representing the build stage", title: "3. Build", desc: "Clean, fast, accessible code. Mobile-first, SEO-ready, and built to meet EAA compliance from day one." },
              { img: stepLaunch, alt: "Glass rocket icon representing the launch stage", title: "4. Launch", desc: "We go live together. Your care plan kicks in straight away \u2014 so it stays fast, secure, and up-to-date." },
            ].map((step, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#f3f4f5] p-7 rounded-2xl text-center h-full card-hover" data-testid={`card-process-${i}`}>
                  <img src={step.img} alt={step.alt} width={500} height={500} className="w-full h-auto mb-4" loading="lazy" />
                  <h3 className="text-lg mb-3">{step.title}</h3>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* ── Pricing ────────────────────────────────────────────── */}
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Pricing</span>
            <h2 className="text-3xl" data-testid="text-pricing-heading">What a Website Costs &mdash; No Surprises, No Hidden Fees</h2>
            <p className="text-foreground mt-4 max-w-2xl mx-auto leading-relaxed font-sans font-normal">Every business is different, so I quote individually after a free consultation. Here's a realistic guide.</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <FadeIn>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl text-center card-hover" data-testid="card-pricing-starter">
                <img src={badgeStarter} alt="A glass seedling icon representing the Starter Site tier" width={300} height={300} className="w-full h-auto mb-3" loading="lazy" />
                <h3 className="text-lg mb-2">Starter Site</h3>
                <p className="text-2xl font-headline font-extrabold text-accent mb-1">From &euro;799</p>
                <p className="text-xs text-muted-foreground mb-3">+ &euro;49/mo care plan</p>
                <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal mb-4">A clean, professional 1&ndash;3 page website. Mobile-friendly, basic SEO, contact form, GDPR and cookie compliance, secure hosting.</p>
                <p className="text-xs text-muted-foreground font-sans">Ideal for solo traders, tradespeople starting out, new businesses.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-accent/10 border-2 border-accent p-7 rounded-2xl text-center card-hover relative" data-testid="card-pricing-business">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-headline font-bold px-4 py-1 rounded-full">Most Popular</span>
                <img src={badgeBusiness} alt="A glass tree icon representing the Business Site tier" width={300} height={300} className="w-full h-auto mb-3" loading="lazy" />
                <h3 className="text-lg mb-2">Business Site</h3>
                <p className="text-2xl font-headline font-extrabold text-accent mb-1">From &euro;1,299</p>
                <p className="text-xs text-muted-foreground mb-3">+ &euro;49/mo care plan (or &euro;79 Premium)</p>
                <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal mb-4">A 4&ndash;7 page website with service pages, portfolio, SEO, contact forms, Google Maps, accessibility compliance, and full GDPR/cookie setup.</p>
                <p className="text-xs text-muted-foreground font-sans">Ideal for established businesses competing seriously online.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl text-center card-hover" data-testid="card-pricing-custom">
                <img src={badgeCustom} alt="A glass mountain peak icon representing the Custom or Redesign tier" width={300} height={300} className="w-full h-auto mb-3" loading="lazy" />
                <h3 className="text-lg mb-2">Custom / Redesign</h3>
                <p className="text-2xl font-headline font-extrabold text-accent mb-1">Let's Talk</p>
                <p className="text-xs text-muted-foreground mb-3">care plan included</p>
                <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal mb-4">Larger sites, e-commerce, booking systems, integrations, or a complete redesign and rebuild. Priced based on scope.</p>
                <p className="text-xs text-muted-foreground font-sans">Ideal for complex needs, growing businesses, e-commerce.</p>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="text-center mb-24">
            <p className="text-foreground text-[15px] font-sans mb-2">All prices are starting points. Clear, fixed quote after a free consultation.</p>
            <p className="text-sm font-headline font-bold text-accent mb-6">
              Need software like M365, CRM, or e-commerce? The Grow Digital Voucher may cover 50% up to &euro;5,000.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/get-a-quote">
                <Button size="lg" className="px-10" data-testid="button-pricing-get-quote">
                  Get Your Free Quote &rarr;
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline">
                  See Full Pricing
                </Button>
              </Link>
            </div>
          </FadeIn>

          {/* ── FAQ ────────────────────────────────────────────────── */}
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Common Questions</span>
            <h2 className="text-3xl" data-testid="text-faq-heading">Answered in Plain English</h2>
          </FadeIn>

          <FadeIn className="max-w-3xl mx-auto mb-24">
            <Accordion type="single" collapsible className="w-full space-y-3" data-testid="faq-list">
              {[
                { id: "wd-faq-1", q: "How long does it take to build a website?", a: "Most projects take two to four weeks from start to launch. A simple starter site can be ready faster; larger builds with custom features may take a little longer. I\u2019ll give you a clear timeline before we begin." },
                { id: "wd-faq-2", q: "What do I need to provide?", a: "Your logo (if you have one), a rough idea of what pages you want, and some photos of your work. If you\u2019re not sure about any of it, I\u2019ll guide you through the process step by step and help with content, copywriting, and image sourcing." },
                { id: "wd-faq-3", q: "Do I have to have a care plan?", a: "Yes. Every website I build comes with a care plan. It\u2019s not an upsell \u2014 it\u2019s how I guarantee your site stays secure, fast, and effective. A website without ongoing maintenance is a security risk and a wasted investment. The care plan is factored into your project quote from the start." },
                { id: "wd-faq-4", q: "What about accessibility and the EAA?", a: "The European Accessibility Act requires many online businesses to make their websites accessible to people with disabilities. I build with accessibility in mind from the start \u2014 which means you\u2019re covered without paying for a separate audit." },
                { id: "wd-faq-5", q: "Do you help with SEO and Google rankings?", a: "Yes. Every site includes on-page SEO targeting your local search terms. I also provide Google Business Profile guidance to help you rank in local map results." },
                { id: "wd-faq-6", q: "Can I use a government grant to pay for my website?", a: "Partially, and only in specific cases. The Grow Digital Voucher (replaced the Trading Online Voucher in Dec 2024) doesn\u2019t fund bespoke WordPress builds \u2014 but subscription platforms (Shopify, Squarespace) and related new software (M365, CRM, e-commerce tools) may qualify for 50% funding up to \u20ac5,000. You must complete a free Digital for Business consultation first, then apply through your LEO. I provide scheme-compliant quotes to support your claim." },
                { id: "wd-faq-7", q: "I already have a website but it\u2019s outdated \u2014 can you help?", a: "Absolutely. I regularly redesign and rebuild existing websites. Whether your current site isn\u2019t mobile-friendly, loads slowly, or isn\u2019t bringing in enquiries, I can give it a modern rebuild with proper SEO, compliance, and a conversion-focused design." },
                { id: "wd-faq-8", q: "Will you still be there if something breaks in two years?", a: "Yes. Care plans and managed IT are how the business is set up \u2014 recurring relationships are the main work, not the exception. My longest single client relationship ran nine years before naturally concluding; my longest active client relationship is going on four years and counting. Documentation, credentials, and runbooks are written down \u2014 continuity is built into the operating model." },
                { id: "wd-faq-9", q: "Why not just hire a cheaper website studio?", a: "If all you need is a one-page brochure site that nobody will maintain, a cheaper option is fine. If you need a website that ranks, complies, integrates with your email and IT, and has someone available in two years to fix what breaks \u2014 a website studio is not the right fit and a Crettyard Digital site is. Genuine answer either way \u2014 I\u2019ll tell you which I think you need." },
              ].map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border border-gray-100 rounded-xl px-6">
                  <AccordionTrigger className="text-left text-[15px] font-headline font-bold py-5">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-foreground leading-relaxed font-sans text-[15px] pb-5">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>

          {/* ── Related Services ────────────────────────────────────── */}
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Related Services</span>
            <h2 className="text-3xl">More Ways I Can Help</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              { href: "/microsoft-365", title: "Microsoft 365 & Teams Phone", desc: "Professional email and cloud tools to complement your new website. Set up securely with GDPR compliance.", label: "Learn more \u2192", testId: "link-service-m365" },
              { href: "/managed-it-support", title: "Managed IT Support", desc: "Your outsourced IT department. Proactive monitoring, updates, security, and compliance for a fixed monthly fee.", label: "Learn more \u2192", testId: "link-service-managedit" },
              { href: "/portfolio", title: "See My Work", desc: "Browse real websites I\u2019ve built for local businesses \u2014 with measurable results and client testimonials.", label: "View portfolio \u2192", testId: "link-service-portfolio" },
            ].map((item) => (
              <StaggerItem key={item.href}>
                <Link href={item.href}>
                  <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover cursor-pointer" data-testid={item.testId}>
                    <h3 className="text-lg mb-3">{item.title}</h3>
                    <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">{item.desc}</p>
                    <span className="text-accent text-sm font-headline font-bold mt-3 inline-block">{item.label}</span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────── */}
      <SpotlightCTA
        eyebrow="Ready to Get Started?"
        heading="Get a Website That Actually Brings in Work"
        subtext="Book a free consultation and I'll show you exactly what a professional website can do for your business &mdash; plus any software elements in your project that might qualify for the Grow Digital Voucher."
        primaryText="Get a Quote &rarr;"
        primaryHref="/get-a-quote"
        secondaryText="See Full Pricing"
        secondaryHref="/pricing"
      />
    </div>
  );
}
