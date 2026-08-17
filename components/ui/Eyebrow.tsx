import { cn } from '@/lib/cn';

export function Eyebrow({ code, label, className }: { code: string; label: string; className?: string }) {
  return (
    <p className={cn('eyebrow', className)}>
      {code} · {label}
    </p>
  );
}
