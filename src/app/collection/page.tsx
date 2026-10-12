import PageShell from '@/components/PageShell'; import { products } from '@/data/products'; import ProductCard from '@/components/ProductCard';
export default function Collection(){return <PageShell eyebrow="Collection 01" title="A calmer kind of essential."><section className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-2 lg:px-10">{products.slice(0,2).map(p=><div key={p.id}><ProductCard product={p}/><p className="mt-5 max-w-sm text-sm leading-6 text-fog">{p.description}</p></div>)}</section></PageShell>}

