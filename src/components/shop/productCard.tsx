import Image from "next/image";
import type { Category, Status, Tag } from "@prisma/client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Product = {
  id: string;
  color: string;
  image: string | null;
  status: Status;
  productTitle: string;
  description: string;
  price: number;
  createdById: string;
  category: Category;
  tag: Tag;
};

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="w-full max-w-sm overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-0">
        {product.image ? (
          <Image
            alt={product.productTitle}
            className="h-64 w-full object-cover"
            height="400"
            src={product.image}
            style={{
              aspectRatio: "300/400",
              objectFit: "cover",
            }}
            width="300"
          />
        ) : (
          <div className="flex h-64 w-full items-center justify-center bg-gray-200">
            <span className="text-gray-400">No image available</span>
          </div>
        )}
        <div className="p-4">
          <div className="mb-2 flex h-14 items-start justify-between">
            <h3 className="line-clamp-2 text-lg font-semibold text-gray-800 dark:text-gray-400">{product.productTitle}</h3>
            <Badge variant="secondary">{product.category}</Badge>
          </div>
          <p className="mb-2 line-clamp-3 text-sm text-gray-600 dark:text-gray-500">{product.description}</p>
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold text-gray-800 dark:text-gray-400">${product.price.toFixed(2)}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4">
        <Badge variant="outline">{product.tag}</Badge>
        <Button variant="outline" disabled={product.status === "Out_of_stock"}>
          {product.status === "Out_of_stock" ? "Out of Stock" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  );
}

{
  /* <div
className={cn("size-3 rounded-full", {
  "bg-gray-200 text-gray-700": product.status === "Regular",
  "bg-green-100 text-green-800": product.status === "New",
  "bg-yellow-100 text-yellow-800": product.status === "Popular",
  "bg-red-100 text-red-800": product.status === "Out_of_stock",
})}
title={product.status.replace("_", " ")}
/> */
}
