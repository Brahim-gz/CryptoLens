export function getTopCryptocurrencies() {
  return fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10"
  )
    .then((res) => res.json())
    .then((data) => data);
}
