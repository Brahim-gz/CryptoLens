import { InfoProps } from "../Types";

function Info({ c }: { c: InfoProps }) {
  return (
    <>
      <div className="bg-White flex items-center justify-center w-38 rounded-br-3xl z-30 h-29 dark:bg-secondary">
        <img src={c.image.large} alt="icon" width={100} />
      </div>
      <div className="rounded-3xl bg-primary row-span-2 col-span-2 row-start-3 col-start-2"></div>
      <div className="rounded-3xl bg-primary row-span-3 col-span-3 row-start-4 col-start-1"></div>
      <div className="rounded-3xl bg-primary col-span-14 row-span-6 col-start-3 row-start-1 px-10 py-5 font-montserrat font-light text-sm text-Black-75 overflow-hidden leading-9 z-5">
        <h1 className="font-nunito font-bold text-White text-4xl mb-1">
          {c.name}({c.symbol.toUpperCase()})
        </h1>
        <div className="overflow-hidden flex">
          <div
            className={`flex gap-1 ${
              c.description.en
                ? "items-center animate-infinite-scroll"
                : "flex-wrap"
            }`}
          >
            {(c.description.en
              ? [...c.categories, ...c.categories]
              : [...c.categories]
            ).map((cat, i) => (
              <span
                key={i}
                className="bg-Black-10 rounded-3xl text-Black-50 h-8 px-3 text-nowrap"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between">
          {c.genesis_date && (
            <span>
              genesis date | <span>{c.genesis_date}</span>
            </span>
          )}
          {c.hashing_algorithm && (
            <span>
              hashing algorithm | <span>{c.hashing_algorithm}</span>
            </span>
          )}
        </div>
      </div>
      <p className="text-Black font-medium leading-5 h-20 px-8 py-4 col-span-16 row-start-4 col-start-1 z-55 overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
        {c.description.en.replace(/<[^>]*>/g, "")}
      </p>
      <div className="rounded-3xl bg-primary row-span-10 col-start-5 row-start-6 z-3"></div>
      <div
        className={`rounded-3xl bg-White row-span-8 col-start-5 row-start-7 z-5 w-6 mx-4.5 dark:bg-secondary`}
      ></div>
    </>
  );
}

export default Info;
