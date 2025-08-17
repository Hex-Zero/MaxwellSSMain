import type { ReactElement, ReactNode } from 'react';
import IconChip from './IconChip';
import {
  CodeQualityAuditIcon,
  RefactoringModernizationIcon,
  ReliabilityEngineeringIcon,
  TestingStrategyIcon,
  CICDHardeningIcon,
  serviceTones,
} from '@/app/components/icons';

function getServiceIcon({ key, title }: { key: string; title: string }): ReactElement | null {
  switch (key) {
    case 'audit':
      return <CodeQualityAuditIcon size={28} title={title} className="text-amber-700 dark:text-amber-200" />;
    case 'refactor':
      return <RefactoringModernizationIcon size={28} title={title} className="text-teal-700 dark:text-teal-200" />;
    case 'reliability':
      return <ReliabilityEngineeringIcon size={28} title={title} className="text-indigo-700 dark:text-indigo-200" />;
    case 'testing':
      return <TestingStrategyIcon size={28} title={title} className="text-violet-700 dark:text-violet-200" />;
    case 'cicd':
      return <CICDHardeningIcon size={28} title={title} className="text-amber-800 dark:text-amber-100" />;
    default:
      return null;
  }
}

type ToneEntry = { fg: string; chip: string };
function resolveTone(key?: string): { fg: string; chipFrom: string; chipTo: string } {
  const fallback = {
    fg: 'text-slate-700 dark:text-slate-200',
    chipFrom: 'from-slate-200 dark:from-slate-700',
    chipTo: 'to-slate-50 dark:to-slate-800',
  };
  if (!key) return fallback;
  const map = serviceTones as Record<string, ToneEntry>;
  const entry = map[key];
  if (!entry) return fallback;
  const gradParts = entry.chip.split(' ').filter(Boolean);
  const from = gradParts.find((p) => p.startsWith('from-')) || fallback.chipFrom;
  const to = gradParts.find((p) => p.startsWith('to-')) || fallback.chipTo;
  return { fg: entry.fg, chipFrom: from, chipTo: to };
}
import Image from 'next/image';

export interface ServiceCardProps {
  title: string;
  summary: string;
  icon?: ReactNode; // emoji or JSX icon
  imageSrc?: string; // deprecated (raster fallback)
  imageAlt?: string; // deprecated
  iconKey?: string; // symbolic icon key
  meta?: string;
  tone?: 'default' | 'accent';
}

export function ServiceCard({
  title,
  summary,
  icon,
  imageSrc,
  imageAlt,
  iconKey,
  meta,
  tone = 'default',
}: ServiceCardProps): ReactElement {
  const accent = tone === 'accent';
  return (
    <article
      className={[
        'group rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-slate-900',
        'p-6 md:p-7 shadow-[0_1px_1px_rgba(0,0,0,.06),0_8px_24px_rgba(0,0,0,.08)] transition h-full',
        'motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-lg motion-safe:focus-within:-translate-y-0.5 motion-safe:focus-within:shadow-lg',
        'motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:focus-within:translate-y-0 motion-reduce:hover:shadow-[0_1px_1px_rgba(0,0,0,.06),0_8px_24px_rgba(0,0,0,.08)]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 relative',
        accent ? 'bg-gradient-to-br from-amber-50/80 to-transparent dark:from-amber-400/10' : '',
      ].join(' ')}
    >
      <div className="flex items-start gap-4">
        <IconChip
          icon={
            getServiceIcon({ key: iconKey || '', title: imageAlt || title }) ||
            (imageSrc ? <Image src={imageSrc} alt={imageAlt || title} width={28} height={28} /> : icon || '🛠️')
          }
          from={resolveTone(iconKey).chipFrom}
          to={resolveTone(iconKey).chipTo}
          className={resolveTone(iconKey).fg}
          label={imageAlt || title}
        />
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold tracking-tight leading-tight">{title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-[--muted] max-w-prose line-clamp-4">{summary}</p>
          {meta && <p className="mt-3 text-[12px] tracking-wide text-slate-500 dark:text-slate-400">{meta}</p>}
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;
