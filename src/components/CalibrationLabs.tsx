import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Gauge, Thermometer, Scale, Beaker, Ruler, ShieldAlert, Zap, X, ChevronRight
} from 'lucide-react';

// ─── Animated Graphics ────────────────────────────────────────────────────────

const Graphics: Record<string, Record<string, React.FC>> = {
  Pressure: {
    'Pressure Gauges': () => (
      <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full text-slate-400 dark:text-slate-600">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="4" />
          <path d="M20 80 A 40 40 0 1 1 80 80" fill="none" stroke="#ef4444" strokeWidth="6" strokeLinecap="round" />
        </svg>
        <motion.div
          animate={{ rotate: [-120, -60, -90, -30, -80, -120] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-1 h-6 bg-slate-800 dark:bg-slate-200 rounded-t-full origin-bottom"
          style={{ bottom: '50%', left: '48%' }}
        />
        <div className="absolute top-[48%] left-[46%] w-2 h-2 bg-slate-800 dark:bg-slate-200 rounded-full z-10" />
      </div>
    ),
    'Digital Pressure Indicators': () => (
      <div className="w-20 h-14 bg-slate-800 rounded-lg border-2 border-slate-600 flex flex-col items-center justify-center gap-1 p-2">
        <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="font-mono text-green-400 text-[13px] font-bold">4.72 bar</motion.div>
        <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
          <motion.div animate={{ width: ['30%', '70%', '50%'] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="h-full bg-green-500 rounded-full" />
        </div>
      </div>
    ),
    'Pressure Transmitters': () => (
      <div className="flex flex-col items-center gap-1">
        <div className="w-14 h-10 bg-slate-300 dark:bg-slate-600 rounded border-2 border-slate-400 dark:border-slate-500 flex items-center justify-center relative">
          <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
          </motion.div>
        </div>
        <motion.div animate={{ height: [4, 12, 4] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1 bg-blue-400 rounded-full" />
        <div className="w-10 h-3 bg-slate-800 rounded-sm" />
      </div>
    ),
    'Vacuum Gauges': () => (
      <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full text-slate-400 dark:text-slate-600">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="4" />
          <path d="M20 80 A 40 40 0 1 1 80 80" fill="none" stroke="#60a5fa" strokeWidth="6" strokeLinecap="round" />
        </svg>
        <motion.div
          animate={{ rotate: [-120, -160, -120, -100, -120] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-1 h-6 bg-blue-500 rounded-t-full origin-bottom"
          style={{ bottom: '50%', left: '48%' }}
        />
        <div className="absolute top-[48%] left-[46%] w-2 h-2 bg-slate-800 dark:bg-slate-200 rounded-full z-10" />
      </div>
    ),
    'Pressure Relief Valves': () => (
      <div className="flex flex-col items-center">
        <div className="w-12 h-6 bg-slate-700 dark:bg-slate-600 rounded-t relative flex items-center justify-center">
          <motion.div animate={{ y: [-12, -22], opacity: [0, 1, 0], scale: [1, 2] }} transition={{ duration: 1.2, repeat: Infinity }} className="absolute -top-2 w-5 h-5 bg-slate-300 dark:bg-white blur-md rounded-full" />
        </div>
        <div className="w-16 h-10 border-4 border-slate-500 rounded flex items-center justify-center">
          <div className="h-1 w-full bg-slate-400 dark:bg-slate-600" />
        </div>
      </div>
    ),
  },

  Temperature: {
    'Digital Thermometers': () => (
      <div className="flex flex-col items-center">
        <div className="w-16 h-8 bg-slate-800 dark:bg-black/50 rounded flex items-center justify-center border border-slate-300 dark:border-white/10 font-mono text-[10px] text-green-500 shadow-inner">
          <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1, repeat: Infinity }}>24.0°C</motion.span>
        </div>
        <div className="w-2 h-10 bg-slate-300 dark:bg-slate-600 rounded-b-full mt-1 border border-slate-400 dark:border-white/10" />
      </div>
    ),
    'Temperature Probes': () => (
      <div className="flex flex-col items-center gap-1">
        <div className="w-3 h-16 bg-gradient-to-b from-slate-400 to-slate-600 dark:from-slate-500 dark:to-slate-700 rounded-full relative">
          <motion.div animate={{ height: ['30%', '70%', '45%'] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-0 left-0 w-full bg-red-500/60 rounded-full" />
        </div>
        <div className="font-mono text-[9px] text-green-400">RTD / TC</div>
      </div>
    ),
    'Temperature Controllers': () => (
      <div className="w-20 h-12 bg-slate-800 rounded border-2 border-slate-600 flex flex-col p-1 justify-between">
        <div className="font-mono text-red-500 text-[10px] text-right bg-black/50 px-1 rounded">100.0</div>
        <div className="font-mono text-green-500 text-[10px] text-right bg-black/50 px-1 rounded">100.0</div>
      </div>
    ),
    'Data Loggers': () => (
      <div className="w-18 h-14 bg-slate-800 rounded-lg border border-slate-600 p-2 flex flex-col gap-1">
        {[0, 1, 2].map(i => (
          <motion.div key={i} animate={{ width: [`${40 + i * 15}%`, `${60 + i * 10}%`, `${40 + i * 15}%`] }} transition={{ duration: 2 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }} className={`h-1 rounded-full ${i === 0 ? 'bg-green-400' : i === 1 ? 'bg-blue-400' : 'bg-yellow-400'}`} />
        ))}
      </div>
    ),
    'Autoclaves': () => (
      <div className="relative w-16 h-20 border-4 border-slate-400 dark:border-slate-500 rounded-t-full rounded-b-md flex flex-col items-center justify-end overflow-hidden pb-1">
        <div className="w-full h-1 bg-slate-400 dark:bg-slate-600 mb-1" />
        <div className="w-full h-1 bg-slate-400 dark:bg-slate-600 mb-1" />
        <motion.div animate={{ y: [0, -5, 0], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute top-4 w-4 h-4 text-blue-400/50">〰</motion.div>
      </div>
    ),
    'Ovens & Furnaces': () => (
      <div className="w-20 h-20 bg-slate-200 dark:bg-slate-800 rounded-lg border-2 border-slate-400 dark:border-slate-600 relative overflow-hidden flex flex-col items-center justify-center">
        <div className="w-14 h-12 bg-slate-300 dark:bg-slate-900 rounded border border-slate-400 dark:border-slate-700 relative flex items-center justify-center">
          <motion.div animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-2 bg-orange-500/30 blur-md rounded" />
          <div className="w-10 h-1 bg-slate-700 dark:bg-slate-800 rounded mt-4" />
        </div>
      </div>
    ),
    'Stability Chambers': () => (
      <div className="w-16 h-20 bg-white dark:bg-slate-800 rounded-md border-2 border-blue-200 dark:border-blue-900 shadow-sm flex flex-col overflow-hidden relative">
        <div className="w-full h-3 bg-blue-100 dark:bg-blue-950 flex justify-end px-1 items-center gap-0.5">
          <div className="w-1 h-1 bg-green-500 rounded-full" />
        </div>
        <div className="flex-1 border-4 border-white dark:border-slate-800 relative bg-blue-50 dark:bg-slate-900">
          <motion.div animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-blue-400/20 blur-sm" />
        </div>
      </div>
    ),
  },

  Mass: {
    'Analytical Balances': () => (
      <div className="w-20 h-24 border border-slate-300 dark:border-white/20 bg-slate-50 dark:bg-white/5 rounded flex flex-col justify-end items-center relative p-1 mt-2">
        <div className="absolute top-1 max-w-full px-1 border-b border-white/10 w-full flex justify-center">
          <div className="w-8 h-4 rounded bg-black/5 dark:bg-black/40 text-[6px] font-mono text-green-500 flex items-center justify-center">0.0001g</div>
        </div>
        <div className="w-12 h-1 bg-slate-400 dark:bg-slate-500 mb-2" />
        <div className="w-16 h-4 bg-slate-800 rounded-sm" />
      </div>
    ),
    'Precision Balances': () => (
      <div className="flex flex-col items-center mt-4">
        <motion.div animate={{ y: [0, 2, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} className="w-20 h-4 bg-slate-300 dark:bg-slate-600 rounded border-b-2 border-slate-400 dark:border-slate-800" />
        <div className="w-16 h-8 bg-slate-200 dark:bg-slate-800 rounded-b-xl border border-slate-300 dark:border-slate-700 flex items-center justify-center">
          <span className="font-mono text-[8px] text-blue-600 dark:text-blue-400">0.00 kg</span>
        </div>
      </div>
    ),
    'Platform Scales': () => (
      <div className="flex flex-col items-center gap-1 mt-2">
        <div className="w-20 h-2 bg-slate-500 dark:bg-slate-400 rounded-sm" />
        <div className="w-16 h-10 bg-slate-200 dark:bg-slate-700 rounded-b border border-slate-300 dark:border-slate-600 flex items-center justify-center">
          <span className="font-mono text-[9px] text-green-600 dark:text-green-400">125.3 kg</span>
        </div>
        <div className="flex gap-4">
          <div className="w-1 h-3 bg-slate-400 dark:bg-slate-500 rounded-full" />
          <div className="w-1 h-3 bg-slate-400 dark:bg-slate-500 rounded-full" />
        </div>
      </div>
    ),
    'Weighbridges': () => (
      <div className="flex flex-col items-center gap-1 mt-2">
        <div className="w-24 h-3 bg-slate-500 dark:bg-slate-400 rounded-sm border border-slate-600" />
        <div className="w-20 h-6 bg-slate-300 dark:bg-slate-700 border border-slate-400 flex items-center justify-center">
          <span className="font-mono text-[8px] text-blue-700 dark:text-blue-300">18 500 kg</span>
        </div>
        <div className="flex gap-6">
          {[0,1,2,3].map(i => <div key={i} className="w-2 h-2 bg-slate-600 dark:bg-slate-500 rounded-full" />)}
        </div>
      </div>
    ),
  },

  Volume: {
    'Measuring Cylinders': () => (
      <div className="flex flex-col items-center">
        <div className="w-8 h-20 border-2 border-slate-400 dark:border-slate-500 rounded-b-sm relative overflow-hidden">
          <motion.div animate={{ height: ['30%', '65%', '45%'] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-0 w-full bg-blue-400/40 dark:bg-blue-500/40" />
          {[0,1,2,3].map(i => <div key={i} className="absolute w-2 h-px bg-slate-400 dark:bg-slate-500" style={{ top: `${20 + i * 18}%`, right: 0 }} />)}
        </div>
        <div className="w-10 h-1 bg-slate-400 dark:bg-slate-500 rounded-full mt-0.5" />
      </div>
    ),
    'Pipettes & Burettes': () => (
      <div className="flex gap-3 items-end">
        <div className="flex flex-col items-center">
          <div className="w-4 h-16 border border-slate-400 dark:border-slate-500 rounded-t relative overflow-hidden">
            <motion.div animate={{ height: ['80%', '30%', '60%'] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-0 w-full bg-emerald-400/40" />
          </div>
          <div className="w-1 h-4 bg-slate-400 dark:bg-slate-500" />
          <motion.div animate={{ scaleY: [1, 0, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-2 bg-blue-400 rounded-b-full origin-top" />
        </div>
        <div className="flex flex-col items-center">
          <div className="w-3 h-20 border border-slate-400 dark:border-slate-500 rounded-t relative overflow-hidden">
            <motion.div animate={{ height: ['70%', '20%', '50%'] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute bottom-0 w-full bg-blue-400/40" />
          </div>
          <div className="w-0.5 h-3 bg-slate-400 dark:bg-slate-500" />
        </div>
      </div>
    ),
    'Storage Tanks': () => (
      <div className="flex flex-col items-center">
        <div className="w-16 h-20 bg-slate-300 dark:bg-slate-700 rounded-b-full border-2 border-slate-400 dark:border-slate-500 relative overflow-hidden">
          <motion.div animate={{ height: ['40%', '70%', '55%'] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-0 w-full bg-blue-400/50 dark:bg-blue-500/40" />
        </div>
        <div className="w-2 h-3 bg-slate-500 dark:bg-slate-400" />
        <div className="w-8 h-1 bg-slate-400 dark:bg-slate-500 rounded-full" />
      </div>
    ),
    'Milk Tankers': () => (
      <div className="flex items-end">
        <div className="w-6 h-8 bg-blue-600 rounded-t overflow-hidden relative border border-blue-700">
          <div className="w-2 h-2 bg-blue-300 absolute top-2 right-1 rounded-sm" />
        </div>
        <div className="w-20 h-10 bg-slate-300 dark:bg-slate-400 rounded-full ml-1 border-2 border-slate-400 dark:border-slate-500 relative flex items-center justify-center">
          <motion.div animate={{ x: [-2, 2, -2] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} className="w-16 h-8 border border-white/40 rounded-full flex items-center justify-center text-[8px] text-blue-800 font-bold opacity-30">
            MILK
          </motion.div>
        </div>
      </div>
    ),
  },

  Dimensional: {
    'Vernier Calipers': () => (
      <div className="flex flex-col items-center mt-4 gap-1">
        <div className="w-24 h-3 bg-slate-400 dark:bg-slate-500 rounded-sm relative border border-slate-500 dark:border-slate-400">
          <motion.div animate={{ left: ['10%', '40%', '10%'] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-0 w-5 h-full bg-slate-600 dark:bg-slate-300 border-x border-slate-700 dark:border-slate-200" />
        </div>
        <div className="w-24 h-1 bg-slate-300 dark:bg-slate-600 rounded-full" />
      </div>
    ),
    'Micrometers': () => (
      <div className="w-16 h-16 border-l-4 border-t-4 border-b-4 border-slate-500 dark:border-slate-400 rounded-l-full relative flex items-center">
        <div className="absolute -right-2 top-[3px] w-4 h-2 bg-slate-400 dark:bg-slate-500" />
        <div className="absolute -right-2 bottom-[3px] w-8 h-2 bg-slate-400 dark:bg-slate-500 flex items-center">
          <motion.div animate={{ x: [-2, -8, -2] }} transition={{ duration: 3, repeat: Infinity }} className="w-4 h-1.5 bg-slate-700 dark:bg-slate-800 ml-1 rounded-sm" />
        </div>
      </div>
    ),
    'Height Gauges': () => (
      <div className="flex items-end gap-2 mt-2">
        <div className="w-1.5 h-20 bg-slate-400 dark:bg-slate-500 rounded-sm relative border border-slate-500 dark:border-slate-400">
          <motion.div animate={{ top: ['10%', '60%', '30%'] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="absolute -right-3 w-4 h-1.5 bg-slate-700 dark:bg-slate-300 rounded-sm" />
        </div>
        <div className="w-10 h-2 bg-slate-400 dark:bg-slate-500 rounded-sm mb-0" />
      </div>
    ),
    'Measuring Tapes': () => (
      <div className="flex items-center">
        <div className="w-10 h-10 bg-yellow-500 dark:bg-yellow-600 rounded-lg border-2 border-slate-800 dark:border-black flex items-center justify-center relative z-10">
          <div className="w-4 h-4 rounded-full bg-slate-800 dark:bg-black flex items-center justify-center">
            <div className="w-full h-0.5 bg-yellow-500/50" />
          </div>
        </div>
        <motion.div animate={{ width: [10, 40, 10] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="h-3 bg-yellow-200 dark:bg-yellow-400/80 border-y border-r border-slate-800 dark:border-black overflow-hidden flex items-start gap-1 p-0.5">
          <div className="w-px h-1 bg-black" /><div className="w-px h-2 bg-black" />
          <div className="w-px h-1 bg-black" /><div className="w-px h-2 bg-black" />
        </motion.div>
      </div>
    ),
    'Torque Wrenches': () => (
      <div className="flex items-center gap-1 mt-4">
        <div className="w-5 h-5 rounded-full border-4 border-slate-500 dark:border-slate-400" />
        <div className="w-16 h-3 bg-slate-400 dark:bg-slate-500 rounded-r-full relative">
          <motion.div animate={{ rotate: [-5, 5, -5] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} className="absolute right-0 top-0 w-16 h-3 bg-slate-500 dark:bg-slate-400 rounded-r-full origin-left" />
        </div>
      </div>
    ),
  },

  Electrical: {
    'Multimeters': () => (
      <div className="w-14 h-20 bg-slate-800 rounded-lg border-2 border-slate-600 flex flex-col items-center p-1 gap-1">
        <div className="w-full h-6 bg-black/50 rounded flex items-center justify-center">
          <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.2, repeat: Infinity }} className="font-mono text-[11px] text-green-400">12.7V</motion.span>
        </div>
        <div className="w-6 h-6 rounded-full border-2 border-slate-500 flex items-center justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full" />
        </div>
        <div className="flex gap-1">
          <div className="w-1.5 h-3 bg-red-500 rounded-b-full" />
          <div className="w-1.5 h-3 bg-black rounded-b-full" />
        </div>
      </div>
    ),
    'Clamp Meters': () => (
      <div className="flex flex-col items-center gap-1">
        <div className="w-10 h-10 border-4 border-slate-500 dark:border-slate-400 rounded-b-full border-t-0 relative">
          <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute inset-1 rounded-b-full bg-blue-400/20 blur-sm" />
        </div>
        <div className="w-8 h-14 bg-slate-700 rounded border border-slate-600 flex items-center justify-center">
          <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.2, repeat: Infinity }} className="font-mono text-[8px] text-green-400">23.5A</motion.span>
        </div>
      </div>
    ),
    'Insulation Testers': () => (
      <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg border-2 border-yellow-400 dark:border-yellow-600 flex flex-col items-center justify-center gap-1">
        <div className="font-mono text-[9px] text-yellow-700 dark:text-yellow-400 font-bold">MΩ</div>
        <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 0.8, repeat: Infinity }} className="w-6 h-6 rounded-full border-2 border-yellow-500 flex items-center justify-center">
          <Zap className="w-3 h-3 text-yellow-500" />
        </motion.div>
      </div>
    ),
    'Voltage/Current Sources': () => (
      <div className="w-20 h-14 bg-slate-800 rounded border-2 border-slate-600 flex flex-col p-1.5 gap-1">
        <div className="flex justify-between">
          <span className="text-[8px] text-slate-400 font-mono">V</span>
          <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1, repeat: Infinity }} className="text-[8px] text-blue-400 font-mono">24.00</motion.span>
        </div>
        <div className="flex justify-between">
          <span className="text-[8px] text-slate-400 font-mono">A</span>
          <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0.3 }} className="text-[8px] text-green-400 font-mono">2.500</motion.span>
        </div>
        <div className="flex gap-2 mt-0.5">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <div className="w-2 h-2 rounded-full bg-black border border-slate-500" />
        </div>
      </div>
    ),
  },

  Specialized: {
    'Autoclave Validation': () => (
      <div className="relative w-16 h-20 border-4 border-emerald-400 dark:border-emerald-600 rounded-t-full rounded-b-md flex flex-col items-center justify-end overflow-hidden pb-1">
        <div className="w-full h-1 bg-emerald-400 dark:bg-emerald-600 mb-1" />
        <div className="w-full h-1 bg-emerald-400 dark:bg-emerald-600 mb-1" />
        <motion.div animate={{ y: [0, -5, 0], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute top-4 w-4 h-4 text-emerald-400/60 text-sm">✓</motion.div>
      </div>
    ),
    'Stability Chambers': () => (
      <div className="w-16 h-20 bg-white dark:bg-slate-800 rounded-md border-2 border-emerald-300 dark:border-emerald-700 shadow-sm flex flex-col overflow-hidden relative">
        <div className="w-full h-3 bg-emerald-100 dark:bg-emerald-950 flex justify-end px-1 items-center gap-0.5">
          <div className="w-1 h-1 bg-green-500 rounded-full" />
          <div className="w-1 h-1 bg-blue-500 rounded-full" />
        </div>
        <div className="flex-1 border-4 border-white dark:border-slate-800 relative bg-emerald-50 dark:bg-slate-900">
          <motion.div animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-emerald-400/20 blur-sm" />
        </div>
      </div>
    ),
    'Flow Meters': () => (
      <div className="flex items-center w-full px-2">
        <div className="w-full h-6 border-y-2 border-slate-400 dark:border-slate-600 relative flex items-center overflow-hidden">
          <motion.div animate={{ x: [-20, 100] }} transition={{ duration: 1.5, ease: 'linear', repeat: Infinity }} className="w-4 h-4 bg-blue-400/40 rounded-full blur-sm absolute" />
          <motion.div animate={{ x: [-20, 100] }} transition={{ duration: 1.5, ease: 'linear', repeat: Infinity, delay: 0.5 }} className="w-3 h-3 bg-blue-500/40 rounded-full blur-sm absolute" />
          <div className="absolute left-1/2 -translate-x-1/2 w-8 h-10 border-2 border-slate-500 bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-4 h-4 border border-blue-500 rounded-full flex items-center justify-center">
              <div className="w-1 h-3 bg-blue-500" />
            </motion.div>
          </div>
        </div>
      </div>
    ),
    'Fuel Dispensers': () => (
      <div className="flex flex-col items-center gap-1">
        <div className="w-14 h-16 bg-slate-700 dark:bg-slate-800 rounded-t-lg border-2 border-slate-500 relative flex flex-col items-center p-1">
          <div className="w-full h-6 bg-black/40 rounded flex items-center justify-center mb-1">
            <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="font-mono text-[9px] text-yellow-400">12.50 L</motion.span>
          </div>
          <div className="flex gap-1">
            <div className="w-2 h-4 bg-green-500 rounded-sm" />
            <div className="w-2 h-4 bg-slate-500 rounded-sm" />
          </div>
        </div>
        <div className="w-10 h-2 bg-slate-600 rounded-b-lg" />
      </div>
    ),
  },
};

// ─── Lab Data ─────────────────────────────────────────────────────────────────

type EquipmentItem = { name: string; desc: string };
type Lab = {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  accent: 'emerald' | 'blue';
  subs: string[];
  equipment: EquipmentItem[];
  component: Record<string, React.FC>;
};

const labsData: Lab[] = [
  {
    id: 'pressure',
    title: 'Pressure',
    subtitle: 'Pressure Calibration Lab',
    icon: Gauge,
    accent: 'blue',
    subs: ['Pressure Gauges', 'Digital Pressure Indicators', 'Pressure Transmitters', 'Vacuum Gauges', 'Pressure Relief Valves'],
    equipment: [
      { name: 'Pressure Gauges', desc: 'Ranges 0–20 bar, 0–100 bar and beyond' },
      { name: 'Digital Pressure Indicators', desc: 'High-resolution digital readouts' },
      { name: 'Pressure Transmitters', desc: 'Process & differential transmitters' },
      { name: 'Vacuum Gauges', desc: 'Full vacuum to atmospheric' },
      { name: 'Pressure Relief Valves', desc: 'Set-point verification & adjustment' },
    ],
    component: Graphics.Pressure,
  },
  {
    id: 'temperature',
    title: 'Temperature',
    subtitle: 'Temperature Calibration Lab',
    icon: Thermometer,
    accent: 'emerald',
    subs: ['Digital Thermometers', 'Temperature Probes', 'Temperature Controllers', 'Data Loggers', 'Autoclaves', 'Ovens & Furnaces', 'Stability Chambers'],
    equipment: [
      { name: 'Thermometers', desc: 'Digital & analog types' },
      { name: 'Temperature Probes', desc: 'RTDs & thermocouples' },
      { name: 'Temperature Controllers', desc: 'PID & on/off controllers' },
      { name: 'Data Loggers', desc: 'Multi-channel recording devices' },
      { name: 'Autoclaves', desc: 'Sterilisation cycle validation' },
      { name: 'Ovens & Furnaces', desc: 'Temperature distribution mapping' },
      { name: 'Stability Chambers', desc: 'Temp & humidity mapping' },
    ],
    component: Graphics.Temperature,
  },
  {
    id: 'mass',
    title: 'Mass & Weighing',
    subtitle: 'Mass Calibration Lab',
    icon: Scale,
    accent: 'blue',
    subs: ['Analytical Balances', 'Precision Balances', 'Platform Scales', 'Weighbridges'],
    equipment: [
      { name: 'Analytical Balances', desc: 'Readability to 0.0001 g' },
      { name: 'Precision Balances', desc: 'Laboratory & industrial grades' },
      { name: 'Platform Scales', desc: 'Floor scales & pallet weighers' },
      { name: 'Weighbridges', desc: 'Heavy vehicle & trade compliance' },
    ],
    component: Graphics.Mass,
  },
  {
    id: 'volume',
    title: 'Volume',
    subtitle: 'Volume Calibration Lab',
    icon: Beaker,
    accent: 'emerald',
    subs: ['Measuring Cylinders', 'Pipettes & Burettes', 'Storage Tanks', 'Milk Tankers'],
    equipment: [
      { name: 'Measuring Cylinders', desc: 'Glassware & plastic ware' },
      { name: 'Pipettes & Burettes', desc: 'Volumetric & graduated types' },
      { name: 'Storage Tanks', desc: 'Capacity & strapping tables' },
      { name: 'Milk Tankers', desc: 'KEBS-compliant tanker calibration' },
    ],
    component: Graphics.Volume,
  },
  {
    id: 'dimensional',
    title: 'Dimensional',
    subtitle: 'Dimensional Calibration Lab',
    icon: Ruler,
    accent: 'blue',
    subs: ['Vernier Calipers', 'Micrometers', 'Height Gauges', 'Measuring Tapes', 'Torque Wrenches'],
    equipment: [
      { name: 'Vernier Calipers', desc: 'Inside, outside & depth' },
      { name: 'Micrometers', desc: 'OD, ID & depth micrometers' },
      { name: 'Height Gauges', desc: 'Digital & vernier height gauges' },
      { name: 'Measuring Tapes', desc: 'Class I & II tapes' },
      { name: 'Torque Wrenches', desc: 'Click, dial & digital types' },
    ],
    component: Graphics.Dimensional,
  },
  {
    id: 'electrical',
    title: 'Electrical',
    subtitle: 'Electrical Calibration Lab',
    icon: Zap,
    accent: 'emerald',
    subs: ['Multimeters', 'Clamp Meters', 'Insulation Testers', 'Voltage/Current Sources'],
    equipment: [
      { name: 'Multimeters', desc: 'Digital & analogue types' },
      { name: 'Clamp Meters', desc: 'AC/DC current clamps' },
      { name: 'Insulation Testers', desc: 'MΩ & GΩ range testers' },
      { name: 'Voltage/Current Sources', desc: 'Precision reference sources' },
    ],
    component: Graphics.Electrical,
  },
  {
    id: 'specialized',
    title: 'Specialized',
    subtitle: 'Specialized Services',
    icon: ShieldAlert,
    accent: 'blue',
    subs: ['Autoclave Validation', 'Stability Chambers', 'Flow Meters', 'Fuel Dispensers'],
    equipment: [
      { name: 'Autoclave Calibration', desc: 'Temp mapping, pressure & sterilisation compliance' },
      { name: 'Stability Chambers', desc: 'Temp & humidity mapping, alarm verification' },
      { name: 'Tank & Flow Calibration', desc: 'Milk, fuel, water & HFO flow meters' },
      { name: 'Fuel Dispensers', desc: 'Diesel, petrol, water dispensing units' },
    ],
    component: Graphics.Specialized,
  },
];

// ─── Detail Dialog ─────────────────────────────────────────────────────────────

function LabDialog({ lab, onClose }: { lab: Lab; onClose: () => void }) {
  React.useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onClose]);

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const isEmerald = lab.accent === 'emerald';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
    >
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-lg bg-white dark:bg-[#0d1f3c] rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden"
      >
        {/* Top bar */}
        <div className={`h-1 w-full ${isEmerald ? 'bg-gradient-to-r from-emerald-500 to-blue-500' : 'bg-gradient-to-r from-blue-500 to-emerald-500'}`} />

        {/* Header */}
        <div className="px-6 pt-5 pb-4 border-b border-slate-100 dark:border-white/5 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${isEmerald ? 'bg-emerald-100 dark:bg-emerald-500/15' : 'bg-blue-100 dark:bg-blue-500/15'}`}>
              <lab.icon className={`w-5 h-5 ${isEmerald ? 'text-emerald-600 dark:text-emerald-400' : 'text-blue-600 dark:text-blue-400'}`} />
            </div>
            <div>
              <p className={`text-[9px] font-bold uppercase tracking-widest ${isEmerald ? 'text-emerald-500' : 'text-blue-500'}`}>Calibration Lab</p>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">{lab.subtitle}</h3>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 flex items-center justify-center transition-colors flex-shrink-0">
            <X className="w-4 h-4 text-slate-500 dark:text-slate-400" />
          </button>
        </div>

        {/* Equipment list */}
        <div className="px-6 py-5 space-y-3 max-h-[60vh] overflow-y-auto">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">Equipment Covered</p>
          {lab.equipment.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-3"
            >
              <ChevronRight className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isEmerald ? 'text-emerald-500' : 'text-blue-500'}`} />
              <div>
                <p className="text-[12px] font-semibold text-slate-800 dark:text-slate-100">{item.name}</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 dark:border-white/5 flex justify-end">
          <button
            onClick={onClose}
            className={`text-[11px] font-semibold px-4 py-2 rounded-full border transition-all ${
              isEmerald
                ? 'border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10'
                : 'border-blue-500/30 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10'
            }`}
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function CalibrationLabs() {
  const [activeTabs, setActiveTabs] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {};
    labsData.forEach(l => { init[l.id] = l.subs[0]; });
    return init;
  });
  const [selectedLab, setSelectedLab] = useState<Lab | null>(null);

  const setTab = (labId: string, sub: string) => {
    setActiveTabs(prev => ({ ...prev, [labId]: sub }));
  };

  return (
    <>
      <section id="calibration-labs" className="py-16 bg-white dark:bg-[#0a192f] transition-colors duration-300 border-t border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-[10px] font-bold text-blue-600 dark:text-emerald-400 uppercase tracking-widest mb-1">Accredited Facilities</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Calibration Laboratories</h2>
            <p className="text-sm text-slate-500 dark:text-emerald-100/70 max-w-2xl mx-auto">
              KEBS-traceable calibration across seven specialist laboratories — from pressure gauges to electrical instruments.
            </p>
          </div>

          {/* Lab Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {labsData.map((lab, index) => {
              const ActiveGraphic = lab.component[activeTabs[lab.id]];
              const isEmerald = lab.accent === 'emerald';

              return (
                <motion.div
                  key={lab.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="bg-slate-50 dark:bg-[#112240] rounded-xl border border-slate-200 dark:border-white/10 flex flex-col transition-colors duration-300 hover:border-emerald-400/30 dark:hover:border-emerald-500/20 group overflow-hidden"
                >
                  {/* Thin accent top bar */}
                  <div className={`h-0.5 w-full ${isEmerald ? 'bg-gradient-to-r from-emerald-500 to-blue-500' : 'bg-gradient-to-r from-blue-500 to-emerald-500'}`} />

                  <div className="p-4 flex flex-col flex-grow">
                    {/* Lab title row */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${isEmerald ? 'bg-emerald-100 dark:bg-emerald-500/15' : 'bg-blue-100 dark:bg-blue-500/15'}`}>
                          <lab.icon className={`w-3.5 h-3.5 ${isEmerald ? 'text-emerald-600 dark:text-emerald-400' : 'text-blue-600 dark:text-blue-400'}`} />
                        </div>
                        <h4 className="text-[12px] font-bold text-slate-800 dark:text-emerald-50">{lab.title}</h4>
                      </div>
                      <button
                        onClick={() => setSelectedLab(lab)}
                        className={`text-[9px] font-bold px-2 py-0.5 rounded-full border transition-all ${
                          isEmerald
                            ? 'border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10'
                            : 'border-blue-500/30 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10'
                        }`}
                      >
                        Details
                      </button>
                    </div>

                    {/* Animated graphic viewport */}
                    <div className="h-28 mb-3 w-full bg-slate-100 dark:bg-slate-900/50 rounded-lg flex items-center justify-center border border-slate-200 dark:border-white/5 relative overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeTabs[lab.id]}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2 }}
                          className="w-full h-full flex items-center justify-center"
                        >
                          {ActiveGraphic ? <ActiveGraphic /> : null}
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Sub-type pills */}
                    <div className="flex-grow flex flex-wrap gap-1 mt-auto">
                      {lab.subs.map(sub => (
                        <button
                          key={sub}
                          onClick={() => setTab(lab.id, sub)}
                          className={`text-[9px] px-2 py-1 rounded transition-colors border ${
                            activeTabs[lab.id] === sub
                              ? isEmerald
                                ? 'bg-emerald-600 text-white border-emerald-600'
                                : 'bg-blue-600 text-white border-blue-600'
                              : isEmerald
                                ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/30 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 font-semibold'
                                : 'bg-blue-50 dark:bg-blue-500/10 text-blue-800 dark:text-blue-400 border-blue-200 dark:border-blue-500/30 hover:bg-blue-100 dark:hover:bg-blue-500/20 font-semibold'
                          }`}
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lab Detail Dialog */}
      <AnimatePresence>
        {selectedLab && (
          <LabDialog lab={selectedLab} onClose={() => setSelectedLab(null)} />
        )}
      </AnimatePresence>
    </>
  );
}