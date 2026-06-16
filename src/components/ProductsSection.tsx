/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS, Product } from '../data/productsData';

// Distinct 9 categories
const CATEGORY_LIST = [
  { name: 'Switches', icon: 'fa-solid fa-toggle-on' },
  { name: 'Wires & Cables', icon: 'fa-solid fa-bolt' },
  { name: 'Lighting', icon: 'fa-solid fa-lightbulb' },
  { name: 'Fans', icon: 'fa-solid fa-fan' },
  { name: 'Water Heaters', icon: 'fa-solid fa-temperature-high' },
  { name: 'Earthing materials', icon: 'fa-solid fa-plug' },
  { name: 'MCBs & Distribution', icon: 'fa-solid fa-box-open' },
  { name: 'Modular Solutions', icon: 'fa-solid fa-border-all' },
  { name: 'Smart Home Products', icon: 'fa-solid fa-house-laptop' }
];

// Deterministic keywords-based categorization mapping to group products category-first
function getMappedCategory(p: Product): string {
  const cat = (p.category || '').toUpperCase();
  const sub = (p.subcategory || '').toUpperCase();
  const name = (p.name || '').toUpperCase();
  const desc = (p.description || '').toUpperCase();

  // 1. Smart Home Products
  if (
    name.includes('SMART') || name.includes('TOUCH') || name.includes('WIFI') || name.includes('SENSOR') || name.includes('AUTOMATION') ||
    sub.includes('SMART') || sub.includes('SENSOR') || sub.includes('AUTOMATION') ||
    desc.includes('SMART') || desc.includes('AUTOMATION')
  ) {
    return 'Smart Home Products';
  }

  // 2. MCBs & Distribution
  if (
    name.includes('MCB') || name.includes('M.C.B.') || name.includes('MCCB') || name.includes('RCCB') || name.includes('ELCB') ||
    name.includes('DISTRIBUTION') || name.includes('DB') || name.includes('ISOLATOR') || name.includes('DISTRIBUTION BOX') || name.includes('FUSE') ||
    sub.includes('MCB') || sub.includes('DISTRIBUTION') || sub.includes('DB')
  ) {
    return 'MCBs & Distribution';
  }

  // 3. Modular Solutions
  if (
    name.includes('MODULAR') || name.includes('COVER PLATE') || name.includes('GRID') || name.includes('FRAME') ||
    sub.includes('MODULAR') || sub.includes('PLATE') || sub.includes('FRAME')
  ) {
    return 'Modular Solutions';
  }

  // 4. Switches
  if (
    cat.includes('SWITCH') || name.includes('SWITCH') || name.includes('SOCKET') || name.includes('DIMMER') || name.includes('REGULATOR') ||
    sub.includes('SWITCH') || sub.includes('SOCKET')
  ) {
    return 'Switches';
  }

  // 5. Wires & Cables
  if (
    cat.includes('WIRE') || cat.includes('CABLE') || name.includes('CABLE') ||
    (name.includes('WIRE') && !name.includes('EARTHING'))
  ) {
    return 'Wires & Cables';
  }

  // 6. Lighting
  if (
    cat.includes('LIGHT') || cat.includes('LAMP') || cat.includes('BULB') ||
    name.includes('LIGHT') || name.includes('LAMP') || name.includes('BULB') || name.includes('CANDELA') || name.includes('SPOT') || name.includes('COB') || name.includes('STRIP') || name.includes('LED') || name.includes('BATTEN') || name.includes('CHANDELIER') || name.includes('DOWNLIGHT') || name.includes('PANEL') ||
    sub.includes('LIGHT') || sub.includes('LAMP') || sub.includes('BULB') || sub.includes('LED') || sub.includes('COB') || sub.includes('DOWNLIGHT')
  ) {
    return 'Lighting';
  }

  // 7. Fans
  if (
    cat.includes('FAN') || name.includes('FAN') || sub.includes('FAN')
  ) {
    return 'Fans';
  }

  // 8. Water Heaters
  if (
    cat.includes('HEATER') || cat.includes('GEYSER') ||
    name.includes('HEATER') || name.includes('GEYSER') || name.includes('WATER HEATER') ||
    sub.includes('HEATER') || sub.includes('GEYSER') || desc.includes('GEYSER')
  ) {
    return 'Water Heaters';
  }

  // 9. Safety Products (mapped to Earthing materials)
  if (
    name.includes('SAFETY') || name.includes('SHIELD') || name.includes('PROTECTION') || name.includes('ARRESTER') || name.includes('SPIKE') || name.includes('GARD') || name.includes('GUARD') ||
    desc.includes('SAFETY') || desc.includes('PROTECTION')
  ) {
    return 'Earthing materials';
  }

  // 10. Earthing materials
  if (
    cat.includes('EARTHING') || cat.includes('ACCESSORIES') || cat.includes('GOODS') ||
    name.includes('COPPER') || name.includes('GI ') || name.includes('LUG') || name.includes('STRIP') || name.includes('BOX') || name.includes('ACCESSORY') ||
    sub.includes('EARTHING') || sub.includes('ACCESSORIES')
  ) {
    return 'Earthing materials';
  }

  // Fallbacks based on main categories
  if (cat.includes('SWITCH')) return 'Switches';
  if (cat.includes('WIRE') || cat.includes('CABLE')) return 'Wires & Cables';
  if (cat.includes('LIGHT') || cat.includes('LAMP')) return 'Lighting';
  if (cat.includes('FAN')) return 'Fans';
  if (cat.includes('HEATER')) return 'Water Heaters';
  if (cat.includes('INDUSTRIAL')) return 'MCBs & Distribution';
  if (cat.includes('EARTHING')) return 'Earthing materials';

  return 'Earthing materials';
}

export default function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Switches');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [displayCount, setDisplayCount] = useState<number>(18);

  // Map each product to its respective category for category-first grouping
  const mappedProducts = useMemo(() => {
    return PRODUCTS.map(p => ({
      ...p,
      mappedCategory: getMappedCategory(p)
    }));
  }, []);

  // Compute counts per category chip dynamically matching active search or raw state
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    CATEGORY_LIST.forEach(cat => {
      counts[cat.name] = mappedProducts.filter(p => p.mappedCategory === cat.name).length;
    });
    return counts;
  }, [mappedProducts]);

  // Handle global search across entire inventory (by Name, Brand from subcategory, Category, or Keywords)
  const filteredProducts = useMemo(() => {
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return mappedProducts.filter(p => {
        const brand = p.subcategory || '';
        return (
          p.name.toLowerCase().includes(q) ||
          brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.mappedCategory.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
        );
      });
    }

    // Browsing Category - combined view of all brands together
    return mappedProducts.filter(p => p.mappedCategory === selectedCategory);
  }, [mappedProducts, selectedCategory, searchQuery]);

  // Slice visible products for pagination
  const visibleProducts = useMemo(() => {
    return filteredProducts.slice(0, displayCount);
  }, [filteredProducts, displayCount]);

  const loadMore = () => {
    setDisplayCount(prev => prev + 18);
  };

  const getWhatsAppLink = (prodName: string) => {
    const text = `Hi Vinayaka Electrical Palace, I am interested in [${prodName}]. Please provide more details.`;
    return `https://wa.me/917411279019?text=${encodeURIComponent(text)}`;
  };

  // Premium fallback image based on mapped category
  const getCategoryFallbackImage = (category: string, idx: number) => {
    const images: Record<string, string[]> = {
      'Switches': [
        'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=400&q=80'
      ],
      'Wires & Cables': [
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=400&q=80'
      ],
      'Lighting': [
        'https://images.unsplash.com/photo-1494438639946-1ebd1d2038b5?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1565538810844-1e119d81a207?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=400&q=80'
      ],
      'Fans': [
        'https://images.unsplash.com/photo-1618945081914-7f44d180c4fa?auto=format&fit=crop&w=400&q=80'
      ],
      'Water Heaters': [
        'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=400&q=80'
      ],
      'MCBs & Distribution': [
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80'
      ]
    };

    const list = images[category] || [
      'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?auto=format&fit=crop&w=400&q=80'
    ];
    return list[idx % list.length];
  };

  return (
    <section className="py-12 md:py-20 bg-[var(--bg-main)]" id="products">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-[2rem] sm:text-[2.5rem] font-bold font-['Outfit'] tracking-tight mb-3 text-[var(--text-primary)]">
            Product Catalogue
          </h2>
          <p className="text-[0.95rem] text-[var(--text-secondary)] max-w-[620px] mx-auto leading-relaxed">
            Leading wholesale and retail distributor of certified electrical commodities, organized neatly by category for a fast browsing experience.
          </p>
          <div className="w-[50px] h-[3px] bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-gold)] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 1. Global Search Bar */}
        <div className="max-w-[680px] mx-auto mb-10">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-gold)] rounded-xl blur opacity-15 group-hover:opacity-25 transition duration-500"></div>
            <div className="relative flex items-center bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-2 shadow-md transition-all duration-300 focus-within:border-[var(--accent-gold)]">
              <i className="fa-solid fa-magnifying-glass text-lg text-[var(--text-muted)] ml-3.5 mr-2.5"></i>
              <input
                type="text"
                placeholder="Search by product name, brand, core category, or keywords..."
                className="w-full bg-transparent border-none text-[var(--text-primary)] text-[0.95rem] outline-none py-2 placeholder-[var(--text-muted)] font-['Inter']"
                value={searchQuery}
                onChange={(e) => { 
                  setSearchQuery(e.target.value); 
                  setDisplayCount(18);
                }}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer outline-none mr-1"
                  aria-label="Clear Search Query"
                >
                  <i className="fa-solid fa-circle-xmark text-lg"></i>
                </button>
              )}
            </div>
          </div>
          {searchQuery && (
            <div className="text-center mt-3 text-xs sm:text-sm text-[var(--text-secondary)] font-medium">
              <i className="fa-solid fa-filter text-[var(--accent-gold)] mr-1.5 animate-pulse"></i>
              Global Search Results for <span className="text-[var(--text-primary)] font-bold">"{searchQuery}"</span>: matched <span className="text-[var(--accent-gold)] font-bold">{filteredProducts.length}</span> items across all brands
            </div>
          )}
        </div>

        {/* 2. Compact Category Chips */}
        <div className="mb-10 text-center">
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 max-w-[1020px] mx-auto">
            {CATEGORY_LIST.map(cat => {
              const count = categoryCounts[cat.name] || 0;
              const isActive = selectedCategory === cat.name && !searchQuery.trim();

              return (
                <button
                  key={cat.name}
                  onClick={() => {
                    setSelectedCategory(cat.name);
                    setSearchQuery(''); // Clear search on explicit category click to avoid confusion
                    setDisplayCount(18);
                  }}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border cursor-pointer flex items-center gap-2 transition-all duration-200 outline-none select-none
                    ${isActive 
                      ? 'bg-[var(--primary-color)] text-white border-[var(--primary-color)] font-extrabold shadow-sm'
                      : 'bg-[var(--bg-card)] text-[var(--text-secondary)] border-[var(--border-color)] hover:border-[var(--accent-gold)] hover:text-[var(--text-primary)]'
                    }
                  `}
                >
                  <i className={`${cat.icon} text-xs ${isActive ? 'text-white' : 'text-[var(--accent-gold)]'}`}></i>
                  <span>{cat.name}</span>
                  <span className={`text-[0.65rem] px-1.5 py-0.5 rounded-full font-bold
                    ${isActive ? 'bg-white/20 text-white' : 'bg-[var(--bg-section)] text-[var(--text-muted)]'}
                  `}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
          {!searchQuery.trim() && (
            <div className="text-center mt-4 text-xs sm:text-sm text-[var(--text-secondary)] font-medium">
              Active Category: <span className="text-[var(--text-primary)] font-bold">{selectedCategory}</span> &mdash; displaying <span className="text-[var(--accent-gold)] font-bold">{filteredProducts.length}</span> premium items
            </div>
          )}
        </div>

        {/* Empty Catalog State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 border border-dashed border-[var(--border-color)] rounded-xl bg-[var(--bg-card)]">
            <i className="fa-solid fa-face-meh text-4xl text-[var(--text-muted)] mb-3"></i>
            <h3 className="text-lg font-bold font-['Outfit'] text-[var(--text-primary)] mb-1.5">No Products Match Your Search</h3>
            <p className="text-[var(--text-secondary)] text-sm">Please try another term or browse category segments above.</p>
          </div>
        )}

        {/* 3. Products Grid - Medium, compact, highly balanced grid with multiple items visible on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5">
          <AnimatePresence mode="popLayout">
            {visibleProducts.map((prod, idx) => {
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={prod.id}
                  id={`product-card-${prod.id}`}
                  className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between p-3.5 sm:p-4 shadow-sm group"
                >
                  {/* Container with Image only */}
                  <div className="bg-[rgba(255,255,255,0.02)] h-[120px] sm:h-[135px] rounded-lg mb-3 border border-dashed border-[var(--border-color)]/60 flex items-center justify-center p-2 relative overflow-hidden">
                    <img
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      src={`https://drive.google.com/thumbnail?sz=w400-h400&id=${prod.id}`}
                      alt={prod.name}
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = getCategoryFallbackImage(prod.mappedCategory, idx);
                      }}
                    />
                  </div>

                  {/* Product title only */}
                  <h4 className="text-[0.85rem] sm:text-[0.9rem] font-bold font-['Outfit'] text-[var(--text-primary)] mb-4 line-clamp-2 leading-tight h-9 sm:h-10 text-center group-hover:text-[var(--primary-color)] transition-colors">
                    {prod.name}
                  </h4>

                  {/* Premium red WhatsApp button only */}
                  <a
                    href={getWhatsAppLink(prod.name)}
                    target="_blank"
                    className="w-full bg-[var(--button-red)] text-white py-2 rounded text-[0.75rem] font-sans font-semibold flex items-center justify-center gap-1 hover:bg-[var(--button-red-hover)] hover:scale-102 transition-all outline-none"
                    rel="noopener"
                    id={`whatsapp-btn-${prod.id}`}
                  >
                    <i className="fa-brands fa-whatsapp text-xs"></i>
                    <span>Enquire</span>
                  </a>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {filteredProducts.length > displayCount && (
          <div className="text-center mt-10">
            <button
              onClick={loadMore}
              className="py-2.5 px-6 text-sm font-semibold font-['Outfit'] rounded-full border border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] hover:-translate-y-0.5 transition-all duration-200 outline-none cursor-pointer inline-flex items-center gap-2"
            >
              <span>Load More Products</span>
              <i className="fa-solid fa-chevron-down text-xs text-[var(--accent-gold)] animate-bounce"></i>
            </button>
          </div>
        )}
        
      </div>
    </section>
  );
}
