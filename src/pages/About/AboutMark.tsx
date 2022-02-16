import React from 'react';
import Slider from '../../components/Slider';
import LightUpString from '../../components/LightUpString';
import { useLanyard } from 'use-lanyard';
import SpotifyMark from '../../components/SpotifyMark';
import UserMark from '../../components/UserMark';
import ActivityMark from '../../components/ActivityMark';
import { Activity } from 'use-lanyard';
import Custom from '../../components/customStatus';

interface AboutMarkProps {}

const AboutMark: React.FC<AboutMarkProps> = () => {
  const { data: activity } = useLanyard('290867016468791297', {
    refreshInterval: 2000,
    revalidateOnFocus: false,
    refreshWhenHidden: true,
  });

  let activityIndex = 0;

  activity?.activities.forEach((element: Activity, i: number) => {
    if (element.type == 0) {
      activityIndex = i;
    }
  });

  return (
    <div className="min-w-screen min-h-screen mb-12 z-10 pt-4 tablet:pt-20 ">
      <Slider site={'about'} />

      <div className=" mt-7 w-screen flex flex-col text-white font-shi animate-fade-in">
        <UserMark user={activity?.discord_user ?? undefined} data={activity} />
        <Custom custom={activity?.activities[0]} />

        <ActivityMark
          activity={activity?.activities[activityIndex] ?? undefined}
        />

        <SpotifyMark spotify={activity?.spotify ?? undefined} />
        <div className="text-left text-2xl mx-8 mb-12 mt-10 p-5 border-secondary border-2 rounded-2xl tablet:mx-16 tablet:p-8 tablet:text-3xl">
          <p className="mb-4">
            I am a junior developer focused mainly on backend, but frontend is
            not my major weakness. I am currently finishing my 3rd year of high
            school.
          </p>
          <p>I'm passionate about most technologies, backend and frontend.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMark;
