"use client";

import { Suspense } from "react";
import { useShopQuantityQuery, useShopQuery } from "@/query/query";
import type { Category, Color, Tag } from "@prisma/client";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";
import { ProductCard } from "./productCard";
import { Skeleton } from "@/components/ui/skeleton";
import { PaginationButton } from "./paginationButton";

function RenderShopComponent() {
  const [selectedCategory] = useQueryState("selectedCategory", parseAsString);
  const [selectedColor] = useQueryState("selectedColor", parseAsString);
  const [selectedTag] = useQueryState("selectedTag", parseAsString);
  const [page, setPage] = useQueryState("page", parseAsInteger);
  const itemPerPage = 12;

  const { data: products, isLoading } = useShopQuery({
    category: selectedCategory as Category | null,
    color: selectedColor as Color | null,
    tag: selectedTag as Tag | null,
    page: page ?? 1,
    itemPerPage,
  });

  const { data: productsQuantity } = useShopQuantityQuery({
    category: selectedCategory as Category | null,
    color: selectedColor as Color | null,
    tag: selectedTag as Tag | null,
  });

  return (
    <>
      <div className="mx-auto flex w-full flex-wrap items-start justify-center gap-5 py-5">
        {products ? products.map(item => <ProductCard key={item.id} product={item} />) : null}
        {!products && !isLoading ? <div>No products found.</div> : null}
        {isLoading
          ? Array.from({ length: 9 }).map((_, index) => <Skeleton key={index} className="h-[28rem] w-full max-w-sm rounded-sm" />)
          : null}
      </div>

      <PaginationButton page={page} setPageAction={setPage} itemPerPage={itemPerPage} totalProducts={productsQuantity} />
    </>
  );
}

export function RenderShop() {
  return (
    <Suspense>
      <RenderShopComponent />
    </Suspense>
  );
}
