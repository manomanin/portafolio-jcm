import type { Metadata, Viewport } from 'next';
import { Big_Shoulders_Display, Work_Sans, IBM_Plex_Mono } from 'next/font/google';
import { ClientProviders } from '@/components/layout/ClientProviders';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { GrainOverlay } from '@/components/ui/GrainOverlay';
import { siteConfig } from '@/data/seo';
import './globals.css';

const displayFont = Big_Shoulders_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-display',
  display: 'swap',
});

const bodyFont = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
});

const monoFont = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['Juan Cruz Manochi', 'e-commerce', 'growth marketing', 'Meta Ads', 'automatización con IA', 'portfolio'],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#0b0c0a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <body className="bg-bg text-ink font-body antialiased">
        <a
          href="#main-content"
          className="no-print sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-stamp focus:text-ink focus:px-4 focus:py-2 focus:rounded"
        >
          Saltar al contenido
        </a>
        <GrainOverlay />
        <ClientProviders>
          <Navbar />
          {children}
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
