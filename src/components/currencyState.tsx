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
      <div className="outline-1 outline-secondary rounded-3xl col-span-6 row-span-2 backdrop-blur-24 relative overflow-hidden text-2xl flex items-center justify-between px-5 dark:outline-White">
        <Texture />
        {c.current_price[selectedCurrency]}
        <span className="font-montserrat font-light text-xl">Price</span>
      </div>
      <div className="rounded-3xl bg-primary col-span-2 row-span-2">
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
          className="relative left-24 bottom-10 pointer-events-none fill-White"
        />
      </div>
      <div
        className={`rounded-3xl col-span-8 row-span-2 text-2xl text-White flex items-center justify-between px-5 ${
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
      <div className="outline-1 outline-secondary rounded-3xl col-span-6 row-span-2 backdrop-blur-24 relative overflow-hidden text-2xl flex items-center justify-between px-5 dark:outline-White">
        <Texture />
        {c.market_cap[selectedCurrency]}
        <span className="font-montserrat font-light text-xl">Market cap</span>
      </div>
      <div className="outline-1 outline-secondary rounded-3xl col-span-2 row-span-2 backdrop-blur-24 relative overflow-hidden text-2xl flex items-center justify-between px-5 dark:outline-White">
        <Texture />
        {c.market_cap_rank}
        <span className="font-montserrat font-light text-xl">Rank</span>
      </div>
    </>
  );
}

export default CurrencyState;
