import { profile } from '@/data/profile';
import { timeline } from '@/data/timeline';
import { skillCategories } from '@/data/skills';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StatCounter } from '@/components/ui/StatCounter';
import { Reveal } from '@/components/ui/Reveal';

function PlaceholderStat({ label }: { label: string }) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-dashed border-ink-line px-4 py-5">
      <span className="font-display text-3xl font-bold text-ink-faint">XX</span>
      <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint">{label}</span>
    </div>
  );
}

export function Metrics() {
  const yearsActive = new Date().getFullYear() - profile.activeSince;
  const workRoles = timeline.filter((t) => t.type === 'work').length;
  const realDomains = skillCategories.filter((c) => c.code !== 'NEXT');
  const realSkillCount = realDomains.reduce((acc, c) => acc + c.items.filter((i) => !i.placeholder).length, 0);

  return (
    <section id="metricas" className="border-y border-ink-line bg-bg-elevated py-24" aria-labelledby="metrics-heading">
      <Container>
        <h2 id="metrics-heading" className="sr-only">
          Números
        </h2>
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading code="JCM-03" eyebrow="Dashboard" title="En números" />
          <p className="max-w-xs text-sm text-ink-faint">Actualizado a medida que sumo proyectos — nada acá está inflado.</p>
        </div>

        <Reveal stagger={0.08} y={24} className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
          <StatCounter target={yearsActive} suffix="+" label="Años sumando experiencia" />
          <StatCounter target={workRoles} label="Roles / experiencias" />
          <StatCounter target={realDomains.length} label="Áreas de dominio" />
          <StatCounter target={realSkillCount} label="Skills en uso activo" />
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-4 border-t border-ink-line pt-10 md:grid-cols-4">
          <PlaceholderStat label="Proyectos completados" />
          <PlaceholderStat label="Campañas creadas" />
          <PlaceholderStat label="Clientes / marcas" />
          <PlaceholderStat label="Piezas entregadas" />
        </div>
      </Container>
    </section>
  );
}
