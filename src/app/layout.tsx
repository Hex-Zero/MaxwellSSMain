import type { Metadata } from 'next';
import Link from 'next/link';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ScrollEffects from '@/app/components/ScrollEffects';
import SiteFooter from '@/app/components/SiteFooter';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Maxwell — Modern Web Experiences',
  description: 'Iterate on your site live with AI-driven edits.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Global scroll effects (no UI) */}
        <ScrollEffects />
        <header className="sticky top-0 z-50 header-glass border-b border-foreground/10">
          <nav className="container h-14 flex items-center justify-between">
            <Link href="/" className="font-semibold">
              Maxwell Software Solutions
            </Link>
            <div className="flex items-center gap-5 text-sm">
              <Link href="/services">Services</Link>
              <Link href="/case-studies">Case studies</Link>
              <Link href="/process">Process</Link>
              <Link href="/about">About</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact" className="btn btn-ghost">
                Contact
              </Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
