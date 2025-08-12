import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Studies — Maxwell Software Solutions',
  description: 'Real results from code quality and reliability engagements.',
};

const sample = [
  {
    slug: 'retail-platform',
    title: 'Retail platform — escaped defects down 58%',
    summary: 'Stabilized CI, added SLOs, refactored brittle modules.',
  },
  {
    slug: 'fintech-api',
    title: 'Fintech API — coverage up 32%',
    summary: 'Contract tests + golden tests; faster incident resolution.',
  },
  {
    slug: 'saas-migration',
    title: 'SaaS migration — MTTR down 45%',
    summary: 'Observability and runbooks enabled quick recovery.',
  },
];

export default function CaseStudiesIndex(): ReactElement {
  return (
    <div className="container section" data-reveal>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Case studies</h1>
      <p className="mt-3 lead max-w-2xl">
        Selected results across industries. Each study includes context, actions, and measurable outcomes.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-reveal>
        {sample.map((c) => (
          <Link key={c.slug} href={`/case-studies/${c.slug}`} className="card shadow-soft p-5 block hover:opacity-90">
            <h2 className="text-lg font-semibold">{c.title}</h2>
            <p className="mt-2 text-sm text-foreground/80">{c.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
