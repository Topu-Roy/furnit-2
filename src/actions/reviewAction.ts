"use server";

import { db } from "@/server/db";

type CreateReviewActionType = {
  name: string;
  rating: number;
  text: string;
  userId: string;
  productId: string;
};

export async function createReviewAction({ name, productId, rating, text, userId }: CreateReviewActionType) {
  try {
    const createdReview = await db.review.create({
      data: {
        name,
        rating,
        text,
        userId,
        productId,
      },
    });

    return { error: false, createdReview: createdReview };
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.stack);
      return { error: true, createdReview: null };
    }
  }
}
