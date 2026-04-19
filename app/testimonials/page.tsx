"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FinalCTA from "../components/sections/FinalCTA";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/animations";

const testimonials = [
  {
    content: "Fynab didn't just build our app; they helped us rethink our entire business model. The technological foundation they laid allowed us to scale 10x in under 6 months.",
    author: "Alex Rivera",
    role: "CEO, StreamLine",
    image: "https://i.pravatar.cc/150?u=a"
  },
  {
    content: "The level of engineering precision at Fynab is something I haven't seen elsewhere. Their AI transformation roadmap was a game-changer for our data department.",
    author: "Dr. Sarah Miller",
    role: "Head of AI, BioSync",
    image: "https://i.pravatar.cc/150?u=b"
  },
  {
    content: "Truly a partner in the most literal sense. They were as invested in our success as we were. Their cloud migration strategy saved us $2M in annual costs.",
    author: "James Wilson",
    role: "CTO, Global Logistics",
    image: "https://i.pravatar.cc/150?u=c"
  },
  {
    content: "Exceptional design and even better execution. The user experience they crafted for our fintech platform has become our primary competitive advantage.",
    author: "Maya Patel",
    role: "Product Director, FinGo",
    image: "https://i.pravatar.cc/150?u=d"
  },
  {
    content: "Working with Fynab felt like adding a premium R&D department to our company overnight. Fast, reliable, and incredibly innovative.",
    author: "Tom Harken",
    role: "Founder, Zenith",
    image: "https://i.pravatar.cc/150?u=e"
  },
  {
    content: "Highly recommend for anyone looking to modernize their legacy systems. They handled our complex migration with zero downtime.",
    author: "Linda Shao",
    role: "Operations Manager, LegacyCorp",
    image: "https://i.pravatar.cc/150?u=f"
  }
];

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#020205] text-white pt-32">
        {/* Testimonials Hero */}
        <section className="py-24 px-6 text-center relative overflow-hidden">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-indigo-500/5 blur-[100px] rounded-[100%] opacity-50" />
             <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-4xl mx-auto"
            >
                <motion.h1 variants={fadeUp} className="text-5xl sm:text-7xl font-black mb-8 leading-tight">
                    Trusted by the <br /> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400">Pioneers of Tech</span>
                </motion.h1>
                <motion.p variants={fadeUp} className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
                    Hear from the leaders who chose Fynab to build their next 
                    generation of digital infrastructure.
                </motion.p>
            </motion.div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={viewportOnce}
                        transition={{ delay: i * 0.1 }}
                        className="break-inside-avoid p-8 rounded-3xl glass-card border border-white/5 relative group hover:border-indigo-500/20 transition-all duration-500"
                    >
                        <div className="absolute -inset-px bg-gradient-to-br from-indigo-500/0 via-indigo-500/0 to-cyan-500/0 group-hover:from-indigo-500/10 group-hover:via-transparent group-hover:to-cyan-500/10 rounded-3xl transition-all duration-700 pointer-events-none" />
                        <div className="mb-6 text-indigo-400 text-3xl">&ldquo;</div>
                        <p className="text-lg text-slate-300 font-light italic leading-relaxed mb-8">
                            {t.content}
                        </p>
                        <div className="flex items-center gap-4">
                            <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full border border-white/10" />
                            <div>
                                <h4 className="font-bold text-white text-sm">{t.author}</h4>
                                <p className="text-xs text-slate-500">{t.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* Logo Strip (Abbreviated) */}
        <section className="py-32 px-6 border-t border-white/5 bg-white/[0.01]">
            <div className="max-w-7xl mx-auto text-center">
                 <h2 className="text-sm font-bold text-slate-500 uppercase tracking-[0.3em] mb-12">Empowering Global Innovators</h2>
                 <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                     {["VERCEL", "STRIPE", "LINEAR", "GITHUB", "NOTION", "SLACK"].map((logo) => (
                         <div key={logo} className="text-xl font-black italic tracking-tighter text-white/50">{logo}</div>
                     ))}
                 </div>
            </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />

      <style jsx global>{`
        .glass-card {
           background: rgba(255, 255, 255, 0.03);
           backdrop-filter: blur(20px);
        }
      `}</style>
    </>
  );
}
