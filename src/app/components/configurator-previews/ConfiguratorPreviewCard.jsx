"use client";

import { useRouter } from "next/navigation";
import styles from "./ConfiguratorPreviewList.module.css";
import Image from "next/image";
import Link from "next/link";

const ConfiguratorPreviewCard = ({ data, status, onActivate }) => {
  const navigate = useRouter();
  return (
    <div
      className={`${styles.card} ${
        status ? styles.activeCard : styles.inactiveCard
      }`}
      onMouseEnter={onActivate} // desktop
      onClick={onActivate} // mobile / tablet
    >
      <div className={styles.thumbnailWrapper}>
        <Image
          src={data.thumbnail_mobile}
          fill
          alt={`${data.title} mobile`}
          className={`${styles.thumbnail} ${
            status ? styles.hidden : styles.visible
          }`}
        />

        <Image
          src={data.thumbnail_desktop}
          fill
          alt={`${data.title} desktop`}
          className={`${styles.thumbnail} ${
            status ? styles.visible : styles.hidden
          }`}
        />
      </div>

      <div className={styles.content}>
        <button
          className={styles.ctaBtn}
          onClick={(e) => {
            e.stopPropagation(); // important
            navigate.push(data.sandboxPath);
          }}
        >
          {`View Model`}
        </button>
      </div>
    </div>
  );
};

export default ConfiguratorPreviewCard;
