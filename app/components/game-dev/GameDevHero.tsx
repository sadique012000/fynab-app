"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  staggerContainer,
  staggerChild,
  fadeUp,
  viewportOnce,
} from "@/app/lib/animations";

/* ── Floating Orb ────────────────────────────── */
function FloatingOrb({
  color,
  size,
  top,
  left,
  delay,
  mouseX,
  mouseY,
}: {
  color: string;
  size: number;
  top: string;
  left: string;
  delay: number;
  mouseX: ReturnType<typeof useSpring>;
  mouseY: ReturnType<typeof useSpring>;
}) {
  return (
    <motion.div
      className="absolute rounded-full mix-blend-screen pointer-events-none"
      style={{
        width: size,
        height: size,
        top,
        left,
        background: color,
        filter: `blur(${size * 0.6}px)`,
        x: mouseX,
        y: mouseY,
      }}
      animate={{
        y: [0, -30, 0, 20, 0],
        x: [0, 20, 0, -15, 0],
        scale: [1, 1.1, 1, 0.95, 1],
      }}
      transition={{
        duration: 8 + delay * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

export default function GameDevHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);
  const mouseX = useSpring(rawMouseX, { stiffness: 30, damping: 20 });
  const mouseY = useSpring(rawMouseY, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      rawMouseX.set((e.clientX - cx) * 0.03);
      rawMouseY.set((e.clientY - cy) * 0.03);
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [rawMouseX, rawMouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#020205] selection:bg-indigo-500/30"
    >
      {/* ── Background System ────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070F] via-[#020205] to-[#05070F]" />

        {/* Animated gradient orbs */}
        <FloatingOrb
          color="rgba(99,102,241,0.15)"
          size={600}
          top="-10%"
          left="10%"
          delay={0}
          mouseX={mouseX}
          mouseY={mouseY}
        />
        <FloatingOrb
          color="rgba(6,182,212,0.12)"
          size={500}
          top="20%"
          left="60%"
          delay={1.5}
          mouseX={mouseX}
          mouseY={mouseY}
        />
        <FloatingOrb
          color="rgba(139,92,246,0.1)"
          size={450}
          top="60%"
          left="30%"
          delay={3}
          mouseX={mouseX}
          mouseY={mouseY}
        />

        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.025] mix-blend-screen"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-transparent to-[#020205]/50" />

        {/* Twinkling stars */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.1,
            }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── Content ────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={viewportOnce}
        >
          {/* Badge */}
          <motion.div
            variants={staggerChild}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl mb-10 group cursor-default hover:bg-white/[0.04] hover:border-white/[0.12] transition-colors duration-500"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
            </span>
            <span className="text-sm font-medium text-slate-300 tracking-wide group-hover:text-white transition-colors">
              AAA-Quality Game Development
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black text-white leading-[1.05] tracking-tighter mb-8"
          >
            We Build{" "}
            <br className="hidden md:block" />
            <span className="relative inline-block mt-2 lg:mt-4">
              <span className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-cyan-400/20 to-purple-500/20 blur-[50px] pointer-events-none" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 animate-gradient-x bg-[length:200%_auto]">
                Immersive Gaming
              </span>
            </span>
            <br className="hidden md:block" />
            Experiences
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto mb-12"
          >
            AAA-quality, cross-platform, scalable game development — from concept
            to launch. We bring your vision to life with cutting-edge technology
            and world-class craftsmanship.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative group flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-indigo-600 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(79,70,229,0.4)] hover:shadow-[0_0_60px_rgba(79,70,229,0.7)] transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-[shine_1.5s_ease-in-out_infinite]" />
              <span className="relative z-10 flex items-center gap-2">
                🎮 Start Your Game Project
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </motion.a>

            <motion.a
              href="#portfolio"
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(255,255,255,0.06)",
                borderColor: "rgba(255,255,255,0.15)",
              }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-300 bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/[0.08] shadow-sm hover:text-white transition-all duration-500"
            >
              View Portfolio
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Shine keyframe */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes shine { 100% { left: 200%; } }
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-x { animation: gradient-x 4s ease infinite; }
        `,
        }}
      />
    </section>
  );
}
