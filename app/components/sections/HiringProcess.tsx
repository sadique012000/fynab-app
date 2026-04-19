"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/app/lib/animations";
import { Send, Search, Users, FileText, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Apply",
    description: "Find a role that matches your skills and submit your application.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Search,
    title: "Review",
    description: "Our talent team reviews your profile and matches it with our needs.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Interview",
    description: "Chat with your potential team and showcase your expertise.",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: Send,
    title: "Offered",
    description: "We extend an offer and welcome you to the Fynab family.",
    color: "from-teal-500 to-emerald-500",
  },
];

export default function HiringProcess() {
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
            How we <span className="text-indigo-500">Hire</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Our hiring process is transparent, fast, and designed 
            to help you show your best self.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-indigo-500/20 via-cyan-500/20 to-emerald-500/20 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center text-center group"
              >
                <div className={`relative w-24 h-24 rounded-3xl bg-gradient-to-br ${step.color} p-px mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(79,70,229,0.2)]`}>
                  <div className="w-full h-full rounded-3xl bg-[#0A0C14] flex items-center justify-center relative overflow-hidden">
                    <step.icon size={32} className="text-white relative z-10" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10`} />
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white text-[#0A0C14] font-black text-sm flex items-center justify-center border-2 border-[#0A0C14] z-20">
                    {i + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed px-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          className="mt-20 p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center">
              <CheckCircle className="text-indigo-500" size={24} />
            </div>
            <div>
              <h4 className="text-white font-bold">Fast-track hiring</h4>
              <p className="text-slate-500 text-sm">Most applications get a response within 48 hours.</p>
            </div>
          </div>
          <button className="px-6 py-3 bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.1] text-white font-bold rounded-xl transition-all">
            Hiring FAQs
          </button>
        </motion.div>
      </div>
    </section>
  );
}
