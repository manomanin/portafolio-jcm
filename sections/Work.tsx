'use client';

import { useRef, useState } from 'react';
import { projects } from '@/data/projects';
import { PROJECT_CATEGORIES } from '@/types';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/lib/useReducedMotion';

export function Work() {
  const [active, setActive] = useState<string>('Todos');
  const gridRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const visible = projects.filter((p) => active === 'Todos' || p.category.includes(active));

  const handleFilter = (category: string) => {
    if (category === active) return;
    const grid = gridRef.current;
    if (!grid || reduced) {
      setActive(category);
      return;
    }
    gsap.to(grid, {
      opacity: 0,
      y: 10,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        setActive(category);
        gsap.fromTo(grid, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.45, ease: 'cubic-bezier(.16,1,.3,1)' });
      },
    });
  };

  return (
    <section id="trabajo" className="py-28 md:py-36" aria-labelledby="work-heading">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <h2 id="work-heading" className="sr-only">
            Proyectos destacados
          </h2>
          <SectionHeading
            code="JCM-04"
            eyebrow="Selected Work"
            title="Proyectos destacados"
            description="Cada proyecto es un caso completo: problema, estrategia, diseño, implementación y resultado."
          />
        </div>

        <div className="mb-12 flex flex-wrap gap-2" role="group" aria-label="Filtrar proyectos por categoría">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => handleFilter(cat)}
              aria-pressed={active === cat}
              className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] transition-colors duration-300 ${
                active === cat
                  ? 'border-stamp bg-stamp text-ink'
                  : 'border-ink-line text-ink-muted hover:border-thread hover:text-thread'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div ref={gridRef} className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((project, i) => {
            const isHero = i === 0 && project.featured;
            return (
              <ProjectCard
                key={project.slug}
                project={project}
                size={isHero ? 'lg' : 'md'}
                className={isHero ? 'md:col-span-2' : undefined}
              />
            );
          })}
        </div>

        {visible.length === 0 && (
          <p className="rounded-2xl border border-dashed border-ink-line px-8 py-16 text-center font-mono text-sm uppercase tracking-[0.1em] text-ink-faint">
            Próximamente proyectos en esta categoría.
          </p>
        )}

        {visible.length > 0 && (
          <p className="mt-10 text-center font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
            Más proyectos próximamente — esta lista crece con cada trabajo nuevo.
          </p>
        )}
      </Container>
    </section>
  );
}
