"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FinalCTA from "../components/sections/FinalCTA";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/animations";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#020205] text-white pt-32">
        {/* Brand Story Hero */}
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-500/5 blur-[120px] rounded-full" />
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 mb-6">
                        <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Our Story</span>
                    </motion.div>
                    <motion.h1 variants={fadeUp} className="text-5xl sm:text-7xl font-black mb-8 leading-tight">
                        We build tools <br /> 
                        for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400">Architects</span> <br />
                        of the future.
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-xl text-slate-400 font-light leading-relaxed max-w-xl">
                        Founded in 2011, Fynab was born from a simple mission: to make complex technology 
                        feel effortless. Today, we&apos;re a global team of engineers, designers, and strategists 
                        helping visionaries scale their impact.
                    </motion.p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative"
                >
                    <div className="aspect-square rounded-3xl overflow-hidden glass-card border border-white/5 relative">
                         <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />
                         <div className="absolute inset-0 flex items-center justify-center p-12">
                            <div className="w-full h-full border border-white/5 rounded-2xl flex items-center justify-center bg-white/[0.02]">
                                <span className="text-8xl font-black text-white/5 italic select-none">FYNAB</span>
                            </div>
                         </div>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* Mission / Vision */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                    { title: "Our Mission", desc: "To empower organizations by providing the technological bedrock needed for infinite scaling.", color: "border-indigo-500/20" },
                    { title: "Our Vision", desc: "A world where technology is a seamless extension of human progress, not a barrier to it.", color: "border-cyan-500/20" }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportOnce}
                        className={`p-10 rounded-3xl glass-card border ${item.color} relative group`}
                    >
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <div className="w-12 h-12 bg-white rounded-full blur-xl" />
                        </div>
                        <h3 className="text-3xl font-bold mb-6 text-white">{item.title}</h3>
                        <p className="text-xl text-slate-400 font-light leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* Timeline */}
        <section className="py-32 px-6 relative bg-white/[0.01]">
            <div className="max-w-7xl mx-auto text-center mb-24">
                <h2 className="text-4xl font-bold mb-4">Milestones that Defined Us</h2>
                <p className="text-slate-500">A journey of continuous innovation.</p>
            </div>

            <div className="max-w-4xl mx-auto relative px-4">
                {/* Vertical Line */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent" />

                {[
                    { year: "2011", title: "The Beginning", desc: "Started as a small team of 3 in a garage." },
                    { year: "2015", title: "Enterprise Shift", desc: "Landed our first Fortune 500 client." },
                    { year: "2019", title: "Global Expansion", desc: "Opened offices in London and Singapore." },
                    { year: "2024", title: "AI Integration", desc: "Launched our full AI transformation suite." }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={viewportOnce}
                        className={`mb-20 flex items-center justify-between w-full ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}
                    >
                        <div className="w-5/12" />
                        <div className="relative z-10 w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,1)]" />
                        <div className={`w-5/12 p-8 rounded-2xl glass-card border border-white/5 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                            <div className="text-2xl font-black text-indigo-500 mb-2">{item.year}</div>
                            <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                            <p className="text-sm text-slate-400 font-light leading-relaxed">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* Team Section */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-24">
                <h2 className="text-4xl font-bold mb-4">Meet the Visionaries</h2>
                <p className="text-slate-500">The minds behind the machines.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { name: "John Smith", role: "CEO & Founder", image: "https://i.pravatar.cc/300?img=1" },
                    { name: "Sarah Chen", role: "CTO", image: "https://i.pravatar.cc/300?img=32" },
                    { name: "Marcus Thorne", role: "Design Director", image: "https://i.pravatar.cc/300?img=11" },
                    { name: "Elena Rossi", role: "Head of AI", image: "https://i.pravatar.cc/300?img=26" }
                ].map((member, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={viewportOnce}
                        transition={{ delay: i * 0.1 }}
                        className="group relative"
                    >
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative border border-white/5">
                            <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                            <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[50px] mix-blend-screen" />
                        </div>
                        <h4 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{member.name}</h4>
                        <p className="text-slate-500 text-sm">{member.role}</p>
                    </motion.div>
                ))}
            </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />

      <style jsx global>{`
        .glass-card {
           background: rgba(255, 255, 255, 0.02);
           backdrop-filter: blur(20px);
        }
      `}</style>
    </>
  );
}
