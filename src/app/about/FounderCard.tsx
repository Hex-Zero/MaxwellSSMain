"use client";
import type { ReactElement } from 'react';
import type { FounderInfo } from './founders-data';
import Avatar from '../components/avatars/Avatar';
import { presets } from '../components/avatars/presets';

export function FounderCard({ f }: { f: FounderInfo }): ReactElement {
  // Map founder name to preset key when available
  const presetKey = f.name.toLowerCase().startsWith('maxwell')
    ? 'maxwell'
    : f.name.toLowerCase().startsWith('petras')
      ? 'petras'
      : f.name.toLowerCase().startsWith('marek')
        ? 'marek'
        : undefined;
  const preset = presetKey ? presets[presetKey] : undefined;
  return (
    <figure className="relative rounded-2xl border border-foreground/10 bg-gradient-to-br p-8 shadow-soft overflow-hidden group min-h-[22rem] flex flex-col">
      <div
        className={`absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-br ${f.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}
        aria-hidden="true"
      />
      <div className="relative flex flex-col gap-5 grow">
        <div className="flex items-center gap-5">
          <Avatar
            name={f.name}
            {...(preset?.background ? { background: preset.background } : {})}
            {...(preset?.hair ? { hair: { style: preset.hair.style } } : {})}
            size={120}
            className="w-28 h-28 rounded-xl shadow-xl ring-2 ring-white/40"
            aria-label={f.alt}
            shadow={true}
          />
          <figcaption className="flex flex-col">
            <h3 className="font-semibold text-lg leading-tight tracking-tight">{f.name}</h3>
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
