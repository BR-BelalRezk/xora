import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/xora.svg";
import NavLink from "./NavLink";
import clsx from "clsx";

export default function Logo({
  desktop,
  handleClose,
}: {
  handleClose?: () => void;
  desktop: boolean;
}) {
  return desktop ? (
    <li className="nav-logo z-50">
      <NavLink
        handleClose={handleClose}
        to="hero"
        offset={-250}
        spy
        smooth
        className={clsx(
          "max-lg:hidden transition-transform duration-500 cursor-pointer"
        )}
      >
        <LogoImage width={160} height={55} />
      </NavLink>
    </li>
  ) : (
    <Link href={"/"} className="lg:hidden flex-1 z-2">
      <LogoImage width={115} height={55} />
    </Link>
  );
}

const LogoImage = ({ width, height }: { width: number; height: number }) => (
  <Image src={logo} alt="xora-logo" width={width} height={height} />
);
