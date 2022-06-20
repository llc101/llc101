import Link from "next/link";
import { Videos } from "../utils/guides";

function MiniPlayer({ tuts, name }) {
  tuts = Videos.get(name);
  return tuts !== undefined ? (
    <div className="flex flex-col lg:grid grid-cols-3 gap-x-2 gap-y-4 my-8">
      {tuts.map((tut, index) => (
        <Watch key={index} tut={tut} name={name} id={index} />
      ))}
    </div>
  ) : (
    <div className="p-16 text-center text-gray-300 font-bold text-2xl">
      <p>No Data Available</p>
    </div>
  );
}

function Watch({ tut, name, id }) {
  //   console.log(tut);
  return (
    <Link href={{ pathname: "/materials", query: { name: name, index: id } }}>
      <div className="relative">
        <iframe
          className="hidden lg:block h-[200px] w-full"
          src={tut.miniLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <iframe
          className="lg:hidden"
          width="100%"
          height="200"
          src={tut.miniLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <div className="absolute inset-0 cursor-pointer"></div>
      </div>
    </Link>
  );
}

MiniPlayer.defaultProps = {
  tuts: [
    "https://www.youtube-nocookie.com/embed/BcLNfwF04Kw?controls=0&disablekb=1&modestbranding=1&rel=0",
    "https://www.youtube-nocookie.com/embed/vxqBm6_0vyk?controls=0&disablekb=1&modestbranding=1&rel=0",
    "https://www.youtube-nocookie.com/embed/BUCiSSyIGGU?controls=0&disablekb=1&modestbranding=1&rel=0",
  ],
};

export default MiniPlayer;
