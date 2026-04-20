"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "@/app/lib/animations";

/* ── flat tech list for the collage ─────────────────────── */
const techItems = [
  // Frontend
  { name: "React", logo: "https://cdn.simpleicons.org/react", tag: "Frontend", size: "lg" },
  { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/white", tag: "Frontend", size: "md" },
  { name: "Vue", logo: "https://cdn.simpleicons.org/vuedotjs", tag: "Frontend", size: "sm" },
  { name: "Angular", logo: "https://cdn.simpleicons.org/angular", tag: "Frontend", size: "md" },
  { name: "Svelte", logo: "https://cdn.simpleicons.org/svelte", tag: "Frontend", size: "sm" },
  { name: "Tailwind", logo: "https://cdn.simpleicons.org/tailwindcss", tag: "Frontend", size: "md" },
  // Backend
  { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs", tag: "Backend", size: "lg" },
  { name: "Python", logo: "https://cdn.simpleicons.org/python", tag: "Backend", size: "lg" },
  { name: "Java", logo: "https://cdn.simpleicons.org/openjdk/white", tag: "Backend", size: "md" },
  { name: "Go", logo: "https://cdn.simpleicons.org/go/white", tag: "Backend", size: "sm" },
  { name: "PHP", logo: "https://cdn.simpleicons.org/php/white", tag: "Backend", size: "sm" },
  { name: "Ruby", logo: "https://cdn.simpleicons.org/ruby", tag: "Backend", size: "md" },
  // Cloud & DevOps
  { name: "AWS", logo: "https://cdn.simpleicons.org/amazonaws/white", tag: "Cloud", size: "lg" },
  { name: "Azure", logo: "https://cdn.simpleicons.org/microsoftazure", tag: "Cloud", size: "md" },
  { name: "GCP", logo: "https://cdn.simpleicons.org/googlecloud", tag: "Cloud", size: "md" },
  { name: "Docker", logo: "https://cdn.simpleicons.org/docker", tag: "Cloud", size: "lg" },
  { name: "Kubernetes", logo: "https://cdn.simpleicons.org/kubernetes", tag: "Cloud", size: "md" },
  { name: "Terraform", logo: "https://cdn.simpleicons.org/terraform", tag: "Cloud", size: "sm" },
  // Database
  { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb", tag: "Database", size: "md" },
  { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql", tag: "Database", size: "lg" },
  { name: "Redis", logo: "https://cdn.simpleicons.org/redis", tag: "Database", size: "md" },
  { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase", tag: "Database", size: "sm" },
  { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql", tag: "Database", size: "sm" },
  // AI & Data
  { name: "TensorFlow", logo: "https://cdn.simpleicons.org/tensorflow", tag: "AI", size: "lg" },
  { name: "PyTorch", logo: "https://cdn.simpleicons.org/pytorch", tag: "AI", size: "md" },
  { name: "OpenAI", logo: "https://cdn.simpleicons.org/openai/white", tag: "AI", size: "md" },
  { name: "Kafka", logo: "https://cdn.simpleicons.org/apachekafka/white", tag: "AI", size: "sm" },
  { name: "Spark", logo: "https://cdn.simpleicons.org/apachespark/white", tag: "AI", size: "sm" },
];

const sizeMap = {
  sm: { card: "w-[100px] h-[100px]", icon: "w-7 h-7", text: "text-[10px]" },
  md: { card: "w-[120px] h-[120px]", icon: "w-9 h-9", text: "text-xs" },
  lg: { card: "w-[140px] h-[140px]", icon: "w-11 h-11", text: "text-xs" },
} as const;

// Premium dark theme glows mapped to each category
const tagColors: Record<string, string> = {
  Frontend: "from-blue-500/5 to-transparent hover:from-blue-500/15 border-white/[0.04] hover:border-blue-500/30 shadow-[0_0_0_transparent] hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
  Backend: "from-emerald-500/5 to-transparent hover:from-emerald-500/15 border-white/[0.04] hover:border-emerald-500/30 shadow-[0_0_0_transparent] hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
  Cloud: "from-orange-500/5 to-transparent hover:from-orange-500/15 border-white/[0.04] hover:border-orange-500/30 shadow-[0_0_0_transparent] hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]",
  Database: "from-violet-500/5 to-transparent hover:from-violet-500/15 border-white/[0.04] hover:border-violet-500/30 shadow-[0_0_0_transparent] hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
  AI: "from-rose-500/5 to-transparent hover:from-rose-500/15 border-white/[0.04] hover:border-rose-500/30 shadow-[0_0_0_transparent] hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]",
};

const tagDotColors: Record<string, string> = {
  Frontend: "bg-blue-400",
  Backend: "bg-emerald-400",
  Cloud: "bg-orange-400",
  Database: "bg-violet-400",
  AI: "bg-rose-400",
};

export default function TechStack() {
  return (
    <section className="relative py-12 sm:py-24  overflow-hidden bg-[#060913]">
      {/* ── ambient minimalist dark depth ───────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[80%] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0)_70%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* ── header ─────────────────────────────────── */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          <motion.span
            className="inline-block px-3 py-1 text-xs font-semibold text-slate-300 bg-white/[0.03] border border-white/[0.08] rounded-full uppercase tracking-wider mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ delay: 0.1 }}
          >
            Tech Stack
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Technologies We{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Master
            </span>
          </h2>
          <p className="text-lg text-slate-400 font-light max-w-xl mx-auto">
            A curated ecosystem of modern tools powering every layer of your stack.
          </p>
        </motion.div>

        {/* ── tag legend ─────────────────────────────── */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          {Object.keys(tagColors).map((tag) => (
            <div key={tag} className="flex items-center gap-1.5 text-xs text-slate-400 tracking-wide font-medium">
              <span className={`w-1.5 h-1.5 rounded-full ${tagDotColors[tag]} opacity-80`} />
              {tag}
            </div>
          ))}
        </motion.div>

        {/* ── collage grid ───────────────────────────── */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 lg:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.03 },
            },
          }}
        >
          {techItems.map((tech, i) => {
            const s = sizeMap[tech.size as keyof typeof sizeMap];
            const floatDelay = (i * 0.37) % 3;
            const floatDuration = 3 + (i % 3) * 0.8;

            return (
              <motion.div
                key={tech.name}
                variants={{
                  hidden: { opacity: 0, scale: 0.6, y: 30 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: {
                      type: "spring" as const,
                      stiffness: 180,
                      damping: 18,
                    },
                  },
                }}
                whileHover={{
                  scale: 1.08,
                  y: -6,
                  zIndex: 50,
                }}
                whileTap={{ scale: 0.95 }}
                className={`
                  group relative ${s.card} flex flex-col items-center justify-center gap-2
                  rounded-[1.3rem] backdrop-blur-xl border border-white/[0.04] cursor-pointer
                  bg-white/[0.01] bg-gradient-to-br ${tagColors[tech.tag]}
                  transition-all duration-500
                `}
              >
                {/* ── floating logo ──────────────────── */}
                <motion.div
                  className="relative flex items-center justify-center"
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: floatDuration,
                    repeat: Infinity,
                    ease: "easeInOut" as const,
                    delay: floatDelay,
                  }}
                >
                  {/* Subtle inner reflection mask */}
                  <div className="absolute inset-0 bg-white/5 lg:bg-transparent blur-md rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />

                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className={`${s.icon} opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 relative z-10`}
                  />
                </motion.div>

                {/* ── tech name ──────────────────────── */}
                <span className={`${s.text} font-medium tracking-wide text-slate-500 group-hover:text-slate-200 transition-colors duration-300`}>
                  {tech.name}
                </span>

                {/* ── tag dot indicator ──────────────── */}
                <motion.div
                  className={`absolute top-3 right-3 w-1.5 h-1.5 rounded-full ${tagDotColors[tech.tag]} opacity-20 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── bottom tag line ────────────────────────── */}
        <motion.p
          className="text-center text-sm font-light text-slate-500 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          …and 50+ more tools and frameworks in our arsenal
        </motion.p>
      </div>
    </section>
  );
}