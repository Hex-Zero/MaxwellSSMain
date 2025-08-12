import type { Metadata } from 'next';
import Link from 'next/link';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

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
        <header className="border-b border-foreground/10">
          <nav className="max-w-6xl mx-auto px-6 sm:px-10 h-14 flex items-center justify-between">
            <Link href="/" className="font-semibold">
              Maxwell Software Solutions
            </Link>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/services">Services</Link>
              <Link href="/case-studies">Case studies</Link>
              <Link href="/process">Process</Link>
              <Link href="/about">About</Link>
              <Link href="/blog">Blog</Link>
              <Link
                href="/contact"
                className="rounded-md px-3 py-1.5 border border-foreground/20 hover:bg-[--color-accent]/10"
              >
                Contact
              </Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
