"use client";

import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerChild,
  viewportOnce,
} from "@/app/lib/animations";
import { Cloud, Brain, Network, ShieldCheck } from "lucide-react";

const pillars = [
  {
    title: "Cloud-Native",
    description:
      "Every system we build is designed for the cloud from the ground up — containerized, orchestrated, and infinitely scalable across any provider.",
    icon: Cloud,
    gradient: "from-cyan-500 to-blue-500",
    glow: "rgba(6,182,212,0.25)",
    features: ["Kubernetes-native", "Multi-cloud ready", "Auto-scaling"],
  },
  {
    title: "AI-First",
    description:
      "We embed artificial intelligence into everything we build — from predictive analytics to intelligent automation and generative AI solutions.",
    icon: Brain,
    gradient: "from-purple-500 to-violet-500",
    glow: "rgba(139,92,246,0.25)",
    features: ["ML pipelines", "NLP integration", "Predictive models"],
  },
  {
    title: "Scalable Architecture",
    description:
      "From microservices to event-driven systems, our architectures handle millions of requests while maintaining sub-second response times.",
    icon: Network,
    gradient: "from-indigo-500 to-blue-500",
    glow: "rgba(99,102,241,0.25)",
    features: ["Microservices", "Event-driven", "Edge computing"],
  },
  {
    title: "Security-First",
    description:
      "Zero-trust architecture, end-to-end encryption, and continuous compliance monitoring are the DNA of every solution we deliver.",
    icon: ShieldCheck,
    gradient: "from-emerald-500 to-teal-500",
    glow: "rgba(16,185,129,0.25)",
    features: ["Zero-trust", "SOC 2 compliant", "E2E encryption"],
  },
];

export default function TechDNA() {
  return (
    <section className="relative py-32 bg-[#05070F] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] rounded-full blur-[160px] opacity-10 bg-purple-600 mix-blend-screen"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[-5%] w-[35vw] h-[35vw] rounded-full blur-[140px] opacity-10 bg-indigo-600 mix-blend-screen"
          animate={{ scale: [1, 1.1, 1] }}
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
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-xs font-semibold text-white/80 uppercase tracking-widest">
                Technology DNA
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
            How We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">
              Build
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-slate-400 font-light leading-relaxed max-w-2xl mx-auto"
          >
            Our technology philosophy is embedded into every layer of every
            solution we deliver.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={staggerChild}
                whileHover={{ y: -4 }}
                className="relative p-8 rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl group overflow-hidden"
              >
                {/* Gradient line accent */}
                <div
                  className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${pillar.gradient} opacity-30 group-hover:opacity-60 transition-opacity duration-500`}
                />

                {/* Glow */}
                <div
                  className="absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-700"
                  style={{ background: pillar.glow }}
                />

                <div className="relative z-10">
                  <div className="flex items-start gap-5 mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center text-white flex-shrink-0`}
                      style={{ boxShadow: `0 8px 25px ${pillar.glow}` }}
                    >
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 ml-[68px]">
                    {pillar.features.map((f) => (
                      <span
                        key={f}
                        className="px-3 py-1 text-xs font-medium text-slate-400 bg-white/[0.04] border border-white/[0.06] rounded-full group-hover:border-white/10 group-hover:text-slate-300 transition-colors"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${pillar.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
