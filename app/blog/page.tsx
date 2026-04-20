"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogCard from "../components/blog/BlogCard";
import CategoryBar from "../components/blog/CategoryBar";
import SearchInput from "../components/blog/SearchInput";
import { BLOG_POSTS, BlogPost } from "../lib/blog-data";
import Image from "next/image";
import Link from "next/link";

type TabType = "Latest" | "Most Read" | "Popular";

import PageHero from "../components/sections/PageHero";

export default function BlogHub() {
  const [activeTab, setActiveTab] = useState<TabType>("Latest");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPost = useMemo(() => {
    return BLOG_POSTS.find(post => post.featured) || BLOG_POSTS[0];
  }, []);

  const filteredPosts = useMemo(() => {
    let posts = [...BLOG_POSTS];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.description.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
      );
    }

    // Tab filter
    if (activeTab === "Latest") {
      posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else if (activeTab === "Most Read") {
      posts.sort((a, b) => b.views - a.views);
    } else if (activeTab === "Popular") {
      posts.sort((a, b) => b.popularity - a.popularity);
    }

    return posts;
  }, [activeTab, searchQuery]);

  return (
    <div className="min-h-screen bg-[#020205] text-slate-300 selection:bg-indigo-500/30 selection:text-indigo-200">
      <Header />
      
      <main className="relative">
        <PageHero
          title="Insights from the Future of Technology"
          subtitle="Deep dives into software engineering, cloud architecture, and the AI revolution. Expert perspectives for the modern tech leader."
          badge="Fynab Blog"
          image="/images/heroes/services_hero.png"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">


          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-24"
          >
            <Link href={`/blog/${featuredPost.slug}`} className="group relative block overflow-hidden rounded-[2.5rem] border border-white/[0.06] bg-white/[0.02] backdrop-blur-3xl">
              <div className="grid lg:grid-cols-2">
                <div className="relative aspect-[16/10] lg:aspect-auto h-full overflow-hidden">
                  <Image
                    src={featuredPost.thumbnail}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#020205]/80 via-transparent to-transparent hidden lg:block" />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#020205]/80 to-transparent lg:hidden" />
                </div>
                
                <div className="p-8 lg:p-16 flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="rounded-full bg-indigo-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-400 border border-indigo-500/20">
                      Featured Insight
                    </span>
                  </div>
                  
                  <h2 className="mb-6 text-3xl font-bold text-white lg:text-5xl leading-tight group-hover:text-indigo-400 transition-colors">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="mb-8 text-lg text-slate-400 leading-relaxed">
                    {featuredPost.description}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 overflow-hidden rounded-2xl ring-1 ring-white/10">
                        <Image
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-white">{featuredPost.author.name}</p>
                        <p className="text-sm text-slate-500">{featuredPost.author.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Corner Glow */}
              <div className="absolute top-0 right-0 h-32 w-32 bg-indigo-500/10 blur-[60px] pointer-events-none" />
            </Link>
          </motion.div>

          {/* Filtering & Search Bar */}
          <div className="mb-12 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <CategoryBar />
            <SearchInput onSearch={setSearchQuery} />
          </div>

          {/* Tabs System */}
          <div className="mb-12 flex items-center gap-8 border-b border-white/5 pb-1">
            {(["Latest", "Most Read", "Popular"] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative py-4 text-sm font-bold tracking-wider uppercase transition-colors"
                style={{ color: activeTab === tab ? "#fff" : "#64748b" }}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabBadge"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, idx) => (
                <BlogCard key={post.slug} post={post} index={idx} />
              ))}
            </AnimatePresence>
          </div>

          {filteredPosts.length === 0 && (
            <div className="py-24 text-center">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-white/5 border border-white/10 mb-6">
                <svg className="h-10 w-10 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No matching insights found</h3>
              <p className="text-slate-400">Try adjusting your search or filters to find what you're looking for.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
