import { Briefcase, Award, Building2, Anchor } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const ITEMS: { icon: React.ComponentType<{ size?: number; className?: string }>; label: string; sub: string }[] = [
  { icon: Briefcase, label: "15+ Years",        sub: "Enterprise IT" },
  { icon: Award,     label: "26 Certifications", sub: "Microsoft · Cloud · Security" },
  { icon: Building2, label: "Microsoft · Intel · Dell", sub: "Career Roots" },
  { icon: Anchor,    label: "Built to Stay",    sub: "Long-Term Partner" },
];

export function CredentialBand() {
  return (
    <section
      aria-label="Crettyard Digital credentials"
      className="bg-white border-b border-gray-100 py-6"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <FadeIn>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 list-none m-0 p-0">
            {ITEMS.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-3"
                data-testid={`credential-band-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              >
                <item.icon size={20} className="text-accent shrink-0" />
                <div className="leading-tight">
                  <p className="font-headline font-bold text-primary text-[13px]">{item.label}</p>
                  <p className="text-foreground text-[11px] font-sans">{item.sub}</p>
                </div>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
