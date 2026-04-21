"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  staggerChild,
  viewportOnce,
} from "@/app/lib/animations";

/* ── Capability Data ─────────────────────────── */
const capabilities = [
  {
    title: "Mobile Games",
    description:
      "High-performance mobile games for iOS & Android with optimized touch controls and stunning visuals.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    gradient: "from-pink-500 to-rose-500",
    glowColor: "rgba(244,63,94,0.3)",
  },
  {
    title: "PC Games",
    description:
      "Desktop gaming experiences with AAA-quality graphics, advanced physics, and immersive worlds.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
      </svg>
    ),
    gradient: "from-indigo-500 to-blue-500",
    glowColor: "rgba(99,102,241,0.3)",
  },
  {
    title: "Console Games",
    description:
      "Next-gen console titles for PlayStation, Xbox, and Nintendo Switch with cross-platform support.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.421 48.421 0 01-4.163-.3c-1.228-.148-2.38.693-2.38 1.932 0 .682.324 1.253.784 1.676.46.424.842.96.842 1.585v0c0 .625-.382 1.16-.842 1.585-.46.423-.784.994-.784 1.676 0 1.239 1.152 2.08 2.38 1.932a48.466 48.466 0 014.163-.3.64.64 0 01.657.643v0c0 .355-.186.676-.401.959A1.917 1.917 0 0010.5 20.75c0 1.036 1.007 1.875 2.25 1.875s2.25-.84 2.25-1.875c0-.369-.128-.713-.349-1.003-.215-.283-.401-.604-.401-.959v0c0-.374.269-.686.643-.688a48.085 48.085 0 014.727.33c1.228.148 2.38-.693 2.38-1.932 0-.682-.324-1.253-.784-1.676C20.756 14.6 20.374 14.065 20.374 13.44v0c0-.625.382-1.16.842-1.585.46-.423.784-.994.784-1.676 0-1.239-1.152-2.08-2.38-1.932a48.171 48.171 0 01-4.727.33.64.64 0 01-.643-.688v0z" />
      </svg>
    ),
    gradient: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16,185,129,0.3)",
  },
  {
    title: "AR / VR Experiences",
    description:
      "Immersive augmented and virtual reality applications for training, entertainment, and beyond.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    gradient: "from-purple-500 to-violet-500",
    glowColor: "rgba(139,92,246,0.3)",
  },
  {
    title: "Multiplayer Systems",
    description:
      "Real-time multiplayer architecture with matchmaking, leaderboards, and anti-cheat systems.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    gradient: "from-cyan-500 to-sky-500",
    glowColor: "rgba(6,182,212,0.3)",
  },
  {
    title: "Game Backend & APIs",
    description:
      "Scalable game servers, analytics pipelines, live-ops dashboards, and in-app purchase APIs.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    gradient: "from-amber-500 to-orange-500",
    glowColor: "rgba(245,158,11,0.3)",
  },
];

/* ── Glass Card with Spotlight ───────────────── */
function CapabilityCard({
  item,
  index,
}: {
  item: (typeof capabilities)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlight({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

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
      {/* Cursor spotlight */}
      {isHovered && (
        <div
          className="absolute pointer-events-none transition-opacity duration-300"
          style={{
            width: 300,
            height: 300,
            left: spotlight.x - 150,
            top: spotlight.y - 150,
            background: `radial-gradient(circle, ${item.glowColor} 0%, transparent 70%)`,
            opacity: 0.4,
          }}
        />
      )}

      {/* Hover border glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          boxShadow: `inset 0 0 0 1px ${item.glowColor}`,
        }}
      />

      {/* Icon */}
      <div className="relative mb-6">
        <div
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg`}
          style={{
            boxShadow: `0 8px 32px ${item.glowColor}`,
          }}
        >
          {item.icon}
        </div>
      </div>

      {/* Content */}
      <h3 className="relative text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
        {item.title}
      </h3>
      <p className="relative text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
        {item.description}
      </p>

      {/* Bottom glow accent */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
      />
    </motion.div>
  );
}

export default function GameCapabilities() {
  return (
    <section className="relative py-32 bg-[#05070F] overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[-15%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[160px] opacity-15 bg-indigo-600 mix-blend-screen"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full blur-[140px] opacity-10 bg-cyan-600 mix-blend-screen"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
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
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-xs font-semibold text-white/80 uppercase tracking-widest">
                What We Build
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
            Game Development{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
              Capabilities
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-slate-400 font-light leading-relaxed max-w-2xl mx-auto"
          >
            From mobile casual to AAA console titles — we craft every type of
            gaming experience with precision and passion.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {capabilities.map((item, i) => (
            <CapabilityCard key={item.title} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
