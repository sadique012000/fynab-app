"use client"
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";


const stats = [
  {
    id: "hero",
    value: 500,
    suffix: "+",
    label: "Projects Delivered",
    description: "On time and on budget, pushing boundaries.",
    image: "/images/heroes/services_hero.png",
  },
  {
    id: "stat1",
    value: 200,
    suffix: "+",
    label: "Clients Served",
    description: "Across 30+ countries worldwide",
    image: "/images/heroes/industries_hero.png",
  },
  {
    id: "stat2",
    value: 98,
    suffix: "%",
    label: "Client Retention",
    description: "Year over year trusted partnership",
    image: "/images/heroes/careers_hero.png",
  },
  {
    id: "stat3",
    value: 15,
    suffix: "+",
    label: "Years Experience",
    description: "Mastering digital excellence since 2009",
    image: "/images/heroes/about_hero.png",
  },
];

function useCountUp(target: number, duration: number, shouldStart: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, shouldStart]);

  return count;
}

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const heroStat = stats[0];
  const supportingStats = stats.slice(1);

  return (
    <section className="relative py-32 bg-[#05070F] overflow-hidden selection:bg-indigo-500/30">
      {/* Background FX */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-600/5 blur-[150px] mix-blend-screen" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-600/5 blur-[120px] mix-blend-screen" />
        {/* Faint Noise Texture */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        {/* Soft Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070F] via-transparent to-[#05070F]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          className="max-w-2xl mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 rounded-full uppercase tracking-widest mb-6 backdrop-blur-md">
            Performance Impact
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            Scale with {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Certainty
            </span>
          </h2>
          <p className="text-xl text-slate-400 font-light">
            We don't just build software. We engineer growth engines that deliver measurable business impact.
          </p>
        </motion.div>

        {/* Asymmetrical Layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

          {/* Hero Stat (Left) */}
          <motion.div
            className="w-full lg:w-7/12 flex"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative group w-full rounded-3xl bg-white/[0.02] backdrop-blur-2xl border border-white/[0.06] p-10 sm:p-16 overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500 flex flex-col justify-between hover:-translate-y-2">
              {/* Background Image */}
              <div className="absolute inset-0 z-0 opacity-5 grayscale group-hover:grayscale-0 group-hover:opacity-10 transition-all duration-700 pointer-events-none">
                {heroStat.image && (
                  <Image
                    src={heroStat.image}
                    alt={heroStat.label}
                    fill
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-[#05070F] via-transparent to-transparent " />
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -top-32 -left-32 w-64 h-64 bg-indigo-500/20 blur-[80px] rounded-full group-hover:bg-indigo-400/30 transition-colors duration-700" />

              <div className="relative z-10">
                <HeroCounter
                  value={heroStat.value}
                  suffix={heroStat.suffix}
                  shouldStart={isInView}
                />

                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1 }}
                >
                  <h3 className="text-2xl sm:text-3xl font-medium text-white mb-3">
                    {heroStat.label}
                  </h3>
                  <p className="text-lg text-slate-400 font-light max-w-sm">
                    {heroStat.description}
                  </p>
                </motion.div>
              </div>

              <div className="absolute bottom-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Supporting Stats (Right) */}
          <div className="w-full lg:w-5/12 flex flex-col gap-6 lg:gap-8">
            {supportingStats.map((stat, i) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 + i * 0.15 }}
                className="flex-1"
              >
                <div className="group relative h-full rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.04] p-8 overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-500 hover:-translate-y-1">
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0 opacity-5 grayscale group-hover:grayscale-0 group-hover:opacity-10 transition-all duration-700 pointer-events-none">
                    {stat.image && (
                      <Image
                        src={stat.image}
                        alt={stat.label}
                        fill
                        className="object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/10 to-transparent " />
                  </div>

                  <div className="absolute right-0 top-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />


                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div className="flex-1">
                      <h4 className="text-xl font-medium text-slate-200 mb-1">
                        {stat.label}
                      </h4>
                      <p className="text-sm text-slate-500 font-light">
                        {stat.description}
                      </p>
                    </div>

                    <div className="text-right">
                      <SmallCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        shouldStart={isInView}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function HeroCounter({ value, suffix, shouldStart }: { value: number, suffix: string, shouldStart: boolean }) {
  const count = useCountUp(value, 2500, shouldStart);

  return (
    <div className="relative inline-block">
      <motion.div
        className="text-[5rem] sm:text-[7rem] lg:text-[8rem] font-extrabold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
        initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
        animate={shouldStart ? { scale: 1, opacity: 1, filter: "blur(0px)" } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        {count}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">{suffix}</span>
      </motion.div>
      {shouldStart && count === value && (
        <motion.div
          className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full z-[-1]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 0.5, 0], scale: [0.8, 1.2, 1] }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      )}
    </div>
  );
}

function SmallCounter({ value, suffix, shouldStart }: { value: number, suffix: string, shouldStart: boolean }) {
  const count = useCountUp(value, 2000, shouldStart);

  return (
    <motion.div
      className="text-4xl sm:text-5xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all duration-300"
      initial={{ y: 10, opacity: 0 }}
      animate={shouldStart ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
    >
      {count}
      <span className="text-cyan-400 ml-1">{suffix}</span>
    </motion.div>
  );
}
