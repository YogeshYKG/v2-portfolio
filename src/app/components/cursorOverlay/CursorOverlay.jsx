"use client";
import { useEffect } from "react";
import styles from "./CursorOverlay.module.css";

export default function CursorOverlay() {
  useEffect(() => {
    const overlay = document.querySelector(`.${styles.cursorOverlay}`);
    const handleMouseMove = (e) => {
      overlay.style.setProperty("--x", `${e.clientX}px`);
      overlay.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div className={styles.cursorOverlay} />;
}
