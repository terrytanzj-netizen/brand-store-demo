import PageShell from '@/components/PageShell';
import { products } from '@/data/products';

export default function Product({ params }: { params: { id: string } }) {
  const product = products.find(item => item.id === params.id) || products[0];
  return <PageShell eyebrow={product.category} title={product.name}>
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:grid-cols-2 lg:px-10">
      <div className="overflow-hidden rounded-2xl bg-[#17191d]"><img src={product.image} alt={product.name} className="aspect-square h-full w-full object-contain p-6"/></div>
      <div className="flex flex-col justify-center"><div className="mb-5 text-lime">★★★★★ <span className="ml-2 text-xs text-fog">{product.rating} / 5</span></div><p className="text-3xl">${product.price}</p><p className="mt-6 max-w-md text-sm leading-7 text-fog">{product.description}</p><div className="mt-8 border-y border-white/10 py-5 text-xs leading-7 text-fog">Original placeholder material · Age restricted · Demo checkout only</div><button className="mt-8 rounded-full bg-lime px-7 py-4 text-xs font-bold tracking-widest text-ink">ADD TO BAG</button></div>
    </section>
    <section className="mx-auto max-w-7xl border-t border-white/10 px-5 py-16 lg:px-10"><div className="grid gap-8 md:grid-cols-3"><div><h3 className="mb-3">About this collection</h3><p className="text-sm leading-7 text-fog">{product.description} All product information on this prototype is placeholder content prepared for layout review.</p></div><div><h3 className="mb-3">Product details</h3><p className="text-sm leading-7 text-fog">Device collection: {product.name}<br/>Artwork: supplied material<br/>Checkout: mock only</p></div><div><h3 className="mb-3">Shipping</h3><p className="text-sm leading-7 text-fog">Shipping and returns are placeholder sections for the final store policy.</p></div></div></section>
  </PageShell>;
}

