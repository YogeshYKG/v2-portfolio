"use client";

import styles from "./Plugin.module.css";

const PAYMENT_LINKS = [
  { label: "☕ Buy me a tea", amount: "₹49", link: "https://rzp.io/rzp/9OeBMOfc" },
  {
    label: "🍵 Buy me a coffee",
    amount: "₹99",
    link: "https://rzp.io/rzp/Xz9VmVA",
  },
  {
    label: "❤️ Support generously",
    amount: "₹199",
    link: "https://rzp.io/rzp/60v358g",
  },
];

const DonatePlugin = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.desc}>
        If you like my work or it helped you in any way, you can support me with
        a small contribution. It keeps me motivated to build and share more ✨
      </p>

      <div className={styles.options}>
        {PAYMENT_LINKS.map((item) => (
          <button
            key={item.amount}
            className={styles.primaryBtn}
            onClick={() =>
              window.open(item.link, "_blank", "noopener,noreferrer")
            }
          >
            <span>{item.label}</span>
            <strong>{item.amount}</strong>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DonatePlugin;
