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
  },
];

export default function Industries() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section id="industries" className="relative py-32 bg-[#05070F] overflow-hidden selection:bg-indigo-500/30">
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
          {industries.map((industry, index) => {
            const isActive = hoveredIndex === index;
            const theme = colorMap[industry.color] || colorMap.indigo;

            return (
              <motion.div
                key={industry.name}
                onHoverStart={() => setHoveredIndex(index)}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  layout: { type: "spring", stiffness: 200, damping: 25 },
                  opacity: { duration: 0.5, delay: index * 0.1 },
                  y: { duration: 0.5, delay: index * 0.1 }
                }}
                className={`relative h-full rounded-3xl cursor-pointer overflow-hidden group border transition-all duration-500 
                  ${isActive ? theme.activeBorder : theme.border} 
                  ${isActive ? theme.glow : ""} 
                  ${isActive ? "z-10 bg-[#0a0f1c]/90" : "z-0 bg-white/[0.02]"}`}
                style={{
                  flex: isActive ? 4 : 1, // Widens heavily on hover
                }}
              >
                {/* Dynamic Gradient Background for Active State */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${isActive ? theme.activeGradient : theme.gradient}`}
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Advanced Glassmorphism */}
                <div className="absolute inset-0 backdrop-blur-2xl pointer-events-none" />
                {isActive && (
                  <>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] mix-blend-screen rounded-full blur-[80px]" />
                    <div className={`absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-${industry.color}-500/10 to-transparent pointer-events-none`} />
                  </>
                )}

                <div className="relative z-10 w-full h-full flex flex-col items-center justify-end p-6 sm:p-8">
                  {/* Expanded Content View */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.95, position: "absolute" }}
                        transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
                        className="w-full flex-col items-start mb-auto pt-6 pl-4"
                      >
                        <motion.div
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", bounce: 0.5 }}
                          className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-white/[0.1] ${theme.activeIconBg} ${theme.iconColor}`}
                        >
                          {industry.icon}
                        </motion.div>
                        <h3 className="text-3xl font-extrabold text-white tracking-tight mb-4 pr-10 leading-tight drop-shadow-md">
                          {industry.name}
                        </h3>
                        <p className="text-slate-300 font-light leading-relaxed max-w-sm mb-10 text-lg">
                          {industry.description}
                        </p>

                        <motion.button
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className={`group flex items-center gap-3 font-semibold ${theme.text} hover:text-white transition-colors duration-300`}
                        >
                          Explore Solutions
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Compact Title (When not active) */}
                  <AnimatePresence>
                    {!isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, position: "absolute" }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center h-full justify-between w-full"
                      >
                        <div
                          className={`w-12 h-12 rounded-xl border border-white/[0.08] flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300 mb-4 ${theme.iconBg} ${theme.iconColor}`}
                        >
                          {industry.icon}
                        </div>
                        <div className="flex-1 flex items-end mb-8 relative">
                          <h3
                            className="text-lg font-bold text-slate-500 whitespace-nowrap transform -rotate-90 origin-bottom pb-6 tracking-[0.2em] uppercase opacity-70 group-hover:opacity-100 group-hover:text-slate-300 transition-all duration-300"
                          >
                            {industry.name}
                          </h3>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile / Tablet View (Stacked Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
          {industries.map((industry, index) => {
            const theme = colorMap[industry.color] || colorMap.indigo;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group rounded-3xl p-8 border border-white/[0.04] bg-[#0a0f1c]/80 backdrop-blur-xl overflow-hidden hover:border-white/[0.1] transition-all duration-500 hover:${theme.glow}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.activeGradient} opacity-0 group-hover:opacity-100 transition-duration-500`} />
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-white/[0.02] mix-blend-screen rounded-full blur-[40px] pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/[0.08] ${theme.activeIconBg} ${theme.iconColor}`}>
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{industry.name}</h3>
                  <p className="text-slate-400 font-light mb-8 leading-relaxed">{industry.description}</p>

                  <div className={`mt-auto flex items-center gap-2 font-semibold ${theme.text} hover:text-white transition-colors cursor-pointer`}>
                    Explore Solutions
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
