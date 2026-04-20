"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  staggerChild,
  viewportOnce,
} from "@/app/lib/animations";

export default function CaseStudy() {
  return (
    <section id="case-study" className="relative py-12 sm:py-24  bg-[#060913] overflow-hidden">
      {/* Cinematic Lighting Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] right-[10%] w-[60rem] h-[60rem] bg-indigo-500/5 blur-[150px] rounded-full mix-blend-screen opacity-60" />
        <div className="absolute bottom-[-10%] -left-[10%] w-[40rem] h-[40rem] bg-cyan-500/5 blur-[120px] rounded-full mix-blend-screen opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.div variants={staggerChild} className="flex justify-center items-center gap-4 mb-6">
            <span className="h-px w-8 bg-indigo-500/50"></span>
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 uppercase tracking-[0.2em]">
              Case Study
            </span>
            <span className="h-px w-8 bg-cyan-500/50"></span>
          </motion.div>
          <motion.h2
            variants={staggerChild}
            className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]"
          >
            Real Results, <br className="sm:hidden" />
            <span className="text-slate-400 font-light">Real Impact.</span>
          </motion.h2>
        </motion.div>

        {/* Featured Story Card */}
        <motion.div
          className="relative rounded-[2.5rem] bg-[#0A0E17]/60 backdrop-blur-3xl border border-white/[0.05] shadow-2xl p-[1px] overflow-hidden group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle Outer Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <div className="relative rounded-[2.4rem] bg-[#0A0E17]/90 p-8 sm:p-12 lg:p-16 overflow-hidden">

            {/* Top Vignette overlay */}
            <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">

              {/* Left Story Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                  <span className="text-xs font-semibold text-slate-300 tracking-wide">
                    Retail & E-Commerce
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-[1.2] tracking-tight">
                  Global Retailer Cuts Costs by <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">60%</span> with Cloud Migration
                </h3>

                <p className="text-slate-400 text-lg leading-relaxed mb-10 font-light max-w-lg">
                  A leading retail chain with 2,000+ stores struggled with legacy
                  on-premise systems. We architected and executed a full cloud
                  migration to AWS, implementing microservices and real-time analytics —
                  resulting in dramatic cost savings and uncompromising uptime.
                </p>

                {/* Data Metrics */}
                <div className="grid grid-cols-3 gap-6 mb-10">
                  {[
                    { value: "60%", label: "Cost Reduction", color: "indigo" },
                    { value: "99.99%", label: "System Uptime", color: "emerald" },
                    { value: "3x", label: "Faster Deploys", color: "cyan" },
                  ].map((result, i) => (
                    <motion.div
                      key={result.label}
                      className="group/metric relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewportOnce}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                    >
                      <div className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight group-hover/metric:text-transparent group-hover/metric:bg-clip-text group-hover/metric:bg-gradient-to-r group-hover/metric:from-white group-hover/metric:to-slate-400 transition-all duration-300">
                        {result.value}
                      </div>
                      <div className="h-px w-8 bg-white/20 mb-2 group-hover/metric:w-12 transition-all duration-300" />
                      <div className="text-xs text-slate-500 font-medium tracking-wide uppercase">
                        {result.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Cinematic CTA */}
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-3 text-white font-medium text-sm group/cta"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="relative overflow-hidden">
                    <span className="block transition-transform duration-300 group-hover/cta:-translate-y-full">Read Full Case Study</span>
                    <span className="absolute inset-0 block transition-transform duration-300 translate-y-full group-hover/cta:translate-y-0 text-indigo-400">Read Full Case Study</span>
                  </span>
                  <svg className="w-4 h-4 text-slate-500 group-hover/cta:text-indigo-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </motion.div>

              {/* Right — Visual Prototype Showcase */}
              <motion.div
                className="relative lg:pl-10 h-full flex items-center justify-center"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              >
                {/* Floating Glass Panels */}
                <motion.div
                  className="relative w-full max-w-md aspect-[4/3] bg-gradient-to-b from-white/[0.04] to-transparent rounded-[2rem] border border-white/[0.08] shadow-2xl overflow-hidden backdrop-blur-md p-6"
                  whileHover={{ y: -5, rotateX: 2, rotateY: -2 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  style={{ perspective: 1000 }}
                >
                  {/* Subtle Top Glow inside the container */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent shadow-[0_0_15px_rgba(129,140,248,0.5)]" />

                  {/* Mock Analytics Dashboard */}
                  <div className="flex flex-col h-full space-y-5">

                    {/* Top Stats Row */}
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div
                        className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportOnce}
                        transition={{ delay: 0.5, duration: 0.6 }}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 px-0.5" />
                          <span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">Active Nodes</span>
                        </div>
                        <div className="text-2xl font-bold text-white tracking-tight">12,408</div>
                      </motion.div>

                      <motion.div
                        className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportOnce}
                        transition={{ delay: 0.6, duration: 0.6 }}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                          <span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">Latency</span>
                        </div>
                        <div className="text-2xl font-bold text-white tracking-tight">12ms</div>
                      </motion.div>
                    </div>

                    {/* Chart Area */}
                    <motion.div
                      className="flex-1 bg-[#0A0E17]/50 border border-white/[0.03] rounded-xl p-5 relative overflow-hidden group/chart"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={viewportOnce}
                      transition={{ delay: 0.7, duration: 0.6 }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">OpEx Optimization</span>
                        <div className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">
                          -60.4%
                        </div>
                      </div>

                      {/* Animated Bars */}
                      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between h-24 gap-1.5 z-10">
                        {[90, 85, 70, 75, 45, 30, 25, 20, 22, 18, 15, 12, 10, 8].map((h, i) => (
                          <motion.div
                            key={i}
                            className={`w-full rounded-t-sm bg-gradient-to-t ${i > 7 ? 'from-emerald-500/40 to-emerald-400/80 shadow-[0_0_10px_rgba(52,211,153,0.3)]' : 'from-indigo-500/20 to-indigo-500/40'}`}
                            initial={{ height: "0%" }}
                            whileInView={{ height: `${h}%` }}
                            viewport={viewportOnce}
                            transition={{ delay: 0.8 + i * 0.05, duration: 0.8, ease: "easeOut" }}
                          />
                        ))}
                      </div>

                      {/* Chart Grid Lines */}
                      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px)_0_-1px,linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)_0_0] bg-[length:1rem_1rem]" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
