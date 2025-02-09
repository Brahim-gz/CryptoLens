import { useQuery } from "@tanstack/react-query";
import { getTopCryptocurrencies } from "../dataFetching";
import Crypto from "./crypto";
import { currency } from "../Types";

function List() {
  const {
    status,
    error,
    data: cryptos,
  } = useQuery({
    queryKey: ["cryptos"],
    queryFn: getTopCryptocurrencies,
  });

  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;

  return (
    <main className="h-[74%] mx-[16%] flex flex-col gap-2 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {cryptos.map((c: currency) => {
        return <Crypto currency={c} key={c.id} />;
      })}
    </main>
  );
}

export default List;
