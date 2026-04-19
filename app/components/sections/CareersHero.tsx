"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/app/lib/animations";

export default function CareersHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[#05070F]">
      {/* Background Depth */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-gradient-to-b from-indigo-500/10 via-cyan-500/5 to-transparent blur-[120px] rounded-full opacity-60" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={viewportOnce}
          className="max-w-3xl mx-auto"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 rounded-full"
          >
            Careers at Fynab
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-black text-white leading-tight mb-8"
          >
            Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">future</span> with us
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-xl text-slate-400 leading-relaxed mb-10"
          >
            We're on a mission to redefine the future of IT solutions. 
            Join our remote-first team of innovators, thinkers, and builders.
          </motion.p>

          <motion.div variants={fadeUp}>
            <button
              onClick={() => document.getElementById("open-roles")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:shadow-[0_0_50px_rgba(79,70,229,0.5)] transform hover:-translate-y-1"
            >
              View Open Roles
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
