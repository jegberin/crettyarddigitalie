import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { GridLines } from "@/components/GridLines";
import { ArrowRight, Home, Mail, FileText, Briefcase, Tag, HelpCircle } from "lucide-react";

const quickLinks = [
  {
    href: "/",
    icon: Home,
    title: "Home",
    desc: "Start over from the homepage.",
  },
  {
    href: "/pricing",
    icon: Tag,
    title: "Bundles & Pricing",
    desc: "Digital Foundation Bundles and individual service pricing.",
  },
  {
    href: "/portfolio",
    icon: Briefcase,
    title: "Portfolio",
    desc: "Real client work \u2014 BM Custom Furniture, Nurney Plant and Civil, and more.",
  },
  {
    href: "/how-it-works",
    icon: HelpCircle,
    title: "How It Works",
    desc: "What actually happens when you work with me \u2014 from first call to month twelve.",
  },
  {
    href: "/get-a-quote",
    icon: FileText,
    title: "Get a Quote",
    desc: "The 6-step quote calculator \u2014 ballpark estimate instantly.",
  },
  {
    href: "/contact#send-message",
    icon: Mail,
    title: "Contact",
    desc: "Email, phone, or WhatsApp \u2014 same-day response before 3pm.",
  },
];

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-20 md:py-28">
        <GridLines cols={12} rows={8} color="#ffffff" opacity={0.05} />
        <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
          <FadeIn direction="up">
            <span className="eyebrow mb-4 inline-block">404 &mdash; Page Not Found</span>
            <h1 className="display-sm text-white mb-6">
              We Can&rsquo;t Find That Page
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
              The page you&rsquo;re looking for may have moved, been renamed, or never existed. Here are a few places you might have been trying to reach.
            </p>
            <Link href="/">
              <Button size="lg">Back to Home</Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-10">
            <span className="eyebrow mb-3 inline-block">Popular Destinations</span>
            <h2 className="text-2xl">Try One of These Instead</h2>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((item) => (
              <StaggerItem key={item.href}>
                <Link href={item.href}>
                  <div className="bg-[#f3f4f5] p-6 rounded-2xl card-hover cursor-pointer h-full" data-testid={`link-404-${item.href}`}>
                    <item.icon className="text-accent mb-3" size={22} />
                    <h3 className="text-base mb-2">{item.title}</h3>
                    <p className="text-foreground text-sm font-sans mb-3">{item.desc}</p>
                    <span className="text-accent text-sm font-headline font-bold inline-flex items-center">
                      Go <ArrowRight size={14} className="ml-1" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="text-center mt-10">
            <p className="text-sm text-foreground/80 font-sans">
              Still can&rsquo;t find what you&rsquo;re after?{" "}
              <Link href="/contact#send-message" className="text-accent hover:underline font-headline font-bold">
                Send me a message
              </Link>{" "}
              and I&rsquo;ll point you in the right direction.
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
