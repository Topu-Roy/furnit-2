import Image from "next/image";
import Rating from "../_components/rating";
import Review from "../_components/review";
import { cn } from "@/lib/utils";
import ReviewByRateItem from "../_components/reviewByRateItem";
import ProductAddToCart from "../_components/productAddToCart";
import RelatedProducts from "../_components/relatedProducts";
import { getCachedProducts } from "@/app/page";
import { unstable_cache as cache } from "next/cache";
import { db } from "@/server/db";
import Chip from "@/components/shared/chip";
import { auth } from "@/server/auth";
import CreateReview from "../_components/createReview";
import { Suspense } from "react";

export async function generateStaticParams() {
  const products = await getCachedProducts();

  return products.map(item => ({
    id: item.id,
  }));
}

export default async function ProductDetails(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const session = await auth();

  const getProductWithReviews = cache(
    async ({ id }: { id: string }) =>
      db.product.findFirst({
        where: {
          id,
        },
        include: {
          review: true,
        },
      }),
    ["product-with-reviews", params.id],
    { revalidate: 60 * 60 }
  );

  const product = await getProductWithReviews({ id: params.id });

  const relatedProducts = await db.product.findMany({
    where: {
      category: product?.category,
      id: {
        not: product?.id,
      },
    },
  });

  if (!product || product === null) {
    return <p className="mx-auto mt-[6rem] w-full max-w-7xl text-center">Product Not Found</p>;
  }

  const oneStarReviews = product.review.filter(item => item.rating === 1).length;
  const twoStarReviews = product.review.filter(item => item.rating === 2).length;
  const threeStarReviews = product.review.filter(item => item.rating === 3).length;
  const fourStarReviews = product.review.filter(item => item.rating === 4).length;
  const fiveStarReviews = product.review.filter(item => item.rating === 5).length;

  const totalReviews = oneStarReviews + twoStarReviews + threeStarReviews + fourStarReviews + fiveStarReviews;
  const totalStars = oneStarReviews * 1 + twoStarReviews * 2 + threeStarReviews * 3 + fourStarReviews * 4 + fiveStarReviews * 5;
  const averageRating_Float = totalReviews > 0 ? (totalStars / totalReviews).toFixed(1) : 0;
  const averageRating_round = Math.round(parseInt(averageRating_Float + ""));

  const formatDate = (dateStr: Date) => {
    const date = new Date(dateStr);
    const withComma = date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    return withComma.replace(",", " ");
  };

  return (
    <>
      <section className="mt-[4rem] bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="mx-auto max-w-md shrink-0 overflow-hidden rounded-md lg:max-w-lg">
              <Image height={1000} width={1000} className="w-full" src={product.image ?? ""} alt={product.productTitle} />
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">{product.productTitle}</h1>
              <div className="mt-4 sm:flex sm:items-center sm:gap-4">
                <p className="text-2xl font-extrabold text-gray-900 dark:text-white sm:text-3xl">${product.price}</p>

                <div className="mt-2 flex items-center gap-2 sm:mt-0">
                  <Rating rate={Math.floor(averageRating_round)} className={"-mx-4 scale-75"} readonly={true} />
                  <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">({averageRating_Float})</p>
                  <a href="#" className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white">
                    ({totalReviews}) Reviews
                  </a>
                </div>
              </div>

              <ProductAddToCart productId={product.id} session={session} />

              <hr className="my-6 border-gray-200 dark:border-gray-800 md:my-8" />
              <div className="flex items-center justify-start gap-2 py-2">
                {product.color ? <Chip text={product.color} /> : null}
                {product.category ? <Chip text={product.category} /> : null}
                {product.status ? <Chip text={product.status} /> : null}
                {product.tag ? <Chip text={product.tag} /> : null}
              </div>
              <p className="my-6 text-gray-500 dark:text-gray-400">{product.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Reviews</h2>

            <div className="mt-2 flex items-center gap-2 sm:mt-0">
              <Rating rate={4} readonly={true} className="-mr-4 scale-75" />
              <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">({averageRating_Float})</p>
              <a href="#" className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white">
                {" "}
                {totalReviews} Reviews{" "}
              </a>
            </div>
          </div>

          <div className="my-6 gap-8 sm:flex sm:items-start md:my-8">
            <div className="shrink-0 space-y-4">
              <p className="text-2xl font-semibold leading-none text-gray-900 dark:text-white">{averageRating_Float} out of 5</p>
              <Suspense>
                <CreateReview session={session} productId={product.id} productTitle={product.productTitle} />
              </Suspense>
            </div>

            <div className="mt-6 min-w-0 flex-1 space-y-3 sm:mt-0">
              <ReviewByRateItem rate={5} totalReviews={totalReviews} count={fiveStarReviews} />
              <ReviewByRateItem rate={4} totalReviews={totalReviews} count={fourStarReviews} />
              <ReviewByRateItem rate={3} totalReviews={totalReviews} count={threeStarReviews} />
              <ReviewByRateItem rate={2} totalReviews={totalReviews} count={twoStarReviews} />
              <ReviewByRateItem rate={1} totalReviews={totalReviews} count={oneStarReviews} />
            </div>
          </div>

          {product.review.length > 0 ? (
            <>
              {product.review.map((review, index) => (
                <div
                  className={cn("border-t-2 border-black/10", index === product.review.length - 1 ? "border-b-2 border-black/10" : "")}
                  key={review.id}
                >
                  <Review date={formatDate(review.date)} name={review.name} rating={review.rating} review={review.text} />
                </div>
              ))}
            </>
          ) : (
            <div className="border-b-2 border-t-2 border-black/10 py-8 text-center">
              <p className="py-8 font-medium">No reviews</p>
            </div>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-7xl">
        <RelatedProducts relatedProducts={relatedProducts} session={session} />
      </div>
    </>
  );
}
