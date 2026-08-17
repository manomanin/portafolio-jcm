'use client';

import type { ReactNode } from 'react';
import { SmoothScrollProvider } from '@/components/layout/SmoothScrollProvider';
import { Cursor } from '@/components/ui/Cursor';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Loader } from '@/components/ui/Loader';

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <SmoothScrollProvider>
      <Loader />
      <ProgressBar />
      <Cursor />
      {children}
    </SmoothScrollProvider>
  );
}
