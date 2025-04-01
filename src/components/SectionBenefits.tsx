'use client'
import { benefits } from "@/data/data";
import { CardBenefit } from "./CardBenefit";
import { useContext } from "react";
import { ActionsContext } from "@/context/ActionsContext";

export const SectionBenefits = () => {
  const { sectionRefs } = useContext(ActionsContext);
  return (
    <section   id="benefits" ref={sectionRefs[3]} className="w-full max-w-[1730px] flex flex-col items-center px-4">
      {benefits.map((benefit, idx) => (
        <CardBenefit key={idx} benefit={benefit} />
      ))}
    </section>
  );
};
