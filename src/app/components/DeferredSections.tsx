'use client';
import dynamic from 'next/dynamic';
import DeferredClient from './DeferredClient';
import type { ReactElement } from 'react';

const TestimonialsLazy = dynamic(() => import('@/app/components/TestimonialsSection'), { ssr: false });
const DarkShowcaseLazy = dynamic(() => import('@/app/components/DarkShowcaseSection'), { ssr: false });
const FinalCtaLazy = dynamic(() => import('@/app/components/FinalCtaSection'), { ssr: false });

export default function DeferredSections(): ReactElement {
  return (
    <>
      <DeferredClient
        minHeight="20rem"
        fallback={
          <section className="px-6 sm:px-10 py-20 border-t border-foreground/10">
            <p className="text-sm text-foreground/50">Loading testimonials…</p>
          </section>
        }
      >
        <TestimonialsLazy />
      </DeferredClient>
      <DeferredClient
        minHeight="24rem"
        fallback={
          <section className="px-6 sm:px-10 py-24 border-t border-foreground/10">
            <p className="text-sm text-foreground/50">Preparing showcase…</p>
          </section>
        }
      >
        <DarkShowcaseLazy />
      </DeferredClient>
      <DeferredClient
        minHeight="24rem"
        fallback={
          <section className="px-6 sm:px-10 py-24 border-t border-foreground/10">
            <p className="text-sm text-foreground/50">Loading call to action…</p>
          </section>
        }
      >
        <FinalCtaLazy />
      </DeferredClient>
    </>
  );
}
