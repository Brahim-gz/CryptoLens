import ReactApexChart from "react-apexcharts";
import Texture from "./texture";
import { ApexOptions } from "apexcharts";
import { MdErrorOutline } from "react-icons/md";

function VolumesChart({
  total_volume,
  data,
  selectedCurrency,
  status,
  error,
}: {
  total_volume: { [key: string]: number };
  data: [number, number][];
  selectedCurrency: string;
  status: string;
  error: Error;
}) {
  if (status === "loading")
    return (
      <div className="outline-1 px-2 outline-secondary flex items-center col-start-1 row-start-18 md:row-start-20 lg:row-start-19 2xl:row-start-16 justify-center rounded-3xl col-span-24 md:col-span-12 lg:col-span-8 2xl:col-span-7 row-span-2 md:row-span-3 lg:row-span-4 2xl:row-span-7 backdrop-blur-24 relative overflow-hidden dark:outline-White">
        <Texture />
        <span className="loading loading-ring text-primary w-15"></span>
      </div>
    );
  if (status === "error") {
    return (
      <div className="outline-1 px-2 outline-secondary flex items-center col-start-1 row-start-18 md:row-start-20 lg:row-start-19 2xl:row-start-16 justify-center rounded-3xl col-span-24 md:col-span-12 lg:col-span-8 2xl:col-span-7 row-span-2 md:row-span-3 lg:row-span-4 2xl:row-span-7 backdrop-blur-24 relative overflow-hidden dark:outline-White">
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
      name: "Total Volumes Data",
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
      text: "Total Volumes Chart",
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
    colors: ["#1A120B"],
    grid: {
      borderColor: document.body.classList.contains("dark")
        ? "#dcdcee"
        : "#35343c",
    },
  };
  return (
    <>
      <div className="outline-1 px-2 outline-secondary flex items-center col-start-1 row-start-18 md:row-start-20 lg:row-start-19 2xl:row-start-16 justify-center rounded-3xl col-span-24 md:col-span-12 lg:col-span-8 2xl:col-span-7 row-span-2 md:row-span-3 lg:row-span-4 2xl:row-span-7 backdrop-blur-24 relative overflow-hidden dark:outline-White">
        <Texture />
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={270}
          className="w-full flex"
        />
      </div>
      <div className="outline-1 py-2 2xl:py-0 outline-secondary rounded-3xl col-span-24 md:col-span-12 lg:col-span-8 2xl:col-span-7 row-span-1 lg:row-span-2 col-start-1 row-start-20 md:row-start-23 lg:row-start-23 backdrop-blur-24 dark:outline-White relative overflow-hidden text-xl sm:text-2xl flex items-center justify-between px-5 lg:px-2 xl:px-5">
        <Texture />
        {total_volume[selectedCurrency]}
        <span className="font-montserrat font-light text-nowrap text-lg sm:text-xl lg:text-lg xl:text-xl">
          Total volume
        </span>
      </div>
    </>
  );
}

export default VolumesChart;
