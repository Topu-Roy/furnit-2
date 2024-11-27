"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { Session } from "next-auth";
import { NormalNavBar } from "./normalNavBar";

type Props = {
  session: Session | null;
};

export function ScrollActivatedNavBar({ session }: Props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 115) {
      setIsVisible(true);
    } else if (scrollPosition < 80) {
      setIsVisible(false);
    }
  }, [scrollPosition]);

  return (
    <NormalNavBar
      session={session}
      className={cn("fixed left-0 right-0 top-0 z-50 h-[10vh] transition-transform duration-300", {
        "translate-y-0": isVisible,
        "translate-y-[-100%]": !isVisible,
      })}
    />
  );
}
