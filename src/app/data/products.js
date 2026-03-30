// Mock product data for Tech Ocean
export const products = [
  // Computers
  {
    id: 1,
    name: "MacBook Pro 16\" M3",
    category: "computers",
    price: 2499.99,
    description: "The most powerful MacBook Pro ever is here. With the blazing-fast M3 Pro or M3 Max chip — built on 3‑nanometer technology — MacBook Pro delivers game-changing performance and the longest battery life ever in a Mac laptop.",
    features: ["M3 Pro/Max chip", "16-inch Liquid Retina XDR display", "Up to 22 hours battery life", "96GB unified memory"],
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80",
    stock: 15,
    featured: true,
    rating: 4.9
  },
  {
    id: 2,
    name: "Dell XPS 15",
    category: "computers",
    price: 1899.99,
    description: "Powerful performance in a stunning design. The Dell XPS 15 combines elegant design with outstanding performance for professionals and creators.",
    features: ["Intel Core i7-13700H", "15.6\" 4K OLED Display", "32GB RAM", "1TB SSD"],
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80",
    stock: 20,
    featured: true,
    rating: 4.7
  },
  {
    id: 3,
    name: "Gaming PC RTX 4090",
    category: "computers",
    price: 3299.99,
    description: "Ultimate gaming powerhouse with the latest RTX 4090 graphics card. Dominate every game at maximum settings with ray tracing enabled.",
    features: ["NVIDIA RTX 4090", "Intel i9-13900K", "64GB DDR5 RAM", "2TB NVMe SSD"],
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&q=80",
    stock: 8,
    featured: true,
    rating: 5.0
  },
  {
    id: 4,
    name: "MacBook Air M2",
    category: "computers",
    price: 1199.99,
    description: "Remarkably thin and light, MacBook Air with M2 chip is a portable powerhouse. Perfect for students and professionals on the go.",
    features: ["M2 chip", "13.6-inch Liquid Retina display", "Up to 18 hours battery", "16GB RAM"],
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&q=80",
    stock: 25,
    featured: false,
    rating: 4.8
  },
  {
    id: 5,
    name: "HP Pavilion Desktop",
    category: "computers",
    price: 899.99,
    description: "Reliable desktop computing for home and office. Great for everyday tasks, productivity, and light entertainment.",
    features: ["Intel Core i5", "16GB RAM", "512GB SSD", "Windows 11"],
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&q=80",
    stock: 30,
    featured: false,
    rating: 4.4
  },
  
  // Peripherals
  {
    id: 6,
    name: "Mechanical Keyboard RGB",
    category: "peripherals",
    price: 149.99,
    description: "Premium mechanical keyboard with Cherry MX switches and customizable RGB lighting. Perfect for gaming and typing enthusiasts.",
    features: ["Cherry MX Red switches", "Per-key RGB lighting", "Aluminum frame", "Programmable macros"],
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80",
    stock: 50,
    featured: true,
    rating: 4.6
  },
  {
    id: 7,
    name: "Wireless Gaming Mouse",
    category: "peripherals",
    price: 89.99,
    description: "Ultra-responsive wireless gaming mouse with high-precision sensor and customizable buttons for competitive gaming.",
    features: ["25,600 DPI sensor", "70-hour battery life", "8 programmable buttons", "Wireless & wired modes"],
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&q=80",
    stock: 60,
    featured: true,
    rating: 4.7
  },
  {
    id: 8,
    name: "4K Webcam Pro",
    category: "peripherals",
    price: 129.99,
    description: "Professional 4K webcam for streaming, video calls, and content creation with excellent low-light performance.",
    features: ["4K 30fps video", "Dual microphones", "Auto-focus", "Wide field of view"],
    image: "https://images.unsplash.com/photo-1617472657146-fe2732e70e4c?w=800&q=80",
    stock: 35,
    featured: false,
    rating: 4.5
  },
  {
    id: 9,
    name: "USB-C Docking Station",
    category: "peripherals",
    price: 199.99,
    description: "Comprehensive docking solution with multiple ports for connecting all your devices. Single cable simplicity.",
    features: ["11 ports", "100W power delivery", "Dual 4K display support", "Gigabit ethernet"],
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=800&q=80",
    stock: 40,
    featured: false,
    rating: 4.6
  },
  {
    id: 10,
    name: "27\" 4K Monitor",
    category: "peripherals",
    price: 449.99,
    description: "Stunning 4K display with HDR support and USB-C connectivity. Perfect for creative professionals and multitasking.",
    features: ["4K UHD resolution", "HDR10 support", "USB-C with 65W power", "99% sRGB coverage"],
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80",
    stock: 18,
    featured: false,
    rating: 4.8
  },

  // Accessories
  {
    id: 11,
    name: "Laptop Stand Aluminum",
    category: "accessories",
    price: 49.99,
    description: "Ergonomic aluminum laptop stand with adjustable height. Improves posture and keeps your laptop cool.",
    features: ["6 height levels", "Aluminum alloy", "Supports up to 20kg", "Portable & foldable"],
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",
    stock: 100,
    featured: false,
    rating: 4.5
  },
  {
    id: 12,
    name: "Wireless Charging Pad",
    category: "accessories",
    price: 34.99,
    description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design fits any desk setup.",
    features: ["15W fast charging", "Qi certified", "LED indicator", "Non-slip surface"],
    image: "https://images.unsplash.com/photo-1591290619762-c588dc64e8c7?w=800&q=80",
    stock: 120,
    featured: false,
    rating: 4.3
  },
  {
    id: 13,
    name: "Cable Management Kit",
    category: "accessories",
    price: 24.99,
    description: "Complete cable management solution to keep your workspace organized and clutter-free.",
    features: ["Cable clips & sleeves", "Adhesive backing", "Fits all cable sizes", "Easy installation"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    stock: 200,
    featured: false,
    rating: 4.4
  },
  {
    id: 14,
    name: "Blue Light Glasses",
    category: "accessories",
    price: 39.99,
    description: "Protect your eyes from digital eye strain with stylish blue light blocking glasses.",
    features: ["UV protection", "Anti-reflective coating", "Lightweight frame", "Multiple styles"],
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=80",
    stock: 80,
    featured: false,
    rating: 4.2
  },
  {
    id: 15,
    name: "USB Flash Drive 256GB",
    category: "accessories",
    price: 29.99,
    description: "High-speed USB 3.2 flash drive with massive storage capacity in a compact design.",
    features: ["256GB capacity", "USB 3.2 Gen 1", "Read: 200MB/s", "5-year warranty"],
    image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=800&q=80",
    stock: 150,
    featured: false,
    rating: 4.6
  },
  {
    id: 16,
    name: "Noise-Cancelling Headphones",
    category: "peripherals",
    price: 299.99,
    description: "Premium wireless headphones with industry-leading noise cancellation. Immerse yourself in pure audio.",
    features: ["Active noise cancellation", "30-hour battery", "Hi-Res audio", "Multi-device pairing"],
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80",
    stock: 45,
    featured: true,
    rating: 4.9
  },
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "computers", name: "Computers" },
  { id: "peripherals", name: "Peripherals" },
  { id: "accessories", name: "Accessories" }
];
