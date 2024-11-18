"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../../../components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Sling as Hamburger } from 'hamburger-react'
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { getUserDetailsByAuthId } from "@/actions/userAction";
import Link from "next/link";

export default function MobileMenu() {
  const [isMounted, setIsMounted] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const { getUser, isLoading } = useKindeBrowserClient();
  const user = getUser();

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isLoading) return;

    async function getUserData() {
      if (!user) return;
      const userInfo = await getUserDetailsByAuthId({ authId: user?.id });

      if (userInfo) {
        userInfo.role === 'ADMIN' && setIsAdmin(true);
      }
    }

    void getUserData();
  }, [isLoading]);

  return (
    <>
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <Button
            onClick={() => setSheetOpen(!sheetOpen)}
            variant={'ghost'}
            className="p-0 md:hidden"
          >
            <Hamburger toggled={sheetOpen} toggle={setSheetOpen} color="rgb(0 0 0 / 0.7)" />
          </Button>
        </SheetTrigger>
        <SheetContent side={'left'}>
          <Link
            href="/"
            className="flex w-[80%] items-center justify-center border-b border-stone-300/20"
          >
            <Button onClick={() => setSheetOpen(!sheetOpen)} variant={"ghost"}>
              Home
            </Button>
          </Link>

          <Link
            href="/shop"
            className="flex w-[80%] items-center justify-center border-b border-stone-300/20"
          >
            <Button onClick={() => setSheetOpen(!sheetOpen)} variant={"ghost"}>
              Shop
            </Button>
          </Link>

          <Link
            href="/blog"
            className="flex w-[80%] items-center justify-center border-b border-stone-300/20"
          >
            <Button onClick={() => setSheetOpen(!sheetOpen)} variant={"ghost"}>
              Blog
            </Button>
          </Link>

          <Link
            href="/aboutUs"
            className="flex w-[80%] items-center justify-center border-b border-stone-300/20"
          >
            <Button onClick={() => setSheetOpen(!sheetOpen)} variant={"ghost"}>
              About Us
            </Button>
          </Link>

          <Link
            href="/team"
            className="flex w-[80%] items-center justify-center border-b border-stone-300/20"
          >
            <Button onClick={() => setSheetOpen(!sheetOpen)} variant={"ghost"}>
              Team
            </Button>
          </Link>

          {isMounted && isAdmin ? (
            <Link
              href="/dashboard"
              className="flex w-[80%] items-center justify-center border-b border-stone-300/20"
            >
              <Button onClick={() => setSheetOpen(!sheetOpen)} variant={"ghost"}>
                Dashboard
              </Button>
            </Link>
          ) : null}

        </SheetContent>
      </Sheet>
    </>
  );
}
