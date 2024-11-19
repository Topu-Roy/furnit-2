"use client";

import { useMemo } from "react";
import { cn, scrollToTop } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { Category } from "@prisma/client";
import { useGetProductsQuantityByCategoryQuery } from "@/query/query";
import { parseAsString, useQueryState } from "nuqs";
import { RotateCcw } from "lucide-react";

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

  function handleCategory(category: Category | "All") {
    void setSelectedCategory(category === "All" ? null : category);

    scrollToTop();
  }

  function handleReset() {
    void setSelectedCategory(null);

    scrollToTop();
  }

  return (
    <div className="flex w-full flex-col items-start justify-start gap-3 rounded-lg bg-border p-2">
      <div className="flex w-full flex-row items-center justify-between gap-2">
        <h3 className="text-xl font-bold text-muted-foreground">Category</h3>
        <Button variant={"outline"} className="size-10 rounded-full" onClick={() => handleReset()}>
          <RotateCcw />
        </Button>
      </div>
      <div className="flex w-full flex-row flex-wrap items-start gap-2 pb-2">
        <CategoryButton
          category={{ _count: { category: totalQuantity }, category: "All" }}
          fn={handleCategory}
          selectedCategory={selectedCategory}
        />

        {productsQuantityByCategory?.map(category => (
          <CategoryButton key={category.category} category={category} fn={handleCategory} selectedCategory={selectedCategory} />
        ))}
      </div>
    </div>
  );
}

type CategoryButtonProps = {
  category: {
    _count: {
      category: number;
    };
    category: Category | "All";
  };
  selectedCategory: string | null;
  fn: (category: Category | "All") => void;
};

function CategoryButton({ category, selectedCategory, fn }: CategoryButtonProps) {
  return (
    <Button
      key={category.category}
      onClick={() => fn(category.category)}
      variant="ghost"
      className={cn("rounded-full bg-gray-300 px-3 py-1 hover:bg-gray-400/60 dark:bg-stone-600/60 dark:hover:bg-stone-600", {
        "ring-2 ring-primary": (selectedCategory === null && category.category === "All") || selectedCategory === category.category,
      })}
    >
      <p
        className={cn("text-xs", {
          "font-semibold": (selectedCategory === null && category.category === "All") || selectedCategory === category.category,
        })}
      >
        {category.category} ({category._count.category})
      </p>
    </Button>
  );
}
