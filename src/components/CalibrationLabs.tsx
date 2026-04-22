import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gauge, Thermometer, Scale, Beaker, Ruler, ShieldAlert, Zap } from 'lucide-react';

// Subcategory graphics components
const Graphics = {
  Temperature: {
    'Digital Thermometers': () => (
      <div className="flex flex-col items-center">
        <div className="w-16 h-8 bg-slate-800 dark:bg-black/50 rounded flex items-center justify-center border border-slate-300 dark:border-white/10 font-mono text-[10px] text-green-500 shadow-inner">
          <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1, repeat: Infinity }}>24.0°C</motion.span>
        </div>
        <div className="w-2 h-10 bg-slate-300 dark:bg-slate-600 rounded-b-full mt-1 border border-slate-400 dark:border-white/10"></div>
      </div>
    ),
    'Ovens': () => (
      <div className="w-20 h-20 bg-slate-200 dark:bg-slate-800 rounded-lg border-2 border-slate-400 dark:border-slate-600 relative overflow-hidden flex flex-col items-center justify-center">
        <div className="w-14 h-12 bg-slate-300 dark:bg-slate-900 rounded border border-slate-400 dark:border-slate-700 relative flex items-center justify-center">
          <motion.div animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-2 bg-orange-500/30 blur-md rounded" />
          <div className="w-10 h-1 bg-slate-700 dark:bg-slate-800 rounded mt-4"></div>
        </div>
      </div>
    ),
    'Autoclaves': () => (
      <div className="relative w-16 h-20 border-4 border-slate-400 dark:border-slate-500 rounded-t-full rounded-b-md flex flex-col items-center justify-end overflow-hidden pb-1">
        <div className="w-full h-1 bg-slate-400 dark:bg-slate-600 mb-1" />
        <div className="w-full h-1 bg-slate-400 dark:bg-slate-600 mb-1" />
        <motion.div animate={{ y: [0, -5, 0], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute top-4 w-4 h-4 text-blue-400/50">〰</motion.div>
      </div>
    ),
    'Incubators': () => (
      <div className="w-16 h-20 bg-white dark:bg-slate-800 rounded-md border-2 border-blue-200 dark:border-blue-900 shadow-sm flex flex-col overflow-hidden relative">
        <div className="w-full h-3 bg-blue-100 dark:bg-blue-950 flex justify-end px-1 items-center gap-0.5"><div className="w-1 h-1 bg-green-500 rounded-full"></div></div>
        <div className="flex-1 border-4 border-white dark:border-slate-800 relative bg-blue-50 dark:bg-slate-900">
           <motion.div animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-blue-400/20 blur-sm"></motion.div>
        </div>
      </div>
    ),
    'Dial Thermometers': () => (
      <div className="flex flex-col items-center gap-1">
        <div className="w-14 h-14 rounded-full border-4 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 relative flex items-center justify-center">
            <motion.div animate={{ rotate: [-20, 40, -20] }} transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }} className="absolute w-1 h-6 bg-red-500 rounded-t-full origin-bottom" style={{ bottom: '50%' }}></motion.div>
            <div className="w-2 h-2 rounded-full bg-slate-800 dark:bg-slate-400 z-10"></div>
        </div>
        <div className="w-2 h-6 bg-slate-300 dark:bg-slate-600 rounded-b"></div>
      </div>
    ),
    'Temp Controller': () => (
      <div className="w-20 h-12 bg-slate-800 rounded border-2 border-slate-600 flex flex-col p-1 justify-between">
         <div className="font-mono text-red-500 text-[10px] text-right bg-black/50 px-1 rounded">100.0</div>
         <div className="font-mono text-green-500 text-[10px] text-right bg-black/50 px-1 rounded">100.0</div>
      </div>
    ),
    'Refrig. Trucks': () => (
      <div className="flex items-end">
        <div className="w-16 h-12 bg-white dark:bg-slate-200 rounded-sm border-2 border-slate-300 dark:border-slate-400 flex items-center justify-center relative">
           <motion.div animate={{ x: [-5, 5, -5] }} transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }} className="text-blue-400 text-[8px] absolute top-1">❄️</motion.div>
        </div>
        <div className="w-6 h-10 bg-blue-600 rounded-t-lg rounded-r-md ml-0.5 border-2 border-blue-700 relative">
          <div className="absolute top-2 right-1 w-2 h-3 bg-blue-300 rounded-sm"></div>
        </div>
      </div>
    ),
    'Fridges': () => (
      <div className="w-12 h-24 bg-slate-200 dark:bg-slate-300 rounded border-2 border-slate-400 dark:border-slate-500 flex flex-col gap-0.5 p-0.5">
         <div className="flex-1 bg-white dark:bg-slate-100 rounded-sm relative">
           <div className="absolute left-1 top-2 w-1 h-6 bg-slate-300 rounded-full"></div>
         </div>
         <div className="flex-[2] bg-white dark:bg-slate-100 rounded-sm relative">
           <div className="absolute left-1 top-2 w-1 h-8 bg-slate-300 rounded-full"></div>
         </div>
      </div>
    ),
    'Cold Rooms': () => (
      <div className="w-24 h-20 border-r-2 border-b-2 border-blue-400 dark:border-blue-600 bg-blue-50/50 dark:bg-slate-800/80 rounded relative flex items-center justify-center p-2">
         <div className="w-full h-full border-2 border-dashed border-blue-300 dark:border-blue-700 rounded relative">
           <motion.div animate={{ opacity: [0.1, 0.4, 0.1] }} transition={{ duration: 3, repeat: Infinity }} className="absolute inset-0 bg-blue-300/20 blur-md"></motion.div>
         </div>
      </div>
    )
  },
  Balance: {
    'Weighing Scales': () => (
      <div className="flex flex-col items-center mt-4">
        <motion.div animate={{ y: [0, 2, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} className="w-20 h-4 bg-slate-300 dark:bg-slate-600 rounded border-b-2 border-slate-400 dark:border-slate-800" />
        <div className="w-16 h-8 bg-slate-200 dark:bg-slate-800 rounded-b-xl border border-slate-300 dark:border-slate-700 flex items-center justify-center">
           <span className="font-mono text-[8px] text-blue-600 dark:text-blue-400">0.00 kg</span>
        </div>
      </div>
    ),
    'Analytical Balances': () => (
      <div className="w-20 h-24 border border-slate-300 dark:border-white/20 bg-slate-50 dark:bg-white/5 rounded flex flex-col justify-end items-center relative p-1 mt-2">
        <div className="absolute top-1 max-w-full px-1 border-b border-white/10 w-full flex justify-center"><div className="w-8 h-4 glass rounded bg-black/5 dark:bg-black/40 text-[6px] font-mono text-green-500 flex items-center justify-center transition-colors">0.0001g</div></div>
        <div className="w-12 h-1 bg-slate-400 dark:bg-slate-500 mb-2"></div>
        <div className="w-16 h-4 bg-slate-800 dark:bg-slate-800 rounded-sm"></div>
      </div>
    ),
    'Load Cells': () => (
      <div className="flex flex-col items-center justify-center w-16 h-12">
        <div className="w-full h-full bg-slate-700 dark:bg-slate-600 rounded-sm relative border-y-4 border-slate-800 flex items-center justify-center">
           <div className="w-8 h-8 rounded-full border-4 border-slate-800 flex items-center justify-center">
              <motion.div animate={{ scaleX: [1, 1.1, 1] }} transition={{ duration: 1, repeat: Infinity }} className="h-full w-1 border-x border-slate-500"></motion.div>
           </div>
        </div>
      </div>
    ),
    'Masses': () => (
      <div className="flex items-end justify-center gap-1">
         <div className="w-6 h-8 bg-slate-400 dark:bg-slate-500 rounded-t-sm flex flex-col items-center">
           <div className="w-2 h-2 bg-slate-500 dark:bg-slate-600 rounded-t-full -mt-2"></div>
         </div>
         <div className="w-8 h-12 bg-slate-400 dark:bg-slate-500 rounded-t-sm flex flex-col items-center">
           <div className="w-3 h-3 bg-slate-500 dark:bg-slate-600 rounded-t-full -mt-3"></div>
         </div>
         <div className="w-4 h-5 bg-slate-400 dark:bg-slate-500 rounded-t-sm flex flex-col items-center">
           <div className="w-1.5 h-1.5 bg-slate-500 dark:bg-slate-600 rounded-t-full -mt-1.5"></div>
         </div>
      </div>
    )
  },
  Volume: {
    'Flow Meters': () => (
      <div className="flex items-center w-full px-2">
        <div className="w-full h-6 border-y-2 border-slate-400 dark:border-slate-600 relative flex items-center overflow-hidden">
          <motion.div animate={{ x: [-20, 100] }} transition={{ duration: 1.5, ease: 'linear', repeat: Infinity }} className="w-4 h-4 bg-blue-400/40 rounded-full blur-sm absolute" />
          <motion.div animate={{ x: [-20, 100] }} transition={{ duration: 1.5, ease: 'linear', repeat: Infinity, delay: 0.5 }} className="w-3 h-3 bg-blue-500/40 rounded-full blur-sm absolute" />
          <div className="absolute left-1/2 -translate-x-1/2 w-8 h-10 border-2 border-slate-500 dark:border-slate-500 bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-4 h-4 border border-blue-500 rounded-full flex items-center justify-center">
              <div className="w-1 h-3 bg-blue-500"></div>
            </motion.div>
          </div>
        </div>
      </div>
    ),
    'Tanker Trucks': () => (
      <div className="flex items-end">
        <div className="w-6 h-8 bg-blue-600 rounded-t overflow-hidden relative border border-blue-700">
           <div className="w-2 h-2 bg-blue-300 absolute top-2 right-1 rounded-sm"></div>
        </div>
        <div className="w-20 h-10 bg-slate-300 dark:bg-slate-400 rounded-full ml-1 border-2 border-slate-400 dark:border-slate-500 relative flex items-center justify-center">
          <motion.div animate={{ x: [-2, 2, -2] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="w-16 h-8 border border-white/40 rounded-full flex items-center justify-center text-[10px] text-blue-800 font-bold opacity-30">
            LIQUID
          </motion.div>
        </div>
      </div>
    )
  },
  Pressure: {
    'Pressure Gauges': () => (
      <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full text-slate-400 dark:text-slate-600 transition-colors">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="4" />
          <path d="M20 80 A 40 40 0 1 1 80 80" fill="none" stroke="#ef4444" strokeWidth="6" strokeLinecap="round" />
        </svg>
        <motion.div 
          animate={{ rotate: [ -120, -60, -90, -30, -80, -120 ] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-1 h-6 bg-slate-800 dark:bg-slate-200 rounded-t-full origin-bottom transition-colors"
          style={{ bottom: '50%', left: '48%' }}
        />
        <div className="absolute top-[48%] left-[46%] w-2 h-2 bg-slate-800 dark:bg-slate-200 rounded-full z-10 transition-colors" />
      </div>
    ),
    'Release Machines': () => (
      <div className="flex flex-col items-center">
        <div className="w-12 h-6 bg-slate-800 dark:bg-slate-700 rounded-t relative flex items-center justify-center transition-colors">
          <motion.div animate={{ y: [-15, -25], opacity: [0, 1, 0], scale: [1, 2] }} transition={{ duration: 1, repeat: Infinity }} className="absolute -top-2 w-4 h-4 bg-slate-300 dark:bg-white blur-md rounded-full" />
        </div>
        <div className="w-16 h-10 border-4 border-slate-600 dark:border-slate-500 rounded flex items-center justify-center">
           <div className="h-1 w-full bg-slate-400 dark:bg-slate-600"></div>
        </div>
      </div>
    )
  },
  Dimensional: {
    'Rules': () => (
      <div className="w-24 h-4 bg-slate-300 dark:bg-slate-600 rounded-sm border border-slate-400 dark:border-slate-500 flex items-start gap-1 p-0.5 px-1 shadow-inner relative transition-colors mt-8">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`bg-slate-800 dark:bg-slate-900 w-[1px] transition-colors ${i % 2 === 0 ? 'h-2' : 'h-1'}`}></div>
        ))}
        <div className="absolute font-mono text-[5px] text-slate-800 dark:text-slate-900 bottom-0 left-2">cm</div>
      </div>
    ),
    'Tape Measure': () => (
      <div className="flex items-center">
        <div className="w-10 h-10 bg-yellow-500 dark:bg-yellow-600 rounded-lg border-2 border-slate-800 dark:border-black flex items-center justify-center relative z-10 transition-colors">
          <div className="w-4 h-4 rounded-full bg-slate-800 dark:bg-black flex items-center justify-center">
             <div className="w-full h-0.5 bg-yellow-500/50"></div>
          </div>
        </div>
        <motion.div animate={{ width: [10, 40, 10] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="h-3 bg-yellow-200 dark:bg-yellow-400/80 border-y border-r border-slate-800 dark:border-black overflow-hidden flex items-start gap-1 p-0.5 relative transition-colors">
           <div className="w-px h-1 bg-black"></div><div className="w-px h-2 bg-black"></div>
           <div className="w-px h-1 bg-black"></div><div className="w-px h-2 bg-black"></div>
        </motion.div>
      </div>
    ),
    'Micrometer': () => (
      <div className="w-16 h-16 border-l-4 border-t-4 border-b-4 border-slate-500 dark:border-slate-400 rounded-l-full relative flex items-center transition-colors">
         <div className="absolute -right-2 top-[3px] w-4 h-2 bg-slate-400 dark:bg-slate-500"></div>
         <div className="absolute -right-2 bottom-[3px] w-8 h-2 bg-slate-400 dark:bg-slate-500 flex items-center">
            <motion.div animate={{ x: [-2, -8, -2] }} transition={{ duration: 3, repeat: Infinity }} className="w-4 h-1.5 bg-slate-700 dark:bg-slate-800 ml-1 rounded-sm"></motion.div>
         </div>
      </div>
    )
  },
  Force: {
    'Force Testing': () => (
      <div className="flex flex-col items-center">
        <div className="w-20 h-4 bg-slate-400 dark:bg-slate-600 rounded-t transition-colors"></div>
        <div className="flex gap-6 border-x-4 border-slate-500 dark:border-slate-500 h-16 w-16 relative">
          <motion.div animate={{ top: [0, 20, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} className="absolute w-full h-4 bg-slate-700 dark:bg-slate-800 left-0 flex justify-center">
             <div className="w-4 h-full bg-slate-600 dark:bg-slate-900 border-x border-slate-500/30"></div>
          </motion.div>
          <div className="absolute bottom-0 w-6 h-6 border bg-blue-500/20 border-blue-500/50 left-[calc(50%-12px)] rounded-sm"></div>
        </div>
        <div className="w-20 h-6 bg-slate-800 dark:bg-slate-800 rounded-b text-[8px] font-mono text-white flex items-center justify-center transition-colors">50.0 kN</div>
      </div>
    )
  },
  NDT: {
    'Ultrasound': () => (
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
    'X-Ray': () => (
      <div className="w-16 h-20 bg-slate-800 dark:bg-slate-900 rounded border border-slate-600 dark:border-white/10 relative overflow-hidden flex items-center p-2 transition-colors">
         <motion.div animate={{ top: ['-20%', '120%'] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className="absolute left-0 w-full h-1 bg-blue-400/80 dark:bg-cyan-400/80 shadow-[0_0_8px_rgba(56,189,248,0.8)] z-20"></motion.div>
         <div className="w-full h-full bg-slate-400 dark:bg-slate-600 rounded flex items-center justify-center relative z-10 transition-colors">
            <div className="w-1 h-8 bg-black/40 rotate-12 blur-[0.5px]"></div>
         </div>
      </div>
    )
  }
};


const labsData = [
  {
    id: 'temperature',
    title: 'Temperature Lab',
    icon: Thermometer,
    subs: ['Digital Thermometers', 'Ovens', 'Autoclaves', 'Incubators', 'Dial Thermometers', 'Temp Controller', 'Refrig. Trucks', 'Fridges', 'Cold Rooms'],
    component: Graphics.Temperature
  },
  {
    id: 'balance',
    title: 'Balance Lab',
    icon: Scale,
    subs: ['Weighing Scales', 'Analytical Balances', 'Load Cells', 'Masses'],
    component: Graphics.Balance
  },
  {
    id: 'volume',
    title: 'Volume Lab',
    icon: Beaker,
    subs: ['Flow Meters', 'Tanker Trucks'],
    component: Graphics.Volume
  },
  {
    id: 'pressure',
    title: 'Pressure Lab',
    icon: Gauge,
    subs: ['Pressure Gauges', 'Release Machines'],
    component: Graphics.Pressure
  },
  {
    id: 'dimensional',
    title: 'Industrial Measurement',
    icon: Ruler,
    subs: ['Rules', 'Tape Measure', 'Micrometer'],
    component: Graphics.Dimensional
  },
  {
    id: 'force',
    title: 'Force Lab',
    icon: ShieldAlert,
    subs: ['Force Testing'],
    component: Graphics.Force
  },
  {
    id: 'ndt',
    title: 'NDT Lab',
    icon: Zap,
    subs: ['Ultrasound', 'X-Ray'],
    component: Graphics.NDT
  }
];

export default function CalibrationLabs() {
  const [activeTabs, setActiveTabs] = useState<Record<string, string>>(() => {
    const initTabs: Record<string, string> = {};
    labsData.forEach(l => { initTabs[l.id] = l.subs[0]; });
    return initTabs;
  });

  const setTab = (labId: string, sub: string) => {
    setActiveTabs(prev => ({ ...prev, [labId]: sub }));
  };

  return (
    <section id="calibration-labs" className="py-12 bg-white dark:bg-[#0a192f] transition-colors duration-300 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <h2 className="text-[10px] font-bold text-blue-600 dark:text-emerald-400 uppercase tracking-widest mb-1 transition-colors">Accredited Facilities</h2>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">Advanced Calibration & Testing</h3>
          <p className="text-[11px] text-slate-800 dark:text-emerald-100/90 max-w-2xl mx-auto transition-colors font-medium">
            Our state-of-the-art laboratory facilities offer meticulous sub-category testing across various industrial parameters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {labsData.map((lab, index) => {
            const ActiveGraphic = (lab.component as Record<string, React.FC>)[activeTabs[lab.id]];
            return (
              <motion.div 
                key={lab.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-slate-50 dark:bg-[#112240] rounded-xl p-4 flex flex-col border border-slate-200 dark:border-white/10 group transition-colors duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <lab.icon className="w-4 h-4 text-blue-600 dark:text-emerald-400 transition-colors" />
                  <h4 className="text-[12px] font-bold text-slate-800 dark:text-emerald-50 transition-colors">{lab.title}</h4>
                </div>

                <div className="h-32 mb-3 w-full bg-slate-100 dark:bg-slate-900/50 rounded-lg flex items-center justify-center border border-slate-200 dark:border-white/5 relative overflow-hidden transition-colors">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTabs[lab.id]}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      {ActiveGraphic ? <ActiveGraphic /> : null}
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                <div className="flex-grow flex flex-wrap gap-1 mt-auto">
                    {lab.subs.map(sub => (
                      <button
                        key={sub}
                        onClick={() => setTab(lab.id, sub)}
                        className={`text-[9px] px-2 py-1 rounded transition-colors border ${
                          activeTabs[lab.id] === sub 
                            ? 'bg-emerald-600 text-white border-emerald-600' 
                            : 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/30 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 shadow-sm dark:shadow-none font-bold'
                        }`}
                      >
                        {sub}
                      </button>
                    ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
