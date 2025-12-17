"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./SupportPanel.module.css";

import FormPlugin from "./plugins/FormPlugin";
import ChatPlugin from "./plugins/ChatPlugin";
import FaqPlugin from "./plugins/FaqPlugin";
import AgentPlugin from "./plugins/AgentPlugin";

const PANEL_MAP = {
  bug: { title: "Report Issue", component: <FormPlugin /> },
  form: {
    title: "Contact Form",
    component: <FormPlugin hasAttachment={false} />,
  },
  chat: { title: "Chatbot", component: <ChatPlugin /> },
  faq: { title: "FAQ", component: <FaqPlugin /> },
  agent: { title: "Live Agent", component: <AgentPlugin /> },
};

const SupportPanel = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const mode = searchParams.get("support");
  const isOpen = Boolean(mode);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
    } else {
      const t = setTimeout(() => setMounted(false), 200);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const closePanel = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("support");
    router.replace(`${pathname}?${params.toString()}`);
  };

  if (!mounted) return null;

  const active = PANEL_MAP[mode];

  return (
    <aside
      className={`${styles.panel} ${isOpen ? styles.open : styles.closed}`}
      role="dialog"
    >
      <header className={styles.header}>
        <span className={styles.title}>{active?.title ?? "Support"}</span>

        <button className={styles.close} onClick={closePanel}>
          ✕
        </button>
      </header>

      <section className={styles.body}>{active?.component}</section>

      <footer className={styles.footer}>
        <span className={styles.hint}>
          Typically replies within a few hours
        </span>
      </footer>
    </aside>
  );
};

export default SupportPanel;