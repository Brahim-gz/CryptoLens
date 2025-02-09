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
  market_cap: { [key: string]: number };
  market_cap_rank: number;
};

export type HLStatsProps = {
  ath: { [key: string]: number };
  atl: { [key: string]: number };
  high_24h: { [key: string]: number };
  low_24h: { [key: string]: number };
};
