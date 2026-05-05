import React from 'react';
import { Award, CheckCircle, ShieldCheck } from 'lucide-react';

export default function TrustStrip() {
  return (
    <div className="bg-white dark:bg-[#112240] shadow-sm dark:shadow-none border border-slate-200 dark:border-white/10 mx-4 sm:mx-6 lg:mx-8 mb-4 rounded-xl py-4 relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-[initial] flex-col md:flex-row justify-center items-center gap-4 md:gap-8 lg:gap-12 opacity-90 transition-opacity">
          
          <a 
            href="https://drive.google.com/file/d/1nL1PnE4TR3ByVvJWn4m_kY0Ee8fgtxzq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            title="View Certificate"
            className="px-3 py-1.5 bg-emerald-50 dark:bg-emerald-500/10 rounded border border-emerald-200 dark:border-emerald-500/20 text-[10px] font-bold text-emerald-800 dark:text-emerald-400 flex items-center gap-2 transition-colors shadow-sm dark:shadow-none hover:bg-emerald-100 dark:hover:bg-emerald-500/20"
          >
            <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            ISO/IEC 17025:2017
          </a>

          <div className="px-3 py-1.5 bg-emerald-50 dark:bg-emerald-600/20 text-emerald-700 dark:text-emerald-400 rounded border border-emerald-200 dark:border-emerald-400/30 text-[10px] font-bold flex items-center gap-2 transition-colors">
            <CheckCircle className="w-4 h-4" />
            KEBS CERTIFIED
          </div>

        </div>
      </div>
    </div>
  );
}
