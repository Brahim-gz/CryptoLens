import { HLStatsProps } from "../Types";
import Texture from "./texture";

function HLStats({
  c,
  selectedCurrency,
}: {
  c: HLStatsProps;
  selectedCurrency: string;
}) {
  return (
    <>
      <div className="outline-1 outline-secondary rounded-3xl col-start-1 row-start-5 lg:row-start-2 2xl:row-start-7 col-span-12 lg:col-span-6 2xl:col-span-4 row-span-5 min-h-60 lg:row-span-8 2xl:row-span-9 backdrop-blur-24 relative overflow-hidden text-3xl flex flex-col items-center justify-around px-8 dark:outline-White">
        <Texture />
        <span className="font-montserrat font-light text-2xl self-start">
          ATH
        </span>
        {c.ath[selectedCurrency]}
        <hr className="border-secondary w-[90%] border-1 dark:border-White" />
        {c.atl[selectedCurrency]}
        <span className="font-montserrat font-light text-2xl self-start">
          ATL
        </span>
      </div>
      <div className="outline-1 outline-secondary rounded-3xl col-start-13 lg:col-start-7 2xl:col-start-6 row-start-5 lg:row-start-2 2xl:row-start-7 col-span-12 lg:col-span-6 2xl:col-span-4 row-span-5 min-h-60 lg:row-span-8 2xl:row-span-9 backdrop-blur-24 relative overflow-hidden text-3xl flex flex-col items-center justify-around px-8 dark:outline-White">
        <Texture />
        <span className="font-montserrat font-light text-2xl self-end">
          HIGH
        </span>
        {c.high_24h[selectedCurrency]}
        <hr className="border-secondary w-[90%] border-1 dark:border-White" />
        {c.low_24h[selectedCurrency]}
        <span className="font-montserrat font-light text-2xl self-end">
          LOW
        </span>
      </div>
    </>
  );
}

export default HLStats;
