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

function Details() {
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
    queryKey: ["cryptos", id!, "Historical-Charts"],
    queryFn: getChartsData,
  });

  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;

  if (ChartsStatus === "loading") return <h1>Loading...</h1>;
  if (ChartsStatus === "error") return <h1>{JSON.stringify(ChartsError)}</h1>;
  console.log(ChartsData);
  return (
    <>
      <main className="h-[91%] mx-16 my-8 grid grid-rows-24 grid-cols-24 gap-4 font-nunito font-bold text-secondary dark:text-White">
        <Info c={currency} />
        <CurrencyState c={currency.market_data} />
        <HLStats c={currency.market_data} />
        <OHCLChart id={currency.id} />
        <VolumesChart
          total_volume={currency.market_data.total_volume}
          data={ChartsData.total_volumes}
        />
        <div className="rounded-3xl bg-primary col-span-2 row-span-3 my-4"></div>
        <PricesChart data={ChartsData.prices} />
        <MarketCapsChart data={ChartsData.market_caps} />
        <Buttons link={currency.links.homepage} />
      </main>
      <Footer />
    </>
  );
}

export default Details;
