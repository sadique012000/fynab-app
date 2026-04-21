"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import {
  staggerContainer,
  staggerChild,
  viewportOnce,
} from "@/app/lib/animations";

/* ─── Team Data ───────────────────────────────── */
const team = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image: "https://i.pravatar.cc/400?img=1",
    bio: "15+ years in enterprise technology. Previously led engineering at a Fortune 100 company. Visionary leader driving Fynab's global expansion and strategic partnerships.",
    achievements: ["Forbes 30 Under 30", "3x Startup Founder", "TEDx Speaker"],
    linkedin: "#",
    twitter: "#",
    accentHue: 240,
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    image: "https://i.pravatar.cc/400?img=32",
    bio: "Ex-Google engineer, MIT graduate. Architect behind Fynab's cloud-native platform and AI integration strategy that powers 200+ enterprise clients.",
    achievements: ["MIT PhD", "Ex-Google L7", "15 Patents"],
    linkedin: "#",
    twitter: "#",
    accentHue: 180,
  },
  {
    name: "Marcus Thorne",
    role: "Design Director",
    image: "https://i.pravatar.cc/400?img=11",
    bio: "Award-winning designer with 12+ years crafting premium digital experiences. Former Apple Design team member bringing world-class UX to enterprise software.",
    achievements: ["Apple Design Award", "Red Dot Winner", "AIGA Fellow"],
    linkedin: "#",
    twitter: "#",
    accentHue: 270,
  },
  {
    name: "Elena Rossi",
    role: "Head of AI",
    image: "https://i.pravatar.cc/400?img=26",
    bio: "PhD in Machine Learning from Stanford. Published researcher leading Fynab's generative AI and intelligent automation initiatives across all product lines.",
    achievements: ["Stanford PhD", "NeurIPS Best Paper", "50+ Publications"],
    linkedin: "#",
    twitter: "#",
    accentHue: 160,
  },
];

/* ─── Holographic Prism Card ─────────────────── */
function HoloPrismCard({
  member,
  index,
}: {
  member: (typeof team)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [typedBio, setTypedBio] = useState("");
  const typingRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth 3D rotation values
  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rotateX = useSpring(rawRotateX, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(rawRotateY, { stiffness: 150, damping: 20 });

  // Holographic refraction position
  const holoX = useMotionValue(50);
  const holoY = useMotionValue(50);

  // Conic border rotation
  const borderAngle = useMotionValue(0);
  const smoothBorderAngle = useSpring(borderAngle, { stiffness: 60, damping: 15 });

  // Animate border rotation on hover
  useEffect(() => {
    if (!isHovered) return;
    let angle = 0;
    const interval = setInterval(() => {
      angle += 2;
      borderAngle.set(angle);
    }, 16);
    return () => clearInterval(interval);
  }, [isHovered, borderAngle]);

  // Typewriter effect for bio
  useEffect(() => {
    if (expanded) {
      setTypedBio("");
      let i = 0;
      typingRef.current = setInterval(() => {
        if (i < member.bio.length) {
          setTypedBio(member.bio.slice(0, i + 1));
          i++;
        } else {
          if (typingRef.current) clearInterval(typingRef.current);
        }
      }, 12);
    } else {
      if (typingRef.current) clearInterval(typingRef.current);
      setTypedBio("");
    }
    return () => {
      if (typingRef.current) clearInterval(typingRef.current);
    };
  }, [expanded, member.bio]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      // 3D rotation (±15 degrees)
      rawRotateX.set((y - 0.5) * -20);
      rawRotateY.set((x - 0.5) * 20);

      // Holographic refraction position
      holoX.set(x * 100);
      holoY.set(y * 100);
    },
    [rawRotateX, rawRotateY, holoX, holoY]
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    rawRotateX.set(0);
    rawRotateY.set(0);
    holoX.set(50);
    holoY.set(50);
  }, [rawRotateX, rawRotateY, holoX, holoY]);

  return (
    <motion.div
      variants={staggerChild}
      className="relative group"
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={() => setExpanded(!expanded)}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative rounded-3xl cursor-pointer will-change-transform"
      >
        {/* ─── Animated Conic Gradient Border ───── */}
        <motion.div
          className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"
          style={{
            background: `conic-gradient(from ${smoothBorderAngle}deg, 
              hsl(${member.accentHue}, 80%, 60%), 
              hsl(${member.accentHue + 60}, 70%, 50%), 
              hsl(${member.accentHue + 120}, 80%, 60%), 
              hsl(${member.accentHue + 180}, 70%, 50%), 
              hsl(${member.accentHue + 240}, 80%, 60%), 
              hsl(${member.accentHue + 300}, 70%, 50%), 
              hsl(${member.accentHue}, 80%, 60%))`,
            filter: "blur(2px)",
          }}
        />

        {/* ─── Card Body ───── */}
        <div className="relative rounded-3xl overflow-hidden border border-white/[0.06] bg-[#080A14] z-10">
          {/* ─── Holographic Prismatic Overlay ───── */}
          <motion.div
            className="absolute inset-0 z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"
            style={{
              background: `radial-gradient(
                ellipse 60% 50% at ${holoX}% ${holoY}%,
                hsla(${member.accentHue}, 100%, 70%, 0.15),
                hsla(${member.accentHue + 40}, 100%, 60%, 0.1),
                hsla(${member.accentHue + 80}, 100%, 70%, 0.05),
                transparent 70%
              )`,
            }}
          />

          {/* ─── Anamorphic Light Streak ───── */}
          <motion.div
            className="absolute inset-0 z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: `linear-gradient(
                ${105 + (index * 15)}deg,
                transparent 30%,
                hsla(${member.accentHue}, 100%, 80%, 0.08) 45%,
                hsla(${member.accentHue + 30}, 100%, 90%, 0.12) 50%,
                hsla(${member.accentHue}, 100%, 80%, 0.08) 55%,
                transparent 70%
              )`,
            }}
          />

          {/* ─── Image with Parallax Depth ───── */}
          <div className="relative aspect-[3/4] overflow-hidden">
            {/* Background depth layer */}
            <div className="absolute inset-[-20px]">
              <div
                className="w-full h-full"
                style={{
                  background: `linear-gradient(135deg, hsl(${member.accentHue}, 60%, 12%) 0%, hsl(${member.accentHue}, 40%, 6%) 100%)`,
                }}
              />
            </div>

            {/* Image layer (moves with parallax) */}
            <motion.img
              src={member.image}
              alt={member.name}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                filter: isHovered ? "grayscale(0%) contrast(1.05)" : "grayscale(100%) contrast(0.9)",
                transition: "filter 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                scale: isHovered ? 1.08 : 1,
              }}
              animate={{
                scale: isHovered ? 1.08 : 1,
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Glow behind person on hover */}
            <motion.div
              className="absolute inset-0 mix-blend-screen pointer-events-none"
              animate={{
                opacity: isHovered ? 0.25 : 0,
              }}
              transition={{ duration: 0.6 }}
              style={{
                background: `radial-gradient(ellipse at 50% 60%, hsl(${member.accentHue}, 80%, 50%) 0%, transparent 60%)`,
                filter: "blur(40px)",
              }}
            />

            {/* Cinematic gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080A14] via-[#080A14]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080A14] via-transparent to-transparent opacity-60" />

            {/* ─── Social Icons (spring out from behind) ───── */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
              {[
                {
                  href: member.linkedin,
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                  delay: 0,
                },
                {
                  href: member.twitter,
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                  delay: 0.08,
                },
              ].map((social, si) => (
                <motion.a
                  key={si}
                  href={social.href}
                  onClick={(e) => e.stopPropagation()}
                  initial={{ opacity: 0, scale: 0, rotate: -90 }}
                  animate={
                    isHovered
                      ? { opacity: 1, scale: 1, rotate: 0 }
                      : { opacity: 0, scale: 0, rotate: -90 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                    delay: social.delay,
                  }}
                  className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/25 hover:scale-110 transition-all duration-200"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* ─── Role Badge (slides up from bottom on hover) ───── */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={
                  isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
                }
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.05,
                }}
                className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-3"
                style={{
                  background: `linear-gradient(135deg, hsl(${member.accentHue}, 70%, 50%), hsl(${member.accentHue + 40}, 70%, 50%))`,
                  boxShadow: `0 4px 20px hsl(${member.accentHue}, 70%, 40%, 0.4)`,
                }}
              >
                {member.role}
              </motion.div>

              <motion.h3
                className="text-2xl font-bold text-white"
                animate={{
                  textShadow: isHovered
                    ? `0 0 20px hsl(${member.accentHue}, 80%, 60%, 0.5)`
                    : "0 0 0px transparent",
                }}
                transition={{ duration: 0.5 }}
              >
                {member.name}
              </motion.h3>

              {/* Achievement pills (cascade in) */}
              <motion.div
                className="flex flex-wrap gap-2 mt-3"
                initial={{ opacity: 0 }}
                animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
              >
                {member.achievements.map((a, ai) => (
                  <motion.span
                    key={a}
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={
                      isHovered
                        ? { opacity: 1, y: 0, scale: 1 }
                        : { opacity: 0, y: 10, scale: 0.8 }
                    }
                    transition={{
                      duration: 0.4,
                      delay: 0.2 + ai * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="px-2 py-0.5 text-[10px] font-semibold text-white/80 bg-white/[0.08] backdrop-blur-sm rounded-full border border-white/[0.08]"
                  >
                    {a}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* ─── Expandable Bio with Typewriter ───── */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-4 border-t border-white/[0.04]">
                  <p className="text-sm text-slate-400 leading-relaxed font-mono">
                    {typedBio}
                    <motion.span
                      className="inline-block w-[2px] h-4 bg-white/60 ml-0.5 align-middle"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                    />
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ─── Outer Glow (on hover) ───── */}
        <motion.div
          className="absolute -inset-4 rounded-[2rem] pointer-events-none z-0"
          animate={{
            opacity: isHovered ? 0.15 : 0,
          }}
          transition={{ duration: 0.6 }}
          style={{
            background: `radial-gradient(ellipse at 50% 50%, hsl(${member.accentHue}, 80%, 50%) 0%, transparent 70%)`,
            filter: "blur(30px)",
          }}
        />
      </motion.div>

      {/* ─── "Click to expand" hint ───── */}
      <motion.div
        className="text-center mt-3"
        animate={{ opacity: isHovered && !expanded ? 0.5 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-[10px] uppercase tracking-widest text-slate-500">
          Click to reveal bio
        </span>
      </motion.div>
    </motion.div>
  );
}

/* ─── Section ────────────────────────────────── */
export default function EnhancedTeamSection() {
  return (
    <section className="relative py-32 bg-[#020205] overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[-10%] left-[20%] w-[40vw] h-[40vw] rounded-full blur-[160px] opacity-10 bg-indigo-600 mix-blend-screen"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-5%] right-[15%] w-[35vw] h-[35vw] rounded-full blur-[140px] opacity-10 bg-purple-600 mix-blend-screen"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-xs font-semibold text-white/80 uppercase tracking-widest">
                Leadership
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
            Meet the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
              Visionaries
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-slate-400 font-light leading-relaxed max-w-2xl mx-auto"
          >
            Hover to explore. Click any card to reveal their story.
          </motion.p>
        </div>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {team.map((member, i) => (
            <HoloPrismCard key={member.name} member={member} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
