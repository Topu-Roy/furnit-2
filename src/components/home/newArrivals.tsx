import Link from "next/link";
import { Button } from "@/components/ui/button";
import { type Product as ProductType } from "@prisma/client";
import { Product } from "../product/productCard";
import type { Session } from "next-auth";

type Props = {
  products: ProductType[];
  session: Session | null;
};

export default function NewArrivals({ products, session }: Props) {
  let filteredProducts = {
    mobile: [] as ProductType[],
    tablet: [] as ProductType[],
    desktop: [] as ProductType[],
    widescreen: [] as ProductType[],
  };

  const AllNewProducts = products.filter(item => item.status === "New");

  filteredProducts = {
    mobile: AllNewProducts.slice(0, 4),
    tablet: AllNewProducts.slice(0, 6),
    desktop: AllNewProducts.slice(0, 9),
    widescreen: AllNewProducts.slice(0, 8),
  };

  return (
    <div className="flex w-full items-center justify-center bg-orange-100 py-10 dark:bg-stone-950 dark:text-white lg:py-16">
      <div className="flex max-w-7xl flex-row justify-center">
        <div className="flex w-full flex-col items-center justify-start gap-[67px]">
          <h2 className="mb-8 text-center text-3xl font-bold">New Arrival</h2>

          <div className="relative flex w-full flex-col gap-7">
            <Link href={`/shop`} className="absolute -top-14 right-4 z-40 md:right-0">
              <Button variant={"ghost"}>View All</Button>
            </Link>
            <div className="mx-auto grid w-full max-w-md grid-cols-1 gap-4 px-4 sm:max-w-[85%] sm:grid-cols-2 md:hidden">
              {filteredProducts.mobile.map(item => (
                <div key={item.id}>
                  <Product product={item} session={session} />
                </div>
              ))}
            </div>
            <div className="mx-auto hidden w-full max-w-4xl grid-cols-2 gap-4 px-4 md:grid lg:hidden">
              {filteredProducts.tablet.map(item => (
                <div key={item.id}>
                  <Product product={item} session={session} />
                </div>
              ))}
            </div>
            <div className="mx-auto hidden w-full max-w-6xl grid-cols-3 gap-4 px-4 lg:grid xl:hidden">
              {filteredProducts.desktop.map(item => (
                <div key={item.id}>
                  <Product product={item} session={session} />
                </div>
              ))}
            </div>
            <div className="mx-auto hidden w-full max-w-7xl grid-cols-4 gap-4 px-4 xl:grid">
              {filteredProducts.widescreen.map(item => (
                <div className="w-[18rem]" key={item.id}>
                  <Product product={item} session={session} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
