import ThreeDCard from "../ui/threeDCard";
import { getSingleChair, getSingleLamp } from "@/helpers/fetchProductHelper";

export default async function CategoryCTA() {
  const chairsPromise = getSingleChair();
  const lampsPromise = getSingleLamp();

  const chair = await chairsPromise;
  const lamp = await lampsPromise;

  return (
    <div className="w-full bg-orange-100 py-10 dark:bg-stone-950 lg:py-16">
      <div className="container mx-auto max-w-7xl">
        <h2 className={"px-8 text-center text-3xl font-bold"}>
          Find a variety of <br className="hidden md:block lg:hidden" /> home furniture&apos;s
        </h2>
        <div className="flex w-full flex-col items-center justify-center gap-2 px-3 pb-8 sm:px-0 md:flex-row lg:gap-4">
          <ThreeDCard
            heading="Try new our chairs"
            subHeading="Brand new collection of chairs and modern design."
            imageURL={chair?.image ?? ""}
            imageAlt={chair?.productTitle ?? ""}
            link="/shop"
            linkName="Shop Now"
          />
          <ThreeDCard
            heading="Check out our new Lamps"
            subHeading="Brand new collection of Lamps with minimal design."
            imageURL={lamp?.image ?? ""}
            imageAlt={lamp?.productTitle ?? ""}
            link="/shop"
            linkName="Shop Now"
          />
        </div>
      </div>
    </div>
  );
}
