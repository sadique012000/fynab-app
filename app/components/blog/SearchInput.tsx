"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SearchInputProps {
  onSearch: (value: string) => void;
}

export default function SearchInput({ onSearch }: SearchInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);
    onSearch(val);
  };

  return (
    <div className="relative max-w-md w-full">
      <div className={`relative flex items-center rounded-2xl border transition-all duration-500 ${
        isFocused 
          ? "border-indigo-500/50 bg-indigo-500/5 shadow-[0_0_30px_rgba(99,102,241,0.1)]" 
          : "border-white/[0.06] bg-white/[0.03]"
      }`}>
        <div className="pl-5 text-slate-500">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search articles, topics, keywords..."
          className="w-full bg-transparent p-4 text-sm text-white placeholder:text-slate-500 focus:outline-none"
        />
        
        <AnimatePresence>
          {value && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => { setValue(""); onSearch(""); }}
              className="pr-4 text-slate-500 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Micro-glow */}
      {isFocused && (
        <motion.div
          layoutId="search-glow"
          className="absolute -inset-2 bg-indigo-500/5 blur-xl -z-10 rounded-3xl"
        />
      )}
    </div>
  );
}
