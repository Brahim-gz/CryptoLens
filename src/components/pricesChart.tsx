import { ApexOptions } from "apexcharts";
import Texture from "./texture";
import ReactApexChart from "react-apexcharts";

function PricesChart({ data }: { data: [number, number][] }) {
  const series = [
    {
      name: "Prices Data",
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
      text: "Prices Chart",
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
          return Math.floor(value).toString();
        },
      },
    },
    legend: {
      horizontalAlign: "left",
    },
    colors: ["#febc5a"],
    grid: {
      borderColor: document.body.classList.contains("dark")
        ? "#dcdcee"
        : "#35343c",
    },
  };
  return (
    <div className="outline-1 outline-secondary rounded-3xl col-start-8 row-start-19 flex items-center justify-center col-span-6 row-span-6 backdrop-blur-24 relative overflow-hidden dark:outline-White">
      <Texture />
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={230}
        width={420}
      />
    </div>
  );
}

export default PricesChart;
