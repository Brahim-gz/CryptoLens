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
import { useState } from "react";
import ErrorPage from "./components/error";
import DaysSelector from "./components/daysSelector";

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
      <main className="lx:h-400 2xl:h-[91%] mx-2 sm:mx-8 mt-4 md:mx-16 md:mt-8 grid grid-rows-[auto,repeat(23,1fr)] 2xl:grid-rows-24 grid-cols-24 gap-2 sm:gap-4 font-nunito font-bold text-secondary dark:text-White">
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
        <DaysSelector duration={duration} setDuration={setDuration} />
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
      <div className="relative 2xl:fixed bottom-0 w-full">
      <Footer />
      </div>
    </>
  );
}

export default Details;
