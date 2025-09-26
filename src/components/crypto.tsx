import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { currency } from "../Types";

function Crypto({ currency }: { currency: currency }) {
  return (
    <Link
      to={`/${currency.id}`}
      className="group border-secondary border-3 rounded-2xl px-[3%] py-4 flex items-center justify-between hover:px-[4%] dark:hover:bg-[#d0d0e1]  hover:border-5  text-Black-75 hover:text-Black dark:bg-White dark:border-none"
    >
      <div className="flex items-center gap-5">
        <p className="font-montserrat text-sm w-3 text-Black-50 group-hover:text-Black-75 ml-2 sm:ml-0">
          {currency.market_cap_rank}
        </p>
        <img src={currency.image} alt="icon" width={64} className="hidden sm:inline" />
        <h2 className="font-nunito font-bold text-xl sm:text-2xl overflow-clip h-7 ">{currency.name}</h2>
      </div>
      <div className="flex items-center gap-5">
        <h3 className="font-nunito font-bold text-xl hidden md:block">
          $ {currency.current_price}
        </h3>
        <h4
          className={`font-nunito font-bold text-xl hidden sm:block ${
            currency.price_change_percentage_24h >= 0
              ? "text-Green"
              : "text-Red"
          }`}
        >
          {currency.price_change_percentage_24h.toFixed(2)}
        </h4>
        {currency.price_change_percentage_24h >= 0 ? (
          <FaChevronUp className="fill-Green mr-2 sm:mr-0" size={20} />
        ) : (
          <FaChevronDown className="fill-Red mr-2 sm:mr-0" size={20} />
        )}
      </div>
    </Link>
  );
}

export default Crypto;
