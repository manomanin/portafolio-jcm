import { profile } from '@/data/profile';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PlaceholderFrame } from '@/components/ui/PlaceholderFrame';
import { Reveal } from '@/components/ui/Reveal';

export function About() {
  return (
    <section id="sobre-mi" className="relative py-28 md:py-36" aria-labelledby="about-heading">
      <Container className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
        <Reveal y={24} className="order-2 lg:order-1">
          <PlaceholderFrame label="FOTO DE PERFIL" ratio="aspect-[4/5]" className="mx-auto max-w-sm lg:mx-0" />
        </Reveal>

        <div className="order-1 lg:order-2">
          <h2 id="about-heading" className="sr-only">
            Quién soy
          </h2>
          <SectionHeading code="JCM-02" eyebrow="Quién soy" title="No vendo horas. Armo operaciones que funcionan." className="mb-8" />

          <Reveal y={20} delay={0.05}>
            <p className="text-balance text-xl leading-relaxed text-ink sm:text-2xl">{profile.bio}</p>
          </Reveal>

          <Reveal y={16} delay={0.1} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">{profile.location}</span>
          </Reveal>

          <Reveal as="ul" stagger={0.06} y={12} delay={0.15} className="mt-8 flex flex-wrap gap-3">
            {profile.interests.map((interest) => (
              <li
                key={interest}
                className="rounded-full border border-ink-line px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] text-ink-muted"
              >
                {interest}
              </li>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
