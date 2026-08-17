'use client';

import { useCounter } from '@/lib/useCounter';

export function StatCounter({
  target,
  suffix = '',
  prefix = '',
  label,
  decimals = 0,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
}) {
  const { ref, value } = useCounter<HTMLDivElement>(target, { decimals });

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <span className="font-display text-[clamp(2.75rem,6vw,5rem)] font-bold leading-none tabular-nums">
        {prefix}
        {value}
        {suffix}
      </span>
      <span className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">{label}</span>
    </div>
  );
}
