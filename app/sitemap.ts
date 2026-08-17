import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { siteConfig } from '@/data/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, '');

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...projects.map((project) => ({
      url: `${base}/work/${project.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  return routes;
}
