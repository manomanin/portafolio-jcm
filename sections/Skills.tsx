import { skillCategories } from '@/data/skills';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36" aria-labelledby="skills-heading">
      <Container>
        <h2 id="skills-heading" className="sr-only">
          Habilidades
        </h2>
        <SectionHeading code="JCM-06" eyebrow="Skills" title="Qué sé hacer" className="mb-16" />

        <Reveal stagger={0.1} y={24} className="grid gap-5 md:grid-cols-2">
          {skillCategories.map((category) => {
            const isGrowthCategory = category.code === 'NEXT';
            return (
              <div
                key={category.code}
                className={`rounded-2xl border p-8 ${isGrowthCategory ? 'border-dashed border-ink-line' : 'border-ink-line bg-bg-elevated'}`}
              >
                <div className="mb-6 flex items-baseline gap-3">
                  <span className="font-mono text-xs text-thread">{category.code}</span>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight">{category.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2.5">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-[0.08em] ${
                        item.placeholder
                          ? 'border-dashed border-ink-line text-ink-faint'
                          : 'border-ink-line text-ink-muted'
                      }`}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
