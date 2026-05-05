import React from 'react';
import { ShieldCheck, CheckCircle2, Award, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-12 bg-white dark:bg-[#0a192f] text-slate-800 dark:text-slate-200 overflow-hidden relative transition-colors duration-300">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 dark:bg-[#112240] border border-slate-200 dark:border-white/10 rounded-2xl p-6 md:p-8 transition-colors">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
          
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-[10px] font-bold text-blue-600 dark:text-emerald-400 uppercase tracking-widest mb-1 transition-colors">Global Benchmarks</h2>
              <h3 className="text-2xl font-bold mb-4 leading-tight text-slate-900 dark:text-white transition-colors">
                Accredited Excellence & Compliance
              </h3>
              <p className="text-[11px] text-slate-800 dark:text-emerald-100/90 font-medium mb-6 leading-relaxed transition-colors">
                Our operations are governed by international standards, ensuring that every calibration and certification we provide is accurate, traceable, and globally recognized.
              </p>

              <div className="space-y-6">
                {/* ISO 9001:2015 */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-8 h-8 rounded flex items-center justify-center border border-emerald-200 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 transition-colors">
                      <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold mb-1 text-slate-800 dark:text-emerald-50 transition-colors">ISO 9001:2015 Certified</h4>
                    <p className="text-[10px] text-slate-700 dark:text-emerald-100/90 leading-relaxed mb-2 transition-colors font-medium">
                      The international standard for Quality Management Systems (QMS). We implement robust processes that consistently meet customer and regulatory requirements.
                    </p>
                    <ul className="space-y-1">
                      {['Quality Assurance', 'Process Optimization', 'Global Recognition'].map((item) => (
                        <li key={item} className="flex items-center gap-1.5 text-[9px] text-slate-700 dark:text-emerald-100/80 transition-colors font-medium">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400 transition-colors" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* ISO/IEC 17025:2017 */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-8 h-8 rounded flex items-center justify-center border border-emerald-200 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 transition-colors">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold mb-1 text-slate-800 dark:text-emerald-50 transition-colors">ISO/IEC 17025:2017 Competence</h4>
                    <p className="text-[10px] text-slate-700 dark:text-emerald-100/90 leading-relaxed mb-2 transition-colors font-medium">
                      Demonstrating technical competence in testing and calibration laboratories, ensuring the highest level of accuracy and data integrity.
                    </p>
                    <ul className="space-y-1">
                      {['Technical Traceability', 'Accurate Calibration', 'Laboratory Competence'].map((item) => (
                        <li key={item} className="flex items-center gap-1.5 text-[9px] text-slate-700 dark:text-emerald-100/80 transition-colors font-medium">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400 transition-colors" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* KENAS Accredited */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-8 h-8 rounded flex items-center justify-center border border-emerald-200 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 transition-colors">
                      <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold mb-1 text-slate-800 dark:text-emerald-50 transition-colors">KENAS Accredited Facility</h4>
                    <p className="text-[10px] text-slate-700 dark:text-emerald-100/90 leading-relaxed mb-2 transition-colors font-medium">
                      Accredited by the Kenya National Accreditation Service (KENAS), confirming our adherence to national and international quality benchmarks.
                    </p>
                    <ul className="space-y-1">
                      {['National Accreditation', 'Regulatory Adherence', 'Verified Compliance'].map((item) => (
                        <li key={item} className="flex items-center gap-1.5 text-[9px] text-slate-700 dark:text-emerald-100/80 transition-colors font-medium">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400 transition-colors" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </motion.div>

          {/* Visual Side */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative lg:h-[450px] flex flex-col items-center justify-center"
            >
              <div className="relative z-10 w-full max-w-sm bg-white dark:bg-slate-100 text-slate-900 border border-slate-200 dark:border-white/20 p-6 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] dark:shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
                <div className="w-12 h-12 bg-emerald-50/50 border border-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                   <Award className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-center border-b border-slate-200 pb-4 mb-4">
                  <h4 className="font-serif font-bold text-lg mb-1">CERTIFICATE</h4>
                  <p className="text-[9px] uppercase tracking-widest text-slate-500">of accreditation</p>
                </div>
                <div className="space-y-3">
                  <div className="h-1.5 bg-slate-200 rounded w-3/4 mx-auto"></div>
                  <div className="h-1.5 bg-slate-200 rounded w-full"></div>
                  <div className="h-1.5 bg-slate-200 rounded w-5/6 mx-auto"></div>
                </div>
                <div className="mt-6 flex justify-between items-end">
                  <div className="w-12 h-12 border-[3px] border-slate-200 rounded-full opacity-50 flex items-center justify-center">
                    <div className="w-8 h-8 border border-slate-200 rounded-full"></div>
                  </div>
                  <div className="text-right">
                    <div className="w-16 h-px bg-slate-400 mb-1"></div>
                    <div className="text-[8px] text-slate-400 uppercase tracking-wider">Auth Signature</div>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}