const apiKey = import.meta.env.VITE_API_KEY;

export function getTopCryptocurrencies() {
  const options = {
    method: "GET",
    headers: { accept: "application/json", "x-cg-demo-api-key": apiKey },
  };
  return fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10",
    options
  )
    .then((res) => res.json())
    .then((data) => data);
}

export function getCryptocurrencieDetails({
  queryKey,
}: {
  queryKey: [string, string];
}) {
  const options = {
    method: "GET",
    headers: { accept: "application/json", "x-cg-demo-api-key": apiKey },
  };
  return fetch(`https://api.coingecko.com/api/v3/coins/${queryKey[1]}`, options)
    .then((res) => res.json())
    .then((data) => data);
}
