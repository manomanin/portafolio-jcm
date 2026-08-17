import { process } from '@/data/process';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function Process() {
  return (
    <section id="proceso" className="py-28 md:py-36" aria-labelledby="process-heading">
      <Container>
        <h2 id="process-heading" className="sr-only">
          Cómo trabajo
        </h2>
        <SectionHeading code="JCM-08" eyebrow="Cómo trabajo" title="Del brief al resultado" className="mb-16" />

        <Reveal stagger={0.09} y={28} className="grid gap-px overflow-hidden rounded-2xl border border-ink-line bg-ink-line sm:grid-cols-2 lg:grid-cols-5">
          {process.map((step) => (
            <div key={step.code} className="relative flex flex-col gap-4 bg-bg px-6 py-10">
              <span className="pointer-events-none absolute -top-3 right-3 select-none font-display text-7xl font-black text-outline" aria-hidden="true">
                {step.code}
              </span>
              <span className="font-mono text-xs text-thread">{step.code}</span>
              <h3 className="font-display text-xl font-bold uppercase tracking-tight">{step.title}</h3>
              <p className="text-sm text-ink-muted">{step.description}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
