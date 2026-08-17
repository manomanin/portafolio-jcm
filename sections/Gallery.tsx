import { projects } from '@/data/projects';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { PlaceholderFrame } from '@/components/ui/PlaceholderFrame';
import { Reveal } from '@/components/ui/Reveal';

const allImages = projects.flatMap((p) => p.gallery.map((img, i) => ({ ...img, key: `${p.slug}-${i}` })));

const SPAN_PATTERN = ['col-span-2 row-span-2', 'col-span-1', 'col-span-1', 'col-span-2', 'col-span-1', 'col-span-1'];

export function Gallery() {
  if (!allImages.length) return null;

  return (
    <section id="galeria" className="py-28 md:py-36" aria-labelledby="gallery-heading">
      <Container>
        <Eyebrow code="JCM-13" label="Galería" className="mb-6" />
        <h2 id="gallery-heading" className="mb-14 max-w-2xl text-balance font-display text-[clamp(2rem,4.5vw,3.25rem)] font-bold uppercase leading-[0.95] tracking-tight">
          Proceso, capturas y detrás de escena
        </h2>

        <Reveal
          stagger={0.08}
          y={30}
          blur={10}
          className="grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4"
        >
          {allImages.map((img, i) => (
            <div key={img.key} className={SPAN_PATTERN[i % SPAN_PATTERN.length]}>
              <PlaceholderFrame label={img.alt} ratio="" className="h-full w-full" />
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
