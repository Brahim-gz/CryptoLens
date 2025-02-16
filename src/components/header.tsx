import ModeSwitch from "./modeSwitch";
import SearchBar from "./searchBar";

function Header() {
  return (
    <header className="w-full px-4 py-4 flex justify-between">
      <img
        src="src\assets\icon1.svg"
        alt="CryptoLens"
        className="dark:hidden"
      />
      <img
        src="src\assets\icon2.svg"
        alt="CryptoLens"
        className="invisible dark:visible"
      />
      <div className="flex justify-end gap-8">
        <SearchBar />
        <ModeSwitch />
      </div>
    </header>
  );
}

export default Header;
