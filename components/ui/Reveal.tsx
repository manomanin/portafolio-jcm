'use client';

import { useEffect, useRef, type ElementType, type ReactNode } from 'react';
import { gsap, ScrollTrigger, useGsapRegister } from '@/lib/gsap';
import { useReducedMotion } from '@/lib/useReducedMotion';

/**
 * Revela contenido al entrar en viewport (fade + rise). Con `stagger`, anima
 * cada hijo directo por separado — útil para grids/listas.
 */
export function Reveal({
  children,
  as = 'div',
  className,
  y = 32,
  duration = 0.9,
  delay = 0,
  stagger,
  once = true,
  blur = 0,
  scaleFrom,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  y?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  once?: boolean;
  blur?: number;
  scaleFrom?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();
  useGsapRegister();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return undefined;

    const targets: Element | Element[] = stagger ? Array.from(el.children) : el;
    const fromVars: gsap.TweenVars = { opacity: 0, y };
    const toVars: gsap.TweenVars = { opacity: 1, y: 0 };
    if (blur) {
      fromVars.filter = `blur(${blur}px)`;
      toVars.filter = 'blur(0px)';
    }
    if (scaleFrom) {
      fromVars.scale = scaleFrom;
      toVars.scale = 1;
    }
    gsap.set(targets, fromVars);

    const anim = gsap.to(targets, {
      ...toVars,
      duration,
      delay,
      stagger,
      ease: 'cubic-bezier(.16,1,.3,1)',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: once ? 'play none none none' : 'play none none reverse',
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [reduced, y, duration, delay, stagger, once, blur, scaleFrom]);

  const Tag = as as ElementType;
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
