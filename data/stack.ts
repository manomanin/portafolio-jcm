import type { StackTool } from '@/types';

/**
 * "My Stack" — mantenelo corto y elegante, no una lluvia de logos.
 * Los `placeholder: true` son casilleros a propósito: cuando confirmes qué
 * herramientas usás de verdad (diseño, edición, etc.) reemplazalos.
 */
export const stack: StackTool[] = [
  { name: 'Meta Ads Manager', category: 'Marketing' },
  { name: 'Claude Code', category: 'IA' },
  { name: 'IA generativa', category: 'IA' },
  { name: '[Agregar herramienta]', category: 'Diseño', placeholder: true },
  { name: '[Agregar herramienta]', category: 'E-commerce', placeholder: true },
  { name: '[Agregar herramienta]', category: 'Motion', placeholder: true },
];
