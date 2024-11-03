import Image from "next/image";
import outlines from "@/assets/images/bg-outlines.svg";
import outlinesFill from "@/assets/images/bg-outlines-fill.png";
export default function MobileMenuBGImage() {
  return (
    <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[360px] translate-x-[-290px] -translate-y-1/2 rotate-90">
      <Image
        src={outlines}
        alt="outlines-background"
        width={960}
        height={380}
        className=" relative z-2"
      />
      <Image
        src={outlinesFill}
        alt="outlines-background"
        width={960}
        height={380}
        className=" absolute inset-0 mix-blend-soft-light opacity-5"
      />
    </div>
  );
}
