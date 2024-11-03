"use client";

import Image from "next/image";
import { Element } from "react-scroll";
import xora from "@/assets/images/xora.svg";
import { links, logos } from "@/constants";
import Marker from "../ui/Marker";
import lines from "@/assets/images/lines.svg";
import screen from "@/assets/images/screen.jpg";
export default function Download() {
  return (
    <section>
      <Element
        name="download"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex items-center">
            <div className=" relative mr-6 flex-540 max-xl:flex-280 max-lg:flex-256 max-md:flex-100">
              <figure className="mb-10">
                <Image src={xora} alt="xora-logo" width={160} height={55} />
              </figure>
              <p className="body-1 mb-10 max-w-md">
                Try it now for free IOS, Andriod, PC, Web - whatever your
                flavor, we&apos;ve got you covered.
              </p>
              <ul className="flex flex-wrap items-center gap-6">
                {links.map((item) => (
                  <li
                    key={item.id}
                    className="download_tech-link download_tech-link_last-before download_tech-link_last-after"
                  >
                    <a
                      href={"#"}
                      className="size-22 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 border-s3  bg-s1 transition-borderColor duration-500"
                    >
                      <span className=" absolute -top-2 rotate-90">
                        <Marker />
                      </span>
                      <Image
                        className=" absolute size-13/20 object-contain"
                        src={lines}
                        alt="lines"
                      />
                      <span className="download_tech-icon">{item.icon}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-10 max-md:hidden ">
              <div className="download_preview-before relative download_preview-after rounded-40 w-[955px] border-2 border-s5 p-6">
                <div className=" relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-s2" />
                  <span className="download_preview-dot left-16 bg-p1/15" />
                  <Image
                    src={screen}
                    alt="screen"
                    width={855}
                    height={655}
                    className=" rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <ul className="mt-24 flex justify-center max-lg:hidden">
            {logos.map((item) => (
              <li className="mx-10" key={item.id}>
                <Image
                  src={item.url}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                ></Image>
              </li>
            ))}
          </ul>
        </div>
      </Element>
    </section>
  );
}
