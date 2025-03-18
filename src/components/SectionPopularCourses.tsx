import { courses } from "@/data/data";
import { CardCourse } from "./CardCourse";

export const SectionPopularCourses = () => {
  return (
    <section
      className={
        "w-full max-w-[1730px] h-[803px] px-[120px] py-[128px] flex items-center justify-center flex-col"
      }
    >
      <h2 className={" text-[38px] mb-8 font-semibold"}>Popular Courses</h2>
      <div className={" w-[1490px] h-[469px] flex items-center justify-center"}>
        {courses.map((course, idx) => (
          <CardCourse key={idx} course={course} />
        ))}
      </div>
    </section>
  );
};
