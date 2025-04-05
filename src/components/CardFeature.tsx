import { Feature } from "@/data/data";
import Image from "next/image";

interface CardFeatureProps {
  feature: Feature;
}

export const CardFeature = ({ feature}: CardFeatureProps) => {
  return (
    <div className="card-feature w-full h-[166px] bg-black dark:bg-elevated rounded-[10px] flex items-center px-[32px] py-[48px] md:p-8 lg:p-10">
      <div className="p-2">
        <Image
          src={feature.icon as string}
          alt={feature.title}
          width={28}
          height={28}
        />
      </div>
      <div className="text-white flex flex-col w-full">
        <span className="text-lg md:text-xl lg:text-2xl font-semibold">
          {feature.title}
        </span>
        <span className="text-sm md:text-base lg:text-lg">
          {feature.description}
        </span>
      </div>
    </div>
  );
};
