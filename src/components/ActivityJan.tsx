import React from 'react';
import { useLanyard } from 'use-lanyard';
import LightUpString from './LightUpString';

interface ActivityJanProps {}

const ActivityJan: React.FC<ActivityJanProps> = () => {
  const { data: activity } = useLanyard('409386496878182401', {
    refreshInterval: 5000,
    revalidateOnFocus: false,
    refreshWhenHidden: true,
  });
  const username = `${activity?.discord_user.username}`;
  const userTag = `#${activity?.discord_user.discriminator}`;
  const spotify =
    activity?.activities[0]?.name === 'Spotify' ? activity?.spotify : '';

  const visualStudio =
    activity?.activities[0]?.name === 'Visual Studio Code'
      ? activity?.activities[0]
      : '';

  const otherApps =
    activity?.activities[0]?.name !== 'Spotify' &&
    activity?.activities[0]?.name !== 'Visual Studio Code'
      ? activity?.activities[0]
      : '';

  return (
    <div className=" max-w-activityTable tablet:max-w-lg h-auto flex flex-col">
      <div className="w-auto h-10 flex flex-row justify-center text-lg text-primary border-2 border-b-0 border-gray-500 rounded-t-lg">
        <div className="text-2xl">
          <LightUpString content={username} color="topurple" />
        </div>
        <LightUpString content={userTag} color="topurple" />
      </div>
      {activity?.activities[0] && (
        <div className="w-full h-22 grid grid-cols-4 border-2 border-gray-500 rounded-b-lg gap-0 text-white">
          <div className="">
            {spotify && (
              <img
                src={spotify?.album_art_url}
                title={spotify.album}
                className="w-22 h-22 rounded-bl-lg  cursor-help"
              />
            )}
            {visualStudio && (
              <img
                src={`https://cdn.discordapp.com/app-assets/${visualStudio.application_id}/${visualStudio.assets?.large_image}.png`}
                title={visualStudio.assets?.large_text}
                className="w-22 h-22 rounded-bl-lg  cursor-help"
              />
            )}
          </div>
          <div className="w-auto col-span-3 flex flex-col gap-0 border-l-2 border-gray-500 text-xl">
            <div className="w-auto h-11 border-b-2 border-gray-500 flex items-center px-2 font-bold">
              {spotify && (
                <div className="w-auto truncate ... hover:underline">
                  <a
                    href={`https://open.spotify.com/track/${spotify.track_id}`}
                    target="blank"
                  >
                    {spotify.song}
                  </a>
                </div>
              )}
              {visualStudio && visualStudio?.name}
              {otherApps && (
                <div className="  truncate ...">{otherApps?.name}</div>
              )}
            </div>
            <div className="w-auto h-10 flex items-center px-2">
              {spotify && (
                <div className="  truncate ...">
                  {spotify?.artist.replaceAll(';', ',')}
                </div>
              )}
              {visualStudio && (
                <div className="  truncate ...">{visualStudio?.details}</div>
              )}
              {otherApps && (
                <div className=" truncate ... ">{otherApps.state}</div>
              )}
            </div>
          </div>
        </div>
      )}
      {!activity?.activities[0] && (
        <div className="text-white text-xl text-center w-full h-12 border-2 rounded-b-lg border-gray-500 px-2">
          Currently not at my computer...
        </div>
      )}
    </div>
  );
};

export default ActivityJan;
