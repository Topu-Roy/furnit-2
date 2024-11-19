"use client";

import { cn, scrollToTop } from "@/lib/utils";
import type { Color } from "@prisma/client";
import { parseAsString, useQueryState } from "nuqs";
import { Button } from "../ui/button";
import { RotateCcw } from "lucide-react";

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
      <div className="flex w-full flex-col items-start justify-start gap-3 rounded-lg bg-border p-2">
        <div className="flex w-full flex-row items-center justify-between gap-2">
          <h3 className="text-xl font-bold text-muted-foreground">Colors</h3>
          <Button variant={"outline"} className="size-10 rounded-full" onClick={() => handleReset()}>
            <RotateCcw />
          </Button>
        </div>
        <div className="flex w-full flex-row flex-wrap items-start justify-start gap-3 pb-2">
          {colors.map(color => (
            <button
              key={color}
              onClick={() => handleColorChange(color)}
              className={cn(`flex size-10 items-center justify-center rounded-full p-6 text-xs transition-all hover:scale-105`, {
                "bg-black/80 text-white hover:bg-black": color === "Black",
                "bg-stone-300 text-black hover:bg-stone-400/80": color === "White",
                "bg-red-500/80 hover:bg-red-500": color === "Red",
                "bg-green-500/80 hover:bg-green-500": color === "Green",
                "bg-[#964B00]/80 hover:bg-[#964B00]": color === "Brown",
                "ring-2 ring-primary": selectedColor === color,
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
