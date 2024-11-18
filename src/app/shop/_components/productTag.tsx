"use client";

import React, { Suspense, useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn, scrollToTop } from "@/lib/utils";
import HeadingAndReset from "./headingAndReset";
import { type Product, type Tag } from "@prisma/client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type ProductTagsType = {
  tag: Tag | "All";
  quantity: number;
};

function ProductTagComponent({ products }: { products: Product[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedTagParam = searchParams.get("tag");

  const [productTags, setProductTags] = useState<ProductTagsType[]>([]);
  const [selectedTag, setSelectedTag] = useState<Tag | "All">("All");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  useEffect(() => {
    const tag: Tag | "All" =
      selectedTagParam === "Minimalistic" ||
        selectedTagParam === "Modern" ||
        selectedTagParam === "Stylish" ||
        selectedTagParam === "Elegant" ||
        selectedTagParam === "Ambient" ||
        selectedTagParam === "Luxurious"
        ? (selectedTagParam as Tag)
        : "All";

    setSelectedTag(tag);
  }, [selectedTagParam]);

  useEffect(() => {
    const tags: ProductTagsType[] = [
      {
        tag: "All",
        quantity: products.length,
      },
      {
        tag: "Minimalistic",
        quantity: products.filter((item) => item.tag === "Minimalistic").length,
      },
      {
        tag: "Modern",
        quantity: products.filter((item) => item.tag === "Modern").length,
      },
      {
        tag: "Stylish",
        quantity: products.filter((item) => item.tag === "Stylish").length,
      },
      {
        tag: "Elegant",
        quantity: products.filter((item) => item.tag === "Elegant").length,
      },
      {
        tag: "Ambient",
        quantity: products.filter((item) => item.tag === "Ambient").length,
      },
      {
        tag: "Luxurious",
        quantity: products.filter((item) => item.tag === "Luxurious").length,
      },
    ];

    setProductTags(tags);
  }, [products]);

  function handleClick(tag: Tag | "All") {
    setSelectedTag(tag);

    scrollToTop();
  }

  function handleReset() {
    setSelectedTag("All");

    scrollToTop();
  }

  useEffect(() => {
    router.push(pathname + "?" + createQueryString("tag", selectedTag));
  }, [selectedTag]);

  return (
    <div className="flex w-full flex-col items-start justify-start gap-4">
      <HeadingAndReset title="Filter By Tag" handleReset={handleReset} />
      <div className="flex w-full flex-col items-start justify-start gap-4">
        <div className="flex flex-row flex-wrap justify-start gap-2">
          {productTags.map((item) => (
            <Button
              onClick={() => handleClick(item.tag)}
              size="lg"
              variant={"link"}
              className={cn(
                "min-w-[3rem] cursor-pointer rounded-full bg-slate-200/90 px-3 py-1 tracking-[-0.50px] text-gray-700/90",
                {
                  "text-black ring-[2px] ring-black/20":
                    item.tag === selectedTag,
                },
              )}
              key={item.tag}
            >
              {item.tag} ({item.quantity})
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProductTag({ products }: { products: Product[] }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductTagComponent products={products} />;
    </Suspense>
  )
}