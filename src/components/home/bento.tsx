import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    id: 1,
    title: "Tables",
    description: "Latest models with best useability.",
    image: "https://utfs.io/f/5f76c248-54da-48e7-8e35-c2f450fd7e44-xtpdv3.jpg",
    link: "/category/smartphones",
  },
  {
    id: 2,
    title: "Drawers",
    description: "Spacious Chest of Drawer.",
    image: "https://utfs.io/f/1f17f334-edaa-47ae-b535-20fe794fea91-8my16.jpg",
    link: "/category/laptops",
  },
  {
    id: 3,
    title: "Bookshelf's",
    description: "Keep your favorite books in a beautiful place.",
    image: "https://utfs.io/f/9dd08019-701e-476d-80bb-f155e6a76162-upirmj.jpg",
    link: "/category/accessories",
  },
  {
    id: 4,
    title: "Beds",
    description: "Transform your living space with best quality beds.",
    image: "https://utfs.io/f/b37ae3d3-c705-44d0-89a5-da0b229241fe-62un7n.jpg",
    link: "/category/smart-home",
  },
  {
    id: 5,
    title: "Chair",
    description: "Best quality chairs for all needs.",
    image: "https://utfs.io/f/15f8f872-c1ac-4f79-a640-eeed39cde23f-1tn7jq.jpg",
    link: "/category/audio",
  },
];

export function BentoGridShowcase() {
  return (
    <section className="w-full bg-white py-12 dark:bg-zinc-900 xl:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Product Categories</h2>
        <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {products.map(product => (
            <Card
              key={product.id}
              className={`overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg ${
                product.id === 1 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
              }`}
            >
              <Link href={product.link} className="group block h-full">
                <CardContent className="h-full p-0">
                  <div className="relative h-full w-full">
                    <Image
                      src={product.image}
                      alt={product.title}
                      layout="fill"
                      objectFit="cover"
                      className="opacity-70 transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-4">
                      <h3 className="mb-1 text-lg font-bold text-white md:text-xl">{product.title}</h3>
                      <p className="line-clamp-2 text-sm text-gray-200">{product.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
