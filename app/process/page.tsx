"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FinalCTA from "../components/sections/FinalCTA";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/animations";

const steps = [
    {
        title: "Strategic Discovery",
        desc: "We dive deep into your business objectives, technical constraints, and user needs to build a rock-solid foundation.",
        icon: "🔍",
        details: ["Stakeholder Interviews", "Tech Audit", "Competitive Analysis"]
    },
    {
        title: "Architectural Planning",
        desc: "Design meets engineering. We map out the data structures, system integrations, and multi-cloud strategies.",
        icon: "📐",
        details: ["System Design", "UI/UX Prototyping", "Cloud Architecture"]
    },
    {
        title: "Agile Implementation",
        desc: "Transparent, sprint-based development with continuous feedback loops. We build for performance and security.",
        icon: "⚡",
        details: ["Rapid Prototyping", "CI/CD Integration", "Rigorous QA"]
    },
    {
        title: "Deployment & Scale",
        desc: "Seamless transition to production with ongoing optimization and proactive monitoring to ensure zero friction.",
        icon: "🚀",
        details: ["Production Rollout", "Performance Tuning", "24/7 Monitoring"]
    }
];

import PageHero from "../components/sections/PageHero";

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#020205] text-white">
        <PageHero
          title="The Fynab Methodology"
          subtitle="Precision, speed, and transparency. we've refined our process over a decade of delivering world-class technology."
          badge="Our Process"
          image="/images/heroes/process_hero.png"
        />


        {/* Big Step Timeline */}
        <section className="py-20 px-6 max-w-7xl mx-auto relative">
             {/* Central Glow Strip */}
             <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500/0 via-indigo-500/20 to-indigo-500/0 hidden lg:block" />

             {steps.map((step, i) => (
                <div key={i} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-32 relative ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Floating Step Number */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#020205] border border-indigo-500/30 items-center justify-center z-10">
                        <span className="text-indigo-400 font-bold">{i + 1}</span>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={viewportOnce}
                        className="flex-1 text-center lg:text-left"
                    >
                        <div className="text-6xl mb-6 inline-block p-6 rounded-3xl bg-white/[0.02] border border-white/5">{step.icon}</div>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">{step.title}</h2>
                        <p className="text-lg text-slate-400 font-light leading-relaxed mb-8">
                            {step.desc}
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                            {step.details.map((detail, j) => (
                                <span key={j} className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 text-sm text-slate-300">
                                    {detail}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={viewportOnce}
                        className="flex-1 w-full"
                    >
                        <div className="aspect-[16/10] rounded-[2.5rem] glass-card border border-white/10 relative overflow-hidden group">
                             <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
                             <div className="absolute inset-0 flex items-center justify-center">
                                 {/* Dynamic Flow Mockup */}
                                 <div className="w-3/4 h-2/3 border border-white/10 rounded-2xl p-6 bg-black/20 flex flex-col gap-4">
                                     <div className="h-4 w-1/3 bg-indigo-500/20 rounded-full" />
                                     <div className="flex-1 grid grid-cols-2 gap-4">
                                         <div className="bg-cyan-500/10 rounded-xl" />
                                         <div className="bg-purple-500/10 rounded-xl" />
                                     </div>
                                 </div>
                             </div>
                             {/* Noise texture */}
                             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
             ))}
        </section>

        {/* Culture / Values (Small version for process context) */}
        <section className="py-32 px-6 bg-white/[0.01]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {[
                    { title: "Transparency", desc: "Real-time boards and open communication channels." },
                    { title: "Velocity", desc: "Building fast without breaking the things that matter." },
                    { title: "Elegance", desc: "Code and design that is as clean as it is powerful." }
                ].map((val, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportOnce}
                        transition={{ delay: i * 0.1 }}
                        className="p-8"
                    >
                        <div className="text-xl font-bold mb-4">{val.title}</div>
                        <p className="text-slate-500 font-light">{val.desc}</p>
                    </motion.div>
                ))}
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
