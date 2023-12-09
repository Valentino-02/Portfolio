"use client";

import { motion } from "framer-motion";

export default function LanguageItem({
  label,
  index,
}: {
  label: string;
  index: number;
}) {
  const position = index % 2 == 0 ? -10 : 10;

  return (
    <motion.h3
      whileHover={{ x: position }}
      className="p-1 rounded-sm dark:bg-black bg-zinc-300"
    >
      {label}
    </motion.h3>
  );
}
