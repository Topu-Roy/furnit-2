"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Options } from "nuqs";

type Props = {
  setPageAction: (value: number | ((old: number | null) => number | null) | null, options?: Options) => Promise<URLSearchParams>;
  page: number | null;
  itemPerPage: number;
  totalProducts: number | undefined;
};

export function PaginationButton({ page, setPageAction, itemPerPage, totalProducts }: Props) {
  const [totalPages] = useState(totalProducts ? Math.ceil(totalProducts / itemPerPage) : undefined);

  return (
    <div className="flex items-center justify-center gap-8 py-8">
      <Button disabled={page === 1 || page === null} className="px-4">
        <ChevronLeft />
        Prev
      </Button>

      {totalProducts
        ? Array.from({ length: totalPages ?? 1 }).map((_, index) => (
            <Button
              key={index}
              onClick={() => setPageAction(index + 1)}
              variant={"ghost"}
              disabled={page === index + 1}
              className={cn("size-8 rounded-full", {
                "bg-stone-400": page === index + 1,
              })}
            >
              {index + 1}
            </Button>
          ))
        : null}

      <Button disabled={totalPages === page} className="px-4">
        Next
        <ChevronRight />
      </Button>
    </div>
  );
}
