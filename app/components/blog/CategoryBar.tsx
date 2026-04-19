"use client";

import { motion } from "framer-motion";
import { BLOG_CATEGORIES, BlogCategory } from "@/app/lib/blog-data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CategoryBar({ activeCategory }: { activeCategory?: BlogCategory | "All" }) {
  const pathname = usePathname();

  return (
    <div className="relative">
      {/* Container with horizontal scroll */}
      <div className="flex items-center gap-3 overflow-x-auto pb-6 pt-2 no-scrollbar scroll-smooth">
        <CategoryLink 
          name="All" 
          href="/blog" 
          isActive={activeCategory === "All" || pathname === "/blog"} 
        />
        {BLOG_CATEGORIES.map((cat) => (
          <CategoryLink
            key={cat.slug}
            name={cat.name}
            href={`/blog/category/${cat.slug}`}
            isActive={activeCategory === cat.name}
          />
        ))}
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

function CategoryLink({ name, href, isActive }: { name: string; href: string; isActive: boolean }) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        className={`whitespace-nowrap rounded-2xl border px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
          isActive
            ? "border-indigo-500 bg-indigo-500/10 text-white shadow-[0_0_20px_rgba(99,102,241,0.2)]"
            : "border-white/5 bg-white/[0.02] text-slate-400 hover:border-white/20 hover:text-white"
        }`}
      >
        {name}
      </motion.div>
    </Link>
  );
}
