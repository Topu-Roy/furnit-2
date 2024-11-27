import { db } from "@/server/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const product = await db.product.findFirst({
      where: {
        category: "Lamp",
      },
    });

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.stack);
    }

    return NextResponse.json({ message: "Failed to fetch products." }, { status: 404 });
  }
}
