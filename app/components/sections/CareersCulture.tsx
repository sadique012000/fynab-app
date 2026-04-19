"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/app/lib/animations";
import { Heart, Globe, Zap, Shield, Rocket, Coffee } from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Remote First",
    description: "Work from anywhere in the world. We value results over time zone.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: Rocket,
    title: "Fast Growth",
    description: "Accelerate your career with challenging projects and rapid scaling.",
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
  },
  {
    icon: Zap,
    title: "Modern Stack",
    description: "Use the latest technologies like Next.js, AI, and Cloud Native tools.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    icon: Shield,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness stipends for everyone.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Flexible hours and unlimited PTO to keep you energized and happy.",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
  },
  {
    icon: Heart,
    title: "Inclusive Culture",
    description: "A diverse and supportive team that celebrates every win together.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
];

export default function CareersCulture() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#05070F]">
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
            Why join <span className="text-indigo-500">Fynab</span>?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            We believe in building a company where people can do the best work of their lives.
            Our culture is built on trust, transparency, and high performance.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.04] hover:border-white/[0.12] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
                <benefit.icon size={120} />
              </div>
              
              <div className={`w-12 h-12 rounded-2xl ${benefit.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <benefit.icon className={benefit.color} size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
              
              <div className="mt-6 w-full h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent group-hover:via-indigo-500/30 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
