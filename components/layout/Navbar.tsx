'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { navLinks } from '@/data/nav';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled ? 'border-b border-ink-line bg-bg/80 backdrop-blur-md' : 'border-b border-transparent bg-transparent'
        )}
      >
        <div className={cn('mx-auto flex w-full max-w-content items-center justify-between px-6 transition-all duration-500 md:px-10 xl:px-16', scrolled ? 'py-4' : 'py-6')}>
          <Link href="/" className="font-display text-xl font-bold tracking-tight" data-cursor="Inicio">
            <span aria-hidden="true">JCM</span>
            <span className="sr-only">Juan Cruz Manochi</span>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="/#contacto" size="md" cursorCue="Hablemos">
              Hablemos
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="relative z-[70] flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
          >
            <span className={cn('h-px w-6 bg-ink transition-all duration-300', open && 'translate-y-[3.5px] rotate-45')} />
            <span className={cn('h-px w-6 bg-ink transition-all duration-300', open && '-translate-y-[3.5px] -rotate-45')} />
          </button>
        </div>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-[60] flex flex-col justify-center bg-bg/95 backdrop-blur-xl transition-opacity duration-500 lg:hidden',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
      >
        <nav className="flex flex-col gap-6 px-8" aria-label="Navegación mobile">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl font-bold uppercase leading-none transition-all duration-500"
              style={{ transitionDelay: open ? `${i * 60 + 100}ms` : '0ms', opacity: open ? 1 : 0, transform: open ? 'none' : 'translateY(12px)' }}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/#contacto" size="lg" className="mt-4 w-fit" onClick={() => setOpen(false)}>
            Hablemos
          </Button>
        </nav>
      </div>
    </>
  );
}
