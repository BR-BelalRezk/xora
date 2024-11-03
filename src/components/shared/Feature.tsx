import { features } from "@/constants";
import Image from "next/image";
import Button from "./Button";

type Props = {
  item: (typeof features)[number];
};
export default function Feature({ item }: Props) {
  return (
    <div className=" relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3  max-md:rounded-3xl max-md:flex-320">
      <div className="w-full flex justify-start items-start">
        <div className=" -ml-3 mb-12 flex items-center justify-center flex-col">
          <div className="w-0.5 h-16 bg-s3" />
          <Image
            src={item.icon}
            alt={item.title}
            width={0}
            height={0}
            className="size-28 object-contain"
          />
        </div>
      </div>
      <p className="caption mb-5 max-md:mb-5">{item.caption}</p>
      <h2 className="max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5">
        {item.title}
      </h2>
      <p className="mb-11 body-1 max-md:mb-8 max-md:body03">{item.text}</p>
      <Button icon={item.button.icon}>{item.button.title}</Button>
    </div>
  );
}
