import { useCallback, useEffect, useRef, useState } from "react";

import { Reveal } from "./Reveal";

const BEFORE_IMAGE = "/BeforeAfter/P1/Before.jpeg";
const AFTER_IMAGE = "/BeforeAfter/P1/After.png";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => dragging.current && setFromClientX(e.clientX);
    const touch = (e: TouchEvent) => {
      if (dragging.current && e.touches[0]) setFromClientX(e.touches[0].clientX);
    };
    const up = () => (dragging.current = false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchmove", touch, { passive: true });
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchmove", touch);
      window.removeEventListener("touchend", up);
    };
  }, [setFromClientX]);

  return (
    <section id="before-after" className="section-y bg-surface">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent">BEFORE AND AFTER</p>
          <h2 className="mt-3 text-3xl font-semibold text-primary md:text-4xl">
            From Rough Sketch to Polished Plan
          </h2>
        </Reveal>

        <Reveal className="mt-10">
          <div
            ref={wrapRef}
            className="relative aspect-[8/5] w-full select-none overflow-hidden rounded-sm border bg-background"
            onMouseDown={(e) => {
              dragging.current = true;
              setFromClientX(e.clientX);
            }}
            onTouchStart={(e) => {
              dragging.current = true;
              if (e.touches[0]) setFromClientX(e.touches[0].clientX);
            }}
          >
            <div className="absolute inset-0 bg-white">
              <img
                src={AFTER_IMAGE}
                alt="Polished floor plan after redraw"
                className="h-full w-full object-contain pointer-events-none"
                draggable={false}
              />
            </div>
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
              <div className="h-full bg-white" style={{ width: `${pos > 0 ? (100 / pos) * 100 : 100}%` }}>
                <img
                  src={BEFORE_IMAGE}
                  alt="Original sketch floor plan before redraw"
                  className="h-full w-full object-contain pointer-events-none"
                  draggable={false}
                />
              </div>
            </div>

            <span className="absolute left-3 top-3 rounded-sm bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
              Before
            </span>
            <span className="absolute right-3 top-3 rounded-sm bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
              After
            </span>

            <div
              className="pointer-events-none absolute inset-y-0 w-0.5 bg-accent"
              style={{ left: `${pos}%` }}
            />
            <input
              type="range"
              min={0}
              max={100}
              value={pos}
              aria-label="Compare before and after floor plan"
              onChange={(e) => setPos(Number(e.target.value))}
              className="absolute inset-x-0 bottom-4 mx-auto w-[85%] cursor-ew-resize accent-accent"
            />
          </div>
        </Reveal>

        <p className="mt-5 text-center text-sm text-muted-foreground">
          Send us any sketch, PDF, or photo. We handle the rest.
        </p>
      </div>
    </section>
  );
}
