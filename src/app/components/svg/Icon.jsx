// src/app/components/svg/Icon.jsx
"use client";
import {
  LineIcon,
  GithubIcon,
  LinkedinIcon,
  CodepenIcon,
  InstagramIcon,
  MailIcon,
  ArrowIcon,
  ClipIcon,
} from "./index";

const icons = {
  line: LineIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  codepen: CodepenIcon,
  instagram: InstagramIcon,
  mail: MailIcon,
  arrow: ArrowIcon,
  clip: ClipIcon,
};

export default function Icon({
  name,
  size = 24,
  color = "currentColor",
  width = 24,
  height = 24,
}) {
  const SvgIcon = icons[name];
  if (!SvgIcon) return null;
  return <SvgIcon size={size} color={color} width={width} height={height} />;
}
