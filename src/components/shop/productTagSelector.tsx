"use client";

import { Button } from "@/components/ui/button";
import { cn, scrollToTop } from "@/lib/utils";
import { type Tag } from "@prisma/client";
import { parseAsString, useQueryState } from "nuqs";
import { RotateCcw } from "lucide-react";

export function ProductTagSelector() {
  const [selectedTag, setSelectedTag] = useQueryState("selectedTag", parseAsString);

  const tags: Tag[] = ["Ambient", "Elegant", "Luxurious", "Minimalistic", "Modern", "Stylish"];

  function handleClick(tag: Tag | null) {
    void setSelectedTag(tag);

    scrollToTop();
  }

  function handleReset() {
    void setSelectedTag(null);

    scrollToTop();
  }

  return (
    <div className="flex w-full flex-col items-start justify-start gap-3 rounded-lg bg-border p-2">
      <div className="flex w-full flex-row items-center justify-between gap-2">
        <h3 className="text-xl font-bold text-muted-foreground">Tags</h3>
        <Button variant={"outline"} className="size-10 rounded-full" onClick={() => handleReset()}>
          <RotateCcw />
        </Button>
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-4 pb-2">
        <div className="flex flex-row flex-wrap justify-start gap-2">
          {tags.map(tag => (
            <Button
              onClick={() => handleClick(tag)}
              size="lg"
              variant={"link"}
              className={cn("rounded-full bg-gray-300 px-3 py-1 hover:bg-gray-400/60 dark:bg-stone-600/60 dark:hover:bg-stone-600", {
                "ring-2 ring-primary": tag === selectedTag,
              })}
              key={tag}
            >
              <p
                className={cn("text-xs", {
                  "font-semibold": selectedTag === tag,
                })}
              >
                {tag}
              </p>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
