'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/lib/useReducedMotion';

/** Anima un número de 0 al valor final cuando el elemento entra en viewport. */
export function useCounter<T extends HTMLElement>(target: number, opts?: { duration?: number; decimals?: number }) {
  const ref = useRef<T | null>(null);
  const [value, setValue] = useState(0);
  const reduced = useReducedMotion();
  const played = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reduced) {
      setValue(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !played.current) {
            played.current = true;
            const counter = { val: 0 };
            gsap.to(counter, {
              val: target,
              duration: opts?.duration ?? 1.8,
              ease: 'cubic-bezier(.16,1,.3,1)',
              onUpdate: () => setValue(Number(counter.val.toFixed(opts?.decimals ?? 0))),
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, reduced, opts?.duration, opts?.decimals]);

  return { ref, value };
}
