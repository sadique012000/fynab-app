"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/sections/PageHero";
import FinalCTA from "../components/sections/FinalCTA";
import ValuesSection from "../components/about/ValuesSection";
import GlobalPresence from "../components/about/GlobalPresence";
import TechDNA from "../components/about/TechDNA";
import CultureSection from "../components/about/CultureSection";
import ClientTrust from "../components/about/ClientTrust";
import EnhancedTeamSection from "../components/about/EnhancedTeamSection";
import { viewportOnce } from "../lib/animations";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#020205] text-white">
        <PageHero
          title="We build tools for the Architects of the future"
          subtitle="Founded in 2011, Fynab was born from a simple mission: to make complex technology feel effortless. Today, we're a global team of engineers, designers, and strategists helping visionaries scale their impact."
          badge="Our Story"
          image="/images/heroes/about_hero.png"
        />

        {/* Mission / Vision */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Our Mission",
                desc: "To empower organizations by providing the technological bedrock needed for infinite scaling.",
                color: "border-indigo-500/20",
              },
              {
                title: "Our Vision",
                desc: "A world where technology is a seamless extension of human progress, not a barrier to it.",
                color: "border-cyan-500/20",
              },
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
                <h3 className="text-3xl font-bold mb-6 text-white">
                  {item.title}
                </h3>
                <p className="text-xl text-slate-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values / Principles */}
        <ValuesSection />

        {/* Global Presence / Impact */}
        <GlobalPresence />

        {/* Timeline */}
        <section className="py-32 px-6 relative bg-white/[0.01]">
          <div className="max-w-7xl mx-auto text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                <span className="text-xs font-semibold text-white/80 uppercase tracking-widest">
                  Our Journey
                </span>
              </div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={viewportOnce}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-4"
            >
              Milestones that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Defined Us
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-400 text-lg"
            >
              A journey of continuous innovation.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto relative px-4">
            {/* Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent" />

            {[
              {
                year: "2011",
                title: "The Beginning",
                desc: "Started as a small team of 3 in a garage with a dream to revolutionize IT consulting.",
              },
              {
                year: "2015",
                title: "Enterprise Shift",
                desc: "Landed our first Fortune 500 client and scaled the team to 50+ engineers.",
              },
              {
                year: "2019",
                title: "Global Expansion",
                desc: "Opened offices in London and Singapore, serving clients across 30+ countries.",
              },
              {
                year: "2024",
                title: "AI Integration",
                desc: "Launched our full AI transformation suite, powering next-gen enterprise solutions.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`mb-20 flex items-center justify-between w-full ${
                  i % 2 === 0 ? "flex-row-reverse" : ""
                }`}
              >
                <div className="w-5/12" />
                <div className="relative z-10 w-5 h-5 rounded-full bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,1)] border-2 border-[#020205]" />
                <div
                  className={`w-5/12 p-8 rounded-2xl glass-card border border-white/[0.06] hover:border-white/[0.12] transition-colors group ${
                    i % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-2">
                    {item.year}
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-white">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technology DNA */}
        <TechDNA />

        {/* Enhanced Team / Leadership */}
        <EnhancedTeamSection />

        {/* Work Culture / Life at Fynab */}
        <CultureSection />

        {/* Client Trust / Social Proof */}
        <ClientTrust />

        {/* Final CTA */}
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
