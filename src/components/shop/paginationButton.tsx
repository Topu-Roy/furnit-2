"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn, scrollToTop } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Options } from "nuqs";

type Props = {
  setPageAction: (value: number | ((old: number | null) => number | null) | null, options?: Options) => Promise<URLSearchParams>;
  page: number | null;
  itemPerPage: number;
  totalProducts: number | undefined;
};

export function PaginationButton(props: Props) {
  const [totalProducts, setTotalProducts] = useState(props.totalProducts);
  const totalPages = totalProducts ? Math.ceil(totalProducts / props.itemPerPage) : undefined;

  useEffect(() => {
    setTotalProducts(props.totalProducts);
  }, [props.totalProducts]);

  function handlePrevClick() {
    if (!props.page) return;
    if (props.page === 1) return;

    void props.setPageAction(props.page - 1);
    scrollToTop();
  }

  function handleNextClick() {
    if (!props.page) return;
    if (props.page === totalPages) return;

    void props.setPageAction(props.page + 1);
    scrollToTop();
  }

  return (
    <div className="flex items-center justify-center gap-8 py-8">
      <Button disabled={props.page === 1 || props.page === null} onClick={handlePrevClick} className="px-4">
        <ChevronLeft />
        Prev
      </Button>

      {totalProducts
        ? Array.from({ length: totalPages ?? 1 }).map((_, index) => (
            <Button
              key={index}
              onClick={() => {
                void props.setPageAction(index + 1);
                scrollToTop();
              }}
              variant={"ghost"}
              disabled={props.page === index + 1}
              className={cn("size-8 rounded-full", {
                "bg-stone-400": props.page === index + 1,
              })}
            >
              {index + 1}
            </Button>
          ))
        : null}

      <Button disabled={totalPages === props.page} onClick={handleNextClick} className="px-4">
        Next
        <ChevronRight />
      </Button>
    </div>
  );
}
