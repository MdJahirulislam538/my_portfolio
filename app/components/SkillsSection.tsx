"use client";

import { useState } from "react";
import {
  Sparkles,
  Code2,
  Server,
  Database,
  Terminal,
  Search,
  Cpu,
  Boxes,
  Flame,
  CheckCircle,
} from "lucide-react";
import { TechIcon } from "./TechIcons";
import { SKILL_CATEGORIES } from "../data/portfolioData";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", ...SKILL_CATEGORIES.map((c) => c.title)];

  // Flatten or filter skills
  const filteredCategories = SKILL_CATEGORIES.filter((category) => {
    if (activeCategory !== "All" && category.title !== activeCategory) {
      return false;
    }
    return true;
  }).map((cat) => {
    const matchingSkills = cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...cat,
      skills: matchingSkills,
    };
  }).filter((cat) => cat.skills.length > 0);

  const getCategoryIcon = (title: string) => {
    if (title.includes("Frontend")) return Code2;
    if (title.includes("Backend")) return Server;
    if (title.includes("Database")) return Database;
    return Terminal;
  };

  return (
    <section id="skills" className="relative py-28 bg-[#080d1e]/60 border-t border-white/[0.06]">
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Skills &amp; Modern <span className="text-gradient-primary">Tech Stack</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base max-w-2xl">
            A comprehensive overview of my programming languages, frameworks, cloud databases, and development tooling.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md shadow-indigo-500/20"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search skills (e.g. React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="space-y-10">
          {filteredCategories.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-white/[0.02] border border-white/5">
              <p className="text-zinc-400 text-sm">No skills found matching &quot;{searchQuery}&quot;</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-3 text-cyan-400 hover:underline text-xs"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredCategories.map((categoryGroup, groupIdx) => {
              const CategoryIcon = getCategoryIcon(categoryGroup.title);
              return (
                <div key={groupIdx} className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{categoryGroup.title}</h3>
                      <p className="text-xs text-zinc-400">{categoryGroup.description}</p>
                    </div>
                  </div>

                  {/* Skills Grid for this Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categoryGroup.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="group p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400/40 group-hover:bg-cyan-500/10 transition-all shrink-0">
                              <TechIcon name={skill.name} className="w-4 h-4" />
                            </div>
                            <span className="font-semibold text-sm text-zinc-200 group-hover:text-white transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-zinc-400 border border-white/5">
                            {skill.experience}
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative w-full h-2 rounded-full bg-white/[0.06] overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 group-hover:from-indigo-400 group-hover:to-cyan-300 transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>

                        <div className="mt-2 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                          <span>Proficiency</span>
                          <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Emerging Radar Highlight Card */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-cyan-950/40 border border-indigo-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-400">
              <Flame className="w-6 h-6 text-amber-400 animate-bounce" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                Currently Exploring &amp; Expanding
                <span className="px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 text-xs font-mono">
                  Future Stack
                </span>
              </h4>
              <p className="text-xs text-zinc-400 mt-1">
                Constantly learning cutting-edge engineering paradigms: AI Agent Architectures, Rust-based tooling, Turborepo monorepos, and WebAssembly.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {["AI Agent SDKs", "Turborepo", "Rust", "WebAssembly", "Cloudflare Workers"].map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-mono text-zinc-300"
              >
                ⚡ {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
