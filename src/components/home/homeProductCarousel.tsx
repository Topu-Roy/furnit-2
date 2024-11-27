import RenderProductCarousel from "./renderProductCarousel";
import { type Product } from "@prisma/client";
import type { Session } from "next-auth";
import { Suspense } from "react";

type Props = {
  products: Array<Product>;
  session: Session | null;
};

export default async function HomeProductCarousel({ products, session }: Props) {
  return (
    <div className="bg-wh flex flex-col items-center justify-center bg-white py-10 dark:bg-zinc-900 dark:text-white lg:py-16">
      <div className="flex w-full flex-col items-center justify-center gap-5 pb-10">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Newest Products</h2>
        <p className={"mb-1 text-center"}>Made of the best materials and with a design that follows the times</p>
      </div>

      <Suspense>
        <RenderProductCarousel session={session} products={products} />
      </Suspense>
    </div>
  );
}
