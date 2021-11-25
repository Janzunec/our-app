import * as React from "react";
import { Activity as ActivityType } from "use-lanyard";

interface ActivityMarkProps {
  activity?: ActivityType;
}

const ActivityMark: React.FC<ActivityMarkProps> = ({ activity }) => {
  return (
    <div className="flex flex-row w-screen border-4 border-gray-700 rounded-2xl p-2 mt-16">
      {activity?.type == 0 &&
      activity.application_id &&
      activity?.assets?.large_image ? (
        <>
          <img
            src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png`}
            alt="activity image"
            className="w-auto h-20 rounded-full border-2 border-gray-600"
          />

          <div className="flex flex-col w-full">
            <div className="pl-2 items-center h-full flex w-full text-sm border-2 rounded-full border-gray-700">
              {activity?.details}
            </div>
            <div className="pl-2 items-center h-full flex w-full text-sm border-2 rounded-full border-gray-700">
              {activity?.state}
            </div>
          </div>
        </>
      ) : (
        <div>Mark is currently not doing anything.</div>
      )}
    </div>
  );
};

export default ActivityMark;
