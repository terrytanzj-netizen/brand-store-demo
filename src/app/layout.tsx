import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Brand Store — Premium Vapor Collection', description: 'A fictional premium vapor device storefront demo.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }

