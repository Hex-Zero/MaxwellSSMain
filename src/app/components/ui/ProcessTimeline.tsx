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
    <div className="relative mt-10">
      {/* Horizontal connector (desktop) */}
      <div
        className="hidden lg:block absolute top-14 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[--border] to-transparent"
        aria-hidden="true"
      />
      <ol className="flex flex-col gap-8 lg:grid lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))] lg:gap-10">
        {steps.map((s, i) => (
          <li key={s.title} className="relative">
            {/* Connector dots for horizontal layout */}
            <div className="hidden lg:flex items-center mb-4">
              <div className="w-7 h-7 rounded-full bg-[--card] border border-[--border] shadow-sm flex items-center justify-center text-[13px] font-medium text-neutral-700 dark:text-neutral-200">
                {i + 1}
              </div>
            </div>
            <motion.div
              whileHover={{ y: -6, boxShadow: '0 4px 16px -4px rgba(0,0,0,0.15),0 12px 32px -6px rgba(0,0,0,0.18)' }}
              whileFocus={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              className="group rounded-2xl border border-[--border] bg-[--card] p-5 shadow-sm focus-within:shadow-lg focus-visible:ring-2 focus-visible:ring-accent/50 transition relative hover:-translate-y-1"
            >
              <div className="flex items-start gap-3 mb-1">
                <div className="w-8 h-8 rounded-full bg-[--card] border border-[--border] flex items-center justify-center text-[12px] font-medium text-neutral-700 dark:text-neutral-200">
                  {i + 1}
                </div>
                <h3 className="text-base font-semibold tracking-tight leading-tight">{s.title}</h3>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-[--muted] max-w-prose">{s.desc}</p>
            </motion.div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ProcessTimeline;
