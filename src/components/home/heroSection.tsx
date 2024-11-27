import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="w-full bg-white bg-gradient-to-t from-orange-300 to-background py-8 dark:bg-black dark:text-white md:px-2 lg:px-4">
      <div className="container mx-auto w-full max-w-7xl py-20">
        <div className="my-[5px] flex w-full max-w-[1290px] flex-col-reverse items-center justify-between px-2 md:flex-row">
          <div className="flex w-full flex-col items-center justify-start gap-[30px] sm:px-4 md:w-[50%] md:items-start md:px-0">
            <div className="flex w-full flex-col items-center justify-start gap-2 pt-6 md:items-start md:justify-start">
              <h4
                className={`rounded-full bg-background p-1 px-2 text-xs font-medium text-muted-foreground shadow-md ring-[1px] ring-border sm:mb-4`}
              >
                Interior Needs
              </h4>
              <h1
                className={`text-balance text-center text-3xl font-extrabold text-gray-900/80 dark:text-white md:pr-1 md:text-left md:text-4xl lg:pr-3 xl:pr-14 xl:text-5xl`}
              >
                Various new collections of furniture to decorate the corner of your house.
              </h1>
            </div>
            <Link href={"/shop"}>
              <Button className="flex items-center justify-center gap-2 py-4 font-bold">
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
              className="absolute left-0 top-0 w-[60%] rounded-lg object-cover transition-all duration-300 hover:scale-105"
            />
            <Image
              height={1000}
              width={1000}
              src="https://utfs.io/f/83301904-c745-4423-9435-2da0eb8bdaba-nhduvf.jpg"
              alt="Furnit - Topu Roy"
              className="absolute bottom-0 right-0 w-[60%] rounded-lg object-cover shadow-2xl transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
