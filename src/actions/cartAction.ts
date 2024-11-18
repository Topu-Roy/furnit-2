"use server";

import { db } from "@/server/db";
import type { CartProduct } from "@prisma/client";

type AddToCartProps = {
  productId: string;
  id: string;
};

type AddToCartReturnType =
  | {
      action: "created";
      cartProduct: CartProduct;
    }
  | {
      action: "alreadyInCart";
      cartProduct: null;
    }
  | {
      action: "error";
      cartProduct: null;
    };

export async function addToCartAction(props: AddToCartProps): Promise<AddToCartReturnType> {
  const user = await db.user.findFirst({
    where: {
      id: props.id,
    },
    include: {
      cartProducts: true,
    },
  });

  if (!user) return { action: "error", cartProduct: null };

  if (user.cartProducts.some(item => item.productId === props.productId)) {
    return { action: "alreadyInCart", cartProduct: null };
  }

  const createdCartProduct = await db.cartProduct.create({
    data: {
      userId: user.id,
      productId: props.productId,
    },
  });

  return { action: "created", cartProduct: createdCartProduct };
}
