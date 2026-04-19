"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/app/lib/animations";
import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    alt: "Team Collaboration",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop",
    alt: "Hybrid Office",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop",
    alt: "Remote Work",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop",
    alt: "Company Retreat",
    span: "md:col-span-1 md:row-span-1",
  },
];

export default function LifeAtFynab() {
  return (
    <section className="py-24 bg-[#05070F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16"
        >
          <div className="max-w-2xl">
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black text-white mb-6"
            >
              Life at <span className="text-indigo-500">Fynab</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-slate-400"
            >
              We’re more than just a team. We’re a community of innovators 
              building the future together, from wherever we are in the world.
            </motion.p>
          </div>
          <motion.div variants={fadeUp} className="hidden md:block">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-[#05070F] bg-slate-800 overflow-hidden">
                  <img 
                    src={`https://i.pravatar.cc/150?u=${i + 10}`} 
                    alt="Team member" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-2 border-[#05070F] bg-indigo-600 flex items-center justify-center text-xs font-bold text-white">
                +42
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-3xl overflow-hidden group ${img.span} border border-white/[0.08]`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-white font-bold text-lg">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
