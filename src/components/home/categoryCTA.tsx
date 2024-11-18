import { db } from "@/server/db";
import ThreeDCard from "../ui/threeDCard";
import { unstable_cache as cache } from "next/cache";

const getCachedChair = cache(async () => db.product.findMany({ where: { category: "Chair" } }), ["category-Chair"], { revalidate: 60 * 60 });
const getCachedLamp = cache(async () => db.product.findMany({ where: { category: "Lamp" } }), ["category-Lamp"], { revalidate: 60 * 60 });

export default async function CategoryCTA() {
  const chairsPromise = getCachedChair();
  const lampsPromise = getCachedLamp();

  const chairs = await chairsPromise;
  const lamps = await lampsPromise;

  return (
    <div className="mx-auto w-full max-w-7xl py-10 lg:py-16">
      <h2 className={"px-8 text-center"}>
        Find a variety of <br className="hidden md:block lg:hidden" /> home furniture&apos;s
      </h2>
      <div className="flex w-full flex-col items-center justify-center gap-2 px-3 py-8 sm:px-0 md:flex-row lg:gap-4">
        <ThreeDCard
          heading="Try new our chairs"
          subHeading="Brand new collection of chairs and modern design."
          imageURL={chairs[4]?.image ?? ""}
          imageAlt={chairs[4]?.productTitle ?? ""}
          link="/shop"
          linkName="Shop Now"
        />
        <ThreeDCard
          heading="Check out our new Lamps"
          subHeading="Brand new collection of Lamps with minimal design."
          imageURL={lamps[2]?.image ?? ""}
          imageAlt={lamps[2]?.productTitle ?? ""}
          link="/shop"
          linkName="Shop Now"
        />
      </div>
    </div>
  );
}
