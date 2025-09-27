"use client";

const TimerIcon = ({ size = 24, color = "currentColor", className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_4418_3879)">
        <path
          d="M12 8V13"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 2H15"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 8C3.9 9.46 3.25 11.28 3.25 13.25C3.25 18.08 7.17 22 12 22C16.83 22 20.75 18.08 20.75 13.25C20.75 8.42 16.83 4.5 12 4.5C10.74 4.5 9.55 4.76 8.47 5.24"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4418_3879">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TimerIcon;
