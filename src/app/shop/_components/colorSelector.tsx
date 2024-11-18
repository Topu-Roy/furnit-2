"use client";

import { cn, scrollToTop } from "@/lib/utils";
import HeadingAndReset from "./headingAndReset";
import type { Color } from "@prisma/client";
import { parseAsString, useQueryState } from "nuqs";

export function ColorSelector() {
  const [selectedColor, setSelectedColor] = useQueryState("selectedColor", parseAsString);

  const colors: Color[] = ["Black", "Brown", "Green", "Red", "White"];

  function handleColorChange(color: Color) {
    if (color === selectedColor) {
      void setSelectedColor(null);
    } else {
      void setSelectedColor(color);
    }

    scrollToTop();
  }

  function handleReset() {
    void setSelectedColor(null);

    scrollToTop();
  }

  return (
    <>
      <div className="flex w-full flex-col items-start justify-start gap-[21px]">
        <HeadingAndReset title="Filter By Color" handleReset={handleReset} />
        <div className="flex w-full flex-row flex-wrap items-start justify-start gap-3">
          {colors.map(color => (
            <button
              key={color}
              onClick={() => handleColorChange(color)}
              className={cn(`h-10 w-10 rounded-full p-6 text-xs bg-${color}-500/80 flex items-center justify-center`, {
                "bg-black/80 text-white": color === "Black",
                "bg-stone-300 text-black": color === "White",
                "bg-red-500/80": color === "Red",
                "bg-green-500/80": color === "Green",
                "bg-[#964B00]/80": color === "Brown",
                "ring-[3px] ring-stone-700": selectedColor === color,
              })}
            >
              <span className="text-xs">{color.toLocaleLowerCase()}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="hidden">
        <div className="bg-red-500/80"></div>
        <div className="bg-orange-500/80"></div>
        <div className="bg-green-500/80"></div>
      </div>
    </>
  );
}
