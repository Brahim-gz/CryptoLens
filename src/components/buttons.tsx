import { LuArrowLeft, LuArrowUpRight } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function Buttons({ link }: { link: string }) {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => window.open(link, "_blank")}
        className="group cursor-pointer rounded-3xl col-start-1  md:col-start-13 lg:col-start-9 2xl:col-start-20 row-start-21 md:row-start-20 lg:row-start-23 2xl:row-start-19 bg-secondary col-span-24 md:col-span-12 lg:col-span-8 2xl:col-span-5 h-20 md:h-40 lg:h-20 2xl:h-auto row-span-2 2xl:row-span-3 text-White text-4xl lg:text-3xl 2xl:text-4xl flex items-center justify-center gap-4 dark:bg-White lg:py-2 2xl:py-0 dark:text-Black-75"
      >
        <span className="group-hover:-translate-x-100 md:group-hover:-translate-x-50 group-hover:absolute group-hover:opacity-0 lg:left-[30%] 2xl:left-[85%] transition-all duration-500">
          More
        </span>
        <LuArrowUpRight
          size={40}
          className="md:group-hover:size-15 2xl:group-hover:size-15 transition-all duration-100"
        />
      </button>
      <button
        onClick={() => navigate("/")}
        className="group cursor-pointer rounded-3xl bg-primary col-start-1  md:col-start-13 lg:col-start-17 2xl:col-start-20 row-start-23 md:row-start-22 lg:row-start-23 2xl:row-start-22 col-span-24 md:col-span-12 lg:col-span-8 2xl:col-span-5 h-20 md:h-40 lg:h-20 2xl:h-auto row-span-2 2xl:row-span-3 text-White text-4xl lg:text-3xl 2xl:text-4xl flex items-center justify-center gap-4 dark:after:bg-secondary lg:py-2 2xl:py-0 dark:after:w-[10%] dark:after:h-15 dark:after:z-14 dark:after:absolute dark:after:hidden dark:md:after:block dark:md:after:left-[94%] dark:lg:after:left-[98.5%]"
      >
        <LuArrowLeft
          size={40}
          className="md:group-hover:size-15 2xl:group-hover:size-15 transition-all duration-100"
        />
        <span className="group-hover:translate-x-50 group-hover:absolute left-[88%] group-hover:opacity-0 transition-all duration-500">
          Back
        </span>
      </button>
    </>
  );
}

export default Buttons;
