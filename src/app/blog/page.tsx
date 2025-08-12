import type { Metadata } from 'next';
import type { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Insights — Maxwell Software Solutions',
  description: 'Short, high-signal posts on testing, refactoring, and reliability.',
};

export default function BlogIndexPage(): ReactElement {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-10 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold">Insights</h1>
      <p className="mt-3 text-foreground/80">Coming soon.</p>
    </div>
  );
}
