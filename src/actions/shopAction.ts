"use server";

import type { ShopQueryProps } from "@/query/query";
import { db } from "@/server/db";

export async function GetShopProductsAction({ color, category, tag, itemPerPage, page }: ShopQueryProps) {
  const products = await db.product.findMany({
    where: {
      ...(color && { color }),
      ...(category && { category }),
      ...(tag && { tag }),
    },
    take: itemPerPage,
    skip: (page - 1) * itemPerPage,
  });

  return products;
}

export async function GetShopProductsQuantityAction({ color, category, tag }: Omit<ShopQueryProps, "page" | "itemPerPage">) {
  const count = await db.product.count({
    where: {
      ...(color && { color }),
      ...(category && { category }),
      ...(tag && { tag }),
    }
  });

  return count;
}
