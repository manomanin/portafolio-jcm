'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion, useFinePointer } from '@/lib/useReducedMotion';

/** Atrae levemente el elemento hacia el cursor mientras está dentro de sus bordes. */
export function useMagnetic<T extends HTMLElement>(strength = 0.35) {
  const ref = useRef<T | null>(null);
  const reduced = useReducedMotion();
  const fine = useFinePointer();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced || !fine) return;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      gsap.to(el, {
        x: relX * strength,
        y: relY * strength,
        duration: 0.6,
        ease: 'cubic-bezier(.16,1,.3,1)',
      });
    };

    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, [reduced, fine, strength]);

  return ref;
}
