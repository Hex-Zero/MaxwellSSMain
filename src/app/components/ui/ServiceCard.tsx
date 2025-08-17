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
        'group rounded-2xl border border-[--border] bg-[--card] p-6 md:p-7 shadow-sm transition',
        'hover:shadow-lg hover:-translate-y-0.5 focus-within:shadow-lg focus-within:-translate-y-0.5',
        'motion-safe:will-change-transform relative',
        'focus-within:outline-none focus-visible:ring-2 focus-visible:ring-accent/60',
        accent ? 'bg-gradient-to-br from-accent/5 to-transparent' : '',
      ].join(' ')}
    >
      <div className="flex items-start gap-4">
        <IconChip
          icon={imageSrc ? <Image src={imageSrc} alt={imageAlt || title} width={28} height={28} /> : icon || '🛠️'}
          from={accent ? 'from-amber-300' : 'from-neutral-200'}
          to={accent ? 'to-amber-500' : 'to-neutral-300'}
        />
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold tracking-tight leading-tight">{title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-[--muted] max-w-prose">{summary}</p>
          {meta && <p className="mt-3 text-[11px] uppercase tracking-wide text-[--muted]">{meta}</p>}
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;
