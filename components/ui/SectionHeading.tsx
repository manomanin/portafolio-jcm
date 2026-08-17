import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

export function SectionHeading({
  code,
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  code: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <Reveal className={cn('block max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      <Eyebrow code={code} label={eyebrow} className="mb-5" />
      <h2 className="text-balance font-display text-[clamp(2.25rem,5vw,4rem)] font-bold uppercase leading-[0.95] tracking-tight">
        {title}
      </h2>
      {description && <p className="mt-5 max-w-xl text-balance text-ink-muted">{description}</p>}
    </Reveal>
  );
}
