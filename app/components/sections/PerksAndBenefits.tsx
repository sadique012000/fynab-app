"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/app/lib/animations";
import { 
  Stethoscope, 
  Palmtree, 
  GraduationCap, 
  Gamepad2, 
  Watch, 
  Gift,
  Laptop,
  TrendingUp
} from "lucide-react";

const perks = [
  {
    icon: Stethoscope,
    title: "Premium Health",
    description: "100% covered health, dental, and vision insurance for you and dependents.",
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    icon: Palmtree,
    title: "Unlimited PTO",
    description: "We trust you to manage your time. Minimum 20 days required per year.",
    color: "bg-cyan-500/10 text-cyan-500",
  },
  {
    icon: Laptop,
    title: "Setup Stipend",
    description: "$3,000 for your home office setup + latest tech every 2 years.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: GraduationCap,
    title: "L&D Fund",
    description: "$2,000 annual budget for conferences, courses, and certifications.",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    icon: TrendingUp,
    title: "Stock Options",
    description: "Generous equity package so you can own a piece of what you build.",
    color: "bg-indigo-500/10 text-indigo-500",
  },
  {
    icon: Gamepad2,
    title: "Team Fun",
    description: "Annual global retreats, virtual game nights, and local meetups.",
    color: "bg-rose-500/10 text-rose-500",
  },
  {
    icon: Watch,
    title: "Flexible Hours",
    description: "Early bird or night owl? Work when you’re most productive.",
    color: "bg-amber-500/10 text-amber-500",
  },
  {
    icon: Gift,
    title: "Anniversary Rewards",
    description: "Special bonuses and rewards for every year you stay with us.",
    color: "bg-orange-500/10 text-orange-500",
  },
];

export default function PerksAndBenefits() {
  return (
    <section className="py-24 bg-[#05070F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-20"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-black text-white mb-6"
          >
            Perks & <span className="text-indigo-400">Benefits</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            We take care of our people so they can focus on 
            doing their best work.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, i) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              whileHover={{ y: -8, backgroundColor: "rgba(255,255,255,0.04)" }}
              className="group p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className={`w-14 h-14 rounded-2xl ${perk.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <perk.icon size={28} />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                {perk.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {perk.description}
              </p>

              {/* Interactive Corner Light */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
