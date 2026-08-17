'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/lib/useReducedMotion';

export function Loader() {
  const [phase, setPhase] = useState<'loading' | 'fading' | 'done'>('loading');
  const barRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const duration = reduced ? 0.2 : 1;

    if (barRef.current) {
      gsap.to(barRef.current, { scaleX: 1, duration, ease: 'power2.out' });
    }

    const toFading = setTimeout(() => {
      setPhase('fading');
      document.body.style.overflow = '';
    }, duration * 1000 + 150);

    const toDone = setTimeout(() => setPhase('done'), duration * 1000 + 650);

    return () => {
      clearTimeout(toFading);
      clearTimeout(toDone);
      document.body.style.overflow = '';
    };
  }, [reduced]);

  if (phase === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6 bg-bg transition-opacity duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
        phase === 'fading' ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <span className="font-display text-3xl font-bold tracking-tight">JCM</span>
      <div className="h-px w-40 overflow-hidden bg-ink-line">
        <div ref={barRef} className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-stamp to-thread" />
      </div>
    </div>
  );
}
