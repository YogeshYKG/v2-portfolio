"use client";

import { experienceContent } from "@/app/data/homepage/experience";
import ExperienceCard from "./ExperienceCard";
import { useState } from "react";
import styles from "./Experience.module.css";
import Icon from "../svg/Icon";

const Experience = () => {
  const { elasticrun, nic } = experienceContent();
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const cards = [elasticrun, nic];

  return (
    <div className={styles.experienceContent}>
      {cards.map((cardDetail, idx) => {
        const isHovered = hoveredIdx === idx;
        const isDimmed = hoveredIdx !== null && hoveredIdx !== idx;

        return (
          <div
            key={idx}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            className={`${styles.experienceContentCard} ${
              isHovered ? styles.active : ""
            } ${isDimmed ? styles.disabled : ""}`}
          >
            <ExperienceCard cardDetail={cardDetail} isHovered={isHovered} />
          </div>
        );
      })}

      <div className={styles.ViewFullResume}>
        <a
          href="https://drive.google.com/file/d/1NFgexoSufcb7OrgQxY0euuh4QC5IliXs/view?usp=drive_link"
          className={`${styles.LinkTitle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Full Resume</span>
          <Icon name="arrow" size={20} color="currentColor" />
        </a>
      </div>
    </div>
  );
};

export default Experience;
