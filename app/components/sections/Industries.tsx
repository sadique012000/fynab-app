"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  staggerContainer,
  staggerChild,
  viewportOnce,
} from "@/app/lib/animations";
import { IndustryCard } from "@/app/components/IndustryCard";

// Deep, neon-inspired premium color palette mapped to industries
const colorMap: Record<
  string,
  {
    gradient: string;
    activeGradient: string;
    border: string;
    activeBorder: string;
    text: string;
    glow: string;
    glowColor: string;
    iconBg: string;
    activeIconBg: string;
    iconColor: string;
  }
> = {
  rose: {
    gradient: "from-rose-500/5 to-rose-500/0",
    activeGradient: "from-rose-500/20 via-rose-500/5 to-transparent",
    border: "border-white/[0.04]",
    activeBorder: "border-rose-500/40",
    text: "text-rose-400",
    glow: "shadow-[0_0_40px_-5px_rgba(244,63,94,0.4)]",
    glowColor: "rgba(244,63,94,0.3)",
    iconBg: "bg-white/[0.02]",
    activeIconBg: "bg-rose-500/20 shadow-[0_0_30px_rgba(244,63,94,0.5)]",
    iconColor: "text-rose-400",
  },
  emerald: {
    gradient: "from-emerald-500/5 to-emerald-500/0",
    activeGradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    border: "border-white/[0.04]",
    activeBorder: "border-emerald-500/40",
    text: "text-emerald-400",
    glow: "shadow-[0_0_40px_-5px_rgba(16,185,129,0.4)]",
    glowColor: "rgba(16,185,129,0.3)",
    iconBg: "bg-white/[0.02]",
    activeIconBg: "bg-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.5)]",
    iconColor: "text-emerald-400",
  },
  amber: {
    gradient: "from-amber-500/5 to-amber-500/0",
    activeGradient: "from-amber-500/20 via-amber-500/5 to-transparent",
    border: "border-white/[0.04]",
    activeBorder: "border-amber-500/40",
    text: "text-amber-400",
    glow: "shadow-[0_0_40px_-5px_rgba(245,158,11,0.4)]",
    glowColor: "rgba(245,158,11,0.3)",
    iconBg: "bg-white/[0.02]",
    activeIconBg: "bg-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.5)]",
    iconColor: "text-amber-400",
  },
  cyan: {
    gradient: "from-cyan-500/5 to-cyan-500/0",
    activeGradient: "from-cyan-500/20 via-cyan-500/5 to-transparent",
    border: "border-white/[0.04]",
    activeBorder: "border-cyan-500/40",
    text: "text-cyan-400",
    glow: "shadow-[0_0_40px_-5px_rgba(6,182,212,0.4)]",
    glowColor: "rgba(6,182,212,0.3)",
    iconBg: "bg-white/[0.02]",
    activeIconBg: "bg-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.5)]",
    iconColor: "text-cyan-400",
  },
  violet: {
    gradient: "from-violet-500/5 to-violet-500/0",
    activeGradient: "from-violet-500/20 via-violet-500/5 to-transparent",
    border: "border-white/[0.04]",
    activeBorder: "border-violet-500/40",
    text: "text-violet-400",
    glow: "shadow-[0_0_40px_-5px_rgba(139,92,246,0.4)]",
    glowColor: "rgba(139,92,246,0.3)",
    iconBg: "bg-white/[0.02]",
    activeIconBg: "bg-violet-500/20 shadow-[0_0_30px_rgba(139,92,246,0.5)]",
    iconColor: "text-violet-400",
  },
  indigo: {
    gradient: "from-indigo-500/5 to-indigo-500/0",
    activeGradient: "from-indigo-500/20 via-indigo-500/5 to-transparent",
    border: "border-white/[0.04]",
    activeBorder: "border-indigo-500/40",
    text: "text-indigo-400",
    glow: "shadow-[0_0_40px_-5px_rgba(99,102,241,0.4)]",
    glowColor: "rgba(99,102,241,0.3)",
    iconBg: "bg-white/[0.02]",
    activeIconBg: "bg-indigo-500/20 shadow-[0_0_30px_rgba(99,102,241,0.5)]",
    iconColor: "text-indigo-400",
  },
};

const industries = [
  {
    name: "Healthcare",
    description: "HIPAA-compliant tech for modern hospitals, clinics, and health startups.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: "rose",
    image: "1441986300917-64674bd600d8"
  },
  {
    name: "Finance & Banking",
    description: "Secure fintech layers and strict regulatory compliance controls.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "emerald",
    image: "1563986768609-322da13575f3"
  },
  {
    name: "Retail Matrix",
    description: "Scalable omnichannel, inventory, and deep behavioral analytics.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    color: "amber",
    image: "1441986300917-64674bd600d8"
  },
  {
    name: "Education",
    description: "Next-gen LMS, interactive portals, and virtual classroom connectivity.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    color: "violet",
    image: "1586528116311-ad8dd3c8310d"
  },
  {
    name: "Manufacturing",
    description: "IoT sensory networks, supply-chain monitoring, and automated QA.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    color: "cyan",
    image: "1581091226825-a6a2a5aee158"
  },
  {
    name: "Logistics",
    description: "Real-time routing engines and predictive global tracking solutions.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "indigo",
    image: "1586528116311-ad8dd3c8310d"
  },
];

export default function Industries() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section id="industries" className="relative py-12 sm:py-24 bg-[#05070F] overflow-hidden selection:bg-indigo-500/30">
      {/* Background Deep Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[url(&apos;https://grainy-gradients.vercel.app/noise.svg&apos;)] opacity-[0.03] mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070F] via-transparent to-[#05070F]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.div variants={staggerChild} className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-indigo-500/50"></span>
            <span className="text-sm font-semibold text-indigo-400 uppercase tracking-widest drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]">
              Industrial Mastery
            </span>
          </motion.div>
          <motion.h2
            variants={staggerChild}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            Engineered for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Specialized Verticals.
            </span>
          </motion.h2>
          <motion.p
            variants={staggerChild}
            className="text-xl text-slate-400 max-w-2xl font-light leading-relaxed"
          >
            We deploy dynamic, tailored architectures that solve the unique technical constraints of your industry, at an enterprise scale.
          </motion.p>
        </motion.div>

        {/* Desktop Expanding Flex Gallery */}
        <div className="hidden lg:flex w-full h-[550px] gap-4">
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.name}
              industry={industry}
              index={index}
              isActive={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              theme={colorMap[industry.color] || colorMap.indigo}
            />
          ))}
        </div>

        {/* Mobile / Tablet View (Stacked Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.name}
              industry={industry}
              index={index}
              isActive={false} // Mobiles cards are always "active" in their own way, or we don't use flex expansion
              onHover={() => { }}
              theme={colorMap[industry.color] || colorMap.indigo}
              isMobile={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
