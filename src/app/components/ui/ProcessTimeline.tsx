'use client';
import type { ReactElement } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export interface ProcessStep {
  title: string;
  desc: string;
}
interface ProcessTimelineProps {
  steps: ProcessStep[];
}

// Responsive process timeline: horizontal on lg+, vertical otherwise.
export function ProcessTimeline({ steps }: ProcessTimelineProps): ReactElement {
  const [active, setActive] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const ids = steps.map((s) => s.title.toLowerCase().replace(/\s+/g, '-'));
    const elements = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el));
    observerRef.current?.disconnect();
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to top (lowest boundingClientRect.y >= 0)
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.y - b.boundingClientRect.y);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0.1, 0.6] }
    );
    elements.forEach((el) => observer.observe(el));
    observerRef.current = observer;
    return () => observer.disconnect();
  }, [steps]);

  return (
    <div className="relative mt-4">
      {/* Desktop horizontal connector line */}
      <div
        className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300/60 dark:via-slate-600/50 to-transparent"
        aria-hidden="true"
      />
      <ol className="flex flex-col gap-10 lg:grid lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))] lg:gap-8">
        {steps.map((s, i) => {
          const id = s.title.toLowerCase().replace(/\s+/g, '-');
          return (
            <li
              key={s.title}
              id={id}
              className={[
                'relative group scroll-mt-28 transition-colors',
                active === id ? 'text-foreground' : 'text-foreground/80',
              ].join(' ')}
              aria-current={active === id ? 'step' : undefined}
            >
              {/* Desktop step number chip */}
              <div className="hidden lg:flex items-center mb-5">
                <div
                  className={[
                    'w-7 h-7 rounded-full bg-white dark:bg-slate-900 border border-black/10 dark:border-white/15 shadow flex items-center justify-center text-[13px] font-medium transition-colors',
                    active === id
                      ? 'border-amber-500 text-amber-700 dark:text-amber-300'
                      : 'text-slate-700 dark:text-slate-200 group-hover:border-amber-400/70 group-hover:text-amber-600 dark:group-hover:text-amber-300',
                  ].join(' ')}
                >
                  {i + 1}
                </div>
              </div>
              <MotionWrapper>
                <div className="flex items-start gap-4">
                  {/* Mobile rail + number */}
                  <div className="flex lg:hidden flex-col items-center mr-1">
                    <div
                      className={[
                        'w-7 h-7 rounded-full bg-white dark:bg-slate-900 border border-black/10 dark:border-white/15 shadow flex items-center justify-center text-[13px] font-medium mb-3 transition-colors',
                        active === id
                          ? 'border-amber-500 text-amber-700 dark:text-amber-300'
                          : 'text-slate-700 dark:text-slate-200',
                      ].join(' ')}
                    >
                      {i + 1}
                    </div>
                    {i < steps.length - 1 && (
                      <div
                        className="w-px flex-1 bg-gradient-to-b from-slate-300/70 dark:from-slate-700/60 to-transparent"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight leading-snug">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[--muted] max-w-prose">{s.desc}</p>
                  </div>
                </div>
              </MotionWrapper>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

// Wrapper component to apply reduced motion preferences gracefully.
function MotionWrapper({ children }: { children: ReactElement }): ReactElement {
  const prefersReduced = useReducedMotion();
  if (prefersReduced) {
    return (
      <div className="relative rounded-xl p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60">
        {children}
      </div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
      className="relative rounded-xl p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
    >
      {children}
    </motion.div>
  );
}

export default ProcessTimeline;
