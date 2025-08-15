"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef, useCallback, type ReactElement } from 'react';

// Rewritten burger menu: single effect handles side-effects, minimal styling interaction, avoids heavy filters for stability.
export default function HeaderNav(): ReactElement {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const closeMenu = useCallback(() => setOpen(false), []);
  const toggleMenu = useCallback(() => setOpen(o => !o), []);

  // Attach a single global key handler while open for Escape + focus trap.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent): void {
      if (e.key === 'Escape') {
        closeMenu();
        return;
      }
      if (e.key === 'Tab') {
        const panel = panelRef.current;
        if (!panel) return;
  const focusables = Array.from(panel.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])'));
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement;
  if (e.shiftKey && (active === first || !panel.contains(active))) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, closeMenu]);

  // Side effects for open state: focus management, inert/background disabling, scroll lock.
  useEffect(() => {
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    if (open) {
      previouslyFocused.current = document.activeElement as HTMLElement | null;
      const prevOverflow = document.body.style.overflow;
      document.body.dataset.prevOverflow = prevOverflow;
      document.body.style.overflow = 'hidden';
      // Apply inert or fallback
      if ('inert' in HTMLElement.prototype) {
        (main as any)?.setAttribute?.('inert', '');
        (footer as any)?.setAttribute?.('inert', '');
      } else {
        main?.setAttribute('aria-hidden', 'true');
        footer?.setAttribute('aria-hidden', 'true');
        main?.classList.add('bg-disabled');
        footer?.classList.add('bg-disabled');
      }
      // Focus first link after paint
      requestAnimationFrame(() => {
        if (firstLinkRef.current) {
          firstLinkRef.current.focus();
        } else {
          const fallback = panelRef.current?.querySelector<HTMLElement>('a,button,[tabindex]:not([tabindex="-1"])');
          fallback?.focus();
        }
      });
    } else {
      // Restore scroll
      if (document.body.dataset.prevOverflow !== undefined) {
        document.body.style.overflow = document.body.dataset.prevOverflow;
      } else {
        document.body.style.overflow = '';
      }
      // Remove inert / fallback
      main?.removeAttribute('inert');
      footer?.removeAttribute('inert');
      main?.removeAttribute('aria-hidden');
      footer?.removeAttribute('aria-hidden');
      main?.classList.remove('bg-disabled');
      footer?.classList.remove('bg-disabled');
      // Restore focus
      previouslyFocused.current?.focus?.();
    }
  }, [open]);

  // Close automatically on resize to desktop
  useEffect(() => {
    function onResize(): void {
      if (window.innerWidth >= 600) setOpen(false);
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <nav className="container h-14 flex items-center justify-between relative" aria-label="Site header">
      <Link href="/" className="flex items-center" aria-label="Homepage">
        <Image src="/logo.svg" alt="Maxwell Software Solutions" width={240} height={60} className="site-logo w-auto" priority />
      </Link>
      <div className="nav-links" aria-label="Primary navigation">
        <Link href="/services">Services</Link>
        <Link href="/project-showcase">Case studies</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
      </div>
      <button
        type="button"
        className="menu-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={toggleMenu}
        data-test="menu-toggle"
      >
        <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {open ? <path d="M18 6L6 18M6 6l12 12" /> : <><path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" /></>}
        </svg>
      </button>
      {open && (
        <>
          <div
            className="nav-overlay open"
            onClick={closeMenu}
            aria-hidden="true"
            data-test="nav-overlay"
          />
          <div
            id="mobile-nav-panel"
            ref={panelRef}
            className="mobile-nav open"
            role="dialog"
            aria-modal="true"
            data-state="open"
            data-test="mobile-panel"
            tabIndex={-1}
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs uppercase tracking-wide opacity-70">Navigate</span>
              <button
                type="button"
                className="menu-close"
                aria-label="Close menu"
                onClick={closeMenu}
                data-test="menu-close"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col gap-4 text-lg font-medium">
              <li><Link ref={firstLinkRef} href="/services" onClick={closeMenu}>Services</Link></li>
              <li><Link href="/project-showcase" onClick={closeMenu}>Case studies</Link></li>
              <li><Link href="/about" onClick={closeMenu}>About</Link></li>
              <li><Link href="/blog" onClick={closeMenu}>Blog</Link></li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}
