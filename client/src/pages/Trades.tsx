import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { HardHat, CheckCircle, ArrowRight, Search, Mail, Phone, Shield, ServerCog, MonitorSmartphone, Quote, BadgeEuro, Wrench } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Trades() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-20 md:py-28">
        <GridLines cols={12} rows={8} color="#ffffff" opacity={0.05} />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <FadeIn direction="up">
            <span className="eyebrow mb-4 inline-block">IT for Trades &amp; Construction</span>
            <h1 className="display-heading text-white mb-6 leading-tight">
              Websites, Email, and IT Built Specifically for Tradespeople and Contractors
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8">
              You're brilliant at what you do &mdash; but when someone searches Google for an electrician, a plumber, or a builder in your area, they find your competitors instead. And increasingly, the bigger contractors you work for are asking about your IT security. I solve both problems &mdash; with technology that works, explained in plain English.
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
            {[
              { icon: MonitorSmartphone, title: "A Website That Brings in Work", desc: "Professional, mobile-friendly, designed to rank on Google when locals search for your trade. Portfolio gallery, quote request form, SEO for your area. From \u20ac799.", price: "From \u20ac799" },
              { icon: Mail, title: "Professional Email", desc: "@yourbusiness.ie email through Microsoft 365. Accessible on phone, laptop, and tablet. Shared between office and field. Properly secured with MFA.", price: "Setup from \u20ac350" },
              { icon: Phone, title: "A Phone System That Follows You", desc: "Microsoft Teams Phone replaces your landline or the personal mobile you\u2019ve been giving to clients. A proper business number that works from any device.", price: "From \u20ac7.50/user/mo" },
              { icon: ServerCog, title: "Managed IT That Prevents Problems", desc: "Proactive monitoring, updates, security, and support for a fixed monthly fee. When something goes wrong, one call to someone who knows your setup.", price: "From \u20ac45/user/mo" },
              { icon: Shield, title: "Security That Meets Supply Chain Requirements", desc: "MFA, email protection, endpoint security, and backup \u2014 documented and ready to show a main contractor or council if they ask about your security posture.", price: "Included in plans" },
              { icon: BadgeEuro, title: "Grow Digital Voucher Ready", desc: "The voucher covers 50% of new software subscriptions (CRM, job tracking, M365, e-commerce) up to \u20ac5,000. Bespoke websites aren\u2019t eligible, but I provide scheme-compliant invoicing for elements that are.", price: "Up to \u20ac5,000 funding" },
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

      {/* Proof */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-10">
            <span className="eyebrow mb-5 inline-block">Real Results</span>
            <h2 className="text-3xl">Tradespeople I've Helped</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl">
                <h3 className="text-lg mb-2">BM Custom Furniture &mdash; Carlow</h3>
                <p className="text-foreground text-[15px] font-sans mb-3">Bespoke furniture maker. No website, no online enquiries. I built a portfolio-led website with local SEO. Within weeks, Google was sending enquiries from customers who'd never heard of them.</p>
                <div className="flex items-start gap-2 mb-4">
                  <Quote className="text-accent shrink-0 mt-1" size={16} />
                  <p className="text-foreground text-sm font-sans italic">"Within weeks of launching, we were getting enquiries from people who found us on Google \u2014 that never happened before."</p>
                </div>
                <p className="text-xs text-muted-foreground font-headline font-bold">Barry, BM Custom Furniture</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl">
                <h3 className="text-lg mb-2">Nurney Plant and Civil &mdash; Carlow</h3>
                <p className="text-foreground text-[15px] font-sans mb-3">Plant hire and civil engineering. I handled the lot &mdash; website, Microsoft 365, and Wi-Fi across the premises. Professional email between office and site, and a website that wins contracts.</p>
                <div className="flex items-start gap-2 mb-4">
                  <Quote className="text-accent shrink-0 mt-1" size={16} />
                  <p className="text-foreground text-sm font-sans italic">"Joey did the lot for us. Can't recommend him enough."</p>
                </div>
                <p className="text-xs text-muted-foreground font-headline font-bold">Brian, Nurney Plant and Civil</p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn className="text-center mt-8">
            <Link href="/portfolio" className="text-accent font-headline font-bold inline-flex items-center text-sm hover:text-primary transition-colors">
              See all case studies <ArrowRight size={14} className="ml-1" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Bundle */}
      <section className="py-20 bg-accent/5 border-y border-accent/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <h2 className="text-2xl mb-4">The Trades Digital Foundation Bundle</h2>
                <p className="text-foreground text-[15px] leading-relaxed font-sans mb-4">
                  For trade businesses with 1&ndash;5 people, the Starter Bundle includes everything you need to get online properly:
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {["Professional website (up to 3 pages with portfolio)", "Website Care Plan (hosting, security, backups)", "Microsoft 365 (professional email)", "MFA and basic security", "Google Business Profile guidance"].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-[14px] font-sans">
                      <CheckCircle className="text-accent shrink-0 mt-0.5" size={15} />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <p className="font-headline font-bold text-primary">Setup from &euro;1,099 &middot; Ongoing from &euro;89/month</p>
                  <p className="text-sm text-accent font-headline font-bold">Software elements (M365, CRM) may qualify for Grow Digital Voucher funding.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/contact#send-message">
                  <Button size="lg" className="w-full">Get a Quote</Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="w-full">See All Bundles</Button>
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
