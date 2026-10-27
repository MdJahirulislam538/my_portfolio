"use client";

import Image from "next/image";
import {
  Sparkles,
  Zap,
  Code,
  Layers,
  HeartHandshake,
  Check,
  MapPin,
  Globe,
  Mail,
  GraduationCap,
} from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function AboutSection() {
  const pillars = [
    {
      title: "Performance First",
      desc: "Architecting sub-second page loads, optimized assets, and 95+ Core Web Vitals scores.",
      icon: Zap,
      color: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    },
    {
      title: "Clean Architecture",
      desc: "Strict TypeScript typings, component modularity, and maintainable scalable codebases.",
      icon: Code,
      color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    },
    {
      title: "Pixel-Perfect UI/UX",
      desc: "Bridging the gap between Figma designs and code with fluid micro-interactions.",
      icon: Layers,
      color: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
    },
    {
      title: "Full-Cycle Delivery",
      desc: "Taking projects seamlessly from requirements discovery to battle-tested production deployment.",
      icon: HeartHandshake,
      color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    },
  ];

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Subtle Glow Background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DISCOVER MY JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Behind The Code &amp; <span className="text-gradient-cyan">Philosophy</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base max-w-2xl">
            A developer who sees software not just as syntax, but as a craft that solves human problems and drives real business impact.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Avatar & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              {/* Outer Decorative Gradient Rings */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 opacity-40 blur-xl animate-pulse-glow" />

              {/* Avatar Container */}
              <div className="relative w-72 sm:w-84 md:w-96 aspect-square rounded-3xl overflow-hidden border-2 border-white/20 bg-[#0c1222] shadow-2xl">
                <Image
                  src="/images/avatar.jpg"
                  alt={PERSONAL_INFO.name}
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  priority
                />

                {/* Subtle bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070913] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">{PERSONAL_INFO.name}</p>
                    <p className="text-[11px] text-cyan-400 font-mono">{PERSONAL_INFO.role}</p>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400" />
                </div>
              </div>

              {/* Floating Badge 1: Experience */}
              <div className="absolute -top-4 -right-4 px-4 py-2.5 rounded-2xl bg-[#0e172e]/90 border border-cyan-500/30 backdrop-blur-md shadow-xl flex items-center gap-2.5 animate-float">
                <span className="text-2xl font-black text-cyan-400">3+</span>
                <span className="text-[11px] font-semibold text-zinc-300 leading-tight">
                  Years of<br />Dev Mastery
                </span>
              </div>

              {/* Floating Badge 2: Location */}
              <div className="absolute -bottom-4 -left-4 px-3.5 py-2 rounded-2xl bg-[#0e172e]/90 border border-indigo-500/30 backdrop-blur-md shadow-xl flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-medium text-zinc-300">
                  Bangladesh • Global Remote
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio and Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              Transforming ambitious ideas into reliable, scalable digital reality.
            </h3>

            <p className="mt-4 text-zinc-300 leading-relaxed text-sm sm:text-base">
              I am a results-oriented Web Developer with deep expertise across modern frontend ecosystems 
              (React, Next.js, TypeScript, Tailwind) and full-stack backend integrations (Node.js, Express, 
              PostgreSQL, MongoDB).
            </p>

            <p className="mt-3 text-zinc-400 leading-relaxed text-sm">
              Over the last 3+ years, I have worked with international startups, agencies, and entrepreneurs 
              to craft intuitive digital products. I take pride in writing clean, well-tested code, avoiding technical 
              debt, and ensuring the final product feels effortless and rewarding for every user.
            </p>

            {/* Quick Details Chips */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-xs text-zinc-400 block">Focus</span>
                <span className="text-sm font-semibold text-white">Full-Stack &amp; Next.js</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-xs text-zinc-400 block">Availability</span>
                <span className="text-sm font-semibold text-emerald-400">Open For Hire</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 col-span-2 sm:col-span-1">
                <span className="text-xs text-zinc-400 block">Communication</span>
                <span className="text-sm font-semibold text-cyan-400">Fluent &amp; Responsive</span>
              </div>
            </div>

            {/* Core Pillars Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 hover:bg-white/[0.04] transition-all"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className={`p-1.5 rounded-lg border ${pillar.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-white">{pillar.title}</h4>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
