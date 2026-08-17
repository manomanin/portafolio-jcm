import type { SkillCategory } from '@/types';

/**
 * Categorías reales primero. La última categoría ("Sumando ahora") es honesta:
 * son casilleros para diseño/motion/web que todavía no están confirmados como
 * skills reales — no se inventan. Reemplazá esos items cuando correspondan.
 */
export const skillCategories: SkillCategory[] = [
  {
    code: 'MKT',
    title: 'Marketing & Comercio',
    items: [
      { name: 'Meta Ads' },
      { name: 'E-commerce' },
      { name: 'Growth Marketing' },
      { name: 'Atención al cliente y venta' },
    ],
  },
  {
    code: 'AI',
    title: 'IA & Automatización',
    items: [
      { name: 'Claude Code' },
      { name: 'Integraciones con IA' },
      { name: 'Automatización de procesos' },
      { name: 'Gestión de procesos' },
    ],
  },
  {
    code: 'DIR',
    title: 'Dirección & Estrategia',
    items: [{ name: 'Dirección Creativa' }, { name: 'Estrategia Visual' }, { name: 'Gestión de equipos' }],
  },
  {
    code: 'NEXT',
    title: 'Sumando ahora',
    items: [
      { name: 'Diseño', placeholder: true },
      { name: 'Motion', placeholder: true },
      { name: 'Web / Dev', placeholder: true },
    ],
  },
];
