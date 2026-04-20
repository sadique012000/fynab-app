"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  staggerChild,
  viewportOnce,
} from "@/app/lib/animations";

const testimonials = [
  {
    quote:
      "Fynab transformed our entire IT infrastructure in just 6 months. Their team\'s expertise in cloud architecture and dedication to our success was remarkable.",
    name: "Sarah Chen",
    role: "CTO",
    company: "MedTech Innovations",
  },
  {
    quote:
      "The custom analytics platform Fynab built gives us real-time insights that were previously impossible. Our decision-making speed has improved by 300%.",
    name: "James Rodriguez",
    role: "VP Engineering",
    company: "FinSecure",
  },
  {
    quote:
      "Working with Fynab felt like having an extension of our own team. They understood our business deeply and delivered solutions that exceeded expectations.",
    name: "Emily Watson",
    role: "Director of Digital",
    company: "RetailMax",
  },
  {
    quote:
      "The cybersecurity overhaul Fynab implemented gave us peace of mind and full compliance. Their proactive approach to security is truly world-class.",
    name: "Michael Park",
    role: "CISO",
    company: "GlobalLogistics",
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goToSlide = useCallback((i: number) => {
    setCurrent(i);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const getVisibleCards = () => {
    const total = testimonials.length;
    const leftIndex = (current - 1 + total) % total;
    const centerIndex = current;
    const rightIndex = (current + 1) % total;

    return [
      { index: leftIndex, position: -1 },
      { index: centerIndex, position: 0 },
      { index: rightIndex, position: 1 },
    ];
  };

  const visibleCards = getVisibleCards();

  return (
    <section id="testimonials" className="relative py-12 sm:py-24  bg-[#05070F] overflow-hidden selection:bg-indigo-500/30">
      {/* Background FX Options */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-cyan-600/10 blur-[100px] mix-blend-screen" />
        {/* Faint Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        {/* Soft Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070F] via-transparent to-[#05070F]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.span
            variants={staggerChild}
            className="inline-block px-3 py-1 text-xs font-semibold text-indigo-400 bg-indigo-950/50 border border-indigo-500/20 rounded-full uppercase tracking-wider mb-6 backdrop-blur-md"
          >
            Client Stories
          </motion.span>
          <motion.h2
            variants={staggerChild}
            className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-6"
          >
            Trusted by Visionaries
          </motion.h2>
          <motion.p variants={staggerChild} className="text-lg text-slate-400">
            Discover how we've helped industry leaders scale their operations and achieve exceptional results.
          </motion.p>
        </motion.div>

        {/* 3-Layer Carousel */}
        <div
          className="relative max-w-5xl mx-auto h-[450px] sm:h-[400px] mb-12 flex items-center justify-center perspective-[1000px]"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onTouchStart={() => setIsAutoPlaying(false)}
          onTouchEnd={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence initial={false}>
            {visibleCards.map(({ index, position }) => {
              const testimonial = testimonials[index];
              const isCenter = position === 0;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: position === 0 ? "0%" : position === 1 ? "80%" : "-80%",
                    scale: 0.8,
                    z: -100
                  }}
                  animate={{
                    opacity: isCenter ? 1 : 0.4,
                    x: position === 0 ? "0%" : position === 1 ? "85%" : "-85%",
                    scale: isCenter ? 1 : 0.85,
                    z: isCenter ? 0 : -100,
                    zIndex: isCenter ? 20 : 10,
                    filter: isCenter ? "blur(0px)" : "blur(6px)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 30,
                    mass: 1.2,
                  }}
                  className="absolute w-full max-w-[320px] sm:max-w-2xl"
                  style={{ originX: 0.5, originY: 0.5 }}
                >
                  <div className={`relative group rounded-3xl backdrop-blur-2xl border border-white/[0.08] p-8 sm:p-12 overflow-hidden transition-colors duration-500 ${isCenter ? 'bg-[#0a0f1c]/95 shadow-2xl shadow-black' : 'bg-[#05070d]/90'}`}>
                    {/* Inner Glow */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
                    <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
                    <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Top Radial Glow for center active */}
                    {isCenter && (
                      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-32 bg-indigo-500/20 blur-[60px] pointer-events-none transition-opacity duration-700" />
                    )}

                    {/* Decorative oversized quote mark */}
                    <div className="absolute -top-6 -left-4 text-[120px] leading-none font-serif text-white/[0.03] select-none pointer-events-none group-hover:text-white/[0.05] transition-colors duration-500">
                      "
                    </div>

                    <div className="relative z-10 flex flex-col h-full gap-8">
                      {/* Stars */}
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.svg
                            key={i}
                            className="w-5 h-5 text-amber-500/80 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: isCenter ? i * 0.05 : 0, duration: 0.3 }}
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </motion.svg>
                        ))}
                      </div>

                      {/* Quote Text */}
                      <blockquote className="text-xl sm:text-2xl text-slate-300 leading-relaxed font-light mt-2 group-hover:text-white transition-colors duration-300">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/[0.05]">
                        <div className="relative">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(99,102,241,0.4)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-shadow duration-500">
                            {testimonial.name[0]}
                          </div>
                          <div className="absolute inset-0 rounded-full border border-white/20 animate-[spin_4s_linear_infinite]" style={{ borderTopColor: 'transparent', animationPlayState: isAutoPlaying ? 'running' : 'paused' }} />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-medium text-white group-hover:text-indigo-200 transition-colors duration-300">
                            {testimonial.name}
                          </span>
                          <span className="text-sm text-slate-400">
                            {testimonial.role} <span className="mx-1 opacity-50">&bull;</span> <span className="text-cyan-400/80">{testimonial.company}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Minimal Navigation & Progress */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5 -ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Animated Progress Bar */}
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className="group relative h-1.5 rounded-full overflow-hidden transition-all duration-300 hover:scale-110"
                  style={{ width: i === current ? '3rem' : '1.5rem' }}
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  <div className="absolute inset-0 bg-white/10" />
                  {i === current && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-400 shadow-[0_0_10px_rgba(99,102,241,0.8)]"
                      layoutId="activeProgress"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
