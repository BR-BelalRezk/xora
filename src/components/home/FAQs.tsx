"use client";
import Image from "next/image";
import { Element } from "react-scroll";
import faqLogo from "@/assets/images/faq-logo.svg";
import { faq } from "@/constants";
import FAQ from "../shared/FAQ";

export default function FAQs() {
  const halfLength = Math.floor(faq.length / 2);
  return (
    <section>
      <Element name="faq" className=" relative">
        <div className="container relative z-2 py-28">
          <div>
            <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4">
              Curiosity didn&apos;t kill the cat, it gave it answers.
            </h3>
            <p className="body-1 max-lg:max-w-sm">
              You&apos;ve got questions, we&apos;ve got answers.
            </p>
          </div>
          <div className="faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-s2" />
          <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">
            <div className="container flex gap-10 max-lg:block">
              <figure className="rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1">
                <Image src={faqLogo} alt="faqLogo" className="size-1/2" />
              </figure>
              <ul className=" relative flex-1 pt-24">
                {faq.slice(0, halfLength).map((item, index) => (
                  <FAQ item={item} key={item.id} index={index} />
                ))}
              </ul>
              <ul className=" relative flex-1 lg:pt-24">
                {faq.slice(halfLength).map((item, index) => (
                  <FAQ item={item} key={item.id} index={halfLength + index} />
                ))}
              </ul>
            </div>
            <div className="faq-line_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden" />
          </div>
        </div>
      </Element>
    </section>
  );
}
