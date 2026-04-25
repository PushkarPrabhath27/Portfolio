"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const fx = useSpring(x, { damping: 28, stiffness: 260 });
  const fy = useSpring(y, { damping: 28, stiffness: 260 });
  const sx = useSpring(x, { damping: 40, stiffness: 120 });
  const sy = useSpring(y, { damping: 40, stiffness: 120 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);

    const updateListeners = () => {
      document.querySelectorAll("a,button,input,textarea,.card-spotlight").forEach((node) => {
        node.addEventListener("mouseenter", onEnter);
        node.addEventListener("mouseleave", onLeave);
      });
    };

    window.addEventListener("mousemove", move);
    updateListeners();

    const observer = new MutationObserver(updateListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, [x, y]);

  return (
    <>
      <motion.div className="custom-cursor hidden md:block" style={{ x: fx, y: fy }} />
      <motion.div
        className="cursor-follower hidden md:block"
        style={{ x: sx, y: sy, scale: hovering ? 1.7 : 1 }}
      />
      <motion.div className="cursor-spotlight hidden md:block" style={{ x: sx, y: sy, opacity: hovering ? 0.95 : 0.8 }} />
    </>
  );
}
