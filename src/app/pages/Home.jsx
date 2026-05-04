import { Link } from 'react-router';
import { ArrowRight, Truck, Shield, Headphones } from 'lucide-react';
import { useProducts } from '../hooks/useProducts';
import { ProductCard } from '../components/ProductCard';

export function Home() {
  const { products, loading, error } = useProducts();
  const featuredProducts = products.filter(p => p.featured);

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f1729] via-[#1e2a44] to-[#0f1729] dark:from-[#0a0e1a] dark:via-[#12182b] dark:to-[#0a0e1a] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#d4af37] rounded-full blur-[100px]"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#d4af37] rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container relative mx-auto px-4 py-24 md:py-40">
          <div className="max-w-3xl">
            <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm border border-[#d4af37]/30 rounded-full">
              <span className="text-sm font-semibold tracking-wide text-[#f4d58d]">PREMIUM COMPUTERS</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Dive Into Technology
              <span className="block text-transparent bg-gradient-to-r from-[#d4af37] to-[#f4d58d] bg-clip-text">
                Excellence
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-10 text-white/80 leading-relaxed">
              Discover premium computers, peripherals, and accessories crafted for work, gaming, and creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#c4941f] text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all font-semibold"
              >
                <span>Explore Collection</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/products?category=computers"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full hover:bg-white/20 transition-all font-semibold"
              >
                View Computers
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <section className="border-b border-[var(--border)] bg-card">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-accent/5 transition-colors">
              <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-[#d4af37]/20 to-[#c4941f]/20 text-[var(--luxury-gold)]">
                <Truck className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Complimentary Shipping</h3>
                <p className="text-sm text-muted-foreground">On all orders over $100</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-accent/5 transition-colors">
              <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-[#d4af37]/20 to-[#c4941f]/20 text-[var(--luxury-gold)]">
                <Shield className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Secure Transactions</h3>
                <p className="text-sm text-muted-foreground">100% protected payments</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-accent/5 transition-colors">
              <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-[#d4af37]/20 to-[#c4941f]/20 text-[var(--luxury-gold)]">
                <Headphones className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Concierge Service</h3>
                <p className="text-sm text-muted-foreground">Available 24/7 for assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="text-sm text-[var(--luxury-gold)] uppercase tracking-widest font-semibold mb-2">Curated Selection</div>
              <h2 className="text-4xl font-bold mb-2">Featured Products</h2>
              <p className="text-muted-foreground">Handpicked premium technology for discerning customers</p>
            </div>
            <Link
              to="/products"
              className="hidden md:flex items-center space-x-2 text-[var(--luxury-gold)] hover:text-[var(--luxury-gold)]/80 font-semibold group"
            >
              <span>View All</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="h-[420px] rounded-2xl border border-[var(--border)] bg-card animate-pulse" />
              ))}
            </div>
          ) : error ? (
            <div className="rounded-2xl border border-[var(--border)] bg-card p-8 text-center">
              <p className="font-semibold mb-2">Featured products are unavailable</p>
              <p className="text-sm text-muted-foreground">{error}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="mt-12 text-center md:hidden">
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 text-[var(--luxury-gold)] hover:text-[var(--luxury-gold)]/80 font-semibold"
            >
              <span>View All Products</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-sm text-[var(--luxury-gold)] uppercase tracking-widest font-semibold mb-2">Explore</div>
            <h2 className="text-4xl font-bold">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/products?category=computers"
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-[var(--shadow-luxury)] hover:shadow-[var(--shadow-luxury-hover)] transition-all"
            >
              <img
                src="https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&q=80"
                alt="Computers"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="w-12 h-1 bg-gradient-to-r from-[#d4af37] to-[#f4d58d] mb-4 group-hover:w-24 transition-all"></div>
                <h3 className="text-3xl font-bold mb-2 text-white">Computers</h3>
                <p className="text-sm text-white/80">Laptops, desktops & workstations</p>
              </div>
            </Link>

            <Link
              to="/products?category=peripherals"
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-[var(--shadow-luxury)] hover:shadow-[var(--shadow-luxury-hover)] transition-all"
            >
              <img
                src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80"
                alt="Peripherals"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="w-12 h-1 bg-gradient-to-r from-[#d4af37] to-[#f4d58d] mb-4 group-hover:w-24 transition-all"></div>
                <h3 className="text-3xl font-bold mb-2 text-white">Peripherals</h3>
                <p className="text-sm text-white/80">Premium keyboards, mice & displays</p>
              </div>
            </Link>

            <Link
              to="/products?category=accessories"
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-[var(--shadow-luxury)] hover:shadow-[var(--shadow-luxury-hover)] transition-all"
            >
              <img
                src="https://images.unsplash.com/photo-1625948515291-69613efd103f?w=800&q=80"
                alt="Accessories"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="w-12 h-1 bg-gradient-to-r from-[#d4af37] to-[#f4d58d] mb-4 group-hover:w-24 transition-all"></div>
                <h3 className="text-3xl font-bold mb-2 text-white">Accessories</h3>
                <p className="text-sm text-white/80">Essential cables, stands & cases</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f1729] via-[#1e2a44] to-[#0f1729] dark:from-[#12182b] dark:via-[#1e2a44] dark:to-[#12182b] px-8 py-20 md:px-16 text-white text-center shadow-[var(--shadow-luxury-hover)]">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-[120px]"></div>
            </div>
            
            <div className="relative">
              <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm border border-[#d4af37]/30 rounded-full">
                <span className="text-sm font-semibold tracking-wide text-[#f4d58d]">EXCLUSIVE MEMBERSHIP</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Join Tech Ocean Elite
              </h2>
              <p className="text-lg mb-10 text-white/80 max-w-2xl mx-auto">
                Create an account to unlock exclusive benefits, track orders, and access member-only deals
              </p>
              <Link
                to="/signup"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#c4941f] text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all font-semibold"
              >
                <span>Become a Member</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
