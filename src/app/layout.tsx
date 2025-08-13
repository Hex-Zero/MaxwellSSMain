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
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Maxwell — Modern Web Experiences',
  description: 'Iterate on your site live with AI-driven edits.',
  metadataBase: new URL('https://maxwell-software.com'),
  openGraph: {
    title: 'Maxwell — Modern Web Experiences',
    description: 'Iterate on your site live with AI-driven edits.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maxwell — Modern Web Experiences',
    description: 'Iterate on your site live with AI-driven edits.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/logo-icon.svg', sizes: '64x64', type: 'image/svg+xml' },
    ],
    apple: '/logo-icon.svg',
    shortcut: '/favicon.svg',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const themeColor = '#8B6B00';

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
        {/* Preload critical resources */}
        <link rel="preload" href="/images/hero-consulting.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/_next/static/css/app/layout.css" as="style" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="//fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="//fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="modulepreload" href="/_next/static/chunks/webpack.js" />
        <link rel="modulepreload" href="/_next/static/chunks/main-app.js" />

        {/* Critical CSS for above-the-fold content */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            body { margin: 0; font-family: Arial, Helvetica, sans-serif; }
            .header-glass { background-color: rgba(255, 255, 255, 0.78); backdrop-filter: saturate(180%) blur(12px); }
            .container { max-width: 80rem; margin-inline: auto; padding-inline: 1.5rem; }
            .hero-gradient { background-image: radial-gradient(120% 80% at 50% 0%, rgba(139, 107, 0, 0.12) 0%, rgba(139, 107, 0, 0.06) 30%, transparent 60%); }
          `,
          }}
        />

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
