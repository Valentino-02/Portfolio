"use client";

import { useState } from "react";

export default function Introduction({ dictionary }: { dictionary: any }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="flex flex-col">
      <p className="mb-3">{dictionary.firstIntro}</p>

      {showMore && <p className="my-3">{dictionary.secondIntro}</p>}

      <h6
        className="self-center text-lg font-semibold duration-300 border-b-2 border-black cursor-pointer dark:border-white hover:text-main-yellow hover:border-main-yellow"
        onClick={() => setShowMore((prevState) => !prevState)}
      >
        {showMore ? dictionary.showLess : dictionary.showMore}
      </h6>
    </div>
  );
}
