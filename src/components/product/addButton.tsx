"use client";

import { cn } from "@/lib/utils";
import type { Session } from "next-auth";
import { useToast } from "@/hooks/use-toast";
import { Button } from "../ui/button";
import { useAddToCartMutation } from "@/query/query";

type Props = {
  productId: string;
  className?: string;
  session: Session | null;
};

export default function AddButton(props: Props) {
  const { mutate, isPending } = useAddToCartMutation();
  const { toast } = useToast();

  function handleAddToCart() {
    if (!props.session?.user?.id) {
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
    <Button onClick={() => handleAddToCart()} size="lg" className={cn("rounded-md font-bold", props.className)}>
      {isPending ? "Adding to cart" : "Add to cart"}
    </Button>
  );
}
