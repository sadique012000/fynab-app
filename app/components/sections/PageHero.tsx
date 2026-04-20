"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/app/lib/animations";
import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function PageHero({
  title,
  subtitle,
  badge,
  image,
  ctaText,
  ctaLink,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#05070F]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-40 grayscale-[0.5] contrast-[1.1]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070F] via-transparent to-[#05070F]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070F] via-transparent to-[#05070F]/50" />
        
        {/* Animated Light Blobs */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full mix-blend-screen opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={viewportOnce}
          className="max-w-4xl"
        >
          {badge && (
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 mb-6"
            >
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">
                {badge}
              </span>
            </motion.div>
          )}

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-black text-white leading-tight mb-8"
          >
            {title.split(" ").map((word, i) => (
               <span key={i} className={i % 3 === 2 ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400" : ""}>
                 {word}{" "}
               </span>
            ))}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-xl text-slate-400 leading-relaxed font-light mb-10 max-w-2xl"
          >
            {subtitle}
          </motion.p>

          {ctaText && ctaLink && (
            <motion.div variants={fadeUp}>
              <a
                href={ctaLink}
                className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:shadow-[0_0_50px_rgba(79,70,229,0.5)] transform hover:-translate-y-1"
              >
                {ctaText}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Decorative Glass Element */}
      <div className="absolute right-[-5%] bottom-[10%] w-[400px] h-[400px] glass-card border border-white/5 rounded-full blur-sm opacity-20 hidden lg:block" />
      
      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(40px);
        }
      `}</style>
    </section>
  );
}
