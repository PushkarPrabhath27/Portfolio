"use client";

import { motion } from "framer-motion";
import { ParallaxLayer } from "./ParallaxLayer";

export function FloatingShapes() {
  return (
    <>
      <ParallaxLayer speed={0.1} className="absolute right-[5%] top-28">
        <motion.div className="h-44 w-44 border border-white/25" animate={{ rotate: [0, 8, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
      </ParallaxLayer>
      <ParallaxLayer speed={0.2} className="absolute left-[6%] top-80">
        <motion.div className="h-24 w-24 rounded-full border border-[#00eaff]/45" animate={{ y: [0, 18, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
      </ParallaxLayer>
      <ParallaxLayer speed={0.12} className="absolute right-[18%] top-[55%]">
        <motion.div className="h-16 w-16 border border-[#8b5cf6]/50" animate={{ rotate: [0, -12, 0] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} />
      </ParallaxLayer>
    </>
  );
}
