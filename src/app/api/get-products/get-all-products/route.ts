import { db } from "@/server/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await db.product.findMany();

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.stack);
    }

    return NextResponse.json({ message: "Failed to fetch products." }, { status: 404 });
  }
}
