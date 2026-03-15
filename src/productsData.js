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
      '(i) Amino acids derived from maize seeds/ grains (starch removed gluten through acid hydrolysis) per cent. by weight, minimum 5',
      '(ii) Polysorbate 80 per cent. weight by volume, minimum 5',
      '(iii) pH Regulators Potassium Carbonate / Potassium Hydroxide per cent. weight by volume, minimum 5',
      '(iv) Bentonite per cent. by weight, maximum 85',
      '(v) Total (per cent.) 100'
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
      '(i) Amino acids derived from Maize seeds / grains (starch removed gluten through acid hydrolysis) per cent. weight by volume, minimum 10',
      '(ii) Polysorbate 80 per cent. weight by volume, minimum 2',
      '(iii) Sulphuric acid per cent. weight by volume, minimum 3',
      '(iv) Water per cent. by weight QS',
      '(v) Total (per cent.) 100'
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
      '(i) Protein hydrolysate derived from defatted soybean seed flour by enzymatic (Papain) hydrolysis per cent. by weight, minimum 1.5',
      '(ii) Bentonite per cent. by weight, maximum 98.5',
      '(iii) Total (per cent.) 100'
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
      '(i) Kappaphycus alvarezii extract per cent. by weight, minimum 7.2',
      '(ii) Organic acids (Acetic, Citric and Lactic acid) per cent. by weight, minimum 0.8',
      '(iii) Water per cent. by weight 92.0',
      '(iv) Total (per cent.) 100'
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
    gazette: '13th August, 2025\nS.O. 3741(E).',
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
      '(i) Kappaphycus alvarezii and Sargassum swartzii in ratio of 1:1, extract per cent. by weight, minimum 3.3',
      '(ii) Humic acid powder as potassium humate (Source: Leonardite) per cent. by weight, minimum 1.0',
      '(iii) Dolomite per cent. by weight, maximum 95.7',
      '(iv) Total 100'
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
