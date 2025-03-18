import { Feature } from "@/data/data";
import Image from "next/image";


interface CardFeatureProps {
  feature: Feature;
}

export const CardFeature = ({ feature }: CardFeatureProps) => {
  return (
    <div
      className={
        "w-[486px] h-[200px] bg-black rounded-[10px] flex items-center px-[32px] py-[48px]"
      }
    >
      <div className={" h-[100%] p-2.5"}>
        <Image src={feature.icon as string} alt={feature.title} width={28} height={28}/>
      </div>
      <div className={"text-white flex justify-center flex-col w-[322px]"}>
        <span className={"text-[32px] font-semibold"}>{feature.title}</span>
        <span className={"text-[18px] w-[322px] h-[56px]"}>{feature.description}</span>
      </div>
    </div>
  );
};
