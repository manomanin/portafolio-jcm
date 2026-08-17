'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger, useGsapRegister } from '@/lib/gsap';
import { useReducedMotion } from '@/lib/useReducedMotion';

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);

  useGsapRegister();

  useEffect(() => {
    if (reduced) return undefined;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      touchMultiplier: 1,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reduced]);

  return <>{children}</>;
}
