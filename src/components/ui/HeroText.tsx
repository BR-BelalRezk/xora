import Button from "../shared/Button";
import zap from "@/assets/images/zap.svg";
import {Link as LinkScroll} from 'react-scroll'

export default function HeroText() {
  return (
    <div className=" relative z-2 max-w-512 max-lg:max-w-388">
      <div className=" uppercase text-p3 caption small-2">video editing</div>
      <h1 className="h1 mb-6 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
        amazingly simple
      </h1>
      <p className="max-w-440 mb-14 body-1 max-md:mb-10">
        We designed Xora AI video editor to be easy to use, quick to learn, and
        surprisingly powerful.
      </p>
      <LinkScroll to="features" offset={-100} spy smooth>
        <Button icon={zap}>Try it now</Button>
      </LinkScroll>
    </div>
  );
}
