import React from "react";
import Slider from "../../components/Slider";
import LightUpString from "../../components/LightUpString";
import { useLanyard } from "use-lanyard";
import SpotifyMark from "../../components/SpotifyMark";
import UserMark from "../../components/UserMark";

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

      <div className=" mt-7 w-screen flex flex-col text-white font-shi border-2 border-gray-600">
        <UserMark user={activity?.discord_user ?? undefined} />
        {/* <SpotifyMark spotify={activity?.spotify ?? undefined} /> */}
      </div>
    </div>
  );
};

export default AboutMark;
