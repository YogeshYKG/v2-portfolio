"use client";

import styles from "./ConfiguratorPreviewList.module.css";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/app/components/svg/Icon";

const ConfiguratorPreviewCard = ({ data, status, onActivate }) => {
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
        <Link
          href={data.sandboxPath}
          className={styles.contactBtn}
          onClick={(e) => e.stopPropagation()}
        >
          <span>View Model</span>
          <Icon name="arrow" size={24} color="currentColor" />
        </Link>
      </div>
    </div>
  );
};

export default ConfiguratorPreviewCard;
