"use client";

import { motion } from "framer-motion";
import { services } from "@/app/lib/data";
import { ServiceCard } from "@/app/components/ServiceCard";

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
