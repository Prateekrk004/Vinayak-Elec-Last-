/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function About() {
  const whyChooseUs = [
    'Quality & Genuine Products Guaranteed',
    'Highly Competitive Wholesale & Retail Pricing',
    'Association with Renowned Global & National Brands',
    'Highly Friendly & Professional Customer Support',
    'Wide Range of Electrical & Smart Home Solutions'
  ];

  return (
    <section className="py-16 md:py-24 bg-[var(--bg-section)] relative" id="about">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-[var(--primary-color)] font-['Outfit'] font-semibold text-[0.9rem] uppercase tracking-[0.15em] block mb-3">About Us</span>
          <h2 className="text-[2.25rem] sm:text-[2.5rem] font-bold font-['Outfit'] tracking-tight mb-4 text-[var(--text-primary)]">
            One-Stop Destination For All Electrical Needs
          </h2>
          <div className="w-[60px] h-[3px] bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-gold)] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Welcome card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-[var(--radius-md)] border border-[var(--border-color)] bg-[var(--glass-bg)] backdrop-blur-md p-8 sm:p-12 shadow-md flex flex-col justify-between"
          >
            <div>
              <h3 className="text-[1.8rem] font-bold text-[var(--accent-gold)] font-['Outfit'] mb-6">Welcome to Vinayaka Electrical Palace</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                Established as a trusted cornerstone of electrical supplies in Huriopet, Chickpet, Bengaluru, Vinayaka Electrical Palace caters to homeowners, builders, interior designers, and industrial contractors alike.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                From wiring essentials to elegant premium smart modular switches and decorative lighting systems, we ensure you receive top-tier genuine products accompanied by expert professional guidance. Our store bridges the gap between luxury design and unmatched safety standards.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[var(--border-color)]">
              <div>
                <div className="font-['Outfit'] font-extrabold text-[2.25rem] text-[var(--text-primary)] leading-[1.1] mb-1.5">15+</div>
                <div className="text-[0.85rem] text-[var(--text-muted)] font-semibold uppercase tracking-wider">Trusted Brands</div>
              </div>
              <div>
                <div className="font-['Outfit'] font-extrabold text-[2.25rem] text-[var(--text-primary)] leading-[1.1] mb-1.5">5k+</div>
                <div className="text-[0.85rem] text-[var(--text-muted)] font-semibold uppercase tracking-wider">Genuine Items</div>
              </div>
              <div>
                <div className="font-['Outfit'] font-extrabold text-[2.25rem] text-[var(--text-primary)] leading-[1.1] mb-1.5">100%</div>
                <div className="text-[0.85rem] text-[var(--text-muted)] font-semibold uppercase tracking-wider">Customer Trust</div>
              </div>
            </div>
          </motion.div>

          {/* Why choose us card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[var(--radius-md)] border border-[var(--border-color)] bg-[var(--glass-bg)] backdrop-blur-md p-8 sm:p-12 shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="w-[54px] h-[54px] rounded-[var(--radius-sm)] bg-amber-500/10 border border-amber-500/20 text-[var(--accent-gold)] flex items-center justify-center text-xl mb-6">
                <i className="fa-solid fa-medal"></i>
              </div>
              <h4 className="text-[1.5rem] font-bold font-['Outfit'] text-[var(--text-primary)] mb-6">Why Customers Choose Us</h4>
              <ul className="flex flex-col gap-4">
                {whyChooseUs.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-[0.95rem] sm:text-[1rem] text-[var(--text-secondary)]">
                    <i className="fa-solid fa-circle-check text-[var(--accent-gold)] mt-1.5 text-[1rem]"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
