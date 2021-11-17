import * as React from "react";
import { Activity as ActivityType } from "use-lanyard";
import { useLanyard } from "use-lanyard";

interface CustomProps {
  custom?: ActivityType;
}

const Custom: React.FC<CustomProps> = ({ custom }) => {
  return (
    <div className=" py-2 px-3 flex flex-row justify-between text-2xl  border-2 border-gray-600 rounded-full">
      {custom?.emoji?.name}
      {custom?.state}
    </div>
  );
};

export default Custom;
