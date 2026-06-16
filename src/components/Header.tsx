/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Synchronize scroll active state
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'products', 'catalogues', 'wires-cables', 'switch-studio', 'about', 'mission', 'services', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.clientHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getMappedActive = (sectionId: string) => {
    if (sectionId === 'mission' || sectionId === 'services') return 'about';
    return sectionId;
  };

  const navLinks = [
    { href: '#home', id: 'home', label: 'Home' },
    { href: '#catalogues', id: 'catalogues', label: 'Switches Distributors' },
    { href: '#wires-cables', id: 'wires-cables', label: 'Wire Distributors' },
    { href: '#products', id: 'products', label: 'Product Catalogue' },
    { href: '#switch-studio', id: 'switch-studio', label: 'Switch Studio', highlight: true },
    { href: '#about', id: 'about', label: 'About' },
    { href: '#contact', id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--bg-header)] backdrop-blur-md border-b border-[var(--border-color)] shadow-[var(--header-shadow)] transition-all duration-300">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 h-[64px] sm:h-[76px] md:h-[88px] lg:h-[108px] xl:h-[110px] flex items-center justify-between gap-4">
        {/* Logo with interactive styling using the new direct image URL */}
        <a href="#home" className="flex items-center shrink-0" aria-label="Vinayaka Electrical Palace Home">
          <img
            src="https://i.ibb.co/gLHmD93Y/Whats-App-Image-2026-06-16-at-12-34-44-removebg-preview-1.png"
            alt="Vinayaka Electrical Palace Logo"
            className="h-[105px] sm:h-[130px] md:h-[155px] lg:h-[185px] xl:h-[195px] w-auto max-h-none object-contain scale-[1.25] origin-center -my-[20px] sm:-my-[27px] md:-my-[33px] lg:-my-[38px] xl:-my-[42px] transition-all duration-300 hover:scale-[1.3] drop-shadow-md"
            referrerPolicy="no-referrer"
            id="header-logo"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-4 xl:gap-6">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`font-['Outfit'] font-medium text-[0.85rem] xl:text-[0.92rem] tracking-wide transition-all relative py-1.5 px-1.5 xl:px-2 duration-200 whitespace-nowrap
                    ${link.highlight ? 'text-[var(--accent-gold)] hover:text-amber-500' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}
                    ${getMappedActive(activeSection) === link.id ? 'text-[var(--text-primary)] font-semibold border-b-2 border-[var(--primary-color)]' : ''}
                    ${link.highlight && getMappedActive(activeSection) === link.id ? 'border-b-2 border-[var(--accent-gold)]' : ''}
                  `}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Quick Utility Side Actions */}
        <div className="flex items-center gap-3 sm:gap-4 font-normal shrink-0">
          <a
            href="https://wa.me/917411279019?text=Hello%20Vinayaka%20Electrical%20Palace%2C%20I'm%20visiting%20your%20website%20and%20have%20an%20inquiry."
            target="_blank"
            className="bg-[var(--whatsapp-green)] text-white px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-[var(--radius-sm)] font-['Outfit'] font-semibold text-[0.8rem] sm:text-[0.9rem] flex items-center gap-1.5 sm:gap-2 hover:bg-[var(--whatsapp-hover)] shadow-md transition-all duration-300"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-whatsapp text-sm"></i>
            <span className="hidden xs:inline sm:inline">Enquire</span>
          </a>

          {/* Toggle Button for mobile drawer */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col justify-between w-6 h-4.5 cursor-pointer lg:hidden select-none outline-none"
            aria-label="Toggle navigation menu"
          >
            <span className={`w-full h-0.5 bg-[var(--text-primary)] transition-all duration-300 ${mobileMenuOpen ? 'transform translate-y-[8px] rotate-45' : ''}`}></span>
            <span className={`w-full h-0.5 bg-[var(--text-primary)] transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-full h-0.5 bg-[var(--text-primary)] transition-all duration-300 ${mobileMenuOpen ? 'transform -translate-y-[8px] -rotate-45' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Drawer menu for Mobile devices */}
      <div className={`fixed top-[64px] sm:top-[76px] md:top-[88px] lg:top-[108px] xl:top-[110px] left-0 w-full h-[calc(100vh-64px)] sm:h-[calc(100vh-76px)] md:h-[calc(100vh-88px)] lg:h-[calc(100vh-108px)] xl:h-[calc(100vh-110px)] bg-[var(--bg-main)] border-t border-[var(--border-color)] p-8 sm:p-10 transition-all duration-300 lg:hidden z-[999]
        ${mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
      `}>
        <ul className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-['Outfit'] font-medium text-xl block transition-all duration-200
                  ${link.highlight ? 'text-[var(--accent-gold)]' : 'text-[var(--text-secondary)]'}
                  ${getMappedActive(activeSection) === link.id ? 'text-[var(--text-primary)] font-bold' : ''}
                `}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
