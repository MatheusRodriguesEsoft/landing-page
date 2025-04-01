import Image from "next/image";
import { socialMedias } from "@/data/data";
import { CardSocialMedia } from "./CardSocialMedia";
import Link from "next/link";

const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Courses", href: "#courses" },
      { name: "Development", href: "#development" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Careers", href: "#careers" },
      { name: "Blog", href: "#blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "QA", href: "#qa" },
      { name: "Terms and conditions", href: "#terms" },
      { name: "Privacy policy", href: "#policy" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="w-full h-[661px] flex items-center justify-center bg-primary-base dark:bg-elevated">
      <div className="w-full max-w-[1440px] flex flex-col justify-center lg:flex-row lg:justify-between lg:items-center lg:h-[410px] px-[20px] py-[40px] md:px-[80px] lg:px-[120px]">
        <div className="md:w-[372px] h-[156px] lg:w-[372px] flex flex-col justify-between">
          <Image className=" w-48 h-auto"  src={"/images/logo.png"} alt="logo" width={500} height={500} />
          <div className="flex gap-4 mt-4">
            {socialMedias.map((socialMedia, idx) => (
              <CardSocialMedia key={idx} socialMedia={socialMedia} />
            ))}
          </div>
        </div>
        <div className="w-full   mt-8 flex flex-col  justify-between gap-4 md:flex-row lg:w-[733px]">
          {footerLinks.map((section, idx) => (
            <div key={idx} className="flex flex-col ">
              <Link className="text-auto font-semibold mb-3 text-white" href="#">
                {section.title}
              </Link>
              {section.links.map((link, linkIdx) => (
                <Link
                  key={linkIdx}
                  className="text-base text-white mb-2"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
