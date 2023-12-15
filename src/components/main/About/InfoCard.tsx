"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

export default function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const animationVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -30 },
  };

  const onClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      return;
    }

    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 200);
  };

  return (
    <div onClick={onClick} className="flex flex-col py-1">
      <button className="z-10 flex items-center justify-center gap-1 text-xl font-semibold duration-300 align-center bg-main-pink dark:hover:text-white dark:text-dark-blue">
        {title}
        {isOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}
      </button>
      {isOpen && (
        <motion.div
          initial="closed"
          animate={isClosing ? "closed" : "open"}
          variants={animationVariants}
          transition={{ duration: 0.2 }}
          className="z-0 px-1 text-base border-b-4 border-x-4 bg-stone-200 dark:bg-deep-blue border-main-pink"
        >
          <p>{text}</p>
        </motion.div>
      )}
    </div>
  );
}
