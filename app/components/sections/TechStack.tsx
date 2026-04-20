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
  const row1 = techItems.slice(0, 11);
  const row2 = techItems.slice(11, 21);
  const row3 = techItems.slice(21, 31);
  const row4 = techItems.slice(31);

  return (
    <section className="relative py-12 sm:py-24 overflow-hidden bg-[#060913]">
      {/* ambient minimalist dark depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[80%] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0)_70%)]" />
      </div>

      <div className="relative z-10">
        {/* header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <motion.div
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
        </div>

        {/* Marquee Rows */}
        <div className="flex flex-col gap-6 lg:gap-8">
          <TechMarquee items={row1} direction="left" speed={40} />
          <TechMarquee items={row2} direction="right" speed={55} />
          <TechMarquee items={row3} direction="left" speed={35} />
          <TechMarquee items={row4} direction="right" speed={45} />
        </div>

        {/* bottom tag line */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </div>
    </section>
  );
}


function TechMarquee({ items, direction, speed }: { items: typeof techItems, direction: "left" | "right", speed: number }) {
  // Duplicate items for continuous loop
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="flex overflow-hidden group select-none">
      <motion.div
        className="flex gap-4 lg:gap-6 px-4"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"]
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {duplicatedItems.map((tech, i) => {
          const s = sizeMap[tech.size as keyof typeof sizeMap];
          return (
            <div
              key={`${tech.name}-${i}`}
              className={`
                group/card relative ${s.card} flex flex-col items-center justify-center gap-2
                rounded-[1.3rem] backdrop-blur-xl border border-white/[0.04] cursor-pointer
                bg-white/[0.01] bg-gradient-to-br ${tagColors[tech.tag]}
                transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:zIndex-50
              `}
            >
              <div className="relative flex items-center justify-center">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className={`${s.icon} opacity-40 grayscale group-hover/card:opacity-100 group-hover/card:grayscale-0 transition-all duration-500 relative z-10`}
                />
              </div>
              <span className={`${s.text} font-medium tracking-wide text-slate-500 group-hover/card:text-slate-200 transition-colors duration-300`}>
                {tech.name}
              </span>
              <div
                className={`absolute top-3 right-3 w-1.5 h-1.5 rounded-full ${tagDotColors[tech.tag]} opacity-20 group-hover/card:opacity-100 transition-opacity duration-500`}
              />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}