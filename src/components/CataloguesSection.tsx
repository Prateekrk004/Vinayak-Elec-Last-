/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { FileText, Download, ExternalLink } from 'lucide-react';

interface CatalogueBrand {
  name: string;
  pdfPath: string;
  fileName: string;
  desc: string;
  badge: string;
  accentClass: string;
  glowClass: string;
}

const CATALOGUES: CatalogueBrand[] = [
  {
    name: 'Norisys',
    pdfPath: '/catalogs/switches/norisys.pdf',
    fileName: 'Norisys_Catalogue.pdf',
    desc: 'Premium engineering switches, high-end design plates, and innovative modular electrical assemblies.',
    badge: 'German Tech Premium',
    accentClass: 'from-slate-500 to-slate-800 border-slate-500/20 text-slate-400',
    glowClass: 'shadow-slate-500/10'
  },
  {
    name: 'Havells',
    pdfPath: '/catalogs/switches/havells.pdf',
    fileName: 'Havells_Catalogue.pdf',
    desc: 'Official modular series, premium plates, intelligent automation, and contemporary ceiling switches.',
    badge: 'Energy Efficient',
    accentClass: 'from-blue-600 to-cyan-500 border-blue-500/20 text-blue-400',
    glowClass: 'shadow-blue-500/10'
  },
  {
    name: 'HI-FI',
    pdfPath: '/catalogs/switches/hifi.pdf',
    fileName: 'Hifi_Catalogue.pdf',
    desc: 'Sleek premium budget-friendly modular panels, custom indicator plates, and robust electrical components.',
    badge: 'Smart Budget Series',
    accentClass: 'from-purple-600 to-indigo-500 border-purple-500/20 text-purple-400',
    glowClass: 'shadow-purple-500/10'
  },
  {
    name: 'Legrand',
    pdfPath: '/catalogs/switches/legrand.pdf',
    fileName: 'Legrand_Catalogue.pdf',
    desc: 'Sophisticated luxury switches, smart home controls, and high-quality international safety gear.',
    badge: 'Luxury French Styling',
    accentClass: 'from-amber-600 to-red-500 border-amber-500/20 text-amber-500',
    glowClass: 'shadow-amber-500/10'
  },
  {
    name: 'GM G7',
    pdfPath: '/catalogs/switches/gm-g7.pdf',
    fileName: 'GM_G7_Catalogue.pdf',
    desc: 'Luxury glass and metallic modular plates from the premium G7 series. Combined durability and class.',
    badge: 'Luxury Glass Modular',
    accentClass: 'from-teal-600 to-emerald-500 border-teal-500/20 text-teal-400',
    glowClass: 'shadow-teal-500/10'
  },
  {
    name: 'GM G9',
    pdfPath: '/catalogs/switches/gm-g9.pdf',
    fileName: 'GM_G9_Catalogue.pdf',
    desc: 'Ultra-thin sleek premium switchplates, neon indicator buttons, and modular frames of the supreme G9 series.',
    badge: 'Ultra-Thin Plates',
    accentClass: 'from-rose-600 to-orange-500 border-rose-500/20 text-rose-400',
    glowClass: 'shadow-rose-500/10'
  },
  {
    name: 'GM GX',
    pdfPath: '/catalogs/switches/gm-gx.pdf',
    fileName: 'GM_GX_Catalogue.pdf',
    desc: 'Modern, high-performance modular panels, robust frames, and standard user-friendly designs from the GX series.',
    badge: 'Modern Performance',
    accentClass: 'from-indigo-600 to-sky-500 border-indigo-500/20 text-indigo-400',
    glowClass: 'shadow-indigo-500/10'
  },
  {
    name: 'GM MCB',
    pdfPath: '/catalogs/switches/gm-mcb.pdf',
    fileName: 'GM_MCB_Catalogue.pdf',
    desc: 'High-safety miniature circuit breakers, distribution boards, and heavy-duty current protectors for complete safety.',
    badge: 'Premium Safety Gear',
    accentClass: 'from-red-600 to-pink-500 border-red-500/20 text-red-400',
    glowClass: 'shadow-red-500/10'
  },
  {
    name: 'GM FourFive',
    pdfPath: '/catalogs/switches/gm-fourfive.pdf',
    fileName: 'GM_FourFive_Catalogue.pdf',
    desc: 'Innovative, highly space-saving modular keys, custom plates, and luxury board fittings of the 45-degree angle series.',
    badge: 'Creative Space-saving',
    accentClass: 'from-amber-500 to-yellow-400 border-amber-500/20 text-amber-400',
    glowClass: 'shadow-amber-500/10'
  },
  {
    name: 'Anchor',
    pdfPath: '/catalogs/switches/Anchor.pdf',
    fileName: 'Anchor_Catalogue.pdf',
    desc: 'Panasonic-backed high durability switches, modular premium plates, sockets, and heavy-duty electric accessories.',
    badge: 'Panasonic Engineering',
    accentClass: 'from-red-600 to-rose-500 border-red-500/20 text-red-400',
    glowClass: 'shadow-red-500/10'
  },
  {
    name: 'Lisha',
    pdfPath: '/catalogs/switches/Lisha.pdf',
    fileName: 'Lisha_Catalogue.pdf',
    desc: 'Sleek modular switches, modern plates, multi-plug connectors, and budget-friendly household fittings.',
    badge: 'Reliable & Modular',
    accentClass: 'from-yellow-600 to-amber-500 border-yellow-500/20 text-yellow-500',
    glowClass: 'shadow-yellow-500/10'
  },
  {
    name: 'Schneider',
    pdfPath: '/catalogs/switches/Schneider.pdf',
    fileName: 'Schneider_Catalogue.pdf',
    desc: 'Global leader in digital energy management and elegant upscale architectural switches.',
    badge: 'French Luxury Tech',
    accentClass: 'from-emerald-600 to-green-500 border-emerald-500/20 text-emerald-400',
    glowClass: 'shadow-emerald-500/10'
  },
  {
    name: 'Indo Asian',
    pdfPath: '/catalogs/switches/indoasian.pdf',
    fileName: 'Indo_Asian_Catalogue.pdf',
    desc: 'High safety distribution boards, switches, protection gear, and modular socket solutions.',
    badge: 'Exceptional Safety standards',
    accentClass: 'from-orange-600 to-red-500 border-orange-500/20 text-orange-400',
    glowClass: 'shadow-orange-500/10'
  },
  {
    name: 'Fybros',
    pdfPath: '/catalogs/switches/fybros.pdf',
    fileName: 'Fybros_Catalogue.pdf',
    desc: 'Ultra-modern switch plates, energy-efficient smart touch panels, and flexible domestic copper components.',
    badge: 'Smart Living Series',
    accentClass: 'from-violet-600 to-indigo-500 border-violet-500/20 text-violet-400',
    glowClass: 'shadow-violet-500/10'
  }
];

export default function CataloguesSection() {
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
    <section className="py-16 md:py-24 bg-[var(--bg-section)] relative" id="catalogues">
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle,rgba(37,99,235,0.05)_0%,transparent_75%)] pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-[var(--primary-color)] font-['Outfit'] font-semibold text-[0.9rem] uppercase tracking-[0.15em] block mb-3">
            Store Resources
          </span>
          <h2 className="text-[2.25rem] sm:text-[2.5rem] font-bold font-['Outfit'] tracking-tight mb-4 text-[var(--text-primary)]">
            Authorized Switches Distributors
          </h2>
          <p className="text-[1.05rem] text-[var(--text-secondary)] max-w-[640px] mx-auto leading-relaxed">
            Browse, open, or download the latest collection of catalogues and brochure specifications from our leading partner companies.
          </p>
          <div className="w-[60px] h-[3px] bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-gold)] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CATALOGUES.map((brand, idx) => (
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
                    <FileText className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <span className={`text-[0.7rem] font-bold tracking-wider px-2.5 py-1 rounded-full uppercase border ${brand.accentClass} bg-white/5`}>
                    {brand.badge}
                  </span>
                </div>

                <h3 className="text-[1.4rem] font-bold font-['Outfit'] text-[var(--text-primary)] mb-3 tracking-tight">
                  {brand.name} Catalogue
                </h3>
                
                <p className="text-[var(--text-secondary)] text-[0.9rem] leading-relaxed mb-6 font-normal">
                  {brand.desc}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[var(--border-color)]">
                <a
                  href={getPdfUrl(brand.pdfPath)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded font-['Outfit'] font-semibold text-[0.85rem] bg-[var(--primary-color)] text-white hover:bg-[var(--primary-hover)] transition-all gap-1.5 outline-none hover:scale-[1.02]"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open PDF</span>
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
