"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/app/lib/animations";
import { 
  Atom, 
  Cpu, 
  Cloud, 
  Database, 
  Globe, 
  Layers, 
  Lock, 
  Zap, 
  Terminal,
  Code2
} from "lucide-react";

const techStack = [
  { name: "React", icon: Atom, color: "text-blue-400" },
  { name: "Next.js", icon: Zap, color: "text-white" },
  { name: "Node.js", icon: Terminal, color: "text-green-500" },
  { name: "TypeScript", icon: Code2, color: "text-blue-500" },
  { name: "AWS", icon: Cloud, color: "text-orange-400" },
  { name: "PostgreSQL", icon: Database, color: "text-indigo-400" },
  { name: "Cybersecurity", icon: Lock, color: "text-rose-400" },
  { name: "AI/ML", icon: Cpu, color: "text-purple-400" },
];

export default function TechStackShowcase() {
  return (
    <section className="py-24 bg-[#05070F] relative overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-black text-white mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Tech Stack</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            We use the most modern technologies to build high-performance, 
            enterprise-grade solutions for our clients.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              variants={fadeUp}
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
              className="group p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl transition-all duration-300 flex flex-col items-center justify-center text-center"
            >
              <div className={`p-4 rounded-2xl bg-white/[0.03] mb-4 group-hover:scale-110 transition-transform duration-500 ${tech.color}`}>
                <tech.icon size={32} />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                {tech.name}
              </h3>
              
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 blur-2xl rounded-3xl transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Floating tech background decoration */}
        <div className="absolute top-0 right-0 p-20 opacity-[0.02] pointer-events-none">
          <Globe size={400} className="animate-pulse" />
        </div>
      </div>
    </section>
  );
}
