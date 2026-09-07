"use client";

import { motion } from "framer-motion";

export function MotionReveal({
  children,
  delay = 0,
  direction = "up"
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
}) {
  const initial = {
    up: { opacity: 0, y: 28, x: 0 },
    left: { opacity: 0, x: -52, y: 0 },
    right: { opacity: 0, x: 52, y: 0 }
  }[direction];

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
