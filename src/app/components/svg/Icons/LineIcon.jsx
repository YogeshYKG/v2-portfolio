"use client";

export default function LineIcon({
  width = 24,     // how wide the line stretches
  height = 24,    // total SVG height
  strokeWidth = 1.5,
  color = "currentColor",
}) {
  const y = height / 2; // center line vertically
  const left = strokeWidth * 2.5;
  const right = width - strokeWidth * 2.5;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <path
        d={`M${left} ${y} H${right}`}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}
