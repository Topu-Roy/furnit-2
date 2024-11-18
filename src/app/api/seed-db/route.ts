import { productsData } from "@/constants/allProductInfo";
import { db } from "@/server/db";
import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";

export const seedRouteSchema = z.object({
  userEmail: z.string().email(),
});

export async function POST(request: NextRequest) {
  const body: unknown = await request.json();

  if (!body) {
    return NextResponse.json({ message: "Body not provided." }, { status: 400 });
  }

  const parsedBody = seedRouteSchema.safeParse(body);

  if (!parsedBody.success) {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const admin = await db.user.findUnique({
    where: { email: parsedBody.data.userEmail, role: "ADMIN" },
  });

  if (!admin) {
    return NextResponse.json({ message: "User is not an admin." }, { status: 403 });
  }

  try {
    for (const productData of productsData) {
      await db.product.create({
        data: {
          createdBy: {
            connect: {
              id: admin.id,
            },
          },
          ...productData,
        },
      });
    }

    return NextResponse.json({ message: "Products seeded successfully" }, { status: 201 });
  } catch (error) {
    console.error("Seeding error:", error);
    return NextResponse.json({ message: "Failed to seed database." }, { status: 500 });
  }
}
