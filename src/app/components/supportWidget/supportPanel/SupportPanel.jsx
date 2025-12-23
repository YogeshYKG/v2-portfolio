"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import styles from "./SupportPanel.module.css";

import FormPlugin from "./plugins/FormPlugin";
import ChatPlugin from "./plugins/ChatPlugin";
import FaqPlugin from "./plugins/FaqPlugin";
import AgentPlugin from "./plugins/AgentPlugin";
import DonatePlugin from "./plugins/DonatePlugin";
import ColdMailPlugin from "./plugins/ColdMailPlugin";

const PANEL_MAP = {
  "cold-mail": {
    title: "🥶 Cold OutReach",
    component: <ColdMailPlugin />,
    footer: "🎉 Congrats! You've unlocked a hidden Easter Egg. Use it wisely!",
    secret: true,
  },
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
  const bodyRef = useRef(null);
  const prevScrollPos = useRef(0);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      // Restore previous scroll position when reopening
      if (bodyRef.current && prevScrollPos.current > 0) {
        bodyRef.current.scrollTop = prevScrollPos.current;
      }
    } else {
      // Save scroll position before closing
      if (bodyRef.current) {
        prevScrollPos.current = bodyRef.current.scrollTop;
      }
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
