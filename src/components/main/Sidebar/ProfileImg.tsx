"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const imgURLs: Array<string> = [
  "https://utfs.io/f/446507a1-2b70-4b35-a326-323ac2e5deff-mjypc2.png",
  "https://utfs.io/f/b93022f5-7a30-47fe-89df-6d35bd4c2409-kl126k.png",
  "https://utfs.io/f/665db26a-4d75-4e51-a4d8-ac6f0bb17953-cna778.png",
];

export default function ProfileImg() {
  const [imgIndex, setImgIndex] = useState(0);
  const changeImg = () => {
    setImgIndex((prevIndex) => {
      if (prevIndex == imgURLs.length - 1) return 0;
      return prevIndex + 1;
    });
  };

  return (
    <motion.div
      whileTap={{
        scale: 0.8,
        rotate: -360,
        borderRadius: "100%",
      }}
    >
      <Image
        src={imgURLs[imgIndex]}
        alt="Profile Photo"
        title="Spin Me?"
        className="w-32 h-32 mx-auto mb-4 duration-300 bg-black border-4 border-black rounded-full cursor-pointer hover:border-main-pink"
        width={1000}
        height={1000}
        onClick={() => changeImg()}
      />
      <Image src={imgURLs[0]} width={0} height={0} alt="0" className="hidden" />
      <Image src={imgURLs[1]} width={0} height={0} alt="1" className="hidden" />
      <Image src={imgURLs[2]} width={0} height={0} alt="2" className="hidden" />
    </motion.div>
  );
}
