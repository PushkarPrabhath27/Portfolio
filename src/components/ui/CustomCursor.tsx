"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const trailPositionRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    const trail = trailRef.current;

    if (!cursor || !dot || !trail) return;

    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
      
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    const animateTrail = () => {
      trailPositionRef.current.x += (positionRef.current.x - trailPositionRef.current.x) * 0.1;
      trailPositionRef.current.y += (positionRef.current.y - trailPositionRef.current.y) * 0.1;
      
      trail.style.left = `${trailPositionRef.current.x}px`;
      trail.style.top = `${trailPositionRef.current.y}px`;
      
      rafRef.current = requestAnimationFrame(animateTrail);
    };

    const handleMouseEnter = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
      cursor.style.borderColor = "#ff2d92";
    };

    const handleMouseLeave = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
      cursor.style.borderColor = "#00f0ff";
    };

    const handleMouseDown = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(0.8)";
    };

    const handleMouseUp = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
    };

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll("a, button, [role='button']");
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    
    animateTrail();
    addHoverListeners();

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor"
      />
      <div
        ref={dotRef}
        className="cursor-dot"
      />
      <div
        ref={trailRef}
        className="cursor-trail"
      />
    </>
  );
}