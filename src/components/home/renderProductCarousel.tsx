"use client";

import { useEffect, useState } from "react";
import { type Product } from "@prisma/client";
import WideScreenProductCarousel from "./carousels/wideScreenProductCarousel";
import DesktopProductCarousel from "./carousels/desktopProductCarousel";
import TabletProductCarousel from "./carousels/tabletProductCarousel";
import MobileProductCarousel from "./carousels/mobileProductCarousel";
import useDeviceWidth from "@/hooks/windowDimensions";
import type { Session } from "next-auth";

type Props = {
  products: Product[];
  session: Session | null;
};

export default function RenderProductCarousel({ products, session }: Props) {
  const [deviceWidth, setDeviceWidth] = useState<number | null>(null);
  const width = useDeviceWidth();

  useEffect(() => {
    setDeviceWidth(width);
  }, [width]);

  if (deviceWidth === null) {
    return null;
  }

  if (deviceWidth >= 1280) {
    return <WideScreenProductCarousel session={session} products={products} />;
  }

  if (deviceWidth >= 1024) {
    return <DesktopProductCarousel session={session} products={products} />;
  }

  if (deviceWidth >= 768) {
    return <TabletProductCarousel session={session} products={products} />;
  }

  return <MobileProductCarousel session={session} products={products} />;
}
