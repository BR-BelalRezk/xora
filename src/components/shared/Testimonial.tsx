import { testimonials } from "@/constants";
import clsx from "clsx";
import Image from "next/image";

type Props = {
  item: (typeof testimonials)[number];
  className: string;
};
export default function Testimonial({ item, className }: Props) {
  return (
    <li
      className={clsx(
        "relative px-14 pt-12 pb-14 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-screen after:bg-s2 after:content-[''] max-md:px-0 max-md:pt-11 after:max-md:-right-4",
        className
      )}
    >
      <blockquote className="h6 mb-8 text-p4">{item.comment}</blockquote>
      <div className="flex items-center max-xl:-mr-8">
        <figure className="shrink-0 rounded-half border-2 border-s2 p-1.5 mr-4 size-20">
          <Image
            className="size-full object-cover"
            src={item.avatarUrl}
            alt={item.name}
          />
        </figure>
        <div>
          <h4 className="body-2 mb-0.5 text-p1">{item.name}</h4>
          <p className="small-compact uppercase text-s3">{item.role}</p>
        </div>
      </div>
    </li>
  );
}
