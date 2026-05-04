const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'computers', name: 'Computers' },
  { id: 'peripherals', name: 'Peripherals' },
  { id: 'accessories', name: 'Accessories' },
];

function getSupabaseConfig() {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your environment.');
  }

  return {
    url: supabaseUrl.replace(/\/rest\/v1\/?$/, '').replace(/\/$/, ''),
    anonKey: supabaseAnonKey,
  };
}

function normalizeProduct(product) {
  return {
    ...product,
    price: Number(product.price ?? 0),
    stock: Number(product.stock ?? 0),
    rating: Number(product.rating ?? 0),
    featured: Boolean(product.featured),
    image: product.image || product.image_url || '',
    features: Array.isArray(product.features) ? product.features : [],
  };
}

async function fetchFromProductsTable(query, signal) {
  const { url, anonKey } = getSupabaseConfig();
  const response = await fetch(`${url}/rest/v1/products?${query}`, {
    signal,
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
    },
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || 'Unable to load products.');
  }

  return response.json();
}

export async function getProducts({ signal } = {}) {
  const rows = await fetchFromProductsTable('select=*&order=featured.desc,rating.desc', signal);
  return rows.map(normalizeProduct);
}

export async function getProductById(id, { signal } = {}) {
  const rows = await fetchFromProductsTable(`select=*&id=eq.${encodeURIComponent(id)}&limit=1`, signal);
  return rows.length ? normalizeProduct(rows[0]) : null;
}
