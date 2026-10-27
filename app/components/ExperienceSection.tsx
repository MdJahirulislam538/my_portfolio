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
} from "lucide-react";
import { EXPERIENCES } from "../data/portfolioData";

export default function ExperienceSection() {
  const [tab, setTab] = useState<"experience" | "education">("experience");

  const education = [
    {
      degree: "Bachelor of Science in Computer Science & Engineering (CSE)",
      institution: "State University of Bangladesh",
      period: "2019 - 2023",
      location: "Dhaka, Bangladesh",
      highlights: [
        "Major in Software Systems, Web Technologies & Database Engineering.",
        "Graduated with Distinction; developed real-time campus portal as final capstone project.",
        "Active leader of University Coding Club & Hackathon Team.",
      ],
      badge: "Graduated with Honors",
    },
    {
      degree: "Meta Certified Frontend Developer",
      institution: "Meta / Coursera Specialization",
      period: "2023",
      location: "Online Professional Certification",
      highlights: [
        "Mastered advanced React architecture, state management, Jest unit testing, and web accessibility.",
        "Built responsive capstone web application evaluated by industry engineering mentors.",
      ],
      badge: "Professional Certificate",
    },
    {
      degree: "Full-Stack Web Engineering Mastery",
      institution: "Programming Hero",
      period: "2022",
      location: "Dhaka, Bangladesh",
      highlights: [
        "Intensive MERN stack training (MongoDB, Express, React, Node.js, Next.js).",
        "Completed 15+ comprehensive full-stack team projects and code reviews.",
      ],
      badge: "Top Tier Graduate",
    },
  ];

  return (
    <section id="experience" className="relative py-28 bg-[#070b18] border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-medium mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER PROGRESSION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Work Experience &amp; <span className="text-gradient-cyan">Education</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base max-w-xl">
            A track record of engineering impact, continuous learning, and scalable production deliveries.
          </p>

          {/* Toggle Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setTab("experience")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                tab === "experience"
                  ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md shadow-indigo-500/20"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Work Experience</span>
            </button>
            <button
              onClick={() => setTab("education")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                tab === "education"
                  ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md shadow-indigo-500/20"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education &amp; Certifications</span>
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        {tab === "experience" ? (
          <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Glowing Node Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#070b18] border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-400/50 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:bg-black" />
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-cyan-500/30 transition-all duration-300">
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
                  <p className="text-sm font-medium text-indigo-400 mt-0.5">{exp.company} • <span className="text-zinc-400 text-xs">{exp.type}</span></p>

                  <ul className="mt-4 space-y-2">
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
        ) : (
          <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
            {education.map((edu, idx) => (
              <div key={idx} className="relative group">
                {/* Glowing Node Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#070b18] border-2 border-indigo-400 group-hover:bg-indigo-400 transition-colors shadow-lg shadow-indigo-400/50 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 group-hover:bg-black" />
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-indigo-500/30 transition-all duration-300">
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
                  <p className="text-sm font-medium text-cyan-400 mt-0.5">{edu.institution} • <span className="text-zinc-400 text-xs">{edu.location}</span></p>

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
      </div>
    </section>
  );
}
