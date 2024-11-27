import type { Product } from "@prisma/client";
import { getOriginURL } from "./getURL";

export async function getAllProducts() {
  const res = await fetch(`${getOriginURL()}/api/get-products/get-all-products`, {
    cache: "force-cache",
    next: {
      revalidate: 3600 * 7,
    },
  });

  const products = (await res.json()) as Product[];

  return products;
}
export async function getSingleChair() {
  const res = await fetch(`${getOriginURL()}/api/get-products/get-single-chair`, {
    cache: "force-cache",
    next: {
      revalidate: 3600 * 7,
    },
  });

  const products = (await res.json()) as Product;

  return products;
}
export async function getSingleLamp() {
  const res = await fetch(`${getOriginURL()}/api/get-products/get-single-lamp`, {
    cache: "force-cache",
    next: {
      revalidate: 3600 * 7,
    },
  });

  const products = (await res.json()) as Product;

  return products;
}
