"use client";

import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerChild,
  viewportOnce,
} from "@/app/lib/animations";

const cultureItems = [
  {
    title: "Remote-First Culture",
    description:
      "Work from anywhere in the world. We believe talent isn't tied to a zip code.",
    gradient: "from-indigo-500/20 to-blue-500/10",
    icon: "🌐",
  },
  {
    title: "Innovation Fridays",
    description:
      "Every Friday is dedicated to experimentation, side projects, and pushing creative boundaries.",
    gradient: "from-purple-500/20 to-violet-500/10",
    icon: "💡",
  },
  {
    title: "Continuous Learning",
    description:
      "Annual learning budgets, conference sponsorships, and internal tech talks keep our team growing.",
    gradient: "from-cyan-500/20 to-teal-500/10",
    icon: "📚",
  },
  {
    title: "Work-Life Harmony",
    description:
      "Flexible hours, unlimited PTO, and a culture that respects your time outside of work.",
    gradient: "from-emerald-500/20 to-green-500/10",
    icon: "⚖️",
  },
  {
    title: "Open Communication",
    description:
      "Flat hierarchy, open Slack channels, and weekly all-hands ensure everyone has a voice.",
    gradient: "from-amber-500/20 to-orange-500/10",
    icon: "💬",
  },
  {
    title: "Impact-Driven",
    description:
      "We measure success by the real-world impact our work creates for clients and communities.",
    gradient: "from-rose-500/20 to-pink-500/10",
    icon: "🎯",
  },
];

export default function CultureSection() {
  return (
    <section className="relative py-32 bg-[#020205] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[30%] right-[-10%] w-[45vw] h-[45vw] rounded-full blur-[160px] opacity-10 bg-emerald-600 mix-blend-screen"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Life at Fynab
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
            Where Great Minds{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400">
              Thrive
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-slate-400 font-light leading-relaxed max-w-2xl mx-auto"
          >
            We&apos;ve built a culture where innovation isn&apos;t just encouraged — it&apos;s
            the default. Here&apos;s what makes Fynab a special place to work.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {cultureItems.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerChild}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-8 rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl group overflow-hidden"
            >
              {/* Card gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              <div className="relative z-10">
                <motion.span
                  className="text-4xl mb-5 block"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                </motion.span>
                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
