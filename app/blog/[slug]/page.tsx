"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CodeBlock from "../../components/blog/CodeBlock";
import { BLOG_POSTS, BLOG_CATEGORIES } from "../../lib/blog-data";

export default function BlogPostDetail() {
  const params = useParams();
  const slug = params.slug as string;

  const post = useMemo(() => {
    return BLOG_POSTS.find(p => p.slug === slug);
  }, [slug]);

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return BLOG_POSTS
      .filter(p => p.category === post.category && p.slug !== post.slug)
      .slice(0, 3);
  }, [post]);

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#020205] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <Link href="/blog" className="text-indigo-400 hover:underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020205] text-slate-300">
      <Header />
      
      <main className="relative pt-32 pb-24">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-0 -z-10 h-[600px] w-full bg-gradient-to-b from-indigo-600/10 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Hero */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors group">
                <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Library
              </Link>
              
              <div className="mb-6 flex items-center gap-3">
                <span className="rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs font-bold text-indigo-400 uppercase tracking-widest">
                  {post.category}
                </span>
                <span className="text-slate-500 text-sm">•</span>
                <span className="text-slate-500 text-sm">{post.readTime}</span>
              </div>

              <h1 className="mb-8 text-4xl font-black text-white sm:text-5xl lg:text-7xl leading-[1.1]">
                {post.title}
              </h1>

              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-2xl ring-1 ring-white/10">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg font-bold text-white">{post.author.name}</p>
                  <p className="text-sm text-slate-500">{post.author.role} • {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid gap-16 lg:grid-cols-[1fr_320px]">
            {/* Main Content Area */}
            <article className="max-w-4xl">
              <div className="relative mb-12 aspect-[21/9] overflow-hidden rounded-[2.5rem] border border-white/[0.06] shadow-2xl">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="prose prose-invert prose-indigo max-w-none">
                <ContentRenderer content={post.content} />
              </div>

              {/* Bottom Actions */}
              <div className="mt-16 border-t border-white/5 pt-12">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold uppercase tracking-wider text-slate-500">Share Insight:</span>
                    <div className="flex gap-2">
                       {/* Twitter/X */}
                       <button className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                       </button>
                       {/* LinkedIn */}
                       <button className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                       </button>
                    </div>
                  </div>
                  
                  <Link href="/contact" className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-cyan-400 text-white font-bold rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] transition-all">
                    Scale Your Business
                  </Link>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-12">
              {/* Table of Contents / Highlights */}
              <div className="rounded-[2rem] border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-3xl">
                <h3 className="mb-6 text-xl font-bold text-white">Related Insights</h3>
                <div className="space-y-6">
                  {relatedPosts.map(p => (
                    <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                      <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-1">{p.category}</p>
                      <h4 className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors line-clamp-2">
                        {p.title}
                      </h4>
                    </Link>
                  ))}
                  {relatedPosts.length === 0 && <p className="text-sm text-slate-500">No related posts yet.</p>}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/[0.06] bg-indigo-500/5 p-8 backdrop-blur-3xl">
                <h4 className="mb-4 text-xl font-bold text-white">Tech Categories</h4>
                <div className="flex flex-wrap gap-2">
                  {BLOG_CATEGORIES.map(cat => (
                    <Link 
                      key={cat.slug} 
                      href={`/blog/category/${cat.slug}`}
                      className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] overflow-hidden bg-gradient-to-br from-indigo-600 to-cyan-600 p-8 shadow-2xl relative">
                <div className="relative z-10 text-white">
                  <h3 className="text-2xl font-black mb-4">Launch with Fynab</h3>
                  <p className="text-white/80 text-sm mb-6 leading-relaxed">
                    Ready to build the future of tech? Let's discuss your roadmap.
                  </p>
                  <Link href="/contact" className="block w-full text-center py-3 bg-white text-indigo-600 font-bold rounded-xl hover:bg-slate-50 transition-colors">
                    Get in Touch
                  </Link>
                </div>
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[40px] rounded-full -translate-y-1/2 translate-x-1/2" />
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function ContentRenderer({ content }: { content: string }) {
  // Simple custom renderer for the demo content
  const sections = content.split('```');
  
  return (
    <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
      {sections.map((section, index) => {
        // Even indices are text, odd are code blocks
        if (index % 2 === 0) {
          return (
            <div key={index} className="space-y-4">
              {section.split('\n').map((line, lIdx) => {
                if (line.startsWith('# ')) return <h1 key={lIdx} className="text-3xl font-bold text-white mt-12 mb-6">{line.substring(2)}</h1>;
                if (line.startsWith('## ')) return <h2 key={lIdx} className="text-2xl font-bold text-white mt-10 mb-5">{line.substring(3)}</h2>;
                if (line.startsWith('### ')) return <h3 key={lIdx} className="text-xl font-bold text-white mt-8 mb-4">{line.substring(4)}</h3>;
                if (line.startsWith('- ')) return <li key={lIdx} className="ml-4 list-disc marker:text-indigo-500 mb-2">{line.substring(2)}</li>;
                return line.trim() ? <p key={lIdx}>{line}</p> : null;
              })}
            </div>
          );
        } else {
          // Identify language from first line of code block
          const lines = section.split('\n');
          const language = lines[0].trim();
          const code = lines.slice(1).join('\n');
          return <CodeBlock key={index} code={code} language={language} />;
        }
      })}
    </div>
  );
}
