/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function Services() {
  const serviceCards = [
    {
      icon: 'fa-comments',
      title: 'Expert Technical Consultation',
      desc: 'Confused about load requirements, switch types, or layout design? Our on-ground specialists offer professional structural wiring and lighting sizing advisory services for building layouts.'
    },
    {
      icon: 'fa-building-user',
      title: 'Wholesale Bulk Supply',
      desc: 'Partnering with builders, architects, hoteliers, and interior decorators across Karnataka. Get premium wholesale rates with comprehensive logistics and credit-approved bulk packages.'
    },
    {
      icon: 'fa-award',
      title: 'Genuine Brand Sourcing',
      desc: 'Zero compromises on safety. We deal strictly in OEM original merchandise direct from manufacturer inventories, complete with brand warranty certificates and testing assurances.'
    },
    {
      icon: 'fa-truck-ramp-box',
      title: 'On-Site & Timely Delivery',
      desc: 'Ensuring your projects never face downtime. We coordinate lightning-fast deliveries to construction sites within Bengaluru and surrounding commercial hubs with utmost diligence.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[var(--bg-section)]" id="services">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-[var(--primary-color)] font-['Outfit'] font-semibold text-[0.9rem] uppercase tracking-[0.14em] block mb-3">Expert Assistance</span>
          <h2 className="text-[2.25rem] sm:text-[2.5rem] font-bold font-['Outfit'] tracking-tight mb-4 text-[var(--text-primary)]">
            Services & Value Additions
          </h2>
          <div className="w-[60px] h-[3px] bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-gold)] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCards.map((card, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={idx}
              className="rounded-[var(--radius-md)] border border-[var(--border-color)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] p-8 shadow-md flex flex-col group transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="w-[60px] h-[60px] rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-2xl text-[var(--primary-color)] mb-6 transition-all duration-300 group-hover:bg-[var(--primary-color)] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_4px_14px_rgba(37,99,235,0.3)]">
                <i className={`fa-solid ${card.icon}`}></i>
              </div>
              <h4 className="text-[1.3rem] font-bold font-['Outfit'] text-[var(--text-primary)] mb-3 leading-snug">
                {card.title}
              </h4>
              <p className="text-[var(--text-secondary)] text-[0.95rem] leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
