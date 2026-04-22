import React, { useState, useEffect } from 'react';
import { ArrowRight, Activity, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const bannerImages = [
  {
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000",
    alt: "Precision calibration laboratory with engineers"
  },
  {
    url: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=2000",
    alt: "Industrial quality control testing gauge"
  },
  {
    url: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=2000",
    alt: "High-tech dimensional measurement engineering"
  }
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50 dark:bg-[#0a192f] transition-colors duration-300 min-h-[100dvh] md:min-h-[600px] flex items-center justify-center">
      
      {/* Background Image Gallery Ticker */}
      <div className="absolute inset-0 z-0">
         <AnimatePresence mode="popLayout">
           <motion.img
             key={currentImageIndex}
             initial={{ opacity: 0, scale: 1.05 }}
             animate={{ opacity: 0.25, scale: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 1.5, ease: "easeInOut" }}
             src={bannerImages[currentImageIndex].url}
             alt={bannerImages[currentImageIndex].alt}
             className="absolute inset-0 w-full h-full object-cover dark:opacity-15 opacity-25"
           />
         </AnimatePresence>
         
         <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent dark:from-[#0a192f] dark:to-transparent z-10 transition-colors duration-300"></div>
         <div className="absolute inset-0 bg-gradient-to-r from-slate-50/90 via-transparent to-slate-50/90 dark:from-[#0a192f]/90 dark:to-[#0a192f]/90 z-10 transition-colors duration-300"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center w-full">
        
        {/* Gallery Controls (subtle) */}
        <div className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 hidden sm:flex flex-col gap-2 z-30">
           <button onClick={prevImage} className="p-2 rounded-full glass text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors">
             <ChevronLeft className="w-5 h-5" />
           </button>
        </div>
        <div className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 hidden sm:flex flex-col gap-2 z-30">
           <button onClick={nextImage} className="p-2 rounded-full glass text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors">
             <ChevronRight className="w-5 h-5" />
           </button>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-blue-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-6"
        >
          <Activity className="w-4 h-4" />
          <span>Accredited Calibration Laboratory Nairobi</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight shadow-sm transition-colors duration-300"
        >
          Precision. Compliance.<br className="hidden md:block"/>
          <span className="text-blue-600 dark:text-emerald-500">Satisfaction. Safety.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-sm md:text-base text-slate-700 dark:text-emerald-50 mb-8 lg:mb-10 leading-relaxed font-medium transition-colors duration-300 px-2"
        >
          Kenya’s premier authority in quality assurance, industrial measurement, and engineering calibration. We ensure global standards are met with unparalleled local expertise.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full sm:w-auto px-4 sm:px-0"
        >
          <a href="#contact" className="w-full sm:w-auto px-6 py-3.5 bg-blue-600 dark:bg-emerald-600 hover:bg-blue-700 dark:hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 btn-hover">
            Get a Free Consultation
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#services" className="w-full sm:w-auto px-6 py-3.5 border border-slate-300 dark:border-emerald-500/30 hover:bg-slate-100 dark:hover:bg-emerald-900/30 text-slate-800 dark:text-white text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 glass">
            Our Services
          </a>
        </motion.div>
        
        {/* Ticker indicators */}
        <div className="flex justify-center gap-2 mt-10 md:mt-12">
          {bannerImages.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`w-8 h-1 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-blue-600 dark:bg-emerald-500' : 'bg-slate-300 dark:bg-slate-700'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

