function Footer() {
  return (
    <footer className="text-right px-4 py-4 fixed bottom-0 w-full font-montserrat font-light text-Black-50 dark:text-White">
      Powered by&nbsp;
      <a
        href="https://www.coingecko.com/en/api/documentation"
        target="_blank"
        className="font-semibold hover:underline"
      >
        CoinGecko
      </a>
      &nbsp;API
    </footer>
  );
}

export default Footer;
