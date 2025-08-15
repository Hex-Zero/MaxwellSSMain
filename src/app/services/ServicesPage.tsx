import type { ReactElement } from 'react';
import { services } from './services-data';
import { processSteps } from './process-data';
import ServiceCard from './ServiceCard';

export default function ServicesPage(): ReactElement {
  return (
    <div className="container section" data-reveal>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Services &amp; Process</h1>
      <p className="mt-4 lead max-w-2xl">
        We help teams ship correct, maintainable, and observable software with measurable improvements. Below is how we
        engage and the core capabilities we bring.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3" data-reveal>
        <div className="flex flex-col gap-6">
          {services.slice(0, 2).map((s) => (
            <ServiceCard key={s.key} s={s} />
          ))}
        </div>
        <div className="flex flex-col gap-6">
          {services.slice(2, 4).map((s) => (
            <ServiceCard key={s.key} s={s} />
          ))}
        </div>
        <div className="flex flex-col gap-6">
          {services[4] && <ServiceCard s={services[4]} />}
          <section className="card shadow-soft p-5 flex flex-col justify-center items-start gap-4">
            <p className="text-sm text-foreground/75 leading-relaxed">
              Not sure where to begin? Start with a targeted audit and we’ll map the fastest leverage points. Engagement
              starts lightweight, de-risks change, and proves value early.
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
