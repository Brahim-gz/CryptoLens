import { useState } from "react";
import { InfoProps } from "../Types";
import { MdOutlineArrowRightAlt } from "react-icons/md";

function Info({ c }: { c: InfoProps }) {
  const [extanded, setExtanded] = useState(false);
  return (
    <>
      <div className="bg-White flex items-center col-start-1 row-start-1 justify-center w-38 rounded-br-3xl z-30 h-29 dark:bg-secondary ">
        <img src={c.image.large} alt="icon" width={100} />
      </div>
      <div
        className={`rounded-3xl bg-primary  col-start-1 2xl:col-start-1 min-h-53  row-start-1 2xl:row-start-1 px-8 font-montserrat font-light text-sm text-Black-75  col-span-24 2xl:col-span-16 ${
          extanded
            ? "xl:h-fit  pb-5"
            : "overflow-hidden  h-fit 2xl:h-auto 2xl:row-span-6  pb-5 2xl:pb-0"
        } z-5`}
      >
        <div className="bg-White h-29 w-45 absolute z-7 dark:bg-secondary"></div>
        <div className="bg-primary absolute w-50 mt-20 z-8 h-10"></div>
        <div className="bg-primary ml-28 rounded-3xl pt-4 px-8 z-9  leading-9 relative">
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
              {c.categories.length === 0 && <br />}
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
            {!c.genesis_date && !c.hashing_algorithm && <br />}
            {c.genesis_date && (
              <span>
                genesis date | <span>{c.genesis_date}</span>
              </span>
            )}
            {c.hashing_algorithm && (
              <span className={`${c.genesis_date && "hidden md:block"}`}>
                hashing algorithm | <span>{c.hashing_algorithm}</span>
              </span>
            )}
          </div>
        </div>
        <p
          className={`text-Black px-4 font-medium leading-5 ${
            !extanded &&
            "2xl:overflow-hidden 2xl:[display:-webkit-box] 2xl:[-webkit-box-orient:vertical] 2xl:[-webkit-line-clamp:3]"
          }`}
        >
          {c.description.en.replace(/<[^>]*>/g, "")}
        </p>
      </div>
      <div
        className="group rounded-b-3xl bg-primary row-span-10 col-start-5 row-start-6 py-5 2xl:flex justify-center  hidden"
        onClick={() => setExtanded(!extanded)}
      >
        <button
          className={`rounded-3xl h-full bg-White w-[1vw] flex items-end group-hover:bg-primary dark:bg-secondary`}
        >
          <MdOutlineArrowRightAlt
            size={40}
            className={`${
              extanded ? "-rotate-90" : "rotate-90"
            } fill-secondary dark:fill-White`}
          />
        </button>
      </div>
    </>
  );
}

export default Info;
