import type { Project } from '@/types';

/**
 * SISTEMA DE PROYECTOS — para sumar un proyecto real:
 * 1. Copiá el objeto de más abajo completo.
 * 2. Cambiá cada campo `[AGREGAR ...]` por el dato real.
 * 3. Poné las imágenes en /public/projects/<slug>/ y actualizá los `src`.
 * 4. Sacá `isPlaceholder: true` (y los `placeholder: true` de resultados/galería que ya tengan dato real).
 * 5. Marcá `featured: true` si querés que aparezca primero / con formato grande.
 * No hace falta tocar ningún componente — el grid, los filtros y la página de
 * case study se arman solos a partir de este array.
 *
 * El proyecto de abajo es un EJEMPLO para probar que todo el sistema funciona.
 * No es un cliente real — reemplazalo o dejalo como plantilla para el próximo.
 */
export const projects: Project[] = [
  {
    slug: 'proyecto-ejemplo',
    title: '[Nombre del proyecto]',
    category: ['E-commerce', 'Marketing'],
    year: '[Año]',
    client: '[Cliente / marca]',
    description: '[Descripción corta para la tarjeta del grid — una frase directa sobre qué se hizo.]',
    role: '[Tu rol en el proyecto]',
    tools: ['[Herramienta 1]', '[Herramienta 2]', '[Herramienta 3]'],
    coverImage: { src: null, alt: '[Nombre del proyecto] — imagen principal', placeholder: true },
    gallery: [
      { src: null, alt: 'Captura 1', placeholder: true, orientation: 'landscape' },
      { src: null, alt: 'Captura 2', placeholder: true, orientation: 'portrait' },
      { src: null, alt: 'Captura 3', placeholder: true, orientation: 'square' },
      { src: null, alt: 'Captura 4', placeholder: true, orientation: 'landscape' },
    ],
    video: { src: null, placeholder: true },
    challenge: '[Cuál era el problema del cliente o del negocio antes de este proyecto.]',
    objective: '[Qué se buscaba lograr — el objetivo concreto.]',
    solution: '[Qué estrategia y qué diseño se definieron para resolverlo.]',
    process: [
      { title: 'Investigación', description: '[Qué se investigó antes de definir la estrategia.]' },
      { title: 'Estrategia', description: '[Qué dirección se tomó y por qué.]' },
      { title: 'Diseño', description: '[Cómo se tradujo la estrategia en piezas concretas.]' },
    ],
    implementation: '[Cómo se implementó / lanzó el proyecto.]',
    results: [
      { label: 'Resultado', value: 'XX%', placeholder: true },
      { label: 'Resultado', value: 'XXX', placeholder: true },
      { label: 'Resultado', value: 'XX%', placeholder: true },
    ],
    conclusion: '[Cierre — qué se aprendió o qué sigue para este proyecto.]',
    link: { label: 'Ver sitio', href: '#' },
    featured: true,
    isPlaceholder: true,
  },
];
