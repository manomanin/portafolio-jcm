import type { Profile } from '@/types';

/**
 * Datos reales de Juan Cruz. Para actualizar bio, rol o intereses: editá acá.
 * `photo.src` queda en null a propósito — no hay foto real todavía. Cuando la tengas,
 * poné el archivo en /public/profile/foto.jpg y cambiá src a "/profile/foto.jpg".
 */
export const profile: Profile = {
  name: 'Juan Cruz Manochi',
  initials: 'JCM',
  role: 'E-commerce · Growth Marketing · Automatización con IA',
  pitch:
    'Monto marcas de e-commerce, dirijo equipos creativos y automatizo todo lo que se puede con IA. De la idea al checkout, y del checkout al proceso que lo sostiene.',
  bio: 'Técnico en Multimedios y dueño de mi propia marca de ropa online. Aprendí a vender, a diseñar, a dirigir equipos y a automatizar procesos con IA haciendo, no solo estudiando. Hoy cruzo comercio, marketing y tecnología para armar operaciones que funcionan solas.',
  location: 'Vicente López, Buenos Aires, Argentina',
  interests: [
    'Comercio Online',
    'Automatización y gestión',
    'Publicidad Digital',
    'Tecnología e IA',
    'Diseño y Arte',
  ],
  photo: {
    src: null,
    alt: 'Foto de perfil de Juan Cruz Manochi',
    placeholder: true,
  },
  activeSince: 2023,
};
