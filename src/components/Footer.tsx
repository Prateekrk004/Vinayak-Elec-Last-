/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-footer)] border-t border-[var(--border-color)] pt-20 text-[var(--text-footer-primary)] transition-all duration-300">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
        <div className="max-w-[420px]">
          <div className="font-['Outfit'] font-extrabold text-[1.8rem] mb-6 tracking-tight">
            <span className="text-[var(--accent-gold)]">Vinayaka</span> Electrical Palace
          </div>
          <p className="text-[var(--text-footer-secondary)] text-[0.95rem] leading-relaxed mb-6">
            Leading wholesale and retail distributor of premium switches, wiring, decorative lighting, and structural safety products in Chickpet, Bengaluru.
          </p>

        </div>

        <div>
          <h5 className="font-['Outfit'] font-bold text-[1rem] uppercase tracking-wider text-[var(--accent-gold)] mb-6">Product Categories</h5>
          <ul className="flex flex-col gap-3">
            {['Wires & Armored Cables', 'GM Modular Switches', 'LED Decorative Lights', 'Energy Efficient Fans', 'Safety Isolators & MCBs'].map((item, idx) => (
              <li key={idx}>
                <a href="#products" className="text-[var(--text-footer-secondary)] hover:text-[var(--text-footer-primary)] text-[0.9rem] hover:pl-1 transition-all duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-['Outfit'] font-bold text-[1rem] uppercase tracking-wider text-[var(--accent-gold)] mb-6">Quick Links</h5>
          <ul className="flex flex-col gap-3">
            {['Home', 'About Us', 'Switch Studio', 'Our Services', 'Contact Support'].map((link, idx) => {
              const hrefs = ['#home', '#about', '#switch-studio', '#services', '#contact'];
              return (
                <li key={idx}>
                  <a href={hrefs[idx]} className="text-[var(--text-footer-secondary)] hover:text-[var(--text-footer-primary)] text-[0.9rem] hover:pl-1 transition-all duration-200">
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--border-footer)] py-6">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-[0.85rem] text-[var(--text-muted)] gap-4">
          <p>&copy; 2026 Vinayaka Electrical Palace. All Rights Reserved. Designed with Premium Switch Studio.</p>
          <p>Location: Chickpet, Bengaluru, KA</p>
        </div>
      </div>
    </footer>
  );
}
