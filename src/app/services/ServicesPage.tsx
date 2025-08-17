import type { ReactElement } from 'react';
import { services } from './services-data';
import { processSteps } from './process-data';
import ServiceCard from '@/app/components/ui/ServiceCard';
import ProcessTimeline from '@/app/components/ui/ProcessTimeline';
import CTA from '@/app/components/ui/CTA';

export default function ServicesPage(): ReactElement {
  const mappedServices = services.map((s) => ({
    key: s.key,
    title: s.title,
    summary: s.body,
    imageSrc: s.icon,
    imageAlt: s.alt,
    meta: s.tagline,
    tone: s.featured ? 'accent' : 'default',
  }));
  const steps = processSteps.map((p) => ({ title: p.title, desc: p.text }));
  return (
    <div className="[--bg:#f8fafc] dark:[--bg:#0a0f19] [--card:#ffffff] dark:[--card:#0f172a] [--muted:#6b7280] dark:[--muted:#94a3b8] [--border:rgba(2,6,23,0.08)] dark:[--border:rgba(255,255,255,0.08)] font-sans bg-[--bg] text-neutral-900 dark:text-neutral-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-14 pb-6">
        <p className="text-sm font-medium tracking-widest text-[--muted] uppercase mb-4">Expert partnership</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] max-w-3xl">
          Services & Process
        </h1>
        <p className="mt-6 text-lg leading-relaxed max-w-3xl text-[--muted]">
          We help teams ship correct, maintainable, and observable software with measurable improvements.
        </p>
        <p className="mt-4 text-lg leading-relaxed max-w-3xl text-[--muted]">
          Focused engagements amplify engineering effectiveness: faster iteration, observable systems, and measurable
          reliability gains.
        </p>
        <p className="mt-3 text-sm text-[--muted] max-w-2xl">
          Start lightweight—prove value quickly, expand impact deliberately.
        </p>
      </div>
      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {mappedServices.map((svc) => (
            <ServiceCard
              key={svc.key}
              title={svc.title}
              summary={svc.summary}
              imageSrc={svc.imageSrc}
              imageAlt={svc.imageAlt}
              meta={svc.meta}
              tone={svc.tone as 'default' | 'accent'}
            />
          ))}
        </div>
      </section>
      {/* Process */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mt-24">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Consulting Process</h2>
        <p className="mt-4 text-base leading-relaxed max-w-3xl text-[--muted]">
          A guided, outcome-focused sequence—surface risk early, create leverage, institutionalize improvements.
        </p>
        <ProcessTimeline steps={steps} />
      </section>
      {/* CTA Band */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <CTA
          title="Book a discovery call"
          body="Explore fit, clarify goals, and identify the fastest path to measurable impact. No obligation, high signal."
          primary={{ href: '/contact', label: 'Book now' }}
          secondary={{ href: '/services', label: 'Explore services' }}
        />
      </div>
    </div>
  );
}
