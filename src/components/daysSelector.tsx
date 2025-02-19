import { FaChevronDown } from "react-icons/fa";

const DaysSelector = ({
  duration,
  setDuration,
}: {
  duration: number;
  setDuration: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <>
      <div className="block rounded-3xl bg-primary col-start-1 2xl:col-start-8 row-start-10 2xl:row-start-16 col-span-24 2xl:col-span-2 row-span-1 2xl:row-span-3 2xl:my-4 sm:hidden 2xl:block">
        <select
          value={duration}
          onChange={(e) => setDuration(parseInt(e.target.value))}
          className="select-xl pl-[8%] appearance-none w-full h-full border-none text-White outline-none cursor-pointer [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <option
            value="1"
            className="bg-White text-secondary dark:bg-secondary dark:text-primary"
          >
            Day
          </option>
          <option
            value="7"
            className="bg-White text-secondary dark:bg-secondary dark:text-primary"
          >
            Week
          </option>
          <option
            value="30"
            className="bg-White text-secondary dark:bg-secondary dark:text-primary"
          >
            Month
          </option>
          <option
            value="365"
            className="bg-White text-secondary dark:bg-secondary dark:text-primary"
          >
            Year
          </option>
        </select>
        <FaChevronDown
          size={20}
          className="relative left-[90%] 2xl:left-[75%] bottom-[65%] 2xl:bottom-[60%] pointer-events-none fill-White"
        />
      </div>
      <div className="hidden justify-stretch col-start-1 lg:col-start-13 row-start-10 lg:row-start-8 col-span-24 lg:col-span-12 row-span-1 lg:row-span-2 sm:flex 2xl:hidden">
        <label className="w-full relative">
          <input
            type="radio"
            name="radio"
            value="1"
            className="sr-only peer"
            checked={duration === 1}
            onChange={() => setDuration(1)}
          />
          <p className="cursor-pointer px-3 py-1.5 border-1 border-secondary dark:border-White shadow-sm text-secondary dark:text-White text-center transition duration-300 ease-in-out peer-checked:bg-primary peer-checked:border-primary peer-checked:text-White rounded-l-md">
            Day
          </p>
        </label>
        <label className="w-full relative">
          <input
            type="radio"
            name="radio"
            value="7"
            className="sr-only peer"
            checked={duration === 7}
            onChange={() => setDuration(7)}
          />
          <p className="cursor-pointer px-3 py-1.5 border-1 border-secondary dark:border-White shadow-sm text-secondary dark:text-White text-center transition duration-300 ease-in-out peer-checked:bg-primary peer-checked:border-primary peer-checked:text-White">
            Week
          </p>
        </label>
        <label className="w-full relative">
          <input
            type="radio"
            name="radio"
            value="30"
            className="sr-only peer"
            checked={duration === 30}
            onChange={() => setDuration(30)}
          />
          <p className="cursor-pointer px-3 py-1.5 border-1 border-secondary dark:border-White shadow-sm text-secondary dark:text-White text-center transition duration-300 ease-in-out peer-checked:bg-primary peer-checked:border-primary peer-checked:text-White">
            Month
          </p>
        </label>
        <label className="w-full relative">
          <input
            type="radio"
            name="radio"
            value="365"
            className="sr-only peer"
            checked={duration === 365}
            onChange={() => setDuration(365)}
          />
          <p className="cursor-pointer px-3 py-1.5 border-1 border-secondary dark:border-White shadow-sm text-secondary dark:text-White text-center transition duration-300 ease-in-out peer-checked:bg-primary peer-checked:border-primary peer-checked:text-White rounded-r-md">
            Year
          </p>
        </label>
      </div>
    </>
  );
};

export default DaysSelector;
