"use client";

import { use } from "react";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CASE_STUDIES } from '@/app/lib/case-studies-data';
import { fadeUp, staggerContainer } from '@/app/lib/animations';
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function CaseStudyDetail({ params }: { params: Promise<{ slug: string }> }) {
  // Use React.use() to unwrap the params promise
  const resolvedParams = use(params);
  const caseStudy = CASE_STUDIES.find(cs => cs.slug === resolvedParams.slug);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center pt-24 pb-32">
        <h1 className="text-4xl font-bold mb-4 font-outfit">Case Study Not Found</h1>
        <p className="text-gray-400 mb-8 max-w-md text-center">We couldn't find the case study you're looking for. It may have been moved or doesn't exist.</p>
        <Link
          href="/industries"
          className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white transition-all duration-300"
        >
          Return to Industries
        </Link>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white pt-24 pb-32 selection:bg-blue-500/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back Link */}
          <Link
            href="/industries"
            className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-12 transition-colors group"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Industries
          </Link>

          <motion.article
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Header Section */}
            <header className="mb-16">
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-400/10 border border-blue-400/20 rounded-full">
                  {caseStudy.industry} Case Study
                </span>
                <span className="px-3 py-1 text-xs font-medium text-gray-400 bg-white/5 border border-white/10 rounded-full">
                  {caseStudy.duration}
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight font-outfit"
              >
                {caseStudy.title}
              </motion.h1>

              {/* Client Context Cards */}
              <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Client</span>
                  <span className="block font-medium text-white">{caseStudy.client.name}</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Sector</span>
                  <span className="block font-medium text-white">{caseStudy.client.industry}</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Scale</span>
                  <span className="block font-medium text-white">{caseStudy.client.size}</span>
                </div>
              </motion.div>

              {/* Executive Summary Grid (Challenge vs Solution) */}
              <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${caseStudy.color} opacity-10 blur-[100px] rounded-full`} />

                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 font-outfit text-red-400">The Challenge</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 font-outfit text-emerald-400">Our Solution</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </div>
              </motion.div>
            </header>

            {/* Key Results Highlight */}
            <motion.div variants={fadeUp} className="my-16 py-12 border-y border-white/10">
              <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-gray-500 mb-8">Measurable Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-4xl md:text-5xl font-bold font-outfit mb-2 bg-gradient-to-r ${caseStudy.color} text-transparent bg-clip-text`}>
                      {result.value}
                    </div>
                    <div className="text-sm text-gray-400 font-medium">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Full Markdown Content Render */}
            <motion.div variants={fadeUp} className="max-w-3xl mx-auto">
              <ContentRenderer content={caseStudy.content} />
            </motion.div>

            {/* Technologies Used */}
            <motion.div variants={fadeUp} className="mt-20 pt-10 border-t border-white/10 text-center">
              <h3 className="text-xl font-bold mb-6 font-outfit">Technologies Deployed</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {caseStudy.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 text-sm font-medium text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              variants={fadeUp}
              className="mt-24 p-10 rounded-3xl border border-white/10 relative overflow-hidden text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-black to-black opacity-80" />
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50`} />

              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold font-outfit mb-4">Facing similar challenges in {caseStudy.industry}?</h2>
                <p className="text-gray-400 mb-8 text-lg">
                  Let's discuss how our engineering team can architect a scalable solution tailored to your specific operational needs.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule a Technical Consultation
                </Link>
              </div>
            </motion.div>

          </motion.article>
        </div>

      </div>
      <Footer />
    </>
  );
}

function ContentRenderer({ content }: { content: string }) {
  const sections = content.split('```');

  return (
    <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
      {sections.map((section, index) => {
        if (index % 2 === 0) {
          return (
            <div key={index} className="space-y-4">
              {section.split('\n').map((line, lIdx) => {
                if (line.startsWith('# ')) return <h1 key={lIdx} className="text-3xl font-bold text-white mt-12 mb-6 font-outfit">{line.substring(2)}</h1>;
                if (line.startsWith('## ')) return <h2 key={lIdx} className="text-2xl font-bold text-white mt-10 mb-5 font-outfit">{line.substring(3)}</h2>;
                if (line.startsWith('### ')) return <h3 key={lIdx} className="text-xl font-bold text-white mt-8 mb-4 font-outfit">{line.substring(4)}</h3>;
                if (line.startsWith('**') && line.includes(':** ')) {
                  const parts = line.split(':** ');
                  return <p key={lIdx}><strong className="text-white">{parts[0].substring(2)}:</strong> {parts[1]}</p>;
                }
                if (line.startsWith('**')) {
                  const txt = line.replaceAll('**', "");
                  return <p key={lIdx} className="mt-6 mb-2"><strong className="text-white">{txt}</strong></p>;
                }
                if (line.startsWith('- ')) return <li key={lIdx} className="ml-4 list-disc marker:text-cyan-500 mb-2">{line.substring(2)}</li>;
                return line.trim() ? <p key={lIdx}>{line}</p> : null;
              })}
            </div>
          );
        } else {
          // No code blocks expected in case studies, but fallback gracefully
          const code = section.split('\n').slice(1).join('\n');
          return (
            <pre key={index} className="p-4 bg-white/5 border border-white/10 rounded-xl overflow-x-auto text-sm my-4 font-mono">
              <code>{code}</code>
            </pre>
          );
        }
      })}
    </div>
  );
}
