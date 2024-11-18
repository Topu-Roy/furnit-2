"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Session } from "next-auth";
import { toast } from "@/hooks/use-toast";
import { useAddToCartMutation } from "@/query/query";

type Props = {
  productId: string;
  session: Session | null;
};

export default function ProductAddToCart(props: Props) {
  const { mutate, isPending } = useAddToCartMutation();
  const router = useRouter();

  async function handleAddToCart() {
    if (!props.session || !props.session.user) {
      router.push("/auth/sign-in");
      return;
    }

    mutate(
      {
        id: props.session.user.id,
        productId: props.productId,
      },
      {
        onSuccess(data) {
          if (data.action === "alreadyInCart") {
            toast({
              title: "Already in cart",
              description: "Product already exist in the cart",
            });
          }
          if (data.action === "created") {
            toast({
              title: "Added to cart",
              description: "Product successfully added to cart",
            });

            router.refresh();
          }
          if (data.action === "error") {
            toast({
              variant: "destructive",
              title: "Something went wrong",
              description: "Are you not logged in?",
            });
          }
        },
      }
    );
  }

  return (
    <>
      <div className="mt-6 sm:mt-8 sm:flex sm:items-center sm:gap-4">
        <Link
          href="/cart"
          className="flex items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:flex-1"
        >
          <svg
            className="-ms-2 me-2 h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
            />
          </svg>
          View cart
        </Link>

        <Button
          onClick={() => handleAddToCart()}
          className={cn(
            "mt-4 flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4 sm:mt-0 sm:flex-1",
            isPending ? "opacity-90" : ""
          )}
        >
          <svg
            className="-ms-2 me-2 h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
            />
          </svg>
          Add to cart
        </Button>
      </div>
    </>
  );
}
