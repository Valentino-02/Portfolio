"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

export default function InfoCard() {
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
    <div onClick={onClick} className="flex flex-col py-1 md:w-48 w-[250px] ">
      <button className="z-10 flex items-center justify-center gap-1 text-lg font-semibold duration-300 align-center bg-main-pink dark:hover:text-white dark:text-dark-blue">
        Test
        {isOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}
      </button>
      {isOpen && (
        <motion.div
          initial="closed"
          animate={isClosing ? "closed" : "open"}
          variants={animationVariants}
          transition={{ duration: 0.2 }}
          className="z-0 px-1 border-b-4 border-x-4 bg-stone-200 dark:bg-deep-blue border-main-pink"
        >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            magni, praesentium at ipsam ratione voluptatibus, aspernatur nemo
            quis doloribus possimus pariatur fugit illo doloremque odio non iste
            nisi facilis laudantium.
          </p>
        </motion.div>
      )}
    </div>
  );
}
