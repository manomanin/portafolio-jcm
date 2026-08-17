'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion, useFinePointer } from '@/lib/useReducedMotion';

/**
 * Tilt 3D muy leve por puntero. Escribe --rx/--ry/--ty como custom properties
 * para que el CSS del componente decida cómo usarlas (perspective + rotate).
 */
export function useTilt<T extends HTMLElement>(max = 6) {
  const ref = useRef<T | null>(null);
  const reduced = useReducedMotion();
  const fine = useFinePointer();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced || !fine) return;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty('--ry', `${(px * max).toFixed(2)}deg`);
      el.style.setProperty('--rx', `${(-py * max).toFixed(2)}deg`);
      el.style.setProperty('--ty', `-4px`);
    };

    const onLeave = () => {
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
      el.style.setProperty('--ty', '0px');
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, [reduced, fine, max]);

  return ref;
}
