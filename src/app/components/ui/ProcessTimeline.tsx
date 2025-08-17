'use client';
import type { ReactElement } from 'react';
import { motion } from 'framer-motion';

export interface ProcessStep {
  title: string;
  desc: string;
}
interface ProcessTimelineProps {
  steps: ProcessStep[];
}

// Responsive process timeline: horizontal on lg+, vertical otherwise.
export function ProcessTimeline({ steps }: ProcessTimelineProps): ReactElement {
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
            <li key={s.title} id={id} className="relative group scroll-mt-28">
              {/* Desktop step number chip */}
              <div className="hidden lg:flex items-center mb-5">
                <div className="w-7 h-7 rounded-full bg-white dark:bg-slate-900 border border-black/10 dark:border-white/15 shadow flex items-center justify-center text-[13px] font-medium text-slate-700 dark:text-slate-200 group-hover:border-amber-400/70 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                  {i + 1}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                className="relative rounded-xl p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
              >
                <div className="flex items-start gap-4">
                  {/* Mobile rail + number */}
                  <div className="flex lg:hidden flex-col items-center mr-1">
                    <div className="w-7 h-7 rounded-full bg-white dark:bg-slate-900 border border-black/10 dark:border-white/15 shadow flex items-center justify-center text-[13px] font-medium text-slate-700 dark:text-slate-200 mb-3">
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
              </motion.div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default ProcessTimeline;
