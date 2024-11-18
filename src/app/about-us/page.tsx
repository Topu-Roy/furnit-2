import Testimonials from "@/components/about-us/testimonials";
import Team from "@/components/about-us/renderTeam";
import { AboutHero } from "@/components/about-us/hero";
import BrandsWorkedWith from "@/components/home/brandsWorkedWith";
import { teamMembers } from "@/constants/teamMembersArray";
import SecondCTA from "@/components/home/secondCTA";
import { testimonialsArray } from "@/constants/testimonialsArray";
import { Suspense } from "react";

export default function AboutUsPage() {
  return (
    <>
      <AboutHero />
      <BrandsWorkedWith />
      <Team teamMembers={teamMembers} className="bg-stone-100" />
      <SecondCTA />
      <Suspense>
        <Testimonials testimonials={testimonialsArray} />
      </Suspense>
    </>
  );
}
