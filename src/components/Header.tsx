import Image from "next/image";
import { Menu } from "./Menu";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full h-[110.5px] flex items-center justify-center  bg-primary-base dark:bg-elevated dark:text-white fixed z-1000">
      <div className="w-full max-w-[1440px] flex items-center justify-between px-[20px] py-[40px] md:px-[80px] lg:px-[120px]">
        <Link href={'https://landing-page-opal-one-94.vercel.app/'} className="flex items-center h-12">
          <Image
            className="w-48 h-auto hidden md:block"
            src={"/images/logo.png"}
            alt={"Logo"}
            width={500}
            height={500}
          />
          <Image
            className="w-18 h-auto md:hidden"
            src={"/images/logo-mobile.png"}
            alt={"Logo Mobile"}
            width={500}
            height={500}
          />
        </Link>
        <div className="lg:w-[592px] h-full flex md:w-[480px] items-center justify-end ">
          <Menu />
        </div>
      </div>
    </header>
  );
};
