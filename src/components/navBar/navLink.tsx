"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

type NavLinkProps = {
  href: string;
  className?: string;
  name: string;
};

export function NavLink({ href, className, name }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <Button
        variant={"ghost"}
        className={cn("text-black transition-colors hover:text-primary dark:text-white", className, {
          "font-semibold text-primary dark:text-primary": isActive,
        })}
      >
        {name}
      </Button>
    </Link>
  );
}
