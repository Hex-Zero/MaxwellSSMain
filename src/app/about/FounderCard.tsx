"use client";
import Image from 'next/image';
import type { ReactElement } from 'react';
import type { FounderInfo } from './founders-data';
import { founderImage } from './founders-data';

export function FounderCard({ f, index }: { f: FounderInfo; index: number }): ReactElement {
  const imgSrc = founderImage[f.name] || '/images/founders/maxwell.svg';
  return (
    <figure
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
            priority={index === 0}
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
}

export default FounderCard;
