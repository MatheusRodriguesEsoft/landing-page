import { Benefit } from "@/data/data";
import Image from "next/image";

interface CardBenefitProps {
  benefit: Benefit;
}

export const CardBenefit = ({ benefit }: CardBenefitProps) => {
  return (
    <div className={"w-[1485px] h-[500px] flex items-center justify-center"}>
      <div className={"w-[500px] h-[500px] mr-[192px] flex items-center justify-center"}>
        <Image className={"w-[400px]"}
          src={benefit.image}
          alt={benefit.title}
          width={500}
          height={500}
        />
      </div>

      <div className={"w-[671px] h-[263px] flex flex-col justify-center"}>
        <span className={"text-5xl font-semibold mb-4"}>{benefit.title}</span>
        <p className={"text-3xl text-descrition-gray"}>{benefit.description}</p>
      </div>
    </div>
  );
};
