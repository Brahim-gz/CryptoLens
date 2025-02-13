export type currency = {
  id: string;
  market_cap_rank: number;
  image: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
};

export type InfoProps = {
  symbol: string;
  image: { large: string };
  name: string;
  categories: string[];
  description: { en: string };
  genesis_date: string | null;
  hashing_algorithm: string | null;
};

export type CurrencyStateProps = {
  current_price: { [key: string]: number };
  price_change_percentage_24h: number;
  price_change_percentage_7d: number;
  price_change_percentage_30d: number;
  price_change_percentage_1y: number;
  market_cap: { [key: string]: number };
  market_cap_rank: number;
};

export type HLStatsProps = {
  ath: { [key: string]: number };
  atl: { [key: string]: number };
  high_24h: { [key: string]: number };
  low_24h: { [key: string]: number };
};

export const supported_currencies = [
  "usd",
  "btc",
  "eth",
  "ltc",
  "bch",
  "bnb",
  "eos",
  "xrp",
  "xlm",
  "link",
  "dot",
  "yfi",
  "aed",
  "ars",
  "aud",
  "bdt",
  "bhd",
  "bmd",
  "brl",
  "cad",
  "chf",
  "clp",
  "cny",
  "czk",
  "dkk",
  "eur",
  "gbp",
  "gel",
  "hkd",
  "huf",
  "idr",
  "ils",
  "inr",
  "jpy",
  "krw",
  "kwd",
  "lkr",
  "mmk",
  "mxn",
  "myr",
  "ngn",
  "nok",
  "nzd",
  "php",
  "pkr",
  "pln",
  "rub",
  "sar",
  "sek",
  "sgd",
  "thb",
  "try",
  "twd",
  "uah",
  "vef",
  "vnd",
  "zar",
  "xdr",
  "xag",
  "xau",
  "bits",
  "sats",
];
