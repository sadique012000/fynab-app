"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Freelancer } from "@/app/lib/freelancers-data";

export default function FreelancerCard({ freelancer }: { freelancer: Freelancer }) {
  // Generate gradient colors based on name to keep them consistent
  const getGradient = (name: string) => {
    const gradients = [
      "from-indigo-500 to-cyan-400",
      "from-purple-500 to-pink-500",
      "from-emerald-400 to-cyan-500",
      "from-orange-400 to-rose-400",
      "from-blue-600 to-violet-600",
    ];
    const index = name.charCodeAt(0) % gradients.length;
    return gradients[index];
  };

  const initials = freelancer.name.split(" ").map(n => n[0]).join("").substring(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
      
      <div className="relative h-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-xl rounded-2xl p-6 flex flex-col hover:border-indigo-500/30 transition-colors duration-300">
        
        {/* Header */}
        <div className="flex flex-col gap-4 justify-between items-start mb-4">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white bg-gradient-to-br ${getGradient(freelancer.name)} shadow-lg shadow-black/20`}>
              {initials}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all">
                {freelancer.name}
              </h3>
              <p className="text-sm font-medium text-slate-400">{freelancer.role}</p>
            </div>
          </div>
          
         <div className="text-right flex gap-3 items-center">
  <div className="text-lg font-black text-white">
    ${freelancer.hourlyRate}
    <span className="text-sm font-normal text-slate-400">/hr</span>
  </div>

  <div
    className={`text-xs font-semibold px-2 py-1 rounded-full inline-block ${
      freelancer.availability === "Full-time"
        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
        : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
    }`}
  >
    {freelancer.availability}
  </div>
</div>
        </div>

        {/* Details List */}
        <div className="space-y-3 mb-6 flex-grow">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {freelancer.experience}+ Years Experience
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {freelancer.location}, India
          </div>
        </div>

        {/* Skills */}
        <div className="mb-6 mb-auto pb-4">
          <div className="flex flex-wrap gap-2">
            {freelancer.skills.map((skill, index) => (
              <span key={index} className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link href={`/freelancers/${freelancer.id}`} className="flex items-center justify-center w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-medium text-white transition-colors gap-2">
            View Profile
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
