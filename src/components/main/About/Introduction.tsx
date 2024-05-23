"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Introduction({ dictionary }: { dictionary: any }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-col">
      <p className="mb-3 text-xl font-semibold leading-relaxed tracking-wide text-justify">
        {dictionary.firstIntro}
      </p>

      <AnimatePresence>
        {showMore && (
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{
              duration: 0.3,
            }}
            className="my-3 text-lg font-semibold text-justify text-gray-700 dark:text-gray-400"
          >
            {dictionary.secondIntro}
          </motion.p>
        )}
      </AnimatePresence>

      <motion.h6
        layout
        transition={{
          layout: {
            duration: 0.3,
          },
        }}
        className="self-center text-2xl font-semibold duration-300 border-b-2 border-black cursor-pointer dark:border-white hover:text-main-yellow hover:border-main-yellow"
        onClick={() => setShowMore((prevState) => !prevState)}
      >
        {showMore ? dictionary.showLess : dictionary.showMore}
      </motion.h6>
    </div>
  );
}
