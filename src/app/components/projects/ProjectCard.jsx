"use client";

import React from "react";
import styles from "./Projects.module.css";
import Icon from "@/app/components/svg/Icon";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ProjectCard = ({ cardDetail, isHovered }) => {
  const router = useRouter();
  const {
    thumbnail,
    title,
    projectLink,
    contributions,
    techStack,
    milestones,
  } = cardDetail;

  return (
    <>
      <div className={styles.leftcol}>
        <div className={styles.tenure}>
          <a
            href={projectLink}
            className={styles.imagewrapper}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={thumbnail}
              alt={title}
              width={300}
              height={169} // 16:9 ratio
              className={styles.image}
            />
          </a>
        </div>
      </div>
      <div className={styles.rightcol}>
        {/* Role + Employer */}
        <div className={styles.cardTitle}>
          <a
            href={projectLink}
            className={`${styles.cardTitleLink} ${
              isHovered ? styles.active : ""
            }`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{title}</span>
            <Icon name="arrow" size={20} color="currentColor" />
          </a>
        </div>

        {/* Contributions */}
        <div className={styles.cardContent}>{contributions}</div>

        {/* Links */}
        <div className={styles.cardLinks}>
          {milestones.map((link, i) => (
            <a
              key={i}
              className={`${styles.cardLink} ${isHovered ? styles.active : ""}`}
              href={link.link}
              target="_blank"
            >
              <Icon name={link.icon} size={12} color="currentColor" />
              {link.label}
            </a>
          ))}
        </div>

        {/* Tech Stack */}
        <div className={styles.cardTechStack}>
          {techStack.map((tech, i) => (
            <span key={i} className={styles.techChip}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
