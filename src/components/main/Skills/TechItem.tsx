"use client";

import { motion } from "framer-motion";

export default function TechItem({
  label,
  isFramer = false,
}: {
  label: string;
  isFramer?: boolean;
}) {
  return isFramer ? (
    <motion.h3
      whileHover={{ rotate: 360, scale: 1.2 }}
      className="p-1 duration-100 border-4 rounded-sm bg-main-blue hover:bg-main-pink border-black-blue"
    >
      {label}
    </motion.h3>
  ) : (
    <motion.h3
      whileHover={{ y: -5 }}
      className="p-1 border-4 rounded-sm dark:bg-gray-900 bg-zinc-400 border-black-blue"
    >
      {label}
    </motion.h3>
  );
}
