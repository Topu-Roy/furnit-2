"use client";

import { useShopQuery } from "@/query/query";
import type { Category, Color, Tag } from "@prisma/client";
import { parseAsString, useQueryState } from "nuqs";

export default function ShopPage() {
  const [selectedCategory] = useQueryState("selectedCategory", parseAsString);
  const [selectedColor] = useQueryState("selectedColor", parseAsString);
  const [selectedTag] = useQueryState("selectedTag", parseAsString);

  const { data: products } = useShopQuery({
    category: selectedCategory as Category | null,
    color: selectedColor as Color | null,
    tag: selectedTag as Tag | null,
  });

  return (
    <div className="mt-[5rem] flex w-full flex-col items-center justify-start gap-[100px] bg-stone-200 pb-14 pt-4">
      <div className="flex w-full flex-col items-center justify-start">
        <div className="relative flex w-full max-w-7xl flex-row items-start justify-start gap-5 px-2 lg:pl-4 2xl:px-0 2xl:pl-0">
          {products?.map(item => (
            <div key={item.id} className="">
              {item.productTitle}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
