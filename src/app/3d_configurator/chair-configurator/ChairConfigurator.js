"use client";

import React from "react";
import Icon from "@/app/components/svg/Icon";
import { useRouter } from "next/navigation";
import styles from "./page.module.css"

const ChairConfigurator = () => {
  const router = useRouter();

  return (
    <div className={styles.pageLayout}>
      <div className={styles.container}>
        <header className={styles.headerContent}>
          <section className={styles.headerSection}>
            <div className={styles.breadCrum} onClick={() => router.push("/3d_configurator")}>
              <Icon
                name="arrow"
                size={20}
                color="currentColor"
                rotate={180 + 45}
              />
              {/* {settings.backNameSpace} */}
              3d Configurator
            </div>
            <div className={styles.title}>
                Chair Configurator
            </div>
          </section>
        </header>

        <main className={styles.mainContent}>
          <section id="projects" className={styles.projectTableSection}>
            
          </section>
        </main>
      </div>
    </div>
  );
};

export default ChairConfigurator;
