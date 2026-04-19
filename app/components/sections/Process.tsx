"use client";
/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerChild,
  viewportOnce,
} from "@/app/lib/animations";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We dive deep into your business objectives, technical landscape, and challenges to craft a tailored roadmap.",
    details: ["Stakeholder interviews", "Technical audit", "Roadmap design"],
    color: "indigo",
    gradient: "from-indigo-500/10 to-indigo-500/0 hover:from-indigo-500/20",
    border: "group-hover:border-indigo-500/30",
    glow: "shadow-indigo-500/10 group-hover:shadow-indigo-500/20",
    blob: "bg-indigo-500/20",
  },
  {
    number: "02",
    title: "Design & Architecture",
    description:
      "Our architects design scalable, secure solutions with clear specifications and interactive prototypes.",
    details: ["System architecture", "UI/UX prototypes", "Security planning"],
    color: "cyan",
    gradient: "from-cyan-500/10 to-cyan-500/0 hover:from-cyan-500/20",
    border: "group-hover:border-cyan-500/30",
    glow: "shadow-cyan-500/10 group-hover:shadow-cyan-500/20",
    blob: "bg-cyan-500/20",
  },
  {
    number: "03",
    title: "Development & Testing",
    description:
      "Agile development with rigorous QA ensures every solution meets the highest quality standards.",
    details: ["Sprint-based dev", "Automated testing", "Code reviews"],
    color: "violet",
    gradient: "from-violet-500/10 to-violet-500/0 hover:from-violet-500/20",
    border: "group-hover:border-violet-500/30",
    glow: "shadow-violet-500/10 group-hover:shadow-violet-500/20",
    blob: "bg-violet-500/20",
  },
  {
    number: "04",
    title: "Deploy & Optimize",
    description:
      "We handle deployment, monitoring, and continuous optimization to maximize your technology investment.",
    details: ["CI/CD pipelines", "Performance monitoring", "Ongoing support"],
    color: "emerald",
    gradient: "from-emerald-500/10 to-emerald-500/0 hover:from-emerald-500/20",
    border: "group-hover:border-emerald-500/30",
    glow: "shadow-emerald-500/10 group-hover:shadow-emerald-500/20",
    blob: "bg-emerald-500/20",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
      delay: i * 0.15,
    },
  }),
};

const pulseGlow = {
  initial: { scale: 1, opacity: 0.5 },
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const }
  }
};

export default function Process() {
  return (
    <section id="process" className="relative py-32 bg-[#060913] overflow-hidden">
      {/* Background Soft Mesh Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[50rem] h-[50rem] bg-indigo-600/10 blur-[120px] rounded-full mix-blend-screen opacity-70" 
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] -right-[10%] w-[40rem] h-[40rem] bg-cyan-600/10 blur-[100px] rounded-full mix-blend-screen opacity-70" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="max-w-3xl mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.div variants={staggerChild} className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-indigo-500/50"></span>
            <span className="text-sm font-semibold text-indigo-400 uppercase tracking-widest">
              Guided Journey
            </span>
          </motion.div>
          <motion.h2
            variants={staggerChild}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            How We Deliver <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Uncompromising Results.
            </span>
          </motion.h2>
          <motion.p
            variants={staggerChild}
            className="text-xl text-slate-400 max-w-2xl font-light leading-relaxed"
          >
            A battle-tested progression refined over hundreds of enterprise deployments.
            No guesswork, just engineering excellence at every stage.
          </motion.p>
        </motion.div>

        {/* The Journey Container */}
        <div className="relative mt-12 pb-12">
          
          {/* Animated Connecting Path (Desktop only) */}
          <div className="hidden lg:block absolute top-[2.5rem] left-0 right-0 h-[2px] bg-slate-800 rounded-full z-0 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 bottom-0 w-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "circOut" }}
            />
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                custom={i}
                variants={cardVariant}
                whileHover={{ y: -8 }}
                className={`group relative flex flex-col bg-[#0A0E17]/60 backdrop-blur-xl rounded-[2rem] border border-white/5 hover:border-transparent p-[1px] shadow-lg shadow-black/50 hover:shadow-2xl transition-all duration-500`}
              >
                {/* Number Badge sticking out perfectly aligned to the path line */}
                <div className="absolute -top-6 lg:-top-10 left-6 lg:left-8 flex flex-col items-center">
                  <motion.div 
                    variants={pulseGlow}
                    initial="initial"
                    animate="animate"
                    className={`absolute inset-0 ${step.blob} blur-xl rounded-full z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} 
                  />
                  <div className="relative w-14 h-14 rounded-2xl bg-[#0F1626] shadow-xl shadow-black/80 border border-white/10 flex items-center justify-center z-10 group-hover:scale-110 group-hover:border-white/20 transition-all duration-500">
                    <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 group-hover:from-white group-hover:to-white transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>
                </div>

                <div className={`relative h-full flex flex-col p-8 pt-12 rounded-[1.9rem] overflow-hidden bg-[#0A0E17]/80 border border-white/[0.03] ${step.border} transition-colors duration-500`}>
                  
                  {/* Subtle Background Gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`} />

                  <div className="relative z-10 flex-col flex h-full">
                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-slate-400 font-light leading-relaxed mb-8 flex-grow">
                      {step.description}
                    </p>

                    {/* Tags List */}
                    <ul className="flex flex-col gap-3">
                      {step.details.map((detail, idx) => (
                        <motion.li 
                          key={detail}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.15 + idx * 0.1 + 0.3 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${
  step.color === 'indigo' ? 'bg-indigo-400' :
  step.color === 'cyan' ? 'bg-cyan-400' :
  step.color === 'emerald' ? 'bg-emerald-400' :
  step.color === 'violet' ? 'bg-violet-400' :
  'bg-emerald-400'
} group-hover:scale-150 group-hover:shadow-[0_0_8px_currentColor] transition-all duration-300`} />
                          <span className="text-sm font-medium text-slate-400 group-hover:text-slate-200 transition-colors">
                            {detail}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
