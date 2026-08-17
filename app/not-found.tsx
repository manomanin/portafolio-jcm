import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center py-32">
      <Container className="text-center">
        <p className="eyebrow mb-8 justify-center">JCM-00 · 404</p>
        <h1 className="font-display text-[clamp(3rem,10vw,7rem)] font-black uppercase leading-[0.9] tracking-tight">
          Página no encontrada
        </h1>
        <p className="mx-auto mt-6 max-w-md text-ink-muted">
          Esta ficha no existe (todavía). Volvé al inicio y segui buscando desde ahí.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href="/">Volver al inicio</Button>
        </div>
      </Container>
    </section>
  );
}
