'use client';

import type { StackTool } from '@/types';
import { useTilt } from '@/lib/useTilt';
import { cn } from '@/lib/cn';

export function StackCard({ tool, accent }: { tool: StackTool; accent: 'stamp' | 'thread' }) {
  const ref = useTilt<HTMLDivElement>(10);

  return (
    <div
      ref={ref}
      className={cn(
        'tilt group relative flex min-w-[160px] flex-col gap-3 rounded-2xl border px-6 py-7',
        tool.placeholder ? 'border-dashed border-ink-line' : 'border-ink-line bg-bg-elevated'
      )}
      title={tool.name}
    >
      <div
        className={cn(
          'pointer-events-none absolute -inset-px -z-10 rounded-2xl opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-40',
          accent === 'stamp' ? 'bg-stamp' : 'bg-thread'
        )}
        aria-hidden="true"
      />
      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">{tool.category}</span>
      <span className={cn('font-display text-lg font-bold uppercase leading-tight', tool.placeholder && 'text-ink-faint')}>
        {tool.name}
      </span>
    </div>
  );
}
