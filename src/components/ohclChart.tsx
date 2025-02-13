import ReactApexChart from "react-apexcharts";
import Texture from "./texture";
import { ApexOptions } from "apexcharts";
import { getOHCLData } from "../dataFetching";
import { useQuery } from "@tanstack/react-query";

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

  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;

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
    <div className="outline-1 outline-secondary rounded-3xl col-start-10 row-start-7 col-span-15 row-span-12 backdrop-blur-24 relative overflow-hidden dark:outline-White flex items-center justify-center">
      <Texture />
      <ReactApexChart
        options={options}
        series={series}
        type="candlestick"
        width={1000}
        height={400}
      />
    </div>
  );
}

export default OHCLChart;
