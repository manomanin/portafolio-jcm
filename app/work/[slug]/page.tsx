import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { siteConfig } from '@/data/seo';
import { CaseStudyTemplate } from '@/components/case-study/CaseStudyTemplate';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${siteConfig.name}`,
      description: project.description,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return <CaseStudyTemplate project={project} />;
}
