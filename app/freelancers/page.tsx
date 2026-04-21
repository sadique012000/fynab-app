"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { freelancers } from "@/app/lib/freelancers-data";
import FreelancerCard from "@/app/components/freelancers/FreelancerCard";
import FilterSettings, { FilterState } from "@/app/components/freelancers/Filters";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function FreelancerMarketplace() {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    role: "All",
    experience: "All",
    priceRange: "All",
    availability: "All"
  });

  const uniqueRoles = useMemo(() => {
    const roles = new Set(freelancers.map(f => f.role));
    return Array.from(roles);
  }, []);

  const filteredFreelancers = useMemo(() => {
    return freelancers.filter(f => {
      // 1. Search (Name or Skills)
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchName = f.name.toLowerCase().includes(searchLower);
        const matchSkill = f.skills.some(s => s.toLowerCase().includes(searchLower));
        if (!matchName && !matchSkill) return false;
      }

      // 2. Role
      if (filters.role !== "All" && f.role !== filters.role) return false;

      // 3. Experience
      if (filters.experience !== "All") {
        if (filters.experience === "1-3" && (f.experience < 1 || f.experience > 3)) return false;
        if (filters.experience === "3-5" && (f.experience < 3 || f.experience > 5)) return false;
        if (filters.experience === "5-10" && (f.experience < 5)) return false; // assuming 5+
      }

      // 4. Price
      if (filters.priceRange !== "All") {
        if (filters.priceRange === "0-20" && f.hourlyRate > 20) return false;
        if (filters.priceRange === "20-40" && (f.hourlyRate <= 20 || f.hourlyRate > 40)) return false;
        if (filters.priceRange === "40-60" && (f.hourlyRate <= 40 || f.hourlyRate > 60)) return false;
        if (filters.priceRange === "60-100" && f.hourlyRate <= 60) return false;
      }

      // 5. Availability
      if (filters.availability !== "All" && f.availability !== filters.availability) return false;

      return true;
    });
  }, [filters]);

  return (
    <>
    <Header />
      <main className="min-h-screen bg-[#020205] text-white pt-24 pb-20 overflow-hidden selection:bg-indigo-500/30">
      
      {/* Background Glow Mesh */}
      <div className="fixed inset-0 pointer-events-none mb-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Hire Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">Indian Tech Talent</span> On-Demand
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Scale your team instantly with our vetted, in-house technical experts. Flexible hourly hiring with highly skilled professionals ready to ship your product.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-8">
             <div className="flex flex-col items-center p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
                <span className="text-3xl font-black text-indigo-400">60+</span>
                <span className="text-sm text-slate-400 mt-1 uppercase tracking-wider font-semibold">Engineers</span>
             </div>
             <div className="flex flex-col items-center p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
                <span className="text-3xl font-black text-cyan-400">10+</span>
                <span className="text-sm text-slate-400 mt-1 uppercase tracking-wider font-semibold">Tech Domains</span>
             </div>
             <div className="flex flex-col items-center p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
                <span className="text-3xl font-black text-purple-400">$15/hr</span>
                <span className="text-sm text-slate-400 mt-1 uppercase tracking-wider font-semibold">Starting Rate</span>
             </div>
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Sidebar / Filters */}
          <aside className="w-full lg:w-[320px] flex-shrink-0 self-start lg:sticky lg:top-24">
             <FilterSettings 
               filters={filters} 
               setFilters={setFilters} 
               uniqueRoles={uniqueRoles} 
             />
          </aside>

          {/* Grid View */}
          <div className="flex-1">
             {/* Results Count */}
             <div className="mb-6 flex justify-between items-center bg-white/[0.02] border border-white/[0.05] rounded-xl px-6 py-4 backdrop-blur-md">
               <span className="text-slate-300 font-medium">
                 Showing <span className="text-white font-bold">{filteredFreelancers.length}</span> talent{filteredFreelancers.length !== 1 && 's'}
               </span>
               
               {/* Sort - For later if needed, right now static */}
               <div className="flex items-center gap-2 text-sm text-slate-400">
                  <span>Sort by:</span>
                  <select className="bg-transparent text-white font-medium focus:outline-none cursor-pointer">
                    <option className="bg-[#0f111a]">Relevance</option>
                    <option className="bg-[#0f111a]">Price: Low to High</option>
                    <option className="bg-[#0f111a]">Experience</option>
                  </select>
               </div>
             </div>

             {filteredFreelancers.length > 0 ? (
               <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                 {filteredFreelancers.map((freelancer) => (
                   <FreelancerCard key={freelancer.id} freelancer={freelancer} />
                 ))}
               </div>
             ) : (
               <div className="text-center py-20 bg-white/[0.02] border border-white/[0.05] rounded-3xl mt-6 backdrop-blur-md">
                 <div className="text-5xl mb-4">🔍</div>
                 <h3 className="text-2xl font-bold text-white mb-2">No freelancers found</h3>
                 <p className="text-slate-400 mb-6">Try adjusting your filters or search term to find what you're looking for.</p>
                 <button 
                   onClick={() => setFilters({ search: '', role: 'All', experience: 'All', priceRange: 'All', availability: 'All' })}
                   className="px-6 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-xl transition-colors shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                 >
                   Clear all filters
                 </button>
               </div>
             )}
          </div>

        </div>
      </section>

    </main>
    <Footer />
    </>
  
  );
}
