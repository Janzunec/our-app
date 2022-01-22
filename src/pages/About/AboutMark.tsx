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

  let activityIndex = 0;

  activity?.activities.forEach((element, i) => {
    if (element.type == 0) {
      activityIndex = i;
    }
  });

  return (
    <div className="min-w-screen min-h-screen pt-4 tablet:pt-20 animate-fade-in">
      <Slider site={"about"} />

      <div className=" mt-7 w-screen flex flex-col text-white font-shi">
        <UserMark user={activity?.discord_user ?? undefined} />

        <ActivityMark
          activity={activity?.activities[activityIndex] ?? undefined}
        />

        <SpotifyMark spotify={activity?.spotify ?? undefined} />
      </div>
    </div>
  );
};

export default AboutMark;
