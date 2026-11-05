"use client";

import { useEffect, useRef } from "react";

export default function TaglineReveal({ lines }: { lines: string[] }) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;
    const words = Array.from(heading.querySelectorAll<HTMLElement>(".word"));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      words.forEach((word) => (word.dataset.on = "true"));
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const { top, height } = heading.getBoundingClientRect();
      const viewport = window.innerHeight;
      // Starts when the text enters at 85% of the viewport, ends when its bottom reaches 50%.
      const progress = (viewport * 0.85 - top) / (height + viewport * 0.35);
      const activeCount = Math.floor(progress * (words.length + 1));
      words.forEach((word, index) => {
        word.dataset.on = String(index < activeCount);
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <h2 ref={headingRef} className="heading-3 max-w-[680px] md:heading-1">
      {lines.map((line) => (
        <span key={line} className="block">
          {line.split(" ").map((word, index) => (
            <span key={index}>
              <span className="word">{word}</span>{" "}
            </span>
          ))}
        </span>
      ))}
    </h2>
  );
}
