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
      className="p-1 border-4 rounded-sm dark:bg-slate-800 bg-zinc-300 border-black-blue"
    >
      {label}
    </motion.h3>
  );
}
