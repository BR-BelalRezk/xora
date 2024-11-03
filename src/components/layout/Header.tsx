"use client";

import magic from "@/assets/images/magic.svg";
import close from "@/assets/images/close.svg";
import { useEffect, useState } from "react";
import clsx from "clsx";
import NavLi from "../shared/NavLi";
import MobileMenuBGImage from "../ui/MobileMenuBGImage";
import MobileMenuToggleButton from "../ui/MobileMenuToggleButton";
import Logo from "../shared/Logo";

export default function Header() {
  const [toggle, setToggle] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 32);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleClose = () => setToggle(false);
  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full py-10 transition-all duration-500 max-lg:py-4 z-50",
        scroll && "py-2 bg-black-100 backdrop-blur-[8px]"
      )}
    >
      <nav className=" container flex h-14 items-center max-lg:px-5">
        <Logo handleClose={handleClose} desktop={false} />
        <div
          className={clsx(
            " max-lg:fixed max-lg:top-0 max-lg:left-0 lg:w-full max-lg:bg-s2  transition-all duration-500",
            toggle
              ? "max-lg:opacity-100  max-lg:w-full"
              : "max-lg:opacity-0  max-lg:w-0"
          )}
        >
          <div className=" max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <div className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-4">
                <NavLi
                  handleClose={handleClose}
                  titleOne="features"
                  titleTwo="pricing"
                />
                <Logo handleClose={handleClose} desktop={true} />
                <NavLi
                  handleClose={handleClose}
                  titleOne="faq"
                  titleTwo="download"
                />
              </ul>
            </div>
            <MobileMenuBGImage />
          </div>
        </div>
        <MobileMenuToggleButton
          src={toggle ? close : magic}
          onClick={() => setToggle((prevState) => !prevState)}
        />
      </nav>
    </header>
  );
}
