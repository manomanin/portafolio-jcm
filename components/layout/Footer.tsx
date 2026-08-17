import Link from 'next/link';
import { profile } from '@/data/profile';
import { navLinks } from '@/data/nav';
import { socials } from '@/data/socials';
import { Container } from '@/components/ui/Container';
import { SocialLinkItem } from '@/components/ui/SocialLinkItem';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-line py-14" role="contentinfo">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div className="max-w-sm">
            <p className="font-display text-2xl font-bold tracking-tight">JUAN CRUZ MANOCHI</p>
            <p className="mt-3 text-sm text-ink-muted">{profile.role}</p>
          </div>

          <nav aria-label="Navegación del footer" className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="font-mono text-xs uppercase tracking-[0.12em] text-ink-muted transition-colors hover:text-thread">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap gap-2.5">
            {socials
              .filter((s) => s.icon !== 'phone')
              .map((social) => (
                <SocialLinkItem key={social.label} social={social} className="px-3.5 py-1.5 text-[10px]" />
              ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-ink-line pt-8 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Juan Cruz Manochi. Todos los derechos reservados.</p>
          <p>Diseñado y construido por Juan Cruz — con Claude Code.</p>
        </div>
      </Container>
    </footer>
  );
}
