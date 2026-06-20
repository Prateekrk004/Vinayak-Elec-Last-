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
    name: 'Polycab Wires & Cables',
    pdfPath: '/catalogs/wires/polycab.pdf',
    fileName: 'Polycab_Wires_Cables_Catalogue.pdf',
    desc: 'Eco-friendly green wires, lead-free heat resistant cables, multi-strand flexible conductors, and advanced heavy-duty structural power lines.',
    badge: 'Lead-Free Green',
    accentClass: 'from-amber-600 to-yellow-500 border-amber-500/20 text-amber-500',
    glowClass: 'shadow-amber-500/10'
  },
  {
    name: 'Nex India Wires & Cables',
    pdfPath: '/catalogs/wires/nexindia.pdf',
    fileName: 'NexIndia_Wires_Cables_Catalogue.pdf',
    desc: 'High-quality industrial and domestic electrical wires, multi-strand flexible cords, heat resistant cables, and copper conductor transmission lines.',
    badge: 'Premium Durability',
    accentClass: 'from-purple-600 to-indigo-500 border-purple-500/20 text-purple-400',
    glowClass: 'shadow-purple-500/10'
  },
  {
    name: 'V-Guard Wires & Cables',
    pdfPath: '/catalogs/wires/vguard.pdf',
    fileName: 'VGuard_Wires_Cables_Catalogue.pdf',
    desc: 'Advanced triple-layered PVC insulated domestic wires, flame-retardant heat-resistant housing cables with superior moisture and voltage shield.',
    badge: 'Triple-Layer Guard',
    accentClass: 'from-rose-600 to-orange-500 border-rose-500/20 text-rose-400',
    glowClass: 'shadow-rose-500/10'
  }
];
