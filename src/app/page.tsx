import { SectionBenefits } from "@/components/SectionBenefits";
import { SectionFeatures } from "@/components/SectionFeatures";
import { SectionHero } from "@/components/SectionHero";
import { SectionPopularCourses } from "@/components/SectionPopularCourses";
import { SectionTestimony } from "@/components/SectionTestimony";

export default function Home() {
  return (
    <main className={"w-full flex flex-col items-center"}>
      <SectionHero />
      <SectionFeatures/>
      <SectionPopularCourses/>
      <SectionTestimony/>
      <SectionBenefits/>
    </main>
  );
}
