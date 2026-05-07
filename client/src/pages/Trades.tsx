import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Quote } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import iconLocalSeo from "@assets/concept-local-seo.webp";
import iconEmailPro from "@assets/concept-email-pro.webp";
import iconBusinessPhone from "@assets/concept-business-phone.webp";
import icon365Admin from "@assets/concept-365-admin.webp";
import iconGdprShield from "@assets/concept-gdpr-shield.webp";
import iconGrantEuro from "@assets/concept-grant-euro.webp";

export default function Trades() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-20 md:py-28">
        <GridLines cols={12} rows={8} color="#ffffff" opacity={0.05} />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <FadeIn direction="up">
            <span className="eyebrow mb-4 inline-block">IT for Trades &amp; Construction</span>
            <h1 className="display-sm text-white mb-6">
              Websites, Email, and IT Built Specifically for Tradespeople and Contractors
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8">
              You're brilliant at what you do &mdash; but when someone in your area searches Google for an electrician, a plumber, or a builder, they find your competitors instead. And increasingly, the bigger contractors you work for are asking about your IT security. I solve both problems for trade businesses anywhere in Ireland &mdash; with technology that works, explained in plain English.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact#send-message">
                <Button size="lg">Get a Free Quote for Your Trade Business</Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  See What I've Built &rarr;
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Sound Familiar?</span>
            <h2 className="text-3xl md:text-4xl">The Problems Tradespeople Face</h2>
          </FadeIn>

          <StaggerContainer className="space-y-6">
            {[
              { problem: "\u201CI get all my work from word-of-mouth.\u201D", fix: "That\u2019s great \u2014 until it slows down. A professional website means Google sends you enquiries 24/7, even when you\u2019re on a job. Word-of-mouth becomes a bonus on top, not the only plan." },
              { problem: "\u201CI\u2019m using a Gmail for my business.\u201D", fix: "Every quote you send from a Gmail address tells the customer you\u2019re not established. A @yourbusiness.ie email costs less than you think and changes how clients perceive you immediately." },
              { problem: "\u201CMy big clients are asking about my IT security.\u201D", fix: "This is the NIS2 effect. Large construction firms, councils, and main contractors now have to ensure their supply chain is secure \u2014 and that includes you. I help you get ready." },
              { problem: "\u201CI don\u2019t have time for this stuff.\u201D", fix: "You don\u2019t need to. I handle all the technology \u2014 setup, management, and support. You focus on the work that pays." },
              { problem: "\u201CI had a website built years ago and it\u2019s terrible.\u201D", fix: "Most cheap websites are. They don\u2019t work on mobile, don\u2019t rank on Google, and look like 2015. I\u2019ll rebuild it properly \u2014 and it could be half-price with a government grant." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#f3f4f5] p-6 rounded-2xl">
                  <p className="font-headline font-bold text-primary mb-2">{item.problem}</p>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans">{item.fix}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What I Build */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">What You Get</span>
            <h2 className="text-3xl">Everything a Trade Business Needs &mdash; Under One Roof</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            <StaggerItem>
              <div className="bg-white p-7 rounded-2xl card-hover shadow-sm">
                <img src={icon365Admin} alt="Glass cog with envelope representing managed IT and Microsoft 365 administration" width={1000} height={1000} className="w-20 h-20 mb-4" loading="lazy" />
                <h3 className="text-lg mb-2">Managed IT That Prevents Problems</h3>
                <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal mb-3">Proactive <Link href="/managed-it-support" className="text-accent hover:underline">managed IT support</Link>: monitoring, updates, security, and support for a fixed monthly fee. When something goes wrong, one call to someone who knows your setup.</p>
                <p className="text-sm font-headline font-bold text-accent">From &euro;65/user/month</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white p-7 rounded-2xl card-hover shadow-sm">
                <img src={iconGdprShield} alt="Glass shield representing NIS2 supply-chain security for trade businesses" width={1000} height={1000} className="w-20 h-20 mb-4" loading="lazy" />
                <h3 className="text-lg mb-2">Security That Meets Supply Chain Requirements</h3>
                <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal mb-3">MFA, email protection, endpoint security, and backup &mdash; documented and ready to show a main contractor or council if they ask about your <Link href="/cybersecurity" className="text-accent hover:underline">NIS2 supply-chain security</Link> posture.</p>
                <p className="text-sm font-headline font-bold text-accent">Included in plans</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white p-7 rounded-2xl card-hover shadow-sm">
                <img src={iconEmailPro} alt="Glass envelope with @-symbol representing professional business email" width={1000} height={1000} className="w-20 h-20 mb-4" loading="lazy" />
                <h3 className="text-lg mb-2">Professional Email</h3>
                <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal mb-3">@yourbusiness.ie email through <Link href="/microsoft-365" className="text-accent hover:underline">Microsoft 365</Link>. Accessible on phone, laptop, and tablet. Shared between office and field. Properly secured with MFA.</p>
                <p className="text-sm font-headline font-bold text-accent">From &euro;17.50/user/month</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white p-7 rounded-2xl card-hover shadow-sm">
                <img src={iconBusinessPhone} alt="Glass telephone handset representing Microsoft Teams Phone business phone system" width={1000} height={1000} className="w-20 h-20 mb-4" loading="lazy" />
                <h3 className="text-lg mb-2">A Phone System That Follows You</h3>
                <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal mb-3"><Link href="/microsoft-365" className="text-accent hover:underline">Microsoft Teams Phone</Link> replaces your landline or the personal mobile you&rsquo;ve been giving to clients. A proper business number that works from any device.</p>
                <p className="text-sm font-headline font-bold text-accent">Bundled into &euro;42.50/user/month plan</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white p-7 rounded-2xl card-hover shadow-sm">
                <img src={iconLocalSeo} alt="Glass magnifying glass on a search bar representing local SEO for tradespeople" width={1000} height={1000} className="w-20 h-20 mb-4" loading="lazy" />
                <h3 className="text-lg mb-2">A Website That Brings in Work</h3>
                <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal mb-3">Professional, mobile-friendly, designed to rank on Google when locals search for your trade. Portfolio gallery, quote request form, local SEO for your area. See the <Link href="/web-design" className="text-accent hover:underline">web design page</Link> for details.</p>
                <p className="text-sm font-headline font-bold text-accent">From &euro;799</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white p-7 rounded-2xl card-hover shadow-sm">
                <img src={iconGrantEuro} alt="Glass euro coin with checkmark representing Grow Digital Voucher eligibility" width={1000} height={1000} className="w-20 h-20 mb-4" loading="lazy" />
                <h3 className="text-lg mb-2">Grow Digital Voucher Ready</h3>
                <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal mb-3">The <Link href="/grants-funding" className="text-accent hover:underline">Grow Digital Voucher</Link> covers 50% of new software subscriptions (CRM, job tracking, M365, e-commerce) up to &euro;5,000. Bespoke websites aren&rsquo;t eligible, but I provide scheme-compliant invoicing for elements that are.</p>
                <p className="text-sm font-headline font-bold text-accent">Up to &euro;5,000 funding</p>
              </div>
            </StaggerItem>
</StaggerContainer>
        </div>
      </section>

      {/* Proof */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-10">
            <span className="eyebrow mb-5 inline-block">Real Results</span>
            <h2 className="text-3xl">Tradespeople I've Helped</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            <StaggerItem>
              <Link href="/portfolio#project-bm-custom-furniture" className="block bg-[#f3f4f5] p-7 rounded-2xl card-hover group">
                <h3 className="text-lg mb-2">BM Custom Furniture &mdash; Carlow</h3>
                <p className="text-foreground text-[15px] font-sans mb-3">Bespoke furniture maker. No website, no online enquiries. I built a portfolio-led website with local SEO. Within weeks, Google was sending enquiries from customers who&rsquo;d never heard of them.</p>
                <div className="flex items-start gap-2 mb-4">
                  <Quote className="text-accent shrink-0 mt-1" size={16} />
                  <p className="text-foreground text-sm font-sans italic">&ldquo;Within weeks of launching, we were getting enquiries from people who found us on Google &mdash; that never happened before.&rdquo;</p>
                </div>
                <p className="text-xs text-muted-foreground font-headline font-bold mb-3">Barry, BM Custom Furniture</p>
                <span className="text-accent text-sm font-headline font-bold inline-flex items-center">Read the case study <ArrowRight size={14} className="ml-1 group-hover:translate-x-0.5 transition-transform" /></span>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/portfolio#project-nurney-plant-civil" className="block bg-[#f3f4f5] p-7 rounded-2xl card-hover group">
                <h3 className="text-lg mb-2">Nurney Plant and Civil &mdash; Carlow</h3>
                <p className="text-foreground text-[15px] font-sans mb-3">Plant hire and civil engineering. I handled the lot &mdash; website, Microsoft 365, and Wi-Fi across the premises. Professional email between office and site, and a website that wins contracts.</p>
                <div className="flex items-start gap-2 mb-4">
                  <Quote className="text-accent shrink-0 mt-1" size={16} />
                  <p className="text-foreground text-sm font-sans italic">&ldquo;Joey did the lot for us. Can&rsquo;t recommend him enough.&rdquo;</p>
                </div>
                <p className="text-xs text-muted-foreground font-headline font-bold mb-3">Brian, Nurney Plant and Civil</p>
                <span className="text-accent text-sm font-headline font-bold inline-flex items-center">Read the case study <ArrowRight size={14} className="ml-1 group-hover:translate-x-0.5 transition-transform" /></span>
              </Link>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn className="text-center mt-8">
            <Link href="/portfolio" className="text-accent font-headline font-bold inline-flex items-center text-sm hover:text-primary transition-colors">
              See all case studies <ArrowRight size={14} className="ml-1" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Worked example */}
      <section className="py-20 bg-accent/5 border-y border-accent/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <h2 className="text-2xl mb-4">A Typical Setup for a Trade Business</h2>
                <p className="text-foreground text-[15px] leading-relaxed font-sans mb-4">
                  A six-person trade business getting a website, Microsoft 365 with a business phone, and managed IT typically pays:
                </p>
                <ul className="space-y-2 mb-4 list-none p-0 m-0">
                  <li className="flex items-start gap-2 text-[14px] font-sans">
                    <CheckCircle className="text-accent shrink-0 mt-0.5" size={15} />
                    <span><strong>&euro;1,299 one-off</strong> for a Business website + &euro;49/month care plan</span>
                  </li>
                  <li className="flex items-start gap-2 text-[14px] font-sans">
                    <CheckCircle className="text-accent shrink-0 mt-0.5" size={15} />
                    <span><strong>&euro;42.50 &times; 6 = &euro;255/month</strong> for Microsoft 365 with phone</span>
                  </li>
                  <li className="flex items-start gap-2 text-[14px] font-sans">
                    <CheckCircle className="text-accent shrink-0 mt-0.5" size={15} />
                    <span><strong>&euro;65 &times; 6 = &euro;390/month</strong> for Managed IT Standard</span>
                  </li>
                </ul>
                <p className="font-headline font-bold text-primary">Total: &euro;1,299 one-off + &euro;694/month</p>
                <p className="text-sm text-accent font-headline font-bold">M365 subscriptions may qualify for Grow Digital Voucher (50% up to &euro;5,000).</p>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/contact#send-message">
                  <Button size="lg" className="w-full">Book a Free Consultation</Button>
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
            <h2 className="text-3xl">For Tradespeople &mdash; In Plain English</h2>
          </FadeIn>
          <FadeIn>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {[
                { id: "t-1", q: "How much does a website cost for a tradesperson?", a: "Most trade websites cost between \u20ac799 and \u20ac1,299 depending on pages and features. Note: bespoke website builds aren\u2019t eligible for the Grow Digital Voucher \u2014 though job tracking software, CRM, and M365 subscriptions often are." },
                { id: "t-2", q: "I\u2019m not good with computers \u2014 will this be hard for me?", a: "Not at all. I handle everything. You don\u2019t need to know anything about websites, email, or IT. My entire approach is built for people who are experts in their trade, not in technology." },
                { id: "t-3", q: "What if I just want a website and nothing else?", a: "That\u2019s fine. Although most trade clients end up wanting email and basic IT sorted too, each service works independently. Start with what you need now." },
                { id: "t-4", q: "Will my bigger clients take me more seriously?", a: "Yes. A professional website and email address immediately positions you as an established business \u2014 not someone working out of a van with a Gmail address. And if they ask about your IT security (which is happening more and more), you\u2019ll be ready." },
                { id: "t-5", q: "Can I use a government grant?", a: "The Grow Digital Voucher (replaced the TOV in Dec 2024) covers 50% up to \u20ac5,000 for new software subscriptions, training, and IT configuration. It doesn\u2019t fund bespoke websites. You apply through your LEO after a free Digital for Business consultation \u2014 I provide scheme-compliant invoicing." },
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
      <section className="py-20 bg-[#f3f4f5] border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-10">
            <span className="eyebrow mb-3 inline-block">Dig Deeper</span>
            <h2 className="text-2xl">Each Service in Full Detail</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/web-design", title: "Web Design", desc: "4-week builds targeting local search terms \u2014 'plumber Portlaoise', 'electrician Carlow', 'builder Kilkenny'." },
              { href: "/microsoft-365", title: "Microsoft 365 & Teams Phone", desc: "Office-to-site email, Teams, and a proper business phone number your lads carry on their phones." },
              { href: "/managed-it-support", title: "Managed IT Support", desc: "Fixed-fee proactive IT with NIS2 supply-chain security documentation included." },
              { href: "/grants-funding", title: "Grants & Funding", desc: "Honest guide to the Grow Digital Voucher \u2014 what qualifies for trade businesses and what doesn\u2019t." },
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
        heading="Get Your Trade Business Found Online"
        subtext="Book a free consultation. I'll show you what a professional online presence can do, check if you're eligible for a government grant, and give you a clear, honest quote."
        primaryText="Book a Free Consultation"
        primaryHref="/contact#send-message"
        secondaryText="See Bundles &amp; Pricing"
        secondaryHref="/pricing"
      />
    </div>
  );
}
