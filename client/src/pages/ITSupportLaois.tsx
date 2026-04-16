import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, ServerCog, Shield, Cloud, Users, MapPin, TrendingUp } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ITSupportLaois() {
  return (
    <div className="flex flex-col min-h-screen">

      <section className="relative bg-primary overflow-hidden py-20 md:py-28">
        <GridLines cols={12} rows={8} color="#ffffff" opacity={0.05} />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <FadeIn direction="up">
            <span className="eyebrow mb-4 inline-block">IT Support &mdash; County Laois</span>
            <h1 className="display-sm text-white mb-6">
              Managed IT Support in Laois &mdash; From Someone Based Right Here
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8">
              Laois is growing fast &mdash; more businesses, more employees, more technology. But most Laois SMEs still have no IT support until something breaks. I provide proactive managed IT from my base on the Laois-Carlow border: monitoring, security, compliance, and support for a fixed monthly fee. On-site visits across the county, not a remote helpdesk in Dublin.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact#send-message">
                <Button size="lg">Book a Free IT Review</Button>
              </Link>
              <Link href="/managed-it-support">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">See Full IT Plans &rarr;</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Why Laois Businesses Need This</span>
            <h2 className="text-3xl">Laois Has Grown Faster Than Its IT Infrastructure</h2>
          </FadeIn>
          <FadeIn>
            <p className="text-foreground text-[15px] leading-relaxed font-sans mb-6">
              The M7 corridor has turned Portlaoise and Portarlington into commuter hubs with thriving local economies. New businesses are opening, existing businesses are growing, and everyone relies on email, cloud tools, and internet connectivity more than ever.
            </p>
            <p className="text-foreground text-[15px] leading-relaxed font-sans mb-6">
              But the IT support options haven't kept pace. Most Laois businesses either have no IT support at all (calling someone random when things break) or use a Dublin-based provider who doesn't offer on-site visits and takes days to respond. Neither works.
            </p>
            <p className="text-foreground text-[15px] leading-relaxed font-sans font-bold">
              I'm based in Crettyard. I can be in Portlaoise in 20 minutes, Portarlington in 30, or Mountmellick in 25. That's not remote support &mdash; that's your local IT department.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl">What Laois Businesses Get</h2>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: ServerCog, title: "Proactive Monitoring", desc: "Your systems watched 24/7. Problems caught before they cost you time. Updates applied, patches installed, performance maintained \u2014 all from right here in Laois." },
              { icon: Cloud, title: "Microsoft 365 Management", desc: "User management, password resets, email config, licence admin. If you\u2019re a Laois business on M365, I manage the entire environment." },
              { icon: Shield, title: "Security & Compliance", desc: "MFA, endpoint protection, backup, and GDPR / NIS2 compliance checks. If your business handles customer data \u2014 which almost every Laois business does \u2014 this matters." },
              { icon: MapPin, title: "On-Site When Needed", desc: "Sometimes remote isn\u2019t enough. Network issues, hardware problems, new office setups \u2014 I come to you anywhere in Laois." },
              { icon: Users, title: "One Person Who Knows Your Setup", desc: "When you call, I already know your systems because I built and manage them. No explaining your setup to a stranger every time." },
              { icon: TrendingUp, title: "Scales as You Grow", desc: "New staff member? New office? I add them to the system. Laois businesses are growing \u2014 your IT support should grow with you." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-6 rounded-2xl card-hover shadow-sm">
                  <item.icon className="text-accent mb-3" size={24} />
                  <h3 className="text-base font-headline font-bold mb-2">{item.title}</h3>
                  <p className="text-foreground text-[15px] font-sans">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-10">
            <h3 className="text-xl mb-4">Plans for Laois Businesses</h3>
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-6">
              <div className="bg-[#f3f4f5] p-4 rounded-xl text-center">
                <p className="font-headline font-bold text-accent text-lg">&euro;45</p>
                <p className="text-xs text-muted-foreground">Essential / user / month</p>
              </div>
              <div className="bg-accent/10 p-4 rounded-xl text-center border border-accent/20">
                <p className="font-headline font-bold text-accent text-lg">&euro;75</p>
                <p className="text-xs text-muted-foreground">Professional / user / month</p>
              </div>
              <div className="bg-[#f3f4f5] p-4 rounded-xl text-center">
                <p className="font-headline font-bold text-accent text-lg">&euro;110</p>
                <p className="text-xs text-muted-foreground">Comprehensive / user / month</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {[
                { id: "itl-1", q: "Can you visit my office in Portlaoise?", a: "Absolutely. I\u2019m 20 minutes from Portlaoise. On-site visits for network issues, hardware setup, or new office configurations are a normal part of my service." },
                { id: "itl-2", q: "I only have 2\u20133 staff \u2014 is this overkill?", a: "Not at all. My Essential plan starts at \u20ac45/user/month. Even a 2-person business benefits from proper email management, security, and someone to call when things go wrong." },
                { id: "itl-3", q: "Do you cover Portarlington and south Offaly too?", a: "Yes \u2014 Portarlington straddles the border and I cover it fully. I also serve nearby Offaly towns like Mountmellick and Edenderry." },
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
            <h2 className="text-2xl">More Ways I Help Laois Businesses</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/managed-it-support", title: "Full IT Plans", desc: "See the Essential / Professional / Comprehensive managed IT tiers in full detail, with complete feature lists." },
              { href: "/microsoft-365", title: "Microsoft 365", desc: "Professional email, Teams, and Teams Phone \u2014 administered as part of your Laois IT plan." },
              { href: "/cybersecurity", title: "Cybersecurity & Compliance", desc: "Dedicated NIS2, GDPR, and phishing-protection guidance for Laois SMEs beyond the core IT plan." },
              { href: "/web-design-laois", title: "Web Design in Laois", desc: "Laois-focused web design with local SEO for Portlaoise, Portarlington and the wider county." },
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
        eyebrow="Based in Laois?"
        heading="Get IT Support From Someone Who\u2019s Actually Here"
        subtext="Book a free IT review. I'll assess your setup, identify the risks, and show you how managed support works \u2014 from right here in Laois."
        primaryText="Book a Free IT Review"
        primaryHref="/contact#send-message"
        secondaryText="See All Bundles"
        secondaryHref="/pricing"
      />
    </div>
  );
}
