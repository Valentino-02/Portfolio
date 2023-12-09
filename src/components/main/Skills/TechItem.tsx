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
      className="p-1 duration-100 rounded-sm bg-main-blue hover:bg-main-pink"
    >
      {label}
    </motion.h3>
  ) : (
    <motion.h3 whileHover={{ y: -5 }} className="p-1 rounded-sm bg-main-blue">
      {label}
    </motion.h3>
  );
}
