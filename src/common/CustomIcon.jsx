import React from "react";


const CustomIcon = ({ iconType, size, color, margin }) => {
  
  return (
    <svg
      className="icon"
      style={{ width: size, height: size, fill: color, margin: margin }}
    >
      <use xlinkHref={iconType} />
    </svg>
  );
};

export { CustomIcon };