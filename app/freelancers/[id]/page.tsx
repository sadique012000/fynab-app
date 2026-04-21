"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { freelancers, Freelancer } from "@/app/lib/freelancers-data";
import { ArrowLeft, CheckCircle2, Briefcase, MapPin, Mail, Calendar, ExternalLink } from "lucide-react";

export default function FreelancerProfile() {
  const router = useRouter();
  const params = useParams();
  const [freelancer, setFreelancer] = useState<Freelancer | null>(null);

  useEffect(() => {
    // We unwrap params via standard hook approach just to be safe
    const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
    if (id) {
      const found = freelancers.find(f => f.id === id);
      if (found) {
        setFreelancer(found);
      }
    }
  }, [params]);

  if (!freelancer) {
    return (
      <div className="min-h-screen bg-[#020205] text-white flex items-center justify-center">
         <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-indigo-500"></div>
      </div>
    );
  }

  // Generate gradient colors based on name
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
    <main className="min-h-screen bg-[#020205] text-white pt-24 pb-20 overflow-hidden relative">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back navigation */}
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Marketplace
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Profile Info & About */}
          <div className="lg:col-span-2 space-y-8">
             
             {/* Profile Hero Card */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-white/[0.03] border border-white/[0.06] backdrop-blur-2xl rounded-3xl p-8 relative overflow-hidden"
             >
                {/* Decorative border gradient */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-cyan-500" />
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                   <div className={`w-28 h-28 rounded-full flex items-center justify-center text-4xl font-black text-white bg-gradient-to-br ${getGradient(freelancer.name)} shadow-[0_0_40px_rgba(99,102,241,0.3)] shrink-0`}>
                     {initials}
                   </div>
                   
                   <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h1 className="text-3xl font-bold">{freelancer.name}</h1>
                        <span className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
                           <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                        </span>
                      </div>
                      
                      <p className="text-xl text-slate-300 font-medium mb-4">{freelancer.role}</p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm">
                         <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-slate-500" /> {freelancer.location}, India</span>
                         <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-slate-500" /> {freelancer.experience}+ Years Exp</span>
                         {freelancer.rating && (
                            <span className="flex items-center gap-1.5 text-amber-400">
                               ★ {freelancer.rating}/5.0
                            </span>
                         )}
                      </div>
                   </div>
                </div>
             </motion.div>

             {/* About Section */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="bg-white/[0.02] border border-white/[0.04] rounded-3xl p-8"
             >
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                   About {freelancer.name.split(' ')[0]}
                </h2>
                <p className="text-slate-300 leading-relaxed text-lg font-light">
                   {freelancer.bio}
                </p>
             </motion.div>

             {/* Skills Section */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="bg-white/[0.02] border border-white/[0.04] rounded-3xl p-8"
             >
                <h2 className="text-xl font-bold mb-6">Technical Arsenal</h2>
                <div className="flex flex-wrap gap-3">
                   {freelancer.skills.map(skill => (
                      <span key={skill} className="px-4 py-2 rounded-xl bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-medium text-sm shadow-[0_0_15px_rgba(99,102,241,0.1)] hover:border-indigo-500/50 hover:bg-indigo-500/20 transition-colors cursor-default">
                         {skill}
                      </span>
                   ))}
                </div>
             </motion.div>

             {/* Portfolio / Experience */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="bg-white/[0.02] border border-white/[0.04] rounded-3xl p-8"
             >
                <h2 className="text-xl font-bold mb-6">Featured Projects & Experience</h2>
                <div className="space-y-6">
                   {freelancer.projects.map((project, i) => (
                      <div key={i} className="group relative pl-6 border-l border-white/10 pb-6 last:pb-0 last:border-transparent">
                         <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(99,102,241,0.8)] group-hover:scale-125 transition-transform" />
                         <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                            {project.name}
                            <ExternalLink className="w-4 h-4 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                         </h3>
                         <p className="text-slate-400 font-light leading-relaxed">
                            {project.description}
                         </p>
                      </div>
                   ))}
                </div>
             </motion.div>

          </div>

          {/* Pricing & Booking Sidebar */}
          <div className="lg:col-span-1">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 }}
               className="bg-white/[0.03] border border-white/[0.06] backdrop-blur-2xl rounded-3xl p-6 sticky top-28"
             >
                {/* Pricing Header */}
                <div className="text-center pb-6 border-b border-white/10 mb-6">
                   <p className="text-slate-400 font-medium mb-1">Hourly Rate</p>
                   <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                      ${freelancer.hourlyRate}
                   </div>
                   <p className="text-sm text-slate-500 mt-1">Billed hourly, USD</p>
                </div>

                {/* Availability Info */}
                <div className="space-y-4 mb-8">
                   <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400 flex items-center gap-2"><Calendar className="w-4 h-4" /> Availability</span>
                      <span className="font-semibold text-white">{freelancer.availability}</span>
                   </div>
                   <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400 flex items-center gap-2"><Briefcase className="w-4 h-4" /> Commitment</span>
                      <span className="font-semibold text-white">{freelancer.availability === 'Full-time' ? '40 hrs/week' : '20 hrs/week'}</span>
                   </div>
                </div>

                {/* CTAs */}
                <div className="space-y-3">
                   <button className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all transform hover:-translate-y-0.5">
                      Hire {freelancer.name.split(' ')[0]} Now
                   </button>
                   <button className="w-full py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2">
                      <Calendar className="w-4 h-4" /> Schedule Interview
                   </button>
                </div>

                <p className="text-center text-xs text-slate-500 mt-6">
                   100% Risk-free onboarding. Cancel anytime if not satisfied.
                </p>
             </motion.div>
          </div>

        </div>
      </div>
    </main>
  );
}
