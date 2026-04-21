"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { viewportOnce } from "@/app/lib/animations";

/* ── Features Data ───────────────────────────── */
const features = [
  {
    id: "multiplayer",
    title: "Real-Time Multiplayer",
    description:
      "Build seamless multiplayer experiences with low-latency networking, real-time synchronization, matchmaking systems, and lobby management. Our architecture handles thousands of concurrent players without breaking a sweat.",
    highlights: [
      "Sub-50ms latency networking",
      "Deterministic lockstep & rollback",
      "Smart matchmaking algorithms",
      "Anti-cheat integration",
    ],
    gradient: "from-cyan-500 to-blue-500",
    glowColor: "rgba(6,182,212,0.2)",
    icon: "🌐",
    visualGradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
  },
  {
    id: "ai-npcs",
    title: "AI-Driven NPCs",
    description:
      "Create believable, intelligent non-player characters using advanced AI behavior trees, machine learning, and procedural dialogue systems. Our NPCs learn, adapt, and create dynamic player interactions.",
    highlights: [
      "Behavior tree architecture",
      "ML-powered decision making",
      "Procedural dialogue generation",
      "Dynamic difficulty adjustment",
    ],
    gradient: "from-purple-500 to-violet-500",
    glowColor: "rgba(139,92,246,0.2)",
    icon: "🧠",
    visualGradient: "from-purple-500/20 via-violet-500/10 to-transparent",
  },
  {
    id: "rendering",
    title: "High-Performance Rendering",
    description:
      "Push visual boundaries with cutting-edge rendering techniques including ray tracing, PBR materials, volumetric lighting, and optimized shader pipelines for consistent 60+ FPS across all platforms.",
    highlights: [
      "Real-time ray tracing",
      "PBR material pipeline",
      "Volumetric effects",
      "LOD & occlusion culling",
    ],
    gradient: "from-amber-500 to-orange-500",
    glowColor: "rgba(245,158,11,0.2)",
    icon: "✨",
    visualGradient: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
  {
    id: "cross-platform",
    title: "Cross-Platform Sync",
    description:
      "Play anywhere with unified cross-platform architecture. Sync progress, achievements, and purchases across mobile, PC, and console with real-time cloud saves and seamless platform switching.",
    highlights: [
      "Cloud save infrastructure",
      "Cross-platform matchmaking",
      "Unified account systems",
      "Platform-specific optimizations",
    ],
    gradient: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16,185,129,0.2)",
    icon: "🔄",
    visualGradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    id: "monetization",
    title: "Monetization Systems",
    description:
      "Implement ethical, player-friendly monetization strategies including IAP systems, battle passes, cosmetic stores, and subscription models — all backed by analytics for optimal revenue generation.",
    highlights: [
      "In-app purchase systems",
      "Battle pass mechanics",
      "LiveOps & events engine",
      "Revenue analytics dashboard",
    ],
    gradient: "from-rose-500 to-pink-500",
    glowColor: "rgba(244,63,94,0.2)",
    icon: "💰",
    visualGradient: "from-rose-500/20 via-pink-500/10 to-transparent",
  },
];

export default function FeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = features[activeIndex];

  return (
    <section className="relative py-32 bg-[#020205] overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[30%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[160px] opacity-10 bg-indigo-600 mix-blend-screen"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-white/80 uppercase tracking-widest">
                Feature Highlights
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-8"
          >
            Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400">
              Excellence
            </span>
          </motion.h2>
        </div>

        {/* Feature Selector + Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Feature tabs */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 hide-scrollbar">
            {features.map((feature, index) => (
              <motion.button
                key={feature.id}
                onClick={() => setActiveIndex(index)}
                whileHover={{ x: 4 }}
                className={`flex-shrink-0 text-left w-full px-5 py-4 rounded-2xl border transition-all duration-300 group ${
                  activeIndex === index
                    ? "bg-white/[0.05] border-white/[0.12]"
                    : "bg-transparent border-white/[0.04] hover:bg-white/[0.02] hover:border-white/[0.08]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{feature.icon}</span>
                  <span
                    className={`text-sm font-semibold transition-colors ${
                      activeIndex === index
                        ? "text-white"
                        : "text-slate-400 group-hover:text-slate-300"
                    }`}
                  >
                    {feature.title}
                  </span>
                </div>
                {/* Active indicator */}
                {activeIndex === index && (
                  <motion.div
                    layoutId="feature-indicator"
                    className={`mt-3 h-0.5 rounded-full bg-gradient-to-r ${feature.gradient}`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Feature display */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Visual */}
                <div className="relative rounded-3xl overflow-hidden border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl mb-8 aspect-[16/9]">
                  {/* Dynamic gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${active.visualGradient}`}
                  />

                  {/* Animated content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.15, 0.3, 0.15],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className={`w-64 h-64 rounded-full bg-gradient-to-br ${active.gradient} blur-[80px]`}
                    />
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                      className="text-8xl"
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {active.icon}
                    </motion.span>
                  </div>

                  {/* Grid pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />

                  {/* Noise */}
                  <div
                    className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                  />
                </div>

                {/* Text Content */}
                <div>
                  <h3
                    className={`text-2xl font-bold text-white mb-4`}
                  >
                    {active.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {active.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {active.highlights.map((highlight, i) => (
                      <motion.div
                        key={highlight}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-center gap-3 text-sm text-slate-300"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${active.gradient} shadow-[0_0_8px_${active.glowColor}]`}
                        />
                        {highlight}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
