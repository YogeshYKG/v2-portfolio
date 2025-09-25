"use client";

import { aboutContent } from "@/app/data/homepage/about";
import styles from "./About.module.css";

const About = () => {
  const { paras, hyperlinks } = aboutContent();

  const renderParagraph = (text) => {
    if (!text) return null;

    const linkKeys = Object.keys(hyperlinks).sort(
      (a, b) => b.length - a.length
    );
    const elements = [];
    let remainingText = text;

    while (remainingText.length > 0) {
      let earliestIndex = -1;
      let matchedKey = null;

      // Find earliest occurrence of any key
      for (const key of linkKeys) {
        const idx = remainingText.indexOf(key);
        if (idx !== -1 && (earliestIndex === -1 || idx < earliestIndex)) {
          earliestIndex = idx;
          matchedKey = key;
        }
      }

      if (matchedKey) {
        // Push text before the link
        if (earliestIndex > 0) {
          elements.push(remainingText.slice(0, earliestIndex));
        }

        // Push the link
        elements.push(
          <a
            key={elements.length}
            href={hyperlinks[matchedKey]}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.hyperlink}
          >
            {matchedKey}
          </a>
        );

        // Update remaining text
        remainingText = remainingText.slice(earliestIndex + matchedKey.length);
      } else {
        // No more matches → push the rest
        elements.push(remainingText);
        break;
      }
    }

    return elements;
  };

  return (
    <>
      {Object.values(paras).map((para, idx) => (
        <p key={idx} className={styles.aboutPara}>
          {renderParagraph(para)}
        </p>
      ))}
    </>
  );
};

export default About;
