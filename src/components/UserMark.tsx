import * as React from "react";
import { DiscordUser as DiscordUserType } from "use-lanyard";
import { useLanyard } from "use-lanyard";
import Custom from "./customStatus";

interface UserMarkProps {
  user?: DiscordUserType;
}

const UserMark: React.FC<UserMarkProps> = ({ user }) => {
  const { data: activity } = useLanyard("290867016468791297", {
    refreshInterval: 2000,
    revalidateOnFocus: false,
    refreshWhenHidden: true,
  });

  return (
    <div className="min-w-screen flex flex-col items-center text-3xl">
      <div className="pl-10 flex flex-row w-screen  border-2 border-gray-600 rounded-3xl">
        <div className="text-4xl">{user?.username}</div>
        {"#" + user?.discriminator}
      </div>
      <Custom custom={activity?.activities[0] ?? undefined} />
    </div>
  );
};

export default UserMark;
