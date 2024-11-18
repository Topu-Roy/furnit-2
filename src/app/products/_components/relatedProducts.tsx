import { Product } from "@/components/product/productCard";
import type { Product as ProductType } from "@prisma/client";
import type { Session } from "next-auth";

type Props = {
  relatedProducts: ProductType[];
  session: Session | null;
};

export default function RelatedProducts(props: Props) {
  return (
    <section className="bg-white px-3 py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="xl:mt-8">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">People also bought</h3>

        {/* //* This is for mobile screens */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:hidden">
          {props.relatedProducts.slice(0, 4).map(product => (
            <div key={product.id}>
              <Product product={product} session={props.session} />
            </div>
          ))}
        </div>

        {/* //* This is for tablet screens */}
        <div className="mt-6 hidden grid-cols-3 gap-4 sm:mt-8 lg:grid xl:hidden">
          {props.relatedProducts.slice(0, 6).map(product => (
            <div key={product.id}>
              <Product product={product} session={props.session} />
            </div>
          ))}
        </div>

        {/* //* This is for wide screens */}
        <div className="mt-6 hidden grid-cols-4 gap-4 sm:mt-8 xl:grid">
          {props.relatedProducts.slice(0, 8).map(product => (
            <div key={product.id}>
              <Product product={product} session={props.session} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
