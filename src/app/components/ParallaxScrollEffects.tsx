'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollEffects(): null {
  const pathname = usePathname();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const rafIdRef = useRef<number>(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Clean up previous effects
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
    }

    // Wait for DOM to be ready
    const initEffects = (): void => {
      // Reveal on intersect
      const revealEls = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
      );

      revealEls.forEach((el) => observer.observe(el));
      observerRef.current = observer;

      if (reduceMotion) {
        return;
      }

      // Parallax on scroll
      const parallaxEls = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));

      const update = (): void => {
        for (const el of parallaxEls) {
          const speedAttr = el.getAttribute('data-parallax');
          const speed = speedAttr ? Number(speedAttr) : 0.15; // 0..1
          const rect = el.getBoundingClientRect();
          const viewportH = window.innerHeight || document.documentElement.clientHeight;
          const center = rect.top + rect.height / 2;
          const delta = center - viewportH / 2; // positive when below center
          const maxShift = 24; // px, tasteful
          const y = Math.max(-maxShift, Math.min(maxShift, ((-delta * speed) / viewportH) * 2 * maxShift));
          el.style.setProperty('--y', `${y.toFixed(2)}px`);
        }
        rafIdRef.current = window.requestAnimationFrame(update);
      };

      rafIdRef.current = window.requestAnimationFrame(update);

      const onResize = (): void => {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = window.requestAnimationFrame(update);
      };
      window.addEventListener('resize', onResize);
    };

    // Small delay to ensure DOM is ready after navigation
    const timeoutId = setTimeout(initEffects, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [pathname]); // Re-run when pathname changes

  return null;
}
