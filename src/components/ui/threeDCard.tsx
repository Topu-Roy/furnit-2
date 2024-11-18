import Image from "next/image";
import Link from "next/link";
import { CardItem, CardBody, CardContainer } from "@/components/ui/3d-card";

type Props = {
  heading: string;
  subHeading: string;
  imageURL: string;
  imageAlt: string;
  link: string;
  linkName: string;
};

export default function ThreeDCard({ heading, subHeading, imageURL, imageAlt, link, linkName }: Props) {
  return (
    <CardContainer>
      <CardBody className="group/card h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem] md:w-[22.5rem] lg:w-[30rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
        <CardItem translateZ="20" className="text-xl font-bold text-neutral-600 dark:text-white">
          {heading}
        </CardItem>
        <CardItem as="p" translateZ="40" className="mt-2 max-w-sm pb-8 text-sm text-neutral-500 dark:text-neutral-300">
          {subHeading}
        </CardItem>
        <CardItem translateZ="70" className="w-full">
          <Image
            src={imageURL}
            className="h-[20rem] w-full rounded-xl object-cover group-hover/card:shadow-xl"
            alt={imageAlt}
            width={1024}
            height={1024}
          />
        </CardItem>
        <div className="mt-20 flex w-full items-center justify-end">
          <CardItem
            translateZ={20}
            as={Link}
            href={link}
            className="ring-primary hover:bg-primary rounded-xl px-4 py-2 text-xs font-bold ring-1 ring-black hover:text-white hover:ring-0"
          >
            {linkName}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
