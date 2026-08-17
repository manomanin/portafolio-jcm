'use client';

import { useEffect, useRef } from 'react';
import { timeline } from '@/data/timeline';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { gsap, ScrollTrigger, useGsapRegister } from '@/lib/gsap';
import { useReducedMotion } from '@/lib/useReducedMotion';

const sorted = [...timeline].sort((a, b) => a.sortKey.localeCompare(b.sortKey));

export function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  useGsapRegister();

  useEffect(() => {
    if (reduced) return undefined;
    const section = sectionRef.current;
    const fill = fillRef.current;
    if (!section || !fill) return undefined;

    const st = ScrollTrigger.create({
      trigger: section,
      start: 'top 70%',
      end: 'bottom 65%',
      scrub: 0.6,
      onUpdate: (self) => gsap.set(fill, { scaleY: self.progress }),
    });

    return () => st.kill();
  }, [reduced]);

  return (
    <section id="experiencia" ref={sectionRef} className="py-28 md:py-36" aria-labelledby="timeline-heading">
      <Container>
        <h2 id="timeline-heading" className="sr-only">
          Experiencia
        </h2>
        <SectionHeading code="JCM-05" eyebrow="Experiencia" title="Dónde fui sumando esto" className="mb-16" />

        <div className="relative pl-8 md:ml-4">
          <div className="absolute left-0 top-0 h-full w-px bg-ink-line" aria-hidden="true" />
          <div
            ref={fillRef}
            className="absolute left-0 top-0 h-full w-px origin-top scale-y-0 bg-gradient-to-b from-stamp to-thread"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-14">
            {sorted.map((entry) => (
              <Reveal key={entry.id} y={24} className="relative">
                <span
                  className={`absolute -left-[42px] top-1 flex h-5 w-5 items-center justify-center rounded-full border bg-bg ${
                    entry.type === 'work' ? 'border-stamp' : 'border-thread'
                  }`}
                >
                  <span className={`h-2 w-2 rounded-full ${entry.type === 'work' ? 'bg-stamp' : 'bg-thread'}`} />
                </span>

                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">{entry.role}</h3>
                  <span className="font-mono text-xs uppercase tracking-[0.1em] text-ink-faint">
                    {entry.start} — {entry.end}
                  </span>
                </div>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-thread">
                  {entry.org} · {entry.type === 'work' ? 'Experiencia' : 'Educación'}
                </p>
                <p className="mt-3 max-w-xl text-ink-muted">{entry.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
