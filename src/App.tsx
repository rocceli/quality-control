/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import CalibrationLabs from './components/CalibrationLabs';
import Certifications from './components/Certifications';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import NDTLabs from './components/NDTlabs';
import Blog from './components/Blog';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-300 relative">
      <Navbar />
      <main className="flex-grow pt-8">
        <Hero />
        <TrustStrip />
        <CalibrationLabs />
        <NDTLabs />
        <Services />
        <Certifications />
        <Blog />
        <Location />
        <Contact />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5, type: 'spring' }}
        href="https://wa.me/254722692450"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe57] text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-sm ml-0 group-hover:ml-2">Chat with us</span>
      </motion.a>
    </div>
  );
}
