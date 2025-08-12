import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services — Maxwell Software Solutions',
  description: 'Code quality audits, reliability engineering, testing strategy, and CI/CD hardening.',
};

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold">Services</h1>
      <p className="mt-3 text-foreground/80 max-w-2xl">
        We help teams ship correct, maintainable, and observable software with measurable improvements.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <section className="rounded-lg border border-foreground/10 p-5">
          <h2 className="text-xl font-semibold">Code Quality Audit</h2>
          <p className="mt-2 text-sm text-foreground/80">
            Linters, static analysis, architecture review, and coverage mapping with a prioritized remediation plan.
          </p>
          <ul className="mt-3 list-disc list-inside text-sm text-foreground/80">
            <li>Find correctness risks and anti-patterns</li>
            <li>Coverage heatmap and test plan</li>
            <li>Report with quick wins and roadmap</li>
          </ul>
        </section>

        <section className="rounded-lg border border-foreground/10 p-5">
          <h2 className="text-xl font-semibold">Reliability Engineering</h2>
          <p className="mt-2 text-sm text-foreground/80">
            SLOs, error budgets, observability, and incident response to reduce MTTR and defect escape rate.
          </p>
          <ul className="mt-3 list-disc list-inside text-sm text-foreground/80">
            <li>Define SLOs and alert strategy</li>
            <li>Tracing, logs, and metrics with dashboards</li>
            <li>Runbooks and postmortem templates</li>
          </ul>
        </section>

        <section className="rounded-lg border border-foreground/10 p-5">
          <h2 className="text-xl font-semibold">Refactoring & Modernization</h2>
          <p className="mt-2 text-sm text-foreground/80">
            Pay down technical debt and simplify systems to improve performance and developer velocity.
          </p>
        </section>

        <section className="rounded-lg border border-foreground/10 p-5">
          <h2 className="text-xl font-semibold">Testing Strategy</h2>
          <p className="mt-2 text-sm text-foreground/80">
            Pragmatic test pyramid: unit, integration, e2e, contract tests with CI gating and flaky test control.
          </p>
        </section>

        <section className="rounded-lg border border-foreground/10 p-5">
          <h2 className="text-xl font-semibold">CI/CD Hardening</h2>
          <p className="mt-2 text-sm text-foreground/80">
            Fast, reliable pipelines with quality gates, preview environments, and DORA metrics visibility.
          </p>
        </section>
      </div>

      <div className="mt-10">
        <a href="/contact" className="rounded-md px-5 py-3 bg-foreground text-background text-sm font-medium">
          Request a code audit
        </a>
      </div>
    </div>
  );
}
