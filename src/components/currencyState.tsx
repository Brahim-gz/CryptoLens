import {
  MdOutlineKeyboardDoubleArrowDown,
  MdOutlineKeyboardDoubleArrowUp,
} from "react-icons/md";
import Texture from "./texture";
import { CurrencyStateProps, supported_currencies } from "../Types";
import { FaChevronDown } from "react-icons/fa";

function CurrencyState({
  c,
  duration,
  selectedCurrency,
  setSelectedCurrency,
}: {
  c: CurrencyStateProps;
  duration: number;
  selectedCurrency: string;
  setSelectedCurrency: React.Dispatch<React.SetStateAction<string>>;
}) {
  let price_change_percentage = 0;
  switch (duration) {
    case 1:
      price_change_percentage = c.price_change_percentage_24h;
      break;
    case 7:
      price_change_percentage = c.price_change_percentage_7d;
      break;
    case 30:
      price_change_percentage = c.price_change_percentage_30d;
      break;
    case 365:
      price_change_percentage = c.price_change_percentage_1y;
      break;
  }
  return (
    <>
      <div className="outline-1 outline-secondary rounded-3xl col-span-16 lg:col-span-8 2xl:col-span-6 row-span-1 lg:row-span-2 row-start-2 2xl:row-start-1 col-start-1 lg:col-start-13 backdrop-blur-24 relative overflow-hidden text-2xl flex items-center justify-between px-5 dark:outline-White">
        <Texture />
        {c.current_price[selectedCurrency]}
        <span className="font-montserrat font-light text-lg sm:text-xl">Price</span>
      </div>
      <div className="rounded-3xl bg-primary col-start-17 lg:col-start-21 2xl:col-start-23 row-start-2 2xl:row-start-1 col-span-8 lg:col-span-4 2xl:col-span-2 row-span-1 lg:row-span-2">
        <select
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
          className="select-xl pl-4 appearance-none w-full h-full border-none text-White outline-none cursor-pointer [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {supported_currencies.map((c, i) => (
            <option
              key={i}
              value={c}
              className="bg-White text-secondary dark:bg-secondary dark:text-primary"
            >
              {c.toUpperCase()}
            </option>
          ))}
        </select>
        <FaChevronDown
          size={20}
          className="relative left-[70%] sm:left-[80%] lg:left-[75%] xl:left-[80%] 2xl:left-[75%] bottom-[65%] xl:bottom-[60%] 2xl:bottom-[63%] pointer-events-none fill-White"
        />
      </div>
      <div
        className={`rounded-3xl col-start-1 lg:col-start-13 2xl:col-start-17 row-start-3 lg:row-start-4 py-2 2xl:py-0 2xl:row-start-3 col-span-24 lg:col-span-12 2xl:col-span-8 row-span-1 lg:row-span-2 text-xl sm:text-2xl text-White flex items-center justify-between px-5 ${
          price_change_percentage < 0 ? "bg-Red" : "bg-Green"
        }`}
      >
        {price_change_percentage < 0 ? (
          <MdOutlineKeyboardDoubleArrowDown size={30} />
        ) : (
          <MdOutlineKeyboardDoubleArrowUp size={30} />
        )}
        {price_change_percentage}
        {price_change_percentage < 0 ? (
          <MdOutlineKeyboardDoubleArrowDown size={30} />
        ) : (
          <MdOutlineKeyboardDoubleArrowUp size={30} />
        )}
      </div>
      <div className="outline-1 outline-secondary rounded-3xl col-start-1 lg:col-start-13 2xl:col-start-17 row-start-4 lg:row-start-6 py-2 2xl:py-0  2xl:row-start-5 col-span-16 lg:col-span-8 2xl:col-span-6 row-span-1 lg:row-span-2 backdrop-blur-24 relative overflow-hidden text-xl sm:text-2xl flex items-center justify-between px-5 lg:px-2 xl:px-5 dark:outline-White">
        <Texture />
        {c.market_cap[selectedCurrency]}
        <span className="font-montserrat font-light text-nowrap text-lg sm:text-xl lg:text-lg xl:text-xl hidden sm:inline">
          Market cap
        </span>
      </div>
      <div className="outline-1 outline-secondary rounded-3xl col-start-17 lg:col-start-21 2xl:col-start-23 row-start-4 lg:row-start-6  py-2 2xl:py-0  2xl:row-start-5 col-span-8 lg:col-span-4 2xl:col-span-2 row-span-1 lg:row-span-2 backdrop-blur-24 relative overflow-hidden text-xl sm:text-2xl flex items-center justify-between px-2 sm:px-[15%] dark:outline-White">
        <Texture />
        {c.market_cap_rank}
        <span className="font-montserrat font-light text-lg sm:text-xl">Rank</span>
      </div>
    </>
  );
}

export default CurrencyState;
