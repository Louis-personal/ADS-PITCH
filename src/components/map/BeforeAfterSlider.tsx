"use client";

import { useCallback, useRef, useState } from "react";
import { Reveal } from "./Reveal";

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  }, []);

  return (
    <Reveal>
      <div
        ref={trackRef}
        className="relative aspect-[16/10] w-full cursor-ew-resize overflow-hidden rounded-2xl border border-border bg-bg-card select-none"
        onPointerDown={(event) => {
          dragging.current = true;
          event.currentTarget.setPointerCapture(event.pointerId);
          updateFromClientX(event.clientX);
        }}
        onPointerMove={(event) => {
          if (!dragging.current) return;
          updateFromClientX(event.clientX);
        }}
        onPointerUp={() => {
          dragging.current = false;
        }}
        onPointerCancel={() => {
          dragging.current = false;
        }}
        role="slider"
        aria-label="Compare old website and new build"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") setPosition((value) => Math.max(0, value - 5));
          if (event.key === "ArrowRight") setPosition((value) => Math.min(100, value + 5));
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(160deg,#2a2a2a,#111)] p-6 md:p-10">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-text-muted">
            Before
          </p>
          <p className="mt-3 max-w-xs text-[22px] font-semibold text-white/80 md:text-[28px]">
            2018 brochure site
          </p>
          <div className="mt-8 space-y-3 opacity-50">
            <div className="h-3 w-2/3 rounded bg-white/20" />
            <div className="h-3 w-1/2 rounded bg-white/15" />
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="aspect-square rounded bg-white/10" />
              <div className="aspect-square rounded bg-white/10" />
              <div className="aspect-square rounded bg-white/10" />
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(160deg,#0d1a12,#010001_55%,#052018)] p-6 md:p-10">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-lime-soft">
              After
            </p>
            <p className="mt-3 max-w-sm text-[22px] font-semibold text-white md:text-[28px]">
              Parts-first search experience
            </p>
            <div className="mt-8 rounded-xl border border-lime/30 bg-black/40 p-4">
              <div className="flex items-center gap-3 rounded-lg border border-border bg-bg-elevated px-4 py-3">
                <span className="text-lime">⌕</span>
                <span className="text-[14px] text-text-muted">Search part number…</span>
              </div>
              <div className="mt-3 space-y-2">
                <div className="h-10 rounded-lg bg-lime/15" />
                <div className="h-10 rounded-lg bg-white/5" />
                <div className="h-10 rounded-lg bg-white/5" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-y-0 z-10 w-0.5 bg-lime"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 left-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-lime bg-ink text-[12px] font-semibold text-lime shadow-[0_0_20px_rgba(189,255,0,0.35)]">
            ↔
          </div>
        </div>
      </div>
      <p className="mt-3 text-[13px] text-text-muted">
        Drag to compare. Drop real screenshots into{" "}
        <code className="text-lime-soft">public/ads/</code> when ready.
      </p>
    </Reveal>
  );
}
