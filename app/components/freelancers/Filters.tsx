"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, MapPin, Briefcase, ChevronDown } from "lucide-react";

export interface FilterState {
  search: string;
  role: string;
  experience: string;
  priceRange: string;
  availability: string;
}

interface FilterSettingsProps {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  uniqueRoles: string[];
}

export default function FilterSettings({ filters, setFilters, uniqueRoles }: FilterSettingsProps) {

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <div className="bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl rounded-2xl p-6 shadow-2xl">
      <div className="flex items-center gap-2 mb-6 text-white pb-4 border-b border-white/5">
        <SlidersHorizontal className="w-5 h-5 text-indigo-400" />
        <h2 className="text-xl font-bold">Filters</h2>
      </div>

      <div className="space-y-6">
        {/* Search */}
        <div>
          <label className="text-sm font-medium text-slate-400 mb-2 block">Search Name or Skill</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="e.g. React, Python, Aarav..." 
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-colors placeholder:text-slate-600"
            />
          </div>
        </div>

        {/* Role */}
        <div>
          <label className="text-sm font-medium text-slate-400 mb-2 block flex items-center gap-2">
            <Briefcase className="w-4 h-4" /> Role
          </label>
          <div className="relative">
            <select 
              value={filters.role}
              onChange={(e) => handleFilterChange('role', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-4 pr-10 text-sm text-white appearance-none focus:outline-none focus:border-indigo-500/50 transition-colors cursor-pointer"
            >
              <option value="All" className="bg-[#0f111a]">All Roles</option>
              {uniqueRoles.map(role => (
                 <option key={role} value={role} className="bg-[#0f111a]">{role}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
          </div>
        </div>

        {/* Experience */}
        <div>
          <label className="text-sm font-medium text-slate-400 mb-2 block flex items-center gap-2">
             Experience Level
          </label>
          <div className="grid grid-cols-2 gap-2">
            {["All", "1-3", "3-5", "5-10"].map((exp) => (
              <button
                key={exp}
                onClick={() => handleFilterChange('experience', exp)}
                className={`py-2 rounded-lg text-sm font-medium transition-all ${
                  filters.experience === exp 
                    ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30" 
                    : "bg-white/5 text-slate-400 border border-white/5 hover:bg-white/10"
                }`}
              >
                {exp === "All" ? "Any" : `${exp} Yrs`}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <label className="text-sm font-medium text-slate-400 mb-2 block">
             Hourly Rate (USD)
          </label>
          <div className="relative">
            <select 
              value={filters.priceRange}
              onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-4 pr-10 text-sm text-white appearance-none focus:outline-none focus:border-indigo-500/50 transition-colors cursor-pointer"
            >
              <option value="All" className="bg-[#0f111a]">All Rates</option>
              <option value="0-20" className="bg-[#0f111a]">Under $20/hr</option>
              <option value="20-40" className="bg-[#0f111a]">$20 - $40/hr</option>
              <option value="40-60" className="bg-[#0f111a]">$40 - $60/hr</option>
              <option value="60-100" className="bg-[#0f111a]">$60+/hr</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
          </div>
        </div>

        {/* Availability */}
        <div>
          <label className="text-sm font-medium text-slate-400 mb-2 block">
             Availability
          </label>
          <div className="flex flex-col gap-2">
            {["All", "Full-time", "Part-time"].map((avail) => (
              <label key={avail} className="flex items-center gap-3 cursor-pointer group">
                <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                  filters.availability === avail 
                    ? "border-indigo-500 bg-indigo-500" 
                    : "border-white/20 bg-white/5 group-hover:border-white/40"
                }`}>
                  {filters.availability === avail && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className={`text-sm ${filters.availability === avail ? 'text-white font-medium' : 'text-slate-400'}`}>
                  {avail === "All" ? "Any Availability" : avail}
                </span>
              </label>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
