import type { Metadata } from 'next';
import type { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Process — Maxwell Software Solutions',
  description: 'Discover → Audit → Plan → Implement → Sustain',
};

const steps = [
  { title: 'Discover', text: 'Understand goals, constraints, and current state.' },
  { title: 'Audit', text: 'Codebase analysis, tests, reliability posture, and CI review.' },
  { title: 'Plan', text: 'Prioritized roadmap with quick wins and risk reduction.' },
  { title: 'Implement', text: 'Refactors, tests, observability, and pipeline hardening.' },
  { title: 'Sustain', text: 'Docs, runbooks, metrics tracking, and continuous improvement.' },
];

export default function ProcessPage(): ReactElement {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold">Process</h1>
      <ol className="mt-8 grid gap-6 sm:grid-cols-2">
        {steps.map((s, i) => (
          <li key={s.title} className="rounded-lg border border-foreground/10 p-5">
            <div className="text-sm text-foreground/60">Step {i + 1}</div>
            <h2 className="text-xl font-semibold">{s.title}</h2>
            <p className="mt-2 text-sm text-foreground/80">{s.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
