import { Link } from 'react-router';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-card mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0f1729] to-[#1e2a44] dark:from-[#d4af37] dark:to-[#f4d58d]">
                <span className="text-lg font-bold text-white dark:text-[#0a0e1a]">TO</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-[#0f1729] to-[#1e2a44] dark:from-[#d4af37] dark:to-[#f4d58d] bg-clip-text text-transparent">
                  Tech Ocean
                </span>
                <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--luxury-gold)]">
                  Luxury Technology
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted destination for premium computers, peripherals, and accessories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-[var(--luxury-gold)] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-[var(--luxury-gold)] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-[var(--luxury-gold)] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-[var(--luxury-gold)] transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/products?category=computers" className="hover:text-[var(--luxury-gold)] transition-colors">
                  Computers
                </Link>
              </li>
              <li>
                <Link to="/products?category=peripherals" className="hover:text-[var(--luxury-gold)] transition-colors">
                  Peripherals
                </Link>
              </li>
              <li>
                <Link to="/products?category=accessories" className="hover:text-[var(--luxury-gold)] transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[var(--luxury-gold)] transition-colors">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-[var(--luxury-gold)] transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--luxury-gold)] transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--luxury-gold)] transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--luxury-gold)] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-[var(--luxury-gold)] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--luxury-gold)] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--luxury-gold)] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--luxury-gold)] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--border)] mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Tech Ocean. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}