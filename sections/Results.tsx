import { results } from '@/data/results';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function Results() {
  return (
    <section id="resultados" className="border-y border-ink-line bg-bg-elevated py-28 md:py-36" aria-labelledby="results-heading">
      <Container>
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            code="JCM-10"
            eyebrow="Resultados"
            title={
              <>
                No solo diseño.
                <br />
                Esto pasó.
              </>
            }
          />
          <p className="max-w-xs text-sm text-ink-faint">
            Estas tarjetas se completan con datos reales por proyecto — nada de vanity metrics.
          </p>
        </div>

        <Reveal stagger={0.07} y={22} className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {results.map((metric) => (
            <div
              key={metric.label}
              className={`flex flex-col gap-2 rounded-2xl border px-6 py-8 ${
                metric.placeholder ? 'border-dashed border-ink-line' : 'border-ink-line bg-bg'
              }`}
            >
              <span className={`font-display text-4xl font-black ${metric.placeholder ? 'text-ink-faint' : 'text-stamp'}`}>
                {metric.value}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint">{metric.label}</span>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
