import { Briefcase, Monitor, MapPin, Users, BadgeEuro, TrendingDown } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const STATS = [
  { target: 15, suffix: "+", label: "Years Enterprise IT", icon: Briefcase },
  { target: 10, suffix: "+", label: "Websites Launched", icon: Monitor },
  { target: 32, suffix: "", label: "Counties Served", icon: MapPin },
  { target: 100, suffix: "%", label: "Small Business Focus", icon: Users },
  { target: 50, suffix: "%", label: "Up to 50% Grant Funding", icon: BadgeEuro },
  { target: 40, suffix: "%", label: "Up to 40% Less Than City Agency Rates", icon: TrendingDown },
];

export function StatsStrip() {
  return (
    <section className="py-14 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {STATS.map((stat, i) => (
            <StaggerItem key={i} className="flex flex-col items-center">
              <stat.icon className="text-accent mb-2" size={28} aria-hidden="true" />
              <span className="display-counter text-primary" data-testid={`stat-counter-${i}`}>
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </span>
              <span className="eyebrow mt-2">{stat.label}</span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
