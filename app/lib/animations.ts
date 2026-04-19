import type { Transition } from "framer-motion";

// ── Shared Timing ───────────────────────────────────────
export const defaultTransition: Transition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
};

export const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
};

// ── Reusable Viewport Config ────────────────────────────
export const viewportOnce = { once: true, margin: "-80px" as const };

// ── Variant: Fade Up ────────────────────────────────────
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: i * 0.1 },
  }),
};

// ── Variant: Fade In ────────────────────────────────────
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.1 },
  }),
};

// ── Variant: Scale In ───────────────────────────────────
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: i * 0.1 },
  }),
};

// ── Variant: Slide In from Left ─────────────────────────
export const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

// ── Variant: Slide In from Right ────────────────────────
export const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

// ── Stagger Container ───────────────────────────────────
export const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// ── Stagger Child ───────────────────────────────────────
export const staggerChild = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

// ── Section Header (badge → heading → paragraph) ───────
export const sectionHeader = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...defaultTransition, staggerChildren: 0.12 },
  },
};

// ── Float Animation ─────────────────────────────────────
export const floatAnimation = {
  y: [-6, 6, -6],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

// ── Hover Effects ───────────────────────────────────────
export const hoverLift = {
  y: -4,
  transition: { duration: 0.25, ease: "easeOut" as const },
};

export const hoverScale = {
  scale: 1.03,
  transition: { duration: 0.25, ease: "easeOut" as const },
};

export const tapScale = {
  scale: 0.97,
};

// ── Icon Pulse ──────────────────────────────────────────
export const iconPulse = {
  hidden: { scale: 1 },
  visible: {
    scale: [1, 1.15, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

// ── Progress Line (for timeline) ────────────────────────
export const progressLine = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

// ── Gradient Shift (for CTA background) ─────────────────
export const gradientShift = {
  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "linear" as const,
  },
};
