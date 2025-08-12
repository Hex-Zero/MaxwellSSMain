'use client';

import { useEffect } from 'react';

export default function ScrollEffects(): null {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

    if (reduceMotion) {
      return () => {
        observer.disconnect();
      };
    }

    // Parallax on scroll
    const parallaxEls = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
    let rafId = 0;

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
      rafId = window.requestAnimationFrame(update);
    };

    rafId = window.requestAnimationFrame(update);
    const onResize = (): void => {
      cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(update);
    };
    window.addEventListener('resize', onResize);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return null;
}
