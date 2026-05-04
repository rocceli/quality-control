import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Calendar, Clock, ChevronRight, X, BookOpen } from 'lucide-react';

type Post = {
  id: number;
  category: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  accent: 'emerald' | 'blue';
  content: { heading?: string; body: string }[];
};

const posts: Post[] = [
  {
    id: 1,
    category: 'Calibration',
    tag: 'Temperature',
    title: 'Why Regular Thermometer Calibration is Critical in Food Processing',
    excerpt: 'Inaccurate temperature readings can lead to food safety failures, regulatory penalties, and product recalls. Learn how scheduled calibration protects your production line.',
    date: 'Apr 18, 2025',
    readTime: '4 min read',
    accent: 'emerald',
    content: [
      {
        body: 'Temperature is one of the most critical control parameters in food processing. Whether you\'re pasteurising milk, cooking poultry, or storing pharmaceuticals, the accuracy of your temperature measurement directly affects product safety and regulatory compliance.'
      },
      {
        heading: 'The Hidden Danger of Drift',
        body: 'Thermometers and temperature sensors don\'t fail dramatically — they drift. Over time, exposure to thermal cycling, vibration, and chemical environments causes sensors to read slightly off. A probe that reads 2°C too low in a pasteurisation line isn\'t just a calibration issue; it\'s a public health risk.'
      },
      {
        heading: 'What Kenyan Regulations Require',
        body: 'The Kenya Bureau of Standards (KEBS) and HACCP frameworks both require documented evidence of instrument accuracy. Auditors will ask for calibration certificates with traceable standards. Without them, your facility risks suspension of certification and costly shutdowns.'
      },
      {
        heading: 'How Often Should You Calibrate?',
        body: 'For most food processing environments, we recommend calibration every 6 months for contact probes and annually for ambient sensors. High-frequency use or harsh cleaning protocols may require quarterly checks. Our laboratory issues KEBS-traceable certificates for every instrument we calibrate.'
      },
      {
        heading: 'Protect Your Line',
        body: 'Scheduled calibration isn\'t an overhead — it\'s insurance. A single product recall can cost more than years of calibration services. Contact our temperature laboratory today to set up a preventive calibration schedule tailored to your facility.'
      }
    ]
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
    content: [
      {
        body: 'When it comes to inspecting weld integrity, two methods dominate industrial practice: Ultrasonic Testing (UT) and Radiographic Testing (RT). Both are proven, both are ASNT-recognised — but choosing the wrong one for your application can cost you time, money, and safety margin.'
      },
      {
        heading: 'How Ultrasonic Testing Works',
        body: 'UT uses high-frequency sound waves pulsed into the material. When the wave hits a discontinuity — a crack, void, or lack of fusion — it reflects back to the probe. The time-of-flight and amplitude of the echo tell the technician exactly where and how large the defect is. UT is excellent for volumetric inspection of thick sections.'
      },
      {
        heading: 'How Radiographic Testing Works',
        body: 'RT passes X-rays or gamma rays through the weld onto a film or digital detector. Defects appear as density variations on the image. RT produces a permanent visual record and is particularly effective for detecting porosity, slag inclusions, and incomplete fusion in thinner materials.'
      },
      {
        heading: 'Key Differences at a Glance',
        body: 'UT requires no radiation safety exclusion zones, making it faster to set up on active job sites. RT provides an intuitive image record that is easy to archive and review. UT has an advantage with planar defects (cracks), while RT excels at volumetric defects (porosity). For structural steel and pressure vessels, UT is often the first choice; for pipe welds and thin-wall components, RT remains the standard.'
      },
      {
        heading: 'Our Recommendation',
        body: 'At Quality Control Systems Limited, our certified NDT technicians will assess your material, thickness, defect type of concern, and project timeline before recommending a method — or a combination of both. Contact us for a site assessment.'
      }
    ]
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
    content: [
      {
        body: 'ISO 9001:2015 represented the most significant rewrite of the standard in over a decade. For organisations still holding legacy 2008 certificates or preparing for their first audit, understanding what changed — and why — is essential to sustainable compliance.'
      },
      {
        heading: 'Risk-Based Thinking: The Core Shift',
        body: 'The 2015 revision replaced the concept of "preventive action" with a broader requirement for risk-based thinking across the entire quality management system. Clause 6.1 requires organisations to identify risks and opportunities that could affect conformity of products and services, and to plan actions to address them.'
      },
      {
        heading: 'Context of the Organisation (Clause 4)',
        body: 'Many Kenyan businesses struggle most with Clause 4 — understanding the organisation\'s context. This means formally identifying internal and external issues, interested parties, and their requirements. Auditors will look for documented evidence that this analysis has informed your QMS design.'
      },
      {
        heading: 'Leadership and Commitment (Clause 5)',
        body: 'Top management must now demonstrate visible commitment to the QMS — not just sign a policy document. This includes ensuring the quality policy is aligned with strategic direction and that QMS responsibilities are integrated into business processes, not treated as a separate function.'
      },
      {
        heading: 'What to Do Before Your Next Audit',
        body: 'Review your risk register, ensure your context analysis is current, and verify that management review records demonstrate active engagement with QMS performance data. Our ISO consultants offer gap analysis audits to identify non-conformities before your certification body does.'
      }
    ]
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
    content: [
      {
        body: 'A pressure gauge that reads 2 bar when the system is actually at 2.4 bar isn\'t just inaccurate — in a high-pressure steam or gas system, it can be catastrophic. Pressure gauge drift is one of the most common and most underestimated metrology issues in Kenyan industry.'
      },
      {
        heading: 'What Causes Drift?',
        body: 'Bourdon tube gauges drift primarily due to mechanical fatigue of the sensing element. Repeated pressurisation and depressurisation cycles cause the tube to lose elasticity over time. Overpressure events — even brief ones — accelerate this process significantly. Vibration, pulsation, and corrosive media also contribute.'
      },
      {
        heading: 'How to Detect Drift Early',
        body: 'The most reliable detection method is periodic calibration against a traceable deadweight tester or precision reference gauge. Cross-checking redundant gauges on the same line can reveal discrepancies, but only calibration tells you which reading is correct. Some facilities implement zero-check protocols at shift start to catch gross errors early.'
      },
      {
        heading: 'Building a Calibration Schedule',
        body: 'For most industrial pressure gauges, annual calibration is the minimum. Gauges on high-cycle systems, safety-critical lines, or those exposed to pulsating flow should be calibrated every 6 months. After any known overpressure event, immediate recalibration is mandatory before returning the gauge to service.'
      },
      {
        heading: 'KEBS Traceability Requirements',
        body: 'Our pressure laboratory maintains deadweight testers and precision reference standards traceable to KEBS and international metrology institutes. Every calibration certificate we issue documents the as-found and as-left conditions, giving you a full audit trail.'
      }
    ]
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
    content: [
      {
        body: 'Welder qualification is not just a box to tick — it is the documented assurance that a welder can consistently produce welds meeting specified quality standards. In Kenya\'s growing construction, oil & gas, and manufacturing sectors, certified welders command better pay and open doors to international projects.'
      },
      {
        heading: 'Which Standard Applies to You?',
        body: 'The standard you test to depends on your industry and client requirements. AWS D1.1 governs structural steel welding and is common on infrastructure projects. ASME Section IX is required for pressure vessels and piping in the oil, gas, and power sectors. ISO 9606 is increasingly specified by European clients and international contractors operating in East Africa.'
      },
      {
        heading: 'The Qualification Test Process',
        body: 'A welder qualification test (WQT) requires the welder to produce a test coupon under specified conditions — welding process, position, material type, thickness, and filler metal. The coupon is then subjected to visual inspection, bend testing, and in some cases radiographic or ultrasonic examination. Pass all tests, and the welder receives a qualification range covering similar production conditions.'
      },
      {
        heading: 'Common Reasons for Failure',
        body: 'Most test failures come down to incomplete fusion, excessive porosity, or undercut visible on bend test specimens. Preparation is critical — welders should practice on the specific process and position of their test before sitting the formal qualification. Our facility offers practice sessions and pre-qualification assessments.'
      },
      {
        heading: 'Maintaining Your Certification',
        body: 'Welder qualifications are not indefinite. Under most standards, a welder must demonstrate continued activity in the qualified process every 6 months, and formal re-qualification is required if there is a break in welding activity or a change in process. We maintain records and can notify you before your certification expires.'
      }
    ]
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
    content: [
      {
        body: 'Kenya\'s manufacturing sector recorded over 4,000 workplace injuries in 2024 according to DOSH estimates. ISO 45001:2018, the international standard for occupational health and safety management systems, offers a structured framework to systematically reduce these numbers — and protect your organisation from legal and reputational risk.'
      },
      {
        heading: 'What Makes ISO 45001 Different from OHSAS 18001?',
        body: 'ISO 45001 introduced a stronger emphasis on worker participation, leadership commitment, and the management of outsourced activities. Unlike its predecessor, it requires top management to personally demonstrate OH&S leadership — not merely appoint a safety officer and step back. It also adopts the High Level Structure shared by ISO 9001 and ISO 14001, making integrated management systems more practical.'
      },
      {
        heading: 'Worker Participation: The Most Overlooked Requirement',
        body: 'Clause 5.4 requires the organisation to establish processes for worker consultation and participation in OH&S decisions. This means workers must be involved in hazard identification, incident investigation, and development of controls — not just informed after the fact. Many facilities fail audits on this clause because their safety committees are not functioning as genuine two-way consultation mechanisms.'
      },
      {
        heading: 'Implementation Roadmap',
        body: 'A realistic ISO 45001 implementation for a medium-sized Kenyan manufacturer takes 6 to 12 months. The key phases are: gap analysis against current practice, hazard identification and risk assessment across all operations, documentation of the OH&S management system, internal audit and management review, and finally certification audit by an accredited body.'
      },
      {
        heading: 'The Business Case',
        body: 'Beyond compliance, ISO 45001 certification reduces insurance premiums, improves workforce morale and retention, and is increasingly a tender requirement for government and international contracts. Our team has guided over 40 Kenyan organisations to successful certification. Reach out to begin your gap analysis.'
      }
    ]
  },
];

const categories = ['All', 'Calibration', 'NDT', 'ISO Certification'];

const accentMap = {
  emerald: {
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    dot: 'bg-emerald-400',
    hover: 'group-hover:text-emerald-400',
    text: 'text-emerald-600 dark:text-emerald-400',
    bar: 'from-emerald-500 to-blue-500',
  },
  blue: {
    badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    dot: 'bg-blue-400',
    hover: 'group-hover:text-blue-400',
    text: 'text-blue-600 dark:text-blue-400',
    bar: 'from-blue-500 to-emerald-500',
  },
};

function BlogDialog({ post, onClose }: { post: Post; onClose: () => void }) {
  const accent = accentMap[post.accent];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Dialog Panel */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-2xl max-h-[88vh] flex flex-col bg-white dark:bg-[#0d1f3c] rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden"
      >
        {/* Accent top bar */}
        <div className={`h-1 w-full bg-gradient-to-r ${accent.bar} flex-shrink-0`} />

        {/* Header */}
        <div className="flex-shrink-0 px-7 pt-6 pb-4 border-b border-slate-100 dark:border-white/5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${accent.badge}`}>
                  {post.tag}
                </span>
                <span className="text-[10px] text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {post.date}
                </span>
                <span className="text-[10px] text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white leading-snug pr-2">
                {post.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 flex items-center justify-center transition-colors mt-1"
              aria-label="Close"
            >
              <X className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            </button>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-7 py-6 space-y-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {post.content.map((block, i) => (
            <div key={i}>
              {block.heading && (
                <h3 className={`text-[13px] font-bold mb-1.5 ${accent.text}`}>
                  {block.heading}
                </h3>
              )}
              <p>{block.body}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 px-7 py-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <BookOpen className="w-3.5 h-3.5" />
            Quality Control Systems Limited Kenya
          </div>
          <button
            onClick={onClose}
            className={`text-[11px] font-semibold px-4 py-2 rounded-full border transition-all ${
              post.accent === 'emerald'
                ? 'border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10'
                : 'border-blue-500/30 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10'
            }`}
          >
            Close article
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter(p => p.category === activeCategory);

  const [featured, ...rest] = filtered;

  return (
    <>
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
                      onClick={() => setSelectedPost(featured)}
                      className="lg:col-span-2 group bg-slate-50 dark:bg-[#112240] rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col hover:border-emerald-400/40 dark:hover:border-emerald-500/30 transition-all duration-300 cursor-pointer"
                    >
                      <div className={`h-1 w-full bg-gradient-to-r ${accentMap[featured.accent].bar}`} />
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center gap-3 mb-4 flex-wrap">
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
                        <div className={`mt-6 flex items-center gap-1.5 text-sm font-semibold transition-colors ${accentMap[featured.accent].text}`}>
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
                        onClick={() => setSelectedPost(post)}
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

                  {/* Bottom row */}
                  {rest.slice(3).map((post, i) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      onClick={() => setSelectedPost(post)}
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

      {/* Blog Reader Dialog */}
      <AnimatePresence>
        {selectedPost && (
          <BlogDialog post={selectedPost} onClose={() => setSelectedPost(null)} />
        )}
      </AnimatePresence>
    </>
  );
}