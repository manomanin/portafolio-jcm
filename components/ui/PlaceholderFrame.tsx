import { cn } from '@/lib/cn';

/**
 * Marco visual para fotos/imágenes que todavía no existen. Nunca usar una
 * stock photo genérica: esto deja explícito que falta un archivo real.
 */
export function PlaceholderFrame({
  label = 'IMAGEN',
  className,
  ratio = 'aspect-[4/5]',
}: {
  label?: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden rounded-2xl border border-dashed border-ink-line bg-bg-elevated',
        ratio,
        className
      )}
    >
      <div className="bg-grid-technical bg-grid-fade absolute inset-0 bg-[length:28px_28px] opacity-40" />
      <div className="relative flex flex-col items-center gap-2 px-6 text-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">[ {label} ]</span>
        <span className="h-px w-10 bg-ink-line" />
      </div>
    </div>
  );
}
