import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, BadgeEuro, Search, MapPin, Utensils, Store, Eye } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function WebDesignKilkenny() {
  return (
    <div className="flex flex-col min-h-screen">

      <section className="relative bg-primary overflow-hidden py-20 md:py-28">
        <GridLines cols={12} rows={8} color="#ffffff" opacity={0.05} />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <FadeIn direction="up">
            <span className="eyebrow mb-4 inline-block">Web Design &mdash; County Kilkenny</span>
            <h1 className="display-heading text-white mb-6 leading-tight">
              Web Design for Kilkenny &mdash; Where Tourism, Craft, and Local Business Meet
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8">
              Kilkenny is one of Ireland's most-visited destinations. Tourists, locals, and businesses searching online for services, food, accommodation, and experiences in Kilkenny need to find you &mdash; not your competitor on the next street. I build websites that make that happen, with an understanding of what makes Kilkenny's market unique.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact#send-message">
                <Button size="lg">Get a Free Quote</Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">See My Work &rarr;</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Kilkenny business landscape */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">The Kilkenny Market</span>
            <h2 className="text-3xl">Kilkenny's Unique Mix Demands a Website That Understands It</h2>
          </FadeIn>
          <FadeIn>
            <p className="text-foreground text-[15px] leading-relaxed font-sans mb-6">
              Kilkenny city is a tourist magnet &mdash; the Medieval Mile, the castle, the food scene, Kilkenny Design Centre, the Cat Laughs festival, and a thriving craft sector. For hospitality and retail businesses, a website isn't a luxury &mdash; it's how tourists decide where to eat, stay, and shop before they even arrive.
            </p>
            <p className="text-foreground text-[15px] leading-relaxed font-sans mb-6">
              But Kilkenny isn't just tourism. Towns like Castlecomer, Thomastown, Callan, and Graiguenamanagh have active local economies driven by construction, farming services, professional firms, and local retailers. These businesses serve local customers who search Google the same way everyone else does &mdash; and the business that appears first wins.
            </p>
            <p className="text-foreground text-[15px] leading-relaxed font-sans mb-6">
              The <strong>European Accessibility Act</strong> is particularly relevant for Kilkenny businesses. If you sell products or services online &mdash; especially in hospitality and retail &mdash; your website now needs to be accessible to people with disabilities. I build with this in mind from the start, so you're compliant without an expensive retrofit.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Kilkenny-specific sectors */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Kilkenny Sectors</span>
            <h2 className="text-3xl">Websites Built for How Kilkenny Works</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Utensils, title: "Restaurants, Caf\u00e9s & Pubs", desc: "Tourists plan on Google before they arrive. A properly built website with menus, hours, location, and booking options means you capture visitors before they even reach the city. Accessibility compliance (EAA) is essential for hospitality." },
              { icon: Store, title: "Retail & Craft Businesses", desc: "Kilkenny's craft heritage is world-famous. Whether you're a potter in Thomastown or a boutique in the city, an e-commerce or portfolio website turns browsers into buyers \u2014 both walk-in and online." },
              { icon: MapPin, title: "B&Bs, Guesthouses & Self-Catering", desc: "Accommodation searches are massive in Kilkenny. Your website needs to compete with Booking.com \u2014 not by matching their scale, but by ranking for specific terms like 'guesthouse Thomastown' and offering direct booking." },
              { icon: Eye, title: "Professional Services & Trades", desc: "Solicitors, accountants, builders, and electricians in Kilkenny city and surrounding towns. A professional website builds trust and wins the call over a competitor with no online presence." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-7 rounded-2xl card-hover shadow-sm">
                  <item.icon className="text-accent mb-4" size={28} />
                  <h3 className="text-lg mb-2">{item.title}</h3>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Search terms */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-10">
            <Search className="text-accent mx-auto mb-3" size={28} />
            <h2 className="text-2xl">What Kilkenny Customers &amp; Tourists Search For</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "\"restaurant Kilkenny\"",
              "\"B&B Thomastown\"",
              "\"plumber Kilkenny\"",
              "\"craft shop Kilkenny city\"",
              "\"electrician Castlecomer\"",
              "\"self catering Callan\"",
              "\"accountant Kilkenny\"",
              "\"builder Graiguenamanagh\"",
              "\"things to do Kilkenny\"",
              "\"wedding venue Kilkenny\"",
              "\"coffee shop near me\"",
              "\"best pub Kilkenny\"",
            ].map((term, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#f3f4f5] px-4 py-3 rounded-xl text-center text-sm font-mono text-primary/80">{term}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Grant + pricing */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="mb-14">
            <div className="bg-white border border-accent/20 p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <BadgeEuro className="text-accent" size={24} />
                <h3 className="text-lg">Kilkenny LEO Grow Digital Voucher</h3>
              </div>
              <p className="text-foreground text-[15px] font-sans mb-2">
                Kilkenny LEO (based in Kilkenny city) administers the Grow Digital Voucher, which replaced the old Trading Online Voucher in December 2024. It covers 50% of new software subscriptions (M365, CRM, e-commerce platforms, cybersecurity) up to &euro;5,000. A free Digital for Business consultation is required before applying.
              </p>
              <p className="text-foreground text-[15px] font-sans">
                For Kilkenny hospitality businesses, subscription-based booking platforms, CRM, and e-commerce tools are exactly the kind of software the voucher is designed to fund. Bespoke website builds aren&rsquo;t eligible, but the software that powers modern hospitality businesses often is.
              </p>
              <Link href="/grants-funding" className="text-accent font-headline font-bold inline-flex items-center text-sm mt-3 hover:text-primary transition-colors">
                Full grant details <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </FadeIn>

          <FadeIn className="text-center">
            <h3 className="text-xl mb-4">Pricing</h3>
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-6">
              <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                <p className="font-headline font-bold text-accent text-lg">&euro;799</p>
                <p className="text-xs text-muted-foreground">Starter (1&ndash;3 pages)</p>
              </div>
              <div className="bg-accent/10 p-4 rounded-xl text-center border border-accent/20">
                <p className="font-headline font-bold text-accent text-lg">&euro;1,299</p>
                <p className="text-xs text-muted-foreground">Business (4&ndash;7 pages)</p>
              </div>
              <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                <p className="font-headline font-bold text-accent text-lg">Custom</p>
                <p className="text-xs text-muted-foreground">E-commerce / booking</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-sans mb-6">All websites include a mandatory care plan from &euro;49/month. Accessibility compliance (EAA) built in.</p>
          </FadeIn>
        </div>
      </section>

      {/* Kilkenny towns */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl">Web Design Across Kilkenny</h2>
          </FadeIn>
          <FadeIn>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { town: "Kilkenny City", note: "Tourist hub with intense competition for restaurant, pub, and accommodation searches. Professional website essential for standing out." },
                { town: "Thomastown", note: "Growing craft and artisan centre. Businesses here benefit from both local and tourist search traffic." },
                { town: "Castlecomer", note: "Strong local economy with trades and services. Discovery Park brings visitor traffic. Lower search competition means faster results." },
                { town: "Callan", note: "Active market town. Local service businesses rank well with targeted SEO due to lower competition." },
                { town: "Graiguenamanagh", note: "Barrow Valley tourism and local trades. Beautiful area that photographs well for website portfolios." },
                { town: "Bennetsbridge & Stoneyford", note: "Craft trail stops. Artisan businesses here need websites that tell their story and attract visitors." },
              ].map((item, i) => (
                <div key={i} className="bg-[#f3f4f5] p-4 rounded-xl">
                  <p className="font-headline font-bold text-primary text-sm mb-1">{item.town}</p>
                  <p className="text-foreground text-xs font-sans">{item.note}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <h2 className="text-2xl">Questions from Kilkenny Business Owners</h2>
          </FadeIn>
          <FadeIn>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {[
                { id: "wdk-1", q: "Do I need an accessible website for my Kilkenny restaurant?", a: "If you take bookings online or display menus digitally, the European Accessibility Act likely applies. I build accessibility into every site from the start \u2014 so you're covered without paying for a separate audit or retrofit." },
                { id: "wdk-2", q: "Can I compete with Booking.com for accommodation searches?", a: "Not on volume \u2014 but on specificity, absolutely. Booking.com can't rank for 'guesthouse near Thomastown with river views.' A properly built website with targeted local SEO can and does." },
                { id: "wdk-3", q: "I'm not in Kilkenny city \u2014 will you still work with me?", a: "Absolutely. I work with businesses across the entire county \u2014 Castlecomer, Thomastown, Callan, Graiguenamanagh, and everywhere in between. Remote support works perfectly, and I'm available for in-person meetings too." },
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

      <SpotlightCTA
        eyebrow="Based in Kilkenny?"
        heading="Let's Build a Website Kilkenny's Visitors and Locals Can Find"
        subtext="Whether you run a restaurant in the city, a craft business in Thomastown, or a plumbing firm in Castlecomer &mdash; I'll build a website that brings in work."
        primaryText="Get a Free Quote"
        primaryHref="/contact#send-message"
        secondaryText="See Bundles &amp; Pricing"
        secondaryHref="/pricing"
      />
    </div>
  );
}
