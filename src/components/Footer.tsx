import React from 'react';

export default function Footer() {
  return (
    <footer className="text-[10px] text-slate-700 dark:text-emerald-500/80 flex flex-col md:flex-row justify-between border-t border-slate-200 dark:border-white/10 pt-4 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full transition-colors gap-2 items-center">
      <div>&copy; {new Date().getFullYear()} Quality Control Systems Limited Kenya. All Rights Reserved.</div>
      <div className="space-x-4 flex items-center">
        <span className="hover:text-blue-600 dark:hover:text-emerald-400 cursor-pointer font-medium transition-colors">Industrial measurement lab Kenya</span>
        <span className="hover:text-blue-600 dark:hover:text-emerald-400 cursor-pointer font-medium transition-colors">Accredited Laboratory Nairobi</span>
      </div>
    </footer>
  );
}
