import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About — Maxwell Software Solutions',
  description: 'Our mission: correctness, simplicity, observability, automation.',
};

export default function AboutPage(): ReactElement {
  return (
  <div className="max-w-5xl mx-auto px-6 sm:px-10 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold">About</h1>
      <div className="mt-4 space-y-4 text-foreground/85">
        <p>
          Maxwell Software Solutions focuses on code quality and reliability. We believe correctness and simplicity
          enable speed.
        </p>
        <ul className="list-disc list-inside">
          <li>Correctness over cleverness</li>
          <li>Observability as a feature</li>
          <li>Automation and reproducibility</li>
        </ul>
      </div>
      {/* Founders */}
      <section className="mt-16" aria-labelledby="founders-heading">
        <h2 id="founders-heading" className="text-3xl font-semibold tracking-tight">Founders</h2>
        <p className="mt-4 text-base text-foreground/70 max-w-2xl">
          A compact senior core blending deep engineering rigor, product design clarity, and outcome-focused strategy.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            {
              name: 'Maxwell Archer',
              role: 'Software Engineer & SEO',
              bio: 'Sculpts sustainable velocity: clarity, automation, measurable quality signals—and removing drag.',
              alt: 'Cartoon illustration of Maxwell Archer',
              gradient: 'from-indigo-600 via-sky-500 to-cyan-400',
            },
            {
              name: 'Petras Rolinskij',
              role: 'Design Director',
              bio: 'Shapes interfaces where aesthetic precision amplifies conversion and user trust.',
              alt: 'Cartoon illustration of Petras Rolinskij',
              gradient: 'from-fuchsia-600 via-pink-500 to-rose-400',
            },
            {
              name: 'Marek Wolosewicz',
              role: 'Managing Director',
              bio: 'Turns reliability & speed into strategic leverage—aligning engineering bets with growth.',
              alt: 'Cartoon illustration of Marek Wolosewicz',
              gradient: 'from-amber-500 via-orange-500 to-red-400',
            },
          ].map((f, idx) => {
            const fileMap: Record<string, string> = {
              'Maxwell Archer': '/images/founders/maxwell.svg',
              'Petras Rolinskij': '/images/founders/petras.svg',
              'Marek Wolosewicz': '/images/founders/marek.svg',
            };
            const imgSrc = fileMap[f.name] || '/images/founders/maxwell.svg';
            return (
              <figure
                key={f.name}
                className="relative rounded-2xl border border-foreground/10 bg-gradient-to-br p-8 shadow-soft overflow-hidden group min-h-[22rem] flex flex-col"
              >
                <div
                  className={`absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-br ${f.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}
                  aria-hidden="true"
                />
                <div className="relative flex flex-col gap-5 grow">
                  <div className="flex items-center gap-5">
                    <Image
                      src={imgSrc}
                      alt={f.alt}
                      width={120}
                      height={120}
                      className="w-28 h-28 rounded-xl shadow-xl ring-2 ring-white/40 object-cover"
                      priority={idx === 0}
                    />
                    <figcaption className="flex flex-col">
                      <div className="font-semibold text-lg leading-tight tracking-tight">{f.name}</div>
                      <div className="text-xs uppercase tracking-wide text-foreground/60 mt-1">{f.role}</div>
                    </figcaption>
                  </div>
                  <p className="text-sm text-foreground/75 leading-relaxed mt-1 max-w-prose">{f.bio}</p>
                  <div className="mt-auto pt-4">
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-wider text-foreground/50">
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      Focus • Craft • Impact
                    </span>
                  </div>
                </div>
              </figure>
            );
          })}
        </div>
      </section>
    </div>
  );
}
