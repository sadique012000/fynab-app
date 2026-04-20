"use client";

import { useState } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

interface Service {
  id: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
  color: string;
  glow: string;
  image?: string;
}

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`
    radial-gradient(
      400px circle at ${mouseX}px ${mouseY}px,
      rgba(255, 255, 255, 0.08),
      transparent 80%
    )
  `;

  const borderBackground = useMotionTemplate`
    radial-gradient(
      300px circle at ${mouseX}px ${mouseY}px,
      ${service.glow},
      transparent 100%
    )
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1] as const
      }}
      className="group relative h-full w-full rounded-3xl"
      onMouseMove={onMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: 1000 }}
    >
      <div className="absolute inset-0 rounded-3xl z-0 overflow-hidden bg-white/5 pointer-events-none">
        {/* Random Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={`https://images.unsplash.com/photo-${index === 0 ? '1451187580459-43490279c0fa' : index === 1 ? '1550751827-4bd374c3f58b' : index === 2 ? '1518770660439-4636190af475' : index === 3 ? '1460925895917-afdab827c52f' : index === 4 ? '1581091226825-a6a2a5aee158' : '1504384308090-c894fdcc538d'}?auto=format&fit=crop&w=800&q=80`}
            alt={service.title}
            className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700 blur-[1px] group-hover:blur-0 scale-110 group-hover:scale-100 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030308]   via-transparent to-transparent" />
        </div>

        <motion.div
          className="absolute inset-[1px] rounded-[calc(1.5rem-1px)] bg-[#030308]/10 backdrop-blur-[1px] z-0"
        />
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: borderBackground }}
        />
      </div>

      <motion.div
        className="relative z-10 flex flex-col h-full rounded-3xl p-8 sm:p-10 overflow-hidden bg-gradient-to-b from-white/[0.03] to-transparent shadow-[inset_0_1px_rgba(255,255,255,0.05)] border border-transparent"
        style={{ transformStyle: "preserve-3d" }}
        whileHover={{
          scale: 1.02,
          y: -5,
          rotateX: 2,
          rotateY: -2,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background }}
        />

        <div className="relative z-20 flex-1">
          <motion.div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 relative
              before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:${service.color} before:opacity-10 before:group-hover:opacity-20 before:transition-opacity before:duration-500
              border border-white/10 group-hover:border-white/20 transition-colors
            `}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="absolute inset-0 rounded-2xl bg-indigo-500/20 backdrop-blur-md border border-white/20" />
            <motion.div
              className={`relative z-10 w-10 h-10 flex items-center justify-center p-1.5`}
              animate={isHovered ? {
                scale: [1, 1.1, 1],
              } : {}}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img
                src={`https://api.dicebear.com/7.x/identicon/svg?seed=${service.title}&backgroundColor=4f46e5`}
                alt="icon"
                className="w-full h-full rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>

          <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-4">
            {service.title}
          </h3>
          <p className="text-sm sm:text-base text-white leading-relaxed font-light">
            {service.description}
          </p>
        </div>

        <div className="relative z-20 mt-10 pt-6 border-t border-white/5 opacity-80 group-hover:opacity-100 transition-opacity">
          <motion.button
            className="flex items-center gap-2 text-sm font-medium text-white group-hover:text-white transition-colors"
            whileHover={{ x: 5 }}
          >
            Explore service
            <svg
              className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </div>

        <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-700 pointer-events-none rounded-3xl`} />
      </motion.div>
    </motion.div>
  );
}
