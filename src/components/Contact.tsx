import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });
  
  const [services, setServices] = useState({
    qualityInspection: false,
    isoCertification: false,
    calibration: false,
    training: false,
  });

  const [subcalibrations, setSubcalibrations] = useState<Record<string, boolean>>({
    temperature: false,
    balance: false,
    volume: false,
    pressure: false,
    dimensional: false,
    force: false,
    ndt: false,
  });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setServices({ ...services, [e.target.name]: e.target.checked });
  };

  const handleSubcalibrationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubcalibrations({ ...subcalibrations, [e.target.name]: e.target.checked });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedServices = Object.entries(services)
      .filter(([_, isSelected]) => isSelected)
      .map(([key, _]) => {
        const labels: Record<string, string> = {
          qualityInspection: 'Quality Inspection',
          isoCertification: 'ISO Certification',
          calibration: 'Calibration Services',
          training: 'Training & Audits'
        };
        return labels[key];
      });

    const selectedSubcals = Object.entries(subcalibrations)
      .filter(([_, isSelected]) => isSelected)
      .map(([key, _]) => {
        const labels: Record<string, string> = {
          temperature: 'Temperature',
          balance: 'Balance/Mass',
          volume: 'Volume',
          pressure: 'Pressure',
          dimensional: 'Dimensional',
          force: 'Force',
          ndt: 'NDT'
        };
        return labels[key];
      });

    let servicesString = selectedServices.join(', ');
    if (services.calibration && selectedSubcals.length > 0) {
      servicesString += ` (Subcalibrations: ${selectedSubcals.join(', ')})`;
    }

    const subject = encodeURIComponent(`Service Inquiry from ${formData.name} - ${formData.company}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\n\nServices of Interest: ${servicesString || 'General Inquiry'}\n\nMessage:\n${formData.message}`);
    
    // Open Gmail compose window
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=leahmitau@gmail.com&su=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contact" className="py-12 bg-slate-50 dark:bg-[#0a192f] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#112240] rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-white/10 transition-colors">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h2 className="text-[10px] font-bold text-blue-600 dark:text-emerald-400 uppercase tracking-widest mb-1 transition-colors">Get in Touch</h2>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Let's Discuss Your Compliance Needs</h3>
            <p className="text-[11px] text-slate-600 dark:text-emerald-100/90 mb-8 leading-relaxed transition-colors font-medium">
              Whether you need ISO certification guidance, industrial measurement calibration, or quality assurance services, our experts are ready to assist.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white dark:bg-white/5 border border-slate-200 dark:border-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <MapPin className="w-4 h-4 text-blue-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-slate-800 dark:text-white mb-0.5 transition-colors">Office Location</h4>
                  <p className="text-[10px] text-slate-600 dark:text-emerald-100/70 transition-colors">Nairobi, Kenya</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white dark:bg-white/5 border border-slate-200 dark:border-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-slate-800 dark:text-emerald-400 mb-0.5 transition-colors">WhatsApp / Call</h4>
                  <a href="https://wa.me/254722692450" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-600 dark:text-emerald-100 hover:text-emerald-600 dark:hover:text-white transition-colors">+254 722 692 450</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white dark:bg-black/20 border border-slate-300 dark:border-emerald-500/20 rounded text-[11px] text-slate-900 dark:text-emerald-50 focus:border-blue-500 dark:focus:border-emerald-500 outline-none transition-colors"
                    placeholder="Full Name *"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    id="company" 
                    name="company"
                    required
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white dark:bg-black/20 border border-slate-300 dark:border-emerald-500/20 rounded text-[11px] text-slate-900 dark:text-emerald-50 focus:border-blue-500 dark:focus:border-emerald-500 outline-none transition-colors"
                    placeholder="Company Name *"
                  />
                </div>
              </div>

              <div>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white dark:bg-black/20 border border-slate-300 dark:border-emerald-500/20 rounded text-[11px] text-slate-900 dark:text-emerald-50 focus:border-blue-500 dark:focus:border-emerald-500 outline-none transition-colors"
                  placeholder="Email Address *"
                />
              </div>

              <div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                  <label className="flex items-center gap-2 p-2 rounded border border-slate-300 dark:border-emerald-500/20 bg-white dark:bg-black/20 cursor-pointer hover:bg-slate-100 dark:hover:bg-emerald-900/40 transition-colors">
                    <input type="checkbox" name="qualityInspection" checked={services.qualityInspection} onChange={handleCheckboxChange} className="w-3 h-3 text-emerald-600 dark:text-emerald-500 rounded border-slate-300 dark:border-emerald-500/30" />
                    <span className="text-[10px] text-slate-700 dark:text-emerald-100/80 transition-colors">Quality Inspection</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 rounded border border-slate-300 dark:border-emerald-500/20 bg-white dark:bg-black/20 cursor-pointer hover:bg-slate-100 dark:hover:bg-emerald-900/40 transition-colors">
                    <input type="checkbox" name="isoCertification" checked={services.isoCertification} onChange={handleCheckboxChange} className="w-3 h-3 text-emerald-600 dark:text-emerald-500 rounded border-slate-300 dark:border-emerald-500/30" />
                    <span className="text-[10px] text-slate-700 dark:text-emerald-100/80 transition-colors">ISO Certification</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 rounded border border-slate-300 dark:border-emerald-500/20 bg-white dark:bg-black/20 cursor-pointer hover:bg-slate-100 dark:hover:bg-emerald-900/40 transition-colors">
                    <input type="checkbox" name="calibration" checked={services.calibration} onChange={handleCheckboxChange} className="w-3 h-3 text-emerald-600 dark:text-emerald-500 rounded border-slate-300 dark:border-emerald-500/30" />
                    <span className="text-[10px] text-slate-700 dark:text-emerald-100/80 transition-colors">Calibration Services</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 rounded border border-slate-300 dark:border-emerald-500/20 bg-white dark:bg-black/20 cursor-pointer hover:bg-slate-100 dark:hover:bg-emerald-900/40 transition-colors">
                    <input type="checkbox" name="training" checked={services.training} onChange={handleCheckboxChange} className="w-3 h-3 text-emerald-600 dark:text-emerald-500 rounded border-slate-300 dark:border-emerald-500/30" />
                    <span className="text-[10px] text-slate-700 dark:text-emerald-100/80 transition-colors">Training & Audits</span>
                  </label>
                </div>
              </div>

              {services.calibration && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="overflow-hidden"
                >
                  <label className="block text-[11px] font-bold text-slate-800 dark:text-emerald-400 mb-2">Select Sub-Calibrations:</label>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 bg-slate-100 dark:bg-black/30 p-3 rounded border border-slate-200 dark:border-emerald-500/10">
                    {Object.keys(subcalibrations).map((key) => {
                      const labels: Record<string, string> = {
                        temperature: 'Temperature',
                        balance: 'Balance/Mass',
                        volume: 'Volume',
                        pressure: 'Pressure',
                        dimensional: 'Dimensional',
                        force: 'Force',
                        ndt: 'NDT'
                      };
                      return (
                        <label key={key} className="flex items-center gap-2 cursor-pointer transition-colors">
                          <input 
                            type="checkbox" 
                            name={key} 
                            checked={subcalibrations[key]} 
                            onChange={handleSubcalibrationChange} 
                            className="w-3 h-3 text-emerald-600 dark:text-emerald-500 rounded border-slate-300 dark:border-emerald-500/30" 
                          />
                          <span className="text-[10px] text-slate-600 dark:text-emerald-100/70 transition-colors">{labels[key]}</span>
                        </label>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              <div>
                <textarea 
                  id="message" 
                  name="message"
                  rows={3}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white dark:bg-black/20 border border-slate-300 dark:border-emerald-500/20 rounded text-[11px] text-slate-900 dark:text-emerald-50 focus:border-blue-500 dark:focus:border-emerald-500 outline-none transition-colors resize-none"
                  placeholder="Requirement Details..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold rounded flex items-center justify-center gap-2 btn-hover transition-colors"
              >
                Submit to us
                <Send className="w-3 h-3" />
              </button>

            </form>
          </div>

          </div>
        </div>
      </div>
    </section>
  );
}
