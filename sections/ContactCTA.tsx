import { socials, contactEmail } from '@/data/socials';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { SocialLinkItem } from '@/components/ui/SocialLinkItem';

export function ContactCTA() {
  return (
    <section id="contacto" className="relative overflow-hidden py-32 md:py-44" aria-labelledby="contact-heading">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(201,162,39,0.4), rgba(193,68,45,0.3) 55%, transparent 75%)' }}
        aria-hidden="true"
      />

      <Container className="relative text-center">
        <Reveal>
          <Eyebrow code="JCM-14" label="Contacto" className="mb-8 justify-center" />
          <h2 id="contact-heading" className="mx-auto max-w-4xl text-balance font-display text-[clamp(2.75rem,8vw,6.5rem)] font-black uppercase leading-[0.92] tracking-tight">
            Construyamos algo que funcione de verdad.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-balance text-lg text-ink-muted">
            Si tenés una marca, una tienda o una idea que necesita orden, estrategia y ejecución — hablemos.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Button href={`mailto:${contactEmail}`} size="lg" cursorCue="Escribir">
            {contactEmail}
          </Button>
          <Button href="https://wa.me/5491131913259" size="lg" variant="outline" cursorCue="WhatsApp">
            WhatsApp
          </Button>
        </Reveal>

        <Reveal delay={0.15} stagger={0.05} className="mt-14 flex flex-wrap items-center justify-center gap-3">
          {socials
            .filter((s) => s.icon !== 'email' && s.icon !== 'phone')
            .map((social) => (
              <SocialLinkItem key={social.label} social={social} />
            ))}
        </Reveal>
      </Container>
    </section>
  );
}
