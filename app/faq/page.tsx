"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { fadeUp, staggerContainer, staggerChild } from "../lib/animations";

const faqs = [
  {
    category: "Platform",
    questions: [
      { q: "How scalable is the underlying architecture?", a: "Fynab leverages an auto-scaling Kubernetes cluster deployed across multi-region AWS environments, ensuring zero latency during peak traffic spikes." },
      { q: "Do you offer on-premise deployments?", a: "Currently, we operate exclusively as a cloud-native SaaS to guarantee security patch velocity. Enterprise plans may request isolated Virtual Private Clouds (VPCs)." },
    ]
  },
  {
    category: "Security & Compliance",
    questions: [
      { q: "Is the data encrypted?", a: "Yes. All data is encrypted at rest using AES-256 and in transit via TLS 1.3. We maintain strict SOC2 Type II compliance." },
      { q: "What is your data retention policy?", a: "Metadata is retained for 30 days. Core application data is retained indefinitely unless a cascading deletion trigger is fired via your dashboard." },
    ]
  },
  {
    category: "Billing",
    questions: [
      { q: "Are there API rate limits?", a: "Standard tiers are limited to 1,000 req/sec. Enterprise tiers receive dedicated throughput lanes bypassing rate limiters entirely." },
      { q: "Can we pay via invoice?", a: "Yes, annual Enterprise contracts support net-30 invoicing. Standard plans require a valid credit card." },
    ]
  }
];

export default function FAQPage() {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#020205] text-slate-300">
      <Header />

      <main className="relative pt-32 pb-24 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute top-1/4 left-0 w-full h-[600px] bg-gradient-to-b from-indigo-900/10 to-transparent -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center mb-16">
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-black text-white mb-6">
              Frequently Asked Questions
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-slate-400 max-w-2xl mx-auto">
              Technical insights and logistical answers for integrating Fynab into your stack.
            </motion.p>
          </motion.div>

          <div className="space-y-16">
            {faqs.map((group, idx) => (
              <motion.div 
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">
                  {group.category}
                </h2>
                <div className="space-y-4">
                  {group.questions.map((item) => (
                    <div 
                      key={item.q}
                      className="bg-white/[0.02] border border-white/[0.05] rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/30"
                    >
                      <button
                        onClick={() => setActiveQuestion(activeQuestion === item.q ? null : item.q)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                      >
                        <span className="font-semibold text-white pr-4">{item.q}</span>
                        <motion.span 
                          animate={{ rotate: activeQuestion === item.q ? 180 : 0 }}
                          className="flex-shrink-0 text-indigo-400"
                        >
                          ↓
                        </motion.span>
                      </button>
                      
                      <motion.div
                        initial={false}
                        animate={{ 
                          height: activeQuestion === item.q ? "auto" : 0,
                          opacity: activeQuestion === item.q ? 1 : 0
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-0 text-slate-400 leading-relaxed">
                          {item.a}
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
