"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="pointer-events-none fixed top-[var(--nav-height)] right-0 left-0 z-50 h-[2px] bg-white/5">
      <motion.div
        className="h-full origin-left bg-lime"
        style={{ scaleX }}
      />
    </div>
  );
}
