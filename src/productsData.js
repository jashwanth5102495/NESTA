export const GAZETTE = '';

export const PRODUCTS = [
  {
    brand: 'Stellon',
    displayName: 'Stellon',
    specification: 'Humic Acid 4% (Liquid)',
    category: 'Humic Acid',
    crops: ['Potato', 'Soybean', 'Chilli', 'Cotton', 'Paddy'],
    dosage: [
      'Chilli- Three foliar applications at 937.5 ml/ha',
      'Other Crop- Two foliar applications at 625 ml/ha'
    ],
    gazette: 'S.Q : 3741[E], Dated : 13.08.2025',
    composition: [
      '(i) Humic acid per cent. by weight, minimum 4',
      '(ii) pH (1% aqueous solution) 9.5- 11.5',
      '(iii) Specific gravity 1.0- 1.25',
      '(iv) Total organic carbon per cent. by weight, minimum 2',
      '(v) Solubility per cent. by weight, minimum 95'
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
    specification: '',
    category: '',
    crops: [],
    dosage: [],
    gazette: '',
    composition: []
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
