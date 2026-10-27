"use client";

import { useState } from "react";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  Award,
  BookOpen,
  Clock,
} from "lucide-react";
import { EXPERIENCES, EDUCATIONS, TRAININGS } from "../data/portfolioData";

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<"experience" | "education" | "certifications">("experience");

  return (
    <section id="experience" className="relative py-28 bg-[#070b18] border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-medium mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER &amp; CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Work Experience &amp; <span className="text-gradient-cyan">Qualifications</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base max-w-xl">
            A comprehensive record of my professional roles, academic degrees, and government-certified engineering trainings.
          </p>

          {/* Toggle Tabs */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md gap-1">
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === "experience"
                  ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md shadow-indigo-500/20"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Work Experience (7+ Yrs)</span>
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === "education"
                  ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md shadow-indigo-500/20"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Academic Education</span>
            </button>
            <button
              onClick={() => setActiveTab("certifications")}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === "certifications"
                  ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md shadow-indigo-500/20"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Govt. Trainings &amp; Certifications</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Work Experience Timeline */}
        {activeTab === "experience" && (
          <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Glowing Node Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#070b18] border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-400/50 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:bg-black" />
                </div>

                <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-cyan-500/30 transition-all duration-300 shadow-md">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono font-medium flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      {exp.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-indigo-400 mt-0.5">
                    {exp.company} • <span className="text-zinc-400 font-normal text-xs">{exp.type}</span>
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {exp.description.map((desc, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded bg-white/[0.03] text-zinc-400 border border-white/5 text-[11px] font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Academic Education Timeline */}
        {activeTab === "education" && (
          <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
            {EDUCATIONS.map((edu, idx) => (
              <div key={idx} className="relative group">
                {/* Glowing Node Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#070b18] border-2 border-indigo-400 group-hover:bg-indigo-400 transition-colors shadow-lg shadow-indigo-400/50 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 group-hover:bg-black" />
                </div>

                <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-indigo-500/30 transition-all duration-300 shadow-md">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-mono font-medium flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 text-[11px] font-mono">
                      {edu.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                    {edu.institution} • <span className="text-zinc-400 font-normal text-xs">{edu.location}</span>
                  </p>

                  <ul className="mt-4 space-y-2">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        <Award className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Government Trainings & Certifications */}
        {activeTab === "certifications" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TRAININGS.map((cert, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-medium flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {cert.duration}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">{cert.period}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                  <p className="text-xs font-semibold text-cyan-400 mb-3">{cert.institute}</p>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    <span className="text-zinc-300 font-medium">Topics covered:</span> {cert.topics}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span className="text-emerald-400">Government Project Certified</span>
                  <span>Bangladesh</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
