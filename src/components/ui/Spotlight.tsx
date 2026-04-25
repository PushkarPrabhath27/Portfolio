"use client";

import { useEffect, useState } from "react";

export function Spotlight() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => setPos({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-20 hidden md:block"
      style={{
        background: `radial-gradient(240px circle at ${pos.x}px ${pos.y}px, rgba(255,45,117,0.09), transparent 65%)`,
      }}
    />
  );
}
