"use client";

import { useToast } from "@/hooks/use-toast";
import type { Session } from "next-auth";
import { useAddToCartMutation } from "@/query/query";
import { Button } from "../ui/button";
import type { ReactNode } from "react";
import { Loader2 } from "lucide-react";

type Props = {
  productId: string;
  className?: string;
  session: Session | null;
  children: ReactNode;
};

export default function ButtonWithIcon(props: Props) {
  const { mutate, isPending } = useAddToCartMutation();
  const { toast } = useToast();

  async function handleAddToCart() {
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
    <Button
      onClick={() => handleAddToCart()}
      className="flex items-center justify-center rounded-full bg-white p-2 text-gray-700 hover:text-white"
    >
      {isPending ? <Loader2 className="size-8 animate-spin" /> : props.children}
    </Button>
  );
}
