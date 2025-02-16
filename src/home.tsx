import { useQuery } from "@tanstack/react-query";
import Footer from "./components/footer";
import Header from "./components/header";
import { getTopCryptocurrencies } from "./dataFetching";
import Crypto from "./components/crypto";
import { currency } from "./Types";
import ErrorPage from "./components/error";

function Home() {
  const {
    status,
    error,
    data: cryptos,
  } = useQuery({
    queryKey: ["cryptos"],
    queryFn: getTopCryptocurrencies,
  });

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <span className="loading loading-spinner text-primary w-15"></span>
      </div>
    );
  }
  if (status === "error") {
    return <ErrorPage error={error as Error} />;
  }

  return (
    <>
      <Header />
      <h1 className="mx-[16%] mt-8 mb-8 bg-gradient-to-r from-[#191533] to-[#9F91FA] bg-clip-text text-transparent font-nunito font-bold text-[41px] dark:text-primary">
        Top cryptocurrencies
      </h1>
      <main className="h-[74%] mx-[16%] flex flex-col gap-2 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {cryptos.map((c: currency) => {
          return <Crypto currency={c} key={c.id} />;
        })}
      </main>
      <Footer />
    </>
  );
}

export default Home;
