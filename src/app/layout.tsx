import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ParallaxScrollEffects from '@/app/components/ParallaxScrollEffects';
import AppFooter from '@/app/components/AppFooter';

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
}>): ReactElement {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Global scroll effects (no UI) */}
        <ParallaxScrollEffects key="scroll-effects" />
        <header className="sticky top-0 z-50 header-glass border-b border-foreground/10">
          <nav className="container h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Maxwell Software Solutions"
                width={300}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </Link>
            <div className="flex items-center gap-5 text-sm">
              <Link href="/services">Services</Link>
              <Link href="/project-showcase">Case studies</Link>
              <Link href="/consulting-process">Process</Link>
              <Link href="/about">About</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact" className="btn btn-ghost">
                Contact
              </Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <AppFooter />
      </body>
    </html>
  );
}
