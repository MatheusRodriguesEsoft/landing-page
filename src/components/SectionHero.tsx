'use client'
import Image from "next/image";
import ArrowRight from "@/../public/icons/arrow-right.svg";
import { useContext } from "react";
import { ActionsContext } from "@/context/ActionsContext";

export const SectionHero = () => {
  const { sectionRefs } = useContext(ActionsContext);
  return (
    <section ref={sectionRefs[0]} id="home" className="w-full h-[611px] flex items-center justify-center px-4 lg:h-[800px] lg:px-[120px]  bg-white dark:bg-dark-color animate__animated animate__fadeIn">
      <div className="w-[401px] h-[422px] flex flex-col items-center justify-center gap-10 text-center md:w-[622px] lg:w-[787px] lg:h-[522px]">
        <span className="text-[24px]  font-bold text-gray-900 dark:text-white md:text-[32px] lg:text-[60px] ">
          Where the joy of learn meets the power of community
        </span>
        <p className="text-[16px] text-descrition-gray dark:text-text-descripton md:text-[20px] ld:text-[26px]">
          Dive deep in immersive, interactive small groups. Expand horizons,
          engage in discussions, and elevate your learning journey with us.
        </p>
        <div className="flex flex-col items-center gap-4">
          <button className="w-[184px] h-[52px] bg-pure-green hover:bg-pure-green-hover text-white font-semibold rounded-lg cursor-pointer">
            Start your travel
          </button>
          <button className="flex items-center gap-2 text-pure-green font-semibold cursor-pointer mt-2">
            Watch video
            <Image
              src={ArrowRight}
              alt={"Arrown-Right"}
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>
    </section>
  );
};
