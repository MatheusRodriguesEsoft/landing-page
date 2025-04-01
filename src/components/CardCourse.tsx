import { Course } from "@/data/data";
import Image from "next/image";

import Timer from "@/../public/icons/timer.svg";

interface CardCourseProps {
  course: Course;
}

export const CardCourse = ({ course }: CardCourseProps) => {
  return (
    <div className="w-full p-4 flex flex-col rounded-[16px] shadow-md bg-white dark:bg-primary-base sm:w-full lg:w-[354px] shadow">
      <Image
        className="w-full h-[200px] object-cover rounded-[16px] lg:w-[322.5px]"
        src={course.image}
        alt={course.title}
        width={500}
        height={500}
      />
      <div className="flex flex-col mt-4">
        <span className="text-lg font-semibold dark:text-white">{course.title}</span>
        <span className="text-sm text-descrition-gray dark:text-white">{course.author}</span>
        <span className="text-sm flex items-center mt-2">
          <Image
            src={Timer}
            alt="timer"
            width={18}
            height={18}
            className="mr-2"
          />
          {course.duration}
        </span>
      </div>
      <div className="mt-4">
        <span className="text-sm text-descrition-gray">{course.discount}</span>
        <button className="w-full mt-2 bg-pure-green font-semibold hover:bg-pure-green-hover text-white py-2 rounded-lg cursor-pointer">
          {course.price}
        </button>
      </div>
    </div>
  );
};
