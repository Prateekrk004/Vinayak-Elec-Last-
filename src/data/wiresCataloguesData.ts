/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface WiresCatalogueBrand {
  name: string;
  pdfPath: string;
  fileName: string;
  desc: string;
  badge: string;
  accentClass: string;
  glowClass: string;
}

export const WIRES_CATALOGUES: WiresCatalogueBrand[] = [
  {
    name: 'Havells Wires & Cables',
    pdfPath: '/catalogs/wires/havells.pdf',
    fileName: 'Havells_Wires_Cables_Catalogue.pdf',
    desc: 'Official HRFR, FR-LSH, and zero halogen flame-retardant domestic wires, multi-core industrial cables, and high-conductivity copper conduits.',
    badge: 'Flame Retardant HRFR',
    accentClass: 'from-blue-600 to-indigo-500 border-blue-500/20 text-blue-400',
    glowClass: 'shadow-blue-500/10'
  },
  {
    name: 'Finolex Wires & Cables',
    pdfPath: '/catalogs/wires/finolex.pdf',
    fileName: 'Finolex_Wires_Cables_Catalogue.pdf',
    desc: 'Premium quality PVC insulated electrical wires, 3-core flat submersible cables, telephone cables, and copper shielded coaxial TV wires.',
    badge: 'Extra Flexible Copper',
    accentClass: 'from-red-600 to-orange-500 border-red-500/20 text-red-400',
    glowClass: 'shadow-red-500/10'
  },
  {
    name: 'Polycab Wires & Cables',
    pdfPath: '/catalogs/wires/polycab.pdf',
    fileName: 'Polycab_Wires_Cables_Catalogue.pdf',
    desc: 'Eco-friendly green wires, lead-free heat resistant cables, multi-strand flexible conductors, and advanced heavy-duty structural power lines.',
    badge: 'Lead-Free Green',
    accentClass: 'from-amber-600 to-yellow-500 border-amber-500/20 text-amber-500',
    glowClass: 'shadow-amber-500/10'
  }
];
