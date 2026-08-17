import type { NavLink } from '@/types';

/**
 * hrefs con "/#..." (no solo "#...") a propósito: así funcionan también desde
 * páginas de proyecto (/work/slug/), no solo desde el home.
 */
export const navLinks: NavLink[] = [
  { label: 'Sobre mí', href: '/#sobre-mi' },
  { label: 'Trabajo', href: '/#trabajo' },
  { label: 'Experiencia', href: '/#experiencia' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contacto', href: '/#contacto' },
];
