"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  staggerChild,
  viewportOnce,
} from "@/app/lib/animations";

const footerLinks = {
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
  ],
  services: [
    { label: "Cloud Solutions", href: "#services" },
    { label: "Custom Software", href: "#services" },
    { label: "Data Analytics", href: "#services" },
    { label: "Cybersecurity", href: "#services" },
  ],
  resources: [
    { label: "Case Studies", href: "#case-study" },
    { label: "Whitepapers", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "FAQs", href: "#" },
  ],
};

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      className="relative overflow-hidden bg-[#05070F] text-slate-300"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
    >
      {/* ── Ambient Background Glow ───────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-indigo-600/20 blur-[140px] rounded-full opacity-40" />
        <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full opacity-40" />
      </div>

      {/* ── Top subtle gradient divider ───────────── */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Main Footer ───────────────────────── */}
        <motion.div
          className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* ── Brand ───────────────── */}
          <motion.div className="lg:col-span-2" variants={staggerChild}>
            <a href="#" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all duration-300">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-xl font-semibold text-white tracking-wide">
                fynab
              </span>
            </a>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
              Empowering businesses with scalable, high-performance technology.
              We build systems that feel invisible but drive massive impact.
            </p>

            {/* ── Social Icons ───────────────── */}
            <div className="flex items-center gap-4">
              {["LinkedIn", "Twitter", "GitHub", "YouTube"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  aria-label={social}
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 bg-white/[0.03] border border-white/[0.06] backdrop-blur-md overflow-hidden group"
                >
                  {/* glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-cyan-500/0 group-hover:from-indigo-500/20 group-hover:to-cyan-500/20 opacity-0 group-hover:opacity-100 transition duration-500" />

                  <span className="relative z-10 text-sm font-semibold group-hover:text-white transition">
                    {social[0]}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Links ───────────────── */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <motion.div key={title} variants={staggerChild}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      className="relative text-sm text-slate-400 transition-all duration-300"
                      whileHover={{ x: 6 }}
                    >
                      <span className="relative z-10 group-hover:text-white">
                        {link.label}
                      </span>

                      {/* underline glow */}
                      <span className="absolute left-0 bottom-0 h-px w-0 bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom Bar ───────────────── */}
        <motion.div
          className="border-t border-white/[0.06] py-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Fynab. Crafted with precision.
          </p>

          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ y: -2 }}
                className="text-sm text-slate-500 hover:text-white transition"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}