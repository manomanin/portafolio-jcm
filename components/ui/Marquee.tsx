import { cn } from '@/lib/cn';

export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const loop = [...items, ...items];
  return (
    <div className={cn('relative overflow-hidden border-y border-ink-line py-4', className)}>
      <div className="flex w-max animate-marquee gap-10 motion-reduce:animate-none">
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10 font-mono text-sm uppercase tracking-[0.15em] text-ink-muted">
            {item}
            <span className="text-thread">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
