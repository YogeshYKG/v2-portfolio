"use client";

import React from "react";
import styles from "./Experience.module.css";
import Icon from "@/app/components/svg/Icon";
import { useRouter } from "next/navigation";

const ExperienceCard = ({ cardDetail, isHovered }) => {
  const router = useRouter();
  const {
    tenure,
    role,
    employer,
    employerLink,
    caseStudySlug,
    contributions,
    techStack,
    hyperlinks,
  } = cardDetail;

  const handleCardClick = (caseStudySlug) => {
    if (caseStudySlug) {
      router.push(`/case-study/${caseStudySlug}`);
    }
  };

  return (
    <>
      <div className={styles.leftcol}>
        <div className={styles.tenure}>{tenure}</div>
        {caseStudySlug && (
          <button
            className={`${styles.caseStudySlug} ${
              isHovered ? styles.active : ""
            }`}
            onClick={() => handleCardClick(caseStudySlug)}
          >
            View Case-Study
          </button>
        )}
      </div>
      <div className={styles.rightcol}>
        {/* Role + Employer */}
        <div className={styles.cardTitle}>
          <a
            href={employerLink}
            className={`${styles.cardTitleLink} ${
              isHovered ? styles.active : ""
            }`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              {role} · {employer}
            </span>
            <Icon name="arrow" size={20} color="currentColor" />
          </a>
        </div>

        {/* Contributions */}
        <div className={styles.cardContent}>{contributions}</div>

        {/* Links */}
        <div className={styles.cardLinks}>
          {hyperlinks.map((link, i) => (
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

        {caseStudySlug && (
          <button
            className={`${styles.caseStudySlugResponsive} ${
              isHovered ? styles.active : ""
            }`}
            onClick={() => handleCardClick(caseStudySlug)}
          >
            View Case-Study
          </button>
        )}
      </div>
    </>
  );
};

export default ExperienceCard;
