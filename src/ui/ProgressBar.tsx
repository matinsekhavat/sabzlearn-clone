import React from "react";

interface ProgressBarProps {
  height?: number;
  progress?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  height = 20,
  progress = 0,
}) => {
  const progressWidth = `${(progress / 100) * 100}%`;

  return (
    <div
      style={{ width: progressWidth, height, position: "relative" }}
      className="overflow-hidden rounded-xl"
    >
      <div style={{ width: progressWidth, height, backgroundColor: "#ddd" }} />
      <div
        style={{
          width: progressWidth,
          height,
        }}
        className="absolute inset-0 bg-green-500 "
      />
    </div>
  );
};

export default ProgressBar;
