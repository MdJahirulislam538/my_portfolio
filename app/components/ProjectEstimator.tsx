"use client";

import { useState } from "react";
import {
  Calculator,
  Sparkles,
  Check,
  ArrowRight,
  Clock,
  Layers,
  Shield,
  CreditCard,
  Bot,
  Zap,
  BarChart3,
  Search,
} from "lucide-react";

interface ProjectOption {
  id: string;
  name: string;
  baseDays: number;
  desc: string;
}

const PROJECT_TYPES: ProjectOption[] = [
  {
    id: "landing",
    name: "Modern Landing Page / Portfolio",
    baseDays: 4,
    desc: "High-converting, ultra-fast UI with dynamic animations and SEO.",
  },
  {
    id: "saas",
    name: "Full-Stack SaaS MVP",
    baseDays: 14,
    desc: "End-to-end web application with authentication, database, and dashboard.",
  },
  {
    id: "ecommerce",
    name: "Headless E-Commerce Store",
    baseDays: 16,
    desc: "High-speed storefront, product catalog, cart, and Stripe checkout.",
  },
  {
    id: "api-dashboard",
    name: "Custom API & Admin Portal",
    baseDays: 10,
    desc: "Scalable REST/GraphQL backend with role-based admin management.",
  },
];

interface FeatureOption {
  id: string;
  name: string;
  extraDays: number;
  icon: any;
}

const FEATURE_OPTIONS: FeatureOption[] = [
  { id: "auth", name: "User Auth & Roles (NextAuth/JWT)", extraDays: 2, icon: Shield },
  { id: "payment", name: "Stripe / Payment Gateway", extraDays: 3, icon: CreditCard },
  { id: "ai", name: "AI Integration / LLM Chatbot", extraDays: 4, icon: Bot },
  { id: "realtime", name: "Real-time WebSockets / Notifications", extraDays: 3, icon: Zap },
  { id: "analytics", name: "Admin Dashboard & Metrics Charts", extraDays: 3, icon: BarChart3 },
  { id: "seo", name: "Core Web Vitals 95+ & Advanced SEO", extraDays: 2, icon: Search },
];

export default function ProjectEstimator() {
  const [selectedType, setSelectedType] = useState<string>("saas");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "auth",
    "analytics",
    "seo",
  ]);
  const [urgency, setUrgency] = useState<"standard" | "fast-track">("standard");

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentType = PROJECT_TYPES.find((t) => t.id === selectedType) || PROJECT_TYPES[0];
  const featureDays = selectedFeatures.reduce((acc, featId) => {
    const feat = FEATURE_OPTIONS.find((f) => f.id === featId);
    return acc + (feat ? feat.extraDays : 0);
  }, 0);

  const totalDays = Math.ceil(
    (currentType.baseDays + featureDays) * (urgency === "fast-track" ? 0.75 : 1)
  );

  const handleApplyToContact = () => {
    const contactSection = document.getElementById("contact");
    const messageInput = document.getElementById("contact-message") as HTMLTextAreaElement | null;
    const subjectInput = document.getElementById("contact-subject") as HTMLInputElement | null;

    if (subjectInput) {
      subjectInput.value = `Inquiry: ${currentType.name}`;
    }

    if (messageInput) {
      const featureNames = selectedFeatures
        .map((fId) => FEATURE_OPTIONS.find((f) => f.id === fId)?.name)
        .filter(Boolean)
        .join(", ");

      messageInput.value = `Hi Jahirul,\n\nI used your Project Estimator and would like to build a "${currentType.name}".\n\nFeatures Needed: ${featureNames || "Standard features"}.\nTimeline Mode: ${urgency === "fast-track" ? "Fast-track (High priority)" : "Standard"}.\nEstimated Duration: ~${totalDays} business days.\n\nLet's discuss availability and kickoff!`;
    }

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="estimator" className="relative py-28 bg-[#090d1e]/80 border-t border-white/[0.06]">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE TOOL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Interactive Project <span className="text-gradient-cyan">Scope Estimator</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base max-w-2xl">
            Planning a new product or website? Select your project parameters below to get an instant engineering timeline estimate and recommended architecture.
          </p>
        </div>

        {/* Estimator Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Configurator */}
          <div className="lg:col-span-7 space-y-8 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
            {/* Step 1: Project Type */}
            <div>
              <label className="text-sm font-bold text-white flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 text-xs flex items-center justify-center font-mono">
                  1
                </span>
                Choose Project Archetype
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROJECT_TYPES.map((type) => {
                  const isSelected = selectedType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedType(type.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all ${
                        isSelected
                          ? "bg-indigo-600/20 border-cyan-400/80 shadow-md shadow-cyan-500/10"
                          : "bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]"
                      }`}
                    >
                      <p className="text-xs font-bold text-white">{type.name}</p>
                      <p className="text-[11px] text-zinc-400 mt-1 leading-snug">{type.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Feature Add-ons */}
            <div>
              <label className="text-sm font-bold text-white flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 text-xs flex items-center justify-center font-mono">
                  2
                </span>
                Select Capabilities &amp; Integrations
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {FEATURE_OPTIONS.map((feat) => {
                  const Icon = feat.icon;
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => toggleFeature(feat.id)}
                      className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                        isChecked
                          ? "bg-white/[0.06] border-indigo-500/60 text-white"
                          : "bg-white/[0.01] border-white/5 text-zinc-400 hover:border-white/10"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 ${isChecked ? "text-cyan-400" : "text-zinc-500"}`} />
                        <span className="text-xs font-medium">{feat.name}</span>
                      </div>
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center border text-[10px] ${
                          isChecked
                            ? "bg-cyan-500 border-cyan-400 text-black font-bold"
                            : "border-white/20"
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 text-black stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Urgency Mode */}
            <div>
              <label className="text-sm font-bold text-white flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 text-xs flex items-center justify-center font-mono">
                  3
                </span>
                Delivery Pace
              </label>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setUrgency("standard")}
                  className={`p-3 rounded-xl text-center border text-xs font-semibold transition-all ${
                    urgency === "standard"
                      ? "bg-indigo-600/20 border-indigo-400 text-white"
                      : "bg-white/[0.02] border-white/5 text-zinc-400"
                  }`}
                >
                  Standard Timeline (Thorough QA)
                </button>
                <button
                  type="button"
                  onClick={() => setUrgency("fast-track")}
                  className={`p-3 rounded-xl text-center border text-xs font-semibold transition-all ${
                    urgency === "fast-track"
                      ? "bg-amber-500/20 border-amber-400 text-white"
                      : "bg-white/[0.02] border-white/5 text-zinc-400"
                  }`}
                >
                  ⚡ Fast-Track (Dedicated Sprint)
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Live Computation & Architecture Plan */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#0f172a] to-[#080d1e] border border-cyan-500/30 backdrop-blur-xl shadow-2xl relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider">
                  Engineering Scope Output
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] font-mono border border-emerald-500/20">
                  Ready to Kickoff
                </span>
              </div>

              {/* Estimated Timeline Display */}
              <div className="mt-6 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-xs text-zinc-400 block font-mono">Estimated Turnaround</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl font-extrabold text-white">~{totalDays}</span>
                  <span className="text-sm font-semibold text-cyan-400">Business Days</span>
                </div>
                <p className="text-[11px] text-zinc-400 mt-1">
                  Includes UI implementation, backend APIs, integration testing, and deployment.
                </p>
              </div>

              {/* Recommended Stack */}
              <div className="mt-5 space-y-2">
                <span className="text-xs font-mono text-zinc-400 block">Recommended Architecture</span>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-zinc-300 space-y-1.5">
                  <p className="flex items-center gap-2">
                    <span className="text-cyan-400">⚡ Frontend:</span> Next.js 16 (App Router) + Tailwind CSS + TypeScript
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-indigo-400">⚡ Backend:</span> Node.js / Server Actions + REST APIs
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-purple-400">⚡ Database:</span> PostgreSQL with Prisma ORM / MongoDB
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-emerald-400">⚡ Hosting:</span> Vercel Edge Network (100% Uptime SLA)
                  </p>
                </div>
              </div>
            </div>

            {/* CTA to populate contact form */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <button
                onClick={handleApplyToContact}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span>Book This Scope with Jahirul</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-[11px] text-zinc-400 mt-2 font-mono">
                Auto-fills inquiry into contact form below
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
