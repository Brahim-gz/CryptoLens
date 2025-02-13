const apiKey = import.meta.env.VITE_API_KEY;
const options = {
  method: "GET",
  headers: { accept: "application/json", "x-cg-demo-api-key": apiKey },
};

export function getTopCryptocurrencies() {
  return fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10",
    options
  )
    .then((res) => res.json())
    .then((data) => data);
}

export function getCryptocurrencyDetails({
  queryKey,
}: {
  queryKey: [string, string];
}) {
  return fetch(`https://api.coingecko.com/api/v3/coins/${queryKey[1]}`, options)
    .then((res) => res.json())
    .then((data) => data);
}

export function getOHCLData({
  queryKey,
}: {
  queryKey: [string, string, string, number, string];
}) {
  return fetch(
    `https://api.coingecko.com/api/v3/coins/${queryKey[1]}/ohlc?vs_currency=${queryKey[4]}&days=${queryKey[3]}`,
    options
  )
    .then((res) => res.json())
    .then((data) => data);
}

export function getChartsData({
  queryKey,
}: {
  queryKey: [string, string, string, number, string];
}) {
  return fetch(
    `https://api.coingecko.com/api/v3/coins/${queryKey[1]}/market_chart?vs_currency=${queryKey[4]}&days=${queryKey[3]}`,
    options
  )
    .then((res) => res.json())
    .then((data) => data);
}
