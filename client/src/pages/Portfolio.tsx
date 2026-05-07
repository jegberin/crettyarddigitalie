import { Link } from "wouter";
import project1 from "@assets/portfolio-bm-custom-furniture.webp";
import project2 from "@assets/portfolio-go-green-steam-clean.webp";
import project3 from "@assets/portfolio-nurney-plant-civil.webp";
import project4 from "@assets/portfolio-more-than-points.webp";
import project5 from "@assets/portfolio-crettyard-ie.webp";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { Quote, ArrowRight, Globe, Mail, Wifi, Star, Tag, ServerCog, Shield, BrainCircuit } from "lucide-react";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";

interface ProjectService {
  href: string;
  label: string;
}

interface Project {
  id: string;
  title: string;
  url: string;
  image: string;
  imageAlt: string;
  industry: string;
  services: ProjectService[]; // first entry is primary
  relationshipLine: string;
  challenge: string;
  solution: string;
  outcome: string;
}

export default function Portfolio() {
  const projects: Project[] = [
    {
      id: "project-bm-custom-furniture",
      title: "BM Custom Furniture",
      url: "https://bmcustomfurniture.ie",
      image: project1,
      imageAlt: "BM Custom Furniture — bespoke fitted furniture and wall panelling website homepage",
      industry: "Home & Interiors",
      relationshipLine: "9 years of service · 2016–2025 · Website, hardware, bookkeeping, all support",
      services: [
        { href: "/web-design", label: "Web Design" },
      ],
      challenge: "BM Custom Furniture does outstanding work — bespoke fitted wardrobes, wall panelling, and custom cabinetry — but had no online presence to show for it. New clients came entirely through word-of-mouth, and the business was missing enquiries from homeowners searching Google for furniture makers in Carlow and Laois.",
      solution: "Designed and built a visually rich, image-led website showcasing their craftsmanship in detail. The site included a portfolio gallery, service pages for each product category, and strong local SEO targeting Carlow, Laois, and surrounding areas, with clear calls-to-action for quote requests.",
      outcome: "BM Custom Furniture now has a professional online presence that positions them as a credible, high-quality provider. The site generates consistent enquiries from homeowners and businesses across Carlow and Laois who found them through Google — customers who previously wouldn't have known they existed."
    },
    {
      id: "project-go-green-steam-clean",
      title: "Go Green Steam Clean",
      url: "https://gogreensteamclean.ie",
      image: project2,
      imageAlt: "Go Green Steam Clean — eco-friendly steam cleaning business website homepage",
      industry: "Cleaning Services",
      relationshipLine: "Live and supported since 2025 · Monthly updates and support",
      services: [
        { href: "/web-design", label: "Web Design" },
      ],
      challenge: "Go Green Steam Clean offered a differentiated eco-friendly cleaning service but had no website to communicate their proposition. Without an online presence, they were invisible to the growing number of customers searching for cleaning services in the Midlands — and had no way to showcase what made them different.",
      solution: "Built a service-focused website with dedicated pages for each cleaning service, strong local SEO targeting the Midlands and surrounding areas, and conversion-optimised CTAs to drive bookings. The eco-friendly angle was emphasised throughout as a key differentiator that resonates with their target customers.",
      outcome: "The website now acts as a 24/7 booking engine, bringing in new customers who find the business through Google searches for steam cleaning services in their area. Enquiry volume increased significantly in the weeks following launch."
    },
    {
      id: "project-nurney-plant-civil",
      title: "Nurney Plant and Civil",
      url: "https://nurneyplantandcivil.ie",
      image: project3,
      imageAlt: "Nurney Plant and Civil — plant hire and civil engineering website homepage",
      industry: "Civil Engineering & Plant Hire",
      relationshipLine: "Live and supported since 2022 · Website, Microsoft 365, Wi-Fi",
      services: [
        { href: "/web-design", label: "Web Design" },
        { href: "/microsoft-365", label: "Microsoft 365" },
        { href: "/network-wifi-security", label: "Network & Wi-Fi" },
      ],
      challenge: "Nurney Plant and Civil operate a substantial plant hire and civil engineering business in Co. Carlow, but their online presence didn't reflect the scale or professionalism of their operation. Prospective clients — including councils and main contractors — were making decisions based on a site that undersold the business. Internally, email between office and site crews was unreliable (personal Gmail accounts), and Wi-Fi coverage was patchy.",
      solution: "Three integrated solutions: a professional corporate website clearly presenting their fleet and capabilities, Microsoft 365 for professional email across office and site teams, and a business-grade Wi-Fi installation covering the entire premises including workshop areas.",
      outcome: "A credible web presence that helps win contracts. Professional @nurneyplantandcivil.ie email between office and field. Full Wi-Fi coverage across all areas. A perfect example of one provider handling website, email, and network as one integrated system — a single recurring subscription for ongoing IT, hardware, and care."
    },
    {
      id: "project-more-than-points",
      title: "More Than Points",
      url: "https://morethanpoints.ie",
      image: project4,
      imageAlt: "More Than Points — teen and parent coaching website homepage",
      industry: "Education & Coaching",
      relationshipLine: "Live and supported since 2026 · Ongoing support",
      services: [
        { href: "/web-design", label: "Web Design" },
      ],
      challenge: "More Than Points is a coaching service helping Irish teenagers aged 16–19 and their parents navigate the pressures of the Irish education system. The founder had a clear offering and a compelling message — but no website to communicate it to families who were searching for help.",
      solution: "Designed and built a warm, grounded website with empathetic, conversion-focused copy and a clear service structure for both audiences: teens and parents. The visual identity was calm and reassuring, reflecting the coaching approach. The site makes it easy for families to understand the service, see who it's for, and take the step of booking a session.",
      outcome: "A professional, trust-building online presence that clearly communicates the coaching offering and differentiates the service from traditional academic tutoring. The site gives families the confidence to reach out and book — guiding them from curiosity to conversation."
    },
    {
      id: "project-crettyard-ie",
      title: "Crettyard.ie",
      url: "https://crettyard.ie",
      image: project5,
      imageAlt: "Crettyard.ie — community website for Crettyard, Co. Laois",
      industry: "Community & Local",
      relationshipLine: "Live and supported since 2026 · Ongoing support and development",
      services: [
        { href: "/web-design", label: "Web Design" },
      ],
      challenge: "Crettyard is a vibrant rural community on the Laois-Carlow border with deep local roots, active sports clubs, local businesses, and a rich heritage — but it had no dedicated online home. Residents, visitors, and diaspora had no single place to find community information, local news, or discover nearby businesses and services.",
      solution: "Designed and built a community website covering the history and heritage of the area, a local business directory with individual profiles, community club and school information, and a public notice board where residents can post and read local announcements. The site is built around a warm, locally grounded identity that reflects the character of the area.",
      outcome: "Crettyard.ie now serves as the community's digital home — a place where locals stay informed, visitors can discover what the area has to offer, and businesses can be found by people who are looking for them. The notice board and directory give residents and organisations a practical way to share news and support the local economy."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-[#f3f4f5] py-24 md:py-32 dot-matrix-bg relative overflow-hidden">
        <GridLines cols={8} rows={5} color="#002157" opacity={0.04} />
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <FadeIn>
            <span className="eyebrow mb-5 inline-block">Portfolio &amp; Case Studies</span>
            <h1 className="display-sm mb-6" data-testid="text-portfolio-heading">
              Portfolio &mdash; Web Design, Microsoft 365 &amp; IT Case Studies for Irish Small Businesses
            </h1>
            <p className="text-xl text-foreground mb-4 leading-relaxed font-sans font-normal" data-testid="text-portfolio-intro">
              These aren&rsquo;t projects I delivered and walked away from. Most are still active clients today. One ran for nine years before the relationship naturally concluded. Either way &mdash; these are relationships, not transactions.
            </p>
            <p className="text-lg text-foreground leading-relaxed font-sans">
              Each project was built around the business&rsquo;s specific goals, customers, and location. The clients below range from Carlow and Laois to wherever the next Irish small business calls from &mdash; and the work continues for as long as it&rsquo;s the right fit.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <StaggerContainer className="grid gap-24">
            {projects.map((project, index) => (
              <StaggerItem key={project.id}>
                <article
                  id={project.id}
                  className="scroll-mt-24 flex flex-col md:flex-row gap-10 items-start border-b border-gray-100 pb-20 last:border-0 last:pb-0"
                  data-testid={`card-project-${index}`}
                >
                  <div className="w-full md:w-1/2">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        className="w-full h-full object-cover"
                        width="600"
                        height="450"
                        loading="lazy"
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-between flex-wrap gap-3">
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-sm font-headline font-bold text-muted-foreground hover:text-accent inline-flex items-center gap-1 transition-colors" data-testid={`link-project-url-${index}`}>
                        <Globe className="w-3.5 h-3.5" />
                        {project.url.replace('https://', '')}
                      </a>
                      <span className="inline-flex items-center gap-1 text-xs font-headline font-bold text-accent/70 bg-accent/10 px-3 py-1 rounded-full" data-testid={`tag-industry-${index}`}>
                        <Tag className="w-3 h-3" />
                        {project.industry}
                      </span>
                    </div>
                    <p className="mt-3 text-[13px] font-headline font-semibold text-accent" data-testid={`text-relationship-${index}`}>
                      {project.relationshipLine}
                    </p>
                    {project.services.length > 1 && (
                      <div className="mt-3 flex items-center flex-wrap gap-2">
                        <span className="text-xs font-headline font-bold uppercase tracking-wider text-muted-foreground">Services delivered:</span>
                        {project.services.map((svc) => (
                          <Link
                            key={svc.href}
                            href={svc.href}
                            className="text-xs font-headline font-bold text-accent bg-accent/5 border border-accent/20 px-2.5 py-1 rounded-full hover:bg-accent/10 transition-colors"
                            data-testid={`tag-service-${index}-${svc.href}`}
                          >
                            {svc.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl mb-4" data-testid={`text-project-title-${index}`}>
                      <a href={`#${project.id}`} className="hover:text-accent transition-colors">{project.title}</a>
                    </h3>

                    <div className="mb-5">
                      <h4 className="text-sm font-headline font-bold uppercase tracking-wide text-accent mb-2">The Challenge</h4>
                      <p className="text-[15px] text-foreground leading-relaxed font-sans">
                        {project.challenge}
                      </p>
                    </div>

                    <div className="mb-5">
                      <h4 className="text-sm font-headline font-bold uppercase tracking-wide text-accent mb-2">What We Did</h4>
                      <p className="text-[15px] text-foreground leading-relaxed font-sans">
                        {project.solution}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-headline font-bold uppercase tracking-wide text-accent mb-2">The Outcome</h4>
                      <p className="text-[15px] text-foreground leading-relaxed font-sans">
                        {project.outcome}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4">
                      {project.services.map((svc) => (
                        <Link
                          key={svc.href}
                          href={svc.href}
                          className="text-accent font-headline font-bold inline-flex items-center gap-1 text-sm hover:text-primary transition-colors"
                          data-testid={`link-service-${index}-${svc.href}`}
                        >
                          Learn about {svc.label} <ArrowRight className="w-4 h-4" />
                        </Link>
                      ))}
                      <Link href="/contact#send-message" className="text-foreground/80 font-headline font-bold inline-flex items-center gap-1 text-sm hover:text-accent transition-colors" data-testid={`link-discuss-project-${index}`}>
                        Discuss a similar project <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn>
            <Quote className="w-10 h-10 text-accent/30 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl mb-4" data-testid="text-testimonials-heading">What Clients Say</h2>
            <p className="text-foreground mb-10 text-lg font-sans">
              Don't just take my word for it — here's what recent clients have to say.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "Joey built us a website that actually looks as good as the furniture we make. Within weeks of launching, we were getting enquiries from people who found us on Google — that never happened before. Brilliant service, no messing.",
                  name: "Barry",
                  business: "BM Custom Furniture",
                  projectId: "project-bm-custom-furniture",
                },
                {
                  quote: "I had no website and no idea where to start. Joey made the whole thing painless — explained everything in plain English and delivered a site that brings in new bookings every week. Best investment I've made in my business.",
                  name: "Darren",
                  business: "Go Green Steam Clean",
                  projectId: "project-go-green-steam-clean",
                },
                {
                  quote: "Joey did the lot for us — a professional website, Microsoft 365 so we have proper email between the office and the lads on site, and sorted our Wi-Fi so it works in every room. The lads even get compliments from clients about the website now. Can't recommend him enough.",
                  name: "Brian",
                  business: "Nurney Plant and Civil",
                  projectId: "project-nurney-plant-civil",
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm text-left flex flex-col" data-testid={`card-testimonial-${i + 1}`}>
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-foreground text-[15px] leading-relaxed mb-5 italic font-sans">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-auto">
                    <p className="font-headline font-bold text-sm text-foreground" data-testid={`text-testimonial-name-${i + 1}`}>{testimonial.name}</p>
                    <p className="text-foreground text-sm mb-3">{testimonial.business}</p>
                    <a href={`#${testimonial.projectId}`} className="text-accent text-xs font-headline font-bold inline-flex items-center hover:text-primary transition-colors" data-testid={`link-testimonial-to-project-${i + 1}`}>
                      See the case study <ArrowRight className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl mb-4" data-testid="text-services-heading">Looking for More Than a Website?</h2>
            <p className="text-foreground mb-8 text-lg max-w-2xl mx-auto font-sans">
              I offer a complete range of digital services to help your business get online, stay secure, and grow.
            </p>
            <div className="grid sm:grid-cols-3 md:grid-cols-6 gap-4">
              <Link href="/web-design">
                <div className="p-4 rounded-2xl bg-[#f3f4f5] hover:shadow-md transition-all cursor-pointer text-center">
                  <Globe className="w-6 h-6 text-accent mb-2 mx-auto" />
                  <h3 className="font-headline font-bold text-sm mb-1">Web Design</h3>
                </div>
              </Link>
              <Link href="/microsoft-365">
                <div className="p-4 rounded-2xl bg-[#f3f4f5] hover:shadow-md transition-all cursor-pointer text-center">
                  <Mail className="w-6 h-6 text-accent mb-2 mx-auto" />
                  <h3 className="font-headline font-bold text-sm mb-1">M365 &amp; Phone</h3>
                </div>
              </Link>
              <Link href="/managed-it-support">
                <div className="p-4 rounded-2xl bg-[#f3f4f5] hover:shadow-md transition-all cursor-pointer text-center">
                  <ServerCog className="w-6 h-6 text-accent mb-2 mx-auto" />
                  <h3 className="font-headline font-bold text-sm mb-1">Managed IT</h3>
                </div>
              </Link>
              <Link href="/network-wifi-security">
                <div className="p-4 rounded-2xl bg-[#f3f4f5] hover:shadow-md transition-all cursor-pointer text-center">
                  <Wifi className="w-6 h-6 text-accent mb-2 mx-auto" />
                  <h3 className="font-headline font-bold text-sm mb-1">Network</h3>
                </div>
              </Link>
              <Link href="/cybersecurity">
                <div className="p-4 rounded-2xl bg-[#f3f4f5] hover:shadow-md transition-all cursor-pointer text-center">
                  <Shield className="w-6 h-6 text-accent mb-2 mx-auto" />
                  <h3 className="font-headline font-bold text-sm mb-1">Compliance</h3>
                </div>
              </Link>
              <Link href="/ai-readiness">
                <div className="p-4 rounded-2xl bg-[#f3f4f5] hover:shadow-md transition-all cursor-pointer text-center">
                  <BrainCircuit className="w-6 h-6 text-accent mb-2 mx-auto" />
                  <h3 className="font-headline font-bold text-sm mb-1">AI &amp; Copilot</h3>
                </div>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <SpotlightCTA
        eyebrow="Ready to Get Started?"
        heading="Ready to Be the Next Success Story?"
        subtext="Every project on this page started with a free consultation. No pressure, no jargon &mdash; just an honest conversation about what I can do for your business."
        primaryText="Book a Free Consultation"
        primaryHref="/contact#send-message"
        secondaryText="See Full Pricing"
        secondaryHref="/pricing"
      />
    </div>
  );
}
