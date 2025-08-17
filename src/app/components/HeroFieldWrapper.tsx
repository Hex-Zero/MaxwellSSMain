'use client';
import dynamic from 'next/dynamic';
import DeferredClient from './DeferredClient';
import type { ReactElement } from 'react';

const ParticleField = dynamic(() => import('./ParticleField'), {
  ssr: false,
  loading: () => (
    <div className="relative w-full h-[380px] sm:h-[460px] md:h-[520px] rounded-xl overflow-hidden bg-gradient-to-br from-accent/5 via-transparent to-accent/10 border border-foreground/10 flex items-center justify-center">
      <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/30">Loading field…</span>
    </div>
  ),
});

export default function HeroFieldWrapper(): ReactElement {
  return (
    <div className="mt-12" data-parallax="0.1" data-reveal>
      <span className="sr-only">Interactive field</span>
      <DeferredClient
        fallback={
          <div
            className="h-[380px] sm:h-[460px] md:h-[520px] rounded-xl bg-accent/5 animate-pulse"
            aria-hidden="true"
          />
        }
        minHeight="380px"
      >
        <ParticleField />
      </DeferredClient>
    </div>
  );
}
