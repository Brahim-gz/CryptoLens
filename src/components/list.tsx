import { useQuery } from "@tanstack/react-query";
import { getTopCryptocurrencies } from "../dataFetching";
import Crypto from "./crypto";
import { currencie } from "../Types";

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
      {cryptos.map((c: currencie) => {
        return <Crypto currencie={c} />;
      })}
    </main>
  );
}

export default List;
