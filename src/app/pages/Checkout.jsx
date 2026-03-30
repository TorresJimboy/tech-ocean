import { useState } from 'react';
import { useNavigate } from 'react-router';
import { CreditCard, Lock } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'sonner';

// Reusable InputField component using CSS variables for automatic dark/light mode
function InputField({ label, name, type = 'text', placeholder, value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full px-4 py-2 border rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-[var(--ring)]
                   bg-[var(--input-background)] text-[var(--input-foreground)]
                   border-[var(--border)] transition-colors"
      />
    </div>
  );
}

export function Checkout() {
  const navigate = useNavigate();
  const { cart, getCartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const [processing, setProcessing] = useState(false);

  const [formData, setFormData] = useState({
    email: user?.email || '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    await new Promise(resolve => setTimeout(resolve, 2000));

    clearCart();
    setProcessing(false);
    toast.success('Order placed successfully!');
    navigate('/');
  };

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  const subtotal = getCartTotal();
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="container mx-auto px-4 py-8 text-[var(--foreground)] bg-[var(--background)] min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Contact Information */}
            <div className="p-6 border rounded-lg bg-[var(--card)] text-[var(--card-foreground)] border-[var(--border)]">
              <h2 className="text-xl font-bold mb-4">Contact Information</h2>
              <InputField
                label="Email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Shipping Address */}
            <div className="p-6 border rounded-lg bg-[var(--card)] text-[var(--card-foreground)] border-[var(--border)]">
              <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['firstName','lastName','address','city','state','zipCode'].map((field, i) => (
                  <div key={i} className={field === 'address' || field === 'zipCode' ? 'md:col-span-2' : ''}>
                    <InputField
                      label={field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Information */}
            <div className="p-6 border rounded-lg bg-[var(--card)] text-[var(--card-foreground)] border-[var(--border)]">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Payment Information</h2>
                <div className="flex items-center space-x-2 text-sm text-[var(--muted-foreground)]">
                  <Lock className="h-4 w-4" />
                  <span>Secure Payment</span>
                </div>
              </div>
              <div className="space-y-4">
                <InputField
                  label="Card Number"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={handleChange}
                />
                <InputField
                  label="Cardholder Name"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleChange}
                />
                <div className="grid grid-cols-2 gap-4">
                  <InputField
                    label="Expiry Date"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleChange}
                  />
                  <InputField
                    label="CVV"
                    name="cvv"
                    placeholder="123"
                    value={formData.cvv}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={processing}
              className="w-full px-6 py-4 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-lg hover:bg-[var(--luxury-gold)] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {processing ? (
                <>
                  <div className="h-5 w-5 border-2 border-[var(--primary-foreground)] border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <CreditCard className="h-5 w-5" />
                  <span>Place Order</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 p-6 border rounded-lg bg-[var(--card)] text-[var(--card-foreground)] border-[var(--border)] space-y-4">
            <h2 className="text-xl font-bold">Order Summary</h2>
            <div className="space-y-4 max-h-64 overflow-y-auto">
              {cart.map(item => (
                <div key={item.id} className="flex space-x-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium line-clamp-2">{item.name}</div>
                    <div className="text-sm text-[var(--muted-foreground)]">Qty: {item.quantity}</div>
                  </div>
                  <div className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
            </div>
            <div className="border-t pt-4 space-y-2 border-[var(--border)]">
              <div className="flex justify-between text-sm">
                <span className="text-[var(--muted-foreground)]">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--muted-foreground)]">Shipping</span>
                <span className="font-medium">
                  {shipping === 0 ? (
                    <span className="text-green-600">FREE</span>
                  ) : (
                    `$${shipping.toFixed(2)}`
                  )}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--muted-foreground)]">Tax</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
            </div>
            <div className="border-t pt-4 border-[var(--border)]">
              <div className="flex justify-between">
                <span className="text-lg font-bold">Total</span>
                <span className="text-2xl font-bold text-[var(--primary)]">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}