import Image from 'next/image';
import type { Metadata } from 'next';
import type { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Services — Maxwell Software Solutions',
  description: 'Code quality audits, reliability engineering, testing strategy, and CI/CD hardening.',
};

export default function ServicesPage(): ReactElement {
  return (
    <div className="container section" data-reveal>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Services</h1>
      <p className="mt-4 lead max-w-2xl">
        We help teams ship correct, maintainable, and observable software with measurable improvements.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2" data-reveal>
        <section className="card shadow-soft p-5">
          <div className="flex items-center gap-3">
            <Image src="/images/icon-audit.svg" alt="Audit icon" width={32} height={32} />
            <h2 className="text-xl font-semibold">Code Quality Audit</h2>
          </div>
          <p className="mt-2 text-sm text-foreground/80">
            Linters, static analysis, architecture review, and coverage mapping with a prioritized remediation plan.
          </p>
          <ul className="mt-3 list-disc list-inside text-sm text-foreground/80">
            <li>Find correctness risks and anti-patterns</li>
            <li>Coverage heatmap and test plan</li>
            <li>Report with quick wins and roadmap</li>
          </ul>
        </section>

        <section className="card shadow-soft p-5">
          <div className="flex items-center gap-3">
            <Image src="/images/icon-reliability.svg" alt="Reliability icon" width={32} height={32} />
            <h2 className="text-xl font-semibold">Reliability Engineering</h2>
          </div>
          <p className="mt-2 text-sm text-foreground/80">
            SLOs, error budgets, observability, and incident response to reduce MTTR and defect escape rate.
          </p>
          <ul className="mt-3 list-disc list-inside text-sm text-foreground/80">
            <li>Define SLOs and alert strategy</li>
            <li>Tracing, logs, and metrics with dashboards</li>
            <li>Runbooks and postmortem templates</li>
          </ul>
        </section>

        <section className="card shadow-soft p-5">
          <div className="flex items-center gap-3">
            <Image src="/images/icon-refactor.svg" alt="Refactoring icon" width={32} height={32} />
            <h2 className="text-xl font-semibold">Refactoring & Modernization</h2>
          </div>
          <p className="mt-2 text-sm text-foreground/80">
            Pay down technical debt and simplify systems to improve performance and developer velocity.
          </p>
        </section>

        <section className="card shadow-soft p-5">
          <div className="flex items-center gap-3">
            <Image src="/images/icon-testing.svg" alt="Testing icon" width={32} height={32} />
            <h2 className="text-xl font-semibold">Testing Strategy</h2>
          </div>
          <p className="mt-2 text-sm text-foreground/80">
            Pragmatic test pyramid: unit, integration, e2e, contract tests with CI gating and flaky test control.
          </p>
        </section>

        <section className="card shadow-soft p-5">
          <div className="flex items-center gap-3">
            <Image src="/images/icon-cicd.svg" alt="CI/CD icon" width={32} height={32} />
            <h2 className="text-xl font-semibold">CI/CD Hardening</h2>
          </div>
          <p className="mt-2 text-sm text-foreground/80">
            Fast, reliable pipelines with quality gates, preview environments, and DORA metrics visibility.
          </p>
        </section>
      </div>

      <div className="mt-10">
        <a href="/contact" className="btn btn-accent">
          Request a code audit
        </a>
      </div>
    </div>
  );
}
