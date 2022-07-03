import MiniPlayer from "../components/MiniPlayer";
import Player from "../components/YTPlayer";
import { useRouter } from "next/router";
import Script from "next/script";
import Banner from "../components/Banner";
function Materials() {
  const router = useRouter();
  const { name, index } = router.query;

  return (
    <div className="md:w-4/5 mx-4 md:mx-auto py-8">
      <h1 className="text-3xl font-bold uppercase text-center mb-8">
        {name} GUIDE
      </h1>
      <div className="hidden md:flex justify-center items-center my-8 px-2">
        <Banner
          atOptions={{
            key: "e4e2ea2bf2913225da167d684b786412",
            format: "iframe",
            height: 90,
            width: 728,
            params: {},
          }}
        />
      </div>
      <Player watch={index} name={name} />
      <div>
        <h3 className="font-semibold text-xl mt-16">Other Materials</h3>
        <MiniPlayer name={name} />
      </div>
      <div className="p-2">
        <div id="container-9066d06eeb66c78f46d7292c1ec93e17"></div>
      </div>
      <Script
        async="async"
        data-cfasync="false"
        src="//pl17405962.profitablecpmgate.com/9066d06eeb66c78f46d7292c1ec93e17/invoke.js"
      ></Script>
    </div>
  );
}

export default Materials;
