import * as React from 'react';
import { Spotify as SpotifyType } from 'use-lanyard';

interface SpotifyProps {
  spotify?: SpotifyType;
}

const SpotifyMark: React.FC<SpotifyProps> = ({ spotify }) => {
  return (
    <>
      {spotify ? (
        <div className="mt-10 border-4 rounded-2xl border-gray-700 min-w-screen flex flex-col bg-gradient-to-r from-transparent to-black tablet:w-max tablet:m-auto tablet:mt-8 ">
          <div className="border-b-4 border-gray-700 text-center font-pac text-4xl tablet:py-2 tablet:text-5xl tablet:">
            Spotify
          </div>
          <div className="w-max flex">
            <img
              alt="album_cover"
              id="album-art-img"
              src={spotify.album_art_url}
              className="w-auto h-28 border-4 border-gray-700 rounded-2xl tablet:h-32"
            ></img>
            <div className="text-xl flex flex-col h-max w-full tablet:text-3xl">
              <div className="pr-16 items-center justify-center w-full h-full flex tablet:px-12 tablet:py-3">
                {spotify.song.length > 23
                  ? spotify.song.substring(0, 17) + '...'
                  : spotify.song}
              </div>
              <div className="text-secondary border-t-4 pr-16 border-gray-700 text-xl justify-center flex h-full tablet:px-12 tablet:py-3">
                {spotify.artist.length > 23
                  ? spotify.artist.replace(/;/g, ',').substring(0, 17) + '...'
                  : spotify.artist.replace(/;/g, ',')}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-24 mt-10 border-4 rounded-2xl border-gray-700 w-screen flex flex-col bg-gradient-to-r from-transparent to-black tablet:w-max tablet:m-auto tablet:mt-8">
          <div className="border-b-4 border-gray-700 text-center font-pac text-4xl tablet:py-2 tablet:text-5xl">
            Spotify
          </div>
          <div className="w-100 flex">
            <div className="text-xl flex flex-col h-fit-content w-full tablet:text-3xl">
              <div className="px-4 py-6 items-center justify-start w-full h-full flex tablet:p-4">
                Mark is currently not listening to anything.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SpotifyMark;
