import { useQuery } from "@tanstack/react-query";
import { getIdList } from "../dataFetching";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useHotkeys } from "react-hotkeys-hook";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [suggetions, setSuggetions] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const searchBarRef = useRef<HTMLLabelElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    isLoading,
    isError,
    data: idList,
  } = useQuery({
    queryKey: ["IdList"],
    queryFn: getIdList,
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);

    if (idList) {
      const filteredList = idList
        .filter((c: { id: string; symbol: string; name: string }) =>
          c.id.includes(value.toLowerCase())
        )
        .slice(0, 100)
        .map((c: { id: string; symbol: string; name: string }) => c.id);
      setSuggetions(filteredList);
    }
    setIsVisible(true);
  };
  useHotkeys("ctrl+k", (e: KeyboardEvent) => {
    e.preventDefault();
    inputRef.current?.focus();
    setIsVisible(true);
  });

  if (isError) {
    return;
  }
  return (
    <label
      ref={searchBarRef}
      className={`input input-bordered flex items-center gap-2 bg-Black-10 dark:bg-White has-focus:bg-White rounded-2xl font-nunito has-focus:border-2 has-focus:border-secondary`}
    >
      <input
        type="text"
        className="grow text-secondary dark:text-Black peer dark:disabled:text-White focus:w-80 transition-all duration-200 delay-100"
        placeholder="Search"
        autoComplete="off"
        ref={inputRef}
        value={searchValue}
        onChange={handleChange}
        disabled={isLoading}
      />
      <kbd className="kbd kbd-sm pointer-events-none peer-disabled:bg-Black-10 peer-focus:hidden peer-disabled:text-Black-50 peer-disabled:invisible bg-Black-25 text-Black rounded-sm p-2.5 transition-all duration-200 delay-100">
        <span className="text-[0.9em]">⌘</span>&nbsp;<big>K</big>
      </kbd>
      {isVisible && searchValue && (
        <div className="min-w-80 max-w-90 bg-White absolute flex flex-col max-h-80 top-15 border-1 rounded-xl overflow-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -translate-x-3">
          {suggetions.length > 0 ? (
            suggetions.map((s, i) => (
              <Link
                to={`/${s}`}
                key={i}
                className="px-4 py-0.5 cursor-pointer border-b-1 border-Black-10 text-Black-75 hover:bg-Black-10"
              >
                {s}
              </Link>
            ))
          ) : (
            <span className="px-4 py-1 text-Black-75">
              No currency with this name.
            </span>
          )}
        </div>
      )}
    </label>
  );
};

export default SearchBar;
