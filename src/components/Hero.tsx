/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative pt-[120px] sm:pt-[140px] md:pt-[160px] pb-16 md:pb-24 min-h-[85vh] flex items-center bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.08)_0%,transparent_50%),radial-gradient(circle_at_10%_80%,rgba(212,175,55,0.04)_0%,transparent_50%)] overflow-hidden" id="home">
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(37,99,235,0.1)_0%,transparent_70%)] pointer-events-none z-1"></div>
      
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 w-full text-center flex flex-col items-center z-10 relative">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-3.5 py-1.5 bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--accent-gold)] font-['Outfit'] font-semibold text-[0.8rem] sm:text-[0.85rem] rounded-full mb-4 sm:mb-6 tracking-wider uppercase"
        >
          Premium Electrical Solutions
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[2.25rem] xs:text-[2.75rem] sm:text-[3.5rem] lg:text-[4.75rem] font-bold font-['Outfit'] leading-[1.12] mb-6 tracking-tight max-w-4xl text-[var(--primary-color)] bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-gold)] bg-clip-text [-webkit-text-fill-color:transparent]"
        >
          Vinayak Electrical Palace
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[1.05rem] sm:text-[1.15rem] text-[var(--text-secondary)] mb-8 sm:mb-10 leading-relaxed font-normal max-w-2xl"
        >
          At <strong>Vinayaka Electrical Palace</strong>, we supply trusted, industry-leading electrical goods and accessories for residential, commercial, and industrial spaces under one roof.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-8"
        >
          <a href="#products" className="inline-flex items-center justify-center px-8 py-3.5 font-semibold text-[1rem] bg-[var(--primary-color)] text-white rounded-[var(--radius-sm)] shadow-[0_4px_14px_var(--primary-glow)] hover:bg-[var(--primary-hover)] hover:-translate-y-0.5 transition-all w-full sm:w-auto gap-2.5">
            <span>Explore Products</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
          <a href="https://wa.me/917411279019?text=Hi%20Vinayaka%20Electrical%20Palace%2C%20I%20would%20like%20to%20enquire%20about%20your%20products." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3.5 font-semibold text-[1rem] border border-[var(--whatsapp-green)] text-[var(--whatsapp-green)] rounded-[var(--radius-sm)] hover:bg-[var(--whatsapp-green)] hover:text-white hover:-translate-y-0.5 transition-all w-full sm:w-auto gap-2.5">
            <i className="fa-brands fa-whatsapp text-lg"></i>
            <span>Chat on WhatsApp</span>
          </a>
        </motion.div>

        {/* Authorized Brands Distribution Panel */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="w-full max-w-4xl mt-6 mb-12 px-5 py-5 sm:py-6 bg-[rgba(243,234,224,0.45)] border border-[var(--border-color)] rounded-[var(--radius-md)] text-center relative overflow-hidden shadow-sm"
        >
          <div className="absolute top-0 left-0 w-1 sm:w-1.5 h-full bg-[var(--accent-gold)]"></div>
          <span className="inline-flex items-center gap-1.5 text-[0.7rem] sm:text-[0.75rem] font-extrabold uppercase tracking-[0.16em] text-[var(--accent-gold)] mb-2.5 font-['Outfit']">
            <i className="fa-solid fa-shield-check"></i> Authorized Distributors
          </span>
          <p className="text-[0.9rem] sm:text-[1rem] text-[var(--text-secondary)] leading-relaxed font-normal max-w-3xl mx-auto">
            We are proud authorized distributors for industry-leading brands including{' '}
            <strong className="text-[var(--text-primary)] font-bold">GM</strong>,{' '}
            <strong className="text-[var(--text-primary)] font-bold">GOLDMEDAL</strong>,{' '}
            <strong className="text-[var(--text-primary)] font-bold">LISHA</strong>,{' '}
            <strong className="text-[var(--text-primary)] font-bold">V-GUARD</strong>,{' '}
            <strong className="text-[var(--text-primary)] font-bold">RR Wires And Cables</strong>,{' '}
            <strong className="text-[var(--text-primary)] font-bold">Hi-Fi</strong>,{' '}
            <strong className="text-[var(--text-primary)] font-bold">POLYCAB</strong>,{' '}
            <strong className="text-[var(--text-primary)] font-bold">Schneider</strong>,{' '}
            <strong className="text-[var(--text-primary)] font-bold">Finolex</strong>,{' '}
            <strong className="text-[var(--text-primary)] font-bold">Havells</strong>,{' '}
            <strong className="text-[var(--text-primary)] font-bold">Legrand</strong>,{' '}
            <strong className="text-[var(--text-primary)] font-bold">Anchor</strong>, and{' '}
            <strong className="text-[var(--text-primary)] font-bold">Philips</strong>.
          </p>
        </motion.div>

        {/* Stats bar exactly matching reference image */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="w-full max-w-4xl border-t border-[var(--border-color)] pt-8 pb-4 flex flex-row items-center justify-around gap-2 text-center"
        >
          <div className="flex flex-col items-center flex-1">
            <span className="text-[2.25rem] sm:text-[3rem] font-bold text-[var(--logo-text-color)] tracking-tight font-['Outfit']">15+</span>
            <span className="text-[0.65rem] sm:text-[0.75rem] font-extrabold text-[var(--logo-stand-color)] tracking-[0.12em] uppercase mt-1 sm:mt-2 font-['Outfit']">Trusted Brands</span>
          </div>
          <div className="h-10 sm:h-12 w-px bg-[var(--border-color)] self-center opacity-60"></div>
          <div className="flex flex-col items-center flex-1">
            <span className="text-[2.25rem] sm:text-[3rem] font-bold text-[var(--logo-text-color)] tracking-tight font-['Outfit']">5k+</span>
            <span className="text-[0.65rem] sm:text-[0.75rem] font-extrabold text-[var(--logo-stand-color)] tracking-[0.12em] uppercase mt-1 sm:mt-2 font-['Outfit']">Genuine Items</span>
          </div>
          <div className="h-10 sm:h-12 w-px bg-[var(--border-color)] self-center opacity-60"></div>
          <div className="flex flex-col items-center flex-1">
            <span className="text-[2.25rem] sm:text-[3rem] font-bold text-[var(--logo-text-color)] tracking-tight font-['Outfit']">100%</span>
            <span className="text-[0.65rem] sm:text-[0.75rem] font-extrabold text-[var(--logo-stand-color)] tracking-[0.12em] uppercase mt-1 sm:mt-2 font-['Outfit']">Customer Trust</span>
          </div>
        </motion.div>
      </div>


    </section>
  );
}
