"use client";

import { Element } from "react-scroll";

import Image from "next/image";
import hero from "@/assets/images/hero.png";
import HeroText from "../ui/HeroText";

export default function Hero() {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 overflow-hidden">
      <Element name="hero">
        <div className="container">
          <HeroText />
          <figure className=" absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <Image
              src={hero}
              alt="hero"
              className=" size-1230 max-lg:h-auto "
            />
          </figure>
        </div>
      </Element>
    </section>
  );
}
