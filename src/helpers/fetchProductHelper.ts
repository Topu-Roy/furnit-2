import type { Product } from "@prisma/client";
import { getOriginURL } from "./getURL";

export async function getAllProducts() {
  const res = await fetch(`${getOriginURL()}/api/get-all-products`, {
    cache: "force-cache",
    next: {
      revalidate: 3600,
    },
  });

  const products = (await res.json()) as Product[];

  return products;
}
