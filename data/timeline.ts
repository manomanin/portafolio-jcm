import type { TimelineEntry } from '@/types';

/**
 * Experiencia + educación reales, unificadas en una sola línea de tiempo.
 * Ordenadas por `sortKey` (formato YYYY-MM). Para sumar un ítem nuevo, agregá
 * un objeto más — no hace falta tocar el componente que las renderiza.
 */
export const timeline: TimelineEntry[] = [
  {
    id: 'edu-tecnico-multimedios',
    type: 'education',
    role: 'Técnico en Multimedios',
    org: 'E.E.S.T Técnica N°3 de Vicente López',
    start: '2020',
    end: 'Presente',
    sortKey: '2020-01',
    description: 'Formación técnica en multimedios: la base de todo lo que vino después.',
  },
  {
    id: 'work-vendedor',
    type: 'work',
    role: 'Vendedor',
    org: 'Agencia de Marketing con IA',
    start: 'Feb 2023',
    end: 'Mar 2023',
    sortKey: '2023-02',
    description: 'Contacté clientes potenciales y cerré reuniones de venta.',
  },
  {
    id: 'work-director-operaciones',
    type: 'work',
    role: 'Director de Operaciones',
    org: 'Agencia de Marketing con IA',
    start: 'Abr 2023',
    end: 'Ago 2023',
    sortKey: '2023-04',
    description:
      'Organicé el trabajo del equipo, mejoré los procesos internos y dirigí a diseñadores y editores para crear campañas que llaman la atención.',
  },
  {
    id: 'edu-ecommerce-7fb',
    type: 'education',
    role: 'Curso de E-commerce de Ropa',
    org: '7FB',
    start: '2025',
    end: '2026',
    sortKey: '2025-01',
    description: 'Formación aplicada de e-commerce de indumentaria: de la operación a la venta.',
  },
  {
    id: 'work-tienda-ropa',
    type: 'work',
    role: 'Dueño y Gestor',
    org: 'Tienda de Ropa Online',
    start: 'Nov 2025',
    end: 'Mayo 2026',
    sortKey: '2025-11',
    description:
      'Manejé mi propia marca de ropa, página web y marketing de punta a punta: producto, tienda, campañas y ventas.',
  },
  {
    id: 'edu-claude-code',
    type: 'education',
    role: 'Curso de Claude Code',
    org: 'Agustín Medina',
    start: '2026',
    end: '2026',
    sortKey: '2026-01',
    description: 'Uso profesional de Claude Code para construir, automatizar y shippear más rápido.',
  },
];
