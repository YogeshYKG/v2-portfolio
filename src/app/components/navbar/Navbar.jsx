"use client";
import { useState, useEffect, useCallback } from "react";
import styles from "./Navbar.module.css";
import Icon from "@/app/components/svg/Icon";

const navItems = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "3d_configurators", label: "3D CONFIGURATORS" },
];

export default function Navbar() {
  const [navStates, setNavStates] = useState({
    isHover: null,
    isActive: "about", // default first section
  });

  // smooth scroll on click
  const handleScroll = useCallback((id, offset = 80) => {
    const section = document.getElementById(id);
    if (section) {
      const y =
        section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  // scroll spy: detect which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setNavStates((prev) => ({ ...prev, isActive: entry.target.id }));
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: "0px 0px -50% 0px", // trigger a bit earlier
        threshold: 0.25, // 25% of section visible
      }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className={styles.navLinks}>
      {navItems.map((item) => {
        const isHovered = navStates.isHover === item.id;
        const isActive = navStates.isActive === item.id;

        return (
          <div
            key={item.id}
            onClick={() => handleScroll(item.id)}
            onMouseEnter={() =>
              setNavStates((prev) => ({ ...prev, isHover: item.id }))
            }
            onMouseLeave={() =>
              setNavStates((prev) => ({ ...prev, isHover: null }))
            }
            className={styles.navItem}
          >
            <span
              className={`${styles.iconWrapper} ${
                isHovered || isActive ? styles.active : ""
              }`}
            >
              <Icon
                name="line"
                color={
                  isHovered || isActive
                    ? "var(--text-slate)" // active/hover
                    : "var(--text-slate-muted)" // default muted
                }
                width={48}
                height={24}
              />
            </span>
            <span
              className={
                isHovered || isActive ? styles.labelActive : styles.labelMuted
              }
            >
              {item.label}
            </span>
          </div>
        );
      })}

    </div>
  );
}
