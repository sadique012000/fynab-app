"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/app/lib/animations";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Engineering Manager",
    company: "Google / Ex-Meta",
    text: "At Fynab, I've had the freedom to architect world-class systems while working with a team that truly cares about excellence and work-life balance.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "Marcus Thorne",
    role: "Lead UI Designer",
    company: "Apple / Ex-Airbnb",
    text: "The design culture here is phenomenal. Every pixel matters, and we have the tools and time to create truly immersive experiences.",
    avatar: "https://i.pravatar.cc/150?u=marcus",
  },
  {
    name: "Elena Rodriguez",
    role: "Product Lead",
    company: "Stripe / Ex-Amazon",
    text: "Scaling Fynab's product vision has been the most rewarding challenge of my career. The autonomy and speed at which we move is unmatched.",
    avatar: "https://i.pravatar.cc/150?u=elena",
  },
];

export default function EmployeeTestimonials() {
  return (
    <section className="py-24 bg-[#05070F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-20"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-black text-white mb-6"
          >
            Voices of <span className="text-cyan-400">Fynab</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Hear from our global team about what makes working here 
            the best experience of their careers.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl relative flex flex-col h-full hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="absolute top-8 right-8 text-indigo-500/20">
                <Quote size={48} />
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full border-2 border-indigo-500/30 overflow-hidden group-hover:scale-110 transition-transform duration-500">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-bold group-hover:text-indigo-400 transition-colors">{testimonial.name}</h4>
                  <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                "{testimonial.text}"
              </p>

              <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">{testimonial.company}</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <div key={s} className="w-1 h-1 rounded-full bg-indigo-500" />
                  ))}
                </div>
              </div>

              {/* Glowing Background Dot */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
