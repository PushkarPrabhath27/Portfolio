"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const spotlight = spotlightRef.current;
    if (!cursor || !spotlight) return;

    const move = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;
      spotlight.style.left = `${clientX}px`;
      spotlight.style.top = `${clientY}px`;
    };

    const grow = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1.8)";
    };

    const reset = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
    };

    const interactive = document.querySelectorAll("a, button, input, textarea");
    interactive.forEach((node) => {
      node.addEventListener("mouseenter", grow);
      node.addEventListener("mouseleave", reset);
    });

    window.addEventListener("mousemove", move);

    return () => {
      interactive.forEach((node) => {
        node.removeEventListener("mouseenter", grow);
        node.removeEventListener("mouseleave", reset);
      });
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor hidden md:block" />
      <div ref={spotlightRef} className="cursor-spotlight hidden md:block" />
    </>
  );
}
