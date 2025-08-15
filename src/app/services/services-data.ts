export interface ServiceItem {
  key: string;
  title: string;
  icon: string;
  alt: string;
  body: string;
  tagline: string;
  featured?: boolean;
}

export const services: ServiceItem[] = [
  {
    key: 'audit',
    title: 'Code Quality Audit',
    icon: '/images/icon-audit.svg',
    alt: 'Audit icon',
    body: 'Linters, static analysis, architecture review & coverage mapping with a prioritized remediation plan.',
    tagline: 'Fast insight → actionable roadmap',
  },
  {
    key: 'refactor',
    title: 'Refactoring & Modernization',
    icon: '/images/icon-refactor.svg',
    alt: 'Refactoring icon',
    body: 'Pay down debt safely, simplify coupling, and unlock faster iteration with incremental patterns.',
    tagline: 'Less drag, more flow',
  },
  {
    key: 'reliability',
    title: 'Reliability Engineering',
    icon: '/images/icon-reliability.svg',
    alt: 'Reliability icon',
    body: 'SLOs, error budgets, observability & incident rehearsal to reduce MTTR and defect escape rate.',
    tagline: 'Stability you can prove',
  },
  {
    key: 'testing',
    title: 'Testing Strategy',
    icon: '/images/icon-testing.svg',
    alt: 'Testing icon',
    body: 'Pragmatic pyramid, flaky test control & mutation insight for confidence without drag.',
    tagline: 'Confidence metrics > guesswork',
  },
  {
    key: 'cicd',
    title: 'CI/CD Hardening',
    icon: '/images/icon-cicd.svg',
    alt: 'CI/CD icon',
    body: 'Fast, reliable pipelines with quality gates, preview envs & DORA metrics visibility.',
    tagline: 'Ship faster, safer',
    featured: true,
  },
];
