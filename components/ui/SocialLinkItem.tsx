import type { SocialLink } from '@/types';
import { cn } from '@/lib/cn';

export function SocialLinkItem({ social, className }: { social: SocialLink; className?: string }) {
  if (social.placeholder) {
    return (
      <span
        className={cn(
          'inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-dashed border-ink-line px-5 py-2.5 font-mono text-xs uppercase tracking-[0.1em] text-ink-faint',
          className
        )}
        title="Próximamente"
        aria-disabled="true"
      >
        {social.label}
      </span>
    );
  }

  return (
    <a
      href={social.href}
      target={social.href.startsWith('http') ? '_blank' : undefined}
      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-ink-line px-5 py-2.5 font-mono text-xs uppercase tracking-[0.1em] text-ink transition-colors duration-300 hover:border-thread hover:text-thread',
        className
      )}
    >
      {social.label}
    </a>
  );
}
