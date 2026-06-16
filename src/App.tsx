/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import SwitchStudio from './components/SwitchStudio';
import ProductsSection from './components/ProductsSection';
import CataloguesSection from './components/CataloguesSection';
import WiresCatalogueSection from './components/WiresCatalogueSection';
import Services from './components/Services';
import ContactMap from './components/ContactMap';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen text-[var(--text-primary)] transition-colors duration-300">
      {/* 1. Header & Navigation */}
      <Header />

      {/* Hero -> Product Catalogue & Brand Catalogues -> Switch Studio -> Company Intro -> Our Mission -> Services -> Contact */}
      <main>
        {/* 1. Logo and Catch Phrase (Hero Section with dynamic active switch showcase) */}
        <Hero />

        {/* 4. Company Introduction / About Section with Huriopet Chickpet details */}
        <About />

        {/* 2.5 Brand Catalogues resource downloads */}
        <CataloguesSection />

        {/* 2.6 Wires & Cables Catalogue */}
        <WiresCatalogueSection />

        {/* 2. Product Catalogue showing top level categories from drive organization */}
        <ProductsSection />

        {/* 3. Switch Studio (GM Modular Customizer) */}
        <SwitchStudio />

        {/* 5. Our Mission Standalone Section */}
        <Mission />

        {/* 6. Services & value adds */}
        <Services />

        {/* 7. Contact Details and Real maps frame */}
        <ContactMap />
      </main>

      {/* 8. Footer banner */}
      <Footer />

    </div>
  );
}
