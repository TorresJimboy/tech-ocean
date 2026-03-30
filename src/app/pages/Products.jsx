import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { Filter, X } from 'lucide-react';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortBy, setSortBy] = useState('featured');

  const categoryFilter = searchParams.get('category') || 'all';

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(p => p.category === categoryFilter);
    }

    // Price filter
    filtered = filtered.filter(
      p => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Featured: featured items first, then by rating
        filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.rating - a.rating;
        });
    }

    return filtered;
  }, [categoryFilter, priceRange, sortBy]);

  const handleCategoryChange = (category) => {
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const resetFilters = () => {
    setPriceRange([0, 5000]);
    setSortBy('featured');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className={`lg:w-72 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <div className="sticky top-24 space-y-6 p-6 rounded-2xl border border-[var(--border)] bg-card shadow-[var(--shadow-luxury)]">
            <div className="flex items-center justify-between lg:justify-start">
              <h2 className="text-lg font-bold">Filters</h2>
              <button
                onClick={() => setShowFilters(false)}
                className="lg:hidden"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-[var(--luxury-gold)]">Category</h3>
              <div className="space-y-2">
                {categories.map(cat => (
                  <label key={cat.id} className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      checked={categoryFilter === cat.id}
                      onChange={() => handleCategoryChange(cat.id)}
                      className="h-4 w-4 text-[var(--luxury-gold)] focus:ring-[var(--luxury-gold)]"
                    />
                    <span className="text-sm group-hover:text-[var(--luxury-gold)] transition-colors">{cat.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-[var(--luxury-gold)]">Price Range</h3>
              <div className="space-y-3">
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full accent-[var(--luxury-gold)]"
                />
                <div className="flex items-center justify-between text-sm font-medium">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Sort */}
            <div>
              <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-[var(--luxury-gold)]">Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2.5 border border-[var(--border)] rounded-xl text-sm bg-background focus:outline-none focus:ring-2 focus:ring-[var(--luxury-gold)]"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
                <option value="rating">Rating</option>
              </select>
            </div>

            <button
              onClick={resetFilters}
              className="w-full px-4 py-2.5 border border-[var(--border)] rounded-xl text-sm font-medium hover:bg-accent/10 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Products</h1>
              <p className="text-sm text-muted-foreground">
                {filteredProducts.length} premium products found
              </p>
            </div>
            <button
              onClick={() => setShowFilters(true)}
              className="lg:hidden flex items-center space-x-2 px-4 py-2.5 border border-[var(--border)] rounded-xl hover:bg-accent/10 transition-colors"
            >
              <Filter className="h-4 w-4" />
              <span className="text-sm font-medium">Filters</span>
            </button>
          </div>

          {/* Products */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground mb-4">No products found matching your criteria</p>
              <button
                onClick={resetFilters}
                className="px-6 py-3 bg-gradient-to-r from-[#0f1729] to-[#1e2a44] dark:from-[#d4af37] dark:to-[#c4941f] text-white dark:text-[#0a0e1a] rounded-full hover:shadow-lg transition-all font-medium"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}