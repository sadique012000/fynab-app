"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/app/lib/blog-data";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-indigo-500/30">
          {/* Hover Glow Effect */}
          <div className="absolute -inset-px bg-gradient-to-br from-indigo-500/20 via-transparent to-cyan-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          
          {/* Image Container */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-transparent to-transparent opacity-60" />
            
            {/* Category Tag */}
            <div className="absolute top-4 left-4">
              <span className="rounded-full bg-indigo-500/20 backdrop-blur-md border border-indigo-500/30 px-3 py-1 text-xs font-semibold text-indigo-300">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="relative p-6 px-7">
            <div className="mb-3 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readTime}
              </span>
              <span>{new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>

            <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-indigo-400 lg:text-2xl">
              {post.title}
            </h3>
            
            <p className="line-clamp-2 text-sm leading-relaxed text-slate-400">
              {post.description}
            </p>

            <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-6">
              <div className="flex items-center gap-3">
                <div className="relative h-8 w-8 overflow-hidden rounded-full ring-1 ring-white/10">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">{post.author.name}</p>
                  <p className="text-[10px] text-slate-500">{post.author.role}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-1 text-indigo-400">
                <span className="text-xs font-bold uppercase tracking-wider">Read More</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
