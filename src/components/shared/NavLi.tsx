import NavLink from "./NavLink";

export default function NavLi({
  titleOne,
  titleTwo,
  handleClose,
}: {
  titleOne: string;
  titleTwo: string;
  handleClose: () => void;
}) {
  return (
    <li className="nav-li">
      <NavLink
        handleClose={handleClose}
        to={titleOne}
        spy
        smooth
        title={titleOne}
      />
      <div className="dot" />
      <NavLink
        handleClose={handleClose}
        to={titleTwo}
        spy
        smooth
        title={titleTwo}
      />
    </li>
  );
}
