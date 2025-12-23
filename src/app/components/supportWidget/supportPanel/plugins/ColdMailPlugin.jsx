"use client";
import { useState, useEffect } from "react";
import styles from "./Plugin.module.css";
import React from "react";

const ColdMailPlugin = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(null);
  const [sentCount, setSentCount] = useState(0);

  // Default values
  const [senderName, setSenderName] = useState("Yogesh Kr. Gupta");
  const [senderTitle, setSenderTitle] = useState("Frontend / MERN Developer");
  const [introMessage, setIntroMessage] = useState(
    "I help startups and businesses turn ideas into reliable web products using React, Next.js, and Three.js."
  );
  const [intentMessage, setIntentMessage] = useState(
    "I’m reaching out to explore opportunities to contribute to your team and projects."
  );
  const [ctaMessage, setCtaMessage] = useState(
    "Would love to discuss how I can contribute to your projects or team."
  );

  // === FIX: Prevent auto-focus when panel opens ===
  useEffect(() => {
    const timer = setTimeout(() => {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return setError("Please upload an Excel file.");
    setLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("lastSent", sentCount);
      formData.append("senderName", senderName);
      formData.append("senderTitle", senderTitle);
      formData.append("introMessage", introMessage);
      formData.append("intentMessage", intentMessage);
      formData.append("ctaMessage", ctaMessage);

      const res = await fetch("/api/cold-mail", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to send emails");

      setSentCount(data.lastSent);
      setDone(true);
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className={styles.desc}>
        <p>✅ Cold emails sent!</p>
        <p>Last sent index: {sentCount}</p>
        <p>Next batch will start from row {sentCount}</p>
      </div>
    );
  }

  const Field = ({ label, children }) => (
    <div
      style={{
        marginBottom: "0.6rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label style={{ fontSize: "0.8rem", marginBottom: "0.2rem" }}>
        {label}
      </label>
      {children}
    </div>
  );

  return (
    <form
      className={`${styles.wrapper} ${styles.form}`}
      onSubmit={handleSubmit}
      autoComplete="off" // Extra safety
    >
      <Field label="Sender Name">
        <input
          type="text"
          value={senderName}
          onChange={(e) => setSenderName(e.target.value)}
        />
      </Field>

      <Field label="Sender Title">
        <input
          type="text"
          value={senderTitle}
          onChange={(e) => setSenderTitle(e.target.value)}
        />
      </Field>

      <Field label="Intro Message">
        <textarea
          value={introMessage}
          onChange={(e) => setIntroMessage(e.target.value)}
        />
      </Field>

      <Field label="Intent Message">
        <textarea
          value={intentMessage}
          onChange={(e) => setIntentMessage(e.target.value)}
        />
      </Field>

      <Field label="CTA Message">
        <textarea
          value={ctaMessage}
          onChange={(e) => setCtaMessage(e.target.value)}
        />
      </Field>

      <Field label="Start From Row (0-based)">
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={sentCount}
          onChange={(e) => {
            const v = e.target.value.replace(/\D/g, ""); // Only allow digits
            setSentCount(Number(v || 0));
          }}
        />
      </Field>

      <Field label="Excel File (.xlsx/.xls)">
        <input
          type="file"
          name="file"
          accept=".xlsx,.xls"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </Field>

      {/* Honeypot spam protection */}
      <input
        type="text"
        name="honeypot"
        tabIndex="-1"
        autoComplete="off"
        style={{ display: "none" }}
      />

      {error && <p className={styles.error}>{error}</p>}

      <button type="submit" className={styles.primaryBtn} disabled={loading}>
        {loading ? <span className={styles.spinner} /> : "Send Cold Emails"}
      </button>
    </form>
  );
};

export default React.memo(ColdMailPlugin);