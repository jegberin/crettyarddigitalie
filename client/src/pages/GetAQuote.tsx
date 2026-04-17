import { useState, useMemo, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Loader2,
  Globe,
  Mail,
  Phone,
  Headphones,
  Wifi,
  Shield,
  Monitor,
  Sparkles,
  Gift,
  MessageCircle,
  Building2,
  Briefcase,
  Store,
  Truck,
  ShieldCheck,
  Hammer,
  Info,
  Euro,
  Clock,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* =====================================================================
   TYPES
===================================================================== */

type BusinessType =
  | "tradesperson"
  | "professional"
  | "retail"
  | "regulated-financial"
  | "manufacturing"
  | "other";

type ServiceKey =
  | "website"
  | "m365"
  | "phone"
  | "managed-it"
  | "network"
  | "cybersecurity"
  | "hardware"
  | "ai"
  | "grants"
  | "not-sure";

type ContactMethod = "email" | "phone" | "whatsapp";

type Timing = "asap" | "this-quarter" | "next-quarter" | "exploring";

type SubAnswers = {
  // Website
  websitePages?: string;
  websiteEcommerce?: string;
  websiteType?: string;
  // M365
  m365Users?: string;
  // Teams Phone
  phoneUsers?: string;
  // Managed IT
  itTeamSize?: string;
  // Network
  networkScope?: string;
  // Cybersecurity
  cybRegulated?: string;
  // Hardware
  hwDevices?: string;
  hwServer?: string;
  // AI
  aiUsers?: string;
  // Grants
  grantsLEO?: string;
};

type QuoteState = {
  step: number;
  businessType: BusinessType | "";
  services: ServiceKey[];
  subAnswers: SubAnswers;
  timing: Timing | "";
  contact: {
    name: string;
    businessName: string;
    email: string;
    phone: string;
    contactMethod: ContactMethod;
    notes: string;
  };
};

type BallparkLine = {
  label: string;
  note?: string;
  oneOffLow?: number;
  oneOffHigh?: number;
  monthlyLow?: number;
  monthlyHigh?: number;
  grantEligible: "yes" | "no" | "partial" | "n/a";
  thirdParty?: boolean; // indicates billed by Microsoft etc., not Crettyard
};

type Ballpark = {
  lines: BallparkLine[];
  oneOffLow: number;
  oneOffHigh: number;
  monthlyLow: number;
  monthlyHigh: number;
  hasTalkOnly: boolean;
};

/* =====================================================================
   CONSTANTS
===================================================================== */

const BUSINESS_TYPES: {
  key: BusinessType;
  title: string;
  subtitle?: string;
  Icon: typeof Hammer;
}[] = [
  {
    key: "tradesperson",
    title: "Tradesperson / Contractor",
    subtitle: "Plumbers, electricians, builders, landscapers",
    Icon: Hammer,
  },
  {
    key: "professional",
    title: "Professional Services",
    subtitle: "Accountant, solicitor, consultant, agency",
    Icon: Briefcase,
  },
  {
    key: "retail",
    title: "Retail / Hospitality",
    subtitle: "Shop, café, restaurant, salon",
    Icon: Store,
  },
  {
    key: "regulated-financial",
    title: "Regulated Financial",
    subtitle: "Credit union, insurance broker, investment firm",
    Icon: ShieldCheck,
  },
  {
    key: "manufacturing",
    title: "Manufacturing / Warehouse / Logistics",
    subtitle: "Production, distribution, haulage",
    Icon: Truck,
  },
  {
    key: "other",
    title: "Other Small Business",
    subtitle: "Charity, community group, anything else",
    Icon: Building2,
  },
];

const SERVICES: {
  key: ServiceKey;
  title: string;
  subtitle: string;
  Icon: typeof Globe;
}[] = [
  {
    key: "website",
    title: "A new or refreshed website",
    subtitle: "New build, redesign or rebuild",
    Icon: Globe,
  },
  {
    key: "m365",
    title: "Email & cloud tools (Microsoft 365)",
    subtitle: "Business email, Teams, OneDrive, SharePoint",
    Icon: Mail,
  },
  {
    key: "phone",
    title: "Business phone system (Teams Phone)",
    subtitle: "Ditch the desk phones, route to mobile",
    Icon: Phone,
  },
  {
    key: "managed-it",
    title: "Ongoing IT support",
    subtitle: "A proper IT partner without the big-firm overhead",
    Icon: Headphones,
  },
  {
    key: "network",
    title: "Network / Wi-Fi install or upgrade",
    subtitle: "Full-coverage Wi-Fi, wired drops, business-grade kit",
    Icon: Wifi,
  },
  {
    key: "cybersecurity",
    title: "Cybersecurity & compliance help",
    subtitle: "Audits, NIS2 supply-chain, DORA (where applicable)",
    Icon: Shield,
  },
  {
    key: "hardware",
    title: "New PCs / laptops / servers",
    subtitle: "Supply, setup, delivery — I handle everything",
    Icon: Monitor,
  },
  {
    key: "ai",
    title: "AI & Copilot rollout",
    subtitle: "Microsoft Copilot setup, policies, staff training",
    Icon: Sparkles,
  },
  {
    key: "grants",
    title: "Government grant guidance",
    subtitle: "Grow Digital Voucher, LEO schemes — honest help",
    Icon: Gift,
  },
  {
    key: "not-sure",
    title: "Not sure yet — let's just talk",
    subtitle: "No form-filling needed, I'll figure it out with you",
    Icon: MessageCircle,
  },
];

const TIMING_OPTIONS: { key: Timing; title: string; subtitle: string }[] = [
  { key: "asap", title: "ASAP", subtitle: "Within the next 2 weeks" },
  {
    key: "this-quarter",
    title: "This quarter",
    subtitle: "Next 1–3 months",
  },
  {
    key: "next-quarter",
    title: "Next quarter",
    subtitle: "3–6 months from now",
  },
  {
    key: "exploring",
    title: "Just exploring",
    subtitle: "Gathering info for later",
  },
];

const BUSINESS_TYPE_LABEL: Record<BusinessType, string> = {
  tradesperson: "Tradesperson / Contractor",
  professional: "Professional Services",
  retail: "Retail / Hospitality",
  "regulated-financial": "Regulated Financial",
  manufacturing: "Manufacturing / Warehouse / Logistics",
  other: "Other Small Business",
};

const TIMING_LABEL: Record<Timing, string> = {
  asap: "ASAP (within 2 weeks)",
  "this-quarter": "This quarter (1–3 months)",
  "next-quarter": "Next quarter (3–6 months)",
  exploring: "Just exploring",
};

const CONTACT_METHOD_LABEL: Record<ContactMethod, string> = {
  email: "Email",
  phone: "Phone call",
  whatsapp: "WhatsApp",
};

const SERVICE_LABEL: Record<ServiceKey, string> = SERVICES.reduce(
  (acc, s) => ({ ...acc, [s.key]: s.title }),
  {} as Record<ServiceKey, string>
);

/* =====================================================================
   BALLPARK CALCULATION
===================================================================== */

function calculateBallpark(state: QuoteState): Ballpark {
  const lines: BallparkLine[] = [];
  const { services, subAnswers } = state;
  const hasTalkOnly = services.length === 1 && services[0] === "not-sure";

  // ---------- WEBSITE ----------
  if (services.includes("website")) {
    const pages = subAnswers.websitePages;
    const ecom = subAnswers.websiteEcommerce;
    let low = 799;
    let high = 1299;
    let note = "Web Starter (1–5 pages, brochure)";
    if (pages === "6-10" || pages === "11+" || ecom === "yes") {
      low = 1299;
      high = 1299;
      note = "Web Business (6+ pages or e-commerce)";
    } else if (pages === "not-sure" || pages === undefined || ecom === "not-sure") {
      note = "Range spans Web Starter to Web Business";
    } else {
      high = 799;
      note = "Web Starter (1–5 pages, brochure)";
    }
    lines.push({
      label: "Website design & build",
      note,
      oneOffLow: low,
      oneOffHigh: high,
      grantEligible: "no",
    });
    // Mandatory care plan
    lines.push({
      label: "Website Care Plan (mandatory)",
      note: "Hosting, updates, backups, security monitoring — Standard tier",
      monthlyLow: 49,
      monthlyHigh: 79,
      grantEligible: "no",
    });
  }

  // ---------- MICROSOFT 365 ----------
  if (services.includes("m365")) {
    const users = subAnswers.m365Users;
    let setupLow = 350;
    let setupHigh = 350;
    let licenceLow = 0;
    let licenceHigh = 0;
    let userCount = "1–3 users";
    if (users === "4-10") {
      setupLow = 350;
      setupHigh = 500;
      licenceLow = 4 * 6;
      licenceHigh = 10 * 22;
      userCount = "4–10 users";
    } else if (users === "11-25") {
      setupLow = 500;
      setupHigh = 900;
      licenceLow = 11 * 6;
      licenceHigh = 25 * 22;
      userCount = "11–25 users";
    } else if (users === "25+") {
      setupLow = 900;
      setupHigh = 1500;
      licenceLow = 25 * 6;
      licenceHigh = 40 * 22;
      userCount = "25+ users";
    } else if (users === "not-sure" || users === undefined) {
      setupLow = 350;
      setupHigh = 900;
      licenceLow = 1 * 6;
      licenceHigh = 10 * 22;
      userCount = "exact size TBC";
    } else {
      licenceLow = 1 * 6;
      licenceHigh = 3 * 22;
    }
    lines.push({
      label: "Microsoft 365 setup & migration",
      note: `${userCount} — one-off setup by Crettyard Digital`,
      oneOffLow: setupLow,
      oneOffHigh: setupHigh,
      grantEligible: "no",
    });
    lines.push({
      label: "Microsoft 365 licences",
      note: "Billed directly by Microsoft — from €6/user/mo (Basic) to €22/user/mo (Standard)",
      monthlyLow: licenceLow,
      monthlyHigh: licenceHigh,
      grantEligible: "yes",
      thirdParty: true,
    });
  }

  // ---------- TEAMS PHONE ----------
  if (services.includes("phone")) {
    const users = subAnswers.phoneUsers;
    let seats = { low: 1, high: 3 };
    let userCount = "1–3 users";
    if (users === "4-10") {
      seats = { low: 4, high: 10 };
      userCount = "4–10 users";
    } else if (users === "11-25") {
      seats = { low: 11, high: 25 };
      userCount = "11–25 users";
    } else if (users === "25+") {
      seats = { low: 25, high: 40 };
      userCount = "25+ users";
    } else if (users === "not-sure" || users === undefined) {
      seats = { low: 1, high: 10 };
      userCount = "exact size TBC";
    }
    lines.push({
      label: "Teams Phone setup",
      note: `${userCount} — porting, call flows, routing`,
      oneOffLow: 150,
      oneOffHigh: 350,
      grantEligible: "no",
    });
    lines.push({
      label: "Teams Phone licences",
      note: "Billed directly by Microsoft — from €7.50/user/mo",
      monthlyLow: seats.low * 7.5,
      monthlyHigh: seats.high * 7.5,
      grantEligible: "yes",
      thirdParty: true,
    });
  }

  // ---------- MANAGED IT ----------
  if (services.includes("managed-it")) {
    const size = subAnswers.itTeamSize;
    let seats = { low: 1, high: 5 };
    let userCount = "1–5 users";
    if (size === "6-15") {
      seats = { low: 6, high: 15 };
      userCount = "6–15 users";
    } else if (size === "16-30") {
      seats = { low: 16, high: 30 };
      userCount = "16–30 users";
    } else if (size === "30+") {
      seats = { low: 30, high: 50 };
      userCount = "30+ users";
    } else if (size === "not-sure" || size === undefined) {
      seats = { low: 1, high: 15 };
      userCount = "exact size TBC";
    }
    lines.push({
      label: "Managed IT — Professional tier",
      note: `${userCount} · €75/user/mo standard (€45–€110 range across tiers)`,
      monthlyLow: seats.low * 75,
      monthlyHigh: seats.high * 75,
      grantEligible: "no",
    });
  }

  // ---------- NETWORK / WI-FI ----------
  if (services.includes("network")) {
    const scope = subAnswers.networkScope;
    let low = 500;
    let high = 1500;
    let note = "Single-location audit & basic setup";
    if (scope === "multi-room") {
      low = 1500;
      high = 3500;
      note = "Multi-room coverage, business-grade access points";
    } else if (scope === "whole-building") {
      low = 3500;
      high = 8000;
      note = "Whole-building install, cabling, managed Wi-Fi";
    } else if (scope === "not-sure" || scope === undefined) {
      low = 500;
      high = 3500;
      note = "Full scope TBC after site visit";
    } else {
      note = "Single-location audit & basic setup";
    }
    lines.push({
      label: "Network & Wi-Fi install",
      note,
      oneOffLow: low,
      oneOffHigh: high,
      grantEligible: "no",
    });
  }

  // ---------- CYBERSECURITY ----------
  if (services.includes("cybersecurity")) {
    const regulated = subAnswers.cybRegulated;
    const isRegulated = regulated === "yes" || state.businessType === "regulated-financial";
    lines.push({
      label: isRegulated
        ? "DORA Readiness Assessment"
        : "Web & IT Compliance Audit",
      note: isRegulated
        ? "Regulated financial scope — governance, ICT risk, incident reporting"
        : "Privacy, cookies, data flows, NIS2 supply-chain readiness",
      oneOffLow: isRegulated ? 400 : 300,
      oneOffHigh: isRegulated ? 1500 : 900,
      grantEligible: "no",
    });
  }

  // ---------- HARDWARE ----------
  if (services.includes("hardware")) {
    const devices = subAnswers.hwDevices;
    const server = subAnswers.hwServer;
    let seats = { low: 1, high: 5 };
    let userCount = "1–5 devices";
    if (devices === "6-15") {
      seats = { low: 6, high: 15 };
      userCount = "6–15 devices";
    } else if (devices === "16+") {
      seats = { low: 16, high: 25 };
      userCount = "16+ devices";
    } else if (devices === "not-sure" || devices === undefined) {
      seats = { low: 1, high: 15 };
      userCount = "exact count TBC";
    }
    lines.push({
      label: "Business Desktops / Laptops (supplied & configured)",
      note: `${userCount} · Business from €899 · Business Plus from €1,199`,
      oneOffLow: seats.low * 899,
      oneOffHigh: seats.high * 1199,
      grantEligible: "no",
    });
    lines.push({
      label: "Hardware Care",
      note: `${userCount} · €19/device/mo monitoring, patching, warranty liaison`,
      monthlyLow: seats.low * 19,
      monthlyHigh: seats.high * 19,
      grantEligible: "no",
    });
    if (server === "yes" || server === "not-sure") {
      lines.push({
        label: "On-Site Server / NAS",
        note: "From €2,499 supplied · +€49/mo server Hardware Care",
        oneOffLow: 2499,
        oneOffHigh: server === "yes" ? 5000 : 5000,
        monthlyLow: 49,
        monthlyHigh: 49,
        grantEligible: "no",
      });
    }
  }

  // ---------- AI / COPILOT ----------
  if (services.includes("ai")) {
    const users = subAnswers.aiUsers;
    let seats = { low: 1, high: 5 };
    let userCount = "1–5 users";
    if (users === "6-15") {
      seats = { low: 6, high: 15 };
      userCount = "6–15 users";
    } else if (users === "16+") {
      seats = { low: 16, high: 25 };
      userCount = "16+ users";
    } else if (users === "not-sure" || users === undefined) {
      seats = { low: 1, high: 10 };
      userCount = "exact count TBC";
    }
    lines.push({
      label: "AI & Copilot rollout",
      note: "Policies, governance, staff training, data scoping",
      oneOffLow: 500,
      oneOffHigh: 2000,
      grantEligible: "no",
    });
    lines.push({
      label: "Microsoft 365 Copilot licences",
      note: `${userCount} · Billed directly by Microsoft — from €25/user/mo`,
      monthlyLow: seats.low * 25,
      monthlyHigh: seats.high * 30,
      grantEligible: "yes",
      thirdParty: true,
    });
  }

  // ---------- GRANT GUIDANCE ----------
  if (services.includes("grants")) {
    lines.push({
      label: "Grow Digital Voucher guidance",
      note: "Free consultative help — no line-item cost",
      grantEligible: "n/a",
    });
  }

  // Sum totals
  const oneOffLow = lines.reduce((sum, l) => sum + (l.oneOffLow ?? 0), 0);
  const oneOffHigh = lines.reduce((sum, l) => sum + (l.oneOffHigh ?? 0), 0);
  const monthlyLow = lines.reduce((sum, l) => sum + (l.monthlyLow ?? 0), 0);
  const monthlyHigh = lines.reduce((sum, l) => sum + (l.monthlyHigh ?? 0), 0);

  return {
    lines,
    oneOffLow: Math.round(oneOffLow),
    oneOffHigh: Math.round(oneOffHigh),
    monthlyLow: Math.round(monthlyLow),
    monthlyHigh: Math.round(monthlyHigh),
    hasTalkOnly,
  };
}

const fmt = (n: number) => `€${n.toLocaleString("en-IE")}`;

/* =====================================================================
   MAIN COMPONENT
===================================================================== */

const TOTAL_STEPS = 6;

export default function GetAQuote() {
  const [state, setState] = useState<QuoteState>({
    step: 1,
    businessType: "",
    services: [],
    subAnswers: {},
    timing: "",
    contact: {
      name: "",
      businessName: "",
      email: "",
      phone: "",
      contactMethod: "email",
      notes: "",
    },
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    businessName: false,
  });

  const ballpark = useMemo(() => calculateBallpark(state), [state]);

  // Business name becomes mandatory once the ballpark's high-end one-off
  // estimate crosses €1000 — bigger engagements need the legal entity name.
  const businessNameRequired =
    !ballpark.hasTalkOnly &&
    ballpark.lines.length > 0 &&
    ballpark.oneOffHigh > 1000;

  // Scroll to top on step change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [state.step]);

  const hasSubQuestionsForSelection = (services: ServiceKey[]): boolean => {
    return services.some(
      (s) =>
        s === "website" ||
        s === "m365" ||
        s === "phone" ||
        s === "managed-it" ||
        s === "network" ||
        s === "cybersecurity" ||
        s === "hardware" ||
        s === "ai" ||
        s === "grants"
    );
  };

  const canProceed = (): boolean => {
    if (state.step === 1) return Boolean(state.businessType);
    if (state.step === 2) return state.services.length > 0;
    if (state.step === 3) return true; // all sub-answers optional
    if (state.step === 4) return Boolean(state.timing);
    if (state.step === 5) {
      const { name, email, phone, businessName, contactMethod } = state.contact;
      const nameOk = name.trim().length >= 2;
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
      const phoneDigits = phone.replace(/\D/g, "");
      const phoneValid = phoneDigits.length >= 7;
      const businessNameOk =
        !businessNameRequired || businessName.trim().length >= 2;
      if (contactMethod === "phone" || contactMethod === "whatsapp") {
        return nameOk && phoneValid && businessNameOk;
      }
      return nameOk && emailValid && businessNameOk;
    }
    return true;
  };

  const goNext = () => {
    if (!canProceed()) return;
    // Skip Step 3 if only "not sure" selected
    if (state.step === 2 && !hasSubQuestionsForSelection(state.services)) {
      setState((s) => ({ ...s, step: 4 }));
      return;
    }
    setState((s) => ({ ...s, step: Math.min(TOTAL_STEPS, s.step + 1) }));
  };

  const goBack = () => {
    // Mirror the skip logic on back
    if (state.step === 4 && !hasSubQuestionsForSelection(state.services)) {
      setState((s) => ({ ...s, step: 2 }));
      return;
    }
    setState((s) => ({ ...s, step: Math.max(1, s.step - 1) }));
  };

  const handleSubmit = async () => {
    setTouched({ name: true, email: true, phone: true, businessName: true });
    if (!canProceed()) return;

    setSubmitting(true);
    setError(null);

    const payload = {
      businessType: state.businessType,
      businessTypeLabel:
        state.businessType === ""
          ? ""
          : BUSINESS_TYPE_LABEL[state.businessType as BusinessType],
      services: state.services,
      serviceLabels: state.services.map((s) => SERVICE_LABEL[s]),
      subAnswers: state.subAnswers,
      timing: state.timing,
      timingLabel:
        state.timing === "" ? "" : TIMING_LABEL[state.timing as Timing],
      contact: state.contact,
      contactMethodLabel: CONTACT_METHOD_LABEL[state.contact.contactMethod],
      ballpark,
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          data.error ||
            "Something went wrong. Please email info@crettyarddigital.ie directly."
        );
      }
      setSubmitted(true);
      setState((s) => ({ ...s, step: 6 }));
    } catch (err: any) {
      setError(
        err.message ||
          "Unable to send right now. Please email info@crettyarddigital.ie directly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[#f7f8fa]">
      {/* HERO */}
          <section className="bg-[#002157] text-white pt-24 pb-10 sm:pt-32 sm:pb-14">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <p className="text-[#1DB48F] text-xs sm:text-sm font-semibold uppercase tracking-[2px] mb-3">
                Get A Quote
              </p>
              <h1 className="display-sm text-white mb-4">
                Tell me what you need.
                <br />
                <span className="text-[#1DB48F]">I&rsquo;ll come back with real numbers.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
                Six quick steps. No credit card. No hard sell. You&rsquo;ll see a
                ballpark estimate the moment you submit, and I&rsquo;ll follow
                up within a business day with a proper fixed quote.
              </p>
            </div>
          </section>

          {/* PROGRESS BAR */}
          <section className="bg-white border-b border-gray-200 sticky top-16 z-30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="font-semibold text-[#002157]">
                  Step {Math.min(state.step, TOTAL_STEPS)} of {TOTAL_STEPS}
                </span>
                <span className="text-gray-500">
                  {state.step === 1 && "About your business"}
                  {state.step === 2 && "What you're looking for"}
                  {state.step === 3 && "A few details"}
                  {state.step === 4 && "Timing"}
                  {state.step === 5 && "Your contact details"}
                  {state.step === 6 && "Done!"}
                </span>
              </div>
              <div className="mt-3 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#1DB48F] rounded-full"
                  initial={false}
                  animate={{
                    width: `${(Math.min(state.step, TOTAL_STEPS) / TOTAL_STEPS) * 100}%`,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </div>
            </div>
          </section>

          {/* FUNNEL BODY */}
          <section className="py-10 sm:py-14">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <AnimatePresence mode="wait">
                {state.step === 1 && (
                  <Step1BusinessType
                    key="s1"
                    value={state.businessType}
                    onChange={(v) =>
                      setState((s) => ({ ...s, businessType: v }))
                    }
                  />
                )}
                {state.step === 2 && (
                  <Step2Services
                    key="s2"
                    value={state.services}
                    onChange={(v) => setState((s) => ({ ...s, services: v }))}
                  />
                )}
                {state.step === 3 && (
                  <Step3SubQuestions
                    key="s3"
                    services={state.services}
                    value={state.subAnswers}
                    onChange={(v) =>
                      setState((s) => ({ ...s, subAnswers: v }))
                    }
                  />
                )}
                {state.step === 4 && (
                  <Step4Timing
                    key="s4"
                    value={state.timing}
                    onChange={(v) => setState((s) => ({ ...s, timing: v }))}
                  />
                )}
                {state.step === 5 && (
                  <Step5Contact
                    key="s5"
                    value={state.contact}
                    touched={touched}
                    onTouch={(k) =>
                      setTouched((t) => ({ ...t, [k]: true }))
                    }
                    onChange={(v) =>
                      setState((s) => ({ ...s, contact: v }))
                    }
                    businessNameRequired={businessNameRequired}
                  />
                )}
                {state.step === 6 && (
                  <Step6Result
                    key="s6"
                    state={state}
                    ballpark={ballpark}
                    submitted={submitted}
                  />
                )}
              </AnimatePresence>

              {error && state.step === 5 && (
                <div className="mt-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              )}

              {/* NAV BUTTONS */}
              {state.step < 6 && (
                <div className="mt-10 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                  {state.step > 1 && (
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={goBack}
                      disabled={submitting}
                      className="sm:w-auto"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                  )}
                  <div className="sm:flex-1" />
                  {state.step < 5 && (
                    <Button
                      size="lg"
                      onClick={goNext}
                      disabled={!canProceed()}
                      className="bg-[#1DB48F] hover:bg-[#169C7C] text-white sm:w-auto"
                    >
                      Continue
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                  {state.step === 5 && (
                    <div className="flex flex-col items-end gap-2 w-full sm:w-auto">
                      <Button
                        size="lg"
                        onClick={handleSubmit}
                        disabled={!canProceed() || submitting}
                        className="bg-[#1DB48F] hover:bg-[#169C7C] text-white w-full sm:w-auto px-8 py-6 text-base font-semibold shadow-lg"
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Submitting&hellip;
                          </>
                        ) : (
                          <>
                            Submit &amp; See My Ballpark Estimate
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                      <p className="text-xs text-gray-500 text-right max-w-xs">
                        Your estimate appears instantly. I&rsquo;ll follow up
                        within a business day with a tailored quote.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>
    </div>
  );
}

/* =====================================================================
   STEP 1 — BUSINESS TYPE
===================================================================== */

function Step1BusinessType({
  value,
  onChange,
}: {
  value: BusinessType | "";
  onChange: (v: BusinessType) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#002157] mb-2">
        Who are you?
      </h2>
      <p className="text-gray-600 mb-8">
        Helps me tailor what I recommend to your sector.
      </p>

      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
        {BUSINESS_TYPES.map(({ key, title, subtitle, Icon }) => {
          const selected = value === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => onChange(key)}
              className={`text-left p-4 sm:p-5 rounded-xl border-2 transition-all ${
                selected
                  ? "bg-[#002157] border-[#002157] text-white shadow-lg"
                  : "bg-white border-gray-200 hover:border-[#1DB48F] hover:shadow-md"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    selected
                      ? "bg-[#1DB48F] text-white"
                      : "bg-[#E8F7F2] text-[#1DB48F]"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    className={`font-heading font-semibold text-base sm:text-lg leading-tight ${
                      selected ? "text-white" : "text-[#002157]"
                    }`}
                  >
                    {title}
                  </h3>
                  {subtitle && (
                    <p
                      className={`text-sm mt-1 ${
                        selected ? "text-white/75" : "text-gray-500"
                      }`}
                    >
                      {subtitle}
                    </p>
                  )}
                </div>
                {selected && (
                  <Check className="w-5 h-5 text-[#1DB48F] flex-shrink-0" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

/* =====================================================================
   STEP 2 — SERVICES (MULTI-SELECT)
===================================================================== */

function Step2Services({
  value,
  onChange,
}: {
  value: ServiceKey[];
  onChange: (v: ServiceKey[]) => void;
}) {
  const toggle = (key: ServiceKey) => {
    // If "not-sure" is picked, clear everything else
    if (key === "not-sure") {
      if (value.includes("not-sure")) {
        onChange([]);
      } else {
        onChange(["not-sure"]);
      }
      return;
    }
    // If any other option picked, remove "not-sure"
    const without = value.filter((v) => v !== "not-sure");
    if (without.includes(key)) {
      onChange(without.filter((v) => v !== key));
    } else {
      onChange([...without, key]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#002157] mb-2">
        What are you looking for?
      </h2>
      <p className="text-gray-600 mb-8">
        Pick everything that interests you &mdash; no commitment.
      </p>

      <div className="grid sm:grid-cols-2 gap-3">
        {SERVICES.map(({ key, title, subtitle, Icon }) => {
          const selected = value.includes(key);
          return (
            <button
              key={key}
              type="button"
              onClick={() => toggle(key)}
              className={`text-left p-4 sm:p-5 rounded-xl border-2 transition-all ${
                selected
                  ? "bg-[#E8F7F2] border-[#1DB48F] shadow-md"
                  : "bg-white border-gray-200 hover:border-[#1DB48F]/50"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    selected
                      ? "bg-[#1DB48F] text-white"
                      : "bg-[#E8F7F2] text-[#1DB48F]"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-semibold text-base text-[#002157] leading-tight">
                    {title}
                  </h3>
                  <p className="text-sm mt-1 text-gray-600">{subtitle}</p>
                </div>
                {selected && (
                  <div className="w-6 h-6 rounded-full bg-[#1DB48F] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {value.length > 0 && (
        <p className="mt-6 text-sm text-gray-600 flex items-center gap-2">
          <Check className="w-4 h-4 text-[#1DB48F]" />
          <span>
            {value.length} item{value.length === 1 ? "" : "s"} selected
          </span>
        </p>
      )}
    </motion.div>
  );
}

/* =====================================================================
   STEP 3 — CONDITIONAL SUB-QUESTIONS
===================================================================== */

function Step3SubQuestions({
  services,
  value,
  onChange,
}: {
  services: ServiceKey[];
  value: SubAnswers;
  onChange: (v: SubAnswers) => void;
}) {
  const set = (key: keyof SubAnswers, val: string) => {
    onChange({ ...value, [key]: val });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#002157] mb-2">
        A few quick details
      </h2>
      <p className="text-gray-600 mb-8">
        Only as much as you know &mdash; &ldquo;Not sure yet&rdquo; is always fine.
      </p>

      <div className="space-y-6">
        {services.includes("website") && (
          <Card title="Website" subtitle="Help me size the build">
            <PillGroup
              label="How many pages do you need?"
              value={value.websitePages}
              onChange={(v) => set("websitePages", v)}
              options={[
                { key: "1-5", label: "1–5 pages" },
                { key: "6-10", label: "6–10 pages" },
                { key: "11+", label: "11+ pages" },
                { key: "not-sure", label: "Not sure yet" },
              ]}
            />
            <PillGroup
              label="Do you need e-commerce / online shop?"
              value={value.websiteEcommerce}
              onChange={(v) => set("websiteEcommerce", v)}
              options={[
                { key: "yes", label: "Yes" },
                { key: "no", label: "No" },
                { key: "not-sure", label: "Not sure" },
              ]}
            />
            <PillGroup
              label="New site or redesign of existing?"
              value={value.websiteType}
              onChange={(v) => set("websiteType", v)}
              options={[
                { key: "new", label: "Brand new" },
                { key: "redesign", label: "Redesign" },
                { key: "not-sure", label: "Not sure" },
              ]}
            />
          </Card>
        )}

        {services.includes("m365") && (
          <Card title="Microsoft 365" subtitle="Helps me size the licences & setup">
            <PillGroup
              label="How many users / mailboxes?"
              value={value.m365Users}
              onChange={(v) => set("m365Users", v)}
              options={[
                { key: "1-3", label: "1–3" },
                { key: "4-10", label: "4–10" },
                { key: "11-25", label: "11–25" },
                { key: "25+", label: "25+" },
                { key: "not-sure", label: "Not sure yet" },
              ]}
            />
          </Card>
        )}

        {services.includes("phone") && (
          <Card title="Teams Phone" subtitle="For routing & porting">
            <PillGroup
              label="How many users on the phone system?"
              value={value.phoneUsers}
              onChange={(v) => set("phoneUsers", v)}
              options={[
                { key: "1-3", label: "1–3" },
                { key: "4-10", label: "4–10" },
                { key: "11-25", label: "11–25" },
                { key: "25+", label: "25+" },
                { key: "not-sure", label: "Not sure yet" },
              ]}
            />
          </Card>
        )}

        {services.includes("managed-it") && (
          <Card title="Managed IT" subtitle="Sizes the monthly service">
            <PillGroup
              label="Roughly how big is your team?"
              value={value.itTeamSize}
              onChange={(v) => set("itTeamSize", v)}
              options={[
                { key: "1-5", label: "1–5 people" },
                { key: "6-15", label: "6–15 people" },
                { key: "16-30", label: "16–30 people" },
                { key: "30+", label: "30+ people" },
                { key: "not-sure", label: "Not sure yet" },
              ]}
            />
          </Card>
        )}

        {services.includes("network") && (
          <Card title="Network / Wi-Fi" subtitle="Scale of the install">
            <PillGroup
              label="What kind of coverage do you need?"
              value={value.networkScope}
              onChange={(v) => set("networkScope", v)}
              options={[
                { key: "single-room", label: "Single room / office" },
                { key: "multi-room", label: "Multi-room site" },
                { key: "whole-building", label: "Whole building" },
                { key: "not-sure", label: "Not sure yet" },
              ]}
            />
          </Card>
        )}

        {services.includes("cybersecurity") && (
          <Card title="Cybersecurity & compliance" subtitle="Helps me pick the right audit scope">
            <PillGroup
              label="Are you in a regulated financial sector (credit union, insurance broker, investment firm)?"
              value={value.cybRegulated}
              onChange={(v) => set("cybRegulated", v)}
              options={[
                { key: "yes", label: "Yes" },
                { key: "no", label: "No" },
                { key: "not-sure", label: "Not sure" },
              ]}
            />
          </Card>
        )}

        {services.includes("hardware") && (
          <Card title="Hardware supply" subtitle="So I can quote the right quantities">
            <PillGroup
              label="Roughly how many devices (PCs / laptops)?"
              value={value.hwDevices}
              onChange={(v) => set("hwDevices", v)}
              options={[
                { key: "1-5", label: "1–5" },
                { key: "6-15", label: "6–15" },
                { key: "16+", label: "16+" },
                { key: "not-sure", label: "Not sure yet" },
              ]}
            />
            <PillGroup
              label="Do you need a server or NAS too?"
              value={value.hwServer}
              onChange={(v) => set("hwServer", v)}
              options={[
                { key: "yes", label: "Yes" },
                { key: "no", label: "No" },
                { key: "not-sure", label: "Not sure" },
              ]}
            />
          </Card>
        )}

        {services.includes("ai") && (
          <Card title="AI & Copilot" subtitle="Sizing the rollout">
            <PillGroup
              label="How many users would use Copilot?"
              value={value.aiUsers}
              onChange={(v) => set("aiUsers", v)}
              options={[
                { key: "1-5", label: "1–5" },
                { key: "6-15", label: "6–15" },
                { key: "16+", label: "16+" },
                { key: "not-sure", label: "Not sure yet" },
              ]}
            />
          </Card>
        )}

        {services.includes("grants") && (
          <Card title="Government grants" subtitle="Helps me meet you where you are">
            <PillGroup
              label="Have you spoken with your Local Enterprise Office yet?"
              value={value.grantsLEO}
              onChange={(v) => set("grantsLEO", v)}
              options={[
                { key: "yes", label: "Yes, done Digital for Business" },
                { key: "no", label: "Not yet" },
                { key: "what-is-leo", label: "What\u2019s a LEO?" },
              ]}
            />
          </Card>
        )}
      </div>
    </motion.div>
  );
}

function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="font-heading text-lg font-semibold text-[#002157]">
          {title}
        </h3>
        {subtitle && <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>}
      </div>
      <div className="space-y-5">{children}</div>
    </div>
  );
}

function PillGroup({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string | undefined;
  onChange: (v: string) => void;
  options: { key: string; label: string }[];
}) {
  return (
    <div>
      <p className="text-sm font-medium text-[#002157] mb-2">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const selected = value === opt.key;
          return (
            <button
              key={opt.key}
              type="button"
              onClick={() => onChange(opt.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all ${
                selected
                  ? "bg-[#1DB48F] text-white border-[#1DB48F]"
                  : "bg-white text-gray-700 border-gray-200 hover:border-[#1DB48F]"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* =====================================================================
   STEP 4 — TIMING
===================================================================== */

function Step4Timing({
  value,
  onChange,
}: {
  value: Timing | "";
  onChange: (v: Timing) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#002157] mb-2">
        When would you like to get started?
      </h2>
      <p className="text-gray-600 mb-8">
        No pressure &mdash; this just helps me plan my calendar.
      </p>

      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
        {TIMING_OPTIONS.map(({ key, title, subtitle }) => {
          const selected = value === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => onChange(key)}
              className={`text-left p-5 rounded-xl border-2 transition-all ${
                selected
                  ? "bg-[#002157] border-[#002157] text-white shadow-lg"
                  : "bg-white border-gray-200 hover:border-[#1DB48F] hover:shadow-md"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    selected
                      ? "bg-[#1DB48F] text-white"
                      : "bg-[#E8F7F2] text-[#1DB48F]"
                  }`}
                >
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3
                    className={`font-heading font-semibold text-lg ${
                      selected ? "text-white" : "text-[#002157]"
                    }`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`text-sm mt-1 ${
                      selected ? "text-white/75" : "text-gray-500"
                    }`}
                  >
                    {subtitle}
                  </p>
                </div>
                {selected && (
                  <Check className="w-5 h-5 text-[#1DB48F] flex-shrink-0" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

/* =====================================================================
   STEP 5 — CONTACT
===================================================================== */

function Step5Contact({
  value,
  touched,
  onTouch,
  onChange,
  businessNameRequired,
}: {
  value: QuoteState["contact"];
  touched: { name: boolean; email: boolean; phone: boolean; businessName: boolean };
  onTouch: (k: "name" | "email" | "phone" | "businessName") => void;
  onChange: (v: QuoteState["contact"]) => void;
  businessNameRequired: boolean;
}) {
  const set = <K extends keyof QuoteState["contact"]>(
    key: K,
    val: QuoteState["contact"][K]
  ) => {
    onChange({ ...value, [key]: val });
  };

  const phonePreferred =
    value.contactMethod === "phone" || value.contactMethod === "whatsapp";
  const emailRequired = !phonePreferred;
  const phoneRequired = phonePreferred;

  const nameError =
    touched.name && value.name.trim().length < 2
      ? "Please enter your name"
      : null;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.email.trim());
  const emailError =
    emailRequired && touched.email && !emailValid
      ? "Please enter a valid email"
      : null;
  const phoneDigits = value.phone.replace(/\D/g, "");
  const phoneValid = phoneDigits.length >= 7;
  const phoneError =
    phoneRequired && touched.phone && !phoneValid
      ? "Please enter a valid phone number"
      : null;
  const businessNameError =
    businessNameRequired &&
    touched.businessName &&
    value.businessName.trim().length < 2
      ? "Business name is required for projects over €1,000"
      : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#002157] mb-2">
        Let me know who I&rsquo;m talking to
      </h2>
      <p className="text-gray-600 mb-8">
        I&rsquo;ll email a proper fixed quote within a business day. Your
        ballpark estimate appears on the next screen.
      </p>

      {/* Reassurance banner */}
      <div className="mb-8 p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#E8F7F2] to-[#F3FAF7] border border-[#1DB48F]/30">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#1DB48F] flex items-center justify-center flex-shrink-0">
            <Euro className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-[#002157] mb-1">
              Almost there &mdash; one click to see your estimate
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              The moment you submit, I&rsquo;ll show you an itemised ballpark
              with ranges for everything you picked. It&rsquo;s not a binding
              quote &mdash; it&rsquo;s a realistic starting point so you know
              what to expect before we even chat.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-7 shadow-sm">
        <div className="grid sm:grid-cols-2 gap-5">
          <Field
            label="Your name"
            required
            error={nameError}
            value={value.name}
            onChange={(v) => set("name", v)}
            onBlur={() => onTouch("name")}
            placeholder="Sarah Kelly"
            autoComplete="name"
          />
          <Field
            label="Business name"
            required={businessNameRequired}
            error={businessNameError}
            value={value.businessName}
            onChange={(v) => set("businessName", v)}
            onBlur={() => onTouch("businessName")}
            placeholder="Kelly Plumbing Ltd"
            autoComplete="organization"
          />
        </div>

        <div className="mt-5">
          <p className="text-sm font-medium text-[#002157] mb-2">
            Preferred contact method
          </p>
          <div className="flex flex-wrap gap-2">
            {(["email", "phone", "whatsapp"] as ContactMethod[]).map((m) => {
              const selected = value.contactMethod === m;
              return (
                <button
                  key={m}
                  type="button"
                  onClick={() => set("contactMethod", m)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all ${
                    selected
                      ? "bg-[#1DB48F] text-white border-[#1DB48F]"
                      : "bg-white text-gray-700 border-gray-200 hover:border-[#1DB48F]"
                  }`}
                >
                  {CONTACT_METHOD_LABEL[m]}
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-xs text-gray-500">
            {phonePreferred
              ? value.contactMethod === "whatsapp"
                ? "I'll WhatsApp you — please give me a mobile number below."
                : "I'll give you a call — please give me a phone number below."
              : "I'll reply by email — please give me a valid email below."}
          </p>
        </div>

        <div className="mt-5 grid sm:grid-cols-2 gap-5">
          <Field
            label={emailRequired ? "Email" : "Email (optional)"}
            required={emailRequired}
            type="email"
            error={emailError}
            value={value.email}
            onChange={(v) => set("email", v)}
            onBlur={() => onTouch("email")}
            placeholder="sarah@kellyplumbing.ie"
            autoComplete="email"
          />
          <Field
            label={phoneRequired ? "Phone" : "Phone (optional)"}
            required={phoneRequired}
            type="tel"
            error={phoneError}
            value={value.phone}
            onChange={(v) => set("phone", v)}
            onBlur={() => onTouch("phone")}
            placeholder="087 123 4567"
            autoComplete="tel"
          />
        </div>

        <div className="mt-5">
          <label
            htmlFor="notes"
            className="block text-sm font-medium text-[#002157] mb-2"
          >
            Anything else I should know? (optional)
          </label>
          <textarea
            id="notes"
            rows={4}
            value={value.notes}
            onChange={(e) => set("notes", e.target.value)}
            placeholder="Existing supplier, project deadline, particular concern, website you love the look of&hellip;"
            className="w-full p-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#1DB48F] focus:ring-2 focus:ring-[#1DB48F]/20 transition-colors"
          />
        </div>
      </div>

      <p className="mt-5 text-xs text-gray-500 text-center">
        By submitting, you consent to Crettyard Digital contacting you about
        your enquiry. No spam, no mailing list, no data sold.
      </p>
    </motion.div>
  );
}

function Field({
  label,
  required,
  error,
  value,
  onChange,
  onBlur,
  type = "text",
  placeholder,
  autoComplete,
}: {
  label: string;
  required?: boolean;
  error?: string | null;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#002157] mb-1.5">
        {label}
        {required && (
          <span className="text-[#1DB48F] ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`w-full p-3 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-colors ${
          error
            ? "border-red-300 focus:border-red-400 focus:ring-red-400/20"
            : "border-gray-200 focus:border-[#1DB48F] focus:ring-[#1DB48F]/20"
        }`}
      />
      {error && (
        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" /> {error}
        </p>
      )}
    </div>
  );
}

/* =====================================================================
   STEP 6 — RESULT (THANK YOU + BALLPARK or TALK-ONLY)
===================================================================== */

function Step6Result({
  state,
  ballpark,
  submitted,
}: {
  state: QuoteState;
  ballpark: Ballpark;
  submitted: boolean;
}) {
  const firstName = state.contact.name.trim().split(" ")[0] || "there";
  const talkOnly = ballpark.hasTalkOnly || ballpark.lines.length === 0;

  if (!submitted) {
    // shouldn't normally happen - safety net
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12"
      >
        <Loader2 className="w-8 h-8 text-[#1DB48F] animate-spin mx-auto" />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* SUCCESS BANNER */}
      <div className="mb-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#E8F7F2] to-[#F3FAF7] border-2 border-[#1DB48F]">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[#1DB48F] flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-7 h-7 text-white" />
          </div>
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#002157] mb-2">
              Thanks, {firstName}!
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Your request is in. I&rsquo;ll be in touch within one business day
              &mdash; usually faster &mdash; via{" "}
              <strong>
                {CONTACT_METHOD_LABEL[state.contact.contactMethod].toLowerCase()}
              </strong>
              . A confirmation email has been sent to{" "}
              <strong>{state.contact.email}</strong>.
            </p>
          </div>
        </div>
      </div>

      {talkOnly ? (
        <TalkOnlyView firstName={firstName} />
      ) : (
        <BallparkView ballpark={ballpark} />
      )}

      {/* CTAs */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <a
          href="https://wa.me/353879700701"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#1DB48F] hover:bg-[#169C7C] text-white font-semibold transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          Chat with me on WhatsApp
        </a>
        <Link
          href="/portfolio"
          className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white border-2 border-[#002157] text-[#002157] hover:bg-[#002157] hover:text-white font-semibold transition-colors"
        >
          Browse my portfolio
        </Link>
        <Link
          href="/"
          className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white border-2 border-gray-200 text-gray-700 hover:border-[#1DB48F] hover:text-[#002157] font-semibold transition-colors"
        >
          Back to homepage
        </Link>
      </div>
    </motion.div>
  );
}

function TalkOnlyView({ firstName }: { firstName: string }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
      <h3 className="font-heading text-xl font-bold text-[#002157] mb-3">
        No numbers yet &mdash; let&rsquo;s just talk first
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        You picked &ldquo;Not sure yet&rdquo;, which is perfectly grand,{" "}
        {firstName}. The truth is, giving you a ballpark before I understand
        your business properly would be a disservice.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here&rsquo;s what happens next: I&rsquo;ll reach out within a business
        day for a no-obligation chat. Fifteen or twenty minutes, usually.
        We&rsquo;ll work out what you actually need &mdash; and just as often,
        what you <em>don&rsquo;t</em> need &mdash; and I&rsquo;ll send a proper
        written quote after that.
      </p>
      <div className="p-4 rounded-lg bg-[#F7F8FA] border border-gray-200 text-sm text-gray-600 flex items-start gap-3">
        <Info className="w-5 h-5 text-[#1DB48F] flex-shrink-0 mt-0.5" />
        <p>
          No hard sell, no 300-page proposals, no contracts until you&rsquo;re
          sure. If it&rsquo;s not a fit, I&rsquo;ll tell you that too &mdash;
          and point you somewhere useful.
        </p>
      </div>
    </div>
  );
}

function BallparkView({ ballpark }: { ballpark: Ballpark }) {
  const fmtRange = (low: number, high: number) => {
    if (low === 0 && high === 0) return null;
    if (low === high) return `from ${fmt(low)}`;
    return `${fmt(low)}–${fmt(high)}`;
  };

  const grantEligibleLines = ballpark.lines.filter(
    (l) => l.grantEligible === "yes"
  );
  const notEligibleLines = ballpark.lines.filter(
    (l) => l.grantEligible === "no"
  );

  return (
    <div className="space-y-6">
      {/* Disclaimer */}
      <div className="p-4 rounded-xl bg-[#FEF7E6] border border-[#F4C542]/40 flex items-start gap-3">
        <Info className="w-5 h-5 text-[#B8860B] flex-shrink-0 mt-0.5" />
        <p className="text-sm text-gray-800 leading-relaxed">
          <strong>This is a ballpark &mdash; not a binding quote.</strong> Real
          pricing depends on your specifics. I&rsquo;ll send a proper fixed
          quote within a business day after reviewing what you told me. Ranges
          shown are honest &mdash; some projects come in lower, some higher.
        </p>
      </div>

      {/* Line items */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-5 sm:p-6 border-b border-gray-100 bg-[#002157] text-white">
          <h3 className="font-heading text-lg font-bold flex items-center gap-2">
            <Euro className="w-5 h-5 text-[#1DB48F]" />
            Your itemised ballpark
          </h3>
          <p className="text-sm text-white/70 mt-1">
            Based on what you told me &mdash; includes both one-off and
            recurring costs
          </p>
        </div>

        <div className="divide-y divide-gray-100">
          {ballpark.lines.map((line, idx) => {
            const oneOff = fmtRange(line.oneOffLow ?? 0, line.oneOffHigh ?? 0);
            const monthly = fmtRange(
              line.monthlyLow ?? 0,
              line.monthlyHigh ?? 0
            );
            return (
              <div key={idx} className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h4 className="font-semibold text-[#002157]">
                        {line.label}
                      </h4>
                      {line.grantEligible === "yes" && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#E8F7F2] text-[#1DB48F] uppercase tracking-wide">
                          <Gift className="w-3 h-3" /> Grant-eligible
                        </span>
                      )}
                      {line.thirdParty && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-gray-100 text-gray-600 uppercase tracking-wide">
                          3rd-party billed
                        </span>
                      )}
                    </div>
                    {line.note && (
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {line.note}
                      </p>
                    )}
                  </div>
                  <div className="text-right flex-shrink-0 space-y-0.5">
                    {oneOff && (
                      <p className="text-sm font-semibold text-[#002157]">
                        {oneOff}
                        {line.oneOffLow !== line.oneOffHigh && (
                          <span className="text-xs font-normal text-gray-500 block">
                            one-off
                          </span>
                        )}
                      </p>
                    )}
                    {monthly && (
                      <p className="text-sm font-semibold text-[#1DB48F]">
                        {monthly}/mo
                      </p>
                    )}
                    {!oneOff && !monthly && (
                      <p className="text-sm font-medium text-gray-500">
                        Free
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Totals */}
        {(ballpark.oneOffLow > 0 || ballpark.monthlyLow > 0) && (
          <div className="bg-[#F7F8FA] p-5 sm:p-6 border-t-2 border-[#002157]">
            <div className="grid sm:grid-cols-2 gap-4">
              {ballpark.oneOffLow > 0 && (
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Estimated one-off
                  </p>
                  <p className="font-heading text-2xl font-bold text-[#002157]">
                    {fmtRange(ballpark.oneOffLow, ballpark.oneOffHigh) ||
                      "—"}
                  </p>
                </div>
              )}
              {ballpark.monthlyLow > 0 && (
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Estimated monthly (ongoing)
                  </p>
                  <p className="font-heading text-2xl font-bold text-[#1DB48F]">
                    {fmtRange(ballpark.monthlyLow, ballpark.monthlyHigh)}
                    <span className="text-base font-normal text-gray-500">
                      {" "}
                      /mo
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Grant eligibility breakdown */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-7 shadow-sm">
        <div className="flex items-start gap-3 mb-5">
          <div className="w-10 h-10 rounded-lg bg-[#1DB48F] flex items-center justify-center flex-shrink-0">
            <Gift className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold text-[#002157]">
              Grow Digital Voucher &mdash; what&rsquo;s covered, what&rsquo;s not
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              €5,000 grant covers 50% of eligible costs. Your Local Enterprise
              Office approves &mdash; honest breakdown below.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-[#E8F7F2] border border-[#1DB48F]/30">
            <p className="text-xs font-bold text-[#1DB48F] uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Check className="w-4 h-4" />
              Potentially grant-eligible
            </p>
            <ul className="space-y-2 text-sm text-gray-800">
              {grantEligibleLines.length > 0 ? (
                grantEligibleLines.map((l, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#1DB48F] mt-1">•</span>
                    <span>{l.label}</span>
                  </li>
                ))
              ) : (
                <>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1DB48F] mt-1">•</span>
                    <span>Microsoft 365 subscriptions (ongoing licences)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1DB48F] mt-1">•</span>
                    <span>AI & Copilot subscriptions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1DB48F] mt-1">•</span>
                    <span>New SaaS software subscriptions</span>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4" />
              NOT grant-eligible
            </p>
            <ul className="space-y-2 text-sm text-gray-800">
              {notEligibleLines.length > 0 ? (
                notEligibleLines.slice(0, 6).map((l, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>{l.label}</span>
                  </li>
                ))
              ) : (
                <>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>Bespoke web design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>Hardware (PCs, laptops, servers, cables)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>Setup / install fees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>Managed IT / ongoing service fees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>Website care plans</span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-5 p-4 rounded-lg bg-blue-50 border border-blue-200 flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-800 leading-relaxed">
            To use the voucher, you apply through your Local Enterprise Office
            after a free &ldquo;Digital for Business&rdquo; consultation.{" "}
            <Link
              href="/grants-funding"
              className="text-[#1DB48F] font-semibold hover:underline inline-flex items-center gap-1"
            >
              See full grant details
              <ExternalLink className="w-3 h-3" />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
