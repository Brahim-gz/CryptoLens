import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { currencie } from "../Types";

function Crypto({ currencie }: { currencie: currencie }) {
  return (
    <Link
      to={`/${currencie.id}`}
      className="bg-[radial-gradient(closest-side,_#40348D_50%,_#191533_100%)] rounded-2xl"
    >
      <div className="rounded-2xl text-White px-[3%] py-4 flex items-center justify-between transition duration-1000 ease-in-out hover:bg-[#40348D]">
        <div className="flex items-center gap-5">
          <p className="font-montserrat text-sm w-3">
            {currencie.market_cap_rank}
          </p>
          <img src={currencie.image} alt="icon" width={64} />
          <h2 className="font-nunito font-bold text-2xl">{currencie.name}</h2>
        </div>
        <div className="flex items-center gap-5">
          <h3 className="font-nunito font-bold text-xl">
            $ {currencie.current_price}
          </h3>
          <h4
            className={
              currencie.price_change_percentage_24h >= 0
                ? "font-nunito font-bold text-xl text-Green"
                : "font-nunito font-bold text-xl text-Red"
            }
          >
            {currencie.price_change_percentage_24h.toFixed(2)}
          </h4>
          {currencie.price_change_percentage_24h >= 0 ? (
            <FaChevronUp className="fill-Green" size={20} />
          ) : (
            <FaChevronDown className="fill-Red" size={20} />
          )}
        </div>
      </div>
    </Link>
  );
}

export default Crypto;
