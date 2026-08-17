import type { SocialLink } from '@/types';

/**
 * Datos reales: email, teléfono y WhatsApp. El resto queda con href "#" y
 * placeholder:true a propósito — los componentes los muestran deshabilitados
 * en vez de como links rotos. Completá el href real para activarlos.
 */
export const socials: SocialLink[] = [
  { label: 'Email', href: 'mailto:manochijuancruz@gmail.com', icon: 'email' },
  { label: 'WhatsApp', href: 'https://wa.me/5491131913259', icon: 'whatsapp' },
  { label: 'Teléfono', href: 'tel:+541131913259', icon: 'phone' },
  { label: 'Instagram', href: '#', icon: 'instagram', placeholder: true },
  { label: 'LinkedIn', href: '#', icon: 'linkedin', placeholder: true },
  { label: 'Behance', href: '#', icon: 'behance', placeholder: true },
  { label: 'GitHub', href: '#', icon: 'github', placeholder: true },
];

export const contactEmail = 'manochijuancruz@gmail.com';
