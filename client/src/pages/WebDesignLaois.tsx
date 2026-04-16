import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeEuro, Quote, Search } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroLaois from "@assets/wd-laois-hero-portlaoise-dusk.webp";
import conceptMap from "@assets/wd-laois-concept-growing-map.webp";
import iconLocalSeo from "@assets/concept-local-seo.webp";
import iconMapsPin from "@assets/concept-google-maps-pin.webp";
import iconTarget from "@assets/concept-audience-target.webp";
import iconFunnel from "@assets/concept-conversion-funnel.webp";

export default function WebDesignLaois() {
  return (
    <div className="flex flex-col min-h-screen">

      <section className="relative bg-primary overflow-hidden py-20 md:py-28">
        <GridLines cols={12} rows={8} color="#ffffff" opacity={0.05} />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <FadeIn direction="up">
              <span className="eyebrow mb-4 inline-block">Web Design &mdash; County Laois</span>
              <h1 className="display-sm text-white mb-6">
                Web Design for Laois Businesses &mdash; From Someone Who Actually Lives Here
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8">
                I'm based near Crettyard, right here in Laois. When I build a website for a Laois business, I know the area, I know the market, and I know what "plumber Portlaoise" or "electrician Mountmellick" actually means in terms of local search competition. A Dublin agency doesn't &mdash; and it shows.
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
            <FadeIn direction="up" delay={0.1}>
              <img
                src={heroLaois}
                alt="Portlaoise town centre at dusk with a laptop on a café table showing a small-business website"
                width={1920}
                height={1080}
                className="w-full h-auto rounded-2xl shadow-2xl"
                loading="eager"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Laois business landscape */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-10">
            <img
              src={conceptMap}
              alt="Illustration of County Laois on a glass plinth with a glowing teal pin on Portlaoise"
              width={1000}
              height={1000}
              className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-6"
              loading="lazy"
            />
            <span className="eyebrow mb-5 inline-block">The Laois Opportunity</span>
            <h2 className="text-3xl">Laois Is Growing. Is Your Business Keeping Up Online?</h2>
          </FadeIn>
          <FadeIn>
            <p className="text-foreground text-[15px] leading-relaxed font-sans mb-6">
              Laois has changed dramatically in the last decade. Portlaoise is now one of the fastest-growing towns in Ireland, driven by the M7 motorway making it a prime commuter base. Portarlington has seen massive population growth. Towns like Abbeyleix, Mountmellick, Mountrath, and Stradbally have active local economies with tradespeople, service businesses, and hospitality venues serving both locals and visitors.
            </p>
            <p className="text-foreground text-[15px] leading-relaxed font-sans mb-6">
              But here's the disconnect: the population has grown, the demand for local services has grown, and yet many Laois businesses still have no website, or have one that was built five years ago and hasn't been touched since. Meanwhile, newcomers to the area are searching Google for everything &mdash; plumbers, cleaners, accountants, restaurants. If your business doesn't appear, the work goes to whoever does.
            </p>
            <p className="text-foreground text-[15px] leading-relaxed font-sans mb-6">
              Whether you need a <strong>web designer in Portlaoise</strong>, <strong>website design in Portarlington</strong>, or a Laois business website that works across the M7 corridor and the wider Midlands, I build locally, work locally, and understand the market.
            </p>
            <p className="text-foreground text-[15px] leading-relaxed font-sans font-bold">
              I build websites that put Laois businesses in front of these searches &mdash; optimised for the exact terms people in your area actually type into Google.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What Laois businesses search for */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-10">
            <Search className="text-accent mx-auto mb-3" size={28} />
            <h2 className="text-2xl">What Laois Customers Are Actually Searching</h2>
            <p className="text-foreground text-sm font-sans mt-2">These are real search patterns I optimise your website for:</p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "\"plumber Portlaoise\"",
              "\"electrician Laois\"",
              "\"cleaner near me\" (Laois)",
              "\"accountant Portarlington\"",
              "\"landscaper Abbeyleix\"",
              "\"builder Mountmellick\"",
              "\"restaurant Stradbally\"",
              "\"B&B Durrow Laois\"",
              "\"solicitor Portlaoise\"",
              "\"kitchen fitter Laois\"",
              "\"pest control Mountrath\"",
              "\"photographer Laois\"",
            ].map((term, i) => (
              <StaggerItem key={i}>
                <div className="bg-white px-4 py-3 rounded-xl text-center text-sm font-mono text-primary/80">{term}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What you get */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">What You Get</span>
            <h2 className="text-3xl">A Website Built for Laois &mdash; Not a Generic Template</h2>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6 mb-14">
            {[
              { img: iconLocalSeo, alt: "Glass magnifying glass on a search bar representing Laois-targeted SEO", title: "Laois-Targeted SEO", desc: "I research the actual search terms people in Portlaoise, Portarlington, and across Laois use \u2014 and build your site around them. Not generic national keywords." },
              { img: iconMapsPin, alt: "Glass map pin on a folded map tile representing Google Maps and local visibility", title: "Google Maps & Local Visibility", desc: "Proper Google Business Profile setup so you appear in the map pack when someone searches your service in Laois. This is where most local clicks happen." },
              { img: iconTarget, alt: "Glass concentric-ring target with an arrow in the bullseye representing audience targeting", title: "Designed for Your Customers", desc: "Whether you serve commuters, farmers, local families, or businesses \u2014 the website is designed around who actually hires you in Laois." },
              { img: iconFunnel, alt: "Glass conversion funnel with droplets representing website conversion", title: "Built to Convert", desc: "Clear calls-to-action, quote request forms, click-to-call buttons. The goal is phone calls and emails from real prospects, not just page views." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#f3f4f5] p-6 rounded-2xl card-hover">
                  <img
                    src={item.img}
                    alt={item.alt}
                    width={1000}
                    height={1000}
                    className="w-20 h-20 mb-3"
                    loading="lazy"
                  />
                  <h3 className="text-base font-headline font-bold mb-2">{item.title}</h3>
                  <p className="text-foreground text-[15px] font-sans">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Proof block */}
          <FadeIn className="mb-14">
            <div className="bg-[#f3f4f5] p-7 rounded-2xl">
              <div className="flex items-start gap-4">
                <Quote className="text-accent shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-foreground text-[15px] font-sans italic mb-3">
                    "Joey built us a website that actually looks as good as the furniture we make. Within weeks of launching, we were getting enquiries from people who found us on Google &mdash; that never happened before."
                  </p>
                  <p className="text-sm font-headline font-bold text-primary">Barry, BM Custom Furniture &mdash; Laois/Carlow border</p>
                  <p className="text-xs text-muted-foreground">No website &rarr; professional site &rarr; Google enquiries within 3 weeks</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Grant + pricing */}
          <FadeIn className="mb-14">
            <div className="bg-accent/5 border border-accent/20 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <BadgeEuro className="text-accent" size={24} />
                <h3 className="text-lg">Laois LEO Grow Digital Voucher</h3>
              </div>
              <p className="text-foreground text-[15px] font-sans mb-2">
                Laois Local Enterprise Office (based in Portlaoise) administers the Grow Digital Voucher. It covers 50% of new software subscriptions (<Link href="/microsoft-365" className="text-accent hover:underline">Microsoft 365</Link>, CRM, e-commerce platforms, cybersecurity) up to &euro;5,000. Bespoke WordPress website builds aren&rsquo;t eligible, but Shopify/Squarespace subscriptions and related software may be. A free Digital for Business consultation with your LEO is required first.
              </p>
              <p className="text-foreground text-[15px] font-sans font-bold">
                I&rsquo;m Grow Digital Voucher Ready &mdash; my invoicing is prepared to meet scheme requirements for eligible project elements.
              </p>
              <Link href="/grants-funding" className="text-accent font-headline font-bold inline-flex items-center text-sm mt-3 hover:text-primary transition-colors">
                Full grant details <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </FadeIn>

          <FadeIn className="text-center">
            <h3 className="text-xl mb-4">Pricing</h3>
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-6">
              <div className="bg-[#f3f4f5] p-4 rounded-xl text-center">
                <p className="font-headline font-bold text-accent text-lg">&euro;799</p>
                <p className="text-xs text-muted-foreground">Starter (1&ndash;3 pages)</p>
              </div>
              <div className="bg-accent/10 p-4 rounded-xl text-center border border-accent/20">
                <p className="font-headline font-bold text-accent text-lg">&euro;1,299</p>
                <p className="text-xs text-muted-foreground">Business (4&ndash;7 pages)</p>
              </div>
              <div className="bg-[#f3f4f5] p-4 rounded-xl text-center">
                <p className="font-headline font-bold text-accent text-lg">Custom</p>
                <p className="text-xs text-muted-foreground">E-commerce / redesign</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-sans mb-6">All websites include a mandatory <Link href="/website-care-plans" className="text-accent hover:underline">care plan from &euro;49/month</Link>.</p>
            <Link href="/web-design" className="text-accent font-headline font-bold inline-flex items-center text-sm hover:text-primary transition-colors">
              See full web design details <ArrowRight size={14} className="ml-1" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Laois towns */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl">Web Design Across Laois</h2>
          </FadeIn>
          <FadeIn>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { town: "Portlaoise", note: "County town, fastest-growing commercial centre. High competition for local search terms \u2014 a professional site is essential." },
                { town: "Portarlington", note: "Booming commuter town straddling the Laois-Offaly border. Growing demand for local services from new residents." },
                { town: "Abbeyleix", note: "Heritage town with strong tourism and hospitality. Websites for B&Bs, restaurants, and craft businesses perform well here." },
                { town: "Mountmellick", note: "Active local economy with trades and service businesses. Lower search competition means a good site ranks faster." },
                { town: "Mountrath", note: "Gateway to the Slieve Blooms. Tourism and local trades benefit from being found online." },
                { town: "Stradbally", note: "Home of the Electric Picnic. Local businesses benefit from seasonal search spikes." },
              ].map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-xl">
                  <p className="font-headline font-bold text-primary text-sm mb-1">{item.town}</p>
                  <p className="text-foreground text-xs font-sans">{item.note}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <h2 className="text-2xl">Questions from Laois Business Owners</h2>
          </FadeIn>
          <FadeIn>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {[
                { id: "wdl-1", q: "Can you rank my business in Portlaoise specifically?", a: "Yes. I optimise for the exact terms your customers search \u2014 'plumber Portlaoise,' 'accountant Portlaoise,' etc. Combined with Google Business Profile optimisation, this targets both the organic results and the local map pack." },
                { id: "wdl-2", q: "I'm in a small town \u2014 is a website worth it?", a: "Absolutely. In smaller towns like Mountmellick, Mountrath, or Durrow, there's less competition online, which means a well-built site can rank faster and dominate local search results more easily than in a larger town." },
                { id: "wdl-3", q: "How do I apply for the Laois LEO grant?", a: "The Laois LEO in Portlaoise runs regular information sessions. You attend a session, then apply. I handle the quote, help with the application, and ensure everything meets their requirements." },
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

      {/* Related services for Laois businesses */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-10">
            <span className="eyebrow mb-3 inline-block">More Local Services</span>
            <h2 className="text-2xl">Other Ways I Can Help Laois Businesses</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            <StaggerItem>
              <Link href="/it-support-laois" className="block bg-[#f3f4f5] p-6 rounded-2xl card-hover h-full">
                <h3 className="text-base mb-2">IT Support in Laois</h3>
                <p className="text-foreground text-sm font-sans mb-3">Managed IT, Microsoft 365, and cybersecurity for Portlaoise, Portarlington, and the wider county.</p>
                <span className="text-accent text-sm font-headline font-bold inline-flex items-center">Learn more <ArrowRight size={14} className="ml-1" /></span>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/website-care-plans" className="block bg-[#f3f4f5] p-6 rounded-2xl card-hover h-full">
                <h3 className="text-base mb-2">Website Care Plans</h3>
                <p className="text-foreground text-sm font-sans mb-3">Hosting, backups, security patches and content updates. Every Laois site I build includes a care plan.</p>
                <span className="text-accent text-sm font-headline font-bold inline-flex items-center">Learn more <ArrowRight size={14} className="ml-1" /></span>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/grants-funding" className="block bg-[#f3f4f5] p-6 rounded-2xl card-hover h-full">
                <h3 className="text-base mb-2">Grants &amp; Funding</h3>
                <p className="text-foreground text-sm font-sans mb-3">Full honest guide to the Grow Digital Voucher through Laois LEO &mdash; what qualifies, what doesn&rsquo;t.</p>
                <span className="text-accent text-sm font-headline font-bold inline-flex items-center">Learn more <ArrowRight size={14} className="ml-1" /></span>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <SpotlightCTA
        eyebrow="Based in Laois?"
        heading="Let's Get Your Laois Business Found on Google"
        subtext="Book a free consultation with someone who actually knows the Laois market. I'll show you what a professional website can do for your specific business."
        primaryText="Get a Free Quote"
        primaryHref="/contact#send-message"
        secondaryText="See Bundles &amp; Pricing"
        secondaryHref="/pricing"
      />
    </div>
  );
}
