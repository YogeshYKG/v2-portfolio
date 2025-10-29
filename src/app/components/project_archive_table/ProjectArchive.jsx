"use client";

import Icon from "@/app/components/svg/Icon";
import styles from "./ProjectArchive.module.css";

const ProjectArchiveTable = ({ tableHeader, tableRows }) => {
  const columns = Object.values(tableHeader);

  return (
    <>
      {/* Header */}
      <div className={`${styles.tableRow} ${styles.tableHeader}`}>
        {columns.map((header, index) => (
          <div key={index} className={styles.tableCell}>
            {header}
          </div>
        ))}
      </div>

      {/* Rows */}
      <div className={styles.tableBody}>
        {tableRows.map((row, i) => (
          <div key={i} className={styles.tableRow}>
            <div className={styles.tableCell}>{row.col1}</div>
            <div className={`${styles.tableCell} ${styles.tableProjectCell}`}>
              {row.col2}
            </div>
            <div className={styles.tableCell}>{row.col3}</div>
            <div className={styles.tableCell}>
              {row.col4.map((item, index) => (
                <span className={styles.col4item} key={index}>
                  {item}
                </span>
              ))}
            </div>
            <div className={styles.tableCell}>
              <a href={row.col5.link} target="_blank" rel="noopener noreferrer">
                {row.col5.label}
                <Icon name="arrow" size={20} color="currentColor" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectArchiveTable;
