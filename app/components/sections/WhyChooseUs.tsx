"use client";
/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion";
import {
  slideInLeft,
  viewportOnce,
} from "@/app/lib/animations";

const noiseTexture =
  "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.07'/%3E%3C/svg%3E";

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Expert Team",
    description: "200+ certified engineers, architects, and consultants with deep domain expertise.",
    color: "from-indigo-500/20 to-indigo-500/0",
    border: "group-hover:border-indigo-500/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(79,70,229,0.15)]",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Proven Results",
    description: "98% client retention rate with measurable ROI delivered on every engagement.",
    color: "from-cyan-500/20 to-cyan-500/0",
    border: "group-hover:border-cyan-500/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Agile Delivery",
    description: "Rapid iteration with 2-week sprints, continuous feedback, and transparent communication.",
    color: "from-emerald-500/20 to-emerald-500/0",
    border: "group-hover:border-emerald-500/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Security First",
    description: "SOC 2 Type II certified, ISO 27001 compliant, with zero security breaches in 15 years.",
    color: "from-rose-500/20 to-rose-500/0",
    border: "group-hover:border-rose-500/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(225,29,72,0.15)]",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Global Reach",
    description: "Offices in 8 countries with 24/7 support coverage across all time zones.",
    color: "from-amber-500/20 to-amber-500/0",
    border: "group-hover:border-amber-500/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: "Innovation Led",
    description: "Dedicated R&D lab investing in emerging technologies like AI, blockchain, and quantum computing.",
    color: "from-violet-500/20 to-violet-500/0",
    border: "group-hover:border-violet-500/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
  },
];

const featureCardVariant = {
  hidden: () => ({
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
  }),
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 20,
      delay: i * 0.1,
    },
  }),
};

export default function WhyChooseUs() {
  return (
    <section className="relative py-32 bg-[#060913] overflow-hidden selection:bg-indigo-500/30">
      {/* Immersive Dark Theme Backgrounds */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.15]" 
        style={{ backgroundImage: noiseTexture }} 
      />
      <div className="absolute top-0 left-[-20%] w-[60rem] h-[60rem] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50rem] h-[50rem] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] left-[30%] w-[30rem] h-[30rem] bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">
          
          {/* Left Content Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideInLeft}
            className="flex flex-col"
          >
            {/* Premium Label */}
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-10 bg-indigo-500/50"></span>
              <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 uppercase tracking-[0.2em]">
                Why Fynab
              </span>
            </div>

            {/* High-Contrast Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
              Engineered for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 via-cyan-400 to-emerald-300">
                absolute scale.
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-slate-400 mb-12 leading-relaxed font-light max-w-lg">
              We combine deep technical expertise with relentless execution to deliver
              systems that don&apos;t just work — they drive your strategic horizon.
            </p>

            {/* Glowing Special Highlight Card */}
            <motion.div
              className="relative p-1 rounded-3xl bg-gradient-to-br from-white/10 to-white/0 shadow-2xl max-w-md group"
              whileHover={{ y: -5 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ 
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                type: "spring", stiffness: 300 
              }}
            >
              <div className="absolute inset-0 bg-indigo-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
              
              <div className="relative flex items-start gap-5 p-6 rounded-[1.4rem] bg-[#0A0E17]/90 backdrop-blur-xl border border-white/[0.08] group-hover:border-indigo-500/30 transition-colors duration-500">
                <motion.div
                  className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 p-[1px] relative"
                >
                  <div className="absolute inset-0 blur-md bg-gradient-to-br from-indigo-500 to-cyan-400 opacity-60" />
                  <div className="relative w-full h-full bg-[#0A0E17] rounded-2xl flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="url(#gradient)" strokeWidth={2}>
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#818cf8" />
                          <stop offset="100%" stopColor="#22d3ee" />
                        </linearGradient>
                      </defs>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                    </svg>
                  </div>
                </motion.div>
                
                <div>
                  <h4 className="font-bold text-white mb-1.5 text-lg">
                    Certified Excellence
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">
                    AWS Advanced Partner, Microsoft Gold, Google Cloud Premier — backed by highest-tier certifications.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Features Grid */}
          <motion.div
            className="grid sm:grid-cols-2 gap-4 lg:gap-6 relative"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                custom={i}
                variants={featureCardVariant}
                whileHover="hover"
                className={`group relative p-6 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm overflow-hidden transition-all duration-500 cursor-default ${feature.glow} ${feature.border}`}
              >
                {/* Internal Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <motion.div
                    className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 text-slate-300 flex items-center justify-center mb-6 shadow-lg backdrop-blur-md"
                    variants={{
                      hover: { 
                        scale: 1.1, 
                        rotate: 5,
                        color: "#fff",
                        backgroundColor: "rgba(255,255,255,0.1)",
                        borderColor: "rgba(255,255,255,0.2)"
                      }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    {feature.icon}
                  </motion.div>

                  <h3 className="font-semibold text-white mb-2 text-base group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-light group-hover:text-slate-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

