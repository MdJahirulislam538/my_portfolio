"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Layers,
  Sparkles,
  ArrowRight,
  Info,
  CheckCircle2,
  X,
  Zap,
} from "lucide-react";
import { GithubIcon } from "./Icons";
import { TechIcon } from "./TechIcons";
import { PROJECTS, Project } from "../data/portfolioData";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ["All", "SaaS & AI", "Fintech & E-Com", "Full Stack"];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedCategory === "All") return true;
    return proj.category === selectedCategory;
  });

  return (
    <section id="projects" className="relative py-28">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-medium mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-primary">Engineering Projects</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base max-w-2xl">
            Real-world web applications built with rigorous architecture, user-centric interfaces, and scalable modern web frameworks.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-[#0b1020]/90 border border-white/10 overflow-hidden hover:border-indigo-500/40 transition-all duration-300 flex flex-col hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              {/* Project Image Banner */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-black/40">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1020] via-transparent to-transparent opacity-90" />

                {/* Category Pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs font-mono font-medium text-cyan-300 shadow">
                    {project.category}
                  </span>
                </div>

                {/* Metrics Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-500/30 text-[11px] font-mono text-emerald-300 shadow flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-emerald-400" />
                    {project.metrics}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-indigo-400 font-mono mt-1 font-medium">
                    {project.tagline}
                  </p>
                  <p className="mt-3 text-zinc-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/[0.04] text-zinc-300 border border-white/5 text-[11px] font-mono hover:border-cyan-500/20 transition-colors"
                      >
                        <TechIcon name={tag} className="w-3.5 h-3.5" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Footer */}
                <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Case Study &amp; Architecture</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-zinc-300 hover:text-white border border-white/10 transition-colors"
                      title="View GitHub Repository"
                      aria-label="GitHub Repo"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors"
                      title="Launch Live Application"
                    >
                      <span>Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#090d1a] border border-white/20 p-6 sm:p-8 shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  Case Study &amp; Architecture
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">{activeModalProject.tagline}</p>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="mt-6 space-y-5 text-sm">
              {/* Architecture Highlight */}
              <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/20">
                <h4 className="font-bold text-white flex items-center gap-2 text-xs font-mono text-indigo-300">
                  <Layers className="w-4 h-4 text-indigo-400" /> SYSTEM ARCHITECTURE
                </h4>
                <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                  {activeModalProject.caseStudy.architecture}
                </p>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h4 className="font-bold text-amber-400 text-xs font-mono mb-2">
                    THE CHALLENGE
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {activeModalProject.caseStudy.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h4 className="font-bold text-emerald-400 text-xs font-mono mb-2">
                    THE SOLUTION
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {activeModalProject.caseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Key Features List */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h4 className="font-bold text-white text-xs font-mono mb-3">
                  CORE DELIVERABLES &amp; METRICS
                </h4>
                <ul className="space-y-2">
                  {activeModalProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Matrix */}
              <div>
                <h4 className="font-mono text-xs text-zinc-400 mb-2">TECHNOLOGIES DEPLOYED</h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-xs font-mono text-zinc-200"
                    >
                      <TechIcon name={t} className="w-3.5 h-3.5" />
                      <span>{t}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400">
                Status: Production Verified
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white"
                >
                  Close
                </button>
                <a
                  href={activeModalProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium flex items-center gap-1.5"
                >
                  <span>Launch Live App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
