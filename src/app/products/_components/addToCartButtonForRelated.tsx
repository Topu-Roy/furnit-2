"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useAddToCartMutation } from "@/query/query";
import type { Session } from "next-auth";
import { toast } from "@/hooks/use-toast";

type Props = {
  productId: string;
  session: Session | null;
};

export default function AddToCartButtonForRelated(props: Props) {
  const { mutate, isPending } = useAddToCartMutation();
  const router = useRouter();

  async function handleAddToCart() {
    if (!props.session || !props.session.user) {
      return toast({
        variant: "destructive",
        title: "Please login first",
        description: "Oh no, you are not logged in...!",
      });
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
    <Button
      onClick={() => handleAddToCart()}
      className={cn(
        "flex w-full flex-1 items-center justify-center rounded-lg py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4",
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
  );
}
