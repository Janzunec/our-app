import * as React from "react";
import { Spotify as SpotifyType } from "use-lanyard";
import SpotifyMarkEmpty from "./SpotifyMarkEmpty";
import "../spotify.css";

interface SpotifyProps {
  spotify?: SpotifyType;
}

const SpotifyMark: React.FC<SpotifyProps> = ({ spotify }) => {
  return (
    <>
      {spotify ? (
        <div className="container">
          <div className="title">
            <img
              src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Spotify-256.png"
              alt="spotify-icon"
              className="spotify-icon"
            />
            <div className="title-name">Spotify</div>
          </div>
          <div className="listening-to">
            <img
              alt="album_cover"
              id="album-art-img"
              src={spotify.album_art_url}
            ></img>
            <div className="track">
              <div className="song-title">
                <div className="song-name">
                  {spotify.song.length > 23
                    ? spotify.song.substring(0, 22) + "..."
                    : spotify.song}
                  {spotify.song.length > 23 ? (
                    <div className="tooltiptext">{spotify.song}</div>
                  ) : null}
                </div>
              </div>
              <div className="artist">
                {spotify.artist.length > 23
                  ? spotify.artist.replace(/;/g, ",").substring(0, 22) + "..."
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
