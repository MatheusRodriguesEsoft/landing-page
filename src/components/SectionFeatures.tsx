"use client";
import { features } from "@/data/data";
import { CardFeature } from "./CardFeature";
import { useContext, useRef } from "react";
import { ActionsContext } from "@/context/ActionsContext";

export const SectionFeatures = () => {
  const { sectionRefs, scrollY } = useContext(ActionsContext);
  const items = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRefs[1]}
      id="features"
      className="w-full h-auto md:h-[800px] px-4 py-12 flex flex-wrap justify-center gap-6 md:px-[80px] lg:max-w-[1440px]"
    >
      <div
        className="w-full flex items-center flex-col gap-4 lg:flex-row"
        ref={items}
      >
        {features.map((feature, idx) => {
          const isVisible = scrollY > 400;
          const delay = `${idx * 0.3}s`;

          return (
            <div
              key={idx}
              className={`${
                isVisible ? "animate__animated animate__fadeInUp" : "hidden"
              }`}
              style={{
                animationDelay: delay,
                animationFillMode: "both",
              }}
            >
              <CardFeature feature={feature} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
