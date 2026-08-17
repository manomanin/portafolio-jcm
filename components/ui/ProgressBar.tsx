'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, useGsapRegister } from '@/lib/gsap';
import { useReducedMotion } from '@/lib/useReducedMotion';

export function ProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  useGsapRegister();

  useEffect(() => {
    if (reduced) return undefined;
    const bar = barRef.current;
    if (!bar) return undefined;

    const st = ScrollTrigger.create({
      trigger: document.documentElement,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        gsap.set(bar, { scaleX: self.progress });
      },
    });

    return () => st.kill();
  }, [reduced]);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] pointer-events-none" aria-hidden="true">
      <div
        ref={barRef}
        className="h-full w-full origin-left bg-gradient-to-r from-stamp to-thread"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}
