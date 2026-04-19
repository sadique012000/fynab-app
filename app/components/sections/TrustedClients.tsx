"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerChild, viewportOnce } from "@/app/lib/animations";

const clients = [
  "Microsoft",
  "Google Cloud",
  "AWS",
  "Salesforce",
  "SAP",
  "Oracle",
  "IBM",
  "Cisco",
  "VMware",
  "Dell",
];

// Calculate pseudo-random but fixed distributed positions avoiding the exact center
const basePositions = [
  { top: "20%", left: "15%" },
  { top: "20%", left: "85%" },
  { top: "45%", left: "10%" },
  { top: "45%", left: "90%" },
  { top: "72%", left: "18%" },
  { top: "72%", left: "82%" },
  { top: "88%", left: "35%" },
  { top: "88%", left: "65%" },
  { top: "35%", left: "30%" },
  { top: "35%", left: "70%" },
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

  return (
    <section className="relative w-full min-h-[750px] md:h-[850px] bg-[#05070F] overflow-hidden border-y border-white/[0.03] py-24">
      {/* Ambient Background System */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#05070F_100%)] z-10" />
        
        {/* Glow Blobs */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full mix-blend-screen"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-[40%] left-[60%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full mix-blend-screen"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.8, 0.5, 0.8] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-4 flex flex-col">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20 pointer-events-none"
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
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-xl"
          >
            Powering teams at world-class companies
          </motion.h2>
          <motion.p variants={staggerChild} className="text-lg text-slate-400 font-medium">
            Join the industry leaders who rely on our enterprise-grade infrastructure.
          </motion.p>
        </motion.div>

        {/* Cinematic Stage & Directional Subtext */}
        <div className="absolute top-[75%] md:top-[65%] left-1/2 -translate-x-1/2 w-full max-w-md text-center pointer-events-none z-30">
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
              <div className="h-[2px] w-12 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-4 opacity-50" />
              <p className="text-base md:text-lg text-indigo-200/80 font-medium tracking-wide">
                Partnering with <span className="text-white font-bold">{clients[current]}</span> to build the future.
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Floating Interactive Ecosystem */}
        <div className="absolute inset-0 top-32 pointer-events-none z-40 overflow-hidden">
          {clients.map((client, i) => {
            const isActive = i === current;
            const position = basePositions[i];
            
            return (
              <motion.div
                key={client}
                className={`absolute cursor-pointer pointer-events-auto will-change-transform z-${isActive ? '50' : '10'}`}
                initial={{ top: "60%", left: "50%", opacity: 0, scale: 0 }}
                animate={{
                  top: isActive ? "48%" : position.top, // Places the active item perfectly in center stage
                  left: isActive ? "50%" : position.left,
                  x: "-50%",
                  y: "-50%",
                  scale: isActive ? 1.05 : 0.65,
                  opacity: isActive ? 1 : 0.45,
                }}
                transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                onClick={() => setActive(i)}
              >
                <motion.div
                  animate={isActive ? { y: 0, x: 0 } : { y: [0, -12, 0], x: [0, i % 2 === 0 ? 8 : -8, 0] }}
                  transition={{
                    y: { repeat: Infinity, duration: 4 + (i % 3), ease: "easeInOut", delay: i * 0.2 },
                    x: { repeat: Infinity, duration: 5 + (i % 3), ease: "easeInOut", delay: i * 0.3 }
                  }}
                >
                  <div className={`
                    flex items-center gap-4 px-6 md:px-8 py-4 md:py-5 rounded-3xl 
                    backdrop-blur-xl border transition-all duration-700
                    ${isActive 
                      ? "bg-slate-800/80 border-indigo-400/50 shadow-[0_0_60px_rgba(99,102,241,0.35)] ring-1 ring-indigo-500/20" 
                      : "bg-white/[0.03] border-white/10 grayscale hover:grayscale-0 hover:bg-white/[0.08]"}
                  `}>
                    <div className={`
                      w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-black text-lg md:text-xl shadow-inner transition-colors duration-500
                      ${isActive ? "bg-gradient-to-br from-indigo-500 to-cyan-500 ring-2 ring-indigo-400/30" : "bg-white/10"}
                    `}>
                       {client[0]}
                    </div>
                    <AnimatePresence mode="wait">
                      {!isActive && (
                        <motion.span
                          initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                          animate={{ opacity: 1, width: "auto", marginLeft: 0 }}
                          exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                          transition={{ duration: 0.4 }}
                          className="font-black text-xl md:text-2xl tracking-tighter text-slate-500 overflow-hidden whitespace-nowrap"
                        >
                          {client}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
