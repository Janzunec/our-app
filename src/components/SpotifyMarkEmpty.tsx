import * as React from "react";
import "../spotify.css";

const SpotifyMarkEmpty: React.FC = () => {
  return (
    <>
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
          <div className="album-art"></div>
          <div className="track">
            <div className="song-name">
              <div className="not-listening">
                Mark is currently not listening to anything... or an ad
              </div>
            </div>
            <div className="artist"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpotifyMarkEmpty;
