"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

/* ── Content (unchanged structure) ────────────────────────── */
const services = [
  {
    id: "cloud",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    title: "Cloud Solutions",
    description: "Migrate, optimize, and manage your cloud infrastructure with AWS, Azure, and Google Cloud expertise.",
    color: "from-blue-500 to-indigo-500",
    glow: "rgba(99, 102, 241, 0.4)",
  },
  {
    id: "software",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Custom Software",
    description: "End-to-end software development tailored to your business processes, from MVP to enterprise-scale solutions.",
    color: "from-cyan-400 to-blue-500",
    glow: "rgba(6, 182, 212, 0.4)",
  },
  {
    id: "data",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-1.5M12 12.75l3-1.5M12 12.75V18" />
      </svg>
    ),
    title: "Data & Analytics",
    description: "Transform raw data into actionable insights with our advanced analytics, BI dashboards, and ML models.",
    color: "from-purple-500 to-fuchsia-500",
    glow: "rgba(168, 85, 247, 0.4)",
  },
  {
    id: "cyber",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Cybersecurity",
    description: "Protect your digital assets with comprehensive security assessments, SOC services, and compliance frameworks.",
    color: "from-emerald-400 to-teal-500",
    glow: "rgba(16, 185, 129, 0.4)",
  },
  {
    id: "ai",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    title: "AI & Automation",
    description: "Leverage artificial intelligence and intelligent automation to streamline operations and unlock new capabilities.",
    color: "from-amber-400 to-orange-500",
    glow: "rgba(245, 158, 11, 0.4)",
  },
  {
    id: "strategy",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "Digital Strategy",
    description: "Craft a comprehensive digital roadmap aligned with your business goals, from technology audits to transformation plans.",
    color: "from-rose-400 to-red-500",
    glow: "rgba(244, 63, 94, 0.4)",
  },
];

/* ── Individual Premium Card Component ──────────────────── */
function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse move handler for the inner spotlight effect
  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Motion template for the radial gradient strictly following the mouse
  const background = useMotionTemplate`
    radial-gradient(
      400px circle at ${mouseX}px ${mouseY}px,
      rgba(255, 255, 255, 0.08),
      transparent 80%
    )
  `;

  // Dynamic border glow strictly at cursor position
  const borderBackground = useMotionTemplate`
    radial-gradient(
      300px circle at ${mouseX}px ${mouseY}px,
      ${service.glow},
      transparent 100%
    )
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1] as const
      }}
      className="group relative h-full w-full rounded-3xl"
      onMouseMove={onMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: 1000 }}
    >
      {/* Dynamic Cursor Border Wrapper */}
      <div className="absolute inset-0 rounded-3xl z-0 overflow-hidden bg-white/5 pointer-events-none">
        <motion.div
          className="absolute inset-[1px] rounded-[calc(1.5rem-1px)] bg-[#030308] z-0"
        />
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: borderBackground }}
        />
      </div>

      {/* Main Card Body (Glass) */}
      <motion.div
        className="relative z-10 flex flex-col h-full rounded-3xl p-8 sm:p-10 overflow-hidden bg-gradient-to-b from-white/[0.03] to-transparent shadow-[inset_0_1px_rgba(255,255,255,0.05)] border border-transparent"
        style={{ transformStyle: "preserve-3d" }}
        whileHover={{
          scale: 1.02,
          y: -5,
          rotateX: 2,
          rotateY: -2,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        {/* Hover Light Spotlight Inner */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background }}
        />

        {/* Top Section: Icon & Title */}
        <div className="relative z-20 flex-1">
          {/* Animated Icon Box */}
          <motion.div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 relative
              before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:${service.color} before:opacity-10 before:group-hover:opacity-20 before:transition-opacity before:duration-500
              border border-white/10 group-hover:border-white/20 transition-colors
            `}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {/* Soft backdrop blur inside icon box */}
            <div className="absolute inset-0 rounded-2xl backdrop-blur-md" />

            {/* The SVG itself */}
            <motion.div
              className={`relative z-10 bg-gradient-to-br ${service.color} bg-clip-text text-transparent`}
              animate={isHovered ? {
                scale: [1, 1.1, 1],
                filter: ["hue-rotate(0deg)", "hue-rotate(30deg)", "hue-rotate(0deg)"]
              } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {service.icon}
            </motion.div>
          </motion.div>

          <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-4">
            {service.title}
          </h3>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-light">
            {service.description}
          </p>
        </div>

        {/* Bottom Section: CTA */}
        <div className="relative z-20 mt-10 pt-6 border-t border-white/5 opacity-80 group-hover:opacity-100 transition-opacity">
          <motion.button
            className="flex items-center gap-2 text-sm font-medium text-white/70 group-hover:text-white transition-colors"
            whileHover={{ x: 5 }}
          >
            Explore service
            <svg
              className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </div>

        {/* Intense background glow strictly behind the card on hover */}
        <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-700 pointer-events-none rounded-3xl`} />
      </motion.div>
    </motion.div>
  );
}

/* ── Main Section ───────────────────────────────────────── */
export default function Services() {
  return (
    <section id="services" className="relative py-32 bg-[#020205] overflow-hidden selection:bg-indigo-500/30">

      {/* ── Ambient Background System ───────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft Noise Overlay for premium texture */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />

        {/* Top glow mesh */}
        <motion.div
          className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[160px] opacity-20 bg-indigo-600 mix-blend-screen"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Right mid glow mesh */}
        <motion.div
          className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full blur-[140px] opacity-15 bg-cyan-600 mix-blend-screen"
          animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, 50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Bottom glow mesh */}
        <motion.div
          className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[40vw] rounded-full blur-[160px] opacity-10 bg-purple-600 mix-blend-screen"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* ── Section Header ────────────────────────────── */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-xs font-semibold text-white/80 uppercase tracking-widest">
                Our Services
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-8"
          >
            Architecting the digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
              future
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto"
          >
            From strategy to execution, we deliver end-to-end technology
            services that accelerate your digital transformation and scale your impact.
          </motion.p>
        </div>

        {/* ── Grid System ───────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
