"use client";

import { useEffect, useRef } from "react";

/**
 * FadeIn - Scroll reveal component using IntersectionObserver.
 * Wraps children and fades them in with a slight upward slide
 * when they enter the viewport.
 *
 * Props:
 *  - delay: stagger delay in ms (default: 0)
 *  - className: additional CSS classes
 *  - direction: "up" | "down" | "left" | "right" (default: "up")
 */
export default function FadeIn({
  children,
  delay = 0,
  className = "",
  direction = "up",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Apply the delay, then add the visible class
          setTimeout(() => {
            el.classList.add("fade-in-visible");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [delay]);

  const directionClass = {
    up: "fade-in-up",
    down: "fade-in-down",
    left: "fade-in-left",
    right: "fade-in-right",
  }[direction] || "fade-in-up";

  return (
    <div ref={ref} className={`fade-in ${directionClass} ${className}`}>
      {children}
    </div>
  );
}
