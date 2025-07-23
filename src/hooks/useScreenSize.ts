import { useState, useEffect } from "react";

interface ScreenSize {
  width: number;
  height: number;
}

type Breakpoint = "sm" | "md" | "lg" | "xl";

const breakpoints = {
  sm: 650,
  md: 768,
  lg: 1024,
  xl: 1280,
};

const getBreakpoint = (width: number) => {
  let output: Breakpoint = "sm";
  if (width >= breakpoints.md) output = "md";
  if (width >= breakpoints.lg) output = "lg";
  if (width >= breakpoints.xl) output = "xl";
  return output;
};

export default function useScreenSize() {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(() =>
    getBreakpoint(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setBreakpoint(() => getBreakpoint(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return [breakpoint, screenSize];
}
