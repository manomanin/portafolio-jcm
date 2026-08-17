'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/lib/useReducedMotion';

/**
 * Next.js remonta template.tsx en cada navegación — es el lugar correcto para
 * una transición de entrada leve entre home y páginas de proyecto.
 */
export default function Template({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.45, ease: 'cubic-bezier(.16,1,.3,1)' });
  }, [reduced]);

  return (
    <div id="main-content" ref={ref}>
      {children}
    </div>
  );
}
