import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink } from 'lucide-react';

const details = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Gataka Road, Off Magadi Road',
    sub: 'Nairobi, Kenya',
    accent: 'emerald',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+254 722 692 450',
    sub: 'Mon – Fri, 8am – 5pm',
    accent: 'blue',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@qualitycsl.com',
    sub: 'We respond within 24hrs',
    accent: 'emerald',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon – Fri: 8:00 – 17:00',
    sub: 'Sat: By appointment',
    accent: 'blue',
  },
];

export default function Location() {
  return (
    <section
      id="location"
      className="py-20 bg-white dark:bg-[#0a192f] transition-colors duration-300 border-t border-slate-200 dark:border-white/5 relative overflow-hidden"
    >
      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#64748b 1px, transparent 1px), linear-gradient(90deg, #64748b 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[10px] font-bold text-blue-600 dark:text-emerald-400 uppercase tracking-widest mb-1">
            Find Us
          </p>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
            Visit Our Facility
          </h2>
          <p className="text-sm text-slate-500 dark:text-emerald-100/70 max-w-xl mx-auto">
            Based in Nairobi, Kenya. We offer both in-house calibration at our accredited laboratory and on-site servicing across the region.
          </p>
        </div>

        {/* Main layout — map left, info right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">

          {/* Map — takes 3/5 */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg relative group min-h-[420px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127637.33538099461!2d36.57683372497557!3d-1.3766400499268332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f058dc4b2a52f%3A0x70513b72475eedd6!2sQuality%20Control%20Systems%20Limited!5e0!3m2!1sen!2ske!4v1777884520018!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Quality Control Systems Limited Kenya Location"
              className="absolute inset-0 w-full h-full grayscale-[15%] dark:grayscale-[60%] dark:invert dark:hue-rotate-180 transition-all duration-300"
            />

            {/* Get Directions button — bottom right */}
            <a
              href="https://maps.google.com/?q=Quality+Control+Systems+Limited+Nairobi"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 z-10 flex items-center gap-2 bg-white dark:bg-[#0d1f3c] text-slate-800 dark:text-white text-[11px] font-bold px-4 py-2.5 rounded-full border border-slate-200 dark:border-white/10 shadow-lg hover:bg-emerald-50 dark:hover:bg-emerald-500/10 hover:border-emerald-400/50 transition-all group/btn"
            >
              <Navigation className="w-3.5 h-3.5 text-emerald-500" />
              Get Directions
              <ExternalLink className="w-3 h-3 text-slate-400 group-hover/btn:text-emerald-500 transition-colors" />
            </a>
          </motion.div>

          {/* Info cards — takes 2/5 */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Top banner */}
            <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-blue-700 p-6 text-white relative overflow-hidden flex-shrink-0">
              {/* Decorative circle */}
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/5" />
              <div className="relative z-10">
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-bold mb-1">Quality Control Systems Limited</h3>
                <p className="text-[12px] text-white/80 leading-relaxed">
                  Gataka Road, Off Magadi Road<br />Nairobi, Kenya
                </p>
              </div>
            </div>

            {/* Detail cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 flex-grow">
              {details.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                  className="flex items-center gap-4 bg-slate-50 dark:bg-[#112240] rounded-xl border border-slate-200 dark:border-white/10 px-4 py-3.5 hover:border-emerald-400/30 dark:hover:border-emerald-500/30 transition-all group"
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    item.accent === 'emerald'
                      ? 'bg-emerald-100 dark:bg-emerald-500/15 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-500/25'
                      : 'bg-blue-100 dark:bg-blue-500/15 group-hover:bg-blue-200 dark:group-hover:bg-blue-500/25'
                  }`}>
                    <item.icon className={`w-4 h-4 ${
                      item.accent === 'emerald'
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : 'text-blue-600 dark:text-blue-400'
                    }`} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-[12px] font-semibold text-slate-800 dark:text-slate-100 truncate">
                      {item.value}
                    </p>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}