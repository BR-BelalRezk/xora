import Image, { StaticImageData } from "next/image";

export default function MobileMenuToggleButton({onClick ,src}:{onClick:() => void , src : StaticImageData}) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
    >
      <Image
        alt="magic-hamburger-menu-icon"
        src={src}
        className="size-1/2 object-contain"
      />
    </button>
  );
}
