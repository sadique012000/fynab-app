"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/app/lib/animations";
import { Globe2, MapPin, Users2, Building2, Zap } from "lucide-react";

const stats = [
  { label: "Talents Worldwide", value: "250+", icon: Users2, color: "text-indigo-400" },
  { label: "Countries Represented", value: "30+", icon: Globe2, color: "text-cyan-400" },
  { label: "Global Hubs", value: "5", icon: Building2, color: "text-purple-400" },
  { label: "Remote-First", value: "100%", icon: Zap, color: "text-amber-400" },
];

export default function GlobalPresence() {
  return (
    <section className="py-24 bg-[#05070F] relative overflow-hidden">
      {/* Background World Map Visual Decoration (Subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
        <Globe2 size={600} className="text-white animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black text-white mb-8"
            >
              A <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Global</span> Community
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-slate-400 mb-10 leading-relaxed"
            >
              Fynab is a borderless organization. We believe that the best talent 
              is everywhere, and we've built a culture that supports and celebrates 
              our global diversity.
            </motion.p>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl"
                >
                  <stat.icon size={24} className={`${stat.color} mb-4`} />
                  <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* World Map Representation */}
            <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 border border-white/[0.05] flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
              
              <Globe2 size={300} className="text-white/10 group-hover:scale-110 transition-transform duration-700" />
              
              {/* Floating Pins */}
              <PulsePin top="20%" left="30%" delay={0} />
              <PulsePin top="40%" left="70%" delay={1} />
              <PulsePin top="60%" left="20%" delay={2} />
              <PulsePin top="75%" left="50%" delay={0.5} />
              <PulsePin top="30%" left="80%" delay={1.5} />

              <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-[#0A0C14] to-transparent">
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] backdrop-blur-xl w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
                  </span>
                  <span className="text-xs font-semibold text-slate-300">Live: Talent in 12 new regions this year</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PulsePin({ top, left, delay }: { top: string; left: string; delay: number }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={viewportOnce}
      transition={{ delay, duration: 0.5 }}
      style={{ top, left }}
      className="absolute z-20"
    >
      <div className="relative">
        <MapPin size={20} className="text-indigo-500 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
        <div className="absolute inset-0 animate-ping bg-indigo-500/40 rounded-full" />
      </div>
    </motion.div>
  );
}
