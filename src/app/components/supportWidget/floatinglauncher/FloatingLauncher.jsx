"use client";

import { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import Icon from "@/app/components/svg/Icon";
import styles from "./FloatingLauncher.module.css";

const ACTIONS = [
  {
    id: "contactForm",
    icon: "leadcapture",
    image: null,
    cta: { type: "query", key: "support", value: "form" },
  },
  {
    id: "projectArchive",
    icon: "configurator",
    image: null,
    cta: { type: "route", value: "/archive" },
  },
  {
    id: "arm-chair",
    icon: null,
    image: "/thumbnails/modal_thumbnail/modal1_mobile.webp",
    cta: { type: "route", value: "/3d-configurator/arm-chair" },
  },
  {
    id: "modern-accent-chair",
    icon: null,
    image: "/thumbnails/modal_thumbnail/modal2_mobile.webp",
    cta: { type: "route", value: "/3d-configurator/mordern-accent-chair" },
  },
  {
    id: "winter-jacket",
    icon: null,
    image: "/thumbnails/modal_thumbnail/modal3_mobile.webp",
    cta: { type: "route", value: "/3d-configurator/winter-jacket" },
  },
];

const BASE_RADIUS = 28;
const STEP_RADIUS = 18;

const FloatingLauncher = () => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

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
    <div
      className={styles.wrapper}
      onClick={() => setActiveIndex(null)}
    >
      {ACTIONS.map((item, index) => {
        // distribute from UP (-90°) to LEFT (-180°)
        const angleDeg =
          count === 1 ? -90 : -90 - (90 / (count - 1)) * index;
        const angleRad = (angleDeg * Math.PI) / 180;

        const x = Math.cos(angleRad) * radius;
        const y = Math.sin(angleRad) * radius;

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
            {item.icon && <Icon name={item.icon} size={18} />}
            {item.image && (
              <Image
                src={item.image}
                alt={item.id}
                fill
                className={styles.thumb}
              />
            )}
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
        <Icon name="clip" size={22} />
      </button>
    </div>
  );
};

export default FloatingLauncher;
