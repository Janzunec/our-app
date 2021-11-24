import * as React from "react";
import { Activity as ActivityType } from "use-lanyard";
import { useLanyard } from "use-lanyard";

interface CustomProps {
  custom?: ActivityType;
}

const Custom: React.FC<CustomProps> = ({ custom }) => {
  return (
    <div className="bg-gradient-to-r from-transparent to-darkblue py-2 px-4 flex flex-row justify-between text-2xl  border-4 border-gray-600 rounded-full">
      {custom?.emoji?.name}
      {custom?.state}
    </div>
  );
};

export default Custom;
