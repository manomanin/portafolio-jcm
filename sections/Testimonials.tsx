'use client';

import { useEffect, useRef, useState } from 'react';
import { testimonials } from '@/data/testimonials';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { gsap } from '@/lib/gsap';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  const paused = useRef(false);
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced || testimonials.length <= 1) return undefined;
    const id = setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, [reduced]);

  useEffect(() => {
    const el = slideRef.current;
    if (!el || reduced) return;
    gsap.fromTo(el, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.6, ease: 'cubic-bezier(.16,1,.3,1)' });
  }, [index, reduced]);

  if (!testimonials.length) return null;
  const current = testimonials[index];

  return (
    <section
      id="testimonios"
      className="py-28 md:py-36"
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => {
        paused.current = true;
      }}
      onMouseLeave={() => {
        paused.current = false;
      }}
    >
      <Container>
        <SectionHeading code="JCM-11" eyebrow="Testimonios" title="Lo que dicen de trabajar conmigo" align="center" className="mb-16" />

        <div className="mx-auto max-w-2xl text-center">
          <div ref={slideRef} key={index}>
            {current.placeholder && (
              <span className="mb-4 inline-block rounded-full border border-dashed border-thread/50 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-thread">
                Placeholder
              </span>
            )}
            <p className="text-balance font-display text-2xl font-medium leading-snug sm:text-3xl">&ldquo;{current.quote}&rdquo;</p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <span
                className="flex h-14 w-14 items-center justify-center rounded-full border border-dashed border-ink-line font-mono text-[10px] text-ink-faint"
                aria-hidden="true"
              >
                {current.placeholder ? '?' : current.name.charAt(0)}
              </span>
              <div>
                <p className="font-mono text-sm uppercase tracking-[0.08em]">{current.name}</p>
                <p className="font-mono text-xs text-ink-faint">
                  {current.role}
                  {current.company ? ` · ${current.company}` : ''}
                </p>
              </div>
            </div>
          </div>
        </div>

        {testimonials.length > 1 && (
          <div className="mt-10 flex items-center justify-center gap-3">
            {testimonials.map((t, i) => (
              <button
                key={t.name + i}
                type="button"
                aria-label={`Ver testimonio ${i + 1}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-thread' : 'w-2 bg-ink-line'}`}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
