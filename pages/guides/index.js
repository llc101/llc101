import ListItems from "../../components/ListItems";
import Script from "next/script";
import Banner from "../../components/Banner";

function Index() {
  return (
    <div className="md:w-4/5 mx-2 md:mx-auto">
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
      <ListItems />
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

export default Index;
