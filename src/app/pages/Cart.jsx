import { Link, useNavigate } from 'react-router';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

export function Cart() {
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto text-center">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-[#d4af37]/20 to-[#c4941f]/20 mb-6">
            <ShoppingBag className="h-10 w-10 text-[var(--luxury-gold)]" />
          </div>
          <h1 className="text-3xl font-bold mb-3">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">
            Add some premium products to get started!
          </p>
          <Link
            to="/products"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#0f1729] to-[#1e2a44] dark:from-[#d4af37] dark:to-[#c4941f] text-white dark:text-[#0a0e1a] rounded-full hover:shadow-lg transition-all font-semibold"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map(item => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row gap-4 p-6 border border-[var(--border)] rounded-2xl bg-card shadow-[var(--shadow-luxury)]"
            >
              {/* Image */}
              <Link
                to={`/product/${item.id}`}
                className="w-full sm:w-32 aspect-square overflow-hidden rounded-xl bg-muted flex-shrink-0"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover hover:scale-105 transition-transform"
                />
              </Link>

              {/* Info */}
              <div className="flex-1 flex flex-col">
                <Link
                  to={`/product/${item.id}`}
                  className="font-semibold hover:text-[var(--luxury-gold)] transition-colors"
                >
                  {item.name}
                </Link>
                <div className="text-sm text-[var(--luxury-gold)] uppercase tracking-wide mb-2">{item.category}</div>
                <div className="text-xl font-bold mb-4">
                  ${item.price.toFixed(2)}
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="flex items-center justify-center h-9 w-9 border border-[var(--border)] rounded-xl hover:bg-accent/10 transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-12 text-center font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="flex items-center justify-center h-9 w-9 border border-[var(--border)] rounded-xl hover:bg-accent/10 transition-colors"
                      disabled={item.quantity >= item.stock}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="text-sm font-medium">Remove</span>
                  </button>
                </div>
              </div>

              {/* Subtotal */}
              <div className="text-right sm:ml-4">
                <div className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">Subtotal</div>
                <div className="text-xl font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 p-8 border border-[var(--border)] rounded-2xl bg-card shadow-[var(--shadow-luxury)] space-y-6">
            <h2 className="text-2xl font-bold">Order Summary</h2>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold">${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-semibold">
                  {getCartTotal() > 100 ? (
                    <span className="text-green-600">FREE</span>
                  ) : (
                    '$9.99'
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span className="font-semibold">${(getCartTotal() * 0.08).toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t border-[var(--border)] pt-6">
              <div className="flex justify-between mb-8">
                <span className="text-lg font-bold">Total</span>
                <span className="text-3xl font-bold text-[var(--luxury-gold)]">
                  ${(
                    getCartTotal() +
                    (getCartTotal() > 100 ? 0 : 9.99) +
                    getCartTotal() * 0.08
                  ).toFixed(2)}
                </span>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full px-6 py-4 bg-gradient-to-r from-[#0f1729] to-[#1e2a44] dark:from-[#d4af37] dark:to-[#c4941f] text-white dark:text-[#0a0e1a] rounded-full hover:shadow-lg transition-all font-semibold mb-3"
              >
                Proceed to Checkout
              </button>

              <Link
                to="/products"
                className="block w-full text-center px-6 py-4 border border-[var(--border)] rounded-full hover:bg-accent/10 transition-colors font-medium"
              >
                Continue Shopping
              </Link>
            </div>

            {getCartTotal() <= 100 && (
              <div className="text-sm text-center p-4 bg-[var(--luxury-gold)]/10 border border-[var(--luxury-gold)]/20 rounded-xl">
                <span className="font-medium">Add ${(100 - getCartTotal()).toFixed(2)} more for FREE shipping!</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}