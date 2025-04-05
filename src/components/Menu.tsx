"use client";
import CloseIcon from "@/../public/icons/close.svg";
import MenuIcon from "@/../public/icons/menu.svg";
import { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { ActionsContext } from "@/context/ActionsContext";
import Link from "next/link";

const menuLinks = [
  { id: 0, href: "#home", label: "Home" },
  { id: 1, href: "#features", label: "Features" },
  { id: 2, href: "#courses", label: "Courses" },
  { id: 3, href: "#benefits", label: "Benefits" },
];

export const Menu = () => {
  const { visibleSectionIndex } = useContext(ActionsContext);
  const [openMenu, setOpenMenu] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const menuRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTimeout(() => setActiveItem(visibleSectionIndex), 600);
  }, [visibleSectionIndex]);

  useEffect(() => {
    setActiveItem(visibleSectionIndex);
    const handleResize = () => {
      setActiveItem(visibleSectionIndex);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [visibleSectionIndex]);

  const setActiveItem = (index: number) => {
    const menuItems = document.querySelectorAll("ul li");
    if (menuItems.length === 0 || !menuItems[index]) return; // Evita erros
  
    const menuItem = menuItems[index];
    const { left, width } = menuItem.getBoundingClientRect();
    const parentLeft = menuItem.parentElement?.getBoundingClientRect().left || 0;
  
    setUnderlineStyle({ left: left - parentLeft, width });
  };
  

  const updateUnderline = (index: number) => {
    setActiveItem(index);
  };

  const onMouseOut = () => {
    setActiveItem(visibleSectionIndex);
  };

  return (
    <nav className="w-full " ref={menuRef}>
      <button
        className="h-[30.5px] md:hidden"
        type="button"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <Image
          src={openMenu ? CloseIcon : MenuIcon}
          alt="menu"
          width={38}
          height={38}
        />
      </button>
      <ul
        className={` bg-primary-base dark:bg-elevated transition-all absolute w-full flex flex-col items-center left-0 max-md:top-[110.5px] 
        ${
          openMenu
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-5 invisible"
        } 
        md:relative md:visible md:opacity-100 md:flex-row md:translate-0 md:w-full md:justify-between md:transition-none`}
      >
        {menuLinks.map(({id, href, label }) => (
          <li
            key={href}
            className="w-full text-white font-semibold px-5 py-3 md:px-0 md:py-0 md:w-auto cursor-pointer"
            onMouseEnter={() => updateUnderline(id)}
            onMouseOut={onMouseOut}
          >
            <Link href={href}> {label}</Link>
          </li>
        ))}
        <li className="w-full px-5 py-3 flex items-center gap-4 md:px-0 md:gap-4 md:w-auto">
          <button className="bg-pure-green font-semibold hover:bg-pure-green-hover h-[44px] rounded-[8px] text-white flex-1 md:flex-none md:w-[130px] cursor-pointer duration-200">
            Contact Us
          </button>
          <button
            className="w-[46px] h-[46px] flex items-center justify-center cursor-pointer"
            onClick={() =>
              setTheme(
                theme === "system" || theme === "light" ? "dark" : "light"
              )
            }
          >
            <Image
              suppressHydrationWarning
              src={`${
                theme === "system" || theme === "light"
                  ? "icons/moon.svg"
                  : "icons/sun.svg"
              }`}
              alt="Sun"
              width={30}
              height={30}
            />
          </button>
        </li>
        <div className={"animation hidden md:block"} style={underlineStyle}></div>
      </ul>
    </nav>
  );
};
