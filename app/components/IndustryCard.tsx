"use client";

import { motion, useMotionValue, useMotionTemplate, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Industry {
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  image: string;
}

interface Theme {
  gradient: string;
  activeGradient: string;
  border: string;
  activeBorder: string;
  text: string;
  glow: string;
  glowColor: string;
  iconBg: string;
  activeIconBg: string;
  iconColor: string;
}

interface IndustryCardProps {
  industry: Industry;
  index: number;
  isActive: boolean;
  onHover: () => void;
  theme: Theme;
  isMobile?: boolean;
}

export function IndustryCard({ industry, index, isActive, onHover, theme, isMobile = false }: IndustryCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const radialGradient = useMotionTemplate`
    radial-gradient(
      350px circle at ${mouseX}px ${mouseY}px,
      rgba(255, 255, 255, 0.1),
      transparent 80%
    )
  `;

  // Shaded color radial gradient (matched to ServiceCard)
  const shadedGlow = useMotionTemplate`
    radial-gradient(
      300px circle at ${mouseX}px ${mouseY}px,
      ${theme.glowColor},
      transparent 100%
    )
  `;

  if (isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onMouseMove={onMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative group rounded-3xl p-8 border border-white/[0.04] bg-[#0a0f1c]/80 backdrop-blur-sm overflow-hidden hover:border-white/[0.1] transition-all duration-500 hover:${theme.glow}`}
      >
        {/* Random Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={`https://images.unsplash.com/photo-${industry.image}?auto=format&fit=crop&w=800&q=80`}
            alt={industry.name}
            className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] to-transparent opacity-100" />
        </div>

        {/* Shaded Glow (Mouse Following) */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"
          style={{ background: shadedGlow }}
        />

        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-40 transition-opacity duration-500" style={{ background: theme.activeGradient }} />

        <div className="relative z-10 flex flex-col h-full">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/[0.08] ${theme.activeIconBg} ${theme.iconColor}`}>
            {industry.icon}
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{industry.name}</h3>
          <p className="text-slate-400 font-light mb-8 leading-relaxed">{industry.description}</p>

          <div className={`mt-auto flex items-center gap-2 font-semibold ${theme.text} hover:text-white transition-colors cursor-pointer`}>
            Explore Solutions
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      onHoverStart={onHover}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        layout: { type: "spring", stiffness: 200, damping: 25 },
        opacity: { duration: 0.5, delay: index * 0.1 },
        y: { duration: 0.5, delay: index * 0.1 }
      }}
      className={`relative h-full rounded-3xl cursor-pointer overflow-hidden group border transition-all duration-500 
        ${isActive ? theme.activeBorder : theme.border} 
        ${isActive ? theme.glow : ""} 
        ${isActive ? "z-10 bg-[#0a0f1c]/10" : "z-0 bg-white/[0.02]"}`}
      style={{
        flex: isActive ? 4 : 1,
      }}
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={`https://images.unsplash.com/photo-${industry.image}?auto=format&fit=crop&w=800&q=80`}
          alt={industry.name}
          className={`w-full h-full object-cover transition-all duration-700 
            ${isActive ? 'opacity-50 scale-100 blur-0' : 'opacity-40 scale-110 blur-[1px] group-hover:blur-0 group-hover:opacity-60'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-[#05070F] to-transparent ${isActive ? 'opacity-60' : 'opacity-0 group-hover:opacity-40'} transition-opacity duration-500`} />
      </div>

      {/* Shaded Glow (Mouse Following) */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"
        style={{ background: shadedGlow }}
      />

      {/* Advanced Glassmorphism Overlay */}
      <motion.div
        className={`absolute inset-[1px] rounded-[calc(1.5rem-1px)] z-0 transition-colors duration-500
          ${isActive ? "bg-white/[0.02] backdrop-blur-[1px]" : "bg-white/[0.01]"}`}
      />

      {/* Hover Shaded Color (Matched to ServiceCard) */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: theme.activeGradient }}
        animate={{ opacity: isActive ? 0.3 : 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* White radial gradient spotlight */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"
        style={{ background: radialGradient }}
      />

      <div className="relative z-20 w-full h-full flex flex-col items-center justify-end p-6 sm:p-8">
        {/* Expanded Content View */}
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
              className="w-full flex-col items-start mb-auto pt-6 pl-4"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-white/[0.1] ${theme.activeIconBg} ${theme.iconColor}`}
              >
                {industry.icon}
              </motion.div>
              <h3 className="text-3xl font-extrabold text-white tracking-tight mb-4 pr-10 leading-tight drop-shadow-md">
                {industry.name}
              </h3>
              <p className="text-slate-300 font-light leading-relaxed max-w-sm mb-10 text-lg">
                {industry.description}
              </p>

              <motion.button
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`group flex items-center gap-3 font-semibold ${theme.text} hover:text-white transition-colors duration-300`}
              >
                Explore Solutions
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </motion.button>
            </motion.div>
          )}

          {!isActive && (
            <motion.div
              key="compact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center h-full justify-between w-full"
            >
              <div
                className={`w-12 h-12 rounded-xl border border-white/[0.08] flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300 mb-4 ${theme.iconBg} ${theme.iconColor}`}
              >
                {industry.icon}
              </div>
              <div className="flex-1 flex items-end mb-8 relative">
                <h3
                  className="text-lg font-bold text-slate-500 whitespace-nowrap transform -rotate-90 origin-bottom-10 pb-10 tracking-[0.2em] uppercase opacity-70 group-hover:opacity-100 group-hover:text-slate-300 transition-all duration-300"
                >
                  {industry.name}
                </h3>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
