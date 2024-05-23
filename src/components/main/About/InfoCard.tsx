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
      <button className="z-10 flex items-center justify-center gap-1 py-2 text-xl font-extrabold tracking-widest duration-300 bg-gray-400 rounded-t-xl dark:bg-slate-950 align-center dark:hover:text-white dark:text-main-pink">
        {title}
        {isOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}
      </button>
      {isOpen && (
        <motion.div
          initial="closed"
          animate={isClosing ? "closed" : "open"}
          variants={animationVariants}
          transition={{ duration: 0.2 }}
          className="z-0 p-2 bg-gray-400 dark:bg-slate-950 rounded-b-xl"
        >
          <p>{text}</p>
        </motion.div>
      )}
    </div>
  );
}
