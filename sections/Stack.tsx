import { stack } from '@/data/stack';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StackCard } from '@/components/ui/StackCard';
import { Reveal } from '@/components/ui/Reveal';

export function Stack() {
  return (
    <section id="stack" className="border-y border-ink-line bg-bg-elevated/40 py-28 md:py-36" aria-labelledby="stack-heading">
      <Container>
        <h2 id="stack-heading" className="sr-only">
          Stack de herramientas
        </h2>
        <SectionHeading code="JCM-07" eyebrow="My Stack" title="Con qué trabajo" className="mb-16" />

        <Reveal stagger={0.06} y={20} className="flex flex-wrap gap-5">
          {stack.map((tool, i) => (
            <StackCard key={tool.name + i} tool={tool} accent={i % 2 === 0 ? 'stamp' : 'thread'} />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
