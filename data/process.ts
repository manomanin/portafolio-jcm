import type { ProcessStep } from '@/types';

export const process: ProcessStep[] = [
  {
    code: '01',
    title: 'Discovery',
    description: 'Entiendo el negocio, el objetivo y el problema real antes de tocar nada.',
  },
  {
    code: '02',
    title: 'Estrategia',
    description: 'Defino la dirección: qué se prioriza, qué canal, qué mensaje, qué se mide.',
  },
  {
    code: '03',
    title: 'Diseño & Construcción',
    description: 'Construyo el concepto visual y lo llevo a producción — tienda, pieza o campaña.',
  },
  {
    code: '04',
    title: 'Implementación',
    description: 'Publico, activo campañas y pongo todo a funcionar en producción real.',
  },
  {
    code: '05',
    title: 'Optimización',
    description: 'Mido resultados, ajusto y automatizo lo que se puede automatizar con IA.',
  },
];
