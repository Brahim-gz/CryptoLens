import {
  MdOutlineKeyboardDoubleArrowDown,
  MdOutlineKeyboardDoubleArrowUp,
} from "react-icons/md";
import Texture from "./texture";
import { CurrencyStateProps } from "../Types";

function CurrencyState({ c }: { c: CurrencyStateProps }) {
  return (
    <>
      <div className="outline-1 outline-secondary rounded-3xl col-span-6 row-span-2 backdrop-blur-24 relative overflow-hidden text-2xl flex items-center justify-between px-5">
        <Texture />
        {c.current_price.usd}
        <span className="font-montserrat font-light text-xl">Price</span>
      </div>
      <div className="rounded-3xl bg-primary col-span-2 row-span-2"></div>
      <div
        className={`rounded-3xl col-span-8 row-span-2 text-2xl text-White flex items-center justify-between px-5 ${
          c.price_change_percentage_24h < 0 ? "bg-Red" : "bg-Green"
        }`}
      >
        {c.price_change_percentage_24h < 0 ? (
          <MdOutlineKeyboardDoubleArrowDown size={30} />
        ) : (
          <MdOutlineKeyboardDoubleArrowUp size={30} />
        )}
        {c.price_change_percentage_24h}
        {c.price_change_percentage_24h < 0 ? (
          <MdOutlineKeyboardDoubleArrowDown size={30} />
        ) : (
          <MdOutlineKeyboardDoubleArrowUp size={30} />
        )}
      </div>
      <div className="outline-1 outline-secondary rounded-3xl col-span-6 row-span-2 backdrop-blur-24 relative overflow-hidden text-2xl flex items-center justify-between px-5">
        <Texture />
        {c.market_cap.usd}
        <span className="font-montserrat font-light text-xl">Market cap</span>
      </div>
      <div className="outline-1 outline-secondary rounded-3xl col-span-2 row-span-2 backdrop-blur-24 relative overflow-hidden text-2xl flex items-center justify-between px-5">
        <Texture />
        {c.market_cap_rank}
        <span className="font-montserrat font-light text-xl">Rank</span>
      </div>
    </>
  );
}

export default CurrencyState;
