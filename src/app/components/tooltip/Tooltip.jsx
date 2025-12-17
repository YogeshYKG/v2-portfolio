"use client";

import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./Tooltip.module.css";

const Tooltip = ({ content, children }) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);

  const showTooltip = () => {
    if (!triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();

    setCoords({
      top: rect.top + rect.height / 2,
      left: rect.left - 24,
    });

    setVisible(true);
  };

  const hideTooltip = () => setVisible(false);

  return (
    <>
      <span
        ref={triggerRef}
        className={styles.trigger}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        onTouchStart={(e) => {
          e.stopPropagation(); // prevent button click
          showTooltip();
        }}
        onTouchEnd={() => {
          // optional: auto-hide after tap
          setTimeout(hideTooltip, 1200);
        }}
      >
        {children}
      </span>

      {visible &&
        createPortal(
          <span
            className={`${styles.tooltip} ${styles.visible}`}
            style={{
              top: coords.top,
              left: coords.left,
            }}
            role="tooltip"
          >
            {content}
          </span>,
          document.body
        )}
    </>
  );
};

export default Tooltip;
