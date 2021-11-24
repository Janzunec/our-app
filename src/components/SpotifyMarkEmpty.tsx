import * as React from "react";
import { FaSpotify } from "react-icons/fa";

const SpotifyMarkEmpty: React.FC = () => {
  return (
    <div className="mb-24 mt-10 border-4 rounded-2xl border-gray-700 w-screen flex flex-col bg-gradient-to-r from-transparent to-black">
      <div className=" border-b-4 border-gray-700 text-center font-pac text-4xl">
        Spotify
      </div>
      <div className="w-100 flex">
        <div className="text-xl flex flex-col h-fit-content w-full">
          <div className="px-4 py-6 items-center justify-start w-full h-full flex ">
            Mark is currently not listening to anything... or an ad
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotifyMarkEmpty;
