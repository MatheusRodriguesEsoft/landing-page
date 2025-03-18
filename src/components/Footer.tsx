import Image from "next/image";
import Logo from "@/../public/icons/logo.svg";
import { socialMedias } from "@/data/data";
import { CardSocialMedia } from "./CardSocialMedia";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer
      className={
        "w-full max-w[1730px] h-[410px] flex justify-between px-[150px] py-[100px]"
      }
    >
      <div className={"w-[372px] h-[155.5px] flex flex-col justify-between"}>
        <div>
          <Image src={Logo} alt={"logo"} width={100} height={100}/>
        </div>
        <div className={"w-[372px] h-[52px] flex items-center justify-between"}>
          {socialMedias.map((socialMedia, idx) => (
            <CardSocialMedia key={idx} socialMedia={socialMedia} />
          ))}
        </div>
      </div>
      <div className={"w-[733px] h-[210px] flex justify-between"}>
        <div className={"w-[138px] h-[156px] flex flex-col "}>
          <Link className={"text-[28px] font-semibold mb-5"} href={"#products"}>
            Products
          </Link>
          <Link className={"text-[20px] mb-3"} href={"#courses"}>
            Courses
          </Link>
          <Link className={"text-[20px]"} href={"#development"}>
            Development
          </Link>
        </div>
        <div className={"w-[134px] h-[156px] flex flex-col "}>
          <Link
            className={"text-[28px] font-semibold mb-5"}
            href={"#resources"}
          >
            Resources
          </Link>
          <Link className={"text-[20px]  mb-3"} href={"#careers"}>
            Careers
          </Link>
          <Link className={"text-[20px]"} href={"#blog"}>
            Blog
          </Link>
        </div>
        <div className={"w-[221px] h-[210px] flex flex-col"}>
          <Link
            className={"text-[28px] font-semibold mb-5"}
            href={"#resources"}
          >
            QA
          </Link>
          <Link className={"text-[20px]  mb-3"} href={"#terms"}>
            Terms and conditions
          </Link>
          <Link className={"text-[20px]"} href={"#policy"}>
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
};
