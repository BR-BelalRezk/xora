"use client";

import { details, features } from "@/constants";
import { Element } from "react-scroll";
import Feature from "../shared/Feature";
import Detail from "../shared/Detail";

export default function Features() {
  return (
    <section className="mt-20">
      <Element name="features">
        <div className="container">
          <div className=" relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
            {features.map((item) => (
              <Feature key={item.id} item={item} />
            ))}
            <ul className="relative flex justify-around flex-grow px-[5%] border-2 border-s3 rounded-7xl max-md:hidden">
              <div className="absolute bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10" />
              {details.map((item) => (
                <Detail key={item.id} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  );
}
