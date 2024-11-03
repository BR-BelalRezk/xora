"use client";
import clsx from "clsx";
import { useState } from "react";
import { Element } from "react-scroll";

import PricingFilters from "../ui/PricingFilters";
import PricingFiltersBGImage from "../ui/PricingFiltersBGImage";
import { plans } from "@/constants";
import Image from "next/image";
import Plan from "../shared/Plan";

export default function Pricing() {
  const [month, setMonth] = useState(false);
  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className="max-w-960 overflow-hidden pricing-head_before relative mx-auto border-x border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
              Flexible pricing for teams of all sizes
            </h3>
            <div className=" relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]">
              <PricingFilters month={month} setMonth={setMonth} />
              <div
                className={clsx(
                  "g4 rounded-14 before:h-100 pricing-head_btn_before absolute left-2 overflow-hidden shadow-400 transition-transform duration-500 top-2 w-[calc(50%-8px)] h-[calc(100%-16px)]",
                  !month && "translate-x-full"
                )}
              />
              <PricingFiltersBGImage />
            </div>
          </div>
          <div className="scroll-hide relative z-2 -mt-12 flex  justify-center flex-wrap lg:flex-nowrap items-start max-xl:gap-5  max-xl:pt-6">
            {plans.map((item, index) => (
              <Plan index={index} item={item} month={month} />
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
}
