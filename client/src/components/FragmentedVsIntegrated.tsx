import { CheckCircle2, XCircle } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const DEFAULT_LEFT_TITLE = "With Five Vendors";
const DEFAULT_RIGHT_TITLE = "With Crettyard Digital";

const DEFAULT_LEFT: string[] = [
  "Chasing four invoices",
  "No one accountable when something breaks",
  "Every problem starts with “let me explain my setup again”",
  "No one watching for compliance gaps",
  "No one looking at the whole picture",
];

const DEFAULT_RIGHT: string[] = [
  "One person to contact. One invoice.",
  "One person who already knows your setup",
  "Compliance handled in the background",
  "One strategy across website, email, IT, security, and AI",
  "Same person to contact in 2030",
];

type Props = {
  eyebrow?: string;
  heading?: string;
  intro?: string;
  leftTitle?: string;
  rightTitle?: string;
  left?: string[];
  right?: string[];
};

export function FragmentedVsIntegrated({
  eyebrow,
  heading,
  intro,
  leftTitle = DEFAULT_LEFT_TITLE,
  rightTitle = DEFAULT_RIGHT_TITLE,
  left = DEFAULT_LEFT,
  right = DEFAULT_RIGHT,
}: Props) {
  return (
    <FadeIn>
      {(eyebrow || heading || intro) && (
        <div className="text-center mb-12">
          {eyebrow && <span className="eyebrow mb-5 inline-block">{eyebrow}</span>}
          {heading && <h2 className="text-3xl md:text-4xl mb-4">{heading}</h2>}
          {intro && <p className="text-foreground max-w-2xl mx-auto font-sans font-normal">{intro}</p>}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8" data-testid="block-fragmented-vs-integrated">
        <div className="rounded-2xl p-8 bg-red-50/60 h-full" data-testid="col-fragmented">
          <h3 className="text-xl mb-6 text-red-800 flex items-center gap-2">
            <XCircle size={22} className="text-red-500" />
            {leftTitle}
          </h3>
          <ul className="space-y-4 list-none m-0 p-0">
            {left.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground text-[15px] font-sans">
                <XCircle className="text-red-400 shrink-0 mt-0.5" size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl p-8 bg-green-50/60 h-full" data-testid="col-integrated">
          <h3 className="text-xl mb-6 text-green-800 flex items-center gap-2">
            <CheckCircle2 size={22} className="text-green-600" />
            {rightTitle}
          </h3>
          <ul className="space-y-4 list-none m-0 p-0">
            {right.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground text-[15px] font-sans">
                <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </FadeIn>
  );
}
