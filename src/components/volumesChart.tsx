import ReactApexChart from "react-apexcharts";
import Texture from "./texture";
import { ApexOptions } from "apexcharts";

function VolumesChart({
  total_volume,
  data,
  selectedCurrency,
}: {
  total_volume: { [key: string]: number };
  data: [number, number][];
  selectedCurrency: string;
}) {
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
      <div className="outline-1 outline-secondary flex items-center justify-center rounded-3xl col-span-7 row-span-7 backdrop-blur-24 relative overflow-hidden dark:outline-White">
        <Texture />
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={270}
          width={500}
        />
      </div>
      <div className="outline-1 outline-secondary rounded-3xl col-span-7 row-span-2 col-start-1 row-start-23 backdrop-blur-24 dark:outline-White relative overflow-hidden text-2xl flex items-center justify-between px-5">
        <Texture />
        {total_volume[selectedCurrency]}
        <span className="font-montserrat font-light text-xl">Total volume</span>
      </div>
    </>
  );
}

export default VolumesChart;
