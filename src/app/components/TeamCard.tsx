import React from 'react';
import Avatar, { type HairConfig } from './avatars/Avatar';
import { presets, type PresetKey } from './avatars/presets';

export interface TeamCardProps {
  name: string;
  title: string;
  bio: string;
  presetKey: PresetKey;
  className?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, title, bio, presetKey, className='' }) => {
  const preset = presets[presetKey];
  if(!preset) {
    throw new Error(`Unknown presetKey: ${presetKey}`);
  }
  const hair: HairConfig | undefined = preset.hair ? { style: preset.hair.style } : undefined;
  return (
    <div className={`rounded-3xl border border-foreground/10 shadow-soft bg-gradient-to-br from-background/60 to-background/30 p-6 flex gap-6 items-start ${className}`}>      
      <div className="flex-shrink-0">
        <Avatar
          name={name}
          {...(preset.background ? { background: preset.background } : {})}
          {...(hair ? { hair } : {})}
          size={96}
          className="rounded-2xl shadow-lg"
          aria-label={`${name} — ${title}`}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{name}</h3>
          <p className="text-sm text-foreground/60 font-medium">{title}</p>
        </div>
        <p className="text-sm text-foreground/75 leading-relaxed max-w-prose">{bio}</p>
      </div>
    </div>
  );
};

export default TeamCard;
