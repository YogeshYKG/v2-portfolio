"use client";
const ArrowIcon = ({ size = 20, color = "currentColor", rotate = null }) => {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 23 24"
      fill={color}
      style={{
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        transformOrigin: "center",
        transition: "transform 0.2s ease",
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
      />
    </svg>
  );
};

export default ArrowIcon;
