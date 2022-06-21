import BuildSVG from "../public/images/undraw_building_websites_i78t.svg";
import Image from "next/image";

function Building() {
  return (
    <div className="h-full space-y-8 md:space-y-16">
      <div className="relative mt-24 md:mt-16 flex justify-center items-center">
        <img
          src="/images/undraw_building_websites_i78t.svg"
          className="md:h-[400px] h-[200px]"
        />
      </div>
      <h1 className="text-center font-bold text-2xl md:text-4xl text-gray-400">
        Under Construction
      </h1>
    </div>
  );
}

export default Building;
