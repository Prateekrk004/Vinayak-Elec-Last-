/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function Mission() {
  return (
    <section className="py-16 md:py-24 bg-[var(--bg-main)] relative overflow-hidden" id="mission">
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle,rgba(251,191,36,0.05)_0%,transparent_75%)] pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-[var(--primary-color)] font-['Outfit'] font-semibold text-[0.9rem] uppercase tracking-[0.15em] block mb-3">
            Our Purpose
          </span>
          <h2 className="text-[2.25rem] sm:text-[2.5rem] font-bold font-['Outfit'] tracking-tight mb-4 text-[var(--text-primary)]">
            Our Mission
          </h2>
          <div className="w-[60px] h-[3px] bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-gold)] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-[var(--radius-md)] border border-amber-500/20 bg-gradient-to-br from-blue-500/10 to-amber-500/5 p-8 sm:p-12 shadow-md relative overflow-hidden text-center flex flex-col items-center animate-fade-in"
          >
            <div className="w-[70px] h-[70px] rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-500/30 text-[var(--accent-gold)] flex items-center justify-center text-3xl mb-6 shadow-inner">
              <i className="fa-solid fa-bullseye animate-pulse"></i>
            </div>
            
            <p className="text-[1.2rem] sm:text-[1.35rem] font-semibold text-[var(--text-primary)] font-['Outfit'] mb-6 max-w-2xl leading-relaxed text-center">
              "To deliver high-quality electrical products with trust, continuous innovation, and dedicated customer satisfaction."
            </p>
            
            <p className="text-[var(--text-secondary)] text-[1rem] leading-relaxed max-w-3xl font-normal text-center">
              We strive to bring the safest, most aesthetic, and energy-efficient electrical solutions to your doorstep. Our vision is to elevate daily living spaces into modern sanctuaries of convenience and premium design.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
