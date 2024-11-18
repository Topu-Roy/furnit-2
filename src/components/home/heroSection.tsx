import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="mt-[4rem] w-full bg-white py-8 dark:bg-black dark:text-white md:px-2 md:pt-16 lg:px-4">
      <div className="mx-auto w-full max-w-7xl">
        <div className="my-[5px] flex w-full max-w-[1290px] flex-col-reverse items-center justify-between px-2 md:flex-row">
          <div className="flex w-full flex-col items-center justify-start gap-[30px] sm:px-4 md:w-[50%] md:items-start md:px-0">
            <div className="flex w-full flex-col items-center justify-start gap-2 pt-6 md:items-start md:justify-start">
              <h2 className={`rounded-full bg-secondary p-1 px-2 tracking-[-0.50px] shadow-md ring-[3px] ring-secondary sm:mb-4`}>
                Interior Needs
              </h2>
              <h1
                className={`text-center text-3xl tracking-normal text-gray-900/80 dark:text-white md:pr-1 md:text-left md:text-4xl lg:pr-3 xl:pr-14 xl:text-5xl`}
              >
                Various new collections of furniture to decorate the corner of your house.
              </h1>
            </div>
            <Link href={"/shop"}>
              <Button className="flex items-center justify-center gap-2 border-2 border-solid font-medium tracking-[-0.50px]">
                <p>Shop Now</p>
                <ShoppingBag />
              </Button>
            </Link>
          </div>
          <div className="lg:w-[26rem relative h-[80dvw] w-[95dvw] rounded-lg sm:mb-8 sm:h-[23rem] sm:w-[30rem] md:h-[25rem] md:w-[25rem] lg:h-[30rem] lg:w-[30rem]">
            <Image
              height={1000}
              width={1000}
              src="https://utfs.io/f/7a85000c-e46d-4681-bfe3-9eb80b521812-9mkf9m.jpg"
              alt="Furnit - Topu Roy"
              className="absolute left-0 top-0 w-[60%] rounded-lg object-cover"
            />
            <Image
              height={1000}
              width={1000}
              src="https://utfs.io/f/83301904-c745-4423-9435-2da0eb8bdaba-nhduvf.jpg"
              alt="Furnit - Topu Roy"
              className="absolute bottom-0 right-0 w-[60%] rounded-lg object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
