"use client";

import { motion } from "framer-motion";
import React from "react";

export default function AnimatedDiv({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.3,
        ease: "easeIn",
      }}
    >
      {children}
    </motion.div>
  );
}
