import * as React from "react";
import { Spotify as SpotifyType } from "use-lanyard";
import SpotifyMarkEmpty from "./SpotifyMarkEmpty";

interface SpotifyProps {
  spotify?: SpotifyType;
}

const SpotifyMark: React.FC<SpotifyProps> = ({ spotify }) => {
  return (
    <>
      {spotify ? (
        <div className="mb-24 mt-10 border-4 rounded-2xl border-gray-700 w-screen flex flex-col bg-gradient-to-r from-transparent to-black">
          <div className=" border-b-4 border-gray-700 text-center font-pac text-4xl">
            Spotify
          </div>
          <div className="w-100 flex">
            <img
              alt="album_cover"
              id="album-art-img"
              src={spotify.album_art_url}
              className="w-auto h-24 border-4 border-gray-700 rounded-2xl "
            ></img>
            <div className="text-xl flex flex-col h-fit-content w-full">
              <div className="pl-4 items-center justify-start w-full h-full flex ">
                {spotify.song.length > 23
                  ? spotify.song.substring(0, 17) + "..."
                  : spotify.song}
              </div>
              <div className="text-react pl-4 border-t-4 border-gray-700 text-xl items-center justify-start flex h-full">
                {spotify.artist.length > 23
                  ? spotify.artist.replace(/;/g, ",").substring(0, 17) + "..."
                  : spotify.artist.replace(/;/g, ",")}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <SpotifyMarkEmpty />
      )}
    </>
  );
};

export default SpotifyMark;
