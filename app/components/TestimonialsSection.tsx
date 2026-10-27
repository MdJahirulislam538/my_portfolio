"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Quote, CheckCircle2, MessageSquareHeart } from "lucide-react";
import { TESTIMONIALS } from "../data/portfolioData";

export default function TestimonialsSection() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  const gradientColors = [
    "from-indigo-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-emerald-500 to-teal-500",
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-[#070a16]">
      {/* Glow Ambience */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-medium mb-3">
            <MessageSquareHeart className="w-3.5 h-3.5" />
            <span>CLIENT REPUTATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Trusted By Founders &amp; <span className="text-gradient-primary">Engineers</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base max-w-xl">
            Here is what past clients and engineering collaborators have said about my code quality, speed, and communication.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((testi, idx) => (
            <div
              key={idx}
              className="group p-6 sm:p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-lg"
            >
              <div>
                {/* Top Stars & Quote icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-white/10 group-hover:text-indigo-400/40 transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-sm text-zinc-300 leading-relaxed italic">
                  &ldquo;{testi.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/20 bg-zinc-800 flex items-center justify-center shrink-0">
                  {!imageErrors[idx] && testi.avatar ? (
                    <Image
                      src={testi.avatar}
                      alt={testi.name}
                      fill
                      sizes="44px"
                      className="object-cover"
                      onError={() =>
                        setImageErrors((prev) => ({ ...prev, [idx]: true }))
                      }
                    />
                  ) : (
                    <div
                      className={`w-full h-full bg-gradient-to-tr ${
                        gradientColors[idx % gradientColors.length]
                      } flex items-center justify-center font-bold text-white text-xs`}
                    >
                      {getInitials(testi.name)}
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    {testi.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  </h4>
                  <p className="text-xs text-zinc-400">{testi.role}</p>
                  <p className="text-[11px] text-indigo-400 font-mono">{testi.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
