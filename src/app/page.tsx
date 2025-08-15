import type { ReactElement } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically import non-critical components
const ClientLogos = dynamic(() => import('@/app/components/ClientLogos'), {
  loading: () => <div className="h-20 bg-gray-100 animate-pulse rounded" />,
  ssr: true,
});

export default function Home(): ReactElement {
  return (
    <main className="min-h-screen font-sans">
      <section className="hero-gradient section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto" data-reveal>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">Build with confidence.</h1>
            <p className="lead mt-4">
              Ship reliable software through code quality audits, testing strategy, refactoring, and observability.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <a href="/contact" className="btn btn-accent">
                Request a code audit
              </a>
              <a href="/services" className="btn btn-ghost">
                Explore services
              </a>
            </div>
          </div>
          <div className="mt-12" data-parallax="0.15" data-reveal>
            <div className="full-image">
              <Image
                src="/images/hero-consulting.svg"
                alt="Modern software consulting illustration"
                width={1600}
                height={900}
                priority
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwMCIgaGVpZ2h0PSI5MDAiIHZpZXdCb3g9IjAgMCAxNjAwIDkwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE2MDAiIGhlaWdodD0iOTAwIiBmaWxsPSIjZjNmNGY2Ii8+Cjwvc3ZnPgo="
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                fetchPriority="high"
              />
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3" data-reveal>
            <div className="card shadow-soft p-5 text-center">
              <div className="text-2xl font-semibold">-60%</div>
              <div className="muted text-sm">Escaped defects</div>
            </div>
            <div className="card shadow-soft p-5 text-center">
              <div className="text-2xl font-semibold">+35%</div>
              <div className="muted text-sm">Test coverage</div>
            </div>
            <div className="card shadow-soft p-5 text-center">
              <div className="text-2xl font-semibold">-45%</div>
              <div className="muted text-sm">MTTR</div>
            </div>
          </div>
          {/* Value propositions */}
          <div
            className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            data-reveal
            aria-label="Key value propositions"
          >
            {[
              {
                title: 'Independent insight',
                body: 'Objective code quality audits that uncover structural risk, hidden complexity, and testing blind spots.',
              },
              {
                title: 'Faster iteration',
                body: 'Refactoring & architecture guidance that reduces cycle time and improves developer confidence.',
              },
              {
                title: 'Reliability focus',
                body: 'Observability patterns, failure-mode analysis, and guardrails that harden production systems.',
              },
              {
                title: 'Measurable outcomes',
                body: 'We align on baselines, instrument improvements, and report tangible engineering impact.',
              },
            ].map((v) => (
              <div key={v.title} className="card p-5 shadow-soft h-full flex flex-col">
                <h3 className="font-semibold text-lg tracking-tight">{v.title}</h3>
                <p className="mt-2 text-sm text-foreground/80 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ClientLogos />
      {/* Full-bleed banner */}
      <section>
        <div className="container" data-reveal>
          <div className="full-image">
            <Image
              src="/images/banner-fullbleed.svg"
              alt="Abstract full-bleed banner"
              width={2400}
              height={640}
              sizes="(min-width: 1024px) 1024px, 100vw"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Capabilities overview */}
      <section
        className="px-6 sm:px-10 py-20 border-t border-foreground/10 bg-background/50"
        aria-labelledby="capabilities-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 id="capabilities-heading" className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Capabilities
            </h2>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              Deep focus on software quality, sustainable velocity, and operational excellence. We embed alongside your
              team to reduce risk and accelerate delivery.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-reveal>
            {[
              {
                icon: '🧪',
                title: 'Testing Strategy',
                body: 'Layered test architectures, mutation & coverage analysis, flakiness reduction.',
              },
              {
                icon: '📦',
                title: 'Refactoring',
                body: 'Modularization, domain boundaries, incremental strangler patterns.',
              },
              {
                icon: '🔍',
                title: 'Observability',
                body: 'SLO design, trace-driven diagnostics, proactive error budgets.',
              },
              {
                icon: '🛡️',
                title: 'Reliability',
                body: 'Chaos rehearsal, failure mode reviews, incident response hardening.',
              },
            ].map((c) => (
              <div key={c.title} className="card p-6 shadow-soft flex flex-col" aria-label={c.title}>
                <div className="text-2xl" aria-hidden="true">
                  {c.icon}
                </div>
                <h3 className="mt-3 font-medium tracking-tight">{c.title}</h3>
                <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 sm:px-10 py-16 border-t border-foreground/10">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold">About</h2>
            <p className="mt-3 text-foreground/80">
              This is a clean starting point. Ask for layout, color, or content changes and I’ll implement them
              immediately.
            </p>
          </div>
          <div className="rounded-lg border border-foreground/10 p-4">
            <p className="text-sm text-foreground/70">
              Tip: say something like “Make the hero background a subtle gradient and add a CTA button that links to
              /contact”.
            </p>
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section
        className="px-6 sm:px-10 py-20 border-t border-foreground/10 bg-background/30"
        aria-labelledby="process-heading"
      >
        <div className="max-w-6xl mx-auto" data-reveal>
          <h2 id="process-heading" className="text-3xl sm:text-4xl font-semibold tracking-tight">
            How engagements work
          </h2>
          <ol className="mt-10 relative border-s border-foreground/15 pl-8 space-y-10">
            {[
              {
                step: '01',
                title: 'Technical discovery',
                body: 'Architecture & repository review, quality baselining, risk surfacing, metric capture.',
              },
              {
                step: '02',
                title: 'Roadmap alignment',
                body: 'Define target outcomes, select focus areas, establish success criteria.',
              },
              {
                step: '03',
                title: 'Enable & uplift',
                body: 'Refactoring spikes, test harness improvements, observability instrumentation.',
              },
              {
                step: '04',
                title: 'Measurement & handoff',
                body: 'Quantify impact, transfer knowledge, create sustaining playbooks.',
              },
            ].map((s, idx) => (
              <li key={s.step} className="group">
                <div
                  className="absolute -left-[13px] mt-1 w-6 h-6 rounded-full border bg-background group-hover:bg-accent/10 transition"
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-1">
                  <span className="text-xs tracking-wide font-mono text-foreground/60">{s.step}</span>
                  <h3 className="font-medium tracking-tight text-lg">{s.title}</h3>
                  <p className="text-sm text-foreground/75 leading-relaxed max-w-prose">{s.body}</p>
                </div>
                {idx < 3 && (
                  <div
                    className="absolute left-[-1px] top-8 bottom-0 border-s border-dashed border-foreground/15"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="projects" className="hairline">
        <div className="container section">
          <div className="eyebrow">Selected work</div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Case studies</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="card shadow-soft p-5">
                <h3 className="font-medium">Project {n}</h3>
                <p className="mt-2 text-sm text-foreground/80">
                  Replace this with real work. I can scaffold sections or data fetching on request.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / social proof placeholder */}
      <section className="px-6 sm:px-10 py-20 border-t border-foreground/10" aria-labelledby="testimonials-heading">
        <div className="max-w-6xl mx-auto" data-reveal>
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Client perspective
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                quote:
                  'They reduced build flakiness and restructured our test pyramid—deployment confidence went up immediately.',
                author: 'VP Engineering, SaaS Platform',
              },
              {
                quote: 'Our critical path refactor shipped 6 weeks earlier with their architectural guidance.',
                author: 'Director of Engineering, FinTech',
              },
              {
                quote: 'Actionable audit, crisp patterns, and measurable reliability improvements across services.',
                author: 'Principal Engineer, Retail',
              },
            ].map((t) => (
              <figure key={t.author} className="card shadow-soft p-6 flex flex-col justify-between">
                <blockquote className="text-sm leading-relaxed text-foreground/80">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-xs font-medium uppercase tracking-wide text-foreground/60">
                  {t.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 sm:px-10 py-16 border-t border-foreground/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-3 text-foreground/80">
            Tell me what you want here (form, links, social icons), and I’ll add it.
          </p>
          <div className="mt-8 max-w-xl">
            <div className="card p-6 shadow-soft">
              <h3 className="font-medium tracking-tight">Start the conversation</h3>
              <p className="mt-2 text-sm text-foreground/75 leading-relaxed">
                Outline your current challenges and desired outcomes. You will receive a rapid response with an initial
                diagnostic perspective and next-step options.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <a href="/contact" className="btn btn-accent">
                  Request intro call
                </a>
                <a href="/services" className="btn btn-ghost">
                  View detailed services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
