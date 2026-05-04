import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Calendar, Clock, Tag, ChevronRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    category: 'Calibration',
    tag: 'Temperature',
    title: 'Why Regular Thermometer Calibration is Critical in Food Processing',
    excerpt: 'Inaccurate temperature readings can lead to food safety failures, regulatory penalties, and product recalls. Learn how scheduled calibration protects your production line.',
    date: 'Apr 18, 2025',
    readTime: '4 min read',
    accent: 'emerald',
  },
  {
    id: 2,
    category: 'NDT',
    tag: 'Ultrasonic Testing',
    title: 'Ultrasonic Testing vs Radiography: Choosing the Right Method for Your Welds',
    excerpt: 'Both methods detect internal weld defects, but they differ in cost, setup time, and the type of flaws they reveal. Here\'s how to make the right call for your project.',
    date: 'Mar 29, 2025',
    readTime: '6 min read',
    accent: 'blue',
  },
  {
    id: 3,
    category: 'ISO Certification',
    tag: 'ISO 9001',
    title: 'ISO 9001:2015 — What Has Changed and How to Stay Compliant in 2025',
    excerpt: 'The 2015 revision shifted focus from documentation to risk-based thinking. We break down the key clauses Kenyan businesses most commonly struggle with during audits.',
    date: 'Mar 10, 2025',
    readTime: '5 min read',
    accent: 'emerald',
  },
  {
    id: 4,
    category: 'Calibration',
    tag: 'Pressure',
    title: 'Pressure Gauge Drift: Causes, Detection, and Prevention',
    excerpt: 'Over time, pressure gauges drift from their calibrated values — sometimes dangerously so. Understand what causes drift and how to build an effective calibration schedule.',
    date: 'Feb 20, 2025',
    readTime: '5 min read',
    accent: 'blue',
  },
  {
    id: 5,
    category: 'NDT',
    tag: 'Welder Certification',
    title: 'The Full Guide to Welder Qualification Testing in Kenya',
    excerpt: 'Whether you\'re preparing for AWS D1.1, ISO 9606, or ASME Section IX, understanding the qualification process is the first step to certification success.',
    date: 'Jan 31, 2025',
    readTime: '7 min read',
    accent: 'emerald',
  },
  {
    id: 6,
    category: 'ISO Certification',
    tag: 'ISO 45001',
    title: 'ISO 45001: Building a Culture of Safety in Kenyan Manufacturing',
    excerpt: 'ISO 45001 goes beyond tick-box compliance — it embeds occupational health and safety into your organisation\'s DNA. Here\'s what implementation really looks like on the ground.',
    date: 'Jan 14, 2025',
    readTime: '6 min read',
    accent: 'blue',
  },
];

const categories = ['All', 'Calibration', 'NDT', 'ISO Certification'];

const accentMap: Record<string, { badge: string; dot: string; hover: string }> = {
  emerald: {
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    dot: 'bg-emerald-400',
    hover: 'group-hover:text-emerald-400',
  },
  blue: {
    badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    dot: 'bg-blue-400',
    hover: 'group-hover:text-blue-400',
  },
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter(p => p.category === activeCategory);

  const [featured, ...rest] = filtered;

  return (
    <section
      id="blog"
      className="py-20 bg-white dark:bg-[#0a192f] border-t border-slate-200 dark:border-white/5 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-emerald-400 mb-1">
              Knowledge Hub
            </p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Insights & Industry Updates
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] font-semibold px-4 py-1.5 rounded-full border transition-all ${
                  activeCategory === cat
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                    : 'bg-transparent text-slate-600 dark:text-slate-400 border-slate-300 dark:border-white/10 hover:border-emerald-400 dark:hover:border-emerald-500/40 hover:text-emerald-600 dark:hover:text-emerald-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.length === 0 ? (
              <p className="text-center text-slate-400 py-20 text-sm">No posts in this category yet.</p>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Featured Post */}
                {featured && (
                  <motion.article
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="lg:col-span-2 group bg-slate-50 dark:bg-[#112240] rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col hover:border-emerald-400/40 dark:hover:border-emerald-500/30 transition-all duration-300 cursor-pointer"
                  >
                    {/* Decorative top bar */}
                    <div className={`h-1 w-full ${featured.accent === 'emerald' ? 'bg-gradient-to-r from-emerald-500 to-blue-500' : 'bg-gradient-to-r from-blue-500 to-emerald-500'}`} />

                    <div className="p-8 flex flex-col flex-grow">
                      {/* Meta */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${accentMap[featured.accent].badge}`}>
                          {featured.tag}
                        </span>
                        <span className="text-[10px] text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {featured.date}
                        </span>
                        <span className="text-[10px] text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {featured.readTime}
                        </span>
                      </div>

                      <h3 className={`text-xl font-bold text-slate-900 dark:text-white mb-3 leading-snug transition-colors ${accentMap[featured.accent].hover}`}>
                        {featured.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">
                        {featured.excerpt}
                      </p>

                      <div className={`mt-6 flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                        featured.accent === 'emerald'
                          ? 'text-emerald-600 dark:text-emerald-400'
                          : 'text-blue-600 dark:text-blue-400'
                      }`}>
                        Read article
                        <motion.span
                          className="inline-flex"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.span>
                      </div>
                    </div>
                  </motion.article>
                )}

                {/* Sidebar Posts */}
                <div className="flex flex-col gap-4">
                  {rest.slice(0, 3).map((post, i) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                      className="group bg-slate-50 dark:bg-[#112240] rounded-xl border border-slate-200 dark:border-white/10 p-5 hover:border-emerald-400/40 dark:hover:border-emerald-500/30 transition-all duration-300 cursor-pointer flex flex-col gap-2"
                    >
                      <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${accentMap[post.accent].dot}`} />
                        <span className={`text-[9px] font-bold uppercase tracking-wider ${accentMap[post.accent].badge.split(' ')[1]}`}>
                          {post.tag}
                        </span>
                        <span className="ml-auto text-[9px] text-slate-400 flex items-center gap-1">
                          <Clock className="w-2.5 h-2.5" /> {post.readTime}
                        </span>
                      </div>

                      <h4 className={`text-[13px] font-bold text-slate-800 dark:text-slate-100 leading-snug transition-colors ${accentMap[post.accent].hover}`}>
                        {post.title}
                      </h4>

                      <div className="flex items-center justify-between mt-1">
                        <span className="text-[10px] text-slate-400">{post.date}</span>
                        <ChevronRight className={`w-3.5 h-3.5 transition-all group-hover:translate-x-1 ${accentMap[post.accent].hover}`} />
                      </div>
                    </motion.article>
                  ))}
                </div>

                {/* Bottom row — remaining posts */}
                {rest.slice(3).map((post, i) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group bg-slate-50 dark:bg-[#112240] rounded-xl border border-slate-200 dark:border-white/10 p-5 hover:border-emerald-400/40 dark:hover:border-emerald-500/30 transition-all duration-300 cursor-pointer flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${accentMap[post.accent].dot}`} />
                      <span className={`text-[9px] font-bold uppercase tracking-wider ${accentMap[post.accent].badge.split(' ')[1]}`}>
                        {post.tag}
                      </span>
                      <span className="ml-auto text-[9px] text-slate-400 flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" /> {post.readTime}
                      </span>
                    </div>

                    <h4 className={`text-[13px] font-bold text-slate-800 dark:text-slate-100 leading-snug transition-colors ${accentMap[post.accent].hover}`}>
                      {post.title}
                    </h4>

                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-1">
                      <span className="text-[10px] text-slate-400">{post.date}</span>
                      <ChevronRight className={`w-3.5 h-3.5 transition-all group-hover:translate-x-1 ${accentMap[post.accent].hover}`} />
                    </div>
                  </motion.article>
                ))}

              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* View All CTA */}
        <div className="text-center mt-10">
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 px-6 py-2.5 rounded-full hover:bg-emerald-500/10 transition-all">
            View all articles <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}