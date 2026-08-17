export interface PlaceholderImage {
  src: string | null;
  alt: string;
  placeholder?: boolean;
  orientation?: 'landscape' | 'portrait' | 'square';
}

export interface Profile {
  name: string;
  initials: string;
  role: string;
  pitch: string;
  bio: string;
  location: string;
  interests: string[];
  photo: PlaceholderImage;
  activeSince: number;
}

export interface TimelineEntry {
  id: string;
  type: 'work' | 'education';
  role: string;
  org: string;
  start: string;
  end: string;
  sortKey: string;
  description: string;
  responsibilities?: string[];
  results?: string[];
  tools?: string[];
}

export interface SkillItem {
  name: string;
  placeholder?: boolean;
}

export interface SkillCategory {
  code: string;
  title: string;
  items: SkillItem[];
}

export interface StackTool {
  name: string;
  category: string;
  placeholder?: boolean;
}

export interface Service {
  code: string;
  title: string;
  description: string;
  placeholder?: boolean;
}

export interface ResultMetric {
  label: string;
  value: string;
  context?: string;
  placeholder?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  quote: string;
  photo?: PlaceholderImage;
  placeholder?: boolean;
}

export interface ProcessStep {
  code: string;
  title: string;
  description: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'email' | 'whatsapp' | 'instagram' | 'linkedin' | 'behance' | 'github' | 'phone';
  placeholder?: boolean;
}

export interface ProjectResult {
  label: string;
  value: string;
  placeholder?: boolean;
}

export interface ProjectProcessStep {
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string[];
  year: string;
  client: string;
  description: string;
  role: string;
  tools: string[];
  coverImage: PlaceholderImage;
  gallery: PlaceholderImage[];
  video?: { src: string | null; poster?: string; placeholder?: boolean };
  challenge: string;
  objective: string;
  solution: string;
  process: ProjectProcessStep[];
  implementation: string;
  results: ProjectResult[];
  conclusion: string;
  link?: { label: string; href: string };
  featured: boolean;
  isPlaceholder?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export const PROJECT_CATEGORIES = [
  'Todos',
  'Branding',
  'Diseño Gráfico',
  'Web Design',
  'Motion',
  'Marketing',
  'E-commerce',
  'Social Media',
  'Publicidad',
  'Contenido',
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];
