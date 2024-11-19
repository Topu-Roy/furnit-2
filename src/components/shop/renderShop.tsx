"use client";

import { Suspense } from "react";
import { useShopQuery } from "@/query/query";
import type { Category, Color, Tag } from "@prisma/client";
import { parseAsString, useQueryState } from "nuqs";
import { ProductCard } from "./productCard";

function RenderShopComponent() {
  const [selectedCategory] = useQueryState("selectedCategory", parseAsString);
  const [selectedColor] = useQueryState("selectedColor", parseAsString);
  const [selectedTag] = useQueryState("selectedTag", parseAsString);

  const { data: products } = useShopQuery({
    category: selectedCategory as Category | null,
    color: selectedColor as Color | null,
    tag: selectedTag as Tag | null,
  });

  return (
    <div className="mx-auto flex w-full flex-wrap items-start justify-center gap-5 py-5">
      {products?.map(item => <ProductCard key={item.id} product={item} />)}
    </div>
  );
}

export function RenderShop() {
  return (
    <Suspense>
      <RenderShopComponent />
    </Suspense>
  );
}
