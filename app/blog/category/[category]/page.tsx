"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import BlogCard from "../../../components/blog/BlogCard";
import CategoryBar from "../../../components/blog/CategoryBar";
import { BLOG_POSTS, BLOG_CATEGORIES } from "../../../lib/blog-data";

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = params.category as string;

  const currentCategory = useMemo(() => {
    return BLOG_CATEGORIES.find(cat => cat.slug === categorySlug);
  }, [categorySlug]);

  const filteredPosts = useMemo(() => {
    if (!currentCategory) return [];
    return BLOG_POSTS.filter(post => post.category === currentCategory.name);
  }, [currentCategory]);

  return (
    <div className="min-h-screen bg-[#020205] text-slate-300">
      <Header />
      
      <main className="relative pt-32 pb-24">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[400px] w-full bg-indigo-600/5 blur-[120px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Header */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors group">
                <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Blog
              </Link>
              
              <h1 className="mb-4 text-4xl font-black text-white lg:text-6xl">
                {currentCategory?.name || "Category"}
              </h1>
              <p className="max-w-2xl text-lg text-slate-400">
                {currentCategory?.description || "Explore our latest insights and articles."}
              </p>
            </motion.div>
          </div>

          {/* Filters */}
          <div className="mb-12">
            <CategoryBar activeCategory={currentCategory?.name} />
          </div>

          {/* Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, idx) => (
                <BlogCard key={post.slug} post={post} index={idx} />
              ))}
            </AnimatePresence>
          </div>

          {filteredPosts.length === 0 && (
            <div className="py-24 text-center border border-white/5 bg-white/[0.02] rounded-[2.5rem] backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-2">No posts found in this category</h3>
              <p className="text-slate-400">We're working on gathering new insights for this topic. Stay tuned!</p>
              <Link href="/blog" className="mt-8 inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)]">
                Browse All Posts
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

