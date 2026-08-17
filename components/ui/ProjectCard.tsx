import Link from 'next/link';
import type { Project } from '@/types';
import { PlaceholderFrame } from '@/components/ui/PlaceholderFrame';
import { cn } from '@/lib/cn';

export function ProjectCard({
  project,
  size = 'md',
  className,
}: {
  project: Project;
  size?: 'md' | 'lg';
  className?: string;
}) {
  return (
    <Link
      href={`/work/${project.slug}/`}
      data-cursor="Abrir"
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl border border-ink-line bg-bg-elevated transition-all duration-500 hover:-translate-y-1 hover:border-thread/60',
        className
      )}
    >
      <div className="relative overflow-hidden">
        {project.coverImage.placeholder || !project.coverImage.src ? (
          <PlaceholderFrame label={project.isPlaceholder ? 'EJEMPLO — REEMPLAZAR' : 'IMAGEN DEL PROYECTO'} ratio={size === 'lg' ? 'aspect-[16/10]' : 'aspect-[4/3]'} className="rounded-none border-0" />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.coverImage.src}
            alt={project.coverImage.alt}
            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-thread">{project.category.join(' · ')}</span>
          <span className="font-mono text-[11px] text-ink-faint">{project.year}</span>
        </div>
        <h3 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight">{project.title}</h3>
        <p className="text-sm text-ink-muted">{project.description}</p>
      </div>
    </Link>
  );
}
