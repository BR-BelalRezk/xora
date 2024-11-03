import { Link as LinkScroll } from "react-scroll";
export default function NavLink({
  title,
  children,
  to,
  offset,
  spy,
  smooth,
  className,
  handleClose,
}: {
  children?: React.ReactNode;
  title?: string;
  to?: string;
  offset?: number;
  spy?: boolean;
  smooth?: boolean;
  className?: string;
  handleClose?: () => void;
}) {
  return (
    <LinkScroll
      smooth={smooth}
      spy={spy}
      onClick={handleClose}
      to={to}
      activeClass="nav-active"
      offset={offset}
      className={
        title
          ? " base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h-5"
          : className
      }
    >
      {title || children}
    </LinkScroll>
  );
}
