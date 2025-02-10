import Texture from "./texture";

function VolumesChart({
  total_volume,
}: {
  total_volume: { [key: string]: number };
}) {
  return (
    <>
      <div className="outline-1 outline-secondary rounded-3xl col-span-7 row-span-7 backdrop-blur-24 relative overflow-hidden dark:outline-White">
        <Texture />
      </div>
      <div className="outline-1 outline-secondary rounded-3xl col-span-7 row-span-2 col-start-1 row-start-23 backdrop-blur-24 dark:outline-White relative overflow-hidden text-2xl flex items-center justify-between px-5">
        <Texture />
        {total_volume.usd}
        <span className="font-montserrat font-light text-xl">Total volume</span>
      </div>
    </>
  );
}

export default VolumesChart;
