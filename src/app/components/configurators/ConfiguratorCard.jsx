"use client";

import styles from "./Configurators.module.css";
import Image from "next/image";

const ConfiguratorCard = ({ data, status, onActivate }) => {
  return (
    <div
      className={`${styles.card} ${status ? styles.activeCard : styles.inactiveCard}`}
      onMouseEnter={onActivate}  // or replace with onClick for click behavior
    >
      <div className={styles.thumbnailWrapper}>
        <Image
          src={data.thumbnail}
          fill
          alt={data.title}
          className={styles.thumbnail}
        />
      </div>

      {status && (
        <div className={styles.content}>
          <h2>{data.title}</h2>
          <p>{data.contributions}</p>
        </div>
      )}
    </div>
  );
};

export default ConfiguratorCard;
