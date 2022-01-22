import * as React from "react";
import { Activity as ActivityType } from "use-lanyard";

interface ActivityMarkProps {
  activity?: ActivityType;
}

const ActivityMark: React.FC<ActivityMarkProps> = ({ activity }) => {
  return (
    <>
      {activity?.type == 0 &&
      activity.application_id &&
      activity?.assets?.large_image ? (
        <>
          <div className="flex flex-row w-screen border-4 border-gray-700 rounded-2xl p-2 mt-16 tablet:w-max m-auto">
            <img
              src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png`}
              alt="activity image"
              className="w-auto h-24 m-auto rounded-full border-2 border-gray-600 tablet:h-32"
            />

            <div className="flex flex-col w-full">
              <div className="text-xl pl-2 items-center h-full flex w-full text-sm border-2 rounded-full border-gray-700 tablet:text-2xl p-3 px-10 pl-6">
                {activity?.details}
              </div>
              {activity?.state ? (
                <div className="text-xl pl-2 items-center h-full flex w-full text-sm border-2 rounded-full border-gray-700 tablet:text-2xl p-3 px-10 pl-6">
                  {activity?.state}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ActivityMark;
