"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { fadeUp, viewportOnce } from "@/app/lib/animations";

/* ── Tech Items ──────────────────────────────── */
const techItems = [
  {
    name: "Unity",
    color: "#000000",
    glow: "rgba(255,255,255,0.15)",
    icon: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <path fill="#fff" d="M82.48 63.578l22.418-38.402 10.832 38.402-10.832 38.398zm-10.926 6.238l22.422 38.402-39.047-9.922-28.211-28.48zm22.422-50.879L71.554 57.34H26.719l28.207-28.48zM118.04 0L102.2 57.34h-11.39L68.396 18.543l4.469-7.715L94.645 0zM68.396 109.46l-21.78 11.39-4.473-7.72L64.561 74.33h11.39L118.04 128l-23.395-7.152z" />
      </svg>
    ),
    position: { top: "8%", left: "15%" },
    size: "lg",
  },
  {
    name: "Unreal Engine",
    color: "#0E1128",
    glow: "rgba(99,102,241,0.2)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#fff">
        <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm0 1.5c5.799 0 10.5 4.701 10.5 10.5S17.799 22.5 12 22.5 1.5 17.799 1.5 12 6.201 1.5 12 1.5zm-.469 3.844c-2.296.152-4.452 1.608-5.343 4.156-.196.56-.345 1.121-.407 1.688l1.5-1.313s.938-2.125 3.25-2.75v1.031l-2.656 2.75 2.656 2.844v1c-1.362-.377-4.125-3.157-4.125-3.157s-.406 1.97.594 3.97c.63 1.258 2.204 2.873 4.406 3.218l-1.156-1.562 1.75-1.094 2.5 3.031c3.06-1.136 5.332-4.062 5.332-7.5 0-.355-.035-.704-.078-1.05l-2.003 1.456-.563-.563 2.563-2.812c-.684-.915-1.595-1.673-2.656-2.19l-1.438 1.972-.468-.718 1.218-2.19a8.59 8.59 0 00-1.562-.562l-.844 2.312-.593-.125.312-2.28a8.478 8.478 0 00-2.188 0z" />
      </svg>
    ),
    position: { top: "5%", left: "55%" },
    size: "lg",
  },
  {
    name: "Blender",
    color: "#E87D0D",
    glow: "rgba(232,125,13,0.2)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="#fff">
        <path d="M12.51 13.214c.046-.8.438-1.506 1.048-2.005a3.04 3.04 0 012.06-.736c.828 0 1.554.324 2.063.738.603.497.993 1.203 1.048 2.003.046.8-.239 1.548-.797 2.108-.602.604-1.39.924-2.314.924-.92 0-1.71-.32-2.312-.923-.558-.56-.843-1.308-.796-2.109zm-2.848 2.148c.124 1.476.81 2.792 1.878 3.74 1.188 1.054 2.708 1.636 4.28 1.636 1.571 0 3.088-.58 4.268-1.627 1.069-.948 1.752-2.265 1.876-3.741.125-1.475-.35-2.897-1.336-4.005-1.12-1.262-2.768-1.956-4.645-1.956-1.878 0-3.53.694-4.649 1.956-.989 1.108-1.468 2.53-1.343 4.005l-.329-.008zm-4.41-5.154c1.302-1.6 3.023-2.81 4.97-3.49l-3.098-2.342H3.12l4.474 3.384c-.656.419-1.28.902-1.855 1.465a10.81 10.81 0 00-2.57 4.44 10.24 10.24 0 00-.287 4.752c.322 1.574 1.089 3.033 2.219 4.215 1.138 1.192 2.605 2.07 4.235 2.542a10.27 10.27 0 004.83.173c1.614-.417 3.04-1.274 4.131-2.497 1.05-1.178 1.73-2.614 1.98-4.149a9.57 9.57 0 00-.412-4.56 10.5 10.5 0 00-2.503-3.984c-1.168-1.182-2.639-2.06-4.252-2.536a11.42 11.42 0 00-3.397-.44L18.41 1.22h-3.936L5.252 10.208z" />
      </svg>
    ),
    position: { top: "40%", left: "5%" },
    size: "md",
  },
  {
    name: "WebGL",
    color: "#990000",
    glow: "rgba(153,0,0,0.2)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="#fff">
        <path d="M2 2v20h20V2H2zm3.08 15.87L3.87 17l1.14-2.36-.94-1.87h1.14l.4.89.47-.89h1.13l-.97 1.87 1.2 2.36H5.3l-.54-1.18-.55 1.18H3.08l1.13-2.23zm5.86 0h-3v-4.23h1.14v3.36h1.86v.87zm5.16-2.32c0 .57-.11 1.01-.35 1.34-.23.32-.56.52-.98.6l1.48 1.57h-1.52l-1.17-1.36h-.37v1.36H12.1v-4.23h1.97c.66 0 1.16.15 1.49.45.33.3.5.73.5 1.28zm3.25.88c0 .41-.14.76-.42 1.04-.28.29-.67.43-1.17.43-.5 0-.89-.14-1.17-.43-.28-.28-.42-.63-.42-1.04v-2.95h1.1v2.82c0 .2.05.36.16.47.1.11.24.17.42.17.17 0 .31-.06.42-.17.1-.11.16-.28.16-.47v-2.82h1.1v2.95h-.18z" />
      </svg>
    ),
    position: { top: "25%", left: "75%" },
    size: "md",
  },
  {
    name: "Three.js",
    color: "#000000",
    glow: "rgba(255,255,255,0.12)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="#fff">
        <path d="M.38 0a.268.268 0 00-.256.332l2.894 11.716a.268.268 0 00.01.04l2.89 11.708a.268.268 0 00.447.14L23.85.396A.268.268 0 0023.666 0zm.894.93h21.32L11.14 11.78zm-.02.37l5.09 10.75L.66 22.53zM6.89 12.37l5.1 10.77L.96 23.11z" />
      </svg>
    ),
    position: { top: "65%", left: "25%" },
    size: "md",
  },
  {
    name: "Photon",
    color: "#004C97",
    glow: "rgba(0,76,151,0.2)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#fff">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    position: { top: "60%", left: "68%" },
    size: "sm",
  },
  {
    name: "Firebase",
    color: "#FFCA28",
    glow: "rgba(255,202,40,0.2)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#fff">
        <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z" />
      </svg>
    ),
    position: { top: "35%", left: "45%" },
    size: "sm",
  },
];

/* ── Magnetic Logo ───────────────────────────── */
function MagneticLogo({ item }: { item: (typeof techItems)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.3);
    y.set((e.clientY - cy) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  const sizeClasses =
    item.size === "lg"
      ? "w-24 h-24 sm:w-28 sm:h-28"
      : item.size === "md"
        ? "w-20 h-20 sm:w-24 sm:h-24"
        : "w-16 h-16 sm:w-20 sm:h-20";

  return (
    <motion.div
      ref={ref}
      className="absolute"
      style={{
        top: item.position.top,
        left: item.position.left,
        x: springX,
        y: springY,
      }}
      animate={{
        y: [0, -10, 0, 8, 0],
        rotate: [0, 2, 0, -2, 0],
      }}
      transition={{
        duration: 6 + Math.random() * 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={`${sizeClasses} rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl flex flex-col items-center justify-center gap-2 cursor-pointer relative overflow-hidden group`}
        whileHover={{
          scale: 1.12,
          borderColor: "rgba(255,255,255,0.2)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
          style={{
            boxShadow: `0 0 40px ${item.glow}, inset 0 0 40px ${item.glow}`,
          }}
        />

        {/* Icon */}
        <div className="relative z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
          {item.icon}
        </div>

        {/* Name */}
        <span className="relative z-10 text-[10px] sm:text-xs font-medium text-slate-500 group-hover:text-white transition-colors duration-300">
          {item.name}
        </span>
      </motion.div>
    </motion.div>
  );
}

export default function TechStackGame() {
  return (
    <section className="relative py-32 bg-[#020205] overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[160px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
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
                Technology Stack
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
            Powered by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Industry Leaders
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-slate-400 font-light leading-relaxed max-w-2xl mx-auto"
          >
            We leverage the most powerful game engines, creative tools, and infrastructure
            platforms to deliver exceptional gaming experiences.
          </motion.p>
        </div>

        {/* Collage Area */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1 }}
          className="relative h-[400px] sm:h-[500px] lg:h-[550px] max-w-4xl mx-auto"
        >
          {/* Connection lines (decorative) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06]">
            <line x1="20%" y1="15%" x2="55%" y2="12%" stroke="white" strokeWidth="1" strokeDasharray="4,8" />
            <line x1="55%" y1="12%" x2="78%" y2="30%" stroke="white" strokeWidth="1" strokeDasharray="4,8" />
            <line x1="10%" y1="45%" x2="45%" y2="40%" stroke="white" strokeWidth="1" strokeDasharray="4,8" />
            <line x1="45%" y1="40%" x2="30%" y2="70%" stroke="white" strokeWidth="1" strokeDasharray="4,8" />
            <line x1="70%" y1="65%" x2="45%" y2="40%" stroke="white" strokeWidth="1" strokeDasharray="4,8" />
          </svg>

          {techItems.map((item) => (
            <MagneticLogo key={item.name} item={item} />
          ))}

          {/* Center decorative ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/[0.04] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/[0.02] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/[0.01] rounded-full pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
