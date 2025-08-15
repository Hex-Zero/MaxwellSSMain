"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef, type ReactElement } from 'react';

export default function HeaderNav(): ReactElement {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  // Close on escape
  useEffect(() => {
  function onKey(e: KeyboardEvent): void {
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Prevent body scroll when menu open
  // Handle open side-effects (scroll lock, inert, focus management)
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    lastFocusedRef.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    // Focus first link
    requestAnimationFrame(() => {
      if (firstLinkRef.current) {
        firstLinkRef.current.focus();
      } else {
        // Fallback: focus first focusable inside panel
        const panel = panelRef.current;
        const candidate = panel?.querySelector<HTMLElement>('a,button');
        candidate?.focus();
      }
      // Secondary fallback if prior attempt async fails
      setTimeout(() => {
        if (!panelRef.current) return;
        if (panelRef.current.contains(document.activeElement)) return;
        const alt = panelRef.current.querySelector<HTMLElement>('a,button');
        alt?.focus();
      }, 50);
    });
    // Mark rest inert
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
  main?.setAttribute('inert', '');
  footer?.setAttribute('inert', '');
    return () => {
      document.body.style.overflow = prev;
      main?.removeAttribute('inert');
      footer?.removeAttribute('inert');
      // Restore focus
      lastFocusedRef.current?.focus?.();
    };
  }, [open]);

  // Close menu automatically on resize to desktop
  useEffect(() => {
  function onResize(): void {
      if (window.innerWidth >= 600) {
        setOpen(false);
      }
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Focus trap within panel
  useEffect(() => {
    if (!open) return;
  function onKeydown(e: KeyboardEvent): void {
      if (e.key !== 'Tab') return;
      const panel = panelRef.current;
      if (!panel) return;
      const focusables = Array.from(panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      ))
        .filter(el => !el.hasAttribute('aria-hidden'))
        .filter(el => !el.hasAttribute('data-focus-exclude'));
      if (focusables.length === 0) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement;
      if (e.shiftKey) {
        if (active === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (active === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }
    window.addEventListener('keydown', onKeydown);
    return () => window.removeEventListener('keydown', onKeydown);
  }, [open]);

  return (
    <nav className="container h-14 flex items-center justify-between relative" aria-label="Site header">
      <Link href="/" className="flex items-center" aria-label="Homepage">
        <Image
          src="/logo.svg"
          alt="Maxwell Software Solutions"
            width={240}
            height={60}
            className="site-logo w-auto transition-[height] duration-200"
            priority
          />
        </Link>
        {/* Desktop navigation */}
        <div className="nav-links" aria-label="Primary navigation">
          <Link href="/services">Services</Link>
          <Link href="/project-showcase">Case studies</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
        </div>
        {/* Mobile toggle */}
        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          onClick={() => setOpen(o => !o)}
          data-test="menu-toggle"
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M3 6h18" />
                <path d="M3 12h18" />
                <path d="M3 18h18" />
              </>
            )}
          </svg>
        </button>
        {/* Overlay to allow click outside to close (render only when open to avoid flash) */}
        {open && (
          <div
            className="nav-overlay open"
            onClick={() => setOpen(false)}
            aria-hidden="true"
            data-test="nav-overlay"
          />
        )}
        {/* Mobile panel */}
        <div
          id="mobile-nav-panel"
          ref={panelRef}
          className={`mobile-nav ${open ? 'open' : ''}`}
          aria-hidden={!open}
          role={open ? 'dialog' : undefined}
          aria-modal={open ? 'true' : undefined}
          data-state={open ? 'open' : 'closed'}
          data-test="mobile-panel"
          tabIndex={open ? -1 : undefined}
        >
          <div className="flex justify-between items-center mb-8">
            <span className="text-sm font-medium tracking-wide text-foreground/70">Navigate</span>
            <button
              type="button"
              className="menu-close"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              data-focus-exclude
              data-test="menu-close"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col gap-4 text-lg font-medium">
            <li><Link ref={firstLinkRef} href="/services" onClick={() => setOpen(false)}>Services</Link></li>
            <li><Link href="/project-showcase" onClick={() => setOpen(false)}>Case studies</Link></li>
            <li><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>
            <li><Link href="/blog" onClick={() => setOpen(false)}>Blog</Link></li>
          </ul>
        </div>
      </nav>
  );
}
