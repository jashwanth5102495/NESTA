export const GAZETTE = '';

export const PRODUCTS = [
  {
    brand: 'Stellon',
    displayName: 'Stellon',
    specification: 'Humic Acid 4% (Liquid)',
    category: 'Humic Acid',
    crops: ['Potato', 'Soybean', 'Chilli', 'Cotton', 'Paddy'],
    dosage: [
'(i) Soybean Two foliar applications at 625 ml/ha ',
'(ii) Potato Two foliar applications at 937.5 ml/ha ',
'(iii) Paddy Two foliar applications at 625 ml/ha ',
'(iv) Chilli Three foliar applications at 937.5 ml/ha ',
'(v) Cotton Three foliar applications at 625 ml/ha”'
    ],
    gazette: ' 13th August, 2025 S.O. 3741(E)',
    composition: [
'(i) Humic acid (Source: Leonardite) per cent. by weight, minimum 4 ',
'(ii) Water per cent. by weight, maximum  96', 
'(iii) Total (per cent.) 100',
    ],
    manufacturer: {
      name: 'Nesta Crop Solutions Pvt Ltd.',
      address: [
        'Gat No 527,Vijay Nagar,Nerli,',
        'Near to Gokul Shirgaon MIDC, Karveer,',
        'Kolhapur 416234'
      ]
    },
    marketedBy: {
      name: 'Nesta Crop Solutions Pvt Ltd.',
      address: [
        'Gat No 527,Vijay Nagar,Nerli,',
        'Near to Gokul Shirgaon MIDC, Karveer,',
        'Kolhapur 416234'
      ]
    },
    customerCare: {
      phone: '8989410038',
      email: 'admin@nestacropsolutions.com'
    }
  },
  {
    brand: 'Arvex',
    displayName: 'Arvex',
    specification: 'Protein Hydrolysate 20% (Plant Source liquid)',
    category: 'Protein Hydrolysates and Amino Acids',
    crops: ['Chickpea'],
    dosage: ['Two foliar applications at 1500 ml/ha'],
    gazette: '13th August, 2025 S.O. 3742(E)',
    composition: [
      '(i)Protein hydrolysate derived from seeds of Zea mays through hydrolysis by using alkaline protease and hydrochloric acid per cent. by weight, minimum 20',
      '(ii) Water per cent. by weight  QS',
      '(iii)Total (per cent.) 100'
    ],
    manufacturer: {
      name: 'Nesta Crop Solutions Pvt Ltd.',
      address: [
        'Gat No 527,Vijay Nagar,Nerli,',
        'Near to Gokul ShirgaonMIDC, Karveer,',
        'Kolhapur 416234'
      ]
    },
    marketedBy: {
      name: 'Nesta Crop Solutions Pvt Ltd.',
      address: [
        'Gat No 527,Vijay Nagar,Nerli,',
        'Near to Gokul ShirgaonMIDC, Karveer,',
        'Kolhapur 416234'
      ]
    },
    customerCare: {
      phone: '8989410038',
      email: 'admin@nestacropsolutions.com'
    }
  }
];

export const SLUG_TO_BRAND = {
  'Stellon': 'Stellon',
  'stellon': 'Stellon',
  'Arvex': 'Arvex',
  'arvex': 'Arvex'
};

function normalizeBrandKey(value) {
  return String(value || '')
    .replace(/\+/g, ' ')
    .trim()
    .toUpperCase();
}

export function findProductBySlug(slug) {
  const decoded = decodeURIComponent(slug);
  const normalized = decoded.replace(/\+/g, ' ').trim();
  const brand = (SLUG_TO_BRAND[normalized] || SLUG_TO_BRAND[slug] || normalized).trim();
  const found = PRODUCTS.find(p => normalizeBrandKey(p.brand) === normalizeBrandKey(brand));
  return found || PRODUCTS[0];
}

export function findProductByBrand(brand) {
  return PRODUCTS.find(p => normalizeBrandKey(p.brand) === normalizeBrandKey(brand)) || PRODUCTS[0];
}
