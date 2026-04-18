export const GAZETTE = '';

export const PRODUCTS = [
  {
    brand: 'Stellon',
    displayName: 'Stellon',
    specification: '',
    category: '',
    crops: [],
    dosage: [],
    gazette: '',
    composition: []
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
