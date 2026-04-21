"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { viewportOnce } from "@/app/lib/animations";

const testimonials = [
  {
    quote:
      "Fynab transformed our entire infrastructure in 6 months. Their team is world-class.",
    author: "David Park",
    role: "CTO, NexGen Labs",
    avatar: "DP",
  },
  {
    quote:
      "The level of engineering quality and attention to detail is unmatched. True partners.",
    author: "Sarah Mitchell",
    role: "VP Engineering, CloudScale",
    avatar: "SM",
  },
  {
    quote:
      "Working with Fynab felt like having a top-tier in-house team. Highly recommend.",
    author: "James Rodriguez",
    role: "CEO, DataPulse",
    avatar: "JR",
  },
  {
    quote:
      "They don't just build software — they build solutions that scale with your business.",
    author: "Emily Chen",
    role: "Head of Product, FinStack",
    avatar: "EC",
  },
  {
    quote:
      "From day one, the Fynab team understood our vision and delivered beyond expectations.",
    author: "Michael Turner",
    role: "Founder, BrightPath AI",
    avatar: "MT",
  },
  {
    quote:
      "Our platform handles 10x the traffic after Fynab's architecture overhaul. Incredible work.",
    author: "Lisa Wang",
    role: "CTO, HealthBridge",
    avatar: "LW",
  },
];

export default function ClientTrust() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let animId: number;
    let scrollPos = 0;

    const scroll = () => {
      if (!isPaused && container) {
        scrollPos += 0.5;
        if (scrollPos >= container.scrollWidth / 2) {
          scrollPos = 0;
        }
        container.scrollLeft = scrollPos;
      }
      animId = requestAnimationFrame(scroll);
    };

    animId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="relative py-32 bg-[#05070F] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/8 blur-[160px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-semibold text-white/80 uppercase tracking-widest">
                Client Trust
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-8"
          >
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400">
              Industry Leaders
            </span>
          </motion.h2>
        </div>
      </div>

      {/* Scrolling testimonials */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-6 overflow-hidden px-4 hide-scrollbar"
      >
        {doubled.map((t, i) => (
          <motion.div
            key={`${t.author}-${i}`}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 w-[350px] sm:w-[400px] p-8 rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl group hover:border-white/[0.12] transition-colors duration-300"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, j) => (
                <svg
                  key={j}
                  className="w-4 h-4 text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-slate-300 leading-relaxed mb-6 text-sm font-light">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">
                {t.avatar}
              </div>
              <div>
                <div className="text-sm font-semibold text-white">
                  {t.author}
                </div>
                <div className="text-xs text-slate-500">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
