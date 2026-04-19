"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { jobs, Job } from "@/app/lib/data/jobs";
import JobCard from "@/app/components/JobCard";
import JobDetailsModal from "@/app/components/JobDetailsModal";
import { Search, Filter, X } from "lucide-react";

const departments = ["All", "Engineering", "Design", "Marketing", "Product", "Operations"];
const locations = ["All", "Remote", "Onsite", "Hybrid"];
const types = ["All", "Full-time", "Contract", "Internship"];
const experienceLevels = ["All", "Junior", "Mid", "Senior", "Lead"];

export default function HiringPortal() {
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("All");
  const [location, setLocation] = useState("All");
  const [type, setType] = useState("All");
  const [experience, setExperience] = useState("All");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase()) || 
                            job.description.toLowerCase().includes(search.toLowerCase());
      const matchesDept = dept === "All" || job.department === dept;
      const matchesLocation = location === "All" || job.location === location;
      const matchesType = type === "All" || job.type === type;
      const matchesExperience = experience === "All" || job.experience === experience;

      return matchesSearch && matchesDept && matchesLocation && matchesType && matchesExperience;
    });
  }, [search, dept, location, type, experience]);

  const openJob = (job: Job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  return (
    <section id="open-roles" className="py-24 bg-[#05070F] min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Open Positions</h2>
          <p className="text-slate-400">Discover your next challenge at Fynab.</p>
        </div>

        {/* Search & Filters */}
        <div className="sticky top-24 z-40 mb-12 p-4 rounded-[2rem] bg-white/[0.02] border border-white/[0.08] backdrop-blur-2xl shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
              <input
                type="text"
                placeholder="Search by role or keyword..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-slate-600"
              />
              {search && (
                <button 
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <FilterSelect label="Department" value={dept} onChange={setDept} options={departments} />
              <FilterSelect label="Location" value={location} onChange={setLocation} options={locations} />
              <FilterSelect label="Type" value={type} onChange={setType} options={types} />
              <FilterSelect label="Experience" value={experience} onChange={setExperience} options={experienceLevels} />
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-8 flex items-center justify-between">
          <p className="text-slate-400 text-sm">
            Showing <span className="text-white font-bold">{filteredJobs.length}</span> positions
          </p>
          {(search || dept !== "All" || location !== "All" || type !== "All" || experience !== "All") && (
            <button
              onClick={() => {
                setSearch(""); setDept("All"); setLocation("All"); setType("All"); setExperience("All");
              }}
              className="text-indigo-400 hover:text-indigo-300 text-sm font-semibold transition-colors"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* Job Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} onClick={openJob} />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center"
              >
                <div className="w-20 h-20 bg-white/[0.03] rounded-full flex items-center justify-center mx-auto mb-6 border border-white/[0.08]">
                  <Search size={32} className="text-slate-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">No roles found</h3>
                <p className="text-slate-400">Try adjusting your filters or search terms.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <JobDetailsModal
        job={selectedJob}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}

function FilterSelect({ label, value, onChange, options }: { 
  label: string; 
  value: string; 
  onChange: (v: string) => void; 
  options: string[] 
}) {
  return (
    <div className="relative group">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none pl-4 pr-10 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-sm text-slate-300 hover:text-white hover:bg-white/[0.06] hover:border-white/[0.12] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
      >
        <option value={options[0]} className="bg-[#0A0C14]">{label}: All</option>
        {options.slice(1).map((opt) => (
          <option key={opt} value={opt} className="bg-[#0A0C14]">{opt}</option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 group-hover:text-slate-300 transition-colors">
        <Filter size={14} />
      </div>
    </div>
  );
}
