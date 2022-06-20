import MiniPlayer from "../components/MiniPlayer";
import Player from "../components/YTPlayer";
import { useRouter } from "next/router";
import { Videos } from "../utils/guides";
// import { useState } from "react";
function Materials() {
  const router = useRouter();
  const { name, index } = router.query;

  console.log(Videos.get(name));

  return (
    <div className="md:w-4/5 mx-4 md:mx-auto py-8">
      <h1 className="text-3xl font-bold uppercase text-center mb-8">
        {name} GUIDE
      </h1>
      <Player watch={index} name={name} />
      <div>
        <h3 className="font-semibold text-xl mt-16">Other Materials</h3>
        <MiniPlayer name={name} />
      </div>
    </div>
  );
}

export default Materials;
