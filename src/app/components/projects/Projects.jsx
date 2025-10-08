"use client";

import { projectContent } from "@/app/data/homepage/projects";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import styles from "./Projects.module.css";
import Icon from "../svg/Icon";

const Projects = () => {
  const { quizApp, satelliteClassification } = projectContent();
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const cards = [quizApp, satelliteClassification];
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
            <ProjectCard cardDetail={cardDetail} isHovered={isHovered} />
          </div>
        );
      })}

      {/* <div className={styles.ViewFullResume}>
        <a
          href="/archive/projects"
          className={`${styles.LinkTitle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Projects Archive</span>
          <Icon name="arrow" size={20} color="currentColor" />
        </a>
      </div> */}
    </div>
  );
};

export default Projects;
