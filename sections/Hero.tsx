'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { profile } from '@/data/profile';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { useTilt } from '@/lib/useTilt';
import { gsap, useGsapRegister } from '@/lib/gsap';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { useMediaQuery } from '@/lib/useMediaQuery';

const HeroObject = dynamic(() => import('@/components/three/HeroObject').then((m) => m.HeroObject), {
  ssr: false,
  loading: () => null,
});

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const isDesktop = useMediaQuery('(min-width: 900px)');
  const yearsActive = new Date().getFullYear() - profile.activeSince;
  const cardTiltRef = useTilt<HTMLDivElement>(8);
  const cardTiltRef2 = useTilt<HTMLDivElement>(8);

  useGsapRegister();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    if (reduced) {
      gsap.set(root.querySelectorAll('[data-hero-anim]'), { opacity: 1, y: 0, filter: 'none', rotateX: 0 });
      return undefined;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1.1, defaults: { ease: 'cubic-bezier(.16,1,.3,1)' } });
      tl.from('[data-hero-glow]', { opacity: 0, duration: 1.6 }, 0)
        .from(
          '[data-hero-eyebrow]',
          { opacity: 0, y: 16, duration: 0.7 },
          0.15
        )
        .from(
          '[data-hero-line]',
          {
            opacity: 0,
            y: 60,
            rotateX: -40,
            filter: 'blur(14px)',
            transformOrigin: '50% 100%',
            duration: 1.1,
            stagger: 0.12,
          },
          0.25
        )
        .from('[data-hero-role]', { opacity: 0, y: 24, duration: 0.8 }, '-=0.55')
        .from('[data-hero-pitch]', { opacity: 0, y: 24, duration: 0.8 }, '-=0.6')
        .from('[data-hero-cta]', { opacity: 0, y: 18, scale: 0.96, duration: 0.7, stagger: 0.08 }, '-=0.55')
        .from('[data-hero-card]', { opacity: 0, y: 30, scale: 0.92, duration: 0.9, stagger: 0.12 }, '-=0.5')
        .from('[data-hero-scroll]', { opacity: 0, duration: 0.6 }, '-=0.2');
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  // parallax leve del glow según el mouse
  useEffect(() => {
    if (reduced || !isDesktop) return undefined;
    const glow = glowRef.current;
    if (!glow) return undefined;
    const quickX = gsap.quickTo(glow, 'x', { duration: 1.2, ease: 'power3.out' });
    const quickY = gsap.quickTo(glow, 'y', { duration: 1.2, ease: 'power3.out' });
    const onMove = (e: PointerEvent) => {
      const relX = (e.clientX / window.innerWidth - 0.5) * 40;
      const relY = (e.clientY / window.innerHeight - 0.5) * 40;
      quickX(relX);
      quickY(relY);
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [reduced, isDesktop]);

  return (
    <section id="top" ref={rootRef} className="relative flex min-h-[100svh] items-center overflow-hidden pt-28">
      {/* fondo */}
      <div className="bg-grid-technical bg-grid-fade pointer-events-none absolute inset-0 bg-[length:56px_56px] opacity-70" aria-hidden="true" />
      <div
        ref={glowRef}
        data-hero-glow
        className="pointer-events-none absolute left-1/2 top-1/3 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-[110px]"
        style={{ background: 'radial-gradient(circle, rgba(193,68,45,0.55), rgba(201,162,39,0.25) 55%, transparent 75%)' }}
        aria-hidden="true"
      />

      {isDesktop && !reduced && (
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] lg:block" aria-hidden="true">
          <HeroObject />
        </div>
      )}

      <Container className="relative z-10">
        <p data-hero-anim data-hero-eyebrow className="eyebrow mb-6">
          JCM-01 · PORTFOLIO {new Date().getFullYear()}
        </p>

        <h1 className="font-display text-[clamp(3.2rem,11vw,9rem)] font-black uppercase leading-[0.86] tracking-tight">
          <span data-hero-anim data-hero-line className="block overflow-visible">
            Juan Cruz
          </span>
          <span data-hero-anim data-hero-line className="text-gradient-accent block overflow-visible">
            Manochi
          </span>
        </h1>

        <p data-hero-anim data-hero-role className="mt-7 max-w-xl font-mono text-sm uppercase tracking-[0.14em] text-thread sm:text-base">
          {profile.role}
        </p>

        <p data-hero-anim data-hero-pitch className="mt-5 max-w-xl text-balance text-lg text-ink-muted sm:text-xl">
          {profile.pitch}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <span data-hero-anim data-hero-cta>
            <Button href="/#trabajo" size="lg" cursorCue="Ver">
              Ver mi trabajo
            </Button>
          </span>
          <span data-hero-anim data-hero-cta>
            <Button href="/#contacto" size="lg" variant="outline" cursorCue="Escribir">
              Contactarme
            </Button>
          </span>
        </div>
      </Container>

      {/* fichas flotantes */}
      <div
        ref={cardTiltRef}
        data-hero-anim
        data-hero-card
        className="tilt absolute bottom-10 left-6 z-10 hidden rounded-xl border border-ink-line bg-bg-elevated/80 px-4 py-3 backdrop-blur-sm md:flex md:flex-col md:gap-1"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">Ubicación</span>
        <span className="font-mono text-xs text-ink">{profile.location.split(',')[0]}, AR</span>
      </div>

      <div
        ref={cardTiltRef2}
        data-hero-anim
        data-hero-card
        className="tilt absolute bottom-10 right-6 z-10 hidden rounded-xl border border-ink-line bg-bg-elevated/80 px-4 py-3 backdrop-blur-sm md:flex md:flex-col md:gap-1 lg:right-[8%]"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">Experiencia</span>
        <span className="font-mono text-xs text-ink">{yearsActive}+ años sumando</span>
      </div>

      <div data-hero-anim data-hero-scroll className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 md:bottom-10">
        <div className="flex flex-col items-center gap-2 motion-safe:animate-bounce">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">Scroll</span>
          <span className="h-8 w-px bg-gradient-to-b from-thread to-transparent" />
        </div>
      </div>
    </section>
  );
}
