import React from "react";

interface LightUpStringProps {
  content: string;
  color: string;
}

const LightUpString: React.FC<LightUpStringProps> = ({ content, color }) => {
  return (
    <>
      {content.split("").map((char) => (
        <span className={color}>{char}</span>
      ))}
    </>
  );
};

export default LightUpString;
