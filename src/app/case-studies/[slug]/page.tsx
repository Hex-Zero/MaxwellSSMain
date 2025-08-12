import type { Metadata } from 'next';

type Params = { slug: string };

export function generateMetadata({ params }: { params: Params }): Metadata {
  return {
    title: `${params.slug.replace(/-/g, ' ')} — Case Study | Maxwell Software Solutions`,
  };
}

export default function CaseStudyPage({ params }: { params: Params }) {
  const title = params.slug.replace(/-/g, ' ');
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-10 py-12">
      <p className="text-sm text-foreground/60">Case study</p>
      <h1 className="mt-2 text-3xl sm:text-4xl font-bold capitalize">{title}</h1>
      <div className="mt-6 space-y-4 text-foreground/85">
        <p>Context, challenges, and objectives.</p>
        <p>Actions: audits, refactors, testing strategy, observability, and CI improvements.</p>
        <p>Results: measurable improvements (defect rate, coverage, MTTR). Add real data here.</p>
      </div>
    </div>
  );
}
