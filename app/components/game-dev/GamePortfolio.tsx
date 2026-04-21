"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerChild,
  viewportOnce,
} from "@/app/lib/animations";

/* ── Portfolio Data ──────────────────────────── */
const games = [
  {
    title: "Shadow Realms: Awakening",
    genre: "Dark Fantasy RPG",
    platform: "PC / Console",
    description:
      "An epic open-world RPG with stunning visuals, dynamic combat, and a branching narrative system.",
    gradient: "from-purple-600 via-indigo-600 to-blue-600",
    accentGlow: "rgba(139,92,246,0.3)",
    icon: "⚔️",
  },
  {
    title: "Neon Velocity",
    genre: "Sci-Fi Racing",
    platform: "PC / Mobile",
    description:
      "Futuristic anti-gravity racing with neon-soaked cyberpunk cityscapes and online multiplayer.",
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    accentGlow: "rgba(6,182,212,0.3)",
    icon: "🏎️",
  },
  {
    title: "Crystal Legends",
    genre: "Puzzle Adventure",
    platform: "Mobile / Tablet",
    description:
      "A charming puzzle adventure through mystical forests with over 500 handcrafted levels.",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    accentGlow: "rgba(16,185,129,0.3)",
    icon: "💎",
  },
  {
    title: "Void Explorer",
    genre: "VR Space Sim",
    platform: "VR / PC",
    description:
      "An immersive VR space exploration experience with procedurally generated galaxies and zero-G mechanics.",
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
    accentGlow: "rgba(99,102,241,0.3)",
    icon: "🚀",
  },
  {
    title: "Battle Nexus",
    genre: "Multiplayer Shooter",
    platform: "PC / Console",
    description:
      "Tactical 5v5 hero shooter with destructible environments and competitive ranked modes.",
    gradient: "from-rose-600 via-orange-500 to-amber-500",
    accentGlow: "rgba(244,63,94,0.3)",
    icon: "🎯",
  },
  {
    title: "TerraForge",
    genre: "Survival Sandbox",
    platform: "PC / Console / Mobile",
    description:
      "Build, explore, and survive in a voxel-based world with cross-platform co-op for up to 8 players.",
    gradient: "from-amber-500 via-yellow-500 to-emerald-500",
    accentGlow: "rgba(245,158,11,0.3)",
    icon: "🏗️",
  },
];

/* ── Game Card ───────────────────────────────── */
function GameCard({ game }: { game: (typeof games)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
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
      className="relative rounded-3xl overflow-hidden border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl group cursor-pointer"
    >
      {/* Thumbnail area */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {/* Gradient background as thumbnail */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${game.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-700`}
        />

        {/* Animated glow */}
        <motion.div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br ${game.gradient} blur-[60px]`}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-6xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {game.icon}
          </motion.span>
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Hover overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        {/* Cursor glow on hover */}
        {isHovered && (
          <div
            className="absolute pointer-events-none"
            style={{
              width: 200,
              height: 200,
              left: mousePos.x - 100,
              top: mousePos.y - 100,
              background: `radial-gradient(circle, ${game.accentGlow} 0%, transparent 70%)`,
              opacity: 0.5,
            }}
          />
        )}

        {/* Genre tag */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-semibold text-white/90 bg-white/[0.1] backdrop-blur-md rounded-full border border-white/[0.1]">
            {game.genre}
          </span>
        </div>

        {/* Platform tag */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 text-xs font-medium text-slate-300 bg-black/40 backdrop-blur-md rounded-full border border-white/[0.06]">
            {game.platform}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors">
          {game.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
          {game.description}
        </p>
      </div>

      {/* Hover border glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 0 1px ${game.accentGlow}, 0 0 30px ${game.accentGlow}`,
        }}
      />
    </motion.div>
  );
}

export default function GamePortfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-32 bg-[#05070F] overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[-10%] left-[30%] w-[40vw] h-[40vw] rounded-full blur-[160px] opacity-10 bg-purple-600 mix-blend-screen"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-5%] right-[20%] w-[35vw] h-[35vw] rounded-full blur-[140px] opacity-10 bg-cyan-600 mix-blend-screen"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
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
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-xs font-semibold text-white/80 uppercase tracking-widest">
                Portfolio
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={viewportOnce}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-8"
          >
            Games We&apos;ve{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-purple-400 to-cyan-400">
              Crafted
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-slate-400 font-light leading-relaxed max-w-2xl mx-auto"
          >
            A selection of our proudest gaming projects — each a testament to
            our commitment to quality, innovation, and player delight.
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
          {games.map((game) => (
            <GameCard key={game.title} game={game} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
