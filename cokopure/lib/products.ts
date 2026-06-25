export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  image: string;
  category: string;
  badge?: string;
  ingredients: string[];
  benefits: string[];
};

export const products: Product[] = [
  {
    id: "dates-cocoa",
    name: "Dates & Cocoa",
    tagline: "Naturally Sweet",
    description:
      "Rich dates and cocoa blended with creamy almond milk for a decadent, naturally sweet treat. No added sugar — just pure indulgence from nature.",
    price: 149,
    image: "/product/Screenshot_1.png",
    category: "Signature Blends",
    badge: "Bestseller",
    ingredients: ["Raw Coconut Milk", "Dates", "Cocoa", "Almond Milk"],
    benefits: ["Naturally sweetened", "Rich in antioxidants", "Dairy-free"],
  },
  {
    id: "mango",
    name: "Alphonso Mango",
    tagline: "Stay As Cool",
    description:
      "Pure raw coconut milk infused with premium Alphonso mango and refreshing ice apple. A tropical escape in every sip.",
    price: 139,
    image: "/product/Screenshot_2.png",
    category: "Tropical",
    badge: "Popular",
    ingredients: ["Raw Coconut Milk", "Alphonso Mango", "Ice Apple"],
    benefits: ["Vitamin-rich", "Refreshing", "100% natural"],
  },
  {
    id: "coconut-palm-sugar",
    name: "Coconut Palm Sugar",
    tagline: "Pure & Wholesome",
    description:
      "Traditional coconut milk sweetened naturally with palm sugar blocks. A wholesome taste of Kerala's heritage.",
    price: 129,
    image: "/product/Screenshot_3.png",
    category: "Classic",
    ingredients: ["Raw Coconut Milk", "Palm Sugar", "Coconut Sugar"],
    benefits: ["Low glycemic sweetener", "Traditional recipe", "No preservatives"],
  },
  {
    id: "pure-coconut-milk",
    name: "100% Pure Coconut Milk",
    tagline: "Nothing Added",
    description:
      "Straight from fresh coconuts — 100% pure coconut milk with nothing added. Creamy, rich, and authentically tropical.",
    price: 119,
    image: "/product/Screenshot_4.png",
    category: "Classic",
    badge: "Pure",
    ingredients: ["100% Fresh Coconut Milk"],
    benefits: ["Single ingredient", "No additives", "Creamy texture"],
  },
  {
    id: "beetroot",
    name: "Beetroot & Coconut",
    tagline: "Vibrant Wellness",
    description:
      "Earthy beetroot meets creamy coconut milk for a vibrant pink drink packed with natural nutrients and bold flavor.",
    price: 139,
    image: "/product/Screenshot_5.png",
    category: "Wellness",
    ingredients: ["Raw Coconut Milk", "Fresh Beetroot", "Coconut Shavings"],
    benefits: ["Rich in nitrates", "Natural color", "Detoxifying"],
  },
  {
    id: "mint",
    name: "Mint & Coconut",
    tagline: "Cool & Fresh",
    description:
      "Cooling fresh mint blended with creamy coconut milk. A refreshing pick-me-up for any time of day.",
    price: 129,
    image: "/product/Screenshot_6.png",
    category: "Wellness",
    ingredients: ["Raw Coconut Milk", "Fresh Mint Leaves"],
    benefits: ["Aids digestion", "Cooling effect", "Naturally refreshing"],
  },
  {
    id: "butterfly-pea",
    name: "Butterfly Pea",
    tagline: "Naturally Blue",
    description:
      "Stunning butterfly pea flower infused coconut water with a mesmerizing lavender hue and delicate floral notes.",
    price: 149,
    image: "/product/Screenshot_7.png",
    category: "Signature Blends",
    badge: "Unique",
    ingredients: ["Coconut Water", "Butterfly Pea Flower", "Coconut Milk"],
    benefits: ["Antioxidant-rich", "Naturally colored", "Calming properties"],
  },
  {
    id: "carrot",
    name: "Carrot & Coconut",
    tagline: "Golden Glow",
    description:
      "Sweet carrots blended with raw coconut milk for a golden, vitamin-packed drink that nourishes from within.",
    price: 129,
    image: "/product/Screenshot_8.png",
    category: "Wellness",
    ingredients: ["Raw Coconut Milk", "Fresh Carrots", "Coconut Meat"],
    benefits: ["High in beta-carotene", "Immune support", "Naturally sweet"],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatPrice(amount: number): string {
  return `₹${amount}`;
}
