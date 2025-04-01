import { SectionBenefits } from "@/components/SectionBenefits";
import { SectionFeatures } from "@/components/SectionFeatures";
import { SectionHero } from "@/components/SectionHero";
import { SectionPopularCourses } from "@/components/SectionPopularCourses";
import { SectionTestimony } from "@/components/SectionTestimony";

export default function Home() {
  return (
    <main className={"bg-white dark:bg-dark-color w-full flex flex-col items-center overflow-x-hidden pt-[110px]"}>
      <SectionHero />
      <SectionFeatures />
      <SectionPopularCourses />
      <SectionTestimony />
      <SectionBenefits/>
    </main>
  );
}
