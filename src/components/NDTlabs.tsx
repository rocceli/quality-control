import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap } from 'lucide-react';

const NDTGraphics: Record<string, React.FC> = {
    'Ultrasonic Testing': () => (
        <div className="w-20 h-16 bg-slate-900 dark:bg-black rounded-lg border-2 border-slate-600 dark:border-slate-700 p-2 flex flex-col shadow-inner transition-colors">
            <div className="w-full h-full border border-blue-500/30 bg-blue-900/20 rounded relative overflow-hidden flex items-center">
                <svg viewBox="0 0 100 50" className="w-full h-full stroke-blue-400 dark:stroke-blue-500 fill-none" preserveAspectRatio="none">
                <motion.path
                    animate={{ d: ["M0,25 Q10,25 20,25 T40,25 T60,25 T80,25 T100,25", "M0,25 Q10,10 20,25 T40,5 T60,25 T80,45 T100,25"] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                    strokeWidth="2"
                />
                </svg>
            </div>
        </div>
    ),
    'Radiography Testing': () => (
        <div className="w-16 h-20 bg-slate-800 dark:bg-slate-900 rounded border border-slate-600 dark:border-white/10 relative overflow-hidden flex items-center p-2 transition-colors">
            <motion.div animate={{ top: ['-20%', '120%'] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className="absolute left-0 w-full h-1 bg-blue-400/80 dark:bg-cyan-400/80 shadow-[0_0_8px_rgba(56,189,248,0.8)] z-20" />
            <div className="w-full h-full bg-slate-400 dark:bg-slate-600 rounded flex items-center justify-center relative z-10 transition-colors">
                <div className="w-1 h-8 bg-black/40 rotate-12 blur-[0.5px]" />
            </div>
        </div>
    ),
    'Magnetic Particle': () => (
        <div className="flex flex-col items-center justify-center gap-2">
            <div className="w-20 h-8 bg-slate-700 dark:bg-slate-800 rounded relative overflow-hidden border border-slate-500">
                <motion.div animate={{ x: [-30, 60] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} className="absolute top-1 w-6 h-6 rounded-full bg-red-500/40 blur-sm" />
                {[...Array(6)].map((_, i) => (
                <motion.div key={i} animate={{ y: [0, -4, 0], opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }} className="absolute bottom-1 w-0.5 h-2 bg-red-400 rounded-full" style={{ left: `${10 + i * 14}%` }} />
                ))}
            </div>
            <div className="text-[8px] font-mono text-red-400">Magnetic Field</div>
        </div>
    ),
    'Liquid Penetration': () => (
        <div className="flex flex-col items-center justify-center gap-1">
            <div className="w-20 h-10 bg-slate-700 dark:bg-slate-800 rounded relative overflow-hidden border border-slate-500">
                <motion.div animate={{ scaleX: [0, 1], opacity: [0, 0.8, 0.4] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }} className="absolute bottom-0 left-0 w-full h-3 bg-red-500/60 blur-sm origin-left" />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600/80" />
                {[...Array(4)].map((_, i) => (
                <motion.div key={i} animate={{ y: [0, 8], opacity: [1, 0] }} transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3 }} className="absolute top-1 w-1 h-2 bg-red-400/70 rounded-full" style={{ left: `${15 + i * 20}%` }} />
                ))}
            </div>
            <div className="text-[8px] font-mono text-red-400">Dye Penetrant</div>
        </div>
    ),
    'Visual Inspection': () => (
        <div className="flex items-center justify-center w-20 h-16 relative">
            <div className="w-14 h-10 border-2 border-slate-400 dark:border-slate-500 rounded bg-slate-100 dark:bg-slate-800 relative flex items-center justify-center">
                <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-5 h-5 rounded-full border-2 border-blue-400 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                </motion.div>
            </div>
            <motion.div animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="absolute -right-1 -top-1 text-lg">🔍</motion.div>
        </div>
    ),
    'Welder Certification': () => (
        <div className="flex flex-col items-center justify-center gap-1">
            <div className="relative w-16 h-12 flex items-end justify-center">
                <div className="w-12 h-4 bg-slate-600 dark:bg-slate-700 rounded-sm border border-slate-500" />
                <motion.div animate={{ opacity: [0, 1, 0], y: [0, -8, -16], x: [-2, 2, -2] }} transition={{ duration: 0.4, repeat: Infinity }} className="absolute bottom-4 left-1/2 w-1 h-4 bg-yellow-300 blur-[2px] rounded-full" />
                <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0.2, 0.8] }} transition={{ duration: 0.3, repeat: Infinity }} className="absolute bottom-3 left-1/2 w-3 h-3 bg-orange-400/60 blur-md rounded-full" />
            </div>
            <div className="text-[8px] font-mono text-yellow-400">Weld Verified ✓</div>
        </div>
    ),
};

const ndtServices = [
    { id: 'Ultrasonic Testing',   desc: 'High-frequency sound waves detect internal flaws and material thickness.' },
    { id: 'Radiography Testing',  desc: 'X-ray & gamma-ray imaging reveals internal structural defects.' },
    { id: 'Magnetic Particle',    desc: 'Detects surface and near-surface discontinuities in ferromagnetic materials.' },
    { id: 'Liquid Penetration',   desc: 'Dye penetrant testing reveals surface-breaking defects on any material.' },
    { id: 'Visual Inspection',    desc: 'Systematic visual examination of structures, welds, and components.' },
    { id: 'Welder Certification', desc: 'Qualification and certification of welders to international standards.' },
];

export default function NDTLabs() {
    const [active, setActive] = useState('Ultrasonic Testing');
    const ActiveGraphic = NDTGraphics[active];

    return (
        <section id="ndt-labs" className="py-16 bg-white dark:bg-[#0a192f] transition-colors duration-300 border-t border-slate-200 dark:border-white/5">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 mb-3">
                        <Zap className="w-5 h-5 text-blue-600 dark:text-emerald-400" />
                        <span className="text-[10px] font-bold text-blue-600 dark:text-emerald-400 uppercase tracking-widest">Accredited Facilities</span>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Non Destructive Testing</h2>
                    <p className="text-sm text-slate-600 dark:text-emerald-100/80 max-w-xl mx-auto">
                        State-of-the-art NDT services ensuring structural integrity and safety compliance across all industrial sectors.
                    </p>
                </div>

                {/* Main Card */}
                <div className="bg-slate-50 dark:bg-[#112240] rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">

                        {/* Left — Graphic + Active Info */}
                        <div className="flex flex-col items-center justify-center gap-4 p-10 bg-slate-100 dark:bg-slate-900/40 border-b md:border-b-0 md:border-r border-slate-200 dark:border-white/5 min-h-[280px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                key={active}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.25 }}
                                className="flex flex-col items-center gap-4"
                                >
                                <ActiveGraphic />
                                <div className="text-center">
                                    <p className="text-sm font-semibold text-slate-800 dark:text-white">{active}</p>
                                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 max-w-[200px]">
                                        {ndtServices.find(s => s.id === active)?.desc}
                                    </p>
                                </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Right — Service Buttons */}
                        <div className="p-6 flex flex-col justify-center gap-2">
                        <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500 mb-2">Select a Service</p>
                            {ndtServices.map(({ id }) => (
                                <button
                                key={id}
                                onClick={() => setActive(id)}
                                className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all border ${
                                    active === id
                                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                                    : 'bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 hover:border-emerald-300 dark:hover:border-emerald-500/30'
                                }`}
                                >
                                {id}
                                </button>
                            ))}
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}