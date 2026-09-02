"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const TOTAL_FRAMES = 16;
const frames = Array.from({ length: TOTAL_FRAMES }, (_, i) =>
  `/web-animation-keyframes/keyframe_${String(i).padStart(2, "0")}.webp`
);

export default function ScrollSequence() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const currentFrameRef = useRef(0);

  // Preload all images into an array
  useEffect(() => {
    let loadedCount = 0;
    const images = [];

    frames.forEach((src, i) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setLoaded(true);
        }
      };
      images[i] = img;
    });

    imagesRef.current = images;
  }, []);

  // Draw frames on canvas based on scroll position
  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");

    function drawFrame(frameIndex) {
      const img = imagesRef.current[frameIndex];
      if (!img) return;

      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      const imgRatio = img.naturalWidth / img.naturalHeight;
      const canvasRatio = rect.width / rect.height;

      let drawW, drawH, drawX, drawY;
      if (imgRatio > canvasRatio) {
        drawH = rect.height;
        drawW = drawH * imgRatio;
        drawX = (rect.width - drawW) / 2;
        drawY = 0;
      } else {
        drawW = rect.width;
        drawH = drawW / imgRatio;
        drawX = 0;
        drawY = (rect.height - drawH) / 2;
      }

      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.drawImage(img, drawX, drawY, drawW, drawH);
    }

    function onScroll() {
      const rect = container.getBoundingClientRect();
      const scrollableHeight = container.offsetHeight - window.innerHeight;

      const scrollTop = -rect.top;
      const currentProgress = Math.min(Math.max(scrollTop / scrollableHeight, 0), 1);
      setProgress(currentProgress);

      const frameIndex = Math.min(
        Math.floor(currentProgress * TOTAL_FRAMES),
        TOTAL_FRAMES - 1
      );

      if (frameIndex !== currentFrameRef.current) {
        currentFrameRef.current = frameIndex;
        drawFrame(frameIndex);
      }
    }

    drawFrame(0);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => drawFrame(currentFrameRef.current));

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", () =>
        drawFrame(currentFrameRef.current)
      );
    };
  }, [loaded]);

  return (
    <div
      ref={containerRef}
      className="relative bg-[#0d1117]"
      style={{ height: "350vh" }}
      id="scroll-sequence-container"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Loading indicator */}
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-slate-950">
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 border-4 border-amber-400/30 border-t-amber-400 rounded-full animate-spin" />
              <p className="text-slate-400 text-sm font-medium">Loading 3D Keyboard Experience…</p>
            </div>
          </div>
        )}

        {/* Animation Canvas */}
        <canvas
          ref={canvasRef}
          className={`w-full h-full transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        />

        {/* Ambient Overlay Gradients for Depth */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0d1117] to-transparent pointer-events-none z-10" />

        {/* Interactive Overlay Cards on Scroll */}
        {loaded && (
          <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center px-4 sm:px-6">
            {/* Phase 1: 0% - 30% progress */}
            <div
              className={`max-w-md w-full bg-slate-900/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-700/60 shadow-2xl text-center transition-all duration-500 transform ${
                progress >= 0.05 && progress < 0.32
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
            >
              <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-semibold rounded-full mb-3">
                Phase 1: Build Quality
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">
                Solid Construction & Keycap Engineering
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Even under ₹2,000, top Indian models feature reinforced plates, double-shot injection keycaps, and durable key switches built for millions of presses.
              </p>
            </div>

            {/* Phase 2: 35% - 68% progress */}
            <div
              className={`max-w-md w-full bg-slate-900/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-700/60 shadow-2xl text-center transition-all duration-500 transform ${
                progress >= 0.35 && progress < 0.68
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
            >
              <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-semibold rounded-full mb-3">
                Phase 2: Tactile Feedback
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">
                Outemu Blue & Red Switch Dynamics
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Experience tactile clicky feedback or smooth linear action with N-Key Rollover for zero ghosting during intense gaming sessions.
              </p>
            </div>

            {/* Phase 3: 72% - 98% progress */}
            <div
              className={`max-w-md w-full bg-slate-900/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-700/60 shadow-2xl text-center transition-all duration-500 transform ${
                progress >= 0.72 && progress <= 0.98
                  ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
            >
              <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-full mb-3">
                Phase 3: RGB & Customization
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">
                Vibrant Lighting & High Performance
              </h3>
              <p className="text-slate-300 text-sm mb-5 leading-relaxed">
                Discover the best deals on Redgear, Cosmic Byte, Redragon, and Zebronics with unmatched price-to-performance ratio.
              </p>
              <Link
                href="/best-mechanical-keyboard-under-2000"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm hover:scale-105 transition-transform shadow-lg shadow-amber-500/25"
              >
                Browse Top Keyboards Under ₹2,000 →
              </Link>
            </div>
          </div>
        )}

        {/* Scroll Progress Bar at the bottom */}
        <div className="absolute bottom-6 right-6 z-20 hidden sm:flex items-center gap-3 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-800">
          <span className="text-slate-400 text-xs font-mono font-medium">
            3D EXPLOSION VIEW
          </span>
          <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-150"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
