"use server";

import { db } from "@/server/db";
import type { Category } from "@prisma/client";

export async function getAllProductsAction() {
  const products = await db.product.findMany();

  return products;
}

export async function getProductsByCategoryAction({ category }: { category: Category }) {
  const products = await db.product.findMany({
    where: {
      category,
    },
  });

  return products;
}

export async function getProductsQuantityByCategoryAction() {
  const products = await db.product.groupBy({
    by: "category",
    _count: {
      category: true,
    },
  });

  return products;
}

export async function getProductsQuantityByColorAction() {
  const products = await db.product.groupBy({
    by: "color",
    _count: {
      category: true,
    },
  });

  return products;
}
