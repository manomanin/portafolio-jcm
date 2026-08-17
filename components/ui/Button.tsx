'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { useMagnetic } from '@/lib/useMagnetic';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'stamp' | 'outline' | 'text';
  size?: 'md' | 'lg';
  className?: string;
  external?: boolean;
  type?: 'button' | 'submit';
  cursorCue?: string;
}

export function Button({
  children,
  href,
  onClick,
  variant = 'stamp',
  size = 'md',
  className,
  external,
  type = 'button',
  cursorCue,
}: ButtonProps) {
  const magneticRef = useMagnetic<HTMLElement>(0.25);

  const styles = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-mono uppercase tracking-[0.08em] transition-colors duration-300 whitespace-nowrap',
    size === 'lg' ? 'px-8 py-4 text-sm' : 'px-6 py-3 text-xs',
    variant === 'stamp' && 'bg-stamp text-ink hover:bg-stamp-bright',
    variant === 'outline' && 'border border-ink-line text-ink hover:border-thread hover:text-thread',
    variant === 'text' && 'px-0 py-0 text-ink underline-offset-4 hover:text-thread',
    className
  );

  const isExternal = external || (href && (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')));

  if (href) {
    if (isExternal) {
      return (
        <a
          ref={magneticRef as React.Ref<HTMLAnchorElement>}
          href={href}
          className={styles}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          data-cursor={cursorCue}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        ref={magneticRef as React.Ref<HTMLAnchorElement>}
        href={href}
        className={styles}
        data-cursor={cursorCue}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button ref={magneticRef as React.Ref<HTMLButtonElement>} type={type} onClick={onClick} className={styles} data-cursor={cursorCue}>
      {children}
    </button>
  );
}
