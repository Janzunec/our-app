import React from "react";
import Slider from "../../components/Slider";
import LightUpString from "../../components/LightUpString";
import { useLanyard } from "use-lanyard";
import SpotifyMark from "../../components/SpotifyMark";
import UserMark from "../../components/UserMark";
import ActivityMark from "../../components/ActivityMark";

interface AboutMarkProps {}

const AboutMark: React.FC<AboutMarkProps> = () => {
  const { data: activity } = useLanyard("290867016468791297", {
    refreshInterval: 2000,
    revalidateOnFocus: false,
    refreshWhenHidden: true,
  });

  return (
    <div className="min-w-screen min-h-screen pt-4 tablet:pt-20">
      <Slider site={"about"} />

      <div className=" mt-7 w-screen flex flex-col text-white font-shi">
        <UserMark user={activity?.discord_user ?? undefined} />

        <ActivityMark activity={activity?.activities[2] ?? undefined} />

        <div className=" text-3xl flex flex-col font-dc mt-8">
          <div className="w-min h-20 text-6xl">"</div>
          <div className="pl-4">
            The more I learn, the more I realize how much I don't know.
          </div>
          <div className="w-min h-20 text-6xl">"</div>
        </div>

        <SpotifyMark spotify={activity?.spotify ?? undefined} />
      </div>
    </div>
  );
};

export default AboutMark;
