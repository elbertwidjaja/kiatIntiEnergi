import React from "react";

const ArrowRight = ({ color = "#000000" }) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        d="M10.023 19.355 15.367 14l-5.344-5.355L11.668 7l7 7-7 7-1.645-1.645Z"
      />
    </svg>
  );
};

export default ArrowRight;
