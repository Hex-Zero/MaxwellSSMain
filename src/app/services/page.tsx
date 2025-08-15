import Image from 'next/image';
import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import { processSteps } from './process-data';

export const metadata: Metadata = {
  title: 'Services — Maxwell Software Solutions',
  description: 'Code quality audits, reliability engineering, testing strategy, and CI/CD hardening.',
};

export default function ServicesPage(): ReactElement {
  return (
    <div className="container section" data-reveal>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Services & Process</h1>
      <p className="mt-4 lead max-w-2xl">
        We help teams ship correct, maintainable, and observable software with measurable improvements. Below is how we engage and the core capabilities we bring.
      </p>

  <div className="mt-10 grid gap-6 md:grid-cols-3" data-reveal>
        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          <section className="card shadow-soft p-5 group hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <Image src="/images/icon-audit.svg" alt="Audit icon" width={32} height={32} />
              <h2 className="text-lg font-semibold tracking-tight">Code Quality Audit</h2>
            </div>
            <p className="mt-2 text-sm text-foreground/75 leading-relaxed">
              Linters, static analysis, architecture review & coverage mapping with a prioritized remediation plan.
            </p>
            <p className="mt-2 text-xs uppercase tracking-wide text-foreground/50">Fast insight → actionable roadmap</p>
          </section>
          <section className="card shadow-soft p-5 group hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <Image src="/images/icon-refactor.svg" alt="Refactoring icon" width={32} height={32} />
              <h2 className="text-lg font-semibold tracking-tight">Refactoring & Modernization</h2>
            </div>
            <p className="mt-2 text-sm text-foreground/75 leading-relaxed">
              Pay down debt safely, simplify coupling, and unlock faster iteration with incremental patterns.
            </p>
            <p className="mt-2 text-xs uppercase tracking-wide text-foreground/50">Less drag, more flow</p>
          </section>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-6">
          <section className="card shadow-soft p-5 group hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <Image src="/images/icon-reliability.svg" alt="Reliability icon" width={32} height={32} />
              <h2 className="text-lg font-semibold tracking-tight">Reliability Engineering</h2>
            </div>
            <p className="mt-2 text-sm text-foreground/75 leading-relaxed">
              SLOs, error budgets, observability & incident rehearsal to reduce MTTR and defect escape rate.
            </p>
            <p className="mt-2 text-xs uppercase tracking-wide text-foreground/50">Stability you can prove</p>
          </section>
          <section className="card shadow-soft p-5 group hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <Image src="/images/icon-testing.svg" alt="Testing icon" width={32} height={32} />
              <h2 className="text-lg font-semibold tracking-tight">Testing Strategy</h2>
            </div>
            <p className="mt-2 text-sm text-foreground/75 leading-relaxed">
              Pragmatic pyramid, flaky test control & mutation insight for confidence without drag.
            </p>
            <p className="mt-2 text-xs uppercase tracking-wide text-foreground/50">Confidence metrics &gt; guesswork</p>
          </section>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-6">
          <section className="card bg-gradient-to-br from-accent/10 to-transparent border border-accent/30 shadow-soft p-5 group hover:shadow-lg transition-shadow relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.25),transparent_60%)]"
              aria-hidden="true"
            />
            <div className="flex items-center gap-3 relative">
              <Image src="/images/icon-cicd.svg" alt="CI/CD icon" width={32} height={32} />
              <h2 className="text-lg font-semibold tracking-tight">CI/CD Hardening</h2>
            </div>
            <p className="mt-2 text-sm text-foreground/75 leading-relaxed relative">
              Fast, reliable pipelines with quality gates, preview envs & DORA metrics visibility.
            </p>
            <p className="mt-2 text-xs uppercase tracking-wide text-foreground/50 relative">Ship faster, safer</p>
          </section>
          <section className="card shadow-soft p-5 flex flex-col justify-center items-start gap-4">
            <p className="text-sm text-foreground/75 leading-relaxed">
              Not sure where to begin? Start with a targeted audit and we’ll map the fastest leverage points. Engagement starts lightweight, de-risks change, and proves value early.
            </p>
            <span className="text-xs uppercase tracking-wide text-foreground/50">Contact CTA removed</span>
          </section>
        </div>
      </div>
      <div className="mt-20" data-reveal>
        <h2 className="text-3xl font-bold tracking-tight">Consulting Process</h2>
        <p className="mt-3 text-sm max-w-2xl text-foreground/70">
          A lightweight, outcome-focused sequence that surfaces risk early and compounds engineering throughput.
        </p>
        <ol className="mt-8 grid gap-6 sm:grid-cols-2">
          {processSteps.map((s, i) => (
            <li key={s.title} className="rounded-lg border border-foreground/10 p-5">
              <div className="text-xs text-foreground/60">Step {i + 1}</div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-foreground/80">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
