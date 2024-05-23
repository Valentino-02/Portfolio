"use client";

import { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const email = "collazo.valentino@gmail.com";
const googleMapLink =
  "https://www.google.com/maps/place/La+Plata,+Buenos+Aires+Province";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className="flex flex-col gap-2 py-6 font-bold">
      <div className="flex items-center gap-2">
        <p className="truncate ">{email}</p>
        <button
          className="flex gap-1"
          title="Copy to Clipboard"
          onClick={copyToClipboard}
        >
          <FaCopy className="text-lg duration-300 hover:text-slate-500" />
          {copied && <FaCheck className=" text-cyan-300" />}
        </button>
      </div>
      <div className="flex gap-2 ">
        <div className="flex flex-col">
          <p>La Plata, Argentina</p>
          <p>GMT: -3</p>
        </div>
        <a
          href={googleMapLink}
          target="_blank"
          title="Google Maps"
          className="text-3xl duration-300 hover:text-slate-500"
        >
          <GoLocation />
        </a>
      </div>
    </div>
  );
}
