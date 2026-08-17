import Link from 'next/link';
import type { Project } from '@/types';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { PlaceholderFrame } from '@/components/ui/PlaceholderFrame';
import { Reveal } from '@/components/ui/Reveal';
import { ContactCTA } from '@/sections/ContactCTA';

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-2 border-t border-ink-line py-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">{label}</span>
      <span className="text-ink">{value}</span>
    </div>
  );
}

function CaseSection({ code, title, body }: { code: string; title: string; body: string }) {
  return (
    <div className="relative pb-16 pl-8">
      <span className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-thread bg-bg text-[9px] text-thread">
        <span className="h-1.5 w-1.5 rounded-full bg-thread" />
      </span>
      <Reveal y={20}>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-thread">{code}</p>
        <h3 className="mb-4 font-display text-3xl font-bold uppercase tracking-tight md:text-4xl">{title}</h3>
        <p className="max-w-2xl text-balance text-lg leading-relaxed text-ink-muted">{body}</p>
      </Reveal>
    </div>
  );
}

function ProcessRow({ process }: { process: Project['process'] }) {
  if (!process?.length) return null;
  return (
    <div className="relative pb-16 pl-8">
      <span className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-thread bg-bg text-[9px] text-thread">
        <span className="h-1.5 w-1.5 rounded-full bg-thread" />
      </span>
      <Reveal y={20}>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-thread">03</p>
        <h3 className="mb-8 font-display text-3xl font-bold uppercase tracking-tight md:text-4xl">Proceso</h3>
      </Reveal>
      <Reveal stagger={0.08} y={16} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {process.map((step, i) => (
          <div key={step.title} className="rounded-xl border border-ink-line p-6">
            <span className="font-mono text-xs text-ink-faint">{String(i + 1).padStart(2, '0')}</span>
            <h4 className="mt-3 font-display text-xl font-bold uppercase">{step.title}</h4>
            <p className="mt-2 text-sm text-ink-muted">{step.description}</p>
          </div>
        ))}
      </Reveal>
    </div>
  );
}

function ResultsRow({ results }: { results: Project['results'] }) {
  if (!results?.length) return null;
  return (
    <div className="relative pb-16 pl-8">
      <span className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-thread bg-bg text-[9px] text-thread">
        <span className="h-1.5 w-1.5 rounded-full bg-thread" />
      </span>
      <Reveal y={20}>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-thread">05</p>
        <h3 className="mb-8 font-display text-3xl font-bold uppercase tracking-tight md:text-4xl">Resultados</h3>
      </Reveal>
      <Reveal stagger={0.08} y={16} className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {results.map((r) => (
          <div
            key={r.label}
            className={`rounded-xl border px-5 py-6 ${r.placeholder ? 'border-dashed border-ink-line' : 'border-ink-line bg-bg-elevated'}`}
          >
            <span className={`font-display text-3xl font-bold ${r.placeholder ? 'text-ink-faint' : 'text-thread'}`}>{r.value}</span>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">{r.label}</p>
          </div>
        ))}
      </Reveal>
    </div>
  );
}

function CaseGallery({ gallery, title }: { gallery: Project['gallery']; title: string }) {
  if (!gallery?.length) return null;
  return (
    <div className="relative pb-16 pl-8">
      <span className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-thread bg-bg text-[9px] text-thread">
        <span className="h-1.5 w-1.5 rounded-full bg-thread" />
      </span>
      <Reveal y={20}>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-thread">06</p>
        <h3 className="mb-8 font-display text-3xl font-bold uppercase tracking-tight md:text-4xl">Galería</h3>
      </Reveal>
      <Reveal stagger={0.08} y={24} className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {gallery.map((img, i) => (
          <PlaceholderFrame
            key={i}
            label={img.placeholder || !img.src ? `${title} ${i + 1}` : img.alt}
            ratio={img.orientation === 'portrait' ? 'aspect-[3/4]' : img.orientation === 'square' ? 'aspect-square' : 'aspect-[4/3]'}
            className={i % 3 === 0 ? 'col-span-2' : 'col-span-1'}
          />
        ))}
      </Reveal>
    </div>
  );
}

export function CaseStudyTemplate({ project }: { project: Project }) {
  return (
    <article>
      <section className="relative overflow-hidden pb-16 pt-32 md:pt-40">
        <div className="bg-grid-technical bg-grid-fade pointer-events-none absolute inset-0 bg-[length:56px_56px] opacity-40" aria-hidden="true" />
        <Container className="relative">
          <Link href="/#trabajo" className="mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted transition-colors hover:text-thread">
            ← Volver a proyectos
          </Link>

          {project.isPlaceholder && (
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-dashed border-thread/50 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-thread">
              Case study de ejemplo — contenido a reemplazar
            </div>
          )}

          <Reveal>
            <Eyebrow code={project.year} label={project.category.join(' · ')} className="mb-6" />
            <h1 className="text-balance font-display text-[clamp(2.5rem,7vw,6rem)] font-black uppercase leading-[0.92] tracking-tight">
              {project.title}
            </h1>
          </Reveal>

          <Reveal y={16} delay={0.1} className="mt-14 grid gap-0 md:grid-cols-4">
            <MetaItem label="Cliente" value={project.client} />
            <MetaItem label="Rol" value={project.role} />
            <MetaItem label="Año" value={project.year} />
            <MetaItem label="Herramientas" value={project.tools.join(', ')} />
          </Reveal>
        </Container>

        <Container className="mt-14">
          <Reveal y={30}>
            {project.coverImage.placeholder || !project.coverImage.src ? (
              <PlaceholderFrame label="IMAGEN PRINCIPAL DEL PROYECTO" ratio="aspect-[16/9]" />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={project.coverImage.src} alt={project.coverImage.alt} className="w-full rounded-2xl object-cover" />
            )}
          </Reveal>
        </Container>
      </section>

      <section className="py-8" aria-label="Detalle del proyecto">
        <Container>
          <div className="border-l border-ink-line pl-0 md:ml-4">
            <CaseSection code="01" title="El problema" body={project.challenge} />
            <CaseSection code="02" title="Objetivo" body={project.objective} />
            <ProcessRow process={project.process} />
            <CaseSection code="04" title="Estrategia & Implementación" body={`${project.solution} ${project.implementation}`} />
            <ResultsRow results={project.results} />
            <CaseGallery gallery={project.gallery} title={project.title} />
            <CaseSection code="07" title="Conclusión" body={project.conclusion} />
          </div>
        </Container>
      </section>

      <ContactCTA />
    </article>
  );
}
