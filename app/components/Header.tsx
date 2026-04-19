"use client";
/* eslint-disable react/no-unescaped-entities */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[#05070F]/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "py-5 bg-transparent"
        }`}
      >
        {/* Top Glow Accent (Scrolled Only) */}
        {scrolled && (
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-16">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center gap-2.5 group relative"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-indigo-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.3)] group-hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all duration-500">
                  <span className="text-white font-black text-lg">F</span>
                </div>
              </div>
              <span className="text-2xl font-black text-white tracking-widest uppercase">
                fynab
              </span>
            </motion.a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-2 px-2 py-1 rounded-full bg-white/[0.02] border border-white/[0.05] backdrop-blur-md">
              {navLinks.map((link, i) => (
                <NavLink key={link.href} href={link.href} label={link.label} index={i} />
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative group px-6 py-2.5 text-sm font-bold text-white bg-indigo-600 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-0 group-hover:animate-[shine_1.5s_ease-in-out_infinite]" />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-2.5 rounded-xl text-slate-300 transition-colors relative group"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-white/5 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <svg className="w-6 h-6 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Bottom Glow (Scrolled Only) */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent blur-[2px]" />
        )}
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] lg:hidden bg-[#05070F]/95 backdrop-blur-2xl flex flex-col p-8 pt-24"
          >
            <div className="absolute top-8 right-8">
               <button onClick={() => setMenuOpen(false)} className="p-2 text-slate-400 hover:text-white transition-colors">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
               </button>
            </div>
            
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl font-bold text-slate-300 hover:text-white transition-colors flex items-center justify-between group"
                >
                  {link.label}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500">→</span>
                </motion.a>
              ))}
              
              <motion.a
                href="/contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setMenuOpen(false)}
                className="mt-8 w-full py-4 text-center rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-400 text-white font-bold text-xl shadow-[0_0_30px_rgba(99,102,241,0.4)]"
              >
                Get Started
              </motion.a>
            </nav>

            <div className="mt-auto items-center justify-center flex gap-8 pb-8 border-t border-white/5 pt-8">
               <span className="text-slate-500 text-sm">&copy; 2026 Fynab</span>
               <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white text-xs">Tw</div>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white text-xs">Li</div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shine {
          100% { left: 200%; }
        }
      `}} />
    </>
  );
}

function NavLink({ href, label, index }: { href: string; label: string; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative px-5 py-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
    >
      <span className="relative z-10">{label}</span>
      {isHovered && (
        <motion.div
          layoutId={"nav-pill"}
          transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
          className="absolute inset-0 bg-white/5 rounded-full z-0 border border-white/10"
        />
      )}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,1)]"
          />
        )}
      </AnimatePresence>
    </motion.a>
  );
}
