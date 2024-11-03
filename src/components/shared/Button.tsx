import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Marker from "../ui/Marker";

export default function Button({
  icon,
  children,
  href,
  className,
  onclick,
  fill,
}: {
  children: React.ReactNode;
  icon: string | StaticImageData;
  href?: string;
  className?: string;
  onclick?: () => void;
  fill?: string;
}) {
  const Inner = () => (
    <>
      <span className=" relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        <span className=" absolute -left-px">
          <Marker fill={fill} />
        </span>
        {icon && (
          <Image
            src={icon}
            alt="icon"
            className="size-10 mr-5 object-contain z-10"
          />
        )}
        <span className=" relative z-2 font-poppins base-bold text-p1">
          {children}
        </span>
        <span className="glow-before glow-after" />
      </span>
    </>
  );
  return href ? (
    <Link
      href={href}
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        className
      )}
    >
      <Inner />
    </Link>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        className
      )}
      onClick={onclick}
    >
      <Inner />
    </button>
  );
}
