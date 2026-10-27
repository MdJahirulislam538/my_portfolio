"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Code2,
  Download,
  Mail,
  Sparkles,
  Terminal,
  Check,
  Copy,
  ExternalLink,
  Cpu,
  Layers,
  Zap,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { TechIcon } from "./TechIcons";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function Hero() {
  const roles = [
    "UI Engineer (ParonSoft Solution Ltd.)",
    "FrontEnd & Web App Developer",
    "UI/UX Designer & Prototyper",
    "B.Sc. in CSE (Daffodil Int. University)",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"code" | "metrics" | "stack">("code");
  const [showResumeModal, setShowResumeModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [roles.length]);

  const copyCode = () => {
    const codeSnippet = `const developer = {
  name: "${PERSONAL_INFO.name}",
  role: "${PERSONAL_INFO.role}",
  experience: "${PERSONAL_INFO.experienceYears} (ParonSoft Solution Ltd.)",
  education: "${PERSONAL_INFO.educationDegree}",
  location: "${PERSONAL_INFO.location}",
  email: "${PERSONAL_INFO.email}",
  phone: "${PERSONAL_INFO.phone}",
  specialties: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React", "Next.js", "Figma", "UI/UX Usability Testing"],
  status: "Available for Full-Time & Remote Contracts"
};`;
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600/15 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono font-medium text-zinc-300">
                {PERSONAL_INFO.status}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
              Crafting <span className="text-gradient-primary">Next-Gen</span>
              <br />
              Web Experiences With Precision & Speed.
            </h1>

            {/* Dynamic Rotating Role */}
            <div className="mt-4 flex items-center gap-2 font-mono text-lg sm:text-xl text-cyan-400 font-semibold min-h-[36px]">
              <span className="text-zinc-500">&gt;</span>
              <span className="transition-opacity duration-500 key={roleIndex}">
                {roles[roleIndex]}
              </span>
              <span className="w-2 h-5 bg-cyan-400 animate-pulse" />
            </div>

            {/* Subtitle / Bio */}
            <p className="mt-5 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
              Hi, I am <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>. 
              I engineer end-to-end web applications, resilient backend architectures, and 
              delightful user interfaces that transform ideas into scalable digital products.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 text-white font-medium text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 border border-white/10 font-medium text-sm transition-all hover:scale-[1.02]"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={() => setShowResumeModal(true)}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-zinc-400 hover:text-white border border-white/10 font-medium text-sm transition-all"
                title="Preview & Download CV"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Resume</span>
              </button>
            </div>

            {/* Social Links & Trust Badges */}
            <div className="mt-10 pt-8 border-t border-white/[0.08] w-full flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-zinc-400 hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-zinc-400 hover:text-cyan-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-zinc-400 hover:text-indigo-400 transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  99.9% Clean Code
                </span>
                <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  Next.js 16 Turbo
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Sandbox / Cyber Terminal */}
          <div className="lg:col-span-5 w-full">
            <div className="relative group">
              {/* Card Outer Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-25 blur-lg group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />

              <div className="relative rounded-2xl bg-[#090d1a]/95 border border-white/10 backdrop-blur-xl overflow-hidden shadow-2xl">
                {/* Window Header */}
                <div className="px-4 py-3 bg-[#0d1326] border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-xs text-zinc-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-zinc-400" />
                      workspace/portfolio
                    </span>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={copyCode}
                    className="flex items-center gap-1 px-2.5 py-1 rounded bg-white/[0.05] hover:bg-white/[0.1] text-zinc-400 hover:text-white text-xs font-mono transition-colors"
                    title="Copy code snippet"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-white/[0.06] bg-[#070a14] px-3 pt-2 gap-1 font-mono text-xs">
                  <button
                    onClick={() => setActiveTab("code")}
                    className={`px-3 py-1.5 rounded-t-lg transition-all flex items-center gap-1.5 ${
                      activeTab === "code"
                        ? "bg-[#090d1a] text-cyan-400 border-t border-x border-white/10"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    Developer.ts
                  </button>

                  <button
                    onClick={() => setActiveTab("metrics")}
                    className={`px-3 py-1.5 rounded-t-lg transition-all flex items-center gap-1.5 ${
                      activeTab === "metrics"
                        ? "bg-[#090d1a] text-indigo-400 border-t border-x border-white/10"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5 text-indigo-400" />
                    metrics.json
                  </button>

                  <button
                    onClick={() => setActiveTab("stack")}
                    className={`px-3 py-1.5 rounded-t-lg transition-all flex items-center gap-1.5 ${
                      activeTab === "stack"
                        ? "bg-[#090d1a] text-purple-400 border-t border-x border-white/10"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5 text-purple-400" />
                    stack.config
                  </button>
                </div>

                {/* Tab Content */}
                <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed min-h-[290px] overflow-x-auto">
                  {activeTab === "code" && (
                    <div className="space-y-1">
                      <p className="text-zinc-500">// Engineering scalable web solutions</p>
                      <p>
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-yellow-300">engineer</span>:{" "}
                        <span className="text-cyan-400">SoftwareDeveloper</span> = &#123;
                      </p>
                      <p className="pl-4">
                        <span className="text-zinc-400">name:</span>{" "}
                        <span className="text-emerald-300">&quot;{PERSONAL_INFO.name}&quot;</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-zinc-400">role:</span>{" "}
                        <span className="text-emerald-300">&quot;{PERSONAL_INFO.role}&quot;</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-zinc-400">company:</span>{" "}
                        <span className="text-cyan-300">&quot;ParonSoft Solution Ltd. (6 yrs)&quot;</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-zinc-400">education:</span>{" "}
                        <span className="text-cyan-300">&quot;B.Sc. in CSE (DIU)&quot;</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-zinc-400">tech:</span> [
                        <span className="text-cyan-300">&quot;HTML/CSS&quot;</span>,{" "}
                        <span className="text-cyan-300">&quot;Tailwind&quot;</span>,{" "}
                        <span className="text-cyan-300">&quot;React&quot;</span>,{" "}
                        <span className="text-cyan-300">&quot;Figma UI/UX&quot;</span>],
                      </p>
                      <p className="pl-4">
                        <span className="text-zinc-400">clients:</span>{" "}
                        <span className="text-purple-300">&quot;Japan &amp; UK International&quot;</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-zinc-400">openForHire:</span>{" "}
                        <span className="text-amber-400">true</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-indigo-400">executeProject</span>: (
                        <span className="text-yellow-300">vision</span>) =&gt; &#123;
                      </p>
                      <p className="pl-8 text-zinc-300">
                        <span className="text-purple-400">return</span> &#123;
                      </p>
                      <p className="pl-12 text-zinc-400">
                        performance: <span className="text-emerald-400">&quot;99+ Lighthouse&quot;</span>,
                      </p>
                      <p className="pl-12 text-zinc-400">
                        architecture: <span className="text-cyan-400">&quot;Clean &amp; Modular&quot;</span>,
                      </p>
                      <p className="pl-12 text-zinc-400">
                        deliveredOnTime: <span className="text-amber-400">true</span>
                      </p>
                      <p className="pl-8">&#125;;</p>
                      <p className="pl-4">&#125;</p>
                      <p>&#125;;</p>
                    </div>
                  )}

                  {activeTab === "metrics" && (
                    <div className="space-y-2">
                      <p className="text-zinc-500">// Real-time production benchmark</p>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.06]">
                          <span className="text-zinc-400 block text-[11px]">Core Web Vitals</span>
                          <span className="text-emerald-400 font-bold text-sm">100 / 100</span>
                        </div>
                        <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.06]">
                          <span className="text-zinc-400 block text-[11px]">TTFB Latency</span>
                          <span className="text-cyan-400 font-bold text-sm">&lt; 38 ms</span>
                        </div>
                        <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.06]">
                          <span className="text-zinc-400 block text-[11px]">Type Safety</span>
                          <span className="text-indigo-400 font-bold text-sm">Strict (0 any)</span>
                        </div>
                        <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.06]">
                          <span className="text-zinc-400 block text-[11px]">Code Quality</span>
                          <span className="text-purple-400 font-bold text-sm">A+ Grade</span>
                        </div>
                      </div>
                      <p className="text-emerald-400 text-xs mt-3 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5" /> All 28 automated tests passing
                      </p>
                    </div>
                  )}

                  {activeTab === "stack" && (
                    <div className="space-y-2">
                      <p className="text-zinc-500">// Core technical stack configuration</p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {[
                          "Next.js 16",
                          "React 19",
                          "TypeScript 5",
                          "Tailwind CSS v4",
                          "Node.js",
                          "Express",
                          "PostgreSQL",
                          "Prisma ORM",
                          "MongoDB",
                          "Redis",
                          "Zustand",
                          "Docker",
                          "Vercel Edge",
                          "REST / GraphQL",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.04] text-zinc-300 border border-white/10 text-[11px] hover:border-cyan-400/30 transition-colors"
                          >
                            <TechIcon name={tech} className="w-3.5 h-3.5" />
                            <span>{tech}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Terminal Bottom Bar */}
                <div className="px-4 py-2 bg-[#070a14] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      main*
                    </span>
                    <span>UTF-8</span>
                  </div>
                  <span className="text-zinc-400">TypeScript 5.x</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-xl rounded-2xl bg-[#0b0f19] border border-white/15 p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white">{PERSONAL_INFO.name} — Curriculum Vitae</h3>
                <p className="text-xs text-cyan-400 font-mono">{PERSONAL_INFO.role} • 7+ Years Experience</p>
              </div>
              <button
                onClick={() => setShowResumeModal(false)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-3 text-xs sm:text-sm text-zinc-300 max-h-[70vh] overflow-y-auto pr-1">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <p className="font-semibold text-white">Career Summary</p>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{PERSONAL_INFO.bio}</p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <p className="font-semibold text-white">Experience (8.9 Years Total)</p>
                <ul className="text-xs text-zinc-400 mt-1.5 space-y-1">
                  <li>• <strong className="text-zinc-200">UI Engineer</strong> @ ParonSoft Solution Ltd. (Aug 2020 - Present, 6 yrs)</li>
                  <li>• <strong className="text-zinc-200">Designer / UI Specialist</strong> @ Info Inlet (Feb 2019 - Jun 2020, 1.4 yrs)</li>
                  <li>• <strong className="text-zinc-200">Designer &amp; Visualizer</strong> @ SBIT (Jan 2017 - Jun 2018, 1.5 yrs)</li>
                </ul>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <p className="font-semibold text-white">Education &amp; Academic Background</p>
                <ul className="text-xs text-zinc-400 mt-1.5 space-y-1">
                  <li>• <strong className="text-zinc-200">B.Sc. in Computer Science &amp; Engineering</strong> — Daffodil International University (DIU), 2021</li>
                  <li>• <strong className="text-zinc-200">Diploma in Computer Science &amp; Engineering</strong> — ICST (CGPA 3.12 / 4.00), 2018</li>
                  <li>• <strong className="text-zinc-200">SSC (Business Studies)</strong> — Government Ataturk Model High School, 2013</li>
                </ul>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <p className="font-semibold text-white">Government Trainings &amp; Certifications</p>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  • Govt. LICT Web Design &amp; Development (200 Hours) | Govt. LICT UI/UX Design (80 Hours) | SEIP SEO (60 Hours) | Govt. LEDP Graphic Design (200 Hours)
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <p className="font-semibold text-white">Contact &amp; Location</p>
                <div className="text-xs text-zinc-400 mt-1 space-y-0.5">
                  <p>📍 Location: {PERSONAL_INFO.location}</p>
                  <p>📞 Phone: {PERSONAL_INFO.phone} / {PERSONAL_INFO.altPhone}</p>
                  <p>✉️ Email: {PERSONAL_INFO.email}</p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3 pt-4 border-t border-white/10">
              <span className="text-xs text-emerald-400 font-mono">Status: Ready for Interview</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white"
                >
                  Close
                </button>
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Job Opportunity / Project Inquiry for Md. Jahirul Islam`}
                  className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" /> Email Jahirul
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
