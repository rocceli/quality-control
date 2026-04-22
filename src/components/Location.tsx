import React from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-12 bg-white dark:bg-[#0a192f] transition-colors duration-300 relative border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <h2 className="text-[10px] font-bold text-blue-600 dark:text-emerald-400 uppercase tracking-widest mb-1 transition-colors">Our Location</h2>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">Visit Our Facility</h3>
          <p className="text-[11px] text-slate-600 dark:text-emerald-100/90 max-w-2xl mx-auto transition-colors font-medium">
            Based in Nairobi, Kenya. We offer both in-house calibration at our laboratory and on-site servicing.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-slate-50 dark:bg-[#112240] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-sm transition-colors"
        >
          <div className="w-full h-[400px] relative">
            {/* Overlay to catch pointer events if desired, but we let users interact with map */}
            <iframe 
              src="https://maps.google.com/maps?q=Gataka%20Road,%20Off%20Magadi%20Road,%20Nairobi,%20Kenya&t=m&z=13&output=embed&iwloc=near" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Quality Control Limited Systems Kenya Location"
              className="absolute inset-0 grayscale-[20%] dark:grayscale-[50%] dark:invert-[90%] dark:hue-rotate-180 contrast-100 transition-all duration-300"
            ></iframe>
            
            {/* Absolute positioning of address card over map for aesthetics */}
            <div className="absolute bottom-6 left-6 max-w-[280px] bg-white/90 dark:bg-[#0a192f]/90 backdrop-blur-md p-4 rounded-xl border border-slate-200 dark:border-white/10 shadow-lg pointer-events-none transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-bold text-[12px] text-slate-900 dark:text-emerald-50 mb-1 transition-colors">Quality Control Limited Systems</h4>
                  <p className="text-[10px] text-slate-600 dark:text-emerald-100/70 transition-colors">
                    Gataka Road, Off Magadi Road<br/>
                    Nairobi, Kenya
                  </p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
