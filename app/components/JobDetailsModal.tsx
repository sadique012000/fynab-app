"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Job } from "@/app/lib/data/jobs";
import { X, MapPin, Briefcase, Clock, ChevronRight, CheckCircle2 } from "lucide-react";

interface JobDetailsModalProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function JobDetailsModal({ job, isOpen, onClose }: JobDetailsModalProps) {
  if (!job) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#05070F]/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2rem] bg-[#0A0C14] border border-white/[0.08] shadow-[0_0_50px_rgba(0,0,0,0.5)] custom-scrollbar"
          >
            {/* Header / Banner */}
            <div className="sticky top-0 z-20 bg-[#0A0C14]/80 backdrop-blur-xl border-b border-white/[0.06] p-6 sm:p-8 flex items-center justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">{job.title}</h2>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 text-xs font-semibold text-indigo-400 bg-indigo-500/10 rounded-full">
                    {job.department}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin size={14} /> {job.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Briefcase size={14} /> {job.experience}
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.08] transition-all"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Info */}
                <div className="lg:col-span-2 space-y-10">
                  <section>
                    <h3 className="text-lg font-bold text-white mb-4">About the Role</h3>
                    <p className="text-slate-400 leading-relaxed">{job.description}</p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-white mb-4">Responsibilities</h3>
                    <ul className="space-y-4">
                      {job.responsibilities.map((item, i) => (
                        <li key={i} className="flex gap-4">
                          <CheckCircle2 size={18} className="text-indigo-500 shrink-0 mt-1" />
                          <span className="text-slate-400 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-white mb-4">Requirements</h3>
                    <ul className="space-y-4">
                      {job.requirements.map((item, i) => (
                        <li key={i} className="flex gap-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 mt-2" />
                          <span className="text-slate-400 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                {/* Sidebar / Side Info */}
                <div className="space-y-8">
                  <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.06]">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Job Summary</h4>
                    <div className="space-y-4">
                      <SummaryItem label="Location" value={job.location} />
                      <SummaryItem label="Type" value={job.type} />
                      <SummaryItem label="Salary" value={job.salary} />
                      <SummaryItem label="Experience" value={job.experience} />
                    </div>
                  </div>

                  <div className="p-6 rounded-3xl bg-indigo-500/5 border border-indigo-500/10">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Benefits</h4>
                    <ul className="space-y-3">
                      {job.benefits.map((benefit, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-indigo-400" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)]">
                    Apply for this position
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center text-sm">
      <span className="text-slate-500">{label}</span>
      <span className="text-slate-200 font-medium">{value}</span>
    </div>
  );
}
