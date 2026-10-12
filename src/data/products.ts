export type Product = { id: string; name: string; price: number; category: string; image: string; description: string; rating: number; tag?: string };
export const products: Product[] = [
  { id: '60k-pro', name: '60K PRO', price: 39, category: 'Disposable Vapes', image: '/assets/products/device-1.webp', description: 'A fictional high-capacity disposable vapor device from the 60K PRO material collection.', rating: 4.9, tag: 'BEST SELLER' },
  { id: 's7', name: 'S7', price: 29, category: 'Disposable Vapes', image: '/assets/products/s7.webp', description: 'A fictional S7 disposable vapor device with a compact profile and an original flavor range.', rating: 4.8 },
  { id: 's9', name: 'S9', price: 32, category: 'Disposable Vapes', image: '/assets/products/s9.webp', description: 'A fictional S9 collection device presented with a clean, modern product finish.', rating: 4.8 },
  { id: '50k-cloud', name: '50K CLOUD', price: 36, category: 'Disposable Vapes', image: '/assets/products/device-2.webp', description: 'A fictional 50K Cloud disposable vapor device with curated flavor options.', rating: 4.7 },
  { id: 'swix-mate-9000', name: 'SWIX MATE 9000', price: 34, category: 'Disposable Vapes', image: '/assets/products/swix.webp', description: 'A fictional SWIX Mate 9000 device collection with original placeholder flavor artwork.', rating: 4.9, tag: 'NEW' },
];

