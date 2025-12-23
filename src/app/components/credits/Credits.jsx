"use client";

import styles from "./Credits.module.css";

const Credits = () => {
  return (
    <div className={styles.creditsContent}>
      <p>
        Designed in Figma with UI/UX guidance from{" "}
        <a
          href="https://www.linkedin.com/in/varun-patel-018a12208/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Varun Patel
        </a>
        {" "}and{" "}
        <a
          href="https://x.com/PankajM54346308"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pankaj Maru
        </a>
        , and built using{" "}
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visual Studio Code
        </a>{" "}
        with{" "}
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          Next.js
        </a>{" "}
        and SCSS, deployed seamlessly via{" "}
        <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
          Vercel
        </a>
        . Typography uses{" "}
        <a
          href="https://rsms.me/inter/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Inter
        </a>{" "}
        for clarity and consistency across the interface.
      </p>

      <p>
        Inspired by{" "}
        <a
          href="https://brittanychiang.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brittany Chiang’s portfolio
        </a>
        , featuring subtle animations and thoughtful interactions. Icons are
        from{" "}
        <a
          href="https://app.iconsax.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          IconSax
        </a>{" "}
        , with illustrations and assets used under proper licenses. Grateful to
        collaborators and open-source contributors whose ideas and tools
        influenced this project’s execution.
      </p>
    </div>
  );
};

export default Credits;
