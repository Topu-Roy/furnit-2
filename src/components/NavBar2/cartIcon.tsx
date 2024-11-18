"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import { getCartItemsCount } from "@/actions/cartAction";
import { type Role } from "@prisma/client";
import Link from "next/link";

type Props = {
  userInfo: {
    id: string;
    authId: string;
    role: Role;
    email: string | null;
    imageUrl: string | null;
    firstName: string | null;
    lastName: string | null;
  } | null;
};

export default function CartIcon({ userInfo }: Props) {
  const [willShow, setWillShow] = useState(false);
  const [count, setCount] = useState(0);

  async function checkCart() {
    if (!userInfo) return;

    const count = await getCartItemsCount({ userId: userInfo.id });

    setCount(count);
  }

  useEffect(() => {
    void checkCart();
  }, [userInfo]);

  useEffect(() => {
    const timer = setInterval(() => {
      void checkCart();
    }, 6000);

    return () => clearInterval(timer);
  }, [userInfo]);

  useEffect(() => {
    if (count > 0) {
      setWillShow(true);
    } else {
      setWillShow(false);
    }
  }, [count]);

  return (
    <Link href={"/cart"}>
      <Button variant={"ghost"} className="relative p-1">
        <ShoppingCart />
        <div
          className={cn(
            "absolute -right-[5%] top-[20%] z-[51] hidden h-2 w-2 rounded-full bg-destructive",
            willShow ? "block" : "",
          )}
        />
      </Button>
    </Link>
  );
}
