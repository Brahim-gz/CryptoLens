import ReactApexChart from "react-apexcharts";
import Texture from "./texture";
import { ApexOptions } from "apexcharts";
import { MdErrorOutline } from "react-icons/md";

function MarketCapsChart({
  data,
  status,
  error,
}: {
  data: [number, number][];
  status: string;
  error: Error;
}) {
  if (status === "loading")
    return (
      <div className="outline-1 px-2 outline-secondary rounded-3xl col-start-1 md:col-start-13 lg:col-start-17 2xl:col-start-14 row-start-16 md:row-start-17 lg:row-start-19 flex items-center justify-center col-span-24 md:col-span-12 lg:col-span-8 2xl:col-span-6 row-span-2 md:row-span-3 lg:row-span-4 2xl:row-span-6 backdrop-blur-24 relative overflow-hidden dark:outline-White">
        <Texture />
        <span className="loading loading-ring text-primary w-12"></span>
      </div>
    );
  if (status === "error") {
    return (
      <div className="outline-1 px-2 outline-secondary rounded-3xl col-start-1 md:col-start-13 lg:col-start-17 2xl:col-start-14 row-start-16 md:row-start-17 lg:row-start-19 flex items-center justify-center col-span-24 md:col-span-12 lg:col-span-8 2xl:col-span-6 row-span-2 md:row-span-3 lg:row-span-4 2xl:row-span-6 backdrop-blur-24 relative overflow-hidden dark:outline-White">
        <Texture />
        <div
          className="tooltip tooltip-bottom text-Black-50 dark:text-White"
          data-tip={error.message}
        >
          <MdErrorOutline size={40} className="fill-Red" />
        </div>
      </div>
    );
  }

  const series = [
    {
      name: "Market Caps Data",
      data: data.map((x) => ({
        x: new Date(x[0]),
        y: x[1],
      })),
    },
  ];
  const options: ApexOptions = {
    chart: {
      type: "area",
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
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    theme: {
      mode: document.body.classList.contains("dark") ? "dark" : "light",
    },
    subtitle: {
      text: "Market Caps Chart",
      align: "left",
      style: {
        fontFamily: "Nunito",
        fontWeight: "normal",
        fontSize: "16px",
      },
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      opposite: true,
      labels: {
        formatter: (value) => {
          if (value >= 1000000) {
            return (value / 1000000).toFixed(1) + "M";
          } else if (value >= 1000) {
            return (value / 1000).toFixed(1) + "K";
          } else {
            return value.toString();
          }
        },
      },
    },
    legend: {
      horizontalAlign: "left",
    },
    colors: ["#344CB7"],
    grid: {
      borderColor: document.body.classList.contains("dark")
        ? "#dcdcee"
        : "#35343c",
    },
  };
  return (
    <div className="outline-1 px-2 outline-secondary rounded-3xl col-start-1 md:col-start-13 lg:col-start-17 2xl:col-start-14 row-start-16 md:row-start-17 lg:row-start-19 flex items-center justify-center col-span-24 md:col-span-12 lg:col-span-8 2xl:col-span-6 row-span-2 md:row-span-3 lg:row-span-4 2xl:row-span-6 backdrop-blur-24 relative overflow-hidden dark:outline-White">
      <Texture />
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={230}
        className="w-full flex"
      />
    </div>
  );
}

export default MarketCapsChart;
