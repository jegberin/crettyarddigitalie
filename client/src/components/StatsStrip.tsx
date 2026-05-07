import { Briefcase, Award, User, MapPin, ShieldCheck, CheckCircle2, type LucideIcon } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";

type Stat = {
  target: number;
  suffix?: string;
  label: string; // eyebrow under the number
  sub: string;   // qualifier line below the eyebrow
  icon: LucideIcon;
};

const STATS: Stat[] = [
  { target: 15,  suffix: "+", label: "Years Enterprise IT",     sub: "Microsoft · Intel · Dell",                icon: Briefcase },
  { target: 26,               label: "Industry Certifications", sub: "Microsoft · Cloud · Security",            icon: Award },
  { target: 1,                label: "Accountable Person",      sub: "From first call to month 60",             icon: User },
  { target: 32,               label: "Counties Served",         sub: "Remote-first, on-site where it counts",   icon: MapPin },
  { target: 4,                label: "Compliance Frameworks",   sub: "NIS2 · GDPR · DORA · EAA",                icon: ShieldCheck },
  { target: 100, suffix: "%", label: "Care Plans Included",     sub: "Every build · Built to stay",             icon: CheckCircle2 },
];

export function StatsStrip() {
  return (
    <section className="py-14 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10 text-center">
          {STATS.map((stat, i) => (
            <StaggerItem key={i} className="flex flex-col items-center px-1">
              <stat.icon className="text-accent mb-2" size={28} aria-hidden="true" />
              <span className="display-counter text-primary" data-testid={`stat-counter-${i}`}>
                <AnimatedCounter target={stat.target} suffix={stat.suffix ?? ""} />
              </span>
              <span className="eyebrow mt-2">{stat.label}</span>
              <span className="text-[11px] text-foreground font-sans mt-1 leading-tight max-w-[160px]">{stat.sub}</span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
