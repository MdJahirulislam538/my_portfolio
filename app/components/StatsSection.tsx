"use client";

import { Briefcase, CheckCircle2, Code2, Users, Award, ShieldCheck } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function StatsSection() {
  const stats = [
    {
      value: PERSONAL_INFO.experienceYears,
      label: "Years Experience",
      detail: "Building production software",
      icon: Briefcase,
      color: "from-blue-500 to-cyan-400",
      glow: "group-hover:shadow-cyan-500/20",
    },
    {
      value: PERSONAL_INFO.completedProjects,
      label: "Delivered Projects",
      detail: "High-performance web apps",
      icon: CheckCircle2,
      color: "from-indigo-500 to-purple-400",
      glow: "group-hover:shadow-indigo-500/20",
    },
    {
      value: PERSONAL_INFO.clientSatisfaction,
      label: "Client Satisfaction",
      detail: "5-star rating & reviews",
      icon: Users,
      color: "from-emerald-500 to-teal-400",
      glow: "group-hover:shadow-emerald-500/20",
    },
    {
      value: PERSONAL_INFO.codeLines,
      label: "Lines of Clean Code",
      detail: "Strict TypeScript & tests",
      icon: Code2,
      color: "from-amber-500 to-rose-400",
      glow: "group-hover:shadow-amber-500/20",
    },
  ];

  return (
    <section className="relative py-12 border-y border-white/[0.08] bg-[#090d1c]/70 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-white/15 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${stat.color} p-[1px] shadow-md`}
                  >
                    <div className="w-full h-full bg-[#090d1c] rounded-[11px] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <span className="font-mono text-[11px] text-zinc-500">0{idx + 1}</span>
                </div>

                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </span>
                </div>

                <p className="mt-1 text-sm font-semibold text-zinc-200">{stat.label}</p>
                <p className="text-xs text-zinc-400 mt-0.5">{stat.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
