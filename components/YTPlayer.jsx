import React from "react";
import { Videos } from "../utils/guides";

function Player({ watch = 0, tuts, name }) {
  // console.log(tuts);
  tuts = Videos.get(name);
  return tuts !== undefined ? (
    <>
      <div className="hidden lg:flex flex-col justify-center items-center border-b-2 border-gray-300 pb-16">
        <iframe
          width="1000"
          height="600"
          src={tuts[watch].link}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <div className="w-4/5 mx-auto flex flex-col justify-center items-center space-y-4 mt-8">
          <div>
            <p className="text-center text-xl font-bold">
              Please don&apos;t just watch, open your workspace and go along
            </p>
          </div>
          <a
            href={tuts[watch].channel}
            className="bg-cyan-500 px-4 py-2 text-lg rounded-lg font-semibold text-white"
          >
            Subscribe to <span>{tuts[watch].creator}</span> for more tutorials
          </a>
        </div>
      </div>
      <div className="lg:hidden flex flex-col justify-center items-center border-b-2 border-gray-300 pb-8 md:pb-16">
        <iframe
          className="md:h-[400px]"
          width="100%"
          height="350"
          src={tuts[watch].link}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <div className="md:w-4/5 mx-auto flex flex-col justify-center items-center space-y-4 mt-8">
          <div>
            <p className="text-center md:text-xl font-bold">
              Please don&apos;t just watch; open your workspace and go along.
            </p>
          </div>
          <a
            href={tuts[watch].channel}
            className="bg-cyan-500 px-4 py-2 md:text-left text-center md:text-lg text-sm rounded-lg font-semibold text-white"
          >
            Subscribe to <span>{tuts[watch].creator}</span> for more tutorials
          </a>
        </div>
      </div>
    </>
  ) : (
    <div className="p-16 h-[500px] text-center text-gray-300 font-bold text-2xl">
      <p>No Data Available</p>
    </div>
  );
}

// Player.defaultProps = {
//   tuts: [
//     "https://www.youtube-nocookie.com/embed/BcLNfwF04Kw?disablekb=1&modestbranding=1&rel=0",
//     "https://www.youtube-nocookie.com/embed/vxqBm6_0vyk?disablekb=1&modestbranding=1&rel=0",
//     "https://www.youtube-nocookie.com/embed/BUCiSSyIGGU?disablekb=1&modestbranding=1&rel=0",
//   ],
// };

export default Player;
