import Image from "next/image";

export const Menu = () => {
  return (
    <div className={"w-full h-full flex items-center justify-between"}>
      <ul className={"w-full flex items-center justify-between"}>
        <li>Home</li>
        <li>About us</li>
        <li>Courses</li>
        <li>FAQ</li>
        <li>
          <button className={"bg-primary-base w-[130px] h-[44px] rounded-[8px] text-white"}>Contac Us</button>
        </li>
        <li>
          <button>
            <Image src={"icons/sun.svg"} alt={"Sun"} width={30} height={30} />
          </button>
        </li>
      </ul>
    </div>
  );
};
