import { features } from "@/data/data";
import { CardFeature } from "./CardFeature";

export const SectionFeatures = () => {
  return (
    <section
      className={
        "w-full max-w-[1728px] h-[456px] px-[120px] py-[128px] flex items-center justify-between"
      }
    >
      {features.map((feature, idx) => (
        <CardFeature key={idx} feature={feature} />
      ))}
    </section>
  );
};
