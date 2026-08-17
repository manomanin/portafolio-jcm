/**
 * Sistema de easing/timing compartido. Un solo criterio de movimiento en todo
 * el sitio: desaceleración limpia, nada de rebote/bounce cartoon.
 */
export const EASE = {
  decel: 'cubic-bezier(.16,1,.3,1)',
  smooth: 'cubic-bezier(.65,0,.35,1)',
  out: 'cubic-bezier(.22,1,.36,1)',
} as const;

export const DURATION = {
  fast: 0.35,
  base: 0.6,
  slow: 0.9,
  cinematic: 1.4,
} as const;

export const STAGGER = {
  tight: 0.05,
  base: 0.08,
  loose: 0.14,
} as const;
