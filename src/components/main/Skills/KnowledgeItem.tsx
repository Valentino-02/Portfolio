"use client";

import { motion } from "framer-motion";

export default function KnowledgeItem({
  label,
  index,
}: {
  label: string;
  index: number;
}) {
  const rotation = index % 2 == 0 ? 20 : -20;

  return (
    <motion.h3
      whileHover={{ scale: 1.2, rotate: -20 }}
      className="p-2 border-2 dark:bg-black-blue bg-slate-400 border-main-blue"
    >
      {label}
    </motion.h3>
  );
}
