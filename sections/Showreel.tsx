'use client';

import { useRef, useState } from 'react';
import { showreel } from '@/data/showreel';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { useMagnetic } from '@/lib/useMagnetic';

export function Showreel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const playBtnRef = useMagnetic<HTMLButtonElement>(0.3);

  const hasVideo = Boolean(showreel.src) && !showreel.placeholder;

  const toggle = () => {
    const video = videoRef.current;
    if (!hasVideo || !video) return;
    if (playing) {
      video.pause();
    } else {
      video.play();
    }
    setPlaying(!playing);
  };

  return (
    <section id="showreel" className="py-28 md:py-36" aria-labelledby="showreel-heading">
      <Container>
        <Eyebrow code="JCM-12" label="Showreel" className="mb-6" />
        <h2 id="showreel-heading" className="mb-10 max-w-2xl text-balance font-display text-[clamp(2rem,4.5vw,3.25rem)] font-bold uppercase leading-[0.95] tracking-tight">
          Un minuto para ver cómo pienso
        </h2>

        <div className="relative aspect-video overflow-hidden rounded-2xl border border-ink-line bg-bg-elevated">
          {hasVideo ? (
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              poster={showreel.poster ?? undefined}
              onTimeUpdate={(e) => {
                const v = e.currentTarget;
                setProgress(v.duration ? (v.currentTime / v.duration) * 100 : 0);
              }}
              onEnded={() => setPlaying(false)}
            >
              <source src={showreel.src ?? ''} type="video/mp4" />
            </video>
          ) : (
            <div className="bg-grid-technical bg-grid-fade absolute inset-0 bg-[length:36px_36px] opacity-40" aria-hidden="true" />
          )}

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-bg/30">
            <button
              ref={playBtnRef}
              type="button"
              onClick={toggle}
              disabled={!hasVideo}
              data-cursor={hasVideo ? 'Play' : undefined}
              aria-label={hasVideo ? (playing ? 'Pausar showreel' : 'Reproducir showreel') : 'Showreel próximamente'}
              className="flex h-20 w-20 items-center justify-center rounded-full border border-ink-line bg-bg/80 backdrop-blur-sm transition-colors duration-300 hover:border-thread disabled:cursor-not-allowed sm:h-24 sm:w-24"
            >
              {playing ? (
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="h-6 w-1.5 bg-ink" />
                  <span className="h-6 w-1.5 bg-ink" />
                </span>
              ) : (
                <span
                  className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-ink"
                  aria-hidden="true"
                />
              )}
            </button>
            {!hasVideo && (
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink-faint">Showreel próximamente</span>
            )}
          </div>

          <div className="absolute inset-x-0 bottom-0 h-1 bg-ink-line">
            <div className="h-full bg-gradient-to-r from-stamp to-thread transition-[width] duration-150" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </Container>
    </section>
  );
}
