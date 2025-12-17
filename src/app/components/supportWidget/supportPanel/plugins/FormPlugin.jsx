"use client";

import { useState } from "react";
import styles from "./Plugin.module.css";

const FORM_ACTION = "https://getform.io/f/bjjdjnqb";

const FormPlugin = ({ hasAttachment = true }) => {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    await fetch(FORM_ACTION, {
      method: "POST",
      body: formData,
    });

    setDone(true);
    setLoading(false);
  };

  if (done) {
    return (
      <div className={styles.success}>
        <p>Thanks! 👋</p>
        <p>I’ll get back to you shortly.</p>
      </div>
    );
  }

  // Dynamic content based on hasAttachment
  const descText = !hasAttachment
    ? "Have a project, collaboration, or question? Drop a message — I usually reply within a day."
    : "Found a bug or issue on the site? Please describe it below so we can fix it.";
  const textareaPlaceholder = !hasAttachment
    ? "Tell me a bit about what you’re looking for…"
    : "Describe the bug or issue in detail…";

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <p className={styles.desc}>{descText}</p>

      <input name="name" placeholder="Your name" required />
      <input name="email" type="email" placeholder="Email address" required />
      <textarea
        name="message"
        placeholder={textareaPlaceholder}
        required
      />
      <input
        type="hidden"
        name="pageURL"
        value={typeof window !== "undefined" ? window.location.href : ""}
      />
      {hasAttachment && <input type="file" name="attachment" />}

      <button type="submit" disabled={loading}>
        {loading ? <span className={styles.spinner}></span> : !hasAttachment ? "Send message" : "Report Issue"}
      </button>
    </form>
  );
};

export default FormPlugin;
