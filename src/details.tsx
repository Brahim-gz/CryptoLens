import { useQuery } from "@tanstack/react-query";
import Footer from "./components/footer";
import { useParams } from "react-router-dom";
import { getCryptocurrencieDetails } from "./dataFetching";

function Details() {
  const { id } = useParams();
  const {
    status,
    error,
    data: currencie,
  } = useQuery({
    queryKey: ["cryptos", id!],
    queryFn: getCryptocurrencieDetails,
  });

  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;
  console.log(currencie);
  return (
    <>
      <Footer />
    </>
  );
}

export default Details;
