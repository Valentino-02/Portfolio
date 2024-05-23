"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ArrowControlProps {
  onMoveLeft: () => void;
  onMoveRight: () => void;
  leftDisabled: boolean;
  rightDisabled: boolean;
}

export default function ArrowControls({
  onMoveLeft,
  onMoveRight,
  leftDisabled,
  rightDisabled,
}: ArrowControlProps) {
  const onLeftClick = () => {
    if (leftDisabled) return;
    onMoveLeft();
  };
  const onRightClick = () => {
    if (rightDisabled) return;
    onMoveRight();
  };

  return (
    <div className="absolute right-[-20px] justify-between hidden left-[-20px] sm:flex">
      <button onClick={onLeftClick}>
        <FaChevronLeft
          className={`w-8 h-8 hover:scale-125 duration-200 ${
            leftDisabled ? "text-gray-500" : "text-main-yellow "
          }`}
        />
      </button>
      <button onClick={onRightClick}>
        <FaChevronRight
          className={`w-8 h-8 hover:scale-125 duration-200 ${
            rightDisabled ? "text-gray-500" : "text-main-yellow "
          }`}
        />
      </button>
    </div>
  );
}
