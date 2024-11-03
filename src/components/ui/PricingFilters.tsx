import clsx from "clsx";
type Props = {
  month: boolean;
  setMonth: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function PricingFilters({ month, setMonth }: Props) {
  return (
    <>
      <button
        className={clsx("pricing-head_btn", month ? "text-p4" : "text-p5")}
        onClick={() => setMonth(true)}
      >
        Monthly
      </button>
      <button
        className={clsx("pricing-head_btn", !month ? "text-p4" : "text-p5")}
        onClick={() => setMonth(false)}
      >
        Annual
      </button>
    </>
  );
}
