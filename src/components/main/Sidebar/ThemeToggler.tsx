"use client";

import { useTheme } from "next-themes";

export default function ThemeToggler({
  darkLabel,
  lightLabel,
}: {
  darkLabel: string;
  lightLabel: string;
}) {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="py-1 text-lg font-semibold duration-300 rounded-t-md bg-main-blue hover:text-white text-dark-blue"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? darkLabel : lightLabel}
    </button>
  );
}
