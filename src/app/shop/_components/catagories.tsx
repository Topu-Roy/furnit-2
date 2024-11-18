"use client";

import { useMemo } from "react";
import { cn, scrollToTop } from "@/lib/utils";
import HeadingAndReset from "./headingAndReset";
import { Button } from "@/components/ui/button";
import type { Category } from "@prisma/client";
import { useGetProductsQuantityByCategoryQuery } from "@/query/query";
import { parseAsString, useQueryState } from "nuqs";

export function CategorySelector() {
  const [selectedCategory, setSelectedCategory] = useQueryState("selectedCategory", parseAsString);
  const { data: productsQuantityByCategory } = useGetProductsQuantityByCategoryQuery();

  const totalQuantity = useMemo(() => {
    const totalQuantity = {
      total: 0,
    };

    productsQuantityByCategory?.forEach(item => {
      totalQuantity.total = totalQuantity.total + item._count.category;
    });

    return totalQuantity.total;
  }, [productsQuantityByCategory]);

  function handleCategory(category: Category | null) {
    void setSelectedCategory(category);

    scrollToTop();
  }

  function handleReset() {
    void setSelectedCategory(null);

    scrollToTop();
  }

  return (
    <div className="flex w-full flex-col items-start justify-start gap-4">
      <HeadingAndReset handleReset={handleReset} title={"Product Categories"} />
      <div className="flex w-full flex-row flex-wrap items-start gap-2">
        <Button
          asChild
          onClick={() => handleCategory(null)}
          variant={"link"}
          className={cn("min-w-[3rem] cursor-pointer rounded-full bg-slate-200/90 px-3 py-1 tracking-[-0.50px]", {
            "ring-[2px] ring-black/20": selectedCategory === null,
          })}
        >
          <p
            className={cn("tracking-[-0.50px] !text-gray-700/90", {
              "!text-black": selectedCategory === null,
            })}
          >
            All ({totalQuantity})
          </p>
        </Button>

        {productsQuantityByCategory?.map(category => (
          <Button
            key={category.category}
            asChild
            onClick={() => handleCategory(category.category)}
            variant={"link"}
            className={cn("min-w-[3rem] cursor-pointer rounded-full bg-slate-200/90 px-3 py-1 tracking-[-0.50px]", {
              "ring-[2px] ring-black/20": selectedCategory === category.category,
            })}
          >
            <p
              className={cn("tracking-[-0.50px] !text-gray-700/90", {
                "!text-black": selectedCategory === category.category,
              })}
            >
              {category.category} ({category._count.category})
            </p>
          </Button>
        ))}
      </div>
    </div>
  );
}
