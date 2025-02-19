import ReactApexChart from "react-apexcharts";
import Texture from "./texture";
import { ApexOptions } from "apexcharts";
import { getOHCLData } from "../dataFetching";
import { useQuery } from "@tanstack/react-query";
import { MdErrorOutline } from "react-icons/md";

function OHCLChart({
  id,
  duration,
  selectedCurrency,
}: {
  id: string;
  duration: number;
  selectedCurrency: string;
}) {
  const { status, error, data } = useQuery({
    queryKey: ["cryptos", id, "OHCL", duration, selectedCurrency],
    queryFn: getOHCLData,
  });

  if (status === "loading")
    return (
      <div className="outline-1 px-8 outline-secondary overflow-hidden rounded-3xl col-start-1 2xl:col-start-10 row-start-11 lg:row-start-10 2xl:row-start-7 2xl:col-span-15 col-span-24 row-span-3 md:row-span-6 lg:row-span-9 2xl:row-span-12 backdrop-blur-24 relative dark:outline-White flex items-center justify-center">
        <Texture />
        <span className="loading loading-ring text-primary w-20"></span>
      </div>
    );
  if (status === "error") {
    return (
      <div className="outline-1 px-8 outline-secondary overflow-hidden rounded-3xl col-start-1 2xl:col-start-10 row-start-11 lg:row-start-10 2xl:row-start-7 2xl:col-span-15 col-span-24 row-span-3 md:row-span-6 lg:row-span-9 2xl:row-span-12 backdrop-blur-24 relative dark:outline-White flex items-center justify-center">
        <Texture />
        <div
          className="tooltip tooltip-bottom text-Black-50 dark:text-White"
          data-tip={(error as Error).message}
        >
          <MdErrorOutline size={60} className="fill-Red" />
        </div>
      </div>
    );
  }

  const series = [
    {
      data: data.map((x: number[]) => ({
        x: new Date(x[0]),
        y: [x[1], x[2], x[3], x[4]],
      })),
    },
  ];
  const options: ApexOptions = {
    chart: {
      type: "candlestick",
      background: "transparent",
      zoom: {
        enabled: false,
      },
      foreColor: document.body.classList.contains("dark")
        ? "#dcdcee"
        : "#240046",
      toolbar: {
        show: false,
      },
    },
    theme: {
      mode: document.body.classList.contains("dark") ? "dark" : "light",
    },
    title: {
      text: "OHCL Chart",
      align: "left",
      style: {
        fontFamily: "Nunito",
        fontWeight: "normal",
        fontSize: "20px",
      },
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
    grid: {
      borderColor: document.body.classList.contains("dark")
        ? "#dcdcee"
        : "#35343c",
    },
  };

  return (
    <div className="outline-1 px-8 outline-secondary overflow-hidden rounded-3xl col-start-1 2xl:col-start-10 row-start-11 lg:row-start-10 2xl:row-start-7 2xl:col-span-15 col-span-24 row-span-3 md:row-span-6 lg:row-span-9 2xl:row-span-12 backdrop-blur-24 relative dark:outline-White flex items-center justify-center">
      <Texture />
      <ReactApexChart
        options={options}
        series={series}
        type="candlestick"
        height={410}
        className="w-full flex"
      />
    </div>
  );
}

export default OHCLChart;
