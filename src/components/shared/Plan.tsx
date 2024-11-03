import { plans } from "@/constants";
import clsx from "clsx";
import Image from "next/image";
import CountUp from "react-countup";
import check from "@/assets/images/check.png";
import Button from "./Button";

type Props = {
  item: (typeof plans)[number];
  index: number;
  month: boolean;
};
export default function Plan({ item, index, month }: Props) {
  const isMiddle = index === 1;
  return (
    <div
      key={item.id}
      className="pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)]"
    >
      {isMiddle && (
        <div className="g4 absolute h-330 left-0 right-0 top-0 rounded-tl-3xl rounded-tr-3xl" />
      )}
      <figure
        className={clsx(
          " absolute inset-x-0 z-2 flex items-center justify-center",
          isMiddle ? "-top-6" : "-top-6 xl:-top-11"
        )}
      >
        <Image
          src={item.logo}
          alt={item.title}
          className={clsx(
            "object-contain drop-shadow-2xl",
            isMiddle ? "size-[120px]" : "size-[88px]"
          )}
        />
      </figure>
      <div
        className={clsx(
          "relative flex flex-col items-center",
          isMiddle ? "pt-24" : "pt-12"
        )}
      >
        <div
          className={clsx(
            "small-2 rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase",
            isMiddle ? "border-p3 text-p3" : "border-p1 text-p1"
          )}
        >
          {item.title}
        </div>
        <div className=" relative z-2 flex items-center justify-center">
          <div
            className={clsx(
              "h-num flex items-start",
              isMiddle ? "text-p3" : "text-p4"
            )}
          >
            $
            <CountUp
              duration={0.5}
              useEasing={false}
              preserveValue
              start={item.priceMonthly}
              end={month ? item.priceMonthly : item.priceYearly}
            />
          </div>
          <div className="small-1 relative top-3 ml-1 uppercase">/mo</div>
        </div>
      </div>
      <div
        className={clsx(
          "body-1 relative z-1 mb-10 w-full border-b-s2 pb-9 text-center text-p4",
          isMiddle && "border-b"
        )}
      >
        {item.caption}
      </div>
      <ul className="mx-auto space-y-4 xl:px-7">
        {item.features.map((feature) => (
          <li key={feature} className=" relative flex items-center gap-5">
            <Image className="size-10 object-contain" src={check} alt="check" />
            <p className="flex-1">{feature}</p>
          </li>
        ))}
      </ul>
      <div className="mt-10 flex w-full justify-center">
        <Button icon={item.icon}>Get started</Button>
      </div>
      {isMiddle && (
        <p className="small-compact mt-9 text-center text-p3 before:content-['-'] before:mx-2.5 after:mx-2.5 after:content-['-']">
          Limited time offer
        </p>
      )}
    </div>
  );
}
