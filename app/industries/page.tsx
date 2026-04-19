"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FinalCTA from "../components/sections/FinalCTA";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/animations";

const industries = [
  {
    title: "FinTech & Banking",
    desc: "Secure, scalable payment processing and AI-driven fraud detection systems.",
    icon: "💳",
    stats: "40% faster transactions",
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Healthcare",
    desc: "Next-gen patient management and HIPAA-compliant data infrastructure.",
    icon: "🏥",
    stats: "100% compliance record",
    color: "from-emerald-400 to-teal-600"
  },
  {
    title: "E-Commerce",
    desc: "Hyper-dynamic storefronts with intelligent recommendation engines.",
    icon: "🛍️",
    stats: "25% conversion lift",
    color: "from-orange-400 to-rose-500"
  },
  {
    title: "Logistics",
    desc: "Real-time supply chain tracking and automated routing optimization.",
    icon: "🚚",
    stats: "30% fuel efficiency",
    color: "from-cyan-400 to-blue-500"
  },
  {
    title: "Real Estate",
    desc: "Immersive VR tours and automated property management portals.",
    icon: "🏠",
    stats: "50% more leads",
    color: "from-purple-500 to-fuchsia-600"
  },
  {
    title: "Education",
    desc: "Interactive LMS platforms and collaborative remote learning tools.",
    icon: "🎓",
    stats: "95% student engagement",
    color: "from-amber-400 to-orange-500"
  }
];

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#020205] text-white pt-32">
        {/* Hero */}
        <section className="py-20 px-6 max-w-7xl mx-auto text-center">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <motion.h1 variants={fadeUp} className="text-5xl sm:text-7xl font-black mb-8">
                    Empowering Every <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
                        Industry Vertical
                    </span>
                </motion.h1>
                <motion.p variants={fadeUp} className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light">
                    We bring domain expertise and cutting-edge tech to help leaders 
                    across various sectors redefine what&apos;s possible.
                </motion.p>
            </motion.div>
        </section>

        {/* Industry Cards */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportOnce}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="relative group p-8 rounded-3xl glass-card border border-white/5 hover:border-white/10 transition-all overflow-hidden"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700`} />
                        <div className="relative z-10">
                            <div className="text-4xl mb-6">{item.icon}</div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-slate-400 mb-8 font-light leading-relaxed">{item.desc}</p>
                            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                <span className="text-sm font-semibold text-cyan-400">{item.stats}</span>
                                <span className="text-xs text-slate-500 uppercase tracking-widest">Case Study</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* Case-based solutions */}
        <section className="py-32 bg-white/[0.01]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-8">Solving Sector-Specific <br /> Challenges</h2>
                        <div className="space-y-8">
                            {[
                                { title: "Data Security", desc: "Military-grade encryption for high-stakes industries." },
                                { title: "Scalability", desc: "Infrastructure that grows with your user base." },
                                { title: "Interoperability", desc: "Seamless integration with legacy ecosystems." }
                            ].map((solve, i) => (
                                <div key={i} className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0">
                                        <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-2">{solve.title}</h4>
                                        <p className="text-slate-400 font-light">{solve.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-full border border-white/5 animate-spin-slow p-20">
                            <div className="w-full h-full rounded-full border border-dashed border-white/20" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-40 h-40 bg-indigo-500/20 blur-[100px] rounded-full animate-pulse" />
                            <div className="text-6xl font-black italic text-white/10 select-none">FYNAB</div>
                        </div>
                    </div>
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
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </>
  );
}
