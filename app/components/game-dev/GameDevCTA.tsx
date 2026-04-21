"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  staggerChild,
  viewportOnce,
  tapScale,
} from "@/app/lib/animations";

export default function GameDevCTA() {
  return (
    <section className="relative py-32 bg-[#020205] overflow-hidden">
      {/* ── Ambient Glow Background ───────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-indigo-600/20 blur-[140px] rounded-full opacity-40" />
        <div className="absolute bottom-[0%] right-[10%] w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full opacity-40" />
        <div className="absolute top-[40%] right-[30%] w-[300px] h-[300px] bg-purple-500/15 blur-[120px] rounded-full opacity-30" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative rounded-[2rem] p-12 sm:p-16 lg:p-20 overflow-hidden border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl shadow-[0_0_80px_rgba(99,102,241,0.15)]"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          {/* ── Gradient overlay ───────────────── */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-cyan-500/10 opacity-60" />

          {/* ── Floating glow elements ───────────────── */}
          <motion.div
            className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-500/20 blur-[120px] rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full"
            animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-500/15 blur-[100px] rounded-full"
            animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          />

          {/* ── Floating decorative shapes ───────────────── */}
          <motion.div
            className="absolute top-10 right-16 w-3 h-3 bg-indigo-400/50 rounded-full"
            animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-16 left-20 w-2 h-2 bg-cyan-400/50 rounded-full"
            animate={{ y: [0, 12, 0], x: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute top-1/3 left-10 w-4 h-4 border border-purple-400/30 rounded rotate-45"
            animate={{ rotate: [45, 90, 45], scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/3 right-12 w-6 h-1 bg-indigo-400/30 rounded-full"
            animate={{ scaleX: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />

          {/* ── Content ───────────────── */}
          <motion.div
            className="relative text-center max-w-3xl mx-auto"
            variants={staggerContainer}
          >
            {/* Game controller emoji accent */}
            <motion.div
              variants={staggerChild}
              className="flex justify-center mb-8"
            >
              <motion.span
                className="text-5xl"
                animate={{ y: [0, -8, 0], rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                🎮
              </motion.span>
            </motion.div>

            <motion.h2
              variants={staggerChild}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight"
            >
              Let&apos;s Build the Next{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Big Game
              </span>
            </motion.h2>

            <motion.p
              variants={staggerChild}
              className="text-lg text-slate-400 mb-10 leading-relaxed"
            >
              Whether you&apos;re a startup with a bold vision or an enterprise expanding
              your gaming portfolio — we have the expertise to make it happen.
            </motion.p>

            <motion.div
              variants={staggerChild}
              className="flex flex-col sm:flex-row items-center justify-center gap-5"
            >
              {/* ── Primary CTA ───────────────── */}
              <motion.a
                href="/contact"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 0 40px rgba(99,102,241,0.6)",
                }}
                whileTap={tapScale}
                className="relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl overflow-hidden group"
              >
                {/* gradient bg */}
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />

                {/* Shimmer sweep */}
                <span className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-[shine_1.5s_ease-in-out_infinite]" />

                {/* glow */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-indigo-400 to-cyan-400 blur-xl transition duration-500" />

                <span className="relative z-10 flex items-center gap-2">
                  Start a Project
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    whileHover={{ x: 4 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg>
                </span>
              </motion.a>

              {/* ── Secondary CTA ───────────────── */}
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={tapScale}
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-slate-300 border border-white/[0.1] rounded-xl backdrop-blur-md bg-white/[0.02] hover:bg-white/[0.05] hover:text-white transition-all"
              >
                Talk to Experts
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Shine keyframe */}
      <style
        dangerouslySetInnerHTML={{
          __html: `@keyframes shine { 100% { left: 200%; } }`,
        }}
      />
    </section>
  );
}
