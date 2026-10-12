import Navbar from './Navbar';
export default function PageShell({ children, title, eyebrow }: { children: React.ReactNode; title: string; eyebrow: string }) { return <><Navbar/><main><section className="border-b border-white/10 px-5 py-24 lg:px-10"><div className="mx-auto max-w-7xl"><p className="mb-5 text-xs uppercase tracking-[.25em] text-lime">{eyebrow}</p><h1 className="max-w-4xl text-5xl tracking-[-.04em] sm:text-7xl">{title}</h1></div></section>{children}</main></> }

