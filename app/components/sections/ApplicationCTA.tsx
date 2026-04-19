"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/app/lib/animations";
import { Mail, Send } from "lucide-react";

export default function ApplicationCTA() {
  return (
    <section className="py-24 bg-[#05070F] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="relative p-12 md:p-20 rounded-[3rem] bg-white/[0.02] border border-white/[0.08] backdrop-blur-2xl text-center overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-indigo-500/20 rounded-tl-[3rem] -translate-x-4 -translate-y-4" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-cyan-500/20 rounded-br-[3rem] translate-x-4 translate-y-4" />

          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Don't see your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">dream role</span>?
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            We're always looking for talented individuals to join our mission. 
            Send us your resume and tell us how you can make an impact at Fynab.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="mailto:careers@fynab.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:shadow-[0_0_50px_rgba(79,70,229,0.5)]"
            >
              <Mail size={20} />
              Send your Resume
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-10 py-5 bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] text-white font-bold rounded-2xl transition-all"
            >
              <Send size={20} className="text-cyan-400" />
              General Application
            </motion.button>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8 text-slate-500 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              Response in 48h
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              Talent Pool
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
