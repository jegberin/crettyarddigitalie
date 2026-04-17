import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";
import iconNetworkDesign from "@assets/concept-network-design.webp";
import iconWifiMesh from "@assets/concept-wifi-mesh.webp";
import iconEndpointSecurity from "@assets/concept-endpoint-security.webp";
import iconProactiveMonitoring from "@assets/concept-proactive-monitoring.webp";

export default function NetworkLaoisCarlow() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-primary overflow-hidden py-20 md:py-28">
        <GridLines cols={12} rows={8} color="#ffffff" opacity={0.05} />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <FadeIn direction="up">
            <span className="eyebrow mb-4 inline-block">Network &amp; Wi-Fi &mdash; Laois &amp; Carlow</span>
            <h1 className="display-sm text-white mb-6">
              Business Network &amp; Wi-Fi Solutions in Laois and Carlow
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8">
              Dropped connections, dead spots, and unreliable Wi-Fi cost your Laois or Carlow business time and money every day. Based on the Laois&ndash;Carlow border, I design, install, and maintain business-grade networks for offices, workshops, warehouses, and retail spaces across both counties. On-site visits, not remote guesswork.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact#send-message">
                <Button size="lg">Book a Free Network Review</Button>
              </Link>
              <Link href="/network-wifi-security">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Full Network Details &rarr;
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Common Problems</span>
            <h2 className="text-3xl">Network Problems I Fix for Laois &amp; Carlow Businesses</h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-14">
            {[
              "Wi-Fi dead spots in the office",
              "Workshop coverage issues",
              "Dropped video calls",
              "Card machines disconnecting",
              "Warehouse Wi-Fi patchy or absent",
              "No proper firewall or security",
              "Staff devices can't connect reliably",
              "Guest Wi-Fi not separated",
              "Slow internet despite decent broadband",
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#f3f4f5] px-4 py-3 rounded-xl text-center font-headline font-bold text-primary text-sm">
                  {item}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 mb-14">
            {[
              { img: iconNetworkDesign, alt: "Glass router connected to three glass nodes representing network design and installation", title: "Network Design & Installation", desc: "I survey your premises, design the network, run cabling where needed, and install business-grade switches and access points. Full coverage, no dead spots." },
              { img: iconWifiMesh, alt: "Glass Wi-Fi access point with three concentric signal arcs representing mesh Wi-Fi optimisation", title: "Wi-Fi Optimisation", desc: "Mesh Wi-Fi and access point placement for offices, multi-story buildings, warehouses, and tricky workshop layouts. Seamless roaming between zones." },
              { img: iconEndpointSecurity, alt: "Glass laptop with a padlock representing business-grade firewall security", title: "Security & Firewalls", desc: "Business-grade firewalls, guest network isolation, intrusion detection, and CRA-compliant hardware. Your data protected, your customers' data safe." },
              { img: iconProactiveMonitoring, alt: "Glass ECG heartbeat over a glass eye representing network health checks and monitoring", title: "Health Checks & Remote Access", desc: "Network health audits, VPN for secure remote access, and performance troubleshooting. Ongoing monitoring and support available." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover">
                  <img
                    src={item.img}
                    alt={item.alt}
                    width={1000}
                    height={1000}
                    className="w-20 h-20 mb-4"
                    loading="lazy"
                  />
                  <h3 className="text-lg mb-2">{item.title}</h3>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="mb-14">
            <div className="bg-[#f3f4f5] p-7 rounded-2xl">
              <div className="flex items-start gap-4">
                <Quote className="text-accent shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-foreground text-[15px] font-sans italic mb-3">
                    "Joey sorted our Wi-Fi so it works in every room. The lads even get compliments from clients about the website now. Can't recommend him enough."
                  </p>
                  <p className="text-sm font-headline font-bold text-primary">Brian, Nurney Plant and Civil &mdash; Co. Carlow</p>
                  <p className="text-xs text-muted-foreground mb-3">Patchy Wi-Fi &rarr; full business-grade coverage across entire premises</p>
                  <Link href="/portfolio#project-nurney-plant-civil" className="text-accent font-headline font-bold inline-flex items-center text-sm hover:text-primary transition-colors">
                    View full case study <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="text-center mb-14">
            <h3 className="text-xl mb-4">Network Pricing</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-6">
              <div className="bg-[#f3f4f5] p-4 rounded-xl text-center">
                <p className="font-headline font-bold text-accent text-lg">&euro;150</p>
                <p className="text-xs text-muted-foreground">Wi-Fi health check</p>
              </div>
              <div className="bg-[#f3f4f5] p-4 rounded-xl text-center">
                <p className="font-headline font-bold text-accent text-lg">&euro;400</p>
                <p className="text-xs text-muted-foreground">Small office setup</p>
              </div>
              <div className="bg-accent/10 p-4 rounded-xl text-center border border-accent/20">
                <p className="font-headline font-bold text-accent text-lg">&euro;800</p>
                <p className="text-xs text-muted-foreground">Full design &amp; install</p>
              </div>
              <div className="bg-[#f3f4f5] p-4 rounded-xl text-center">
                <p className="font-headline font-bold text-accent text-lg">&euro;300</p>
                <p className="text-xs text-muted-foreground">Firewall &amp; security</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-sans mb-4">All prices are starting points. Clear, fixed quote after a free on-site survey.</p>
            <Link href="/network-wifi-security" className="text-accent font-headline font-bold inline-flex items-center text-sm hover:text-primary transition-colors">
              See full network details <ArrowRight size={14} className="ml-1" />
            </Link>
          </FadeIn>

          <FadeIn>
            <div className="bg-primary p-7 rounded-2xl text-white text-center">
              <h3 className="text-lg text-white mb-3">Areas Covered</h3>
              <p className="text-white/80 text-sm font-sans mb-4">On-site network installations across both counties:</p>
              <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto text-left">
                <div>
                  <p className="font-headline font-bold text-white text-sm mb-1">County Laois</p>
                  <p className="text-white/70 text-xs font-sans">Portlaoise, Portarlington, Abbeyleix, Mountmellick, Mountrath, Stradbally, Durrow</p>
                </div>
                <div>
                  <p className="font-headline font-bold text-white text-sm mb-1">County Carlow</p>
                  <p className="text-white/70 text-xs font-sans">Carlow town, Tullow, Muinebheag, Borris, Leighlinbridge, Ballon</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Related services */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-10">
            <span className="eyebrow mb-3 inline-block">Related Services</span>
            <h2 className="text-2xl">More Ways I Help Laois & Carlow Businesses</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/network-wifi-security", title: "Full Network Details", desc: "The complete Business Network & Wi-Fi service page with pricing guidance and FAQ." },
              { href: "/managed-it-support", title: "Managed IT Support", desc: "Pair your network with fixed-fee proactive IT management, Microsoft 365 admin and compliance." },
              { href: "/managed-hardware", title: "Managed Hardware", desc: "Business PCs and on-site servers that plug straight into your new Laois or Carlow network." },
              { href: "/cybersecurity", title: "Cybersecurity & Compliance", desc: "NIS2 supply-chain documentation, GDPR, and phishing protection beyond the network layer." },
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
        eyebrow="Ready to Fix Your Network?"
        heading="Get Reliable Wi-Fi and Networking for Your Laois or Carlow Business"
        subtext="Book a free on-site network review. I'll assess your premises, identify the problems, and give you a clear plan with a fixed price."
        primaryText="Book a Free Network Review"
        primaryHref="/contact#send-message"
        secondaryText="See All Services"
        secondaryHref="/pricing"
      />
    </div>
  );
}
