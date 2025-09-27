"use client";

import styles from "./Credits.module.css";

const Credits = () => {
  return (
    <div className={styles.creditsContent}>
      <p>
        Loosely designed in Figma with UI/UX guidance from{" "}
        <a
          href="https://www.linkedin.com/in/varun-patel-018a12208/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Varun Patel
        </a>
        , bringing a clean and intuitive interface to life. Coded in{" "}
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visual Studio Code
        </a>{" "}
        using{" "}
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          Next.js
        </a>{" "}
        and SCSS, with smooth deployment via{" "}
        <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
          Vercel
        </a>
        . Typography is set entirely in{" "}
        <a href="https://rsms.me/inter/" target="_blank" rel="noopener noreferrer">
          Inter
        </a>{" "}
        to ensure readability and consistency.
      </p>

      <p>
        Inspired by{" "}
        <a href="https://brittanychiang.com/" target="_blank" rel="noopener noreferrer">
          Brittany Chiang’s portfolio
        </a>
        , this project incorporates thoughtful interactions and subtle animations.
        Icons are sourced from{" "}
        <a href="https://app.iconsax.io/" target="_blank" rel="noopener noreferrer">
          IconSax
        </a>
        , with illustrations and other assets used responsibly under proper licenses.
      </p>

      <p>
        Special thanks to collaborators, open-source contributors, and all the creative minds
        who indirectly influenced the design and implementation of this project. Their work
        helped shape the ideas and execution seen here.
      </p>
    </div>
  );
};

export default Credits;
