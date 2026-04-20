"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerChild, viewportOnce } from "@/app/lib/animations";

const clients = [
  { name: "Nebula", logo: "nebula" },
  { name: "Quantum", logo: "quantum" },
  { name: "Vertex", logo: "vertex" },
  { name: "Aether", logo: "aether" },
  { name: "Synapse", logo: "synapse" },
  { name: "Pulse", logo: "pulse" },
  { name: "Flux", logo: "flux" },
  { name: "Oasis", logo: "oasis" },
  { name: "Nova", logo: "nova" },
  { name: "Prism", logo: "prism" },
];

// Calculate pseudo-random but fixed distributed positions avoiding the exact center
const basePositions = [
  { top: "20%", left: "15%", mobileTop: "10%", mobileLeft: "15%" },
  { top: "20%", left: "85%", mobileTop: "10%", mobileLeft: "85%" },
  { top: "45%", left: "10%", mobileTop: "40%", mobileLeft: "10%" },
  { top: "45%", left: "90%", mobileTop: "40%", mobileLeft: "90%" },
  { top: "72%", left: "18%", mobileTop: "75%", mobileLeft: "15%" },
  { top: "72%", left: "82%", mobileTop: "75%", mobileLeft: "85%" },
  { top: "88%", left: "35%", mobileTop: "90%", mobileLeft: "20%" },
  { top: "88%", left: "65%", mobileTop: "90%", mobileLeft: "80%" },
  { top: "35%", left: "30%", mobileTop: "25%", mobileLeft: "20%" },
  { top: "35%", left: "70%", mobileTop: "25%", mobileLeft: "80%" },
];


const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
    filter: "blur(4px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0,
    filter: "blur(4px)",
    transition: { duration: 0.3, ease: "easeIn" as const },
  }),
};

export default function TrustedClients() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % clients.length);
  }, []);

  const setActive = (i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  if (!mounted) return <div className="h-[900px] bg-[#05070F]" />;

  return (
    <section 
      id="trusted-clients"
      className="relative w-full min-h-[900px] bg-[#05070F] overflow-hidden border-y border-white/[0.03] pt-48 pb-20 md:py-32 scroll-mt-32"
    >
      {/* Ambient Background System */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#05070F_100%)] z-10" />

        {/* Glow Blobs */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-indigo-500/10 blur-[100px] md:blur-[200px] rounded-full mix-blend-screen"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-4 flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20 md:mb-32 pointer-events-none"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.span
            variants={staggerChild}
            className="inline-block px-3 py-1 text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full uppercase tracking-wider mb-4 shadow-xl"
          >
            Trusted by
          </motion.span>
          <motion.h2
            variants={staggerChild}
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tight drop-shadow-xl leading-tight"
          >
            Powering teams at <span className="text-indigo-400">world-class</span> companies
          </motion.h2>
          <motion.p variants={staggerChild} className="text-base sm:text-lg text-slate-400 font-medium px-4 max-w-2xl mx-auto">
            Join the industry leaders who rely on our enterprise-grade infrastructure.
          </motion.p>
        </motion.div>

        {/* Interactive Desktop Ecosystem (Hidden on Mobile) */}
        <div className="hidden md:flex relative w-full h-[550px] mb-12 items-center justify-center">
          {clients.map((client, i) => {
            const isActive = i === current;
            const orbitalRadius = 240 + (i % 2) * 80;
            const angle = (i / clients.length) * Math.PI * 2;
            const xPos = Math.cos(angle) * orbitalRadius;
            const yPos = Math.sin(angle) * (orbitalRadius * 0.7);

            return (
              <motion.div
                key={`desktop-${client.name}`}
                className={`absolute cursor-pointer pointer-events-auto will-change-transform z-${isActive ? '50' : '10'}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  x: isActive ? 0 : xPos,
                  y: isActive ? 0 : yPos,
                  scale: isActive ? 1.2 : 0.75,
                  opacity: isActive ? 1 : 0.35,
                }}
                transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                onClick={() => setActive(i)}
              >
                <div className={`
                  flex items-center gap-4 px-8 py-5 rounded-3xl 
                  backdrop-blur-xl border transition-all duration-700
                  ${isActive
                    ? "bg-slate-800/90 border-indigo-400/50 shadow-[0_0_80px_rgba(99,102,241,0.4)] ring-2 ring-indigo-500/30"
                    : "bg-white/[0.02] border-white/10 grayscale hover:grayscale-0 hover:bg-white/[0.08]"}
                `}>
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center p-2.5 shadow-inner transition-colors duration-500 overflow-hidden
                    ${isActive ? "bg-white" : "bg-white/10"}
                  `}>
                    <img 
                      src={`https://ui-avatars.com/api/?name=${client.name}&background=6366f1&color=fff&bold=true&size=128`} 
                      alt={client.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className={`font-black text-2xl tracking-tighter whitespace-nowrap ${isActive ? 'text-white' : 'text-slate-500'}`}>
                    {client.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stable Mobile Grid (Hidden on Desktop) */}
        <div className="md:hidden w-full grid grid-cols-2 gap-4 px-4 mb-20 max-w-sm">
          {clients.slice(0, 8).map((client, i) => {
            const isActive = i === current % 8;
            return (
              <motion.div
                key={`mobile-${client.name}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: i * 0.05 }}
                className={`
                  flex items-center gap-3 p-4 rounded-2xl border backdrop-blur-md transition-all duration-500 w-full overflow-hidden
                  ${isActive 
                    ? "bg-indigo-500/15 border-indigo-500/50 shadow-lg" 
                    : "bg-white/[0.03] border-white/5"}
                `}
                onClick={() => setActive(i)}
              >
                <div className={`
                  w-10 h-10 shrink-0 rounded-full flex items-center justify-center overflow-hidden border transition-colors
                  ${isActive ? "bg-white border-indigo-400/50" : "bg-white/5 border-white/10"}
                `}>
                  <img 
                    src={`https://ui-avatars.com/api/?name=${client.name}&background=6366f1&color=fff&bold=true&size=64`} 
                    alt={client.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className={`font-bold text-xs tracking-tight transition-colors truncate ${isActive ? 'text-white' : 'text-slate-400'}`}>
                  {client.name}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Global Cinematic Stage Subtext */}
        <div className="w-full max-w-2xl text-center pointer-events-none z-30 mb-8 px-4 mt-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="px-4"
            >
              <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-8 opacity-50" />
              <p className="text-lg md:text-2xl text-indigo-100/90 font-medium tracking-wide leading-relaxed drop-shadow-md">
                Partnering with <span className="text-white font-black px-1 underline decoration-indigo-500 decoration-2 underline-offset-8">{clients[current].name}</span> to build scale.
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}








