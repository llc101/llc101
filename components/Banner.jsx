import { useEffect, useRef } from "react";

const Banner = ({ atOptions }) => {
  const banner = useRef();

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
