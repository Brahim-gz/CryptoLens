import { useQuery } from "@tanstack/react-query";
import Footer from "./components/footer";
import { useParams } from "react-router-dom";
import { getChartsData, getCryptocurrencyDetails } from "./dataFetching";
import Buttons from "./components/buttons";
import CurrencyState from "./components/currencyState";
import HLStats from "./components/hlStats";
import Info from "./components/info";
import OHCLChart from "./components/ohclChart";
import VolumesChart from "./components/volumesChart";
import PricesChart from "./components/pricesChart";
import MarketCapsChart from "./components/marketCapsChart";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import ErrorPage from "./components/error";

function Details() {
  const [duration, setDuration] = useState(1);
  const [selectedCurrency, setSelectedCurrency] = useState("usd");
  const { id } = useParams();
  const {
    status,
    error,
    data: currency,
  } = useQuery({
    queryKey: ["cryptos", id!],
    queryFn: getCryptocurrencyDetails,
  });

  const {
    status: ChartsStatus,
    error: ChartsError,
    data: ChartsData,
  } = useQuery({
    queryKey: ["cryptos", id!, "Historical-Charts", duration, selectedCurrency],
    queryFn: getChartsData,
  });

  if (status === "loading")
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <span className="loading loading-spinner text-primary w-15"></span>
      </div>
    );
  if (status === "error") return <ErrorPage error={error as Error} />;

  return (
    <>
      <main className="h-[91%] mx-16 my-8 grid grid-rows-24 grid-cols-24 gap-4 font-nunito font-bold text-secondary dark:text-White">
        <Info c={currency} />
        <CurrencyState
          c={currency.market_data}
          duration={duration}
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={setSelectedCurrency}
        />
        <HLStats c={currency.market_data} selectedCurrency={selectedCurrency} />
        <OHCLChart
          id={currency.id}
          duration={duration}
          selectedCurrency={selectedCurrency}
        />
        <VolumesChart
          total_volume={currency.market_data.total_volume}
          data={ChartsData?.total_volumes}
          selectedCurrency={selectedCurrency}
          status={ChartsStatus}
          error={ChartsError as Error}
        />
        <div className="rounded-3xl bg-primary col-start-8 row-start-16 col-span-2 row-span-3 my-4">
          <select
            value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value))}
            className="select-xl pl-4 appearance-none w-full h-full border-none text-White outline-none cursor-pointer [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <option
              value="1"
              className="bg-White text-secondary dark:bg-secondary dark:text-primary"
            >
              Day
            </option>
            <option
              value="7"
              className="bg-White text-secondary dark:bg-secondary dark:text-primary"
            >
              Week
            </option>
            <option
              value="30"
              className="bg-White text-secondary dark:bg-secondary dark:text-primary"
            >
              Month
            </option>
            <option
              value="365"
              className="bg-White text-secondary dark:bg-secondary dark:text-primary"
            >
              Year
            </option>
          </select>
          <FaChevronDown
            size={20}
            className="relative left-24 bottom-10 pointer-events-none fill-White"
          />
        </div>
        <PricesChart
          data={ChartsData?.prices}
          status={ChartsStatus}
          error={ChartsError as Error}
        />
        <MarketCapsChart
          data={ChartsData?.market_caps}
          status={ChartsStatus}
          error={ChartsError as Error}
        />
        <Buttons link={currency.links.homepage} />
      </main>
      <Footer />
    </>
  );
}

export default Details;
