"use client";
const ErrorIcon = ({ size = 20, color = "currentColor", className = "" }) => {
  return (
    <img
      src={`/svg/404.svg`}
      width={size}
      height={size}
      alt="404-icon"
    />
  );
};

export default ErrorIcon;
