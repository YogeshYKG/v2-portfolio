"use client";

import { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import Icon from "@/app/components/svg/Icon";
import styles from "./FloatingLauncher.module.css";
import Tooltip from "../../tooltip/Tooltip";

const ACTIONS = [
  {
    id: "support",
    icon: { label: "like", size: 24 },
    cta: { type: "query", key: "support", value: "donate" },
    tooltipLabel: "Support My Work",
  },
  {
    id: "bugForm",
    icon: { label: "bug", size: 20 },
    image: null,
    cta: { type: "query", key: "support", value: "bug" },
    tooltipLabel: "Report Issue",
  },
  {
    id: "contactForm",
    icon: { label: "leadcapture", size: 18 },
    image: null,
    cta: { type: "query", key: "support", value: "form" },
    tooltipLabel: "Contact Form",
  },
  {
    id: "projectArchive",
    icon: { label: "configurator", size: 18 },
    image: null,
    cta: { type: "route", value: "/archive" },
    tooltipLabel: "Project Archieve",
  },
  {
    id: "arm-chair",
    icon: null,
    image: "/thumbnails/modal_thumbnail/modal1_mobile.webp",
    cta: { type: "route", value: "/3d-configurator/arm-chair" },
    tooltipLabel: "Arm Chair 3D Configurator",
  },
  {
    id: "modern-accent-chair",
    icon: null,
    image: "/thumbnails/modal_thumbnail/modal2_mobile.webp",
    cta: { type: "route", value: "/3d-configurator/mordern-accent-chair" },
    tooltipLabel: "Modern Accent Chair 3D Configurator",
  },
  {
    id: "winter-jacket",
    icon: null,
    image: "/thumbnails/modal_thumbnail/modal3_mobile.webp",
    cta: { type: "route", value: "/3d-configurator/winter-jacket" },
    tooltipLabel: "Winter Jacket 3D Configurator",
  },
];

let BASE_RADIUS = 60;
let STEP_RADIUS = 50;

const FloatingLauncher = () => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [launchMode, setLaunchMode] = useState("up");

  BASE_RADIUS = launchMode === "up" ? 60 : 28;
  STEP_RADIUS = launchMode === "up" ? 50 : 18;

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const count = ACTIONS.length;
  const radius = BASE_RADIUS + count * STEP_RADIUS;

  const handleAction = (cta) => {
    if (!cta) return;
    setOpen(false);
    setActiveIndex(null);

    if (cta.type === "route") {
      router.push(cta.value);
    }

    if (cta.type === "query") {
      const params = new URLSearchParams(searchParams);
      params.set(cta.key, cta.value);
      router.replace(`${pathname}?${params.toString()}`);
    }
  };

  return (
    <div className={styles.wrapper} onClick={() => setActiveIndex(null)}>
      {ACTIONS.map((item, index) => {
        // distribute from UP (-90°) to LEFT (-180°)
        let x = 0;
        let y = 0;

        if (launchMode === "up") {
          x = 0;
          y = -(BASE_RADIUS + index * STEP_RADIUS);
        } else {
          // radial (current behavior)
          const angleDeg = count === 1 ? -90 : -90 - (90 / (count - 1)) * index;
          const angleRad = (angleDeg * Math.PI) / 180;

          x = Math.cos(angleRad) * radius;
          y = Math.sin(angleRad) * radius;
        }
        const state =
          activeIndex === null
            ? "default"
            : activeIndex === index
            ? "active"
            : "inactive";

        return (
          <button
            key={item.id}
            className={`${styles.action} ${open ? styles.open : ""}`}
            data-state={state}
            style={{
              "--x": `${x}px`,
              "--y": `${y}px`,
              transitionDelay: `${index * 40}ms`,
              right: launchMode === "up" ? "0.5rem" : "0",
            }}
            aria-label={item.id}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            onClick={(e) => {
              e.stopPropagation();
              if (activeIndex === index) {
                handleAction(item.cta);
              } else {
                setActiveIndex(index);
              }
            }}
          >
            <Tooltip
              key={`${open}-${activeIndex === index}`}
              content={item.tooltipLabel}
            >
              {item.icon && (
                <Icon name={item.icon.label} size={item.icon.size} />
              )}
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.id}
                  fill
                  className={styles.thumb}
                />
              )}
            </Tooltip>
          </button>
        );
      })}

      <button
        className={`${styles.main} ${open ? styles.mainOpen : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
          setActiveIndex(null);
        }}
        aria-label="Open assistant"
      >
        <Icon name="reactor" size={32} paused={open} />
      </button>
    </div>
  );
};

export default FloatingLauncher;
