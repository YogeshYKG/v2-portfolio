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
      onMouseEnter={onActivate} // or replace with onClick for click behavior
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

          <Link href={`${data.sandboxPath}`}>
            <button>Go to Sandbox</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ConfiguratorPreviewCard;
