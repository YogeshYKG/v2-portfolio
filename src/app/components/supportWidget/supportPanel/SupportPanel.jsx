"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./SupportPanel.module.css";

import FormPlugin from "./plugins/FormPlugin";
import ChatPlugin from "./plugins/ChatPlugin";
import FaqPlugin from "./plugins/FaqPlugin";
import AgentPlugin from "./plugins/AgentPlugin";
import DonatePlugin from "./plugins/DonatePlugin";

const PANEL_MAP = {
  donate: {
    title: "Support the Developer ☕",
    component: <DonatePlugin />,
    footer: "Secure payments via Razorpay • UPI • Cards • Wallets",
  },
  bug: {
    title: "Report Issue",
    component: <FormPlugin />,
    footer: "Your report helps improve the experience",
  },
  form: {
    title: "Contact Form",
    component: <FormPlugin hasAttachment={false} />,
    footer: "Typically replies within a few hours",
  },
  chat: {
    title: "Chatbot",
    component: <ChatPlugin />,
    footer: "Instant answers for common questions",
  },
  faq: {
    title: "FAQ",
    component: <FaqPlugin />,
    footer: "Quick answers to common queries",
  },
  agent: {
    title: "Live Agent",
    component: <AgentPlugin />,
    footer: "Connect with a human support agent",
  },
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
          {active?.footer ?? "Typically replies within a few hours"}
        </span>
      </footer>
    </aside>
  );
};

export default SupportPanel;
