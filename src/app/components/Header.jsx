import { Link } from 'react-router';
import { ShoppingCart, User, LogOut, Menu, X, Moon, Sun } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { useTheme } from './ThemeProvider';
import { useState } from 'react';

export function Header() {
  const { user, logout } = useAuth();
  const { getCartCount } = useCart();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartCount = getCartCount();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0f1729] to-[#1e2a44] dark:from-[#d4af37] dark:to-[#f4d58d] shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-xl font-bold text-white dark:text-[#0a0e1a]">TO</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-[#0f1729] to-[#1e2a44] dark:from-[#d4af37] dark:to-[#f4d58d] bg-clip-text text-transparent">
                Tech Ocean
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--luxury-gold)] dark:text-[var(--luxury-gold)]">
                Luxury Technology
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-[var(--luxury-gold)] transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-sm font-medium text-foreground/80 hover:text-[var(--luxury-gold)] transition-colors">
              Products
            </Link>
            <Link to="/products?category=computers" className="text-sm font-medium text-foreground/80 hover:text-[var(--luxury-gold)] transition-colors">
              Computers
            </Link>
            <Link to="/products?category=peripherals" className="text-sm font-medium text-foreground/80 hover:text-[var(--luxury-gold)] transition-colors">
              Peripherals
            </Link>
            <Link to="/products?category=accessories" className="text-sm font-medium text-foreground/80 hover:text-[var(--luxury-gold)] transition-colors">
              Accessories
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-accent/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-[var(--luxury-gold)]" />
              ) : (
                <Sun className="h-5 w-5 text-[var(--luxury-gold)]" />
              )}
            </button>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative flex items-center justify-center h-10 w-10 rounded-full hover:bg-accent/10 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-[#d4af37] to-[#c4941f] dark:from-[#f4d58d] dark:to-[#d4af37] text-xs font-bold text-white dark:text-[#0a0e1a] shadow-lg">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User Menu */}
            {user ? (
              <div className="hidden md:flex items-center space-x-3">
                <span className="text-sm font-medium">Hi, {user.name}</span>
                <button
                  onClick={logout}
                  className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-accent/10 transition-colors"
                  title="Logout"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden md:flex items-center space-x-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#0f1729] to-[#1e2a44] dark:from-[#d4af37] dark:to-[#c4941f] text-white dark:text-[#0a0e1a] hover:shadow-lg transition-all font-medium"
              >
                <User className="h-4 w-4" />
                <span className="text-sm">Login</span>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center h-10 w-10 rounded-full hover:bg-accent/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[var(--border)] py-4 space-y-1">
            <Link
              to="/"
              className="block px-4 py-3 text-sm font-medium hover:bg-accent/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block px-4 py-3 text-sm font-medium hover:bg-accent/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              All Products
            </Link>
            <Link
              to="/products?category=computers"
              className="block px-4 py-3 text-sm font-medium hover:bg-accent/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Computers
            </Link>
            <Link
              to="/products?category=peripherals"
              className="block px-4 py-3 text-sm font-medium hover:bg-accent/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Peripherals
            </Link>
            <Link
              to="/products?category=accessories"
              className="block px-4 py-3 text-sm font-medium hover:bg-accent/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accessories
            </Link>
            {user ? (
              <>
                <div className="px-4 py-3 text-sm border-t border-[var(--border)] mt-2 pt-4">Hi, {user.name}</div>
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 w-full px-4 py-3 text-sm font-medium hover:bg-accent/10 rounded-lg transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="flex items-center justify-center space-x-2 mx-4 mt-4 px-4 py-3 rounded-full bg-gradient-to-r from-[#0f1729] to-[#1e2a44] dark:from-[#d4af37] dark:to-[#c4941f] text-white dark:text-[#0a0e1a] hover:shadow-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                <User className="h-4 w-4" />
                <span className="text-sm font-medium">Login</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
}