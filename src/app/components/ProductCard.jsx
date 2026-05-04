import { Link } from 'react-router';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

export function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-card hover:shadow-[var(--shadow-luxury-hover)] transition-all duration-300"
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
        />
        {product.featured && (
          <div className="absolute top-3 left-3 px-3 py-1.5 bg-gradient-to-r from-[#d4af37] to-[#c4941f] dark:from-[#f4d58d] dark:to-[#d4af37] text-white dark:text-[#0a0e1a] text-xs font-bold tracking-wide rounded-full shadow-lg">
            FEATURED
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="flex flex-1 flex-col p-5 space-y-3">
        <div className="text-xs text-[var(--luxury-gold)] uppercase tracking-widest font-semibold">
          {product.category}
        </div>
        <h3 className="font-semibold line-clamp-2 leading-snug">
          {product.name}
        </h3>
        
        <div className="flex items-center space-x-1">
          <Star className="h-4 w-4 fill-[#d4af37] text-[#d4af37]" />
          <span className="text-sm font-medium">{product.rating}</span>
        </div>

        <div className="flex items-center justify-between pt-3 mt-auto border-t border-[var(--border)]">
          <span className="text-xl font-bold">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-[#0f1729] to-[#1e2a44] dark:from-[#d4af37] dark:to-[#c4941f] text-white dark:text-[#0a0e1a] hover:shadow-lg hover:scale-110 transition-all duration-300"
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </Link>
  );
}
