"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Props = {
  type: "WH_ZI" | "OR_ST";
};

// #ffffff -> #18181b = white -> zinc
// #ffedd5 -> #0c0a09 = orange -> stone

export function CurveSVGModeSense({ type }: Props) {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  function getBGColor() {
    if (type === "OR_ST") {
      if (isDark) {
        return "#0c0a09";
      } else {
        return "#ffedd5";
      }
    } else {
      if (isDark) {
        return "#18181b";
      } else {
        return "#ffffff";
      }
    }
  }

  function getFillColor() {
    if (type === "OR_ST") {
      if (isDark) {
        return "#18181b";
      } else {
        return "#ffffff";
      }
    } else {
      if (isDark) {
        return "#0c0a09";
      } else {
        return "#ffedd5";
      }
    }
  }

  if (!isMounted) return null;

  return (
    <svg
      viewBox="0 0 1440 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      style={{
        backgroundColor: getBGColor(),
      }}
    >
      <path d="M-100 58C-100 58 218.416 36.3297 693.5 36.3297C1168.58 36.3297 1487 58 1487 58V-3.8147e-06H-100V58Z" fill={getFillColor()}></path>
    </svg>
  );
}

export function CurveSVGForFooter() {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <svg
      viewBox="0 0 1440 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      style={{
        backgroundColor: "#030712",
      }}
    >
      <path
        d="M-100 58C-100 58 218.416 36.3297 693.5 36.3297C1168.58 36.3297 1487 58 1487 58V-3.8147e-06H-100V58Z"
        fill={isDark ? "#18181b" : "#ffffff"}
      ></path>
    </svg>
  );
}
