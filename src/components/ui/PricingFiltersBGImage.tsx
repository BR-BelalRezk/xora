import Image from "next/image";
import bgOutlines from "@/assets/images/bg-outlines.svg";
import bgOutlinesFill from "@/assets/images/bg-outlines-fill.png";
export default function PricingFiltersBGImage() {
  return (
    <figure className="pricing-bg">
      <Image
        width={960}
        height={380}
        src={bgOutlines}
        alt="pricing-bg"
        className=" relative z-2"
      />
      <Image
        width={960}
        height={380}
        src={bgOutlinesFill}
        alt="pricing-bg"
        className=" absolute inset-0 opacity-5 mix-blend-soft-light"
      />
    </figure>
  );
}
