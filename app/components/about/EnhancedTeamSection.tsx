"use client";

import {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  staggerContainer,
  staggerChild,
  viewportOnce,
} from "@/app/lib/animations";

/* ═══════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════ */
const team = [
  {
    id: "john",
    name: "John Smith",
    role: "CEO & Founder",
    image: "https://i.pravatar.cc/400?img=1",
    bio: "15+ years in enterprise technology. Previously led engineering at a Fortune 100 company. Visionary leader driving Fynab's global expansion and strategic partnerships across 30+ countries.",
    achievements: ["Forbes 30 Under 30", "3x Startup Founder", "TEDx Speaker"],
    stats: { years: 15, projects: 120, teams: 8 },
    skills: ["Strategy", "Leadership", "M&A", "Fundraising", "Product Vision"],
    timeline: [
      { year: "2011", event: "Founded Fynab" },
      { year: "2015", event: "Series A — $12M" },
      { year: "2020", event: "Forbes Recognition" },
      { year: "2024", event: "Global Expansion" },
    ],
    linkedin: "#",
    twitter: "#",
    accentHue: 240,
  },
  {
    id: "sarah",
    name: "Sarah Chen",
    role: "CTO",
    image: "https://i.pravatar.cc/400?img=32",
    bio: "Ex-Google engineer, MIT graduate. Architect behind Fynab's cloud-native platform and AI integration strategy that powers 200+ enterprise clients worldwide.",
    achievements: ["MIT PhD", "Ex-Google L7", "15 Patents"],
    stats: { years: 12, projects: 85, teams: 6 },
    skills: ["Architecture", "Cloud", "AI/ML", "Distributed Systems", "DevOps"],
    timeline: [
      { year: "2012", event: "MIT PhD Completed" },
      { year: "2014", event: "Google — Staff Eng" },
      { year: "2018", event: "Joined Fynab as CTO" },
      { year: "2024", event: "15th Patent Filed" },
    ],
    linkedin: "#",
    twitter: "#",
    accentHue: 190,
  },
  {
    id: "marcus",
    name: "Marcus Thorne",
    role: "Design Director",
    image: "https://i.pravatar.cc/400?img=11",
    bio: "Award-winning designer with 12+ years crafting premium digital experiences. Former Apple Design team member bringing world-class UX to enterprise software.",
    achievements: ["Apple Design Award", "Red Dot Winner", "AIGA Fellow"],
    stats: { years: 12, projects: 200, teams: 5 },
    skills: ["UI/UX", "Design Systems", "Prototyping", "Brand", "Motion Design"],
    timeline: [
      { year: "2012", event: "Apple — Design Team" },
      { year: "2016", event: "Red Dot Award" },
      { year: "2019", event: "Joined Fynab" },
      { year: "2023", event: "Design System v3" },
    ],
    linkedin: "#",
    twitter: "#",
    accentHue: 275,
  },
  {
    id: "elena",
    name: "Elena Rossi",
    role: "Head of AI",
    image: "https://i.pravatar.cc/400?img=26",
    bio: "PhD in Machine Learning from Stanford. Published researcher leading Fynab's generative AI and intelligent automation initiatives across all product lines.",
    achievements: ["Stanford PhD", "NeurIPS Best Paper", "50+ Publications"],
    stats: { years: 10, projects: 60, teams: 4 },
    skills: ["ML/DL", "NLP", "Gen AI", "Research", "MLOps"],
    timeline: [
      { year: "2014", event: "Stanford PhD" },
      { year: "2017", event: "NeurIPS Best Paper" },
      { year: "2020", event: "Joined Fynab" },
      { year: "2024", event: "Gen AI Suite Launch" },
    ],
    linkedin: "#",
    twitter: "#",
    accentHue: 160,
  },
];

/* ═══════════════════════════════════════════════
   AMBIENT PARTICLES
   ═══════════════════════════════════════════════ */
function AmbientParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 35 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1 + Math.random() * 3,
        speed: 4 + Math.random() * 8,
        delay: Math.random() * 5,
        blur: Math.random() > 0.6 ? 2 : 0,
        opacity: 0.1 + Math.random() * 0.3,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            filter: p.blur ? `blur(${p.blur}px)` : undefined,
          }}
          animate={{
            y: [0, -40, 0, 30, 0],
            x: [0, 15, 0, -10, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity, p.opacity * 1.5, p.opacity],
          }}
          transition={{
            duration: p.speed,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   CURSOR ENVIRONMENT LIGHT
   ═══════════════════════════════════════════════ */
function CursorEnvironment() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 40, damping: 25 });
  const smoothY = useSpring(y, { stiffness: 40, damping: 25 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, [x, y]);

  return (
    <motion.div
      className="fixed pointer-events-none z-0 mix-blend-screen"
      style={{
        x: smoothX,
        y: smoothY,
        width: 600,
        height: 600,
        marginLeft: -300,
        marginTop: -300,
        background:
          "radial-gradient(circle, rgba(99,102,241,0.06) 0%, rgba(6,182,212,0.03) 30%, transparent 70%)",
        filter: "blur(40px)",
      }}
    />
  );
}

/* ═══════════════════════════════════════════════
   HOLOGRAPHIC PRISM CARD (ULTIMATE)
   ═══════════════════════════════════════════════ */
function HoloPrismCard({
  member,
  index,
  onExpand,
  isAnyExpanded,
}: {
  member: (typeof team)[0];
  index: number;
  onExpand: (id: string) => void;
  isAnyExpanded: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [typedBio, setTypedBio] = useState("");
  const typingRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [showRipple, setShowRipple] = useState(false);

  // ── 3D tilt ──
  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rotateX = useSpring(rawRotateX, { stiffness: 200, damping: 25 });
  const rotateY = useSpring(rawRotateY, { stiffness: 200, damping: 25 });

  // ── Magnetic pull ──
  const magnetX = useMotionValue(0);
  const magnetY = useMotionValue(0);
  const smoothMagnetX = useSpring(magnetX, { stiffness: 80, damping: 20 });
  const smoothMagnetY = useSpring(magnetY, { stiffness: 80, damping: 20 });

  // ── Holo position ──
  const holoX = useMotionValue(50);
  const holoY = useMotionValue(50);

  // ── Shadow shift ──
  const shadowX = useTransform(rawRotateY, [-15, 15], [15, -15]);
  const shadowY = useTransform(rawRotateX, [-15, 15], [-15, 15]);

  // ── Conic border rotation ──
  const borderAngle = useMotionValue(0);
  const smoothBorder = useSpring(borderAngle, { stiffness: 50, damping: 12 });

  // ── Scan line position ──
  const [scanPos, setScanPos] = useState(0);

  useEffect(() => {
    if (!isHovered) return;
    let angle = 0;
    const interval = setInterval(() => {
      angle += 1.5;
      borderAngle.set(angle);
    }, 16);
    return () => clearInterval(interval);
  }, [isHovered, borderAngle]);

  // Scan line animation
  useEffect(() => {
    if (!isHovered) {
      setScanPos(0);
      return;
    }
    let pos = 0;
    const interval = setInterval(() => {
      pos += 0.4;
      if (pos > 120) pos = -20;
      setScanPos(pos);
    }, 16);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      rawRotateX.set((y - 0.5) * -25);
      rawRotateY.set((x - 0.5) * 25);
      magnetX.set((x - 0.5) * 8);
      magnetY.set((y - 0.5) * 8);
      holoX.set(x * 100);
      holoY.set(y * 100);
    },
    [rawRotateX, rawRotateY, magnetX, magnetY, holoX, holoY]
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    rawRotateX.set(0);
    rawRotateY.set(0);
    magnetX.set(0);
    magnetY.set(0);
    holoX.set(50);
    holoY.set(50);
  }, [rawRotateX, rawRotateY, magnetX, magnetY, holoX, holoY]);

  const handleClick = () => {
    setShowRipple(true);
    setTimeout(() => setShowRipple(false), 600);
    onExpand(member.id);
  };

  // Card rotation offsets for organic layout feel
  const rotationOffsets = [-1.5, 1, -0.8, 1.2];

  return (
    <motion.div
      variants={staggerChild}
      className="relative"
      style={{
        perspective: 1400,
        x: smoothMagnetX,
        y: smoothMagnetY,
      }}
      animate={{
        opacity: isAnyExpanded ? 0.3 : 1,
        scale: isAnyExpanded ? 0.95 : 1,
        filter: isAnyExpanded ? "blur(4px)" : "blur(0px)",
      }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        ref={cardRef}
        layoutId={`team-card-${member.id}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ rotate: rotationOffsets[index] }}
        whileInView={{ rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-3xl cursor-pointer will-change-transform"
      >
        {/* ═══ LAYER 0: Animated Conic Gradient Border ═══ */}
        <motion.div
          className="absolute -inset-[1.5px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `conic-gradient(from ${smoothBorder}deg,
              hsl(${member.accentHue}, 100%, 65%),
              hsl(${member.accentHue + 50}, 90%, 55%),
              hsl(${member.accentHue + 100}, 100%, 65%),
              hsl(${member.accentHue + 150}, 90%, 55%),
              hsl(${member.accentHue + 200}, 100%, 65%),
              hsl(${member.accentHue + 250}, 90%, 55%),
              hsl(${member.accentHue + 300}, 100%, 65%),
              hsl(${member.accentHue}, 100%, 65%))`,
            filter: "blur(3px)",
            transition: "opacity 0.7s ease",
          }}
        />

        {/* ═══ LAYER 1: Card Body ═══ */}
        <div className="relative rounded-3xl overflow-hidden bg-[#080A14] z-10 border border-white/[0.06]">
          {/* ── Inner top highlight ── */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent z-40 pointer-events-none" />

          {/* ── Edge highlight on hover ── */}
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none z-40"
            animate={{
              boxShadow: isHovered
                ? `inset 0 1px 0 0 rgba(255,255,255,0.1), inset 0 -1px 0 0 rgba(255,255,255,0.03), inset 1px 0 0 0 rgba(255,255,255,0.05), inset -1px 0 0 0 rgba(255,255,255,0.05)`
                : `inset 0 0 0 0 transparent`,
            }}
            transition={{ duration: 0.5 }}
          />

          {/* ═══ LAYER 2: Holographic Multi-Refraction ═══ */}
          <motion.div
            className="absolute inset-0 z-30 pointer-events-none mix-blend-overlay"
            style={{
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.6s ease",
              background: `
                radial-gradient(ellipse 80% 60% at ${holoX}% ${holoY}%,
                  hsla(${member.accentHue}, 100%, 75%, 0.12),
                  hsla(${member.accentHue + 30}, 100%, 65%, 0.08),
                  hsla(${member.accentHue + 60}, 100%, 75%, 0.04),
                  transparent 65%),
                radial-gradient(ellipse 40% 30% at ${holoX}% ${holoY}%,
                  hsla(${member.accentHue + 120}, 100%, 80%, 0.1),
                  transparent 50%)
              `,
            }}
          />

          {/* ═══ LAYER 3: Rainbow Spectral Sweep ═══ */}
          <motion.div
            className="absolute inset-0 z-30 pointer-events-none mix-blend-screen"
            style={{
              opacity: isHovered ? 0.08 : 0,
              transition: "opacity 0.8s ease",
              background: `linear-gradient(
                ${90 + index * 20}deg,
                transparent 20%,
                hsla(0, 100%, 70%, 0.3) 30%,
                hsla(60, 100%, 70%, 0.3) 35%,
                hsla(120, 100%, 70%, 0.3) 40%,
                hsla(180, 100%, 70%, 0.3) 45%,
                hsla(240, 100%, 70%, 0.3) 50%,
                hsla(300, 100%, 70%, 0.3) 55%,
                transparent 65%
              )`,
            }}
          />

          {/* ═══ LAYER 4: Scan Line ═══ */}
          {isHovered && (
            <div
              className="absolute left-0 right-0 h-[2px] z-30 pointer-events-none"
              style={{
                top: `${scanPos}%`,
                background: `linear-gradient(90deg, transparent, hsla(${member.accentHue}, 100%, 70%, 0.15), transparent)`,
                boxShadow: `0 0 15px hsla(${member.accentHue}, 100%, 70%, 0.1)`,
              }}
            />
          )}

          {/* ═══ LAYER 5: Anamorphic Light Streak ═══ */}
          <div
            className="absolute inset-0 z-30 pointer-events-none"
            style={{
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.8s ease",
              background: `linear-gradient(
                ${110 + index * 15}deg,
                transparent 25%,
                hsla(${member.accentHue}, 100%, 85%, 0.06) 42%,
                hsla(${member.accentHue + 20}, 100%, 95%, 0.1) 50%,
                hsla(${member.accentHue}, 100%, 85%, 0.06) 58%,
                transparent 75%
              )`,
            }}
          />

          {/* ═══ IMAGE AREA ═══ */}
          <div className="relative aspect-[3/4] overflow-hidden">
            {/* Background depth gradient */}
            <div
              className="absolute inset-[-20px]"
              style={{
                background: `linear-gradient(135deg, hsl(${member.accentHue}, 60%, 10%) 0%, hsl(${member.accentHue}, 40%, 5%) 100%)`,
              }}
            />

            {/* Image with cinematic treatment */}
            <motion.img
              src={member.image}
              alt={member.name}
              className="absolute inset-0 w-full h-full object-cover"
              animate={{
                scale: isHovered ? 1.1 : 1,
                filter: isHovered
                  ? "grayscale(0%) contrast(1.08) brightness(1.05)"
                  : "grayscale(100%) contrast(0.85) brightness(0.9) blur(0.5px)",
              }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Radial glow behind head */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ opacity: isHovered ? 0.35 : 0 }}
              transition={{ duration: 0.7 }}
              style={{
                background: `radial-gradient(ellipse 50% 40% at 50% 35%, hsl(${member.accentHue}, 80%, 50%) 0%, transparent 60%)`,
                filter: "blur(35px)",
                mixBlendMode: "screen",
              }}
            />

            {/* Cinematic overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080A14] via-[#080A14]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#080A14]/20 via-transparent to-transparent" />

            {/* ── Glass overlay layer ── */}
            <div
              className="absolute inset-0 z-20 pointer-events-none"
              style={{
                opacity: isHovered ? 0 : 0.15,
                transition: "opacity 0.8s ease",
                background: "linear-gradient(180deg, rgba(8,10,20,0.3) 0%, transparent 40%, rgba(8,10,20,0.5) 100%)",
                backdropFilter: "blur(0.5px)",
              }}
            />

            {/* ═══ SOCIAL ICONS — 3D Depth Entrance ═══ */}
            <div className="absolute top-4 right-4 flex flex-col gap-2.5 z-30">
              {[
                {
                  href: member.linkedin,
                  delay: 0,
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  href: member.twitter,
                  delay: 0.1,
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
              ].map((social, si) => (
                <motion.a
                  key={si}
                  href={social.href}
                  onClick={(e) => e.stopPropagation()}
                  initial={{ opacity: 0, scale: 0, x: 30, rotateY: -90 }}
                  animate={
                    isHovered
                      ? { opacity: 1, scale: 1, x: 0, rotateY: 0 }
                      : { opacity: 0, scale: 0, x: 30, rotateY: -90 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 18,
                    delay: social.delay,
                  }}
                  className="w-10 h-10 rounded-xl bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] flex items-center justify-center text-white/80 hover:text-white hover:bg-white/[0.15] hover:border-white/[0.2] transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* ═══ BOTTOM INFO AREA ═══ */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              {/* Role badge with animated gradient border */}
              <motion.div
                initial={{ y: 15, opacity: 0, scale: 0.9 }}
                animate={
                  isHovered
                    ? { y: 0, opacity: 1, scale: 1 }
                    : { y: 15, opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
                className="relative inline-flex items-center mb-3"
              >
                {/* Animated border glow */}
                <motion.div
                  className="absolute -inset-[1px] rounded-full"
                  style={{
                    background: `conic-gradient(from ${smoothBorder}deg, 
                      hsl(${member.accentHue}, 90%, 60%), 
                      hsl(${member.accentHue + 60}, 80%, 50%), 
                      hsl(${member.accentHue + 120}, 90%, 60%), 
                      hsl(${member.accentHue}, 90%, 60%))`,
                    filter: "blur(1px)",
                  }}
                />
                <span
                  className="relative px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#080A14]"
                  style={{
                    color: `hsl(${member.accentHue}, 90%, 75%)`,
                    textShadow: `0 0 12px hsl(${member.accentHue}, 90%, 60%, 0.4)`,
                  }}
                >
                  {member.role}
                </span>
              </motion.div>

              {/* Name with gradient shimmer */}
              <motion.h3
                className="text-2xl font-bold text-white relative overflow-hidden"
                animate={{
                  textShadow: isHovered
                    ? `0 0 30px hsl(${member.accentHue}, 80%, 60%, 0.5), 0 0 60px hsl(${member.accentHue}, 80%, 50%, 0.2)`
                    : "0 0 0px transparent",
                }}
                transition={{ duration: 0.6 }}
              >
                {member.name}
                {/* Shimmer sweep */}
                {isHovered && (
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "linear",
                    }}
                  />
                )}
              </motion.h3>

              {/* Achievement pills — cascade */}
              <motion.div
                className="flex flex-wrap gap-1.5 mt-3"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
              >
                {member.achievements.map((a, ai) => (
                  <motion.span
                    key={a}
                    initial={{ opacity: 0, y: 8, scale: 0.8 }}
                    animate={
                      isHovered
                        ? { opacity: 1, y: 0, scale: 1 }
                        : { opacity: 0, y: 8, scale: 0.8 }
                    }
                    transition={{
                      duration: 0.4,
                      delay: 0.2 + ai * 0.07,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="px-2.5 py-1 text-[10px] font-semibold text-white/70 bg-white/[0.06] backdrop-blur-sm rounded-full border border-white/[0.06]"
                  >
                    {a}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* ═══ OUTER GLOW ═══ */}
        <motion.div
          className="absolute -inset-6 rounded-[2rem] pointer-events-none z-0"
          style={{
            background: `radial-gradient(ellipse at 50% 50%, hsl(${member.accentHue}, 80%, 50%) 0%, transparent 65%)`,
            filter: "blur(40px)",
          }}
          animate={{ opacity: isHovered ? 0.12 : 0 }}
          transition={{ duration: 0.7 }}
        />

        {/* ═══ CLICK RIPPLE ═══ */}
        <AnimatePresence>
          {showRipple && (
            <motion.div
              className="absolute inset-0 rounded-3xl z-20 pointer-events-none"
              initial={{ opacity: 0.4, scale: 0.8 }}
              animate={{ opacity: 0, scale: 1.2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                border: `2px solid hsl(${member.accentHue}, 80%, 60%)`,
                boxShadow: `0 0 20px hsl(${member.accentHue}, 80%, 60%, 0.3)`,
              }}
            />
          )}
        </AnimatePresence>

        {/* ═══ Dynamic shadow ═══ */}
        <motion.div
          className="absolute inset-2 -z-10 rounded-3xl pointer-events-none"
          style={{
            x: shadowX,
            y: shadowY,
            background: `radial-gradient(ellipse, hsl(${member.accentHue}, 60%, 20%, 0.3) 0%, transparent 70%)`,
            filter: "blur(20px)",
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        />
      </motion.div>

      {/* Hint text */}
      <motion.div
        className="text-center mt-4"
        animate={{ opacity: isHovered ? 0.5 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-medium">
          Click to explore
        </span>
      </motion.div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   EXPANDED PROFILE MODAL
   ═══════════════════════════════════════════════ */
function ExpandedProfile({
  member,
  onClose,
}: {
  member: (typeof team)[0];
  onClose: () => void;
}) {
  const [typedBio, setTypedBio] = useState("");
  const typingRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    let i = 0;
    typingRef.current = setInterval(() => {
      if (i < member.bio.length) {
        setTypedBio(member.bio.slice(0, i + 1));
        i++;
      } else {
        if (typingRef.current) clearInterval(typingRef.current);
      }
    }, 10);
    return () => {
      if (typingRef.current) clearInterval(typingRef.current);
    };
  }, [member.bio]);

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-50 bg-[#020205]/90 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          layoutId={`team-card-${member.id}`}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl rounded-3xl overflow-hidden border border-white/[0.08] bg-[#080A14] shadow-[0_0_80px_rgba(0,0,0,0.5)]"
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] backdrop-blur-md flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/[0.1] transition-all"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Top glow */}
          <div
            className="absolute top-0 left-0 right-0 h-1 z-40"
            style={{
              background: `linear-gradient(90deg, transparent, hsl(${member.accentHue}, 90%, 60%), transparent)`,
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image side */}
            <div className="relative aspect-[3/4] md:aspect-auto overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#080A14]/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080A14] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#080A14]" />

              {/* Radial glow */}
              <div
                className="absolute inset-0 mix-blend-screen"
                style={{
                  background: `radial-gradient(ellipse at 50% 40%, hsl(${member.accentHue}, 80%, 50%, 0.2) 0%, transparent 60%)`,
                  filter: "blur(30px)",
                }}
              />
            </div>

            {/* Info side */}
            <div className="p-8 md:p-10 flex flex-col justify-center relative">
              {/* Role badge */}
              <div
                className="inline-flex items-center self-start px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase mb-4 border"
                style={{
                  color: `hsl(${member.accentHue}, 90%, 75%)`,
                  borderColor: `hsl(${member.accentHue}, 70%, 40%, 0.3)`,
                  background: `hsl(${member.accentHue}, 70%, 20%, 0.2)`,
                }}
              >
                {member.role}
              </div>

              <h2 className="text-3xl font-bold text-white mb-4">{member.name}</h2>

              {/* Bio with typewriter */}
              <p className="text-sm text-slate-400 leading-relaxed mb-6 font-mono min-h-[80px]">
                {typedBio}
                <motion.span
                  className="inline-block w-[2px] h-4 ml-0.5 align-middle"
                  style={{ background: `hsl(${member.accentHue}, 90%, 70%)`, boxShadow: `0 0 6px hsl(${member.accentHue}, 90%, 70%, 0.5)` }}
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Years", value: member.stats.years },
                  { label: "Projects", value: member.stats.projects },
                  { label: "Teams Led", value: member.stats.teams },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]"
                  >
                    <div
                      className="text-2xl font-black"
                      style={{ color: `hsl(${member.accentHue}, 80%, 65%)` }}
                    >
                      {stat.value}+
                    </div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div className="mb-6">
                <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-3">
                  Expertise
                </div>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + si * 0.05 }}
                      className="px-3 py-1.5 text-xs font-medium text-slate-300 bg-white/[0.04] border border-white/[0.06] rounded-lg hover:border-white/[0.12] hover:bg-white/[0.06] transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-3">
                  Journey
                </div>
                <div className="space-y-3">
                  {member.timeline.map((t, ti) => (
                    <motion.div
                      key={t.year}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + ti * 0.08 }}
                      className="flex items-center gap-3"
                    >
                      <span
                        className="text-xs font-bold w-10 flex-shrink-0"
                        style={{ color: `hsl(${member.accentHue}, 80%, 65%)` }}
                      >
                        {t.year}
                      </span>
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{
                          background: `hsl(${member.accentHue}, 80%, 60%)`,
                          boxShadow: `0 0 8px hsl(${member.accentHue}, 80%, 60%, 0.5)`,
                        }}
                      />
                      <span className="text-sm text-slate-400">{t.event}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-3 mt-8">
                <a
                  href={member.linkedin}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-white/[0.05] border border-white/[0.08] rounded-xl hover:bg-white/[0.1] transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href={member.twitter}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-white/[0.05] border border-white/[0.08] rounded-xl hover:bg-white/[0.1] transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  X / Twitter
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

/* ═══════════════════════════════════════════════
   MAIN SECTION
   ═══════════════════════════════════════════════ */
export default function EnhancedTeamSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const expandedMember = team.find((m) => m.id === expandedId);

  return (
    <section className="relative py-32 bg-[#020205] overflow-hidden">
      {/* ═══ BACKGROUND SYSTEM ═══ */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient mesh */}
        <motion.div
          className="absolute top-[-15%] left-[15%] w-[45vw] h-[45vw] rounded-full blur-[180px] opacity-[0.08] bg-indigo-600 mix-blend-screen"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[10%] w-[40vw] h-[40vw] rounded-full blur-[160px] opacity-[0.06] bg-purple-600 mix-blend-screen"
          animate={{ scale: [1, 1.15, 1], x: [0, -25, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <motion.div
          className="absolute top-[40%] right-[-5%] w-[30vw] h-[30vw] rounded-full blur-[140px] opacity-[0.05] bg-cyan-600 mix-blend-screen"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        />

        {/* Enhanced grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99,102,241,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Light beam sweep */}
        <motion.div
          className="absolute top-0 w-[2px] h-full opacity-[0.04]"
          style={{
            background: "linear-gradient(180deg, transparent 0%, rgba(99,102,241,0.6) 50%, transparent 100%)",
          }}
          animate={{ left: ["0%", "100%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.02] mix-blend-screen"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Depth fog */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#020205] to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#020205] to-transparent" />

        {/* Particles */}
        <AmbientParticles />
      </div>

      {/* Cursor environment light */}
      <CursorEnvironment />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ═══ HEADER ═══ */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
              </span>
              <span className="text-xs font-semibold text-white/70 uppercase tracking-[0.2em]">
                Leadership
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-8"
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
            className="text-lg text-slate-400 font-light leading-relaxed max-w-xl mx-auto"
          >
            Hover to scan. Click to explore their story.
          </motion.p>
        </div>

        {/* ═══ TEAM GRID ═══ */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {team.map((member, i) => (
            <HoloPrismCard
              key={member.id}
              member={member}
              index={i}
              onExpand={(id) => setExpandedId(id)}
              isAnyExpanded={expandedId !== null}
            />
          ))}
        </motion.div>
      </div>

      {/* ═══ EXPANDED MODAL ═══ */}
      <AnimatePresence>
        {expandedMember && (
          <ExpandedProfile
            member={expandedMember}
            onClose={() => setExpandedId(null)}
          />
        )}
      </AnimatePresence>

      {/* Keyframe */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes shimmer-sweep {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(200%); }
            }
          `,
        }}
      />
    </section>
  );
}
