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
  ErrorIcon,
  ChatbotIcon,
  PlaystoreIcon,
  LanguageIcon,
  UserAddIcon,
  GlobeIcon,
  ConfiguratorIcon,
  CurrencyExchangeIcon,
  TimerIcon,
  BugIcon,
  SettingIcon,
  LikeIcon,
  BeatingHeartIcon,
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
  error: ErrorIcon,
  chatbot: ChatbotIcon,
  playstore: PlaystoreIcon,
  language: LanguageIcon,
  leadcapture: UserAddIcon,
  globe: GlobeIcon,
  configurator: ConfiguratorIcon,
  currency: CurrencyExchangeIcon,
  timer: TimerIcon,
  bug: BugIcon,
  setting: SettingIcon,
  like: LikeIcon,
  reactor: BeatingHeartIcon,
};

export default function Icon({
  name,
  size = 24,
  color = "currentColor",
  width = 24,
  height = 24,
  rotate = null,
  paused = false,
}) {
  const SvgIcon = icons[name];
  if (!SvgIcon) return null;
  return (
    <SvgIcon
      size={size}
      color={color}
      width={width}
      height={height}
      rotate={rotate}
      paused={paused}
    />
  );
}
