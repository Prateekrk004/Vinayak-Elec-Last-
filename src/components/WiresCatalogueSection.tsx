/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Zap, Download, ExternalLink } from 'lucide-react';
import { WIRES_CATALOGUES } from '../data/wiresCataloguesData';

export default function WiresCatalogueSection() {
  const getPdfUrl = (path: string) => {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    const baseUrl = import.meta.env.BASE_URL || '/';
    if (baseUrl === './' || baseUrl === '') {
      return `./${cleanPath}`;
    }
    const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    return `${cleanBase}${cleanPath}`;
  };

  return (
    <section className="py-16 md:py-24 bg-[var(--bg-main)] relative" id="wires-cables">
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_75%)] pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-[var(--primary-color)] font-['Outfit'] font-semibold text-[0.9rem] uppercase tracking-[0.15em] block mb-3">
            Conduit & Transmission Resources
          </span>
          <h2 className="text-[2.25rem] sm:text-[2.5rem] font-bold font-['Outfit'] tracking-tight mb-4 text-[var(--text-primary)]">
            Authorized Wires Distributors
          </h2>
          <p className="text-[1.05rem] text-[var(--text-secondary)] max-w-[640px] mx-auto leading-relaxed">
            Browse and download premium wires and cables catalogues from trusted brands.
          </p>
          <div className="w-[60px] h-[3px] bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-gold)] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WIRES_CATALOGUES.map((brand, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              key={brand.name}
              className={`rounded-[var(--radius-md)] border border-[var(--border-color)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-md ${brand.glowClass}`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${brand.accentClass} flex items-center justify-center text-white shadow-inner`}>
                    <Zap className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <span className={`text-[0.7rem] font-bold tracking-wider px-2.5 py-1 rounded-full uppercase border ${brand.accentClass} bg-white/5`}>
                    {brand.badge}
                  </span>
                </div>

                <h3 className="text-[1.4rem] font-bold font-['Outfit'] text-[var(--text-primary)] mb-3 tracking-tight">
                  {brand.name}
                </h3>
                
                <p className="text-[var(--text-secondary)] text-[0.9rem] leading-relaxed mb-6 font-normal">
                  {brand.desc}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[var(--border-color)] font-normal">
                <a
                  href={getPdfUrl(brand.pdfPath)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded font-['Outfit'] font-semibold text-[0.85rem] bg-[var(--primary-color)] text-white hover:bg-[var(--primary-hover)] transition-all gap-1.5 outline-none hover:scale-[1.02]"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Catalogue</span>
                </a>
                
                <a
                  href={getPdfUrl(brand.pdfPath)}
                  download={brand.fileName}
                  className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded font-['Outfit'] font-semibold text-[0.85rem] border border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] transition-all gap-1.5 outline-none hover:scale-[1.02]"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
