"use client";

import { useState } from "react";
import {
  Code2,
  Server,
  Database,
  Terminal,
  Search,
  Cpu,
  Flame,
  Layers,
} from "lucide-react";
import { TechIcon } from "./TechIcons";
import { SKILL_CATEGORIES } from "../data/portfolioData";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", ...SKILL_CATEGORIES.map((c) => c.title)];

  // Total count of unique skills
  const totalSkillsCount = SKILL_CATEGORIES.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );

  // Filter skills by category and search
  const filteredCategories = SKILL_CATEGORIES.filter((category) => {
    if (activeCategory !== "All" && category.title !== activeCategory) {
      return false;
    }
    return true;
  })
    .map((cat) => {
      const matchingSkills = cat.skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return {
        ...cat,
        skills: matchingSkills,
      };
    })
    .filter((cat) => cat.skills.length > 0);

  const getCategoryIcon = (title: string) => {
    if (title.includes("Frontend")) return Code2;
    if (title.includes("UI/UX") || title.includes("Design")) return Layers;
    if (title.includes("Backend") || title.includes("Database")) return Server;
    return Terminal;
  };

  return (
    <section id="skills" className="relative py-28 bg-[#080d1e]/70 border-t border-white/[0.06]">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 right-8 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-12 left-8 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>CORE CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Technical Stack &amp; <span className="text-gradient-primary">Technologies</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base max-w-2xl">
            A comprehensive showcase of modern frameworks, tools, design platforms, and cloud databases I specialize in.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{totalSkillsCount}+ Production Technologies &amp; Tools</span>
          </div>
        </div>

        {/* Filter Bar: Category Tabs & Real-time Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-14">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 scale-105"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search tech (e.g. React, Figma)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors shadow-inner"
            />
          </div>
        </div>

        {/* Skills Display: Large Icons and Bold Names Only */}
        <div className="space-y-14">
          {filteredCategories.length === 0 ? (
            <div className="p-16 text-center rounded-3xl bg-white/[0.02] border border-white/5">
              <p className="text-zinc-400 text-base">No technology found matching &quot;{searchQuery}&quot;</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 text-xs font-semibold transition-colors"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            filteredCategories.map((categoryGroup, groupIdx) => {
              const CategoryIcon = getCategoryIcon(categoryGroup.title);
              return (
                <div key={groupIdx} className="space-y-6">
                  {/* Category Title Banner */}
                  <div className="flex items-center gap-3.5 pb-2 border-b border-white/[0.06]">
                    <div className="p-2.5 rounded-2xl bg-indigo-500/15 border border-indigo-500/25 text-indigo-400">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                        {categoryGroup.title}
                        <span className="text-xs font-normal text-zinc-400 font-mono">
                          ({categoryGroup.skills.length})
                        </span>
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">{categoryGroup.description}</p>
                    </div>
                  </div>

                  {/* Large Icon & Name Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
                    {categoryGroup.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="group relative p-6 sm:p-7 rounded-3xl bg-[#0c1224]/80 hover:bg-[#111933] border border-white/[0.08] hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/15 flex flex-col items-center justify-center text-center gap-4 cursor-default overflow-hidden"
                      >
                        {/* Top subtle shine effect */}
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        {/* Extra-Large Icon Container */}
                        <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl bg-gradient-to-b from-[#141d38] to-[#0a0f1e] border border-white/10 group-hover:border-cyan-400/60 group-hover:bg-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl shadow-black/40">
                          <TechIcon name={skill.name} className="w-11 h-11 sm:w-12 sm:h-12 drop-shadow-md" />
                        </div>

                        {/* Technology Name - Large, Bold, Clear */}
                        <div className="w-full">
                          <span className="block font-bold text-sm sm:text-base text-zinc-100 group-hover:text-cyan-300 transition-colors tracking-tight line-clamp-2">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Future Stack & Innovation Radar */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-cyan-950/40 border border-indigo-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-400">
              <Flame className="w-6 h-6 text-amber-400 animate-bounce" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                Currently Exploring &amp; Expanding
                <span className="px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 text-xs font-mono font-medium">
                  Next Horizon
                </span>
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Continuous learning in advanced AI Agent Architectures, Rust tooling, Turborepo monorepos, and WebAssembly.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {["AI Agent SDKs", "Turborepo", "Rust Tooling", "WebAssembly", "Cloudflare Workers"].map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-mono text-zinc-300 hover:border-cyan-400/40 transition-colors"
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
