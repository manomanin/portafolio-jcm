'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

/** Registra los plugins de GSAP una sola vez, solo en cliente. */
export function useGsapRegister() {
  if (typeof window === 'undefined' || registered) return gsap;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
  return gsap;
}

export { gsap, ScrollTrigger };
