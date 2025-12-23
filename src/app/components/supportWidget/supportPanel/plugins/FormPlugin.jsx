"use client";

import { useState } from "react";
import styles from "./Plugin.module.css";

const FORM_ACTION = "/api/contact";

const FormPlugin = ({ hasAttachment = true }) => {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData(e.target);

      const res = await fetch(FORM_ACTION, {
        method: "POST",
        body: formData, // multipart/form-data
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data?.error || "Submission failed");
      }

      setDone(true);
      e.target.reset();
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className={styles.desc}>
        <p>Thanks! 👋</p>
        <p>I’ll get back to you shortly.</p>
      </div>
    );
  }

  const descText = !hasAttachment
    ? "Have a project, collaboration, or question? Drop a message — I usually reply within a day."
    : "Found a bug or issue on the site? Please describe it below so we can fix it.";

  const textareaPlaceholder = !hasAttachment
    ? "Tell me a bit about what you’re looking for…"
    : "Describe the bug or issue in detail…";

  return (
    <form
      className={`${styles.wrapper} ${styles.form}`}
      onSubmit={handleSubmit}
    >
      <p className={styles.desc}>{descText}</p>

      <input
        name="name"
        placeholder="Your name"
        autoComplete="name"
      />

      <input
        name="email"
        type="email"
        placeholder="Email address"
        autoComplete="email"
        required
      />

      <textarea
        name="message"
        placeholder={textareaPlaceholder}
        required
      />

      {/* 🛑 Honeypot spam protection */}
      <input
        type="text"
        name="honeypot"
        tabIndex="-1"
        autoComplete="off"
        style={{ display: "none" }}
      />

      {/* Page context (optional but useful) */}
      <input
        type="hidden"
        name="pageURL"
        value={typeof window !== "undefined" ? window.location.href : ""}
      />

      {/* Optional attachment */}
      {hasAttachment && (
        <input
          type="file"
          name="attachment"
          accept=".png,.jpg,.jpeg,.pdf,.txt,.log"
        />
      )}

      {error && <p className={styles.error}>{error}</p>}

      <button
        type="submit"
        className={styles.primaryBtn}
        disabled={loading}
      >
        {loading ? (
          <span className={styles.spinner} />
        ) : !hasAttachment ? (
          "Send message"
        ) : (
          "Report Issue"
        )}
      </button>
    </form>
  );
};

export default FormPlugin;
