import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Rating from "@/app/products/_components/rating";
import { CompactIconsRating } from "./compactIconsRating";

export function AboutHero() {
  return (
    <>
      <section className="mt-[4rem] bg-stone-100 py-8 pb-14 md:h-[70dvh] md:px-4 md:py-[5rem]">
        <div className="mx-auto my-auto flex w-full max-w-7xl items-center justify-between gap-4">
          <div className="flex-1">
            <div className="space-y-4 px-4 text-center md:px-0 md:text-left">
              <h2 className="text-center text-3xl font-bold">Provide the best quality ingredients for home products</h2>
              <p className="pb-4">
                We believe your home reflects your story. We curate a collection of quality furniture that&apos;s both beautiful and functional,
                helping you create spaces you love. Explore our selection and find pieces that inspire you!
              </p>
              <Link href={"/shop"}>
                <Button className="font-semibold transition-all duration-100 hover:scale-105">Shop Now</Button>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 pt-4 md:items-start md:justify-start">
              <div className="flex flex-col items-center justify-center gap-[7px] md:items-start md:justify-start">
                <p className="font-bold text-black/70">Happy Customers</p>
                <div className="flex flex-row items-center justify-start gap-[5px] md:w-[45%]">
                  <Rating rate={5} readonly={true} />
                  <h2 className="text-center text-3xl font-bold text-black/70">5.0</h2>
                </div>
              </div>
              <div className="flex flex-row justify-center">
                <CompactIconsRating />
              </div>
            </div>
          </div>
          <div className="hidden flex-1 items-center justify-end md:flex">
            <Image
              src={"https://utfs.io/f/fdd5b437-8fc0-4e9f-a79b-37032958f196-meirr.jpg"}
              alt="Topu Roy"
              width={1050}
              height={1400}
              className="w-[70%] rounded-bl-[50%] rounded-tl-[50%] rounded-tr-[50%] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
