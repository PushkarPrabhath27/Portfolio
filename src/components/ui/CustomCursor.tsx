"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  /* Fast dot */
  const fx = useSpring(x, {
    damping: 28,
    stiffness: 260,
    mass: 0.5,
  });

  const fy = useSpring(y, {
    damping: 28,
    stiffness: 260,
    mass: 0.5,
  });

  /* Slower follower */
  const sx = useSpring(x, {
    damping: 40,
    stiffness: 120,
    mass: 0.9,
  });

  const sy = useSpring(y, {
    damping: 40,
    stiffness: 120,
    mass: 0.9,
  });

  const [hovering, setHovering] =
    useState(false);

  const [pressed, setPressed] =
    useState(false);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    const selectors =
      "a, button, input, textarea, .card-spotlight, [data-cursor='hover']";

    const attachListeners = () => {
      document
        .querySelectorAll(selectors)
        .forEach((node) => {
          node.addEventListener(
            "mouseenter",
            onEnter
          );
          node.addEventListener(
            "mouseleave",
            onLeave
          );
        });
    };

    const detachListeners = () => {
      document
        .querySelectorAll(selectors)
        .forEach((node) => {
          node.removeEventListener(
            "mouseenter",
            onEnter
          );
          node.removeEventListener(
            "mouseleave",
            onLeave
          );
        });
    };

    window.addEventListener(
      "mousemove",
      move
    );
    window.addEventListener(
      "mousedown",
      onDown
    );
    window.addEventListener(
      "mouseup",
      onUp
    );

    attachListeners();

    const observer =
      new MutationObserver(() => {
        detachListeners();
        attachListeners();
      });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      detachListeners();

      window.removeEventListener(
        "mousemove",
        move
      );
      window.removeEventListener(
        "mousedown",
        onDown
      );
      window.removeEventListener(
        "mouseup",
        onUp
      );

      observer.disconnect();
    };
  }, [x, y]);

  return (
    <>
      {/* Main Dot */}
      <motion.div
        className="custom-cursor hidden md:block"
        style={{
          x: fx,
          y: fy,
          scale: pressed
            ? 0.72
            : hovering
            ? 1.2
            : 1,
        }}
      />

      {/* Ring Follower */}
      <motion.div
        className="cursor-follower hidden md:block"
        style={{
          x: sx,
          y: sy,
          scale: pressed
            ? 0.9
            : hovering
            ? 1.75
            : 1,
          opacity: hovering
            ? 0.95
            : 0.65,
        }}
      />

      {/* Spotlight */}
      <motion.div
        className="cursor-spotlight hidden md:block"
        style={{
          x: sx,
          y: sy,
          scale: hovering
            ? 1.25
            : 1,
          opacity: hovering
            ? 0.95
            : 0.72,
        }}
      />
    </>
  );
}