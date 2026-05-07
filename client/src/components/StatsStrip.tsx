import { Briefcase, Award, User, MapPin, ShieldCheck, CheckCircle2, type LucideIcon } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";

type CounterStat = {
  type: "counter";
  target: number;
  suffix?: string;
  label: string; // eyebrow under the number
  sub: string;   // qualifier line
  icon: LucideIcon;
};

type StaticStat = {
  type: "static";
  text: string;  // single statement, modest font
  sub: string;   // qualifier line
  icon: LucideIcon;
};

type Stat = CounterStat | StaticStat;

const STATS: Stat[] = [
  { type: "counter", target: 15, suffix: "+", label: "Years Enterprise IT", sub: "Microsoft · Intel · Dell", icon: Briefcase },
  { type: "counter", target: 26,              label: "Industry Certifications", sub: "Microsoft · Cloud · Security", icon: Award },
  { type: "static",  text: "One Accountable Person", sub: "From first call to month 60", icon: User },
  { type: "counter", target: 32,              label: "Counties Served", sub: "Remote-first, on-site where it counts", icon: MapPin },
  { type: "static",  text: "NIS2 · GDPR · DORA · EAA Ready", sub: "Compliance baked in", icon: ShieldCheck },
  { type: "static",  text: "Care Plans on Every Build", sub: "Built to stay", icon: CheckCircle2 },
];

export function StatsStrip() {
  return (
    <section className="py-14 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10 text-center">
          {STATS.map((stat, i) => (
            <StaggerItem key={i} className="flex flex-col items-center px-1">
              <stat.icon className="text-accent mb-2" size={28} aria-hidden="true" />
              {stat.type === "counter" ? (
                <>
                  <span className="display-counter text-primary" data-testid={`stat-counter-${i}`}>
                    <AnimatedCounter target={stat.target} suffix={stat.suffix ?? ""} />
                  </span>
                  <span className="eyebrow mt-2">{stat.label}</span>
                  <span className="text-[11px] text-foreground font-sans mt-1 leading-tight">{stat.sub}</span>
                </>
              ) : (
                <>
                  <span
                    className="font-headline font-bold text-primary text-sm md:text-base mt-3 leading-snug max-w-[140px] break-words"
                    data-testid={`stat-static-${i}`}
                  >
                    {stat.text}
                  </span>
                  <span className="text-[11px] text-foreground font-sans mt-2 leading-tight max-w-[140px]">{stat.sub}</span>
                </>
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
