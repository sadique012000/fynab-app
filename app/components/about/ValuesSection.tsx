"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerChild,
  viewportOnce,
} from "@/app/lib/animations";
import {
  Lightbulb,
  ShieldCheck,
  Zap,
  Lock,
  Layers,
  Users,
} from "lucide-react";

const values = [
  {
    title: "Innovation",
    description:
      "We push boundaries relentlessly, embracing emerging technologies to stay ahead of the curve.",
    icon: Lightbulb,
    gradient: "from-indigo-500 to-blue-500",
    glow: "rgba(99,102,241,0.3)",
  },
  {
    title: "Transparency",
    description:
      "Open communication and honest partnerships form the foundation of every relationship we build.",
    icon: ShieldCheck,
    gradient: "from-cyan-500 to-teal-500",
    glow: "rgba(6,182,212,0.3)",
  },
  {
    title: "Performance",
    description:
      "We obsess over speed, efficiency, and reliability — delivering solutions that perform under any load.",
    icon: Zap,
    gradient: "from-amber-500 to-orange-500",
    glow: "rgba(245,158,11,0.3)",
  },
  {
    title: "Security",
    description:
      "Enterprise-grade security is embedded into every layer of our architecture from day one.",
    icon: Lock,
    gradient: "from-rose-500 to-pink-500",
    glow: "rgba(244,63,94,0.3)",
  },
  {
    title: "Scalability",
    description:
      "Our systems are built to grow with you — from prototype to planet-scale without breaking a sweat.",
    icon: Layers,
    gradient: "from-purple-500 to-violet-500",
    glow: "rgba(139,92,246,0.3)",
  },
  {
    title: "User-First Thinking",
    description:
      "Every decision starts with the end user. We design for humans, then engineer for machines.",
    icon: Users,
    gradient: "from-emerald-500 to-green-500",
    glow: "rgba(16,185,129,0.3)",
  },
];

function ValueCard({ item, index }: { item: (typeof values)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlight({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const Icon = item.icon;

  return (
    <motion.div
      ref={cardRef}
      variants={staggerChild}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative p-8 rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl overflow-hidden group cursor-default"
    >
      {isHovered && (
        <div
          className="absolute pointer-events-none transition-opacity duration-300"
          style={{
            width: 250,
            height: 250,
            left: spotlight.x - 125,
            top: spotlight.y - 125,
            background: `radial-gradient(circle, ${item.glow} 0%, transparent 70%)`,
            opacity: 0.35,
          }}
        />
      )}

      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ boxShadow: `inset 0 0 0 1px ${item.glow}` }}
      />

      <div className="relative mb-5">
        <motion.div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg`}
          style={{ boxShadow: `0 8px 25px ${item.glow}` }}
          whileHover={{ scale: 1.15 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon size={22} strokeWidth={2} />
        </motion.div>
      </div>

      <h3 className="relative text-lg font-bold text-white mb-2">{item.title}</h3>
      <p className="relative text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
        {item.description}
      </p>

      <div
        className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
      />
    </motion.div>
  );
}

export default function ValuesSection() {
  return (
    <section className="relative py-32 bg-[#05070F] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[-15%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[160px] opacity-15 bg-indigo-600 mix-blend-screen"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full blur-[140px] opacity-10 bg-cyan-600 mix-blend-screen"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
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
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-xs font-semibold text-white/80 uppercase tracking-widest">
                Our Values
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
            Principles That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
              Drive Us
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-slate-400 font-light leading-relaxed max-w-2xl mx-auto"
          >
            Six core principles that guide every decision, every line of code,
            and every partnership we forge.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {values.map((item, i) => (
            <ValueCard key={item.title} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
