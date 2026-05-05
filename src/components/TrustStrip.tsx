import React from 'react';
import { Award, ShieldCheck, CheckCircle } from 'lucide-react';

const badges = [
  {
    icon: Award,
    label: 'ISO 9001:2015',
    href: 'https://drive.google.com/file/d/1mCpM8HmgVdJdd1al3OaMpKtB3rexjwJE/view?usp=sharing',
    title: 'View ISO 9001:2015 Certificate',
  },
  {
    icon: ShieldCheck,
    label: 'ISO/IEC 17025:2017',
    href: 'https://drive.google.com/file/d/14PqKQmPXsXbWVCQzcTM6r-4tTacD5Gah/view?usp=drive_link',
    title: 'View ISO/IEC 17025:2017 Certificate',
  },
  {
    icon: CheckCircle,
    label: 'KENAS Accredited',
    href: 'https://drive.google.com/file/d/14PqKQmPXsXbWVCQzcTM6r-4tTacD5Gah/view?usp=drive_link',
    title: 'View KENAS Accreditation',
  },
];

export default function TrustStrip() {
  return (
    <div className="bg-white dark:bg-[#112240] shadow-sm dark:shadow-none border border-slate-200 dark:border-white/10 mx-4 sm:mx-6 lg:mx-8 mb-4 rounded-xl py-4 relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 lg:gap-12 opacity-90">
          {badges.map(({ icon: Icon, label, href, title }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={title}
              className="px-3 py-1.5 bg-emerald-50 dark:bg-emerald-500/10 rounded border border-emerald-200 dark:border-emerald-500/20 text-[10px] font-bold text-emerald-800 dark:text-emerald-400 flex items-center gap-2 transition-colors shadow-sm dark:shadow-none hover:bg-emerald-100 dark:hover:bg-emerald-500/20"
            >
              <Icon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}