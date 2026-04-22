import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Initial theme setup (default dark for high density)
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Calibration Labs', href: '#calibration-labs' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="p-2 bg-blue-600/10 dark:bg-emerald-600/20 rounded-lg transition-colors">
              <ShieldCheck className="w-8 h-8 text-blue-600 dark:text-emerald-500" />
            </div>
            <div className="font-bold text-lg leading-tight text-slate-900 dark:text-white flex gap-2 items-center">
              QC
              <span className="text-[10px] uppercase tracking-widest text-blue-600 dark:text-emerald-400 font-sans mt-0.5 transition-colors">Limited Systems Kenya</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[11px] font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-emerald-400 transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={toggleTheme}
              className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-emerald-400 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a 
              href="#contact"
              className="px-4 py-2 bg-blue-600 dark:bg-emerald-600 hover:bg-blue-700 dark:hover:bg-emerald-700 text-white text-[11px] font-bold rounded-lg transition-all btn-hover ml-2"
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600 dark:text-slate-200 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass overflow-hidden border-t-0"
          >
            <div className="px-4 py-6 flex flex-col gap-4 border-t border-slate-200 dark:border-slate-800 mt-3">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[12px] font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-emerald-400 transition-colors block py-2"
                >
                  {link.name}
                </a>
              ))}
              <div className="py-2 border-t border-slate-200 dark:border-slate-800 mt-2 pt-4">
                 <button 
                  onClick={toggleTheme}
                  className="flex items-center gap-2 text-[12px] font-bold text-slate-600 dark:text-emerald-400"
                 >
                   {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                   {isDark ? 'Light Mode' : 'Dark Mode'}
                 </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
