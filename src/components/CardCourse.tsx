import { Course } from "@/data/data";
import Image from "next/image";

import Timer from "@/../public/icons/timer.svg";

interface CardCourseProps {
  course: Course;
}

export const CardCourse = ({ course }: CardCourseProps) => {
  return (
    <div
      className={
        "w-354.5px h-[469px] m-6 p-4 flex justify-between flex-col rounded-[16px] shadow"
      }
    >
      <Image
        className={"w-[322px] h-[200px] mb-2"}
        src={course.image}
        alt={course.title}
        width={500}
        height={500}
      />
      <div className={"h-123px flex flex-col"}>
        <span className={"text-2xl font-semibold mb-2"}>{course.title}</span>
        <span className={"text-[14px] text-descrition-gray"}>
          {course.author}
        </span>
        <span className={"text-[14px] flex my-2"}>
          <Image src={Timer} alt={"timer"} width={18} height={18} />
          {course.duration}
        </span>
      </div>
      <div className={"h-66px"}>
        <span className={"text-[14px] text-descrition-gray"}>
          {course.discount}
        </span>
        <button
          className={
            "bg-primary-base w-[322.5px] h-[44px] my-1 px-[24px] py-[10px] rounded-[8px] text-white"
          }
        >
          {course.price}
        </button>
      </div>
    </div>
  );
};
