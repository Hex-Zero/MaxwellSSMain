import type { ReactElement, ReactNode } from 'react';
import IconChip from './IconChip';
import Image from 'next/image';

export interface ServiceCardProps {
  title: string;
  summary: string;
  icon?: ReactNode; // emoji or JSX icon
  imageSrc?: string;
  imageAlt?: string;
  meta?: string;
  tone?: 'default' | 'accent';
}

export function ServiceCard({
  title,
  summary,
  icon,
  imageSrc,
  imageAlt,
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
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 relative',
        accent ? 'bg-gradient-to-br from-amber-50/80 to-transparent dark:from-amber-400/10' : '',
      ].join(' ')}
    >
      <div className="flex items-start gap-4">
        <IconChip
          icon={imageSrc ? <Image src={imageSrc} alt={imageAlt || title} width={28} height={28} /> : icon || '🛠️'}
          from={accent ? 'from-amber-400' : 'from-slate-200 dark:from-slate-700'}
          to={accent ? 'to-amber-600' : 'to-slate-300 dark:to-slate-600'}
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
