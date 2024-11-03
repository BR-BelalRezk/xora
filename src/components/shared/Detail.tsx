import { details } from "@/constants";
import Image from "next/image";

type Props = {
  item: (typeof details)[number];
};
export default function Detail({ item }: Props) {
  return (
    <li className=" relative pt-16 px-4 pb-14">
      <div className=" absolute top-8 bottom-0 left-1/2 bg-s3/20 w-px h-full z-10" />
      <figure className="flex items-center justify-center mx-auto mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-500 size-20">
        <Image
          width={0}
          height={0}
          src={item.icon}
          alt={item.title}
          className="size-17/20 z-20 object-contain"
        />
      </figure>
      <h3 className=" relative z-2 max-w-36 mx-auto my-0 base-small uppercase text-center">
        {item.title}
      </h3>
    </li>
  );
}
