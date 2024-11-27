import { BrandsWorkedWith } from "@/components/home/brandsWorkedWith";
import CategoryCTA from "@/components/home/categoryCTA";
import HeroSection from "@/components/home/heroSection";
import HomeProductCarousel from "@/components/home/homeProductCarousel";
import NewArrivals from "@/components/home/newArrivals";
import OurBenefits from "@/components/home/ourBenefits";
import ReadBlogSection from "@/components/home/readBlogSection";
import SecondCTA from "@/components/home/secondCTA";
import { auth } from "@/server/auth";
import { getAllProducts } from "@/helpers/fetchProductHelper";
import Footer from "@/components/Footer/footer";
import { NavBar } from "@/components/navBar/navBar";
import { BentoGridShowcase } from "@/components/home/bento";
import { CurveSVG } from "@/components/shared/curved-svg";
import { CurveSVGModeSense, CurveSVGForFooter } from "@/components/shared/curved-svg-mod";

export default async function Home() {
  const productsPromise = getAllProducts();
  const sessionPromise = auth();

  const products = await productsPromise;
  const session = await sessionPromise;

  return (
    <>
      <NavBar session={session} />
      <HeroSection />
      <CurveSVG fillColor="#111827" topColor="#fdba74" />
      <BrandsWorkedWith />
      <BentoGridShowcase />
      <CurveSVGModeSense type="OR_ST" />
      <CategoryCTA />
      <CurveSVGModeSense type="WH_ZI" />
      <HomeProductCarousel session={session} products={products} />
      <CurveSVGModeSense type="OR_ST" />
      <SecondCTA />
      <CurveSVGModeSense type="WH_ZI" />
      <OurBenefits />
      <CurveSVGModeSense type="OR_ST" />
      <NewArrivals products={products} session={session} />
      <CurveSVGModeSense type="WH_ZI" />
      <ReadBlogSection />
      <CurveSVGForFooter />
      <Footer />
    </>
  );
}
