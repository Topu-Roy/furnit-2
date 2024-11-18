"use client";

import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import AddButton from "./addButton";
import Link from "next/link";
import { GripHorizontal } from "lucide-react";
import type { Session } from "next-auth";

type Props = {
  productId: string;
  session: Session | null;
};

export default function MobilePopover({ productId, session }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          className={cn("bg-secondary flex aspect-square items-center justify-center rounded-full p-0.5", {
            "bg-primary": open,
          })}
        >
          <GripHorizontal
            className={cn("text-primary hover:text-secondary", {
              "text-secondary": open,
            })}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[15rem] -translate-x-10">
        <div className="flex w-full flex-col items-center justify-center gap-2">
          <div className="w-full">
            <Link href={`/shop/${productId}`}>
              <Button size={"lg"} variant={"outline"} className="w-full">
                View product
              </Button>
            </Link>
          </div>
          <div className="w-full">
            <Link href={`#`}>
              <Button size={"lg"} variant={"outline"} className="w-full">
                Add favorite
              </Button>
            </Link>
          </div>
          <AddButton session={session} className="w-full" productId={productId} />
        </div>
      </PopoverContent>
    </Popover>
  );
}
