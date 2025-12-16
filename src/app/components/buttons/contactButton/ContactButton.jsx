"use client"

import { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Icon from "@/app/components/svg/Icon";
import styles from "./ContactButton.module.css";

const ContactButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(searchParams?.get("support") === "form");

  const toggleForm = () => {
    const params = new URLSearchParams(searchParams);
    if (isOpen) {
      params.delete("support");
    } else {
      params.set("support", "form");
    }
    router.replace(`${pathname}?${params.toString()}`);
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.contactWrapper}>
      <button className={`${styles.contactBtn} ${isOpen ? styles.active : ""}`} onClick={toggleForm}>
        <Icon name="leadcapture" size={18} color="currentColor" />
        <span>Contact Me</span>
      </button>
    </div>
  );
};

export default ContactButton;
