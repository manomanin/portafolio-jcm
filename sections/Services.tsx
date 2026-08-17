import { services } from '@/data/services';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function Services() {
  return (
    <section id="servicios" className="py-28 md:py-36" aria-labelledby="services-heading">
      <Container>
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <h2 id="services-heading" className="sr-only">
            Qué puedo hacer por tu negocio
          </h2>
          <SectionHeading code="JCM-09" eyebrow="Servicios" title="Qué puedo hacer por tu negocio" />
        </div>

        <Reveal as="ul" stagger={0.06} y={20} className="divide-y divide-ink-line border-y border-ink-line">
          {services.map((service) => (
            <li key={service.code} className="group flex flex-col gap-3 py-7 sm:flex-row sm:items-center sm:gap-8">
              <span className={`font-mono text-sm ${service.placeholder ? 'text-ink-faint' : 'text-thread'}`}>{service.code}</span>
              <h3 className={`font-display text-2xl font-bold uppercase tracking-tight sm:w-96 ${service.placeholder ? 'text-ink-faint' : ''}`}>
                {service.title}
              </h3>
              <p className="text-ink-muted sm:flex-1">{service.description}</p>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
