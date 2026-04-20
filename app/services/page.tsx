"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { services } from "../lib/data";
import { ServiceCard } from "../components/ServiceCard";
import FinalCTA from "../components/sections/FinalCTA";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/animations";

import PageHero from "../components/sections/PageHero";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#020205] text-white">
        <PageHero
          title="Comprehensive Solution for a Digital-First World"
          subtitle="We offer a full suite of IT consulting and software development services to help you navigate the complexities of modern technology and achieve sustainable growth."
          badge="Our Services"
          image="/images/heroes/services_hero.png"
        />


        {/* Services Grid */}
        <section className="py-20 px-6 sm:px-8 lg:px-12 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Deep Dive Sections */}
        {services.map((service, index) => (
          <section
            key={service.id}
            className={`py-32 px-6 sm:px-8 lg:px-12 relative overflow-hidden ${
              index % 2 === 0 ? "bg-white/[0.01]" : "bg-transparent"
            }`}
          >
             {/* Gradient Accent */}
             <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-1/2 h-full bg-gradient-to-b from-indigo-500/5 to-transparent blur-[100px] opacity-20`} />

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.8 }}
                className={`flex-1 ${index % 2 === 0 ? "order-1" : "order-1 lg:order-2"}`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <div className="text-white scale-125">{service.icon}</div>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">{service.title}</h2>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed font-light">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.details?.map((detail) => (
                    <li key={detail} className="flex items-center gap-3 text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.8 }}
                className={`flex-1 relative ${index % 2 === 0 ? "order-2" : "order-2 lg:order-1"}`}
              >
                {/* Visual Placeholder for deep dive */}
                <div className="aspect-video rounded-3xl overflow-hidden glass-card border border-white/10 group relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity duration-700`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${service.color} opacity-20 blur-3xl animate-pulse`} />
                        <div className="text-white opacity-40 text-8xl font-black select-none tracking-tighter uppercase italic">
                            {service.id}
                        </div>
                    </div>
                    {/* Glassy Overlay with noise */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
                </div>
              </motion.div>
            </div>
          </section>
        ))}

        {/* Process Section */}
        <section className="py-32 px-6 sm:px-8 lg:px-12 relative bg-[#05070F]">
            <div className="max-w-7xl mx-auto text-center mb-20">
                <h2 className="text-3xl sm:text-5xl font-bold mb-6">Our Delivery Roadmap</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    A streamlined, predictable approach to turning your vision into a high-performance digital reality.
                </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                    { step: "01", title: "Discovery", desc: "Understanding goals" },
                    { step: "02", title: "Design", desc: "Architecting scale" },
                    { step: "03", title: "Develop", desc: "Building the core" },
                    { step: "04", title: "Deploy", desc: "Continuous impact" }
                ].map((item, i) => (
                    <motion.div
                        key={item.step}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportOnce}
                        transition={{ delay: i * 0.1 }}
                        className="relative p-6 rounded-2xl glass-card border border-white/5 hover:border-indigo-500/30 transition-colors group"
                    >
                        <div className="text-4xl font-black text-indigo-500/20 mb-4 group-hover:text-indigo-500/40 transition-colors">
                            {item.step}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-slate-500">{item.desc}</p>
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
