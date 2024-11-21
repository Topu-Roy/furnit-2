import BrandsWorkedWith from "@/components/home/brandsWorkedWith";
import CategoryCTA from "@/components/home/categoryCTA";
import HeroSection from "@/components/home/heroSection";
import HomeProductCarousel from "@/components/home/homeProductCarousel";
import NewArrivals from "@/components/home/newArrivals";
import OurBenefits from "@/components/home/ourBenefits";
import ReadBlogSection from "@/components/home/readBlogSection";
import SecondCTA from "@/components/home/secondCTA";
import { auth } from "@/server/auth";
import NavBar from "@/components/navBar/navBar";
import { getAllProducts } from "@/helpers/fetchProductHelper";

// export const getCachedProducts = cache(async () => db.product.findMany(), ["all-products"], { revalidate: 60 * 60 * 24 });

export default async function Home() {
  // const productsPromise = getCachedProducts();
  const productsPromise = getAllProducts();
  const sessionPromise = auth();

  const products = await productsPromise;
  const session = await sessionPromise;

  return (
    <>
      <NavBar session={session} />
      <HeroSection />
      <BrandsWorkedWith />
      <CategoryCTA />
      <HomeProductCarousel session={session} products={products} />
      <SecondCTA />
      <NewArrivals products={products} session={session} />
      <OurBenefits />
      <ReadBlogSection />
    </>
  );
}
