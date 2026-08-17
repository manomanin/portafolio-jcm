'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion, useFinePointer } from '@/lib/useReducedMotion';

/**
 * Cursor custom (dot + ring que atrasa). Se desactiva por completo en touch
 * y con reduced-motion — en esos casos no se monta nada (cursor nativo normal).
 * Elementos con `data-cursor="Ver"` (o "Abrir" / "Play") cambian el label del ring.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState('');
  const [active, setActive] = useState(false);
  const reduced = useReducedMotion();
  const fine = useFinePointer();
  const enabled = fine && !reduced;

  useEffect(() => {
    if (!enabled) return undefined;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return undefined;

    const quickDotX = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power3.out' });
    const quickDotY = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power3.out' });
    const quickRingX = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3.out' });
    const quickRingY = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3.out' });

    const onMove = (e: PointerEvent) => {
      quickDotX(e.clientX);
      quickDotY(e.clientY);
      quickRingX(e.clientX);
      quickRingY(e.clientY);
    };

    const onOver = (e: PointerEvent) => {
      const target = (e.target as HTMLElement)?.closest?.('[data-cursor]');
      if (target) {
        setLabel(target.getAttribute('data-cursor') || '');
        setActive(true);
      }
    };
    const onOut = (e: PointerEvent) => {
      const target = (e.target as HTMLElement)?.closest?.('[data-cursor]');
      if (target) {
        setActive(false);
        setLabel('');
      }
    };
    const onDown = () => gsap.to([dot, ring], { scale: 0.8, duration: 0.2 });
    const onUp = () => gsap.to([dot, ring], { scale: 1, duration: 0.3 });

    window.addEventListener('pointermove', onMove);
    document.addEventListener('pointerover', onOver);
    document.addEventListener('pointerout', onOut);
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    document.body.classList.add('cursor-none');

    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerover', onOver);
      document.removeEventListener('pointerout', onOut);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      document.body.classList.remove('cursor-none');
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" data-active={active || undefined} aria-hidden="true">
        <span className="cursor-ring__label">{label}</span>
      </div>
    </>
  );
}
