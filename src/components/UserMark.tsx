import * as React from "react";
import { DiscordUser as DiscordUserType } from "use-lanyard";
import { Data as DataType } from "use-lanyard";
import { useLanyard } from "use-lanyard";
import Custom from "./customStatus";

interface UserMarkProps {
  user?: DiscordUserType;
  data?: DataType;
}

const UserMark: React.FC<UserMarkProps> = ({ user, data }) => {
  const { data: activity } = useLanyard("290867016468791297", {
    refreshInterval: 2000,
    revalidateOnFocus: false,
    refreshWhenHidden: true,
  });

  return (
    <>
      {data?.discord_status == "online" ? (
        <div className="min-w-screen flex flex-col items-center text-3xl tablet:items-left">
          <div className="justify-center items-center py-3 flex flex-row w-screen border-4 border-green-500 rounded-3xl shadow-[0_0_20px_20px_rgba(31, 239, 24, 0.65)] bg-gradient-to-br from-transparent to-darkblue tablet:w-max px-12 py-6">
            <div className="text-4xl ml-2 tablet:text-5xl">
              {user?.username}
            </div>
            <div className="mb-4">{"#" + user?.discriminator}</div>
            <img
              alt="pfp"
              src={
                "https://cdn.discordapp.com/avatars/290867016468791297/" +
                user?.avatar +
                ".jpg"
              }
              className="w-auto h-24 ml-2 border-4 border-gray-500 rounded-2xl tablet:h-28"
            ></img>
          </div>
        </div>
      ) : (
        <div className="min-w-screen flex flex-col items-center text-3xl tablet:items-left">
          <div className="justify-center items-center py-3 flex flex-row w-screen  border-4 border-gray-600 rounded-3xl bg-gradient-to-br from-transparent to-darkblue tablet:w-max px-12 py-6">
            <div className="text-4xl ml-2 tablet:text-5xl">
              {user?.username}
            </div>
            <div className="mb-4">{"#" + user?.discriminator}</div>
            <img
              alt="pfp"
              src={
                "https://cdn.discordapp.com/avatars/290867016468791297/" +
                user?.avatar +
                ".jpg"
              }
              className="w-auto h-24 ml-2 border-4 border-gray-500 rounded-2xl tablet:h-28"
            ></img>
          </div>
        </div>
      )}
    </>
  );
};

export default UserMark;
