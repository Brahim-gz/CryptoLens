import { LuArrowLeft, LuArrowUpRight } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function Buttons({ link }: { link: string }) {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => window.open(link, "_blank")}
        className="group cursor-pointer rounded-3xl bg-secondary col-span-5 row-span-3 text-White text-4xl flex items-center justify-center gap-4 dark:bg-White dark:text-Black-75"
      >
        <span className="group-hover:-translate-x-50 group-hover:absolute group-hover:opacity-0 left-[85%] transition-all duration-500">
          More
        </span>
        <LuArrowUpRight
          size={40}
          className="group-hover:size-15 transition-all duration-100"
        />
      </button>
      <button
        onClick={() => navigate("/")}
        className="group cursor-pointer rounded-3xl bg-primary col-span-5 row-span-3 text-White text-4xl flex items-center justify-center gap-4 dark:after:bg-secondary dark:after:w-15 dark:after:h-15 dark:after:z-14 dark:after:absolute dark:after:left-[97%]"
      >
        <LuArrowLeft
          size={40}
          className="group-hover:size-15 transition-all duration-100"
        />
        <span className="group-hover:translate-x-50 group-hover:absolute left-[88%] group-hover:opacity-0 transition-all duration-500">
          Back
        </span>
      </button>
    </>
  );
}

export default Buttons;
