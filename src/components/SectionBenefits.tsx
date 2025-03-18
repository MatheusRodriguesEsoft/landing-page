import { benefits } from "@/data/data";
import { CardBenefit } from "./CardBenefit";

export const SectionBenefits = () => {
  return (
    <section
      className={
        "w-full max-w-[1730px] h-[2120px] flex flex-col items-center justify-around"
      }
    >
      {benefits.map((benefit, idx) => (
        <CardBenefit key={idx} benefit={benefit} />
      ))}
    </section>
  );
};
