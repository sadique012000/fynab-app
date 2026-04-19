"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/animations";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#020205] text-white pt-32">
        {/* Contact Hero */}
        <section className="py-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
             <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <motion.h1 variants={fadeUp} className="text-5xl sm:text-7xl font-black mb-8">
                    Let&apos;s Build the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
                        Future Together
                    </span>
                </motion.h1>
                <motion.p variants={fadeUp} className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                    Have a vision? We have the tools. Reach out and let&apos;s discuss 
                    how Fynab can accelerate your digital transformation.
                </motion.p>
            </motion.div>
        </section>

        {/* Contact Content */}
        <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info Cards */}
            <div className="space-y-8">
                {[
                    { title: "Drop us an email", info: "hello@fynab.io", icon: "📧", sub: "Response within 24h" },
                    { title: "Give us a call", info: "+1 (555) 000-0000", icon: "📞", sub: "Mon-Fri / 9am-5pm" },
                    { title: "Visit our HQ", info: "San Francisco, CA", icon: "🏢", sub: "Silicon Valley" }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={viewportOnce}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 rounded-3xl glass-card border border-white/5 flex items-start gap-6 group hover:border-indigo-500/30 transition-colors"
                    >
                        <div className="text-3xl p-4 rounded-2xl bg-white/[0.03] group-hover:bg-indigo-500/10 transition-colors">
                            {item.icon}
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">{item.title}</h4>
                            <p className="text-2xl font-bold text-white mb-1">{item.info}</p>
                            <p className="text-sm text-indigo-400/60">{item.sub}</p>
                        </div>
                    </motion.div>
                ))}

                {/* Map Placeholder */}
                <div className="aspect-video rounded-3xl overflow-hidden glass-card border border-white/5 relative group">
                     <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] z-10" />
                     <div className="absolute inset-0 bg-indigo-500/5 items-center justify-center flex">
                        <span className="text-white/10 font-black text-6xl italic select-none">MAP VIEW</span>
                     </div>
                </div>
            </div>

            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                className="p-10 rounded-[2.5rem] glass-card border border-white/10 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full -mr-20 -mt-20 pointer-events-none" />
                
                <h3 className="text-3xl font-bold mb-8">Send a Message</h3>
                
                <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-2">Full Name</label>
                            <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-white/[0.04] border border-white/5 focus:border-indigo-500/50 focus:bg-white/[0.06] outline-none transition-all placeholder:text-slate-600" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-2">Email Address</label>
                            <input type="email" placeholder="john@company.com" className="w-full px-6 py-4 rounded-2xl bg-white/[0.04] border border-white/5 focus:border-indigo-500/50 focus:bg-white/[0.06] outline-none transition-all placeholder:text-slate-600" />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-2">Subject</label>
                        <select className="w-full px-6 py-4 rounded-2xl bg-white/[0.04] border border-white/5 focus:border-indigo-500/50 focus:bg-white/[0.06] outline-none transition-all text-slate-300">
                             <option>IT Consulting</option>
                             <option>Custom Software</option>
                             <option>AI Transformation</option>
                             <option>Other Enquiry</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-2">How can we help?</label>
                        <textarea rows={5} placeholder="Tell us about your project..." className="w-full px-6 py-4 rounded-2xl bg-white/[0.04] border border-white/5 focus:border-indigo-500/50 focus:bg-white/[0.06] outline-none transition-all placeholder:text-slate-600 resize-none" />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-5 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-bold shadow-[0_0_30px_rgba(79,70,229,0.4)] hover:shadow-[0_0_50px_rgba(79,70,229,0.6)] transition-all flex items-center justify-center gap-3 group"
                    >
                        Initiate Consultation
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </motion.button>
                </form>
            </motion.div>
        </section>
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
