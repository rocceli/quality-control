import React from 'react';
import { ClipboardCheck, FileText, Search, ShieldAlert, BookOpen, Scaling, Layers } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: Search,
    title: 'Quality Inspection',
    description: 'Rigorous testing and inspection to ensure products meet exact engineering and safety specifications.',
  },
  {
    icon: ShieldAlert,
    title: 'ISO Certification',
    description: 'Guiding organizations through the complex ISO 9001 certification services process seamlessly.',
  },
  {
    icon: BookOpen,
    title: 'Training & Audits',
    description: 'Comprehensive staff training and internal audits to maintain high quality assurance standards.',
  },
  {
    icon: FileText,
    title: 'Documentation Systems',
    description: 'Streamlining your quality management documentation for perfect traceability and compliance.',
  },
  {
    icon: Layers,
    title: 'Risk Management',
    description: 'Identifying, assessing, and mitigating industrial risks before they become critical issues.',
  },
  {
    icon: ClipboardCheck,
    title: 'Compliance Monitoring',
    description: 'Ongoing support to ensure continuous adherence to national and international regulatory frameworks.',
  },
  {
    icon: Scaling,
    title: 'Calibration Services',
    description: 'High-precision calibration services Kenya relies on for industrial measurement lab accuracy.',
    featured: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 bg-slate-50 dark:bg-[#0a192f] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#112240] p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-white/10 transition-colors">
          
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-[10px] font-bold text-blue-600 dark:text-emerald-400 uppercase tracking-widest mb-1 transition-colors">Accredited Services & Inspection</h3>
              <span className="text-[9px] text-slate-500 dark:text-emerald-100/70 font-sans transition-colors">Quality Assurance Kenya • ISO Certification Nairobi</span>
            </div>
          </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-emerald-500/30 transition-colors group ${
                  service.featured ? 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20 col-span-2 md:col-span-1' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`mt-0.5 transition-colors ${service.featured ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-500 dark:text-emerald-500/70 group-hover:text-emerald-600 dark:group-hover:text-emerald-400'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-[11px] font-bold text-slate-800 dark:text-emerald-50 mb-1 transition-colors">{service.title}</h5>
                    <p className="text-[10px] text-slate-700 dark:text-emerald-100/90 font-medium leading-relaxed transition-colors">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
}
