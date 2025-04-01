'use client'
import { features } from "@/data/data";
import { CardFeature } from "./CardFeature";
import { useContext } from "react";
import { ActionsContext } from "@/context/ActionsContext";

export const SectionFeatures = () => {
  const { sectionRefs } = useContext(ActionsContext);
  return (
    <section ref={sectionRefs[1]}  id="features" className="w-full h-auto md:h-[800px] px-4 py-12 flex flex-wrap justify-center gap-6 md:px-[80px] lg:max-w-[1440px]">
      <div className="w-full flex items-center flex-col gap-4 lg:flex-row">
        {features.map((feature, idx) => (
          <CardFeature key={idx} feature={feature} />
        ))}
      </div>
    </section>
  );
};
