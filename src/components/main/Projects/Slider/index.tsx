"use client";

import { useState } from "react";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import ArrowControls from "./ArrowControls";
import DotControls from "./DotControls";

export default function Slider({ slides }: { slides: Array<React.ReactNode> }) {
  const [current, setCurrent] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      slideChanged() {
        const idx = instanceRef.current?.track.details.abs;
        setCurrent(idx || 0);
      },
    },
    []
  );

  const onMoveLeft = () => {
    instanceRef.current?.prev();
  };
  const onMoveRight = () => {
    instanceRef.current?.next();
  };
  const onPageSelected = (index: number) => {
    instanceRef.current?.moveToIdx(index);
  };

  return (
    <div className="flex flex-col items-center justify-between ">
      <div className="relative flex items-center w-full">
        <ArrowControls
          onMoveLeft={onMoveLeft}
          onMoveRight={onMoveRight}
          leftDisabled={current == 0}
          rightDisabled={current == instanceRef.current?.track.details.maxIdx}
        />
        <div
          ref={sliderRef}
          className="z-10 pb-4 rounded-md bg-stone-300 sm:py-10 sm:mx-4 keen-slider dark:bg-slate-950"
        >
          {slides.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center keen-slider__slide"
            >
              {item}
            </div>
          ))}
        </div>
        <DotControls
          items={slides}
          current={current}
          onPageSelected={onPageSelected}
        />
      </div>
    </div>
  );
}
