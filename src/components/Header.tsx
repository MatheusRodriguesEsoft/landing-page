import Image from "next/image";
import { Menu } from "./Menu";

import Logo from "@/../public/icons/logo.svg";

export const Header = () => {
  return (
    <header
      className={
        "w-full max-w-[1440px] flex items-center justify-between h-20 px-8 md:px-16 lg:px-[128px] py-6 mx-auto"
      }
    >
      <div className={"w-full flex h-full items-center justify-between"}>
        <div className={"w-6/12"}>
          <Image src={Logo} alt={"Logo"} width={100} height={100} />
        </div>
        <div className={"w-[592px] h-12"}>
          <Menu />
        </div>
      </div>
    </header>
  );
};
