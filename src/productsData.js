export const GAZETTE = 'S.O. 2346E)  26th May, 2025';

export const PRODUCTS = [
  {
    brand: 'ZIGMAR',
    displayName: 'ZIGMAR',
    specification: 'Protein hydrolysate (Amino acids 5%) (Plant source) (Powder) ZIGMAR',
    category: 'Protein Hydrolysates and Amino Acids',
    crops: ['Tomato'],
    dosage: ['Three foliar applications at 2.5 kg/ha'],
    gazette: '26th May, 2025 S.O. 2346 (E)',
    composition: [
      '(i) Free amino acids per cent. by weight, minimum 5',
      '(ii) Specific gravity 0.90 ± 0.02',
      '(iii) pH (5% aqueous solution) 4 - 5',
      '(iv) Solubility (as suspension) per cent., minimum 20'
    ]
  },
  {
    brand: 'PLANTEK',
    displayName: 'PLANTEK',
    specification: 'Protein hydrolysate (Amino acids 10%) (Plant Source)(Liquid)',
    category: 'Protein Hydrolysates and Amino Acids',
    crops: ['Chilli'],
    dosage: ['Two foliar applications at 750 ml/ha'],
    gazette: '26th May, 2025 S.O. 2346(E)',
    composition: [
      '(i) Free amino acids per cent. weight by volume, minimum 10',
      '(ii) Specific gravity 1.15 ± 0.03',
      '(iii) pH (5% aqueous solution) 2.5-3.5',
      '(iv) Solubility per cent., minimum 100'
    ]
  },
  {
    brand: 'PRIMEX GRANULES',
    displayName: 'PRIMEX GRANULES',
    specification: 'Protein hydrolysate 1.5% (Plant Source) (Granules)',
    category: 'Protein Hydrolysates and Amino Acids',
    crops: ['Tomato'],
    dosage: ['Two soil applications at 40 kg/ha'],
    gazette: '26th May, 2025 S.O. 2346(E)',
    composition: [
      '(i) Free amino acids per cent. by weight, minimum 0.18',
      '(ii) Total amino acids per cent. by weight, minimum 1.45',
      '(iii) Bulk density g/cc 0.95- 1.15',
      '(iv) pH (10% aqueous solution) 6.0- 7.5',
      '(v) Solubility per cent., minimum Not soluble in water'
    ]
  },
  {
    brand: 'HUMIC-Z',
    displayName: 'HUMIC-Z',
    specification: 'Kappaphycus alvarezii 7.2% (Liquid)',
    category: 'Seaweed Extract',
    crops: ['Cucumber'],
    dosage: ['Three foliar sprays at 1.25 l/ha'],
    gazette: '26th May, 2025 S.O. 2346(E)',
    composition: [
      '(i) Carrageenan per cent. by weight, minimum 0.7',
      '(ii) Total dissolved solids per cent. by weight, minimum 8.0',
      '(iii) Total organic carbon per cent. by weight, minimum 1.4',
      '(iv) Specific gravity 1.0- 1.10',
      '(v) pH (50 % aqueous solution) 3.0- 5.0',
      '(vi) Solubility per cent., minimum > 98'
    ]
  },
  {
    brand: 'BT-LEAD',
    displayName: 'BT-LEAD',
    specification: 'Sargassum tenerrimum 10% (Liquid)',
    category: 'Seaweed Extract',
    crops: ['Tomato', 'Rice'],
    dosage: [
      '(i) Rice Two foliar applications at 1000 ml/ha',
      '(ii) Tomato Two foliar applications at 625 ml/ha'
    ],
    gazette: '26th May, 2025 S.O. 2346(E)',
    composition: [
      '(i) Seaweed extract (Sargassum tenerrimum) per cent. by weight, minimum 10',
      '(ii) Carbohydrates per cent. by weight, minimum 8',
      '(iii) Octylphenol ethoxylate as adjuvant per cent. by weight, minimum 3.1',
      '(iv) Sodium benzoate per cent. by weight, minimum 1.0',
      '(v) Water per cent. by weight QS',
      '(vi) Total (per cent.) 100'
    ]
  },
  {
    brand: 'YUVA GRANULES',
    displayName: 'YUVA GRANULES',
    specification: 'Mixture of Humic acid and Seaweed extract (Granules)',
    category: 'Mixed Formulation',
    crops: ['Tomato'],
    dosage: ['Two soil applications at 25 kg/ha'],
    gazette: '26th May, 2025 S.O. 2346 (E).',
    composition: [
      '(i) Alginic acid per cent. by weight, minimum 0.02',
      '(ii) Free Amino acids per cent. by weight, minimum 0.74',
      '(iii) Humic acid per cent. by weight, minimum 0.83',
      '(iv) Total organic carbon per cent. by weight, minimum 6.0',
      '(v) Bulk density (g/cc) 1.0- 1.2',
      '(vi) pH (1% aqueous solution) 7.0- 9.0',
      '(vii) Solubility per cent., minimum 44'
    ]
  }
];

export const SLUG_TO_BRAND = {
  'ZIGMAR': 'ZIGMAR',
  'PLANTEK': 'PLANTEK',
  'PRIMEX GRANULES': 'PRIMEX GRANULES',
  'PRIMEX%20GRANULES': 'PRIMEX GRANULES',
  'primex granules': 'PRIMEX GRANULES',
  'HUMIC-Z': 'HUMIC-Z',
  'HUMIC%20Z': 'HUMIC-Z',
  'HUMIC%2DZ': 'HUMIC-Z',
  'humic-z': 'HUMIC-Z',
  'BT-LEAD': 'BT-LEAD',
  'BT%2DLEAD': 'BT-LEAD',
  'BT%20LEAD': 'BT-LEAD',
  'bt-lead': 'BT-LEAD',
  'YUVA GRANULES': 'YUVA GRANULES',
  'YUVA%20GRANULES': 'YUVA GRANULES',
  'yuva granules': 'YUVA GRANULES'
};

export function findProductBySlug(slug) {
  const decoded = decodeURIComponent(slug);
  const normalized = decoded.replace(/\+/g, ' ');
  const brand = SLUG_TO_BRAND[normalized] || SLUG_TO_BRAND[slug] || normalized;
  const found = PRODUCTS.find(p => p.brand.toUpperCase() === brand.toUpperCase());
  return found || PRODUCTS[0];
}

export function findProductByBrand(brand) {
  return PRODUCTS.find(p => p.brand === brand) || PRODUCTS[0];
}
