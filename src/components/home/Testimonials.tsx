import { testimonials } from "@/constants";
import Testimonial from "../shared/Testimonial";

export default function Testimonials() {
  const halfLenght = Math.floor(testimonials.length / 2);
  return (
    <section className=" relative z-2 py-24 md:py-28 lg:py-40 overflow-hidden border-t-2 border-s2">
      <div className="container block lg:flex">
        <div className="testimonials_head-res relative z-2 mr-20 flex-300">
          <p className="caption mb-5 max-md:mb-2.5">Wall of love</p>
          <h3 className="h3 max-md:h5 text-p4">Words from our fans</h3>
        </div>
        <div className="testimonials_inner-after testimonials_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block">
          <ul className="testimonials_group-after flex-50">
            {testimonials.slice(0, halfLenght).map((item) => (
              <Testimonial
                className="last:after:hidden last:after:max-md:block"
                key={item.id}
                item={item}
              />
            ))}
          </ul>
          <ul className="flex-50">
            {testimonials.slice(halfLenght).map((item) => (
              <Testimonial
                className="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
                key={item.id}
                item={item}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
