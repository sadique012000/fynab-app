"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  staggerChild,
  viewportOnce,
} from "@/app/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#05070F] selection:bg-indigo-500/30">
      {/* Background Lighting & Depth */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Core Spotlight */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] sm:w-[1200px] h-[600px] bg-gradient-to-b from-indigo-500/15 via-cyan-500/5 to-transparent blur-[100px] rounded-[100%] opacity-80 mix-blend-screen" />
        
        {/* Ambient Blobs */}
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[130px] rounded-full mix-blend-screen"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[20%] left-[5%] w-[600px] h-[600px] bg-cyan-600/10 blur-[140px] rounded-full mix-blend-screen"
        />
        
        {/* Subtle Texture & Vignette */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.025] mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070F] via-transparent to-[#05070F]/50" />
        
        {/* Particles / Stars (Static representation for performance, can be animated) */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3 + 0.1,
                filter: "blur(1px)",
              }}
              animate={{
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={viewportOnce}
        >
          {/* Badge */}
          <motion.div
            variants={staggerChild}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl mb-10 group cursor-default hover:bg-white/[0.04] hover:border-white/[0.12] transition-colors duration-500"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
            </span>
            <span className="text-sm font-medium text-slate-300 tracking-wide group-hover:text-white transition-colors">
              Trusted by 200+ Enterprises Worldwide
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-black text-white leading-[1.05] tracking-tighter mb-8"
          >
            Transform Your Business with{" "}
            <br className="hidden md:block" />
            <span className="relative inline-block mt-2 lg:mt-4">
              <span className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-cyan-400/20 blur-[40px] pointer-events-none" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-300">
                Next-Gen IT Solutions
              </span>
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto mb-12"
          >
            We partner with forward-thinking organizations to design, build, and
            scale technology solutions that drive real business impact — from
            cloud infrastructure to AI-powered applications.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-indigo-600 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(79,70,229,0.4)] hover:shadow-[0_0_60px_rgba(79,70,229,0.7)] transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-[shine_1.5s_ease-in-out_infinite]" />
              <span className="relative z-10 flex items-center gap-2">
                Schedule a Consultation
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </motion.a>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-300 bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/[0.08] shadow-sm hover:text-white transition-all duration-500"
            >
              Explore Services
            </motion.a>
          </motion.div>

          {/* Quick stats / Separator */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 mt-24 pt-10 border-t border-white/[0.06] relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
            
            {[
              { value: "200+", label: "Clients Served" },
              { value: "98%", label: "Client Retention" },
              { value: "15+", label: "Years of Excellence" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center group relative p-4"
              >
                <div className="absolute inset-0 bg-indigo-500/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-2 drop-shadow-[0_0_12px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-500">
                  {stat.value}
                </div>
                <div className="relative text-sm font-medium text-slate-500 tracking-wider uppercase group-hover:text-cyan-400 transition-colors duration-500">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Tailwind custom animation for shine effect inside Hero scope */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shine {
          100% { left: 200%; }
        }
      `}} />
    </section>
  );
}
