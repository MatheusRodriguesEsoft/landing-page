import { Benefit } from "@/data/data";
import Image from "next/image";

interface CardBenefitProps {
  benefit: Benefit;
}

export const CardBenefit = ({ benefit }: CardBenefitProps) => {
  return (
    <div className="w-full max-w-[1485px] flex flex-col items-center py-[128px] lg:flex-row lg:items-center lg:justify-center lg:px-[120px]">
      <div className="w-[400px] flex items-center justify-center lg:mr-5">
        <Image
          src={benefit.image}
          alt={benefit.title}
          width={400}
          height={400}
          className="w-full max-w-[400px]"
        />
      </div>

      <div className="w-full max-w-[671px] text-center lg:text-left flex flex-col justify-center">
        <span className="text-3xl sm:text-4xl font-semibold dark:text-white">
          {benefit.title}
        </span>
        <p className="text-xl sm:text-2xl text-descrition-gray">
          {benefit.description}
        </p>
      </div>
    </div>
  );
};
