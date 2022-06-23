import { useEffect, useRef } from "react";

const Banner = () => {
  const banner = useRef();

  const atOptions = {
    key: "82a08b05a02857034dd70940d6e862a0",
    format: "iframe",
    height: 60,
    width: 468,
    params: {},
  };

  useEffect(() => {
    if (!banner.current.firstChild) {
      const conf = document.createElement("script");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `//www.topdisplayformat.com/${atOptions.key}/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      if (banner.current) {
        banner.current.append(conf);
        banner.current.append(script);
      }
    }
  }, []);
  return <div ref={banner}></div>;
};

export default Banner;
