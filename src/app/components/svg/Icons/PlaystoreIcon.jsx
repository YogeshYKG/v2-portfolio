"use client";

const PlaystoreIcon = ({ size = 24, color = "currentColor", className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_4418_4084)">
        <path
          d="M21.3995 12.9508L16.8795 15.2108L13.6895 12.0208L16.9095 8.80078L21.3995 11.0508C22.1895 11.4408 22.1895 12.5608 21.3995 12.9508Z"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 9.06025V3.07026C2 2.27026 2.83 1.76024 3.55 2.11024L16.92 8.80024L13.7 12.0202L4.12 21.6003L3.54 21.8903C2.83 22.2403 2 21.7303 2 20.9303V13.5703"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.8891 15.2095L4.11914 21.5995L13.6991 12.0195L16.8891 15.2095Z"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.6998 12.0201L4.08984 2.41016"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.9206 15.2409L16.8906 15.2109"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4418_4084">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PlaystoreIcon;
