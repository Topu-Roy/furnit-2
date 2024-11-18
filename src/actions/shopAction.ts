"use server";

import type { ShopQueryProps } from "@/query/query";
import { db } from "@/server/db";

export async function GetShopProductsAction({ color, category, tag }: ShopQueryProps) {
  const products = await db.product.findMany({
    where: {
      ...(color && { color }),
      ...(category && { category }),
      ...(tag && { tag }),
    },
  });

  return products;
}
