"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { viewportOnce } from "@/app/lib/animations";

/* ── Steps Data ──────────────────────────────── */
const steps = [
  {
    number: "01",
    title: "Ideation & Concept",
    description:
      "Brainstorming game mechanics, defining target audience, market research, and establishing the creative vision for your project.",
    icon: "💡",
    color: "from-indigo-500 to-blue-500",
    glowColor: "rgba(99,102,241,0.3)",
  },
  {
    number: "02",
    title: "Game Design & Storyboarding",
    description:
      "Creating detailed game design documents, lore, character development, level design, and visual storyboards.",
    icon: "🎨",
    color: "from-purple-500 to-violet-500",
    glowColor: "rgba(139,92,246,0.3)",
  },
  {
    number: "03",
    title: "Prototyping",
    description:
      "Building playable prototypes to test core mechanics, validate gameplay loops, and iterate on the experience early.",
    icon: "🔧",
    color: "from-cyan-500 to-teal-500",
    glowColor: "rgba(6,182,212,0.3)",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Full-scale game development including asset creation, programming, UI/UX, audio design, and systems integration.",
    icon: "⚙️",
    color: "from-emerald-500 to-green-500",
    glowColor: "rgba(16,185,129,0.3)",
  },
  {
    number: "05",
    title: "Testing & QA",
    description:
      "Rigorous quality assurance including playtesting, performance optimization, bug fixing, and platform certification.",
    icon: "🧪",
    color: "from-amber-500 to-orange-500",
    glowColor: "rgba(245,158,11,0.3)",
  },
  {
    number: "06",
    title: "Launch & Scaling",
    description:
      "Deployment across target platforms, marketing support, live-ops infrastructure, community building, and post-launch updates.",
    icon: "🚀",
    color: "from-rose-500 to-pink-500",
    glowColor: "rgba(244,63,94,0.3)",
  },
];

/* ── Step Card ───────────────────────────────── */
function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`flex items-center gap-8 ${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      }`}
    >
      {/* Card */}
      <div className="flex-1">
        <motion.div
          whileHover={{ y: -4 }}
          className="relative p-8 rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl group overflow-hidden"
        >
          {/* Glow accent */}
          <div
            className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-700"
            style={{ background: step.glowColor }}
          />

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl">{step.icon}</span>
              <div
                className={`text-xs font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${step.color}`}
              >
                Step {step.number}
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {step.description}
            </p>
          </div>

          {/* Bottom accent line */}
          <div
            className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
          />
        </motion.div>
      </div>

      {/* Timeline Node */}
      <div className="relative flex-shrink-0 hidden md:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-sm shadow-lg z-10 relative`}
          style={{ boxShadow: `0 0 30px ${step.glowColor}` }}
        >
          {step.number}
        </motion.div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}

export default function DevProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-[#05070F] overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] rounded-full blur-[160px] opacity-10 bg-purple-600 mix-blend-screen"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[-5%] w-[35vw] h-[35vw] rounded-full blur-[140px] opacity-10 bg-cyan-600 mix-blend-screen"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-xs font-semibold text-white/80 uppercase tracking-widest">
                Our Process
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
            From Concept to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Launch
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-slate-400 font-light leading-relaxed max-w-2xl mx-auto"
          >
            Our battle-tested development process ensures your game project
            moves from an idea to a polished, market-ready product.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/[0.06] hidden md:block">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <StepCard key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
