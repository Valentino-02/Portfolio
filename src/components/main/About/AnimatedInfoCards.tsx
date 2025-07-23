"use client";

import { motion } from "framer-motion";

export default function AnimatedInfoCards({
  children,
}: {
  children: React.ReactNode;
}) {
  return <motion.div layout>{children}</motion.div>;
}
