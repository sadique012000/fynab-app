"use client";

import { motion } from "framer-motion";
import { Job } from "@/app/lib/data/jobs";
import { MapPin, Briefcase, Clock, ChevronRight } from "lucide-react";

interface JobCardProps {
  job: Job;
  onClick: (job: Job) => void;
}

export default function JobCard({ job, onClick }: JobCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -5 }}
      className="group relative p-6 rounded-3xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.05] hover:border-white/[0.12] cursor-pointer"
      onClick={() => onClick(job)}
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors mb-2">
              {job.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs font-medium text-indigo-400 bg-indigo-500/10 rounded-full border border-indigo-500/20">
                {job.department}
              </span>
              <span className="px-3 py-1 text-xs font-medium text-slate-400 bg-white/[0.05] rounded-full border border-white/[0.08]">
                {job.type}
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-sm font-semibold text-white/90">
              {job.salary}
            </span>
          </div>
        </div>

        <p className="text-slate-400 text-sm line-clamp-2 mb-6 leading-relaxed">
          {job.description}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <MapPin size={14} className="text-slate-400" />
            {job.location}
          </div>
          <div className="flex items-center gap-1.5">
            <Briefcase size={14} className="text-slate-400" />
            {job.experience}
          </div>
          <div className="ml-auto">
            <motion.div
              whileHover={{ x: 3 }}
              className="flex items-center gap-1 text-indigo-400 font-semibold group-hover:text-indigo-300"
            >
              Apply Now
              <ChevronRight size={16} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Border Glow line */}
      <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
