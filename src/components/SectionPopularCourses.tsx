'use client'
import { courses } from "@/data/data";
import { CardCourse } from "./CardCourse";
import { useContext } from "react";
import { ActionsContext } from "@/context/ActionsContext";

export const SectionPopularCourses = () => {
  const { sectionRefs } = useContext(ActionsContext);
  return (
    <section ref={sectionRefs[2]} id="courses" className="w-full h-auto md:h-[800px] px-[15px] py-12 flex flex-col items-center justify-center md:px-16 lg:max-w-[1440px]">
      <div className="w-full max-w-4xl text-center mb-8">
        <p className="text-2xl md:text-3xl font-semibold dark:text-white">Popular Courses</p>
      </div>
      <div className="w-full flex items-center flex-col gap-4 sm:grid sm:grid-cols-2 sm:place-items-center lg:flex lg:flex-row">
        {courses.map((course, idx) => (
          <CardCourse key={idx} course={course} />
        ))}
      </div>
    </section>
  );
};
