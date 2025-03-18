import Image from "next/image";
import ArrowRight from "@/../public/icons/arrow-right.svg";

export const SectionHero = () => {
  return (
    <section
      className={
        "w-full max-w-[1726px] h-[800px] flex items-center justify-center"
      }
    >
      <div
        className={
          "w-[800px] h-[522px] flex items-center justify-between  flex-col"
        }
      >
        <span
          className={`w-full flex text-center justify-center font-bold text-[80px] leading-22`}
        >
          Where the joy of learn meets the power of community
        </span>
        <span
          className={
            "w-full flex text-center text-[24px] text-texte-descrition-gray"
          }
        >
          Dive deep in immersive, interactive small groups. Expand horizons,
          engage in discussions, and elevate your learning journey with us.
        </span>
        <button
          className={
            "w-[184px] h-[52px] bg-primary-base text-white rounded-[8px] py-[14px] px-[32px]"
          }
        >
          Start your travel
        </button>
        <button className="w-[130px] h-[52px] flex items-center justify-evenly  ">
          <span>Watch video</span>
          <Image src={ArrowRight} alt={"Arrown-Right"} width={26} height={26} />
        </button>
      </div>
    </section>
  );
};
