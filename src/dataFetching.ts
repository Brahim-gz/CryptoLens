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
    .then((res) => {
      if (res.ok) return res.json();
      if (res.status === 400)
        throw new Error("400 Failed to fetch: Bad Request");
      if (res.status === 401)
        throw new Error("401 Failed to fetch: Unauthorized Access");
      if (res.status === 404)
        throw new Error("404 Failed to fetch: Data Not Found");
      if (res.status === 429)
        throw new Error("429 Failed to fetch: Too Many Requests");
      if (!res.ok) throw new Error("Oops! An unknown error occurred");
    })
    .then((data) => data);
}

export function getCryptocurrencyDetails({
  queryKey,
}: {
  queryKey: [string, string];
}) {
  return fetch(`https://api.coingecko.com/api/v3/coins/${queryKey[1]}`, options)
    .then((res) => {
      if (res.ok) return res.json();
      if (res.status === 400)
        throw new Error("400 Failed to fetch: Bad Request");
      if (res.status === 401)
        throw new Error("401 Failed to fetch: Unauthorized Access");
      if (res.status === 404)
        throw new Error("404 Failed to fetch: Data Not Found");
      if (res.status === 429)
        throw new Error("429 Failed to fetch: Too Many Requests");
      if (!res.ok) throw new Error("Oops! An unknown error occurred");
    })
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
    .then((res) => {
      if (res.ok) return res.json();
      if (res.status === 400) throw new Error("Bad Request");
      if (res.status === 401) throw new Error("Unauthorized Access");
      if (res.status === 404) throw new Error("Data Not Found");
      if (res.status === 429) throw new Error("Too Many Requests");
      if (!res.ok) throw new Error("Unknown error occurred");
    })
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
    .then((res) => {
      if (res.ok) return res.json();
      if (res.status === 400) throw new Error("Bad Request");
      if (res.status === 401) throw new Error("Unauthorized Access");
      if (res.status === 404) throw new Error("Data Not Found");
      if (res.status === 429) throw new Error("Too Many Requests");
      if (!res.ok) throw new Error("Unknown error occurred");
    })
    .then((data) => data);
}
